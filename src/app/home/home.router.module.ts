import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../profile/profile.module').then(m => m.ProfilePageModule)
                    }
                ],
            },
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
                    }
                ]
            },
            {
                path: 'gallery',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/main',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {}
