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
        private authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    loginUser() {

        if (this.email && this.password) {
            const logData = {
                email: this.email,
                password: this.password
            };

            console.log('result: ', this.email, this.password);
            /* axios.post(this.authService.loginHref, logData).then(res => {
                 if (res.data.token) {
                     this.authService.login(res.data.token);
                 }
             });*/
        }
    }
}
