(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs class=\"tab-panel\" color=\"primary\">\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"main\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"gallery\">\r\n      <ion-icon name=\"apps\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"message\">\r\n      <ion-icon name=\"md-albums\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon name=\"contact\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.router.module */ "./src/app/home/home.router.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_router_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-panel, ion-tab-button {\n  border-color: #1e2023;\n  --background: #1f2229;\n  box-shadow: #6d9160 5px 5px 10px;\n}\n\n.tabs-md .tabbar, .tabs-ios .tabbar {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0384da), to(#0c1721));\n  background: linear-gradient(#0384da, #0c1721);\n}\n\n.tab-has-icon {\n  color: #506166;\n}\n\n.tab-selected {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURJQTtFQUNFLHVGQUFBO0VBQUEsNkNBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYi1wYW5lbCwgaW9uLXRhYi1idXR0b24ge1xyXG4gIGJvcmRlci1jb2xvcjogIzFlMjAyMztcclxuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XHJcbiAgYm94LXNoYWRvdzogIzZkOTE2MCA1cHggNXB4IDEwcHg7XHJcblxyXG59XHJcblxyXG4udGFicy1tZCAudGFiYmFyLC50YWJzLWlvcyAudGFiYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDMsIDEzMiwgMjE4KSwgcmdiKDEyLCAyMywgMzMpKTtcclxufVxyXG5cclxuLnRhYi1oYXMtaWNvbiB7XHJcbiAgY29sb3I6ICM1MDYxNjY7XHJcbn1cclxuXHJcbi50YWItc2VsZWN0ZWQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiIsIi50YWItcGFuZWwsIGlvbi10YWItYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjMWUyMDIzO1xuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG4gIGJveC1zaGFkb3c6ICM2ZDkxNjAgNXB4IDVweCAxMHB4O1xufVxuXG4udGFicy1tZCAudGFiYmFyLCAudGFicy1pb3MgLnRhYmJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDM4NGRhLCAjMGMxNzIxKTtcbn1cblxuLnRhYi1oYXMtaWNvbiB7XG4gIGNvbG9yOiAjNTA2MTY2O1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ }),

/***/ "./src/app/home/home.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/home.router.module.ts ***!
  \********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~gallery-gallery-module~login-login-module~login-register-register-module~main-main-module~pr~2dc43020"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule),
                        data: { preload: true }
                    }
                ],
            },
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | main-main-module */[__webpack_require__.e("default~gallery-gallery-module~login-login-module~login-register-register-module~main-main-module~pr~2dc43020"), __webpack_require__.e("main-main-module")]).then(__webpack_require__.bind(null, /*! ../main/main.module */ "./src/app/main/main.module.ts")).then(m => m.MainPageModule),
                        data: { preload: true }
                    }
                ]
            },
            {
                path: 'gallery',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | gallery-gallery-module */[__webpack_require__.e("default~gallery-gallery-module~login-login-module~login-register-register-module~main-main-module~pr~2dc43020"), __webpack_require__.e("gallery-gallery-module")]).then(__webpack_require__.bind(null, /*! ../gallery/gallery.module */ "./src/app/gallery/gallery.module.ts")).then(m => m.GalleryPageModule)
                    }
                ]
            },
            {
                path: 'message',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | message-message-module */ "message-message-module").then(__webpack_require__.bind(null, /*! ../message/message.module */ "./src/app/message/message.module.ts")).then(m => m.MessagePageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map