import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
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
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {
    token = '';
    username = '';
    userData = {};
    input = '';
    img = '';
    imgData = '';

    firstname: '';
    lastname: '';
    userLogin: '';
    phonenumber: '';
    birth: string;
    vk: '';
    skype: '';
    fileImage = '';


    clickedImagePath: any;


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

    ngOnInit() {
        this.getToken();

    }

    /******************************************/

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
            this.changeAvatar(this.fileImage);
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
            this.changeAvatar(this.fileImage);
            // now you can do whatever you want with the base64Image, I chose to update the db

        }, (err) => {
            // Handle error
        });

    }

    /************************************************/


    changeAvatar(image64) {
        axios.post('http://studentapi.myknitu.ru/updateuserimage/', {
            'token': this.token,
            'img': image64
        }).then(res => {
            if (res.data.status) {
                this.notAlert('Оп оп оп ', 'Ваша аватарка изменилась!');
            }
        });
    }

    getMonthIndex(month) {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let returnDate = 0;
        for (let i = 0; i < months.length; i++) {
            if (month === months[i]) {
                returnDate = i + 2;
            }
        }
        return returnDate;
    }

    dateRealiseGetUser(date) {
        const arrDate = date.split(' ');
        //console.log(arrDate)
        const monthIndex = this.getMonthIndex(arrDate[1]);
        if (monthIndex > 0) {
            const joiner = [arrDate[2], monthIndex, arrDate[0]];
            this.birth = joiner.join('.');
        }
        console.log(this.birth);
    }


    dateRealise(date) {
        let nDate = new Date(date);
        let month = parseInt(nDate.getMonth().toString());
        return String(nDate.getDate() + '.' + (month++) + '.' + nDate.getFullYear());
    }


    changeListener($event) {


    }


    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Данный токен',
            subHeader: '',
            message: this.token,
            buttons: ['Закрыть']
        });

        await alert.present();
    }


    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
            this.getUserData();

        });
        return true;
    }

    getUserData() {
        //console.log('axios token ', this.token);
        const tokenLog = {'token': this.token};
        axios.post('http://studentapi.myknitu.ru/getuser/', tokenLog).then(res => {
            console.log(res.data);
            if (res.data) {
                let user = res.data;
                this.username = user.login;
                this.userData = user;
                this.fileImage = user.img;
                this.userLogin = user.login;
                this.firstname = user.user;
                this.lastname = user.family;
                this.dateRealiseGetUser(user.birthday);
                this.phonenumber = user.phonenumber;
                this.vk = user.vk;
                this.skype = user.skype;

            }

        });

    }


    updateUser() {

        const birthDate = this.dateRealise(this.birth);
        console.log(this.birth);
        axios.post('http://studentapi.myknitu.ru/userupdate/', {
            'token': this.token,
            'nameuser': this.firstname,
            'family': this.lastname,
            'birthday': birthDate,
            'phonenumber': this.phonenumber,
            'vk': 'http://vk.com',
            'skype': 'loginskype'
        }).then(res => {
            if (res.data) {
                console.log(res.data);
                if (res.data.status) {
                    this.notAlert('Обновление', 'Ваши данные обновились!');
                }
            } else {
                this.notAlert('Ошибка', 'Проверьте данные для доступности сервера');

            }
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


    logout() {
        this.authService.logout();
    }

}
