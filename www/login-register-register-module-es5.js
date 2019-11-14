(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Регстрация</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\" >Логин:</ion-label>\n      <ion-input  type=\"text\"  [(ngModel)]=\"email\"  ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Пароль:</ion-label>\n      <ion-input  type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >Подтвердите пароль:</ion-label>\n      <ion-input  type=\"password\" [(ngModel)]=\"confirmPassword\"></ion-input>\n    </ion-item>\n  </ion-card>\n  <ion-button (click)=\"signUp()\" >Зарегистроваться</ion-button>\n  <br>\n  <a href=\"/login\">Вы уже зарегистрованый?</a>\n</ion-content>\n"

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

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #4f6366;\n  font-weight: bold;\n  box-shadow: #0c1721 0 0 15px;\n}\n\nion-content {\n  --background: url('anonymus.jpg') 0 100% no-repeat;\n}\n\nion-content ion-card {\n  position: relative;\n  top: 110px;\n}\n\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\n\nion-button {\n  position: relative;\n  left: 50%;\n  top: 120px;\n  font-size: 1.4rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  box-shadow: #6d9160 0 0 5px;\n  --background: #6d9160;\n}\n\nion-button:focus {\n  background: #4c8dff;\n}\n\na {\n  width: 100%;\n  position: fixed;\n  text-align: center;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 51%;\n  bottom: 5%;\n  font-size: 1rem;\n  color: #fcfaff;\n  text-shadow: 0 0 15px #fcfaff;\n}\n\n.title_card {\n  position: relative;\n  --background: transparent !important;\n  box-shadow: none;\n}\n\n.title_card .title_item {\n  position: relative;\n  top: -20px;\n  z-index: 9999;\n  --background: transparent;\n}\n\n.title_card .title_item .title {\n  font-family: \"Bodoni MT\";\n  font-weight: bold;\n  font-size: 2.5rem;\n  position: relative;\n  left: 50%;\n  color: #4f6366;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-align: center;\n  text-shadow: #7fcbcc 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvQzpcXFVzZXJzXFxodGN1Y1xcZWR1UHJvamVjdHNcXGlvbmljXFxhaXNfaW9uaWMvc3JjXFxhcHBcXGxvZ2luXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDREo7O0FET0E7RUFFRSxrREFBQTtBQ0xGOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTEo7O0FETUk7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0FDSk47O0FEWUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ1RGOztBRFlBO0VBQ0UsbUJBQUE7QUNURjs7QURhQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDVkY7O0FEYUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURXRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFhQSx5QkFBQTtBQ3JCSjs7QURTSTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcbiAgICBjb2xvcjogIzRmNjM2NjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiAjMGMxNzIxIDAgMCAxNXB4O1xuICB9XG59XG5cblxuXG5pb24tY29udGVudCB7XG4gIC8vLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dfYmtnLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2Fub255bXVzLmpwZycpIDAgICAxMDAlIG5vLXJlcGVhdDtcblxuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTEwcHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICAgICAgY29sb3I6IHJnYmEoI2ZmZiwgMC41KTtcbiAgICB9XG4gICAgLy9ib3gtc2hhZG93OiAjM2Q0MDQ4IDAgNXB4IDEwcHg7XG4gIH1cblxuXG59XG5cbmlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMjBweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm94LXNoYWRvdzogIzZkOTE2MCAwIDAgNXB4O1xuICAtLWJhY2tncm91bmQ6ICM2ZDkxNjA7XG59XG5cbmlvbi1idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjNGM4ZGZmO1xufVxuXG5cbmEge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNTElO1xuICBib3R0b206IDUlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjZmNmYWZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI2ZjZmFmZjtcbn1cblxuLnRpdGxlX2NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLnRpdGxlX2l0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkJvZG9uaSBNVFwiO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGNvbG9yOiAjNGY2MzY2O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC1zaGFkb3c6ICM3ZmNiY2MgMCAwIDIwcHg7XG4gICAgfVxuXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcbiAgY29sb3I6ICM0ZjYzNjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAjMGMxNzIxIDAgMCAxNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Fub255bXVzLmpwZ1wiKSAwIDEwMCUgbm8tcmVwZWF0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTEwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDEyMHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3gtc2hhZG93OiAjNmQ5MTYwIDAgMCA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzZkOTE2MDtcbn1cblxuaW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0YzhkZmY7XG59XG5cbmEge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNTElO1xuICBib3R0b206IDUlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjZmNmYWZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI2ZjZmFmZjtcbn1cblxuLnRpdGxlX2NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi50aXRsZV9jYXJkIC50aXRsZV9pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnRpdGxlX2NhcmQgLnRpdGxlX2l0ZW0gLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQm9kb25pIE1UXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIGNvbG9yOiAjNGY2MzY2O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6ICM3ZmNiY2MgMCAwIDIwcHg7XG59Il19 */"

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