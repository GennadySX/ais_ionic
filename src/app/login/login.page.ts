import {Component, OnInit} from '@angular/core';
import {AuthService} from '../api/auth.service';
import axios from 'axios';

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
    ) {
    }

    ngOnInit() {
    }

    loginUser() {

        if (this.email && this.password) {
            const logData = {"login":"as@as.as",
                "password":"123456"}



            console.log('result: ', this.email, this.password);
            axios.post(this.authService.href.login, logData).then(res => {
                console.log(res.data)
                if (res.data.token) {
                    this.authService.login(res.data.token);
                }
            });
        }
    }
}
