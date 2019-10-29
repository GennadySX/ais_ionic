import {Component, OnInit} from '@angular/core';
import {AuthService} from '../api/auth.service';
import {AuthGuard} from '../api/auth.guard';
import {Storage} from '@ionic/storage';
import axios from 'axios';
import {MainPage} from "../main/main.page";

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

    constructor(
        private authGuard: AuthGuard,
        private authService: AuthService,
        private storage: Storage,
    ) {
    }

    ngOnInit() {
        this.getToken();
    }


    logout() {
        this.authService.logout();
    }

    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
           // console.log('init token ', this.token);
            this.getUserData()

        });
        return true;
    }

    getUserData() {
        console.log('axios token ', this.token);
        const tokenLog = {'token': this.token};
        axios.post('http://studentapi.myknitu.ru/getuser/', tokenLog).then(res => {
            console.log(res.data);
            if (res.data) {
                this.username = res.data.login;
                this.userData = res.data;
            }
        });
    }


    getFile() {
        this.input = document.createElement('input');
        this.input.type = 'file';
        this.input.accept = 'image/*';

        this.input.onchange = e => {
            this.img = e.target.files[0];
            this.imgtoBase64(this.img, this.token)
        }
        this.input.click();
    }

    imgtoBase64(file, token) {
        var reader = new FileReader();
        reader.onload = function () {
            let imgLog;
            if (reader.result) {
                imgLog = {
                    "token": token,
                    "img": reader.result
                };
                console.log(imgLog);
                axios.post('http://studentapi.myknitu.ru/updateuserimage/', imgLog).then(res => {
                    console.log(res.data);
                    if (res.data.status) {
                        window.location.reload()
                    }
                })
            }
        };
        reader.readAsDataURL(file)
    }

    checkFile() {
        console.log(this.input)
    }
}
