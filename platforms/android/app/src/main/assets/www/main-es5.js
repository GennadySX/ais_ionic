(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./mess-modal/mess-modal.module": [
		"./src/app/mess-modal/mess-modal.module.ts"
	],
	"./message/message.module": [
		"./src/app/message/message.module.ts",
		"message-message-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-controller_8.entry.js",
		"common",
		2
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js",
		"common",
		3
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-md.entry.js",
		"common",
		4
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js",
		"common",
		5
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-md.entry.js",
		"common",
		6
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-ios.entry.js",
		0,
		"common",
		7
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js",
		0,
		"common",
		8
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-ios.entry.js",
		"common",
		9
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-md.entry.js",
		"common",
		10
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-ios.entry.js",
		"common",
		11
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-md.entry.js",
		"common",
		12
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js",
		13
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-md.entry.js",
		14
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-ios.entry.js",
		"common",
		15
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-md.entry.js",
		"common",
		16
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-ios.entry.js",
		"common",
		17
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-md.entry.js",
		"common",
		18
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-ios.entry.js",
		"common",
		19
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-md.entry.js",
		"common",
		20
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-ios.entry.js",
		"common",
		21
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-md.entry.js",
		"common",
		22
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-col_3.entry.js",
		23
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-ios.entry.js",
		"common",
		24
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-md.entry.js",
		"common",
		25
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-ios.entry.js",
		"common",
		26
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-md.entry.js",
		"common",
		27
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js",
		28
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js",
		"common",
		29
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-md.entry.js",
		"common",
		30
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-ios.entry.js",
		"common",
		31
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-md.entry.js",
		"common",
		32
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-ios.entry.js",
		"common",
		33
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-md.entry.js",
		"common",
		34
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-ios.entry.js",
		"common",
		35
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-md.entry.js",
		"common",
		36
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-ios.entry.js",
		"common",
		37
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-md.entry.js",
		"common",
		38
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js",
		"common",
		39
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-md.entry.js",
		"common",
		40
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-ios.entry.js",
		0,
		"common",
		41
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-md.entry.js",
		0,
		"common",
		42
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-nav_5.entry.js",
		0,
		"common",
		43
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js",
		0,
		"common",
		44
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-md.entry.js",
		0,
		"common",
		45
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-ios.entry.js",
		"common",
		46
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-md.entry.js",
		"common",
		47
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-ios.entry.js",
		"common",
		48
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-md.entry.js",
		"common",
		49
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-ios.entry.js",
		"common",
		50
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-md.entry.js",
		"common",
		51
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-ios.entry.js",
		"common",
		52
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-md.entry.js",
		"common",
		53
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-ios.entry.js",
		"common",
		54
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js",
		"common",
		55
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js",
		56
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js",
		"common",
		57
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-ios.entry.js",
		"common",
		58
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-md.entry.js",
		"common",
		59
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-ios.entry.js",
		"common",
		60
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-md.entry.js",
		"common",
		61
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-ios.entry.js",
		"common",
		62
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-md.entry.js",
		"common",
		63
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-ios.entry.js",
		64
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-md.entry.js",
		65
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js",
		"common",
		66
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-ios.entry.js",
		67
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-md.entry.js",
		68
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-ios.entry.js",
		"common",
		69
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-md.entry.js",
		"common",
		70
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js",
		1
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js",
		"common",
		71
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-ios.entry.js",
		"common",
		72
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-md.entry.js",
		"common",
		73
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-ios.entry.js",
		"common",
		74
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-md.entry.js",
		"common",
		75
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-ios.entry.js",
		"common",
		76
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-md.entry.js",
		"common",
		77
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js",
		78
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mess-modal/mess-modal.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mess-modal/mess-modal.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" (click)=\"closeModal()\"></ion-back-button>\n      <img [src]=\"user.img\" alt=\"\" class=\"head-img\">\n    </ion-buttons>\n    <ion-title >{{user_name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row >\n      <div *ngFor=\"let message of messList;\" >\n        <div *ngIf=\"message.to_id === user_id; else myBlock\">\n          <ion-col class=\" mess-to\"  size=\"7\" > {{message.message}} </ion-col>\n        </div>\n        <ng-template #myBlock >\n          <ion-col class=\"mess-from\" size=\"7\" *ngIf=\"message.to_id === my_id; else notMessage\"> {{message.message}}  </ion-col>\n        </ng-template>\n        <ng-template #notMessage>\n          <ion-col class=\"not_mess\"  size=\"12\"  > Нет переписки </ion-col>\n        </ng-template>\n      </div>\n\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-card class=\"mess-toolbar\">\n    <ion-textarea [(ngModel)]=\"message\" rows=\"1\"  autoGrow=\"true\" placeholder=\"Сообщение...\"></ion-textarea>\n    <ion-button class=\"send-btn\" (click)=\"sendIt($event)\">\n      <ion-icon name=\"send\" ></ion-icon>\n    </ion-button>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/api/auth.guard.ts":
/*!***********************************!*\
  !*** ./src/app/api/auth.guard.ts ***!
  \***********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/api/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isAuthecticated();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/api/auth.service.ts":
/*!*************************************!*\
  !*** ./src/app/api/auth.service.ts ***!
  \*************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(router, storage, platform, toastController) {
        var _this = this;
        this.router = router;
        this.storage = storage;
        this.platform = platform;
        this.toastController = toastController;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.token = "";
        this.href = {
            login: 'http://studentapi.myknitu.ru/auth/',
            register: 'http://studentapi.myknitu.ru/register/',
            getUser: 'http://studentapi.myknitu.ru/getuser/',
        };
        this.platform.ready().then(function () {
            _this.ifLoggedIn();
        });
    }
    AuthService.prototype.ifLoggedIn = function () {
        var _this = this;
        this.storage.get('token').then(function (res) {
            if (res) {
                _this.authState.next(true);
            }
        });
    };
    AuthService.prototype.login = function (token) {
        var _this = this;
        this.storage.set('token', token).then(function (res) {
            _this.router.navigate(['home']);
            _this.authState.next(true);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.storage.remove('token').then(function () {
            _this.router.navigate(['login']);
            _this.authState.next(false);
        });
    };
    AuthService.prototype.isAuthecticated = function () {
        return this.authState.value;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/auth.guard */ "./src/app/api/auth.guard.ts");




var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'home',
        loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts"))
            .then(function (m) { return m.HomePageModule; }); },
        canActivate: [_api_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'register',
        loadChildren: function () { return __webpack_require__.e(/*! import() | login-register-register-module */ "login-register-register-module").then(__webpack_require__.bind(null, /*! ./login/register/register.module */ "./src/app/login/register/register.module.ts"))
            .then(function (m) { return m.RegisterPageModule; }); }
    },
    { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
    { path: 'mess-modal', loadChildren: './mess-modal/mess-modal.module#MessModalPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _api_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/auth.guard */ "./src/app/api/auth.guard.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, authService, authGuard, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.authGuard = authGuard;
        this.router = router;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.authService.authState.subscribe(function (state) {
                if (state) {
                    _this.router.navigate(['home/main']);
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _api_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _api_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _message_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message.pipe */ "./src/app/message.pipe.ts");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _mess_modal_mess_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mess-modal/mess-modal.module */ "./src/app/mess-modal/mess-modal.module.ts");
/* harmony import */ var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-emoji-picker */ "./node_modules/ngx-emoji-picker/fesm5/ngx-emoji-picker.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _message_pipe__WEBPACK_IMPORTED_MODULE_11__["MessagePipe"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _mess_modal_mess_modal_module__WEBPACK_IMPORTED_MODULE_18__["MessModalPageModule"],
                ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_19__["NgxEmojiPickerModule"].forRoot()
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
                _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
                _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_13__["File"],
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"],
                _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_15__["FilePath"],
                _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_16__["Crop"],
                _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__["ImagePicker"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mess-modal/mess-modal.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mess-modal/mess-modal.module.ts ***!
  \*************************************************/
/*! exports provided: MessModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessModalPageModule", function() { return MessModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-emoji-picker */ "./node_modules/ngx-emoji-picker/fesm5/ngx-emoji-picker.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mess_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mess-modal.page */ "./src/app/mess-modal/mess-modal.page.ts");








var routes = [
    {
        path: '',
        component: _mess_modal_page__WEBPACK_IMPORTED_MODULE_7__["MessModalPage"]
    }
];
var MessModalPageModule = /** @class */ (function () {
    function MessModalPageModule() {
    }
    MessModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_5__["NgxEmojiPickerModule"]
            ],
            declarations: [_mess_modal_page__WEBPACK_IMPORTED_MODULE_7__["MessModalPage"]]
        })
    ], MessModalPageModule);
    return MessModalPageModule;
}());



/***/ }),

/***/ "./src/app/mess-modal/mess-modal.page.scss":
/*!*************************************************!*\
  !*** ./src/app/mess-modal/mess-modal.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #fcfaff;\n  box-shadow: #172029 0 0 15px;\n}\nion-header ion-toolbar ion-title {\n  font-size: 1rem;\n}\nion-header ion-toolbar ion-buttons ion-button {\n  --color: #fff !important;\n  color: #fff !important;\n}\nion-header ion-toolbar .head-img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\nion-content {\n  --background: #1f2229;\n}\nion-content ion-grid ion-row {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 50px;\n}\nion-content ion-grid ion-row ion-col {\n  margin-bottom: 10px;\n}\nion-content ion-grid ion-row .mess-from {\n  background: #ffce00;\n  border-radius: 0 5px 5px 0;\n  float: left;\n}\nion-content ion-grid ion-row .mess-to {\n  float: right;\n  background: #28e070;\n  border-radius: 5px 0px 0px 5px;\n  text-align: right;\n}\nion-content ion-grid ion-row .not_mess {\n  color: #86888f;\n  text-align: center;\n}\nion-content .mess-toolbar {\n  margin: 0;\n  display: inline;\n  position: fixed;\n  bottom: 0;\n  height: 45px !important;\n  width: 100%;\n  --background: #3d4048;\n}\nion-content .mess-toolbar ion-textarea {\n  position: relative;\n  bottom: 3px;\n  float: left;\n  left: 5px;\n  height: 40px !important;\n  width: 83%;\n  --background: transparent;\n  color: #fff;\n}\nion-content .mess-toolbar ion-button {\n  --background: #3d4048;\n  --box-shadow: none;\n  position: absolute;\n  bottom: 0;\n  border-radius: 50%;\n}\nion-content .mess-toolbar .send-btn {\n  float: right;\n  position: fixed;\n  right: 0px;\n  border: none;\n}\nion-content .mess-toolbar .emoji-btn {\n  float: left;\n  width: 70px;\n  margin-top: 5px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzcy1tb2RhbC9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxcbWVzcy1tb2RhbFxcbWVzcy1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3MtbW9kYWwvbWVzcy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RKO0FERUk7RUFDRSxlQUFBO0FDQU47QURHTTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7QUNEUjtBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FET0E7RUFFRSxxQkFBQTtBQ0xGO0FEUUk7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ05OO0FET007RUFDQSxtQkFBQTtBQ0xOO0FET007RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0xSO0FEUU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDTlI7QURRTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ05SO0FEV0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNUSjtBRFVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNSTjtBRFVJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDUk47QURVSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNSTjtBRFVJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1JOIiwiZmlsZSI6InNyYy9hcHAvbWVzcy1tb2RhbC9tZXNzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG4gICAgY29sb3I6ICNmY2ZhZmY7XG4gICAgYm94LXNoYWRvdzogIzE3MjAyOSAwIDAgMTVweDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuaGVhZC1pbWcge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLy8tLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ19ia2cuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcblxuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICBpb24tY29sIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAubWVzcy1mcm9tIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmY2UwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAubWVzcy10byB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZDogIzI4ZTA3MDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIC5ub3RfbWVzcyB7XG4gICAgICAgIGNvbG9yOiAjODY4ODhmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1lc3MtdG9vbGJhciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgICBpb24tdGV4dGFyZWEge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm90dG9tOiAzcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDgzJTtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5zZW5kLWJ0biB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAuZW1vamktYnRuIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG4gIH1cblxuXG5cblxuXG5cbn1cblxuXG5cbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG4gIGNvbG9yOiAjZmNmYWZmO1xuICBib3gtc2hhZG93OiAjMTcyMDI5IDAgMCAxNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5oZWFkLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IC5tZXNzLWZyb20ge1xuICBiYWNrZ3JvdW5kOiAjZmZjZTAwO1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IC5tZXNzLXRvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjMjhlMDcwO1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyAubm90X21lc3Mge1xuICBjb2xvcjogIzg2ODg4ZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLm1lc3MtdG9vbGJhciB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XG59XG5pb24tY29udGVudCAubWVzcy10b29sYmFyIGlvbi10ZXh0YXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBsZWZ0OiA1cHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODMlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5tZXNzLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWNvbnRlbnQgLm1lc3MtdG9vbGJhciAuc2VuZC1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWNvbnRlbnQgLm1lc3MtdG9vbGJhciAuZW1vamktYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mess-modal/mess-modal.page.ts":
/*!***********************************************!*\
  !*** ./src/app/mess-modal/mess-modal.page.ts ***!
  \***********************************************/
/*! exports provided: MessModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessModalPage", function() { return MessModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _api_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/auth.guard */ "./src/app/api/auth.guard.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var MessModalPage = /** @class */ (function () {
    function MessModalPage(modalController, navParams, authGuard, authService, storage) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.authGuard = authGuard;
        this.authService = authService;
        this.storage = storage;
        this.token = '';
        this.toggled = false;
        this.notMess = false;
    }
    MessModalPage.prototype.ngOnInit = function () {
        this.user_id = this.navParams.data.user_id;
        this.my_id = this.navParams.data.my_id;
        this.token = this.navParams.data.token;
        this.user = this.navParams.data.user;
        this.messLists(this.user_id);
        this.realizeIt(this.user);
        console.table('data: ', this.navParams.data);
    };
    MessModalPage.prototype.realizeIt = function (user) {
        if (user.user.toString().length > 0) {
            this.user_name = user.user + ' ' + user.family;
        }
        else {
            this.user_name = 'Без имени';
        }
    };
    MessModalPage.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var onClosedData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onClosedData = 'Wrapped Up!';
                        return [4 /*yield*/, this.modalController.dismiss(onClosedData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessModalPage.prototype.handleSelection = function (event) {
        this.message = this.message + '' + event.char;
    };
    MessModalPage.prototype.messLists = function (id, mess) {
        if (mess === void 0) { mess = ''; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var redata;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        redata = [];
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://studentapi.myknitu.ru/getdialog/', {
                                'token': this.token,
                                'userto': id
                            }).then(function (res) {
                                if (res.data.messages) {
                                    console.log(res.data);
                                    if (res.data.messages[0]) {
                                        _this.messList = res.data.messages;
                                        console.log(res.data.messages);
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessModalPage.prototype.pushMsg = function (text) {
        this.messList.push({
            'to_id': this.user_id,
            'message': text,
            'from_id': this.my_id
        });
    };
    MessModalPage.prototype.sendIt = function (e) {
        var _this = this;
        //console.log('sending ', this.token);
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://studentapi.myknitu.ru/sendmessage/', {
            'token': this.token,
            'userto': this.user_id,
            'message': this.message
        }).then(function (res) {
            console.log(res.data.status);
            if (res.data.status) {
                if (_this.messList) {
                    _this.pushMsg(_this.message);
                }
                else {
                    _this.messList = [
                        {
                            'to_id': _this.user_id,
                            'message': _this.message,
                            'from_id': _this.my_id
                        }
                    ];
                }
                _this.message = '';
            }
        });
    };
    MessModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _api_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"] },
        { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
    ]; };
    MessModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mess-modal',
            template: __webpack_require__(/*! raw-loader!./mess-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/mess-modal/mess-modal.page.html"),
            styles: [__webpack_require__(/*! ./mess-modal.page.scss */ "./src/app/mess-modal/mess-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _api_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], MessModalPage);
    return MessModalPage;
}());



/***/ }),

/***/ "./src/app/message.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/message.pipe.ts ***!
  \*********************************/
/*! exports provided: MessagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePipe", function() { return MessagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagePipe = /** @class */ (function () {
    function MessagePipe() {
    }
    MessagePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return null;
    };
    MessagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'message'
        })
    ], MessagePipe);
    return MessagePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\htcuc\eduProjects\ionic\ais_ionic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map