import {Component, OnInit} from '@angular/core';
import {AuthService} from '../api/auth.service';
import {AuthGuard} from '../api/auth.guard';
import {Storage} from '@ionic/storage';
import axios from 'axios';
import {AlertController} from '@ionic/angular';
import {FileUploader, FileLikeObject} from 'ng2-file-upload';
import { concat } from  'rxjs';

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
    birth: '';
    vk: '';
    skype: '';


    public fileUploader: FileUploader = new FileUploader({});
    public hasBaseDropZoneOver: boolean = false;

    constructor(
        private authGuard: AuthGuard,
        private authService: AuthService,
        private storage: Storage,
        public alertController: AlertController,
    ) {
    }

    ngOnInit() {
        this.getToken();
    }


    fileOverBase(event): void {
        this.hasBaseDropZoneOver = event;
    }
    getFiles(): FileLikeObject[] {
        return this.fileUploader.queue.map((fileItem) => {
            return fileItem.file;

        });
    }


    uploadFiles() {

        let files = this.getFiles();
        let requests = [];

        files.forEach((file) => {
            let formData = new FormData();
            formData.append('file' , file.rawFile, file.name);
            requests.push(this.uploadingService.uploadFormData(formData));

        });

        concat(...requests).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }





        logout() {
        this.authService.logout();
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
        console.log('axios token ', this.token);
        const tokenLog = {'token': this.token};
        axios.post('http://studentapi.myknitu.ru/getuser/', tokenLog).then(res => {
            console.log(res.data);
            if (res.data) {
                let user = res.data;
                this.username = user.login;
                this.userData = user;
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

    getMonthIndex(month) {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let returnDate = 0;
        for (let i = 0; i < months.length; i++) {
            if (month === months[i]) {
                returnDate = i + 1;
            }
        }
        return returnDate;
    }

    dateRealiseGetUser(date) {
        const arrDate = date.split(' ');
        //console.log(arrDate)
        const monthIndex = this.getMonthIndex(arrDate[1]);
        if (monthIndex > 0) {
            //this.birth = arrDate[2].toString()+"-"+monthIndex.toString()+'-'+arrDate[0].toString();
        }
        //console.log(this.birth)
    }


    dateRealise(date) {
        let nDate = new Date(date);
        //return nDate.getDate() + '.' + ( parseInt(nDate.getMonth())+1) + '.' + nDate.getFullYear();
    }

    dateSetRealise(date) {
        return new Date(date);
    }

    updateUser() {

        const birthDate = this.dateRealise(this.birth);
        //console.log(birthDate);
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

    getFile() {

    }


    imgtoBase64(file, token) {

    }

    checkFile() {
        console.log(this.input);
    }
}
