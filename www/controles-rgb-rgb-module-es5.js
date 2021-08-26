function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controles-rgb-rgb-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/controles/rgb/rgb.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controles/rgb/rgb.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppControlesRgbRgbPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"RGB\" [callbackBackButton]=\"voltarParaComodos\" icon=\"./assets/icon/equipamentos/icon-lamp.svg\">\n</app-header>\n<ion-content>\n\n  <div class=\"auton-content\">\n\n    <app-botao-circular class=\"btn-power\" circular icon=\"./assets/icon/power.svg\" cor=\"#03F03A\">\n    </app-botao-circular>\n\n    <div class=\"controle-rgb\">\n\n      <div class=\"rgb-0\" (click)=\"changeColor('WHITE')\">\n      </div>\n\n      <div class=\"rgb-1\" (click)=\"changeColor('YELLOW')\">\n      </div>\n\n      <div class=\"rgb-2\" (click)=\"changeColor('GREEN')\">\n      </div>\n\n      <div class=\"rgb-3\" (click)=\"changeColor('BLUE')\">\n      </div>\n\n      <div class=\"rgb-4\" (click)=\"changeColor('RED')\">\n      </div>\n\n      <ion-range (ionChange)=\"change($event)\" min=\"1\" max=\"100\" step=\"1\">\n        <ion-icon slot=\"start\" size=\"small\" name=\"sunny\" style=\"color: orange;opacity: .7;\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"sunny\" style=\"color: orange;\"></ion-icon>\n      </ion-range>\n\n    </div>\n\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/controles/rgb/rgb-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/controles/rgb/rgb-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RgbPageRoutingModule */

  /***/
  function srcAppControlesRgbRgbRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RgbPageRoutingModule", function () {
      return RgbPageRoutingModule;
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


    var _rgb_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rgb.page */
    "./src/app/controles/rgb/rgb.page.ts");

    var routes = [{
      path: '',
      component: _rgb_page__WEBPACK_IMPORTED_MODULE_3__["RgbPage"]
    }];

    var RgbPageRoutingModule = function RgbPageRoutingModule() {
      _classCallCheck(this, RgbPageRoutingModule);
    };

    RgbPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RgbPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/controles/rgb/rgb.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/controles/rgb/rgb.module.ts ***!
    \*********************************************/

  /*! exports provided: RgbPageModule */

  /***/
  function srcAppControlesRgbRgbModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RgbPageModule", function () {
      return RgbPageModule;
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


    var _rgb_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rgb-routing.module */
    "./src/app/controles/rgb/rgb-routing.module.ts");
    /* harmony import */


    var _rgb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rgb.page */
    "./src/app/controles/rgb/rgb.page.ts");
    /* harmony import */


    var src_app_geral_geral_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/geral/geral.module */
    "./src/app/geral/geral.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RgbPageModule = /*#__PURE__*/function () {
      function RgbPageModule(router) {
        _classCallCheck(this, RgbPageModule);

        this.router = router;
      }

      _createClass(RgbPageModule, [{
        key: "voltarParaComodos",
        value: function voltarParaComodos() {
          this.router.navigateByUrl('/tabs/comodos');
        }
      }]);

      return RgbPageModule;
    }();

    RgbPageModule.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    RgbPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rgb_routing_module__WEBPACK_IMPORTED_MODULE_5__["RgbPageRoutingModule"], src_app_geral_geral_module__WEBPACK_IMPORTED_MODULE_7__["GeralModule"]],
      declarations: [_rgb_page__WEBPACK_IMPORTED_MODULE_6__["RgbPage"]]
    })], RgbPageModule);
    /***/
  },

  /***/
  "./src/app/controles/rgb/rgb.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/controles/rgb/rgb.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppControlesRgbRgbPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-power {\n  width: 50px;\n  height: 50px;\n}\n\n.controle-rgb {\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 30px;\n}\n\n.controle-rgb .rgb-0 {\n  display: block;\n  background: #fff;\n  padding: 20px 30px 30px 25px;\n  border-radius: 8px;\n  margin-top: 38px;\n  width: 10%;\n}\n\n.controle-rgb .rgb-1 {\n  display: block;\n  background: yellow;\n  padding: 20px 30px 30px 25px;\n  border-radius: 8px;\n  margin-top: 38px;\n  width: 10%;\n}\n\n.controle-rgb .rgb-2 {\n  display: block;\n  background: green;\n  padding: 20px 30px 30px 25px;\n  border-radius: 8px;\n  margin-top: 22px;\n  width: 10%;\n}\n\n.controle-rgb .rgb-3 {\n  display: block;\n  background: blue;\n  padding: 20px 30px 30px 25px;\n  border-radius: 8px;\n  margin-top: 22px;\n  width: 10%;\n}\n\n.controle-rgb .rgb-4 {\n  display: block;\n  background: red;\n  padding: 20px 30px 30px 25px;\n  border-radius: 8px;\n  margin-top: 22px;\n  width: 10%;\n  margin-bottom: 28px;\n}\n\n.botao {\n  background: #3171e0;\n  padding: 10px 20px 20px 10px;\n}\n\nion-range {\n  --bar-background: #ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGVzL3JnYi9DOlxcVXNlcnNcXERlc2t0b3BcXFByb2plY3RzXFxwZXNzb2FsXFxpb25pYy1hdXRvblxcYXV0b24tcHdhXFxmYWJpb25vZnJlLWF1dG9uYXBwLWU4ZmZiN2E3NTBjNC9zcmNcXGFwcFxcY29udHJvbGVzXFxyZ2JcXHJnYi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRyb2xlcy9yZ2IvcmdiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURHSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNEUjs7QURJSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNGUjs7QURLSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDSFI7O0FET0E7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbGVzL3JnYi9yZ2IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1wb3dlciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29udHJvbGUtcmdiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIC5yZ2ItMCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMzBweCAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuXG4gICAgLnJnYi0xIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzOHB4O1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgIH1cblxuICAgIC5yZ2ItMiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgIH1cblxuICAgIC5yZ2ItMyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMzBweCAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuXG4gICAgLnJnYi00IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIH1cbn1cblxuLmJvdGFvIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzE3MWUwO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDEwcHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gICAgLS1iYXItYmFja2dyb3VuZDogI2ZmZmY7XG59XG4iLCIuYnRuLXBvd2VyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNvbnRyb2xlLXJnYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5jb250cm9sZS1yZ2IgLnJnYi0wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMzhweDtcbiAgd2lkdGg6IDEwJTtcbn1cbi5jb250cm9sZS1yZ2IgLnJnYi0xIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiAzOHB4O1xuICB3aWR0aDogMTAlO1xufVxuLmNvbnRyb2xlLXJnYiAucmdiLTIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgd2lkdGg6IDEwJTtcbn1cbi5jb250cm9sZS1yZ2IgLnJnYi0zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgd2lkdGg6IDEwJTtcbn1cbi5jb250cm9sZS1yZ2IgLnJnYi00IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICB3aWR0aDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4uYm90YW8ge1xuICBiYWNrZ3JvdW5kOiAjMzE3MWUwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAxMHB4O1xufVxuXG5pb24tcmFuZ2Uge1xuICAtLWJhci1iYWNrZ3JvdW5kOiAjZmZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/controles/rgb/rgb.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/controles/rgb/rgb.page.ts ***!
    \*******************************************/

  /*! exports provided: RgbPage */

  /***/
  function srcAppControlesRgbRgbPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RgbPage", function () {
      return RgbPage;
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


    var _services_infrared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../_services/infrared.service */
    "./src/app/_services/infrared.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RgbPage = /*#__PURE__*/function () {
      function RgbPage(infraredService) {
        _classCallCheck(this, RgbPage);

        this.infraredService = infraredService;
      }

      _createClass(RgbPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var dispositivo = window.history.state.dispositivo;
          this.device = dispositivo;
          console.log("Dispostiivo", this.device);
        }
      }, {
        key: "changeColor",
        value: function changeColor(command) {
          this.sendCommand(command);
        }
      }, {
        key: "sendCommand",
        value: function sendCommand(command) {
          this.infraredService.runCommand(this.device, command).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
            console.log("Data", data);
          }, function (error) {
            console.log("Error", error);
          });
        }
      }, {
        key: "changeDimmer",
        value: function changeDimmer(event) {
          var _this = this;

          clearTimeout(this.dimmerTimeout);
          this.dimmerTimeout = setTimeout(function () {
            _this.infraredService.changeBright(_this.device, 'BRIGHT', event.target.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
              console.log("Data", data);
            }, function (error) {
              console.log("Error", error);
            });
          }, 300);
        }
      }]);

      return RgbPage;
    }();

    RgbPage.ctorParameters = function () {
      return [{
        type: _services_infrared_service__WEBPACK_IMPORTED_MODULE_2__["InfraredService"]
      }];
    };

    RgbPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rgb',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rgb.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/controles/rgb/rgb.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rgb.page.scss */
      "./src/app/controles/rgb/rgb.page.scss"))["default"]]
    })], RgbPage);
    /***/
  }
}]);
//# sourceMappingURL=controles-rgb-rgb-module-es5.js.map