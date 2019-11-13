import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../api/auth.service';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {MessModalPage} from '../mess-modal/mess-modal.page';
import {forEach} from '@angular-devkit/schematics';

@Component({
    selector: 'app-message',
    templateUrl: './message.page.html',
    styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

    titlePage = 'Сообщение';
    dataReturned: any;
    token: '';
    userList: [];
    Iam: any;
    my_id: string;


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
                'user_id': id,
                'my_id': this.Iam.id_user,
                'token': this.token
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


    getUserData() {
        axios.post('http://studentapi.myknitu.ru/getuser/', {'token': this.token}).then(res => {
            this.Iam = res.data;
        });

    }


    async  getUserList() {
        let load = {
            'token': this.token
        };
        console.log(load);
      axios.post('http://studentapi.myknitu.ru/listusers/', load).then(res => {
            if (res.data.users) {
              this.checkMessages(res.data.users);
            }
        });
    }


    async checkMessages(userlist) {
        let userdata = [];
        for (let user of userlist) {
            const load = {
                     'token': this.token,
                    'userto': user.id
            }
          axios.post('http://studentapi.myknitu.ru/getdialog/', load).then(res => {
                if (res.data.messages ) {
                    if (res.data.messages[0]) {
                        userdata.push(user);
                    }
                }
            });
        }
        this.userList = userdata;
    }

    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
            //console.log('init token ', this.token);
            this.getUserList();
            this.getUserData();

        });
        return true;
    }


}
