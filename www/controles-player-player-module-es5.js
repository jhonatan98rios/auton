function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controles-player-player-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/controles/player/player.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controles/player/player.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppControlesPlayerPlayerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Player\" [callbackBackButton]=\"voltarParaComodos\" icon=\"./assets/icon/equipamentos/icon-player.svg\">\n</app-header>\n\n<ion-content>\n  <div class=\"auton-content\" style=\"height: 100%;\">\n    <div class=\"controlhe-player\">\n      <div class=\"header\">\n        <app-botao-circular circular icon=\"./assets/icon/power.svg\" [callbackClick]=\"power\" cor=\"#03F03A\">\n        </app-botao-circular>\n        <div class=\"btn-container\" style=\"margin-left: auto;\">\n          <app-botao-circular circular icon=\"./assets/icon/controllers/tv-mute.svg\"\n            [callbackClickObject]=\"muteObjectCallBack\">\n          </app-botao-circular>\n          <span class=\"icon-label\">mudo</span>\n        </div>\n      </div>\n      \n      <div class=\"botoes-canais\">\n        <app-botao-circular iconName=\"chevron-up-outline\" [callbackClickObject]=\"addChObjectCallBack\">\n        </app-botao-circular>\n        <span class=\"texto\">CH</span>\n        <app-botao-circular iconName=\"chevron-down-outline\" [callbackClickObject]=\"removeChObjectCallBack\">\n        </app-botao-circular>\n      </div>\n\n      <div class=\"botoes-baixo\">\n        <div class=\"botao\">\n          <ion-icon src=\"/assets/icon/controllers/player-first-last.svg\" style=\"transform: rotate(-90deg);\"></ion-icon>\n        </div>\n        <div class=\"botao\">\n          <ion-icon src=\"/assets/icon/controllers/player-pause.svg\"></ion-icon>\n        </div>\n        <div class=\"botao\">\n          <ion-icon src=\"/assets/icon/controllers/player-first-last.svg\" style=\"transform: rotate(90deg);\"></ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/controles/player/player-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/controles/player/player-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PlayerPageRoutingModule */

  /***/
  function srcAppControlesPlayerPlayerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerPageRoutingModule", function () {
      return PlayerPageRoutingModule;
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


    var _player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./player.page */
    "./src/app/controles/player/player.page.ts");

    var routes = [{
      path: '',
      component: _player_page__WEBPACK_IMPORTED_MODULE_3__["PlayerPage"]
    }];

    var PlayerPageRoutingModule = function PlayerPageRoutingModule() {
      _classCallCheck(this, PlayerPageRoutingModule);
    };

    PlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlayerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/controles/player/player.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/controles/player/player.module.ts ***!
    \***************************************************/

  /*! exports provided: PlayerPageModule */

  /***/
  function srcAppControlesPlayerPlayerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function () {
      return PlayerPageModule;
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


    var _player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./player-routing.module */
    "./src/app/controles/player/player-routing.module.ts");
    /* harmony import */


    var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./player.page */
    "./src/app/controles/player/player.page.ts");
    /* harmony import */


    var src_app_geral_geral_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/geral/geral.module */
    "./src/app/geral/geral.module.ts");

    var PlayerPageModule = function PlayerPageModule() {
      _classCallCheck(this, PlayerPageModule);
    };

    PlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _player_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerPageRoutingModule"], src_app_geral_geral_module__WEBPACK_IMPORTED_MODULE_7__["GeralModule"]],
      declarations: [_player_page__WEBPACK_IMPORTED_MODULE_6__["PlayerPage"]]
    })], PlayerPageModule);
    /***/
  },

  /***/
  "./src/app/controles/player/player.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/controles/player/player.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppControlesPlayerPlayerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".controlhe-player {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.controlhe-player .header {\n  display: flex;\n  align-items: start;\n  margin-bottom: 50px;\n}\n.controlhe-player .header app-botao-circular {\n  width: 50px;\n  height: 50px;\n}\n.controlhe-player .botoes-canais {\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n}\n.controlhe-player .botoes-canais .texto {\n  text-align: center;\n  margin: 20px 0;\n  font-weight: 300;\n  font-size: 10px;\n  letter-spacing: 0.35em;\n  color: #f9fafb;\n}\n.controlhe-player .botoes-canais app-botao-circular {\n  width: 50px;\n  height: 50px;\n}\n.controlhe-player .btn-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.controlhe-player .btn-container:not(:last-of-type) {\n  margin-right: 30px;\n}\n.controlhe-player .btn-container .icon-label {\n  margin-top: 7px;\n  font-family: Fracktif;\n  font-weight: 300;\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-align: center;\n  color: #f9fafb;\n  text-transform: uppercase;\n}\n.controlhe-player .volume {\n  width: 100%;\n  margin: auto 0;\n}\n.controlhe-player .botoes-baixo {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: auto;\n  border-radius: 50px;\n  background: linear-gradient(#111619 0%, #282e34 100%);\n  -webkit-filter: 0.5px;\n          filter: 0.5px;\n  padding: 25px 35px;\n}\n.controlhe-player .botoes-baixo .botao ion-icon {\n  font-size: 25px;\n}\n.controlhe-player .botoes-baixo .botao:not(:last-of-type) {\n  flex: 1 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGVzL3BsYXllci9DOlxcVXNlcnNcXERlc2t0b3BcXFByb2plY3RzXFxwZXNzb2FsXFxpb25pYy1hdXRvblxcYXV0b24tcHdhXFxmYWJpb25vZnJlLWF1dG9uYXBwLWU4ZmZiN2E3NTBjNC9zcmNcXGFwcFxcY29udHJvbGVzXFxwbGF5ZXJcXHBsYXllci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRyb2xlcy9wbGF5ZXIvcGxheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDWjtBREdJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNEUjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRFo7QURJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRlo7QURNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURPUTtFQUNJLGVBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNOWjtBRFVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNSUjtBRFdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUdBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLHFCQUFBO1VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDWFI7QURhWTtFQUNJLGVBQUE7QUNYaEI7QURjWTtFQUNJLFdBQUE7QUNaaEIiLCJmaWxlIjoic3JjL2FwcC9jb250cm9sZXMvcGxheWVyL3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbGhlLXBsYXllciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgYXBwLWJvdGFvLWNpcmN1bGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvdG9lcy1jYW5haXMge1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAudGV4dG8ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMzVlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZjlmYWZiO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLWJvdGFvLWNpcmN1bGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcblxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZyYWNrdGlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2Y5ZmFmYjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudm9sdW1lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgIH1cblxuICAgIC5ib3RvZXMtYmFpeG8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cblxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzExMTYxOSAwJSwgIzI4MmUzNCAxMDAlKTtcbiAgICAgICAgZmlsdGVyOiAwLjVweDtcbiAgICAgICAgcGFkZGluZzogMjVweCAzNXB4O1xuICAgICAgICAuYm90YW8ge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSl7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiLmNvbnRyb2xoZS1wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udHJvbGhlLXBsYXllciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmNvbnRyb2xoZS1wbGF5ZXIgLmhlYWRlciBhcHAtYm90YW8tY2lyY3VsYXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbnRyb2xoZS1wbGF5ZXIgLmJvdG9lcy1jYW5haXMge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250cm9saGUtcGxheWVyIC5ib3RvZXMtY2FuYWlzIC50ZXh0byB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzVlbTtcbiAgY29sb3I6ICNmOWZhZmI7XG59XG4uY29udHJvbGhlLXBsYXllciAuYm90b2VzLWNhbmFpcyBhcHAtYm90YW8tY2lyY3VsYXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbnRyb2xoZS1wbGF5ZXIgLmJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRyb2xoZS1wbGF5ZXIgLmJ0bi1jb250YWluZXI6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLmNvbnRyb2xoZS1wbGF5ZXIgLmJ0bi1jb250YWluZXIgLmljb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtZmFtaWx5OiBGcmFja3RpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjlmYWZiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNvbnRyb2xoZS1wbGF5ZXIgLnZvbHVtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5jb250cm9saGUtcGxheWVyIC5ib3RvZXMtYmFpeG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTExNjE5IDAlLCAjMjgyZTM0IDEwMCUpO1xuICBmaWx0ZXI6IDAuNXB4O1xuICBwYWRkaW5nOiAyNXB4IDM1cHg7XG59XG4uY29udHJvbGhlLXBsYXllciAuYm90b2VzLWJhaXhvIC5ib3RhbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5jb250cm9saGUtcGxheWVyIC5ib3RvZXMtYmFpeG8gLmJvdGFvOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGZsZXg6IDEgMCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/controles/player/player.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/controles/player/player.page.ts ***!
    \*************************************************/

  /*! exports provided: PlayerPage */

  /***/
  function srcAppControlesPlayerPlayerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerPage", function () {
      return PlayerPage;
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

    var PlayerPage = /*#__PURE__*/function () {
      function PlayerPage(router) {
        _classCallCheck(this, PlayerPage);

        this.router = router;
      }

      _createClass(PlayerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "voltarParaComodos",
        value: function voltarParaComodos() {
          this.router.navigateByUrl('/tabs/comodos');
        }
      }]);

      return PlayerPage;
    }();

    PlayerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-player',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./player.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/controles/player/player.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./player.page.scss */
      "./src/app/controles/player/player.page.scss"))["default"]]
    })], PlayerPage);
    /***/
  }
}]);
//# sourceMappingURL=controles-player-player-module-es5.js.map