import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ToastController, Platform} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);

  loginHref = '';

  constructor(
      private router: Router,
      private storage: Storage,
      private platform: Platform,
      private toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }



  ifLoggedIn() {
    this.storage.get('token').then((res) => {
      if (res) {
        this.authState.next(true);
      }
    });
  }



  login(token) {
    this.storage.set('token', token).then((res) => {
      this.router.navigate(['home']);
      this.authState.next(true);
    });
  }


  logout() {
    this.storage.remove('token').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }


  isAuthecticated() {
    return this.authState.value;
  }
}
