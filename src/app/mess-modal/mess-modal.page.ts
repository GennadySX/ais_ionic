import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import axios from 'axios';
import {AuthService} from '../api/auth.service';
import {AuthGuard} from '../api/auth.guard';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-mess-modal',
    templateUrl: './mess-modal.page.html',
    styleUrls: ['./mess-modal.page.scss'],
})
export class MessModalPage implements OnInit {
    token = '';
    user_id: number;
    my_id: number;
    toggled: boolean = false;
    message: string;
    messList: any[];
    user: any;
    user_name;
    notMess: boolean = false;

    constructor(
        private modalController: ModalController,
        private navParams: NavParams,
        private authGuard: AuthGuard,
        private authService: AuthService,
        private storage: Storage,
    ) {
    }

    ngOnInit() {
        this.user_id = this.navParams.data.user_id;
        this.my_id = this.navParams.data.my_id;
        this.token = this.navParams.data.token;
        this.user = this.navParams.data.user;
        this.messLists(this.user_id);
        this.realizeIt(this.user);
        console.table('data: ', this.navParams.data);
    }

    realizeIt(user) {
        if (user.user.toString().length > 0) {
            this.user_name = user.user + ' ' + user.family;
        } else {
            this.user_name = 'Без имени';
        }
    }

    async closeModal() {
        const onClosedData: string = 'Wrapped Up!';
        await this.modalController.dismiss(onClosedData);
    }


    handleSelection(event) {
        this.message = this.message + '' + event.char;

    }

    async messLists(id, mess = '') {
        let redata = [];
        await axios.post('http://studentapi.myknitu.ru/getdialog/', {
            'token': this.token,
            'userto': id
        }).then(res => {
            if (res.data.messages) {
                console.log(res.data);
                if (res.data.messages[0]) {
                    this.messList = res.data.messages;
                    console.log(res.data.messages);
                }
            }
        });

    }

    pushMsg(text) {
        this.messList.push({
                'to_id': this.user_id,
                'message': text,
                'from_id': this.my_id
            },
        );
    }

    sendIt(e) {
        console.log('sending ', this.token);

        axios.post('http://studentapi.myknitu.ru/sendmessage/', {
            'token': this.token,
            'userto': this.user_id,
            'message': this.message
        }).then(res => {
            console.log(res.data.status);
            if (res.data.status) {
                if (this.messList ) {
                    this.pushMsg(this.message);
                } else {
                    this.messList = [
                        {
                        'to_id': this.user_id,
                        'message': this.message,
                        'from_id': this.my_id
                    }
                    ];
                }
                this.message = '';
            }

        });
    }


}
