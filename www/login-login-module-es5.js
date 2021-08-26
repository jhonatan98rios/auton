function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"login\">\n    <img class=\"logo\" src=\"../../assets/logo/logo_auton.svg\">\n\n    <form class=\"auton-form login-form\" #form=\"ngForm\" (ngSubmit)=\"login()\">\n\n      <div class=\"auton-form-input-group\">\n        <label for=\"email\" class=\"auton-form-input-group-label\">Login</label>\n        <input id=\"email\"  name=\"user\" class=\"auton-form-input-group-input\"  [(ngModel)]=\"user\" style=\"text-transform: none;\"/>\n      </div>\n\n      <div class=\"auton-form-input-group\" style=\"margin-top: 15px;\">\n        <label type=\"text\" for=\"senha\" class=\"auton-form-input-group-label\">Senha</label>\n        <div style=\"display: flex;align-items: center;\">\n          <input id=\"senha\" name=\"passwd\" [type]=\"mostrarSenha ? 'text' : 'password'\" class=\"auton-form-input-group-input\" style=\"text-transform: none;\"  \n          [(ngModel)]=\"passwd\"/>\n          <ion-icon *ngIf=\"!mostrarSenha\" name=\"eye-outline\" class=\"auton-form-input-group-input-icon-senha\" (click)=\"toggleInputSenha()\"></ion-icon>\n          <ion-icon *ngIf=\"mostrarSenha\" name=\"eye-off-outline\" class=\"auton-form-input-group-input-icon-senha\" (click)=\"toggleInputSenha()\"></ion-icon>\n        </div>\n      </div>\n\n      <div class=\"auton-form-input-group\" style=\"margin-top: 15px;\">\n        <label type=\"text\" for=\"ddns\" class=\"auton-form-input-group-label\">DDNS</label>\n        <input id=\"ddns\" type=\"text\" name=\"ddns\" [(ngModel)]=\"ddns\" class=\"auton-form-input-group-input\"/>\n      </div>\n\n      <button type=\"submit\" class=\"auton-button primary\" style=\"margin-top: 25px;\">Entrar</button>\n    </form>\n\n    <div class=\"login-actions\">\n      <!-- Caso tenha cadastro e recuperação de senha, colocar os botões aqui -->\n    </div>\n\n    <div class=\"login-footer\">\n      <span>BY SOLUTECH</span>\n      <span class=\"versao\">VERSÃO 1.0.0</span>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login {\n  display: flex;\n  flex-direction: column;\n  padding: 27px 50px 180px 50px;\n  height: 100%;\n}\n.login .logo {\n  width: 120px;\n  align-self: center;\n}\n.login-form {\n  margin-top: 80px;\n}\n.login-footer {\n  align-items: center;\n  align-self: center;\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 8px;\n  letter-spacing: 0.22em;\n  color: #747272;\n  opacity: 0.53;\n}\n.login-footer .versao {\n  margin-top: 5px;\n  font-size: 9px;\n  font-weight: 400;\n  letter-spacing: 0.22em;\n  color: #747272;\n  opacity: 0.53;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxEZXNrdG9wXFxQcm9qZWN0c1xccGVzc29hbFxcaW9uaWMtYXV0b25cXGF1dG9uLXB3YVxcZmFiaW9ub2ZyZS1hdXRvbmFwcC1lOGZmYjdhNzUwYzQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDSko7QURNSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyN3B4IDUwcHggMTgwcHggNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5sb2dvIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG5cbiAgJi1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG5cbiAgJi1mb290ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjJlbTtcbiAgICBjb2xvcjogIzc0NzI3MjtcbiAgICBvcGFjaXR5OiAwLjUzO1xuXG4gICAgLnZlcnNhbyB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gICAgICBjb2xvcjogIzc0NzI3MjtcbiAgICAgIG9wYWNpdHk6IDAuNTM7XG4gICAgfVxuXG4gIH1cbn1cbiIsIi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDI3cHggNTBweCAxODBweCA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4gLmxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5sb2dpbi1mb290ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xuICBjb2xvcjogIzc0NzI3MjtcbiAgb3BhY2l0eTogMC41Mztcbn1cbi5sb2dpbi1mb290ZXIgLnZlcnNhbyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gIGNvbG9yOiAjNzQ3MjcyO1xuICBvcGFjaXR5OiAwLjUzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(authenticationService, router) {
        _classCallCheck(this, LoginPage);

        this.authenticationService = authenticationService;
        this.router = router;
        this.mostrarSenha = false;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleInputSenha",
        value: function toggleInputSenha() {
          this.mostrarSenha = !this.mostrarSenha;
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.authenticationService.login(this.user, this.passwd, this.ddns).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
            _this.router.navigateByUrl("/tabs");

            console.log("DDNS", _this.ddns);
          }, function (error) {});
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map