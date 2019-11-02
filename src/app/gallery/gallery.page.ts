import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {PhotoViewer} from '@ionic-native/photo-viewer';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.page.html',
    styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

    constructor(
    ) {
    }

    titlePage = 'Галерея';
    images: any[];

    ngOnInit() {
        this.getGellery();
    }


    getGellery() {
        axios.get('http://studentapi.myknitu.ru').then(res => {
            if (res.data && res.data.images) {
                this.images = res.data.images;
            }
        });
    }

    viwer() {
        PhotoViewer.show('http://studentapi.myknitu.ru/media/Images/1542720020201.jpg', 'Optional Title');
    }


}
