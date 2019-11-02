(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Регстрация</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Логин:</ion-label>\r\n      <ion-input  type=\"text\"  [(ngModel)]=\"email\"  ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Пароль:</ion-label>\r\n      <ion-input  type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Подтвердите пароль:</ion-label>\r\n      <ion-input  type=\"password\" [(ngModel)]=\"confirmPassword\"></ion-input>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-button (click)=\"signUp()\" >Зарегистроваться</ion-button>\r\n  <br>\r\n  <a href=\"/login\">Вы уже зарегистрованый?</a>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/login/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/login/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/login/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/login/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #4f6366;\n  font-weight: bold;\n  box-shadow: #0c1721 0 0 15px;\n}\n\nion-content {\n  --background: url('anonymus.jpg') 0 100% no-repeat;\n}\n\nion-content ion-card {\n  position: relative;\n  top: 110px;\n}\n\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\n\nion-button {\n  position: relative;\n  left: 50%;\n  top: 120px;\n  font-size: 1.4rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  box-shadow: #6d9160 0 0 5px;\n  --background: #6d9160;\n}\n\nion-button:focus {\n  background: #4c8dff;\n}\n\na {\n  width: 100%;\n  position: fixed;\n  text-align: center;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 51%;\n  bottom: 5%;\n  font-size: 1rem;\n  color: #fcfaff;\n  text-shadow: 0 0 15px #fcfaff;\n}\n\n.title_card {\n  position: relative;\n  --background: transparent !important;\n  box-shadow: none;\n}\n\n.title_card .title_item {\n  position: relative;\n  top: -20px;\n  z-index: 9999;\n  --background: transparent;\n}\n\n.title_card .title_item .title {\n  font-family: \"Bodoni MT\";\n  font-weight: bold;\n  font-size: 2.5rem;\n  position: relative;\n  left: 50%;\n  color: #4f6366;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-align: center;\n  text-shadow: #7fcbcc 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvQzpcXFVzZXJzXFxodGN1Y1xcZWR1UHJvamVjdHNcXGlvbmljXFxhaXNfaW9uaWMvc3JjXFxhcHBcXGxvZ2luXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDREo7O0FET0E7RUFFRSxrREFBQTtBQ0xGOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTEo7O0FETUk7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0FDSk47O0FEWUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ1RGOztBRFlBO0VBQ0UsbUJBQUE7QUNURjs7QURhQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDVkY7O0FEYUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURXRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFhQSx5QkFBQTtBQ3JCSjs7QURTSTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcclxuICAgIGNvbG9yOiAjNGY2MzY2O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiAjMGMxNzIxIDAgMCAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ19ia2cuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9hbm9ueW11cy5qcGcnKSAwICAgMTAwJSBuby1yZXBlYXQ7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcclxuICAgICAgY29sb3I6IHJnYmEoI2ZmZiwgMC41KTtcclxuICAgIH1cclxuICAgIC8vYm94LXNoYWRvdzogIzNkNDA0OCAwIDVweCAxMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJveC1zaGFkb3c6ICM2ZDkxNjAgMCAwIDVweDtcclxuICAtLWJhY2tncm91bmQ6ICM2ZDkxNjA7XHJcbn1cclxuXHJcbmlvbi1idXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM0YzhkZmY7XHJcbn1cclxuXHJcblxyXG5hIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBsZWZ0OiA1MSU7XHJcbiAgYm90dG9tOiA1JTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICNmY2ZhZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4ICNmY2ZhZmY7XHJcbn1cclxuXHJcbi50aXRsZV9jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLnRpdGxlX2l0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogXCJCb2RvbmkgTVRcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgY29sb3I6ICM0ZjYzNjY7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogIzdmY2JjYyAwIDAgMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICBjb2xvcjogIzRmNjM2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6ICMwYzE3MjEgMCAwIDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYW5vbnltdXMuanBnXCIpIDAgMTAwJSBuby1yZXBlYXQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJveC1zaGFkb3c6ICM2ZDkxNjAgMCAwIDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNmQ5MTYwO1xufVxuXG5pb24tYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzRjOGRmZjtcbn1cblxuYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA1MSU7XG4gIGJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICNmY2ZhZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCAjZmNmYWZmO1xufVxuXG4udGl0bGVfY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRpdGxlX2NhcmQgLnRpdGxlX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4udGl0bGVfY2FyZCAudGl0bGVfaXRlbSAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJCb2RvbmkgTVRcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgY29sb3I6ICM0ZjYzNjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogIzdmY2JjYyAwIDAgMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/login/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, alertController) {
        this.authService = authService;
        this.alertController = alertController;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.signUp = function () {
        var _this = this;
        if (this.email && this.password && this.confirmPassword) {
            if (this.confirmPassword === this.password) {
                var logData = {
                    "login": this.email,
                    "password": this.password
                };
                console.log('result: ', this.email, this.password);
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.authService.href.register, logData).then(function (res) {
                    console.log(res.data);
                    if (res.data.token) {
                        _this.authService.login(res.data.token);
                    }
                });
            }
            else {
                this.passwordAlert();
            }
        }
        else {
            this.fieldError();
        }
    };
    RegisterPage.prototype.passwordAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ошибка',
                            subHeader: '',
                            message: "Пароли не совпадают, будьте уверен вводимых паролей!",
                            buttons: ['Закрыть']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.fieldError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ошибка',
                            subHeader: '',
                            message: "Заполните все поля!",
                            buttons: ['Закрыть']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/login/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-register-register-module-es5.js.map