function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comodos-comodos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/card-comodo/card-comodo.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/card-comodo/card-comodo.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComodosCardComodoCardComodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-comodo-container\" (click)=\"irParaDispositivos()\">\n  <div class=\"card-comodo\">\n    <span>\n      <ion-icon class=\"comodo-icon\"></ion-icon>\n    </span>\n    <div class=\"infos\">\n      <ion-icon class=\"comodo-icon\" [src]=\"icon\" style=\"font-size: 32px;color: #EE6946;\"></ion-icon>\n      <span class=\"comodo-nome\">{{comodo.name}}</span>\n    </div>\n    <a class=\"icon-abrir-detalhes\">\n      <ion-icon src=\"./assets/icon/seta_direita.svg\" style=\"font-size: 18px;color: #EE6946;\">\n      </ion-icon>\n    </a>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/comodos.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/comodos.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComodosComodosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Cômodos\"></app-header>\n<ion-content>\n  <div class=\"auton-content\">\n    <div class=\"comodos\">\n      <app-card-comodo *ngFor=\"let comodo of comodos;\"\n      icon=\"./assets/icon/comodos/suite.svg\" [comodo]=\"comodo\">\n      </app-card-comodo>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/dispositivos/dispositivos.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/dispositivos/dispositivos.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComodosDispositivosDispositivosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Dispositivos\" [callbackBackButton]=\"voltarParaComodos\"></app-header>\n\n<ion-content>\n  <div class=\"auton-content\">\n    <div class=\"dispositivos\">\n      <div class=\"card-dispositivo-container\" *ngFor=\"let dispositivo of dispositivos\"\n        (click)=\"abrirPaginaControle(dispositivo)\">\n        <div class=\"card-dispositivo\" [ngClass]=\"{'active': dispositivo.active}\">\n          <ion-icon class=\"dispositivo-icon\" [src]=\"dispositivo.icon\"></ion-icon>\n          <div class=\"infos\">\n            <div class=\"container-nome-desc\">\n              <span class=\"dispositivo-nome\">{{dispositivo.nome}}</span>\n              <span class=\"dispositivo-desc\">{{dispositivo.comodo}}</span>\n            </div>\n            <ion-toggle [(ngModel)]=\"dispositivo.active\" *ngIf=\"dispositivo.type == 'relay'\" (click)=\"dispositivo.active = !dispositivo.active\"></ion-toggle>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/_services/comodos.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/comodos.service.ts ***!
    \**********************************************/

  /*! exports provided: ComodosService */

  /***/
  function srcApp_servicesComodosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComodosService", function () {
      return ComodosService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ComodosService = /*#__PURE__*/function () {
      function ComodosService(http) {
        _classCallCheck(this, ComodosService);

        this.http = http;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
      }

      _createClass(ComodosService, [{
        key: "getAll",
        value: function getAll() {
          console.log("CHAMANDOOO");
          return this.http.get("".concat(this.user.ddns, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (comodos) {
            return comodos;
          }));
        }
      }]);

      return ComodosService;
    }();

    ComodosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ComodosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ComodosService);
    /***/
  },

  /***/
  "./src/app/_services/relays.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_services/relays.service.ts ***!
    \*********************************************/

  /*! exports provided: RelaysService */

  /***/
  function srcApp_servicesRelaysServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelaysService", function () {
      return RelaysService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RelaysService = /*#__PURE__*/function () {
      function RelaysService(http) {
        _classCallCheck(this, RelaysService);

        this.http = http;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
      }

      _createClass(RelaysService, [{
        key: "toggleDevice",
        value: function toggleDevice(device, command) {
          var requestParams = {
            id: device.id,
            command: command
          };
          return this.http.post("".concat(this.user.ddns, "/R/command/"), requestParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
          }));
        }
      }]);

      return RelaysService;
    }();

    RelaysService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RelaysService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RelaysService);
    /***/
  },

  /***/
  "./src/app/comodos/card-comodo/card-comodo.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/comodos/card-comodo/card-comodo.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComodosCardComodoCardComodoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-comodo-container {\n  background: linear-gradient(52deg, #111619 0%, black 30%, #4c545c 100%);\n  padding: 1px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.43), 1px 5px 5px 0px rgba(0, 0, 0, 0.04);\n}\n.card-comodo-container .card-comodo {\n  display: flex;\n  flex-direction: column;\n  padding: 60px 13px 17px 26px;\n  border-radius: 9px;\n  background: linear-gradient(55deg, #111619 0%, #313940 98%);\n}\n.card-comodo-container .card-comodo .infos {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.card-comodo-container .card-comodo .infos .comodo-icon {\n  margin-bottom: 20px;\n}\n.card-comodo-container .card-comodo .infos .comodo-nome {\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  color: #f9fafb;\n}\n.card-comodo-container .card-comodo .icon-abrir-detalhes {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tb2Rvcy9jYXJkLWNvbW9kby9DOlxcVXNlcnNcXERlc2t0b3BcXFByb2plY3RzXFxwZXNzb2FsXFxpb25pYy1hdXRvblxcYXV0b24tcHdhXFxmYWJpb25vZnJlLWF1dG9uYXBwLWU4ZmZiN2E3NTBjNC9zcmNcXGFwcFxcY29tb2Rvc1xcY2FyZC1jb21vZG9cXGNhcmQtY29tb2RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21vZG9zL2NhcmQtY29tb2RvL2NhcmQtY29tb2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvRkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7QUNDUjtBREdRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNEWjtBRElnQjtFQUNJLG1CQUFBO0FDRnBCO0FES2dCO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNIcEI7QURRUTtFQUNJLGlCQUFBO0FDTloiLCJmaWxlIjoic3JjL2FwcC9jb21vZG9zL2NhcmQtY29tb2RvL2NhcmQtY29tb2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29tb2RvLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDUyZGVnLCByZ2JhKDE3LDIyLDI1LDEpIDAlLCByZ2JhKDAsMCwwLDEpIDMwJSwgcmdiYSg3Niw4NCw5MiwxKSAxMDAlKTtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQzKSwgMXB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5cbiAgICAuY2FyZC1jb21vZG8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDEzcHggMTdweCAyNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1NWRlZywgcmdiYSgxNywyMiwyNSwxKSAwJSwgcmdiYSg0OSw1Nyw2NCwxKSA5OCUpO1xuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMnB4ICMxMTE2MTk7XG4gICAgICAgIC8vIGVkaXRcbiAgICAvLyAgIGVkaXQtZW5kXG4gICAgICAgIC5pbmZvcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAuY29tb2RvIHtcbiAgICAgICAgICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYtbm9tZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmOWZhZmI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmljb24tYWJyaXItZGV0YWxoZXMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuY2FyZC1jb21vZG8tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDUyZGVnLCAjMTExNjE5IDAlLCBibGFjayAzMCUsICM0YzU0NWMgMTAwJSk7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40MyksIDFweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLmNhcmQtY29tb2RvLWNvbnRhaW5lciAuY2FyZC1jb21vZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA2MHB4IDEzcHggMTdweCAyNnB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1NWRlZywgIzExMTYxOSAwJSwgIzMxMzk0MCA5OCUpO1xufVxuLmNhcmQtY29tb2RvLWNvbnRhaW5lciAuY2FyZC1jb21vZG8gLmluZm9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2FyZC1jb21vZG8tY29udGFpbmVyIC5jYXJkLWNvbW9kbyAuaW5mb3MgLmNvbW9kby1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jYXJkLWNvbW9kby1jb250YWluZXIgLmNhcmQtY29tb2RvIC5pbmZvcyAuY29tb2RvLW5vbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gIGNvbG9yOiAjZjlmYWZiO1xufVxuLmNhcmQtY29tb2RvLWNvbnRhaW5lciAuY2FyZC1jb21vZG8gLmljb24tYWJyaXItZGV0YWxoZXMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/comodos/card-comodo/card-comodo.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/comodos/card-comodo/card-comodo.component.ts ***!
    \**************************************************************/

  /*! exports provided: CardComodoComponent */

  /***/
  function srcAppComodosCardComodoCardComodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComodoComponent", function () {
      return CardComodoComponent;
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

    var CardComodoComponent = /*#__PURE__*/function () {
      function CardComodoComponent(router) {
        _classCallCheck(this, CardComodoComponent);

        this.router = router;
      }

      _createClass(CardComodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "irParaDispositivos",
        value: function irParaDispositivos() {
          this.router.navigateByUrl('/tabs/comodos/dispositivos', {
            state: {
              comodo: this.comodo
            }
          });
        }
      }]);

      return CardComodoComponent;
    }();

    CardComodoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComodoComponent.prototype, "comodo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComodoComponent.prototype, "icon", void 0);
    CardComodoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-comodo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-comodo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/card-comodo/card-comodo.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-comodo.component.scss */
      "./src/app/comodos/card-comodo/card-comodo.component.scss"))["default"]]
    })], CardComodoComponent);
    /***/
  },

  /***/
  "./src/app/comodos/comodos-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/comodos/comodos-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ComodosPageRoutingModule */

  /***/
  function srcAppComodosComodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComodosPageRoutingModule", function () {
      return ComodosPageRoutingModule;
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


    var _comodos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comodos.page */
    "./src/app/comodos/comodos.page.ts");
    /* harmony import */


    var _dispositivos_dispositivos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dispositivos/dispositivos.page */
    "./src/app/comodos/dispositivos/dispositivos.page.ts");

    var routes = [{
      path: '',
      component: _comodos_page__WEBPACK_IMPORTED_MODULE_3__["ComodosPage"]
    }, {
      path: 'dispositivos',
      component: _dispositivos_dispositivos_page__WEBPACK_IMPORTED_MODULE_4__["DispositivosPage"]
    }];

    var ComodosPageRoutingModule = function ComodosPageRoutingModule() {
      _classCallCheck(this, ComodosPageRoutingModule);
    };

    ComodosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComodosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/comodos/comodos.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/comodos/comodos.module.ts ***!
    \*******************************************/

  /*! exports provided: ComodosPageModule */

  /***/
  function srcAppComodosComodosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComodosPageModule", function () {
      return ComodosPageModule;
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


    var _comodos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comodos-routing.module */
    "./src/app/comodos/comodos-routing.module.ts");
    /* harmony import */


    var _comodos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comodos.page */
    "./src/app/comodos/comodos.page.ts");
    /* harmony import */


    var _card_comodo_card_comodo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./card-comodo/card-comodo.component */
    "./src/app/comodos/card-comodo/card-comodo.component.ts");
    /* harmony import */


    var _dispositivos_dispositivos_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dispositivos/dispositivos.module */
    "./src/app/comodos/dispositivos/dispositivos.module.ts");
    /* harmony import */


    var _geral_geral_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../geral/geral.module */
    "./src/app/geral/geral.module.ts");

    var ComodosPageModule = function ComodosPageModule() {
      _classCallCheck(this, ComodosPageModule);
    };

    ComodosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comodos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComodosPageRoutingModule"], _dispositivos_dispositivos_module__WEBPACK_IMPORTED_MODULE_8__["DispositivosPageModule"], _geral_geral_module__WEBPACK_IMPORTED_MODULE_9__["GeralModule"]],
      declarations: [_comodos_page__WEBPACK_IMPORTED_MODULE_6__["ComodosPage"], _card_comodo_card_comodo_component__WEBPACK_IMPORTED_MODULE_7__["CardComodoComponent"]]
    })], ComodosPageModule);
    /***/
  },

  /***/
  "./src/app/comodos/comodos.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/comodos/comodos.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppComodosComodosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comodos {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -24px;\n}\n.comodos app-card-comodo {\n  width: 45%;\n  margin-bottom: 25px;\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tb2Rvcy9DOlxcVXNlcnNcXERlc2t0b3BcXFByb2plY3RzXFxwZXNzb2FsXFxpb25pYy1hdXRvblxcYXV0b24tcHdhXFxmYWJpb25vZnJlLWF1dG9uYXBwLWU4ZmZiN2E3NTBjNC9zcmNcXGFwcFxcY29tb2Rvc1xcY29tb2Rvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbW9kb3MvY29tb2Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21vZG9zL2NvbW9kb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW9kb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogLTI0cHg7XG5cbiAgICBhcHAtY2FyZC1jb21vZG8ge1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxufSIsIi5jb21vZG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xufVxuLmNvbW9kb3MgYXBwLWNhcmQtY29tb2RvIHtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/comodos/comodos.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/comodos/comodos.page.ts ***!
    \*****************************************/

  /*! exports provided: ComodosPage */

  /***/
  function srcAppComodosComodosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComodosPage", function () {
      return ComodosPage;
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


    var _services_comodos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../_services/comodos.service */
    "./src/app/_services/comodos.service.ts");

    var ComodosPage = /*#__PURE__*/function () {
      function ComodosPage(comodosService) {
        _classCallCheck(this, ComodosPage);

        this.comodosService = comodosService;
        this.comodos = [];
      }

      _createClass(ComodosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getComodos();
        }
      }, {
        key: "getComodos",
        value: function getComodos() {
          var _this = this;

          this.comodosService.getAll().subscribe(function (response) {
            var comodos = response;
            _this.comodos = [];

            for (var _i = 0, _Object$entries = Object.entries(comodos); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              var comodo = {
                name: key,
                ir: [],
                relays: [],
                yeeligths: []
              };

              if (value.hasOwnProperty('infrared')) {
                var _iterator = _createForOfIteratorHelper(value['infrared']),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var dispositivo = _step.value;
                    var dispositivos = [];

                    var _iterator2 = _createForOfIteratorHelper(dispositivo.alias),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var dispo = _step2.value;
                        dispositivos.push(dispo);
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    var protocolos = [];

                    var _iterator3 = _createForOfIteratorHelper(dispositivo.protocol),
                        _step3;

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        var protocolo = _step3.value;
                        protocolos.push(protocolo);
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }

                    for (var i = 0; i < dispositivos.length; ++i) {
                      comodo.ir.push({
                        id: dispositivo.id,
                        name: dispositivos[i],
                        protocolo: protocolos[i],
                        type: "infrared",
                        temperature: dispositivo.temperature
                      });
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } // if (value.hasOwnProperty('yeelight')) {
              //   for (let dispositivo of value['yeelight']) {
              //     comodo.yeeligths.push(
              //       {
              //         id: dispositivo.id,
              //         name: dispositivo.alias,
              //         protocolo: dispositivo.protocol,
              //         type: "rgb",
              //         switch: dispositivo.switch,
              //         color: dispositivo.color
              //       }
              //     );
              //   }
              // }


              if (value.hasOwnProperty('relays')) {
                var _iterator4 = _createForOfIteratorHelper(value['relays']),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _dispositivo = _step4.value;
                    comodo.relays.push({
                      id: _dispositivo.id,
                      name: _dispositivo.alias,
                      protocolo: null,
                      type: "relay",
                      "switch": _dispositivo["switch"]
                    });
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }

              _this.comodos.push(comodo);
            }

            console.log("Comodos", _this.comodos);
          });
        }
      }]);

      return ComodosPage;
    }();

    ComodosPage.ctorParameters = function () {
      return [{
        type: _services_comodos_service__WEBPACK_IMPORTED_MODULE_2__["ComodosService"]
      }];
    };

    ComodosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comodos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./comodos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/comodos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./comodos.page.scss */
      "./src/app/comodos/comodos.page.scss"))["default"]]
    })], ComodosPage);
    /***/
  },

  /***/
  "./src/app/comodos/dispositivos/dispositivos-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comodos/dispositivos/dispositivos-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DispositivosPageRoutingModule */

  /***/
  function srcAppComodosDispositivosDispositivosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DispositivosPageRoutingModule", function () {
      return DispositivosPageRoutingModule;
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


    var _dispositivos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dispositivos.page */
    "./src/app/comodos/dispositivos/dispositivos.page.ts");

    var routes = [{
      path: '/dispositivos',
      component: _dispositivos_page__WEBPACK_IMPORTED_MODULE_3__["DispositivosPage"]
    }];

    var DispositivosPageRoutingModule = function DispositivosPageRoutingModule() {
      _classCallCheck(this, DispositivosPageRoutingModule);
    };

    DispositivosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DispositivosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/comodos/dispositivos/dispositivos.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/comodos/dispositivos/dispositivos.module.ts ***!
    \*************************************************************/

  /*! exports provided: DispositivosPageModule */

  /***/
  function srcAppComodosDispositivosDispositivosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DispositivosPageModule", function () {
      return DispositivosPageModule;
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


    var _dispositivos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dispositivos-routing.module */
    "./src/app/comodos/dispositivos/dispositivos-routing.module.ts");
    /* harmony import */


    var _dispositivos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dispositivos.page */
    "./src/app/comodos/dispositivos/dispositivos.page.ts");
    /* harmony import */


    var _geral_geral_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../geral/geral.module */
    "./src/app/geral/geral.module.ts");

    var DispositivosPageModule = function DispositivosPageModule() {
      _classCallCheck(this, DispositivosPageModule);
    };

    DispositivosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dispositivos_routing_module__WEBPACK_IMPORTED_MODULE_5__["DispositivosPageRoutingModule"], _geral_geral_module__WEBPACK_IMPORTED_MODULE_7__["GeralModule"]],
      declarations: [_dispositivos_page__WEBPACK_IMPORTED_MODULE_6__["DispositivosPage"]]
    })], DispositivosPageModule);
    /***/
  },

  /***/
  "./src/app/comodos/dispositivos/dispositivos.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/comodos/dispositivos/dispositivos.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComodosDispositivosDispositivosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  margin-top: var(--ion-safe-area-top, 0);\n  display: flex;\n  align-items: center;\n  padding: 16px 22px 16px 32px;\n  background-color: rgba(0, 0, 0, 0.04);\n  -webkit-filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.7));\n          filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.7));\n  -webkit-backdrop-filter: blur(33px);\n          backdrop-filter: blur(33px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  --webkit-backdrop-filter: blur(33px);\n}\n.header .title {\n  font-family: Ruberoid;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 0.1em;\n  color: #f9fafb;\n  text-transform: uppercase;\n}\n.dispositivos {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -24px;\n}\n.dispositivos .card-dispositivo-container {\n  width: 45%;\n  margin-bottom: 25px;\n  margin-right: 12px;\n  background: linear-gradient(52deg, #111619 0%, black 30%, #4c545c 100%);\n  padding: 1px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.43), 1px 5px 5px 0px rgba(0, 0, 0, 0.04);\n}\n.dispositivos .card-dispositivo-container .card-dispositivo {\n  display: flex;\n  flex-direction: column;\n  padding: 25px 0px 20px 25px;\n  border-radius: 9px;\n  background: linear-gradient(55deg, #111619 0%, #313940 98%);\n}\n.dispositivos .card-dispositivo-container .card-dispositivo .infos {\n  margin-top: 60px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.dispositivos .card-dispositivo-container .card-dispositivo .infos .container-nome-desc {\n  display: flex;\n  flex-direction: column;\n}\n.dispositivos .card-dispositivo-container .card-dispositivo.active .dispositivo-icon, .dispositivos .card-dispositivo-container .card-dispositivo.active .dispositivo-nome {\n  color: #ed7d40;\n}\n.dispositivos .card-dispositivo-container .card-dispositivo .dispositivo-icon {\n  margin-bottom: 20px;\n  font-size: 32px;\n  color: #8d8d8d;\n}\n.dispositivos .card-dispositivo-container .card-dispositivo .dispositivo-nome {\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  color: #f9fafb;\n  margin-bottom: 5px;\n}\n.dispositivos .card-dispositivo-container .card-dispositivo .dispositivo-desc {\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: 9px;\n  letter-spacing: 0.22em;\n  color: #747272;\n}\n.dispositivos .card-dispositivo-container .card-dispositivo .icon-abrir-detalhes {\n  margin-left: auto;\n}\n.dispositivos .card-dispositivo-container.horizontal {\n  width: 100%;\n}\n.dispositivos .card-dispositivo-container.horizontal .card-dispositivo {\n  padding: 20px;\n  flex-direction: row;\n  justify-content: center;\n}\n.dispositivos .card-dispositivo-container.horizontal .card-dispositivo .infos {\n  margin-top: 0;\n  width: 100%;\n}\n.dispositivos .card-dispositivo-container.horizontal .card-dispositivo .infos .container-nome-desc {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tb2Rvcy9kaXNwb3NpdGl2b3MvQzpcXFVzZXJzXFxEZXNrdG9wXFxQcm9qZWN0c1xccGVzc29hbFxcaW9uaWMtYXV0b25cXGF1dG9uLXB3YVxcZmFiaW9ub2ZyZS1hdXRvbmFwcC1lOGZmYjdhNzUwYzQvc3JjXFxhcHBcXGNvbW9kb3NcXGRpc3Bvc2l0aXZvc1xcZGlzcG9zaXRpdm9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tb2Rvcy9kaXNwb3NpdGl2b3MvZGlzcG9zaXRpdm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtBQ0FKO0FERUk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQVI7QURJQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx1RUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9GQUFBO0FDRlI7QURJUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyREFBQTtBQ0ZaO0FESVk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRmhCO0FESWdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDRnBCO0FET2dCO0VBQ0ksY0FBQTtBQ0xwQjtBRFVnQjtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNScEI7QURXZ0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVHBCO0FEWWdCO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNWcEI7QURjWTtFQUNJLGlCQUFBO0FDWmhCO0FEZ0JRO0VBQ0ksV0FBQTtBQ2RaO0FEZ0JZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNkaEI7QURnQmdCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNkcEI7QURnQm9CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNkeEIiLCJmaWxlIjoic3JjL2FwcC9jb21vZG9zL2Rpc3Bvc2l0aXZvcy9kaXNwb3NpdGl2b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDE2cHggMjJweCAxNnB4IDMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMzcHgpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC40KTtcbiAgICAtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzNweCk7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogUnViZXJvaWQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgY29sb3I6ICNmOWZhZmI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxuXG4uZGlzcG9zaXRpdm9zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xuXG4gICAgLmNhcmQtZGlzcG9zaXRpdm8tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1MmRlZywgcmdiYSgxNywgMjIsIDI1LCAxKSAwJSwgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoNzYsIDg0LCA5MiwgMSkgMTAwJSk7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40MyksIDFweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuXG4gICAgICAgIC5jYXJkLWRpc3Bvc2l0aXZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwcHggMjBweCAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCByZ2JhKDE3LCAyMiwgMjUsIDEpIDAlLCByZ2JhKDQ5LCA1NywgNjQsIDEpIDk4JSk7XG5cbiAgICAgICAgICAgIC5pbmZvcyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5jb250YWluZXItbm9tZS1kZXNjIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAuZGlzcG9zaXRpdm8taWNvbiwgLmRpc3Bvc2l0aXZvLW5vbWUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VkN2Q0MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXNwb3NpdGl2byB7XG4gICAgICAgICAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxNDEsIDE0MSwgMTQxLCAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLW5vbWUge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjlmYWZiO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi1kZXNjIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzQ3MjcyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmljb24tYWJyaXItZGV0YWxoZXMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5ob3Jpem9udGFsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAuY2FyZC1kaXNwb3NpdGl2byB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLmluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lci1ub21lLWRlc2Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMjJweCAxNnB4IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjcpKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMzcHgpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzNweCk7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBSdWJlcm9pZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBjb2xvcjogI2Y5ZmFmYjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRpc3Bvc2l0aXZvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjRweDtcbn1cbi5kaXNwb3NpdGl2b3MgLmNhcmQtZGlzcG9zaXRpdm8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTJkZWcsICMxMTE2MTkgMCUsIGJsYWNrIDMwJSwgIzRjNTQ1YyAxMDAlKTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQzKSwgMXB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4uZGlzcG9zaXRpdm9zIC5jYXJkLWRpc3Bvc2l0aXZvLWNvbnRhaW5lciAuY2FyZC1kaXNwb3NpdGl2byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDI1cHggMHB4IDIwcHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTVkZWcsICMxMTE2MTkgMCUsICMzMTM5NDAgOTglKTtcbn1cbi5kaXNwb3NpdGl2b3MgLmNhcmQtZGlzcG9zaXRpdm8tY29udGFpbmVyIC5jYXJkLWRpc3Bvc2l0aXZvIC5pbmZvcyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGlzcG9zaXRpdm9zIC5jYXJkLWRpc3Bvc2l0aXZvLWNvbnRhaW5lciAuY2FyZC1kaXNwb3NpdGl2byAuaW5mb3MgLmNvbnRhaW5lci1ub21lLWRlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRpc3Bvc2l0aXZvcyAuY2FyZC1kaXNwb3NpdGl2by1jb250YWluZXIgLmNhcmQtZGlzcG9zaXRpdm8uYWN0aXZlIC5kaXNwb3NpdGl2by1pY29uLCAuZGlzcG9zaXRpdm9zIC5jYXJkLWRpc3Bvc2l0aXZvLWNvbnRhaW5lciAuY2FyZC1kaXNwb3NpdGl2by5hY3RpdmUgLmRpc3Bvc2l0aXZvLW5vbWUge1xuICBjb2xvcjogI2VkN2Q0MDtcbn1cbi5kaXNwb3NpdGl2b3MgLmNhcmQtZGlzcG9zaXRpdm8tY29udGFpbmVyIC5jYXJkLWRpc3Bvc2l0aXZvIC5kaXNwb3NpdGl2by1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogIzhkOGQ4ZDtcbn1cbi5kaXNwb3NpdGl2b3MgLmNhcmQtZGlzcG9zaXRpdm8tY29udGFpbmVyIC5jYXJkLWRpc3Bvc2l0aXZvIC5kaXNwb3NpdGl2by1ub21lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICBjb2xvcjogI2Y5ZmFmYjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmRpc3Bvc2l0aXZvcyAuY2FyZC1kaXNwb3NpdGl2by1jb250YWluZXIgLmNhcmQtZGlzcG9zaXRpdm8gLmRpc3Bvc2l0aXZvLWRlc2Mge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjJlbTtcbiAgY29sb3I6ICM3NDcyNzI7XG59XG4uZGlzcG9zaXRpdm9zIC5jYXJkLWRpc3Bvc2l0aXZvLWNvbnRhaW5lciAuY2FyZC1kaXNwb3NpdGl2byAuaWNvbi1hYnJpci1kZXRhbGhlcyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmRpc3Bvc2l0aXZvcyAuY2FyZC1kaXNwb3NpdGl2by1jb250YWluZXIuaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpc3Bvc2l0aXZvcyAuY2FyZC1kaXNwb3NpdGl2by1jb250YWluZXIuaG9yaXpvbnRhbCAuY2FyZC1kaXNwb3NpdGl2byB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpc3Bvc2l0aXZvcyAuY2FyZC1kaXNwb3NpdGl2by1jb250YWluZXIuaG9yaXpvbnRhbCAuY2FyZC1kaXNwb3NpdGl2byAuaW5mb3Mge1xuICBtYXJnaW4tdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXNwb3NpdGl2b3MgLmNhcmQtZGlzcG9zaXRpdm8tY29udGFpbmVyLmhvcml6b250YWwgLmNhcmQtZGlzcG9zaXRpdm8gLmluZm9zIC5jb250YWluZXItbm9tZS1kZXNjIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/comodos/dispositivos/dispositivos.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/comodos/dispositivos/dispositivos.page.ts ***!
    \***********************************************************/

  /*! exports provided: DispositivosPage */

  /***/
  function srcAppComodosDispositivosDispositivosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DispositivosPage", function () {
      return DispositivosPage;
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


    var _services_relays_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../_services/relays.service */
    "./src/app/_services/relays.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DispositivosPage = /*#__PURE__*/function () {
      function DispositivosPage(router, relaysService) {
        _classCallCheck(this, DispositivosPage);

        this.router = router;
        this.relaysService = relaysService;
        this.dispositivos = [];
      }

      _createClass(DispositivosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var comodo = window.history.state.comodo;
          console.log("Comodo", comodo);
          this.comodo = comodo;

          if (this.comodo.hasOwnProperty('ir')) {
            var _iterator5 = _createForOfIteratorHelper(this.comodo.ir),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var device = _step5.value;
                var device_name = device.name.toLowerCase();
                var dispositivo = {
                  id: device.id,
                  nome: device.name,
                  comodo: this.comodo.name,
                  temperatura: device.temperature,
                  protocol: device.protocolo,
                  controlhe: device_name,
                  icon: "./assets/icon/equipamentos/icon-".concat(device_name, ".svg"),
                  type: device.type
                };
                this.dispositivos.push(dispositivo);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          if (this.comodo.hasOwnProperty('relays')) {
            var _iterator6 = _createForOfIteratorHelper(this.comodo.relays),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _device = _step6.value;

                var _device_name = _device.name.toLowerCase();

                var _dispositivo2 = {
                  id: _device.id,
                  nome: _device.name,
                  comodo: this.comodo.name,
                  icon: "./assets/icon/equipamentos/icon-lamp.svg",
                  type: _device.type,
                  active: _device["switch"] == "on" ? true : false
                };
                this.dispositivos.push(_dispositivo2);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          if (this.comodo.hasOwnProperty('yeelights')) {
            var _iterator7 = _createForOfIteratorHelper(this.comodo.yeelights),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _device2 = _step7.value;

                var _device_name2 = _device2.name.toLowerCase();

                var _dispositivo3 = {
                  id: _device2.id,
                  nome: _device2.name,
                  comodo: this.comodo.name,
                  icon: "./assets/icon/equipamentos/icon-lamp.svg",
                  type: _device2.type,
                  active: _device2["switch"] == "on" ? true : false,
                  color: _device2.color
                };
                this.dispositivos.push(_dispositivo3);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }
      }, {
        key: "voltarParaComodos",
        value: function voltarParaComodos() {
          this.router.navigateByUrl('/tabs/comodos');
        }
      }, {
        key: "handleChangeToggle",
        value: function handleChangeToggle(e, dispostivo) {
          e.stopPropagation();
          dispostivo.active = e.detail.checked;
          this.toggleDispositivo(dispostivo);
        }
      }, {
        key: "abrirPaginaControle",
        value: function abrirPaginaControle(dispositivo) {
          if (dispositivo.type == 'relay') {
            dispositivo.active = !dispositivo.active;
            this.toggleDispositivo(dispositivo);
            return;
          }

          this.router.navigateByUrl("/controlhes/".concat(dispositivo.controlhe), {
            state: {
              dispositivo: dispositivo
            }
          });
        }
      }, {
        key: "toggleDispositivo",
        value: function toggleDispositivo(dispositivo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var command;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (dispositivo.active) command = 'on';else command = 'off';
                    this.relaysService.toggleDevice(dispositivo, command).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
                      console.log("Data", data);
                    }, function (error) {
                      console.log("Error", error);
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DispositivosPage;
    }();

    DispositivosPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_relays_service__WEBPACK_IMPORTED_MODULE_3__["RelaysService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DispositivosPage.prototype, "comodo", void 0);
    DispositivosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dispositivos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dispositivos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comodos/dispositivos/dispositivos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dispositivos.page.scss */
      "./src/app/comodos/dispositivos/dispositivos.page.scss"))["default"]]
    })], DispositivosPage);
    /***/
  }
}]);
//# sourceMappingURL=comodos-comodos-module-es5.js.map