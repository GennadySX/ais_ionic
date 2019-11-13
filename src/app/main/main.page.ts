import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../api/auth.service';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {MessModalPage} from '../mess-modal/mess-modal.page';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    token: '';
    userList: any[];
    titlePage = 'Главный';
    dataReturned: any;
    Iam: any;
    myId: string;

    constructor(
        private auth: AuthService,
        private storage: Storage,
        private platform: Platform,
        public http: HttpClient,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
        this.getToken();

    }

    async openModal(user) {
        const modal = await this.modalController.create({
            component: MessModalPage,
            componentProps: {
                'user_id': user.id,
                'my_id': this.Iam.id_user,
                'token': this.token,
                'user': user
            },
            animated: false
        });
        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
            }
        });

        return await modal.present();
    }

    getUserList() {

        let load = {
            'token': this.token
        };
        console.log(load);
        axios.post('http://studentapi.myknitu.ru/listusers/', load).then(res => {
            if (res.data.users) {
                this.userList = res.data.users;
                console.log(this.userList);
            }
        });


    }
    getUserData() {
        axios.post('http://studentapi.myknitu.ru/getuser/', {'token': this.token}).then(res => {
            this.Iam = res.data;
        });

    }

    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
            this.getUserList();
            this.getUserData();
        });
        return true;
    }

}
