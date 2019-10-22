import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthService} from './api/auth.service';
import {AuthGuard} from './api/auth.guard';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private authGuard: AuthGuard,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.authService.authState.subscribe(state => {
                if (state) {
                    this.router.navigate(['home/profile']);
                }
            });
        });
    }
}
