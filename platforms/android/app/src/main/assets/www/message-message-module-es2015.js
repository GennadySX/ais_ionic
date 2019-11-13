(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/message/message.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/message/message.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{titlePage}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"updateList($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card   *ngFor=\"let user of userList; index as i\" [attr.data-index]=\"i\" class=\"d-flex message-card\" (click)=\"openModal(user)\">\n    <div class=\"card-image\">\n      <img [src]=\"user.img\"  alt=\"\">\n    </div>\n    <div class=\"card-info\">\n      <p class=\"user-lastname\" *ngIf=\"user.family && user.user; else userFamily\">{{user.user}} {{user.family}}</p>\n      <ng-template #userFamily> <p class=\"user-lastname\" >Без имени </p> </ng-template>\n      <ion-badge>{{user.id}}</ion-badge>\n    </div>\n\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-emoji-picker */ "./node_modules/ngx-emoji-picker/fesm2015/ngx-emoji-picker.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message.page */ "./src/app/message/message.page.ts");








const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_7__["MessagePage"]
    }
];
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_5__["NgxEmojiPickerModule"]
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_7__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "./src/app/message/message.page.scss":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #fcfaff;\n  box-shadow: #172029 0 0 15px;\n}\n\nion-content {\n  --background: #1f2229;\n}\n\nion-content ion-card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  box-shadow: none;\n  border: none;\n}\n\nion-content ion-card .card-info {\n  background: #1f2229;\n  width: 100%;\n  border-bottom: 0.7px solid rgba(128, 128, 128, 0.5);\n}\n\nion-content ion-card .card-info ion-badge {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: #28e070;\n  color: #0c1721;\n}\n\nion-content ion-card .card-info p {\n  width: 100%;\n  position: relative;\n  left: 15px;\n}\n\nion-content ion-card .card-image {\n  background: transparent;\n  border: none;\n}\n\nion-content ion-card .card-image img {\n  width: 90px;\n  border-radius: 50%;\n}\n\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\n\nion-button {\n  position: relative;\n  left: 47%;\n  top: 140px;\n  font-size: 1.4rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  box-shadow: #6d9160 0 0 5px;\n  --background: #6d9160;\n}\n\nion-button:focus {\n  background: #4c8dff;\n}\n\na {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 49%;\n  top: 52%;\n  font-size: 1rem;\n  color: #fcfaff;\n  text-shadow: 0 0 15px #fcfaff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxcbWVzc2FnZVxcbWVzc2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RKOztBREtBO0VBRUUscUJBQUE7QUNIRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FES0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtREFBQTtBQ0hOOztBRElNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRElNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZSOztBRFFJO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDTk47O0FET007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNMUjs7QURTSTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7QUNQTjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ2JGOztBRGdCQTtFQUNFLG1CQUFBO0FDYkY7O0FEaUJBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcclxuICAgIGNvbG9yOiAjZmNmYWZmO1xyXG4gICAgYm94LXNoYWRvdzogIzE3MjAyOSAwIDAgMTVweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9nX2JrZy5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgO1xyXG4gICAgLmNhcmQtaW5mbyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxZjIyMjk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjdweCBzb2xpZCByZ2JhKGdyYXksIDAuNSk7XHJcbiAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjhlMDcwO1xyXG4gICAgICAgIGNvbG9yOiAjMGMxNzIxO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWZpcnN0bmFtZSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKCNmZmYsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAvL2JveC1zaGFkb3c6ICMzZDQwNDggMCA1cHggMTBweDtcclxuXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA0NyU7XHJcbiAgdG9wOiAxNDBweDtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYm94LXNoYWRvdzogIzZkOTE2MCAwIDAgNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzZkOTE2MDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogIzRjOGRmZjtcclxufVxyXG5cclxuXHJcbmEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgbGVmdDogNDklO1xyXG4gIHRvcDogNTIlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogI2ZjZmFmZjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI2ZjZmFmZjtcclxufVxyXG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICBjb2xvcjogI2ZjZmFmZjtcbiAgYm94LXNoYWRvdzogIzE3MjAyOSAwIDAgMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmNhcmQtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICMxZjIyMjk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAwLjdweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbmZvIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzI4ZTA3MDtcbiAgY29sb3I6ICMwYzE3MjE7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbmZvIHAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmNhcmQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmNhcmQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0NyU7XG4gIHRvcDogMTQwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJveC1zaGFkb3c6ICM2ZDkxNjAgMCAwIDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNmQ5MTYwO1xufVxuXG5pb24tYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzRjOGRmZjtcbn1cblxuYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA0OSU7XG4gIHRvcDogNTIlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjZmNmYWZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI2ZjZmFmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.page.ts":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mess_modal_mess_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mess-modal/mess-modal.page */ "./src/app/mess-modal/mess-modal.page.ts");









let MessagePage = class MessagePage {
    constructor(auth, storage, platform, http, modalController) {
        this.auth = auth;
        this.storage = storage;
        this.platform = platform;
        this.http = http;
        this.modalController = modalController;
        this.titlePage = 'Сообщение';
    }
    ngOnInit() {
        this.getToken();
    }
    openModal(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _mess_modal_mess_modal_page__WEBPACK_IMPORTED_MODULE_7__["MessModalPage"],
                componentProps: {
                    'user_id': user.id,
                    'my_id': this.Iam.id_user,
                    'token': this.token,
                    'user': user
                },
                animated: false
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    getUserData() {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/getuser/', { 'token': this.token }).then(res => {
            this.Iam = res.data;
        });
    }
    getUserList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let load = {
                'token': this.token
            };
            console.log(load);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/listusers/', load).then(res => {
                if (res.data.users) {
                    this.checkMessages(res.data.users);
                }
            });
        });
    }
    checkMessages(userlist) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userdata = [];
            for (let user of userlist) {
                const load = {
                    'token': this.token,
                    'userto': user.id
                };
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/getdialog/', load).then(res => {
                    if (res.data.messages) {
                        if (res.data.messages[0]) {
                            userdata.push(user);
                        }
                    }
                });
            }
            this.userList = userdata;
        });
    }
    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
            //console.log('init token ', this.token);
            this.getUserList();
            this.getUserData();
        });
        return true;
    }
    updateList(e) {
        this.getToken();
        setTimeout(() => {
            e.target.complete();
        }, 500);
    }
};
MessagePage.ctorParameters = () => [
    { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/index.js!./src/app/message/message.page.html"),
        styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/message/message.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], MessagePage);



/***/ })

}]);
//# sourceMappingURL=message-message-module-es2015.js.map