import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LoginPage} from './login/login.page';
import {FormComponent} from './login/form/form.component';
import {RegisterComponent} from './login/register/register.component';

import {AuthGuard} from './auth.guard';
import {AuthService} from './api/auth.service';
import {AuthUserService} from './api/auth-user.service';

@NgModule({
  declarations: [AppComponent, FormComponent, RegisterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
      AuthGuard,
      AuthService,
      AuthUserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, RegisterComponent, FormComponent]
})
export class AppModule {}
