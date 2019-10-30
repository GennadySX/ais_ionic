import {Component, OnInit} from '@angular/core';
import {AuthService} from '../api/auth.service';
import axios from 'axios';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    email: '';
    password: '';

    constructor(
        private authService: AuthService,
        public alertController: AlertController

    ) {
    }

    ngOnInit() {
    }



    loginUser() {

        if (this.email && this.password) {
            const logData = {
                "login": this.email,
                "password": this.password}
            console.log('result: ', this.email, this.password);
            axios.post(this.authService.href.login, logData).then(res => {
                console.log(res.data)
                if (res.data) {
                if (res.data.token) {
                    this.authService.login(res.data.token);
                } else {
                    this.presentAlert();
                }
                } else {
                    this.presentAlert();
                }
            });
        }
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Ошибка',
            subHeader: '',
            message: "Не верный логин или пароль!",
            buttons: ['Закрыть']
        });

        await alert.present();
    }



}
