(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{titlePage}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div *ngIf=\"userList\">\r\n      <ion-card   *ngFor=\"let user of userList; index as i\" [attr.data-index]=\"i\" class=\"d-flex\" >\r\n          <div class=\"card-image\">\r\n              <img [src]=\"user.img\"  alt=\"\">\r\n          </div>\r\n          <div class=\"card-info\">\r\n              <p class=\"user-lastname\" *ngIf=\"user.family; else userFamily\">{{user.family}}</p>\r\n              <ng-template #userFamily> <p class=\"user-lastname\" >Без Фамилии</p> </ng-template>\r\n              <p class=\"user-firstname\" *ngIf=\"user.user; else userName\">{{user.user}}</p>\r\n              <ng-template #userName><p class=\"user-firstname\" >Без имени</p></ng-template>\r\n              <ion-badge>{{i}}</ion-badge>\r\n          </div>\r\n\r\n      </ion-card>\r\n    </div>\r\n    <div *ngIf=\"!userList\">\r\n        <div class=\"ion-padding custom-skeleton\">\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </div>\r\n\r\n        <div class=\"ion-padding custom-skeleton\">\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"ion-padding custom-skeleton\">\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"ion-padding custom-skeleton\">\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"ion-padding custom-skeleton\">\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"ion-padding custom-skeleton\">\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n"

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

module.exports = "ion-header ion-toolbar {\n  --background: #1f2229;\n  color: #fcfaff;\n  box-shadow: #172029 0 0 15px;\n}\n\nion-content {\n  --background: #3d4048;\n}\n\nion-content ion-card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\nion-content ion-card .card-info {\n  background: #1f2229;\n  width: 100%;\n}\n\nion-content ion-card .card-info ion-badge {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: #28e070;\n  color: #0c1721;\n}\n\nion-content ion-card .card-info p {\n  width: 100%;\n  position: relative;\n  left: 15px;\n}\n\nion-content ion-card .card-image img {\n  width: 140px;\n}\n\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\n\nion-button {\n  position: relative;\n  left: 47%;\n  top: 140px;\n  font-size: 1.4rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  box-shadow: #6d9160 0 0 5px;\n  --background: #6d9160;\n}\n\nion-button:focus {\n  background: #4c8dff;\n}\n\na {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 49%;\n  top: 52%;\n  font-size: 1rem;\n  color: #fcfaff;\n  text-shadow: 0 0 15px #fcfaff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxcbWFpblxcbWFpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RKOztBREtBO0VBRUUscUJBQUE7QUNIRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDSEo7O0FESUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNGTjs7QURHTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNEUjs7QURHTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNEUjs7QURRTTtFQUNFLFlBQUE7QUNOUjs7QURVSTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7QUNSTjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ2RGOztBRGlCQTtFQUNFLG1CQUFBO0FDZEY7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDZkYiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcclxuICAgIGNvbG9yOiAjZmNmYWZmO1xyXG4gICAgYm94LXNoYWRvdzogIzE3MjAyOSAwIDAgMTVweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9nX2JrZy5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuY2FyZC1pbmZvIHtcclxuICAgICAgYmFja2dyb3VuZDogIzFmMjIyOTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjhlMDcwO1xyXG4gICAgICAgIGNvbG9yOiAjMGMxNzIxO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWZpcnN0bmFtZSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKCNmZmYsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAvL2JveC1zaGFkb3c6ICMzZDQwNDggMCA1cHggMTBweDtcclxuXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA0NyU7XHJcbiAgdG9wOiAxNDBweDtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYm94LXNoYWRvdzogIzZkOTE2MCAwIDAgNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzZkOTE2MDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogIzRjOGRmZjtcclxufVxyXG5cclxuXHJcbmEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgbGVmdDogNDklO1xyXG4gIHRvcDogNTIlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogI2ZjZmFmZjtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggI2ZjZmFmZjtcclxufVxyXG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICBjb2xvcjogI2ZjZmFmZjtcbiAgYm94LXNoYWRvdzogIzE3MjAyOSAwIDAgMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMzZDQwNDg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5jYXJkLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5jYXJkLWluZm8gaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjhlMDcwO1xuICBjb2xvcjogIzBjMTcyMTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5jYXJkLWluZm8gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuY2FyZC1pbWFnZSBpbWcge1xuICB3aWR0aDogMTQwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDclO1xuICB0b3A6IDE0MHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3gtc2hhZG93OiAjNmQ5MTYwIDAgMCA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzZkOTE2MDtcbn1cblxuaW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0YzhkZmY7XG59XG5cbmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNDklO1xuICB0b3A6IDUyJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZjZmFmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4ICNmY2ZhZmY7XG59Il19 */"

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







var MainPage = /** @class */ (function () {
    function MainPage(auth, storage, platform, http) {
        this.auth = auth;
        this.storage = storage;
        this.platform = platform;
        this.http = http;
        this.titlePage = 'Главный';
    }
    MainPage.prototype.ngOnInit = function () {
        this.getToken();
    };
    MainPage.prototype.getUserList = function () {
        var _this = this;
        var load = {
            "token": this.token
        };
        console.log(load);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://studentapi.myknitu.ru/listusers/", load).then(function (res) {
            if (res.data.users) {
                _this.userList = res.data.users;
                console.log(_this.userList);
            }
        });
    };
    MainPage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('token').then(function (value) {
            _this.token = value;
            //console.log('init token ', this.token);
            _this.getUserList();
        });
        return true;
    };
    MainPage.ctorParameters = function () { return [
        { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module-es5.js.map