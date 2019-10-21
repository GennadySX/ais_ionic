import {Component, OnInit} from '@angular/core';
import {AuthService} from '../api/auth.service';
import {AuthGuard} from '../api/auth.guard';
import {Storage} from '@ionic/storage';
import axios from 'axios';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    token = '1711a44a-bd0f-4f30-a5e1-71d5b0b2cad7';
    username = '';
    userData = {};

    constructor(
        private authGuard: AuthGuard,
        private authService: AuthService,
        private storage: Storage
    ) {
    }

    ngOnInit() {
        if (this.getToken()) {
            this.getUserData();
        }

    }

    logout() {
        this.authService.logout();
    }

    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
            console.log(value);
        });
        return this.token;
    }

    getUserData() {

        const tokenLog = {'token': this.token};
        axios.post('http://studentapi.myknitu.ru/getuser/', tokenLog).then(res => {
            console.log(res.data);
            if (res.data) {
                this.username = res.data.login;
                this.userData = res.data;
            }
        });
    }
}
