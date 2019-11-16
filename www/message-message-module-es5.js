(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/message/message.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/message/message.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{titlePage}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"updateList($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card   *ngFor=\"let user of userList; index as i\" [attr.data-index]=\"i\" class=\"d-flex message-card\" (click)=\"openModal(user)\">\n    <div class=\"card-image\">\n      <img [src]=\"user.img\"  alt=\"\">\n    </div>\n    <div class=\"card-info\">\n      <p class=\"user-lastname\" *ngIf=\"user.family && user.user; else userFamily\">{{user.user}} {{user.family}}</p>\n      <ng-template #userFamily> <p class=\"user-lastname\" >Без имени </p> </ng-template>\n      <p>ID: {{user.id}}</p>\n      <ion-badge>{{i+1}}</ion-badge>\n    </div>\n  </ion-card>\n  <div *ngIf=\"!userList\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-emoji-picker */ "./node_modules/ngx-emoji-picker/fesm5/ngx-emoji-picker.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message.page */ "./src/app/message/message.page.ts");








var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_7__["MessagePage"]
    }
];
var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
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
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/message/message.page.scss":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #fcfaff;\n  box-shadow: #172029 0 0 15px;\n}\n\nion-content {\n  --background: #1f2229;\n}\n\nion-content ion-card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  box-shadow: none;\n  border: none;\n}\n\nion-content ion-card .card-info {\n  background: #1f2229;\n  width: 100%;\n  border-bottom: 0.7px solid rgba(128, 128, 128, 0.5);\n}\n\nion-content ion-card .card-info ion-badge {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: #28e070;\n  color: #0c1721;\n}\n\nion-content ion-card .card-info p {\n  width: 100%;\n  position: relative;\n  left: 15px;\n}\n\nion-content ion-card .card-image {\n  background: transparent;\n  border: none;\n}\n\nion-content ion-card .card-image img {\n  width: 90px;\n  height: 70px;\n  border-radius: 50%;\n}\n\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\n\nion-button {\n  position: relative;\n  left: 47%;\n  top: 140px;\n  font-size: 1.4rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  box-shadow: #6d9160 0 0 5px;\n  --background: #6d9160;\n}\n\nion-button:focus {\n  background: #4c8dff;\n}\n\na {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 49%;\n  top: 52%;\n  font-size: 1rem;\n  color: #fcfaff;\n  text-shadow: 0 0 15px #fcfaff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxcbWVzc2FnZVxcbWVzc2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RKOztBREtBO0VBRUUscUJBQUE7QUNIRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FES0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtREFBQTtBQ0hOOztBRElNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRElNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZSOztBRE1JO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDSk47O0FES007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSFI7O0FET0k7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0FDTE47O0FEY0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ1hGOztBRGNBO0VBQ0UsbUJBQUE7QUNYRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG4gICAgY29sb3I6ICNmY2ZhZmY7XG4gICAgYm94LXNoYWRvdzogIzE3MjAyOSAwIDAgMTVweDtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC8vLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dfYmtnLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG5cbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lXG4gIDtcbiAgICAuY2FyZC1pbmZvIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxZjIyMjk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuN3B4IHNvbGlkIHJnYmEoZ3JheSwgMC41KTtcbiAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzI4ZTA3MDtcbiAgICAgICAgY29sb3I6ICMwYzE3MjE7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgLmNhcmQtaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICAgICAgY29sb3I6IHJnYmEoI2ZmZiwgMC41KTtcbiAgICB9XG4gICAgLy9ib3gtc2hhZG93OiAjM2Q0MDQ4IDAgNXB4IDEwcHg7XG5cbiAgfVxuXG5cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDclO1xuICB0b3A6IDE0MHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3gtc2hhZG93OiAjNmQ5MTYwIDAgMCA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzZkOTE2MDtcbn1cblxuaW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0YzhkZmY7XG59XG5cblxuYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA0OSU7XG4gIHRvcDogNTIlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjZmNmYWZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI2ZjZmFmZjtcbn1cbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG4gIGNvbG9yOiAjZmNmYWZmO1xuICBib3gtc2hhZG93OiAjMTcyMDI5IDAgMCAxNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzFmMjIyOTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDAuN3B4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5jYXJkLWluZm8gaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjhlMDcwO1xuICBjb2xvcjogIzBjMTcyMTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5jYXJkLWluZm8gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbWFnZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbWFnZSBpbWcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDclO1xuICB0b3A6IDE0MHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3gtc2hhZG93OiAjNmQ5MTYwIDAgMCA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzZkOTE2MDtcbn1cblxuaW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0YzhkZmY7XG59XG5cbmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNDklO1xuICB0b3A6IDUyJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZjZmFmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4ICNmY2ZhZmY7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mess_modal_mess_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mess-modal/mess-modal.page */ "./src/app/mess-modal/mess-modal.page.ts");









var MessagePage = /** @class */ (function () {
    function MessagePage(auth, storage, platform, http, modalController) {
        this.auth = auth;
        this.storage = storage;
        this.platform = platform;
        this.http = http;
        this.modalController = modalController;
        this.titlePage = 'Сообщение';
    }
    MessagePage.prototype.ngOnInit = function () {
        this.getToken();
    };
    MessagePage.prototype.openModal = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _mess_modal_mess_modal_page__WEBPACK_IMPORTED_MODULE_7__["MessModalPage"],
                            componentProps: {
                                'user_id': user.id,
                                'my_id': this.Iam.id_user,
                                'token': this.token,
                                'user': user
                            },
                            animated: false
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dataReturned = dataReturned.data;
                                //alert('Modal Sent Data :'+ dataReturned);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MessagePage.prototype.getUserData = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/getuser/', { 'token': this.token }).then(function (res) {
            _this.Iam = res.data;
        });
    };
    MessagePage.prototype.getUserList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var load;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                load = {
                    'token': this.token
                };
                console.log(load);
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/listusers/', load).then(function (res) {
                    if (res.data.users) {
                        _this.checkMessages(res.data.users);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    MessagePage.prototype.checkMessages = function (userlist) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userdata, _loop_1, this_1, _i, userlist_1, user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                userdata = [];
                _loop_1 = function (user) {
                    var load = {
                        'token': this_1.token,
                        'userto': user.id
                    };
                    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/getdialog/', load).then(function (res) {
                        if (res.data.messages) {
                            if (res.data.messages[0]) {
                                userdata.push(user);
                            }
                        }
                    });
                };
                this_1 = this;
                for (_i = 0, userlist_1 = userlist; _i < userlist_1.length; _i++) {
                    user = userlist_1[_i];
                    _loop_1(user);
                }
                this.userList = userdata.reverse();
                return [2 /*return*/];
            });
        });
    };
    MessagePage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('token').then(function (value) {
            _this.token = value;
            //console.log('init token ', this.token);
            _this.getUserList();
            _this.getUserData();
        });
        return true;
    };
    MessagePage.prototype.updateList = function (e) {
        this.getToken();
        setTimeout(function () {
            e.target.complete();
        }, 500);
    };
    MessagePage.ctorParameters = function () { return [
        { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
    ]; };
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
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=message-message-module-es5.js.map