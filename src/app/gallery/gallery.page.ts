import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PhotoViewer} from '@ionic-native/photo-viewer';
import {AuthService} from '../api/auth.service';
import {AuthGuard} from '../api/auth.guard';
import {Storage} from '@ionic/storage';
import axios from 'axios';
import {AlertController} from '@ionic/angular';
import {FileUploader, FileLikeObject} from 'ng2-file-upload';
import {Camera, CameraOptions, PictureSourceType} from '@ionic-native/Camera/ngx';
import {ActionSheetController, ToastController, Platform, LoadingController} from '@ionic/angular';
import {File, FileEntry} from '@ionic-native/File/ngx';
import {HttpClient} from '@angular/common/http';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {finalize} from 'rxjs/operators';
import {concat} from 'rxjs';
import {Crop} from '@ionic-native/crop/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.page.html',
    styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

    constructor(
        private authGuard: AuthGuard,
        private authService: AuthService,
        private storage: Storage,
        public  alertController: AlertController,
        private camera: Camera,
        private file: File,
        private http: HttpClient,
        private webview: WebView,
        private actionSheetController: ActionSheetController,
        private toastController: ToastController,
        private plt: Platform,
        private loadingController: LoadingController,
        private ref: ChangeDetectorRef,
        private filePath: FilePath,
        private crop: Crop,
        private imagePicker: ImagePicker,
    ) {
    }

    titlePage = 'Галерея';
    images: any[];
    img = '';
    imgData = '';
    fileImage = '';

    ngOnInit() {
        this.getGellery();
    }


    getGellery() {
        axios.get('http://studentapi.myknitu.ru').then(res => {
            if (res.data && res.data.images) {
                this.images = res.data.images.reverse();
            }
        });
    }


    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Выберите способ загрузки',
            buttons: [{
                text: 'из Галерея',
                handler: () => {
                    this.getPhoto(0);
                }
            },
                {
                    text: 'Камера',
                    handler: () => {
                        this.getFromCamera();
                    }
                },
                {
                    text: 'Отмена',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }

    getFromCamera() {
        const options: CameraOptions = {
            quality: 100,
            targetHeight: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: 0,
            correctOrientation: true,
            allowEdit: true,
        };

        this.camera.getPicture(options).then((imageData) => {
            this.fileImage = 'data:image/jpeg;base64,' + imageData;
            this.uploadImage(this.fileImage);
        }, (err) => {
        });
    }

    async getPhoto(sourceType: number) {
        const options: CameraOptions = {
            quality: 100,
            targetHeight: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            allowEdit: true
        };

        this.camera.getPicture(options).then((imageData) => {
            this.fileImage = 'data:image/jpeg;base64,' + imageData;
            this.uploadImage(this.fileImage);
            // now you can do whatever you want with the base64Image, I chose to update the db

        }, (err) => {
            // Handle error
        });

    }

    /************************************************/


   async uploadImage(image64) {

        const imgDat = new FormData();
        imgDat.append('image', image64);
        await axios.post('http://studentapi.myknitu.ru/send2/', imgDat, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        }).then(res => {
            this.notAlert('Оп оп оп ', 'Ваша картинка загружена!');
            this.getGellery();
        });
    }


    async notAlert(title, mess) {
        const alert = await this.alertController.create({
            header: title,
            subHeader: '',
            message: mess,
            buttons: ['Закрыть']
        });

        await alert.present();
    }

}
