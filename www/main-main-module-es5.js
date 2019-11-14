(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{titlePage}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"userList\">\n      <ion-card   *ngFor=\"let user of userList; index as i\" [attr.data-index]=\"i\" class=\"d-flex\" >\n          <div class=\"card-image\">\n              <img [src]=\"user.img\"  alt=\"\">\n          </div>\n          <div class=\"card-info\">\n              <p class=\"user-lastname\" *ngIf=\"user.family; else userFamily\">{{user.family}}</p>\n              <ng-template #userFamily> <p class=\"user-lastname\" >Без Фамилии</p> </ng-template>\n              <p class=\"user-firstname\" *ngIf=\"user.user; else userName\">{{user.user}}</p>\n              <ng-template #userName><p class=\"user-firstname\" >Без имени</p></ng-template>\n              <p>ID: {{user.id}}</p>\n              <ion-badge>{{i+1}}</ion-badge>\n              <ion-button (click)=\"openModal(user)\">Написать</ion-button>\n          </div>\n\n      </ion-card>\n    </div>\n    <div *ngIf=\"!userList\">\n        <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n\n        <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n        <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n        <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n        <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n        <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");







var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #fcfaff;\n  box-shadow: #172029 0 0 15px;\n}\n\nion-content {\n  --background: #3d4048;\n}\n\nion-content ion-card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\nion-content ion-card .card-info {\n  background: #1f2229;\n  width: 100%;\n}\n\nion-content ion-card .card-info ion-badge {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: #28e070;\n  color: #0c1721;\n}\n\nion-content ion-card .card-info p {\n  width: 100%;\n  position: relative;\n  left: 15px;\n}\n\nion-content ion-card .card-image img {\n  width: 140px;\n  height: 107px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\n\nion-button {\n  position: absolute;\n  font-size: 0.5rem;\n  right: 5px;\n  bottom: 5px;\n  box-shadow: #292d34 0 0 5px;\n  --background: #292d34;\n}\n\nion-button:focus {\n  background: #4c8dff;\n}\n\nion-refresher-content {\n  background: #3d4048;\n  --background: #3d4048;\n}\n\nion-refresher-content ion-refresher {\n  background: #3d4048;\n  --background: #3d4048;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxcbWFpblxcbWFpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RKOztBREtBO0VBRUUscUJBQUE7QUNIRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDSEo7O0FESUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNGTjs7QURHTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNEUjs7QURHTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNEUjs7QURNTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0pSOztBRFFJO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtBQ05OOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ1pGOztBRGVBO0VBQ0UsbUJBQUE7QUNaRjs7QURlQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNaRjs7QURhRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICAgIGNvbG9yOiAjZmNmYWZmO1xuICAgIGJveC1zaGFkb3c6ICMxNzIwMjkgMCAwIDE1cHg7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAvLy0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9nX2JrZy5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuXG4gIGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuY2FyZC1pbmZvIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxZjIyMjk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzI4ZTA3MDtcbiAgICAgICAgY29sb3I6ICMwYzE3MjE7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgIH1cbiAgXG4gICAgfVxuICAgIC5jYXJkLWltYWdlIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDdweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICAgICAgY29sb3I6IHJnYmEoI2ZmZiwgMC41KTtcbiAgICB9XG4gICAgLy9ib3gtc2hhZG93OiAjM2Q0MDQ4IDAgNXB4IDEwcHg7XG5cbiAgfVxuXG5cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICBib3gtc2hhZG93OiAjMjkyZDM0IDAgMCA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzI5MmQzNDtcbn1cblxuaW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0YzhkZmY7XG59XG5cbmlvbi1yZWZyZXNoZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMzZDQwNDg7XG4gIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgaW9uLXJlZnJlc2hlciB7XG4gICAgYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XG4gIH1cbn1cblxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcbiAgY29sb3I6ICNmY2ZhZmY7XG4gIGJveC1zaGFkb3c6ICMxNzIwMjkgMCAwIDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzFmMjIyOTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbmZvIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzI4ZTA3MDtcbiAgY29sb3I6ICMwYzE3MjE7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbmZvIHAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLmNhcmQtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDEwN3B4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA1cHg7XG4gIGJveC1zaGFkb3c6ICMyOTJkMzQgMCAwIDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyZDM0O1xufVxuXG5pb24tYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzRjOGRmZjtcbn1cblxuaW9uLXJlZnJlc2hlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xufVxuaW9uLXJlZnJlc2hlci1jb250ZW50IGlvbi1yZWZyZXNoZXIge1xuICBiYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XG59Il19 */"

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mess_modal_mess_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mess-modal/mess-modal.page */ "./src/app/mess-modal/mess-modal.page.ts");









var MainPage = /** @class */ (function () {
    function MainPage(auth, storage, platform, http, modalController) {
        this.auth = auth;
        this.storage = storage;
        this.platform = platform;
        this.http = http;
        this.modalController = modalController;
        this.titlePage = 'Главный';
    }
    MainPage.prototype.ngOnInit = function () {
        this.getToken();
    };
    MainPage.prototype.openModal = function (user) {
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
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MainPage.prototype.getUserList = function () {
        var _this = this;
        var load = {
            'token': this.token
        };
        console.log(load);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/listusers/', load).then(function (res) {
            if (res.data.users) {
                _this.userList = res.data.users;
                console.log(_this.userList);
            }
        });
    };
    MainPage.prototype.getUserData = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://studentapi.myknitu.ru/getuser/', { 'token': this.token }).then(function (res) {
            _this.Iam = res.data;
        });
    };
    MainPage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('token').then(function (value) {
            _this.token = value;
            _this.getUserList();
            _this.getUserData();
        });
        return true;
    };
    MainPage.ctorParameters = function () { return [
        { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
    ]; };
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module-es5.js.map