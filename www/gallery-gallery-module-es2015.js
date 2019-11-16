(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <div class=\"head_panel\">\n          <ion-title>{{titlePage}}</ion-title>\n          <button (click)=\"selectImage()\"> <ion-icon name=\"add-circle\"></ion-icon></button>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"images\">\n      <div class=\"card-image\">\n        <img [src]=\"image.img\"  alt=\"\" *ngFor=\"let image of images; let index\"   >\n      </div>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");







const routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]
    }
];
let GalleryPageModule = class GalleryPageModule {
};
GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })
], GalleryPageModule);



/***/ }),

/***/ "./src/app/gallery/gallery.page.scss":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header .head_panel {\n  display: -webkit-box;\n  display: flex;\n}\nion-header .head_panel button {\n  background: transparent;\n  color: #35ff99;\n  box-shadow: 0px 0px 10px #35ff99;\n  --background: transparent;\n  margin-right: 10px;\n  font-size: 2.7rem;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  outline: none;\n}\nion-header .head_panel button ion-icon {\n  position: relative;\n  outline: none;\n  -webkit-transform: translate(-23%, -10%);\n          transform: translate(-23%, -10%);\n}\nion-header ion-toolbar {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  --background: #1f2229;\n  color: #fcfaff;\n  box-shadow: #172029 0 0 15px;\n}\nion-content {\n  --background: #292d34;\n}\nion-content .card-image {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n}\nion-content .card-image img {\n  width: 45vw;\n  height: 45vw;\n  box-shadow: #0c1721 1px 1px 15px;\n  margin-top: 10px;\n  border-radius: 3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxcZ2FsbGVyeVxcZ2FsbGVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNESjtBREVJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0FOO0FEQ007RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ1I7QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNESjtBREtBO0VBRUUscUJBQUE7QUNIRjtBREtFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxlQUFBO0FDSEo7QURJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWhlYWRlciB7XG4gIC5oZWFkX3BhbmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAjMzVmZjk5O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMzNWZmOTk7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAyLjdyZW07XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzJSwgLTEwJSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcbiAgICBjb2xvcjogI2ZjZmFmZjtcbiAgICBib3gtc2hhZG93OiAjMTcyMDI5IDAgMCAxNXB4O1xuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ19ia2cuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIC0tYmFja2dyb3VuZDogIzI5MmQzNDtcblxuICAuY2FyZC1pbWFnZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0NXZ3O1xuICAgICAgaGVpZ2h0OiA0NXZ3O1xuICAgICAgYm94LXNoYWRvdzogIzBjMTcyMSAxcHggMXB4IDE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC8vYm94LXNoYWRvdzogIzNkNDA0OCAwIDVweCAxMHB4O1xuXG4gIH1cblxufVxuXG5cbiIsImlvbi1oZWFkZXIgLmhlYWRfcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLWhlYWRlciAuaGVhZF9wYW5lbCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzNWZmOTk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMzVmZjk5O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi43cmVtO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pb24taGVhZGVyIC5oZWFkX3BhbmVsIGJ1dHRvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzJSwgLTEwJSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcbiAgY29sb3I6ICNmY2ZhZmY7XG4gIGJveC1zaGFkb3c6ICMxNzIwMjkgMCAwIDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyZDM0O1xufVxuaW9uLWNvbnRlbnQgLmNhcmQtaW1hZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbmlvbi1jb250ZW50IC5jYXJkLWltYWdlIGltZyB7XG4gIHdpZHRoOiA0NXZ3O1xuICBoZWlnaHQ6IDQ1dnc7XG4gIGJveC1zaGFkb3c6ICMwYzE3MjEgMXB4IDFweCAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/gallery.page.ts":
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _api_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth.guard */ "./src/app/api/auth.guard.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");















let GalleryPage = class GalleryPage {
    constructor(authGuard, authService, storage, alertController, camera, file, http, webview, actionSheetController, toastController, plt, loadingController, ref, filePath, crop, imagePicker) {
        this.authGuard = authGuard;
        this.authService = authService;
        this.storage = storage;
        this.alertController = alertController;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.crop = crop;
        this.imagePicker = imagePicker;
        this.titlePage = 'Галерея';
        this.img = '';
        this.imgData = '';
        this.fileImage = '';
    }
    ngOnInit() {
        this.getGellery();
    }
    getGellery() {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://studentapi.myknitu.ru').then(res => {
            if (res.data && res.data.images) {
                this.images = res.data.images.reverse();
            }
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Выберите способ загрузки',
                buttons: [{
                        text: 'из Галерея',
                        handler: () => {
                            this.getPhoto(0);
                        }
                    },
                    {
                        text: 'Камера',
                        handler: () => {
                            this.getFromCamera();
                        }
                    },
                    {
                        text: 'Отмена',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    getFromCamera() {
        const options = {
            quality: 100,
            targetHeight: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: 0,
            correctOrientation: true,
            allowEdit: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.fileImage = 'data:image/jpeg;base64,' + imageData;
            this.uploadImage(this.fileImage);
        }, (err) => {
        });
    }
    getPhoto(sourceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                targetHeight: 300,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: sourceType,
                saveToPhotoAlbum: false,
                allowEdit: true
            };
            this.camera.getPicture(options).then((imageData) => {
                this.fileImage = 'data:image/jpeg;base64,' + imageData;
                this.uploadImage(this.fileImage);
                // now you can do whatever you want with the base64Image, I chose to update the db
            }, (err) => {
                // Handle error
            });
        });
    }
    /************************************************/
    uploadImage(image64) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const imgDat = new FormData();
            imgDat.append('image', image64);
            yield axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://studentapi.myknitu.ru/send2/', imgDat, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }).then(res => {
                this.notAlert('Оп оп оп ', 'Ваша картинка загружена!');
                this.getGellery();
            });
        });
    }
    notAlert(title, mess) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                subHeader: '',
                message: mess,
                buttons: ['Закрыть']
            });
            yield alert.present();
        });
    }
};
GalleryPage.ctorParameters = () => [
    { type: _api_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"] },
    { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__["Crop"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"] }
];
GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(/*! raw-loader!./gallery.page.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.page.html"),
        styles: [__webpack_require__(/*! ./gallery.page.scss */ "./src/app/gallery/gallery.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
        _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__["Crop"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"]])
], GalleryPage);



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module-es2015.js.map