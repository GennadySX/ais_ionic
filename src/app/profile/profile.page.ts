import { Component, OnInit } from '@angular/core';
import {AuthService} from '../api/auth.service';
import {AuthGuard} from '../api/auth.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
      private authGuard: AuthGuard,
      private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }


}
