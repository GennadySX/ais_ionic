import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {LoginPage} from './login/login.page';
import {IonicStorageModule} from '@ionic/storage';

import {AuthService} from './api/auth.service';
import {HomePage} from './home/home.page';

import {MessagePipe} from './message.pipe';
import {Camera} from '@ionic-native/Camera/ngx';
import {File} from '@ionic-native/File/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Crop} from '@ionic-native/crop/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {MessModalPageModule} from './mess-modal/mess-modal.module';

import {NgxEmojiPickerModule} from 'ngx-emoji-picker';

@NgModule({
    declarations: [AppComponent, MessagePipe],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        MessModalPageModule,
        NgxEmojiPickerModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        Camera,
        File,
        WebView,
        FilePath,
        Crop,
        ImagePicker,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor() {
    }

}
