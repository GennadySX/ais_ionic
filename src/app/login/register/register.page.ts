import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {AuthService} from '../../api/auth.service';
import {AlertController} from '@ionic/angular';


@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


    email: '';
    password: '';
    confirmPassword: '';

    constructor(
        private authService: AuthService,
        public alertController: AlertController

    ) {
    }

    ngOnInit() {
    }


    signUp() {
        if (this.email && this.password && this.confirmPassword) {
            if (this.confirmPassword === this.password) {
            const logData = {
                "login": this.email,
                "password": this.password
            };

            console.log('result: ', this.email, this.password);
            axios.post(this.authService.href.register, logData).then(res => {
                console.log(res.data);
                if (res.data.token) {
                    this.authService.login(res.data.token);
                }
            });
            } else {
                this.passwordAlert();
            }
        } else {
            this.fieldError();
        }
    }


    async passwordAlert() {
        const alert = await this.alertController.create({
            header: 'Ошибка',
            subHeader: '',
            message: "Пароли не совпадают, будьте уверен вводимых паролей!",
            buttons: ['Закрыть']
        });

        await alert.present();
    }
    async fieldError() {
        const alert = await this.alertController.create({
            header: 'Ошибка',
            subHeader: '',
            message: "Заполните все поля!",
            buttons: ['Закрыть']
        });

        await alert.present();
    }

}
