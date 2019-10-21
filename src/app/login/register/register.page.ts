import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {AuthService} from '../../api/auth.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


    email: '';
    password: '';

    constructor(
        private authService: AuthService,
    ) {
    }

    ngOnInit() {
    }


    signUp() {
        if (this.email && this.password) {
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
        }
    }
}
