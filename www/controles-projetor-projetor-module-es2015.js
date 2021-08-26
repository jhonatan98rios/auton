(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controles-projetor-projetor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controles/projetor/projetor.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controles/projetor/projetor.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Projetor\" [callbackBackButton]=\"voltarParaComodos\" icon=\"./assets/equipamentos/icon-projetor.svg\">\n</app-header>\n\n\n<ion-content>\n  <div class=\"auton-content\" style=\"height: 100%;\">\n    <div class=\"projetor\">\n      <div class=\"header\">\n        <app-botao-circular circular icon=\"./assets/icon/power.svg\" cor=\"#03F03A\"\n          [callbackClickObject]=\"pwrOnObjectCallBack\" style=\"width: 50px;height: 50px;\">\n        </app-botao-circular>\n      </div>\n      <div class=\"control-body\">\n        <div class=\"botoes-volume\">\n          <app-botao-circular iconName=\"add-outline\" [callbackClickObject]=\"addVolumeObjectCallBack\">\n          </app-botao-circular>\n          <span class=\"texto\">VOL</span>\n          <app-botao-circular iconName=\"remove-outline\" [callbackClickObject]=\"removeVolumeObjectCallBack\">\n          </app-botao-circular>\n        </div>\n        <app-controle-direcional [callbackOkClickObject]=\"okObjectCallback\" [callbackUpClickObject]=\"upObjectCallback\"\n          [callbackDownClickObject]=\"downObjectCallback\" [callbackLeftClickObject]=\"leftObjectCallback\"\n          [callbackRightClickObject]=\"rightObjectCallback\"></app-controle-direcional>\n      </div>\n      <div class=\"botoes botoes-baixo\">\n        <div class=\"btn-container\">\n          <app-botao-circular circular icon=\"./assets/icon/controllers/tv-menu.svg\"\n            [callbackClickObject]=\"menuObjectCallBack\">\n          </app-botao-circular>\n          <span class=\"icon-label\">menu</span>\n        </div>\n        <div class=\"btn-container\">\n          <app-botao-circular circular icon=\"./assets/icon/controllers/tv-return.svg\"\n            [callbackClickObject]=\"returnObjectCallBack\">\n          </app-botao-circular>\n          <span class=\"icon-label\">retornar</span>\n        </div>\n        <div class=\"btn-container\">\n          <app-botao-circular circular icon=\"./assets/icon/controllers/tv-home.svg\"\n            [callbackClickObject]=\"homeObjectCallBack\">\n          </app-botao-circular>\n          <span class=\"icon-label\">auto</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/controles/projetor/projetor-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/controles/projetor/projetor-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProjetorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetorPageRoutingModule", function() { return ProjetorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projetor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projetor.page */ "./src/app/controles/projetor/projetor.page.ts");




const routes = [
    {
        path: '',
        component: _projetor_page__WEBPACK_IMPORTED_MODULE_3__["ProjetorPage"]
    }
];
let ProjetorPageRoutingModule = class ProjetorPageRoutingModule {
};
ProjetorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetorPageRoutingModule);



/***/ }),

/***/ "./src/app/controles/projetor/projetor.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/controles/projetor/projetor.module.ts ***!
  \*******************************************************/
/*! exports provided: ProjetorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetorPageModule", function() { return ProjetorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _projetor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projetor-routing.module */ "./src/app/controles/projetor/projetor-routing.module.ts");
/* harmony import */ var _projetor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projetor.page */ "./src/app/controles/projetor/projetor.page.ts");
/* harmony import */ var src_app_geral_geral_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/geral/geral.module */ "./src/app/geral/geral.module.ts");








let ProjetorPageModule = class ProjetorPageModule {
};
ProjetorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projetor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetorPageRoutingModule"],
            src_app_geral_geral_module__WEBPACK_IMPORTED_MODULE_7__["GeralModule"]
        ],
        declarations: [_projetor_page__WEBPACK_IMPORTED_MODULE_6__["ProjetorPage"]]
    })
], ProjetorPageModule);



/***/ }),

/***/ "./src/app/controles/projetor/projetor.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/controles/projetor/projetor.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".projetor {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.projetor .control-body {\n  margin: auto 0;\n  display: flex;\n  align-items: center;\n}\n.projetor .control-body .botoes-volume {\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n}\n.projetor .control-body .botoes-volume .texto {\n  text-align: center;\n  margin: 20px 0;\n  font-weight: 300;\n  font-size: 10px;\n  letter-spacing: 0.35em;\n  color: #f9fafb;\n}\n.projetor .control-body .botoes-volume app-botao-circular {\n  width: 50px;\n  height: 50px;\n}\n.projetor .botoes {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.projetor .botoes .btn-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.projetor .botoes .btn-container:not(:last-of-type) {\n  margin-right: 50px;\n}\n.projetor .botoes .btn-container .icon-label {\n  margin-top: 7px;\n  font-family: Fracktif;\n  font-weight: 300;\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-align: center;\n  color: #f9fafb;\n  text-transform: uppercase;\n}\n.projetor .botoes-baixo {\n  margin-top: 35px;\n}\n.projetor .botoes-baixo app-botao-circular {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGVzL3Byb2pldG9yL0M6XFxVc2Vyc1xcRGVza3RvcFxcUHJvamVjdHNcXHBlc3NvYWxcXGlvbmljLWF1dG9uXFxhdXRvbi1wd2FcXGZhYmlvbm9mcmUtYXV0b25hcHAtZThmZmI3YTc1MGM0L3NyY1xcYXBwXFxjb250cm9sZXNcXHByb2pldG9yXFxwcm9qZXRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbnRyb2xlcy9wcm9qZXRvci9wcm9qZXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURJSTtFQUNJLGNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNIUjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNIWjtBREtZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDSGhCO0FETVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0poQjtBRFNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDUFI7QURTUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUFo7QURTWTtFQUNJLGtCQUFBO0FDUGhCO0FEVVk7RUFDSSxlQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDVGhCO0FEYVE7RUFDSSxnQkFBQTtBQ1haO0FEYVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1hoQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xlcy9wcm9qZXRvci9wcm9qZXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamV0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAuaGVhZGVyIHtcbiAgICB9XG5cbiAgICAuY29udHJvbC1ib2R5IHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuYm90b2VzLXZvbHVtZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnRleHRvIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMzVlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y5ZmFmYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwLWJvdGFvLWNpcmN1bGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm90b2VzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG5cbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRnJhY2t0aWY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmOWZhZmI7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFpeG8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcblxuICAgICAgICAgICAgYXBwLWJvdGFvLWNpcmN1bGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucHJvamV0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvamV0b3IgLmNvbnRyb2wtYm9keSB7XG4gIG1hcmdpbjogYXV0byAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2pldG9yIC5jb250cm9sLWJvZHkgLmJvdG9lcy12b2x1bWUge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJvamV0b3IgLmNvbnRyb2wtYm9keSAuYm90b2VzLXZvbHVtZSAudGV4dG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM1ZW07XG4gIGNvbG9yOiAjZjlmYWZiO1xufVxuLnByb2pldG9yIC5jb250cm9sLWJvZHkgLmJvdG9lcy12b2x1bWUgYXBwLWJvdGFvLWNpcmN1bGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5wcm9qZXRvciAuYm90b2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wcm9qZXRvciAuYm90b2VzIC5idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZXRvciAuYm90b2VzIC5idG4tY29udGFpbmVyOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi5wcm9qZXRvciAuYm90b2VzIC5idG4tY29udGFpbmVyIC5pY29uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBmb250LWZhbWlseTogRnJhY2t0aWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2Y5ZmFmYjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9qZXRvciAuYm90b2VzLWJhaXhvIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5wcm9qZXRvciAuYm90b2VzLWJhaXhvIGFwcC1ib3Rhby1jaXJjdWxhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/controles/projetor/projetor.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/controles/projetor/projetor.page.ts ***!
  \*****************************************************/
/*! exports provided: ProjetorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetorPage", function() { return ProjetorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_infrared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_services/infrared.service */ "./src/app/_services/infrared.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProjetorPage = class ProjetorPage {
    constructor(router, infraredService) {
        this.router = router;
        this.infraredService = infraredService;
        this.pwrOnObjectCallBack = {
            self: this,
            callback: (self) => {
                self.sendCommand('PWR_ON');
            }
        };
        this.okObjectCallback = {
            self: this,
            callback: (self) => {
                self.sendCommand('ENTER');
            }
        };
        this.upObjectCallback = {
            self: this,
            callback: (self) => {
                self.sendCommand('UP');
            }
        };
        this.downObjectCallback = {
            self: this,
            callback: (self) => {
                self.sendCommand('DOWN');
            }
        };
        this.leftObjectCallback = {
            self: this,
            callback: (self) => {
                self.sendCommand('LEFT');
            }
        };
        this.rightObjectCallback = {
            self: this,
            callback: (self) => {
                self.sendCommand('RIGHT');
            }
        };
        this.addVolumeObjectCallBack = {
            self: this,
            callback: (self) => {
                self.sendCommand('VOL_ADD');
            }
        };
        this.removeVolumeObjectCallBack = {
            self: this,
            callback: (self) => {
                self.sendCommand('VOL_SUB');
            }
        };
        this.menuObjectCallBack = {
            self: this,
            callback: (self) => {
                self.sendCommand('MENU');
            }
        };
        this.returnObjectCallBack = {
            self: this,
            callback: (self) => {
                self.sendCommand('RETURN');
            }
        };
        this.homeObjectCallBack = {
            self: this,
            callback: (self) => {
                self.sendCommand('AUTO');
            }
        };
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        const { dispositivo } = window.history.state;
        this.device = dispositivo;
        console.log("Dispostiivo", this.device);
    }
    voltarParaComodos() {
        this.router.navigateByUrl('/tabs/comodos');
    }
    sendCommand(command) {
        this.infraredService.runCommand(this.device, command)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            console.log("Data", data);
        }, error => {
            console.log("Error", error);
        });
    }
};
ProjetorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_infrared_service__WEBPACK_IMPORTED_MODULE_3__["InfraredService"] }
];
ProjetorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projetor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./projetor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controles/projetor/projetor.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./projetor.page.scss */ "./src/app/controles/projetor/projetor.page.scss")).default]
    })
], ProjetorPage);



/***/ })

}]);
//# sourceMappingURL=controles-projetor-projetor-module-es2015.js.map