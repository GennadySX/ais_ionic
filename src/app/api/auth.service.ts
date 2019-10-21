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
    this.storage.get('USER_INFO').then((res) => {
      if (res) {
        this.authState.next(true);
      }
    });
  }



  login() {
    const dummy_res =  {
      user_id: '007',
      user_name: 'test'
    };
    this.storage.set('USER_INFO', dummy_res).then((res) => {
      this.router.navigate(['dashboard']);
      this.authState.next(true);
    });
  }


  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }


  isAuthecticated() {
    return this.authState.value;
  }
}
