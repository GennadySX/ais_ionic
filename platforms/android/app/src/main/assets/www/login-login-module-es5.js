(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content >\n\n    <ion-card class=\"title_card\">\n      <ion-item class=\"title_item\">\n        <h3 class=\"title\">GennadySX</h3>\n      </ion-item>\n    </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\" >Логин:</ion-label>\n      <ion-input  type=\"text\"  [(ngModel)]=\"email\"  ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Пароль:</ion-label>\n      <ion-input  type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n  </ion-card>\n  <ion-button (click)=\"loginUser()\" >Войти</ion-button>\n    <br>\n  <a href=\"/register\">У вас нет аккаунта?</a>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    },
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #4f6366;\n  font-weight: bold;\n  box-shadow: #0c1721 0 0 15px;\n}\n\nion-content {\n  --background: url('anonymus.jpg') 0 100% no-repeat;\n}\n\nion-content ion-card {\n  position: relative;\n  top: 110px;\n}\n\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\n\nion-button {\n  position: relative;\n  left: 50%;\n  top: 120px;\n  font-size: 1.4rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  box-shadow: #6d9160 0 0 5px;\n  --background: #6d9160;\n}\n\nion-button:focus {\n  background: #4c8dff;\n}\n\na {\n  position: fixed;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 51%;\n  bottom: 5%;\n  font-size: 1rem;\n  color: #fcfaff;\n  text-shadow: 0 0 15px #fcfaff;\n}\n\n.title_card {\n  position: relative;\n  --background: transparent !important;\n  box-shadow: none;\n}\n\n.title_card .title_item {\n  position: relative;\n  top: -20px;\n  z-index: 9999;\n  --background: transparent;\n}\n\n.title_card .title_item .title {\n  font-family: \"Bodoni MT\";\n  font-weight: bold;\n  font-size: 2.5rem;\n  position: relative;\n  left: 50%;\n  color: #bedbde;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-align: center;\n  text-shadow: #7fcbcc 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxodGN1Y1xcZWR1UHJvamVjdHNcXGlvbmljXFxhaXNfaW9uaWMvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNESjs7QURPQTtFQUVFLGtEQUFBO0FDTEY7O0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNMSjs7QURNSTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7QUNKTjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FDVEY7O0FEWUE7RUFDRSxtQkFBQTtBQ1RGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQWFBLHlCQUFBO0FDckJKOztBRFNJO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICAgIGNvbG9yOiAjNGY2MzY2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6ICMwYzE3MjEgMCAwIDE1cHg7XG4gIH1cbn1cblxuXG5cbmlvbi1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ19ia2cuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYW5vbnltdXMuanBnJykgMCAgIDEwMCUgbm8tcmVwZWF0O1xuXG4gIGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMTBweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XG4gICAgICBjb2xvcjogcmdiYSgjZmZmLCAwLjUpO1xuICAgIH1cbiAgICAvL2JveC1zaGFkb3c6ICMzZDQwNDggMCA1cHggMTBweDtcbiAgfVxuXG5cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDEyMHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3gtc2hhZG93OiAjNmQ5MTYwIDAgMCA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzZkOTE2MDtcbn1cblxuaW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0YzhkZmY7XG59XG5cblxuYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA1MSU7XG4gIGJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICNmY2ZhZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCAjZmNmYWZmO1xufVxuXG4udGl0bGVfY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAudGl0bGVfaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IFwiQm9kb25pIE1UXCI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgY29sb3I6ICNiZWRiZGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXNoYWRvdzogIzdmY2JjYyAwIDAgMjBweDtcbiAgICB9XG5cbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICBjb2xvcjogIzRmNjM2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6ICMwYzE3MjEgMCAwIDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYW5vbnltdXMuanBnXCIpIDAgMTAwJSBuby1yZXBlYXQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJveC1zaGFkb3c6ICM2ZDkxNjAgMCAwIDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNmQ5MTYwO1xufVxuXG5pb24tYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzRjOGRmZjtcbn1cblxuYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA1MSU7XG4gIGJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICNmY2ZhZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCAjZmNmYWZmO1xufVxuXG4udGl0bGVfY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRpdGxlX2NhcmQgLnRpdGxlX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4udGl0bGVfY2FyZCAudGl0bGVfaXRlbSAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJCb2RvbmkgTVRcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgY29sb3I6ICNiZWRiZGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogIzdmY2JjYyAwIDAgMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(authService, alertController) {
        this.authService = authService;
        this.alertController = alertController;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (this.email && this.password) {
            var logData = {
                "login": this.email,
                "password": this.password
            };
            console.log('result: ', this.email, this.password);
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(this.authService.href.login, logData).then(function (res) {
                console.log(res.data);
                if (res.data) {
                    if (res.data.token) {
                        _this.authService.login(res.data.token);
                    }
                    else {
                        _this.presentAlert();
                    }
                }
                else {
                    _this.presentAlert();
                }
            });
        }
    };
    LoginPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ошибка',
                            subHeader: '',
                            message: "Не верный логин или пароль!",
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
    LoginPage.ctorParameters = function () { return [
        { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map