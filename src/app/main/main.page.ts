import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from "../api/auth.service";
import {Storage} from "@ionic/storage";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  token: '';
  userList: any[];
  constructor(
      private auth: AuthService,
      private storage: Storage,
      private platform: Platform,
      public http: HttpClient,

  ) { }

  ngOnInit() {
    this.getToken()

  }

  getUserList() {

    let load = {
      "token": this.token
    }
    console.log(load)
    /*axios.post("http://studentapi.myknitu.ru/listusers/", load).then( res => {
      if (res.data.users){
        this.userList = res.data.users;
        console.log(this.userList)
      }
    })*/
    this.http.post("http://studentapi.myknitu.ru/listusers/", load).subscribe(res => {
      console.log(res)
      if (res.users) {
        this.userList = res.users;
        console.log(this.userList);
      }
    });


  }



  getToken() {
    this.storage.get('token').then((value) => {
      this.token = value;
       //console.log('init token ', this.token);
      this.getUserList();
    });
    return true;
  }

}
