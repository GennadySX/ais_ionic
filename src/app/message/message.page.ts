import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../api/auth.service';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {MessModalPage} from '../mess-modal/mess-modal.page';

@Component({
    selector: 'app-message',
    templateUrl: './message.page.html',
    styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

    titlePage = 'Сообщение';
    dataReturned: any;
    token: '';
    userList: any[];

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

    async openModal(id) {
        const modal = await this.modalController.create({
            component: MessModalPage,
            componentProps: {
                "paramID": id,
                "paramTitle": "Test Title"
            },
            animated: false
        });
        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
                //alert('Modal Sent Data :'+ dataReturned);
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


    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
            //console.log('init token ', this.token);
            this.getUserList();
        });
        return true;
    }


}
