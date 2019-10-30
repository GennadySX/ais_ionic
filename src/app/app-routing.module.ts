import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './api/auth.guard';

const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module')
            .then(m => m.HomePageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadChildren: () => import('./login/register/register.module')
            .then(m => m.RegisterPageModule)
    },  { path: 'message', loadChildren: './message/message.module#MessagePageModule' }

];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
