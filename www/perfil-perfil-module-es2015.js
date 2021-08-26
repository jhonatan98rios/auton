(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/alterar-senha/alterar-senha.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/alterar-senha/alterar-senha.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Perfil\"  [callbackBackButton]=\"voltarParaPerfil\"></app-header>\n<ion-content>\n\n  <div class=\"alterar-senha\">\n\n\n    <div class=\"foto-user\">\n      <img class=\"logo\" src=\"../../assets/icon/user.svg\">\n    </div>\n\n\n    <div class=\"subtexto\">\n      <label>AntonioQM</label>\n    </div>\n\n\n    <div class=\"auton-form-input-group\">\n      <label type=\"text\" for=\"senha\" class=\"auton-form-input-group-label\">Nova senha</label>\n\n      <div class=\"alinhamento-botoes-meio\" style=\"display: flex;align-items: center;\">\n        <input id=\"senha\" [type]=\"mostrarSenha ? 'text' : 'password'\" class=\"auton-form-input-group-input\"\n          value=\"minhasenha\" style=\"text-transform: none;\" />\n        <ion-icon *ngIf=\"!mostrarSenha\" name=\"eye-outline\" class=\"auton-form-input-group-input-icon-senha\"\n          (click)=\"toggleInputSenha()\"></ion-icon>\n        <ion-icon *ngIf=\"mostrarSenha\" name=\"eye-off-outline\" class=\"auton-form-input-group-input-icon-senha\"\n          (click)=\"toggleInputSenha()\"></ion-icon>\n      </div>\n    </div>\n\n    <div class=\"auton-form-input-group\">\n      <label type=\"text\" for=\"senha\" class=\"auton-form-input-group-label\">Confirmar nova senha</label>\n\n      <div style=\"display: flex;align-items: center;\">\n        <input id=\"senha\" [type]=\"mostrarSenhaConfirmarSenha ? 'text' : 'password'\" class=\"auton-form-input-group-input\"\n          value=\"minhasenha\" style=\"text-transform: none;\" />\n        <ion-icon *ngIf=\"!mostrarSenhaConfirmarSenha\" name=\"eye-outline\" class=\"auton-form-input-group-input-icon-senha\"\n          (click)=\"toggleInputConfirmarSenha()\"></ion-icon>\n        <ion-icon *ngIf=\"mostrarSenhaConfirmarSenha\" name=\"eye-off-outline\" class=\"auton-form-input-group-input-icon-senha\"\n          (click)=\"toggleInputConfirmarSenha()\"></ion-icon>\n      </div>\n    </div>\n\n    <div class=\"botao\">\n      <button type=\"submit\" class=\"auton-button primary\" style=\"margin-top: 25px;\">Salvar</button>\n    </div>\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Perfil\"></app-header>\n<ion-content>\n\n  <div class=\"perfil\">\n\n    <div class=\"auton-form-input-group\">\n      <label for=\"ddns\" class=\"auton-form-input-group-label\">DDNS</label>\n    </div>\n\n    <div style=\"display: flex;align-items: center;\">\n      <input id=\"ddns\" type=\"text\" [(ngModel)]=\"ddns\" class=\"auton-form-input-group-input\"/>\n    </div>\n\n    <div class=\"botao\">\n      <button type=\"submit\" class=\"auton-button primary\" style=\"margin-top: 25px;\" (click)=\"salvarDDNS()\">Salvar</button>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/perfil/alterar-senha/alterar-senha.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/perfil/alterar-senha/alterar-senha.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alterar-senha {\n  display: flex;\n  flex-direction: column;\n  padding: 88px 50px 95px 50px;\n}\n.alterar-senha .foto-user {\n  align-self: center;\n}\n.alterar-senha .subtexto {\n  align-items: center;\n  display: flex;\n  margin-top: 17px;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.alterar-senha .alinhamento-botoes-meio {\n  margin-bottom: 10px;\n}\n.alterar-senha .botao {\n  margin-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL2FsdGVyYXItc2VuaGEvQzpcXFVzZXJzXFxEZXNrdG9wXFxQcm9qZWN0c1xccGVzc29hbFxcaW9uaWMtYXV0b25cXGF1dG9uLXB3YVxcZmFiaW9ub2ZyZS1hdXRvbmFwcC1lOGZmYjdhNzUwYzQvc3JjXFxhcHBcXHBlcmZpbFxcYWx0ZXJhci1zZW5oYVxcYWx0ZXJhci1zZW5oYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVyZmlsL2FsdGVyYXItc2VuaGEvYWx0ZXJhci1zZW5oYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsL2FsdGVyYXItc2VuaGEvYWx0ZXJhci1zZW5oYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbHRlcmFyLXNlbmhhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogODhweCA1MHB4IDk1cHggNTBweDtcblxuICAgIC5mb3RvLXVzZXIge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIC5zdWJ0ZXh0byB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgfVxuXG4gICAgLmFsaW5oYW1lbnRvLWJvdG9lcy1tZWlvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuYm90YW8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICAgIH1cbn1cbiIsIi5hbHRlcmFyLXNlbmhhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogODhweCA1MHB4IDk1cHggNTBweDtcbn1cbi5hbHRlcmFyLXNlbmhhIC5mb3RvLXVzZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uYWx0ZXJhci1zZW5oYSAuc3VidGV4dG8ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmFsdGVyYXItc2VuaGEgLmFsaW5oYW1lbnRvLWJvdG9lcy1tZWlvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hbHRlcmFyLXNlbmhhIC5ib3RhbyB7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/perfil/alterar-senha/alterar-senha.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/perfil/alterar-senha/alterar-senha.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlterarSenhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarSenhaComponent", function() { return AlterarSenhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AlterarSenhaComponent = class AlterarSenhaComponent {
    constructor(router) {
        this.router = router;
        this.mostrarSenha = false;
        this.mostrarSenhaConfirmarSenha = false;
    }
    ngOnInit() { }
    toggleInputSenha() {
        this.mostrarSenha = !this.mostrarSenha;
    }
    toggleInputConfirmarSenha() {
        this.mostrarSenhaConfirmarSenha = !this.mostrarSenhaConfirmarSenha;
    }
    voltarParaPerfil() {
        this.router.navigateByUrl('/tabs/perfil');
    }
};
AlterarSenhaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlterarSenhaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alterar-senha',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alterar-senha.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/alterar-senha/alterar-senha.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alterar-senha.component.scss */ "./src/app/perfil/alterar-senha/alterar-senha.component.scss")).default]
    })
], AlterarSenhaComponent);



/***/ }),

/***/ "./src/app/perfil/perfil-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
/* harmony import */ var _alterar_senha_alterar_senha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alterar-senha/alterar-senha.component */ "./src/app/perfil/alterar-senha/alterar-senha.component.ts");





const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    },
    {
        path: 'alterar-senha',
        component: _alterar_senha_alterar_senha_component__WEBPACK_IMPORTED_MODULE_4__["AlterarSenhaComponent"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");
/* harmony import */ var _geral_geral_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../geral/geral.module */ "./src/app/geral/geral.module.ts");
/* harmony import */ var _alterar_senha_alterar_senha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alterar-senha/alterar-senha.component */ "./src/app/perfil/alterar-senha/alterar-senha.component.ts");









let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"],
            _geral_geral_module__WEBPACK_IMPORTED_MODULE_7__["GeralModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"], _alterar_senha_alterar_senha_component__WEBPACK_IMPORTED_MODULE_8__["AlterarSenhaComponent"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".perfil {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 27px 50px 180px 50px;\n}\n.perfil .foto-user {\n  align-self: center;\n}\n.perfil .subtexto {\n  align-items: center;\n  display: flex;\n  margin-top: 17px;\n  flex-direction: column;\n  margin-bottom: 72px;\n}\n.perfil .texto-cima {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0M6XFxVc2Vyc1xcRGVza3RvcFxcUHJvamVjdHNcXHBlc3NvYWxcXGlvbmljLWF1dG9uXFxhdXRvbi1wd2FcXGZhYmlvbm9mcmUtYXV0b25hcHAtZThmZmI3YTc1MGM0L3NyY1xcYXBwXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmZpbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI3cHggNTBweCAxODBweCA1MHB4O1xuXG4gIC5mb3RvLXVzZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuc3VidGV4dG8ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogNzJweDtcbiAgfVxuXG4gIC50ZXh0by1jaW1hIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG59XG4iLCIucGVyZmlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjdweCA1MHB4IDE4MHB4IDUwcHg7XG59XG4ucGVyZmlsIC5mb3RvLXVzZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ucGVyZmlsIC5zdWJ0ZXh0byB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDcycHg7XG59XG4ucGVyZmlsIC50ZXh0by1jaW1hIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PerfilPage = class PerfilPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.mostrarSenha = false;
    }
    ngOnInit() {
    }
    toggleInputSenha() {
        this.mostrarSenha = !this.mostrarSenha;
    }
    alterarSenha() {
        this.router.navigateByUrl(`/tabs/perfil/alterar-senha`);
    }
    salvarDDNS() {
        this.http.post(`${this.ddns}/config`, { ddns: this.ddns })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            console.log("Data", data);
            localStorage.setItem('ddns', this.ddns);
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")).default]
    })
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es2015.js.map