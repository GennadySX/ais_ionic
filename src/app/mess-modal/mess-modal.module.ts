import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgxEmojiPickerModule} from 'ngx-emoji-picker';
import { IonicModule } from '@ionic/angular';

import { MessModalPage } from './mess-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MessModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxEmojiPickerModule
  ],
  declarations: [MessModalPage]
})
export class MessModalPageModule {}
