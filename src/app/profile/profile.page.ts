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
    token = '';
    username = '';
    userData = {};

    constructor(
        private authGuard: AuthGuard,
        private authService: AuthService,
        private storage: Storage
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
            console.log('init token ', this.token);
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
}
