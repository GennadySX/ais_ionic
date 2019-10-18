import { Component } from '@angular/core';
import axios from 'axios'
import {json} from "@angular-devkit/core";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cabinet',
  templateUrl: 'cabinet.page.html',
  styleUrls: ['cabinet.page.scss']
})



export class CabinetPage {

  password = '';
  login =  '';
  password_up = '';
  login_up =  '';

  constructor(public toastController: ToastController) { }



    SendLogin(login, password) {
      console.log('clicked', login, password)
      let jsonData = {
        "login": login,
        "password": password
      };
      axios.post('http://studentapi.myknitu.ru/auth/', jsonData).then(response => {
        console.log(response.data);
        if (response.data.token) {
          const token =  response.data.token;
          this.presentToast('Вы вошли в систему');
          console.log(token);
          document.cookie="auth_token="+token;
        } else  {
          this.presentToast('Логин или пароль неверные')
        }
      });
    }

SendSignUp(login, password) {
      console.log('clicked', login, password)
      let jsonData = {
        "login": login,
        "password": password
      };
      axios.post('http://studentapi.myknitu.ru/register/', jsonData).then(response => {
        console.log(response.data);
        if (response.data.token) {
          const token =  response.data.token;
          this.presentToast("Операция регстрации прошла успешной")
          console.log(token);
          document.cookie="auth_token="+token;
          // window.location.href = '/admin';
        }
      });
    }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      position: 'middle',
      animated: true,
      duration: 1500,
    });
    toast.present();
  }


}
