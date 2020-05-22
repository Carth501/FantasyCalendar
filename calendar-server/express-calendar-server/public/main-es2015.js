(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");





const routes = [
    { path: '', component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"] }
    /*
    ,
    { path: '', redirectTo: '/calendar', pathMatch: 'full'}
    */
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Custom Calendar';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBR0EsVUFBVSwyQkFBMkIsQ0FBQzs7QUFHdEM7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG50YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbSAwLjJlbSAwLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQwNTA2MTUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCA4cHggOHB4O1xyXG59XHJcblxyXG5cclxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNjNmQzZmY4MTt9XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2VhZmY4MTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _components_day_day_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/day/day.component */ "./src/app/components/day/day.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _components_month_month_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/month/month.component */ "./src/app/components/month/month.component.ts");
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");
/* harmony import */ var _components_options_options_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/options/options.component */ "./src/app/components/options/options.component.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");
/* harmony import */ var _components_week_week_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/week/week.component */ "./src/app/components/week/week.component.ts");
/* harmony import */ var _components_year_year_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/year/year.component */ "./src/app/components/year/year.component.ts");
/* harmony import */ var _event_field_components_cyclical_fields_cyclical_fields_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./event field components/cyclical-fields/cyclical-fields.component */ "./src/app/event field components/cyclical-fields/cyclical-fields.component.ts");
/* harmony import */ var _event_field_components_yearly_fields_yearly_fields_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./event field components/yearly-fields/yearly-fields.component */ "./src/app/event field components/yearly-fields/yearly-fields.component.ts");
/* harmony import */ var _event_field_components_monthly_fields_monthly_fields_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./event field components/monthly-fields/monthly-fields.component */ "./src/app/event field components/monthly-fields/monthly-fields.component.ts");
/* harmony import */ var _event_field_components_weekly_fields_weekly_fields_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./event field components/weekly-fields/weekly-fields.component */ "./src/app/event field components/weekly-fields/weekly-fields.component.ts");
/* harmony import */ var _event_field_components_month_dow_fields_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./event field components/month-dow-fields/month-dow-fields.component */ "./src/app/event field components/month-dow-fields/month-dow-fields.component.ts");
/* harmony import */ var _event_field_components_year_month_dow_fields_year_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./event field components/year-month-dow-fields/year-month-dow-fields.component */ "./src/app/event field components/year-month-dow-fields/year-month-dow-fields.component.ts");
/* harmony import */ var _event_field_components_unique_fields_unique_fields_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./event field components/unique-fields/unique-fields.component */ "./src/app/event field components/unique-fields/unique-fields.component.ts");
/* harmony import */ var _event_field_components_year_monthly_fields_year_monthly_fields_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./event field components/year-monthly-fields/year-monthly-fields.component */ "./src/app/event field components/year-monthly-fields/year-monthly-fields.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_reducers_view_reducer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./store/reducers/view.reducer */ "./src/app/store/reducers/view.reducer.ts");
/* harmony import */ var _store_reducers_options_reducer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./store/reducers/options.reducer */ "./src/app/store/reducers/options.reducer.ts");
/* harmony import */ var _store_reducers_calendar_reducer__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./store/reducers/calendar.reducer */ "./src/app/store/reducers/calendar.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_effects_calendar_effects__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./store/effects/calendar.effects */ "./src/app/store/effects/calendar.effects.ts");
/* harmony import */ var _components_options_optionsSubsections_year_editor_year_editor_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/options/optionsSubsections/year-editor/year-editor.component */ "./src/app/components/options/optionsSubsections/year-editor/year-editor.component.ts");
/* harmony import */ var _components_options_optionsSubsections_month_editor_month_editor_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/options/optionsSubsections/month-editor/month-editor.component */ "./src/app/components/options/optionsSubsections/month-editor/month-editor.component.ts");
/* harmony import */ var _components_options_optionsSubsections_week_editor_week_editor_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/options/optionsSubsections/week-editor/week-editor.component */ "./src/app/components/options/optionsSubsections/week-editor/week-editor.component.ts");
/* harmony import */ var _components_options_optionsSubsections_leap_year_editor_leap_year_editor_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/options/optionsSubsections/leap-year-editor/leap-year-editor.component */ "./src/app/components/options/optionsSubsections/leap-year-editor/leap-year-editor.component.ts");
/* harmony import */ var _components_options_optionsSubsections_events_editor_events_editor_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/options/optionsSubsections/events-editor/events-editor.component */ "./src/app/components/options/optionsSubsections/events-editor/events-editor.component.ts");
/* harmony import */ var _components_options_optionsSubsections_json_json_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/options/optionsSubsections/json/json.component */ "./src/app/components/options/optionsSubsections/json/json.component.ts");
/* harmony import */ var _components_calendar_selector_calendar_selector_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/calendar-selector/calendar-selector.component */ "./src/app/components/calendar-selector/calendar-selector.component.ts");
/* harmony import */ var _store_effects_options_effects__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./store/effects/options.effects */ "./src/app/store/effects/options.effects.ts");
/* harmony import */ var _components_options_optionsSubsections_new_era_new_era_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/options/optionsSubsections/new-era/new-era.component */ "./src/app/components/options/optionsSubsections/new-era/new-era.component.ts");
/* harmony import */ var _components_options_optionsSubsections_new_leap_year_rule_new_leap_year_rule_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/options/optionsSubsections/new-leap-year-rule/new-leap-year-rule.component */ "./src/app/components/options/optionsSubsections/new-leap-year-rule/new-leap-year-rule.component.ts");






















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__["InMemoryDataService"], { dataEncapsulation: false }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_31__["StoreModule"].forRoot({
                view: _store_reducers_view_reducer__WEBPACK_IMPORTED_MODULE_34__["reducer"],
                calendar: _store_reducers_calendar_reducer__WEBPACK_IMPORTED_MODULE_36__["reducer"],
                options: _store_reducers_options_reducer__WEBPACK_IMPORTED_MODULE_35__["reducer"]
            }, {}),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_32__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__["EffectsModule"].forRoot([_store_effects_calendar_effects__WEBPACK_IMPORTED_MODULE_38__["CalendarEffects"], _store_effects_options_effects__WEBPACK_IMPORTED_MODULE_46__["OptionsEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"],
        _components_day_day_component__WEBPACK_IMPORTED_MODULE_11__["DayComponent"],
        _components_month_month_component__WEBPACK_IMPORTED_MODULE_14__["MonthComponent"],
        _components_options_options_component__WEBPACK_IMPORTED_MODULE_16__["OptionsComponent"],
        _components_view_view_component__WEBPACK_IMPORTED_MODULE_17__["ViewComponent"],
        _components_week_week_component__WEBPACK_IMPORTED_MODULE_18__["WeekComponent"],
        _components_year_year_component__WEBPACK_IMPORTED_MODULE_19__["YearComponent"],
        _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_15__["NewEventComponent"],
        _components_event_event_component__WEBPACK_IMPORTED_MODULE_12__["EventComponent"],
        _event_field_components_cyclical_fields_cyclical_fields_component__WEBPACK_IMPORTED_MODULE_20__["CyclicalFieldsComponent"],
        _event_field_components_yearly_fields_yearly_fields_component__WEBPACK_IMPORTED_MODULE_21__["YearlyFieldsComponent"],
        _event_field_components_monthly_fields_monthly_fields_component__WEBPACK_IMPORTED_MODULE_22__["MonthlyFieldsComponent"],
        _event_field_components_weekly_fields_weekly_fields_component__WEBPACK_IMPORTED_MODULE_23__["WeeklyFieldsComponent"],
        _event_field_components_month_dow_fields_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_24__["MonthDOWFieldsComponent"],
        _event_field_components_year_month_dow_fields_year_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_25__["YearMonthDowFieldsComponent"],
        _event_field_components_unique_fields_unique_fields_component__WEBPACK_IMPORTED_MODULE_26__["UniqueFieldsComponent"],
        _event_field_components_year_monthly_fields_year_monthly_fields_component__WEBPACK_IMPORTED_MODULE_27__["YearMonthlyFieldsComponent"],
        _components_options_optionsSubsections_year_editor_year_editor_component__WEBPACK_IMPORTED_MODULE_39__["YearEditorComponent"],
        _components_options_optionsSubsections_month_editor_month_editor_component__WEBPACK_IMPORTED_MODULE_40__["MonthEditorComponent"],
        _components_options_optionsSubsections_week_editor_week_editor_component__WEBPACK_IMPORTED_MODULE_41__["WeekEditorComponent"],
        _components_options_optionsSubsections_leap_year_editor_leap_year_editor_component__WEBPACK_IMPORTED_MODULE_42__["LeapYearEditorComponent"],
        _components_options_optionsSubsections_events_editor_events_editor_component__WEBPACK_IMPORTED_MODULE_43__["EventsEditorComponent"],
        _components_options_optionsSubsections_json_json_component__WEBPACK_IMPORTED_MODULE_44__["JsonComponent"],
        _components_calendar_selector_calendar_selector_component__WEBPACK_IMPORTED_MODULE_45__["CalendarSelectorComponent"],
        _components_options_optionsSubsections_new_era_new_era_component__WEBPACK_IMPORTED_MODULE_47__["NewEraComponent"],
        _components_options_optionsSubsections_new_leap_year_rule_new_leap_year_rule_component__WEBPACK_IMPORTED_MODULE_48__["NewLeapYearRuleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_31__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_32__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"],
                    _components_day_day_component__WEBPACK_IMPORTED_MODULE_11__["DayComponent"],
                    _components_month_month_component__WEBPACK_IMPORTED_MODULE_14__["MonthComponent"],
                    _components_options_options_component__WEBPACK_IMPORTED_MODULE_16__["OptionsComponent"],
                    _components_view_view_component__WEBPACK_IMPORTED_MODULE_17__["ViewComponent"],
                    _components_week_week_component__WEBPACK_IMPORTED_MODULE_18__["WeekComponent"],
                    _components_year_year_component__WEBPACK_IMPORTED_MODULE_19__["YearComponent"],
                    _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_15__["NewEventComponent"],
                    _components_event_event_component__WEBPACK_IMPORTED_MODULE_12__["EventComponent"],
                    _event_field_components_cyclical_fields_cyclical_fields_component__WEBPACK_IMPORTED_MODULE_20__["CyclicalFieldsComponent"],
                    _event_field_components_yearly_fields_yearly_fields_component__WEBPACK_IMPORTED_MODULE_21__["YearlyFieldsComponent"],
                    _event_field_components_monthly_fields_monthly_fields_component__WEBPACK_IMPORTED_MODULE_22__["MonthlyFieldsComponent"],
                    _event_field_components_weekly_fields_weekly_fields_component__WEBPACK_IMPORTED_MODULE_23__["WeeklyFieldsComponent"],
                    _event_field_components_month_dow_fields_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_24__["MonthDOWFieldsComponent"],
                    _event_field_components_year_month_dow_fields_year_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_25__["YearMonthDowFieldsComponent"],
                    _event_field_components_unique_fields_unique_fields_component__WEBPACK_IMPORTED_MODULE_26__["UniqueFieldsComponent"],
                    _event_field_components_year_monthly_fields_year_monthly_fields_component__WEBPACK_IMPORTED_MODULE_27__["YearMonthlyFieldsComponent"],
                    _components_options_optionsSubsections_year_editor_year_editor_component__WEBPACK_IMPORTED_MODULE_39__["YearEditorComponent"],
                    _components_options_optionsSubsections_month_editor_month_editor_component__WEBPACK_IMPORTED_MODULE_40__["MonthEditorComponent"],
                    _components_options_optionsSubsections_week_editor_week_editor_component__WEBPACK_IMPORTED_MODULE_41__["WeekEditorComponent"],
                    _components_options_optionsSubsections_leap_year_editor_leap_year_editor_component__WEBPACK_IMPORTED_MODULE_42__["LeapYearEditorComponent"],
                    _components_options_optionsSubsections_events_editor_events_editor_component__WEBPACK_IMPORTED_MODULE_43__["EventsEditorComponent"],
                    _components_options_optionsSubsections_json_json_component__WEBPACK_IMPORTED_MODULE_44__["JsonComponent"],
                    _components_calendar_selector_calendar_selector_component__WEBPACK_IMPORTED_MODULE_45__["CalendarSelectorComponent"],
                    _components_options_optionsSubsections_new_era_new_era_component__WEBPACK_IMPORTED_MODULE_47__["NewEraComponent"],
                    _components_options_optionsSubsections_new_leap_year_rule_new_leap_year_rule_component__WEBPACK_IMPORTED_MODULE_48__["NewLeapYearRuleComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                    // and returns simulated server responses.
                    // Remove it when a real server is ready to receive requests.
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_13__["InMemoryDataService"], { dataEncapsulation: false }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_31__["StoreModule"].forRoot({
                        view: _store_reducers_view_reducer__WEBPACK_IMPORTED_MODULE_34__["reducer"],
                        calendar: _store_reducers_calendar_reducer__WEBPACK_IMPORTED_MODULE_36__["reducer"],
                        options: _store_reducers_options_reducer__WEBPACK_IMPORTED_MODULE_35__["reducer"]
                    }, {}),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_32__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_37__["EffectsModule"].forRoot([_store_effects_calendar_effects__WEBPACK_IMPORTED_MODULE_38__["CalendarEffects"], _store_effects_options_effects__WEBPACK_IMPORTED_MODULE_46__["OptionsEffects"]]),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/calendar-event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/calendar-event.service.ts ***!
  \*******************************************/
/*! exports provided: CalendarEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventService", function() { return CalendarEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CalendarEventService {
    constructor() {
        this.dayClicks = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dayclick$ = this.dayClicks.asObservable();
    }
    dayClick(dayID) {
        this.dayClicks.next(dayID);
    }
}
CalendarEventService.ɵfac = function CalendarEventService_Factory(t) { return new (t || CalendarEventService)(); };
CalendarEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarEventService, factory: CalendarEventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/calendar.service.ts":
/*!*************************************!*\
  !*** ./src/app/calendar.service.ts ***!
  \*************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_selectors_calendar_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/selectors/calendar.selector */ "./src/app/store/selectors/calendar.selector.ts");
/* harmony import */ var _store_selectors_view_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/selectors/view.selector */ "./src/app/store/selectors/view.selector.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");








class CalendarService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.calenderSettingsURL = 'api/calendars';
    }
    requestCalendar$() {
        return this.http.get(this.calenderSettingsURL);
    }
    getCurrentCalendar$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.getCalendarList$(), this.getCurrentCalendarID$()]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([list, id]) => {
            if (!!list.length) {
                return list.find(calendar => calendar.calendarID === id);
            }
            else {
                return null;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(calendar => !!calendar));
    }
    getCalendarList$() {
        return this.store.select(_store_selectors_calendar_selector__WEBPACK_IMPORTED_MODULE_3__["selectCalendars"]);
    }
    getCurrentCalendarID$() {
        return this.store.select(_store_selectors_view_selector__WEBPACK_IMPORTED_MODULE_4__["selectCalendarIndex"]);
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/calendar-selector/calendar-selector.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/calendar-selector/calendar-selector.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CalendarSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarSelectorComponent", function() { return CalendarSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/actions/view.actions */ "./src/app/store/actions/view.actions.ts");
/* harmony import */ var src_app_store_selectors_view_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/selectors/view.selector */ "./src/app/store/selectors/view.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function CalendarSelectorComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const calendar_r317 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", calendar_r317.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", calendar_r317.value, "");
} }
class CalendarSelectorComponent {
    constructor(store) {
        this.store = store;
        this.switchTo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeCalendar$ = this.store.select(src_app_store_selectors_view_selector__WEBPACK_IMPORTED_MODULE_2__["selectCalendarIndex"]);
    }
    ngOnInit() {
    }
    changeCalendar(change) {
        this.store.dispatch(Object(src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_1__["changeCalendar"])({ calendarIndex: change.value }));
    }
}
CalendarSelectorComponent.ɵfac = function CalendarSelectorComponent_Factory(t) { return new (t || CalendarSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
CalendarSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarSelectorComponent, selectors: [["app-calendar-selector"]], inputs: { lookupArray: "lookupArray", activeCalendar$: "activeCalendar$" }, outputs: { switchTo: "switchTo" }, decls: 7, vars: 4, consts: [[1, "Calendar", "Selector"], [3, "ngModel", "selectionChange"], ["matInput", "", 3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "value"]], template: function CalendarSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Calendar Selection:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CalendarSelectorComponent_Template_mat_select_selectionChange_4_listener($event) { return ctx.changeCalendar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalendarSelectorComponent_mat_option_6_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.activeCalendar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lookupArray);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXItc2VsZWN0b3IvY2FsZW5kYXItc2VsZWN0b3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar-selector',
                templateUrl: './calendar-selector.component.html',
                styleUrls: ['./calendar-selector.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { lookupArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switchTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeCalendar$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _year_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../year.service */ "./src/app/year.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _year_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../year/year.component */ "./src/app/components/year/year.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











const _c0 = ["newMonth"];
function CalendarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.generatePreviousDisplayYear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.faArrowAltCircleLeft);
} }
function CalendarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalendarComponent_div_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.year.yearNumber = $event; })("ngModelChange", function CalendarComponent_div_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.userYearChange.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.year.yearNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.calendar.year.eras[ctx_r5.currentEra].abbreviation, " ");
} }
function CalendarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.generateNextDisplayYear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faArrowAltCircleRight);
} }
class CalendarComponent {
    constructor(store, yearService) {
        this.store = store;
        this.yearService = yearService;
        this.faArrowAltCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltCircleLeft"];
        this.faArrowAltCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltCircleRight"];
        this.settingsLoaded = false;
        this.eventsLoaded = false;
        this.calendarIndex = 0;
        this.userYearChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Debounce search.
        this.userYearChangeSubscription = this.userYearChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(value => {
            this.jumpToYear(value);
        });
    }
    set newSettings(calendar) {
        if (!!calendar) {
            this.settingsArrived(calendar);
        }
    }
    set changeCalendarIndex(newIndex) {
        if (newIndex >= 0) {
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.userYearChangeSubscription) {
            this.userYearChangeSubscription.unsubscribe();
        }
    }
    settingsArrived(IncomingSettings) {
        if (IncomingSettings) {
            this.calendar = IncomingSettings;
            this.yearStartingID = this.calendar.year.startingDayID;
            this.yearStartingDOW = this.calendar.year.startingDoW;
            this.currentEra = this.calendar.year.currentEra;
            this.currentYear = this.calendar.year.currentYear;
            this.generateDisplayYear();
        }
    }
    generateDisplayYear() {
        this.yearLength = this.calculateYearLength();
        this.year = this.yearService.getDisplayYear(this.yearStartingID, this.yearStartingDOW, this.currentYear, this.calendar);
    }
    jumpToYear(newYear) {
        const deltaYear = newYear - this.currentYear;
        if (deltaYear > 0) {
            for (let x = 0; x < deltaYear; x++) {
                this.generateNextDisplayYear();
            }
        }
        else if (deltaYear < 0) {
            for (let x = 0; x > deltaYear; x--) {
                this.generatePreviousDisplayYear();
            }
        }
    }
    calcNextYearData() {
        this.yearStartingDOW = this.yearService.getNextStartingDoW(this.yearLength, this.yearStartingDOW, this.calendar.DoW.length);
        this.yearStartingID = this.yearService.getNextStartingID(this.yearStartingID, this.yearLength);
        this.incrementCurrentYear();
    }
    generateNextDisplayYear() {
        this.calcNextYearData();
        this.checkEra();
        this.generateDisplayYear();
    }
    calcPreviousYearData() {
        this.decrementCurrentYear();
        this.yearLength = this.calculateYearLength();
        this.yearStartingDOW = this.yearService.getPreviousStartingDoW(this.yearLength, this.yearStartingDOW, this.calendar.DoW.length);
        this.yearStartingID = this.yearService.getPreviousStartingID(this.yearStartingID, this.yearLength);
    }
    generatePreviousDisplayYear() {
        this.calcPreviousYearData();
        this.checkEra();
        this.generateDisplayYear();
    }
    checkEra() {
        const eras = this.calendar.year.eras;
        if (eras[this.currentEra].beginning) {
            if (!this.eraReversed()) {
                if (this.currentYear < eras[this.currentEra].beginning) {
                    this.currentEra--;
                    this.currentYear = eras[this.currentEra].ending;
                }
            }
            else {
                if (this.currentYear > eras[this.currentEra].beginning) {
                    this.currentEra--;
                    this.currentYear = eras[this.currentEra].ending;
                }
            }
        }
        if (eras[this.currentEra].ending) {
            if (!this.eraReversed()) {
                if (this.currentYear > eras[this.currentEra].ending) {
                    this.currentEra++;
                    this.currentYear = eras[this.currentEra].beginning;
                }
            }
            else {
                if (this.currentYear < eras[this.currentEra].ending) {
                    this.currentEra++;
                    this.currentYear = eras[this.currentEra].beginning;
                }
            }
        }
    }
    calculateYearLength() {
        return this.yearService.daysInYear(this.calendar, this.currentYear);
    }
    eraReversed() {
        return this.calendar.year.eras[this.currentEra].reversed;
    }
    incrementCurrentYear() {
        if (this.calendar.year.eras[this.currentEra].reversed) {
            this.currentYear--;
        }
        else {
            this.currentYear++;
        }
    }
    decrementCurrentYear() {
        if (this.calendar.year.eras[this.currentEra].reversed) {
            this.currentYear++;
        }
        else {
            this.currentYear--;
        }
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_year_service__WEBPACK_IMPORTED_MODULE_5__["YearService"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newMonth = _t.first);
    } }, inputs: { newSettings: "newSettings", changeCalendarIndex: "changeCalendarIndex", calendar: "calendar" }, decls: 8, vars: 4, consts: [["align", "center", 1, "calendar-header"], ["class", "year-control", 3, "click", 4, "ngIf"], ["class", "year-sign", "align", "center", 4, "ngIf"], [3, "year"], [1, "year-control", 3, "click"], ["size", "5x", 3, "icon"], ["align", "center", 1, "year-sign"], [3, "ngModel", "ngModelChange"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarComponent_button_2_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarComponent_div_3_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CalendarComponent_button_5_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-year", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calendar && ctx.yearLength <= ctx.yearStartingID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.year && ctx.year.yearNumber != null && ctx.year.yearNumber != undefined && ctx.calendar && ctx.calendar.year.eras && ctx.calendar.year.eras.length > 0 && ctx.currentEra != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("year", ctx.year);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _year_year_component__WEBPACK_IMPORTED_MODULE_7__["YearComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.calendar-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  position: relative;\r\n  top: 22px;\r\n}\r\n\r\n.year-control[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.year-sign[_ngcontent-%COMP%] {\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n  align-self: flex-end;\r\n}\r\n\r\n.year-sign[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n  width: 300px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtBQUNsQzs7QUFHQSxVQUFVLDJCQUEyQixDQUFDOztBQUd0QztJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQzFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAuMmVtIDAuMmVtIDAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbn1cclxuXHJcblxyXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2M2ZDNmZjgxO31cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFmZjgxO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzXCI7XHJcblxyXG4uY2FsZW5kYXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMnB4O1xyXG59XHJcblxyXG4ueWVhci1jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLnllYXItc2lnbiB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ueWVhci1zaWduIGlucHV0IHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _year_service__WEBPACK_IMPORTED_MODULE_5__["YearService"] }]; }, { newSettings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeCalendarIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['newMonth']
        }] }); })();


/***/ }),

/***/ "./src/app/components/day/day.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/day/day.component.ts ***!
  \*************************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/actions/view.actions */ "./src/app/store/actions/view.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function DayComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cyclicalEvent_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cyclicalEvent_r22.title, " ");
} }
function DayComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const uniqueEvent_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", uniqueEvent_r23.title, " ");
} }
function DayComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yearMonthlyEvent_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", yearMonthlyEvent_r24.title, " ");
} }
function DayComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yearMonthDOWEvent_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", yearMonthDOWEvent_r25.title, " ");
} }
function DayComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yearlyEvent_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", yearlyEvent_r26.title, " ");
} }
function DayComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthlyEvent_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", monthlyEvent_r27.title, " ");
} }
function DayComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weeklyEvent_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", weeklyEvent_r28.title, " ");
} }
function DayComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthDOWEvent_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", monthDOWEvent_r29.title, " ");
} }
class DayComponent {
    constructor(store) {
        this.store = store;
        this.dayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    click(dayID) {
        this.store.dispatch(Object(src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_1__["setNewEventPanel"])({ open: true, dayID }));
    }
}
DayComponent.ɵfac = function DayComponent_Factory(t) { return new (t || DayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
DayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayComponent, selectors: [["app-day"]], inputs: { day: "day" }, outputs: { dayClick: "dayClick" }, decls: 16, vars: 10, consts: [[1, "day-button", 3, "click"], [1, "day-id"], [1, "day-of-month"], [1, "day-of-year"], [1, "day-content"], [4, "ngFor", "ngForOf"]], template: function DayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayComponent_Template_div_click_0_listener() { return ctx.click(ctx.day.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DayComponent_li_8_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DayComponent_li_9_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DayComponent_li_10_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DayComponent_li_11_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DayComponent_li_12_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DayComponent_li_13_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DayComponent_li_14_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DayComponent_li_15_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.day.dayOfMonth, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.day.dayOfYear, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.cyclicalEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.uniqueEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.yearMonthlyEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.yearMonthDOWEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.yearlyEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.monthlyEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.weeklyEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.day.monthDOWEvents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.day-id[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 15px;\r\n}\r\n\r\n.day-of-month[_ngcontent-%COMP%] {\r\n    float: left;\r\n    flex: 1;\r\n}\r\n\r\n.day-of-year[_ngcontent-%COMP%] {\r\n    color: rgba(128, 128, 128, 0.75);\r\n    font-size: 15px;\r\n}\r\n\r\n.day-button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 0;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n    display: block;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    -webkit-margin-before: 10px;\r\n            margin-block-start: 10px;\r\n    -webkit-margin-after: 10px;\r\n            margin-block-end: 10px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    margin-top: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGF5L2RheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDOztBQUdBLFVBQVUsMkJBQTJCLENBQUM7O0FBR3RDO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FDMUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QiwwQkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF5L2RheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG50YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbSAwLjJlbSAwLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQwNTA2MTUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCA4cHggOHB4O1xyXG59XHJcblxyXG5cclxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNjNmQzZmY4MTt9XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2VhZmY4MTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LmNzc1wiO1xyXG5cclxuLmRheS1pZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmRheS1vZi1tb250aCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5kYXktb2YteWVhciB7XHJcbiAgICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc1KTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmRheS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-day',
                templateUrl: './day.component.html',
                styleUrls: ['./day.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { day: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dayClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _event_field_components_cyclical_fields_cyclical_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event field components/cyclical-fields/cyclical-fields.component */ "./src/app/event field components/cyclical-fields/cyclical-fields.component.ts");
/* harmony import */ var _event_field_components_unique_fields_unique_fields_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../event field components/unique-fields/unique-fields.component */ "./src/app/event field components/unique-fields/unique-fields.component.ts");
/* harmony import */ var _event_field_components_yearly_fields_yearly_fields_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../event field components/yearly-fields/yearly-fields.component */ "./src/app/event field components/yearly-fields/yearly-fields.component.ts");
/* harmony import */ var _event_field_components_monthly_fields_monthly_fields_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../event field components/monthly-fields/monthly-fields.component */ "./src/app/event field components/monthly-fields/monthly-fields.component.ts");
/* harmony import */ var _event_field_components_weekly_fields_weekly_fields_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../event field components/weekly-fields/weekly-fields.component */ "./src/app/event field components/weekly-fields/weekly-fields.component.ts");
/* harmony import */ var _event_field_components_month_dow_fields_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../event field components/month-dow-fields/month-dow-fields.component */ "./src/app/event field components/month-dow-fields/month-dow-fields.component.ts");
/* harmony import */ var _event_field_components_year_month_dow_fields_year_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../event field components/year-month-dow-fields/year-month-dow-fields.component */ "./src/app/event field components/year-month-dow-fields/year-month-dow-fields.component.ts");
/* harmony import */ var _event_field_components_year_monthly_fields_year_monthly_fields_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../event field components/year-monthly-fields/year-monthly-fields.component */ "./src/app/event field components/year-monthly-fields/year-monthly-fields.component.ts");












function EventComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.toggleEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.calendarEvent.title, "");
} }
function EventComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cyclical-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r34.calendarEvent)("editable", ctx_r34.editable);
} }
function EventComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-unique-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r35.calendarEvent)("editable", ctx_r35.editable);
} }
function EventComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-yearly-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r36.calendarEvent)("editable", ctx_r36.editable);
} }
function EventComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-monthly-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r37.calendarEvent)("editable", ctx_r37.editable);
} }
function EventComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-weekly-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r38.calendarEvent)("editable", ctx_r38.editable);
} }
function EventComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-month-dow-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r39.calendarEvent)("editable", ctx_r39.editable);
} }
function EventComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-year-month-dow-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r40.calendarEvent)("editable", ctx_r40.editable);
} }
function EventComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-year-monthly-fields", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addEvent", ctx_r41.calendarEvent)("editable", ctx_r41.editable);
} }
function EventComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_div_2_div_1_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_div_2_div_2_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventComponent_div_2_div_3_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventComponent_div_2_div_4_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventComponent_div_2_div_5_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventComponent_div_2_div_6_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventComponent_div_2_div_7_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventComponent_div_2_div_8_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "cyclical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "unique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "monthDOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "yearMonthDOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.eventType === "yearMonthly");
} }
class EventComponent {
    constructor() {
        this.expanded = false;
        this.editable = false;
    }
    toggleEvent() {
        this.expanded = !this.expanded;
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(); };
EventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], inputs: { calendarEvent: "calendarEvent", eventType: "eventType", editable: "editable" }, decls: 3, vars: 2, consts: [[1, "panel"], ["mat-flat-button", "", "color", "primary", "class", "toggleEvent", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "toggleEvent", 3, "click"], [3, "addEvent", "editable"]], template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventComponent_div_2_Template, 9, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calendarEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _event_field_components_cyclical_fields_cyclical_fields_component__WEBPACK_IMPORTED_MODULE_3__["CyclicalFieldsComponent"], _event_field_components_unique_fields_unique_fields_component__WEBPACK_IMPORTED_MODULE_4__["UniqueFieldsComponent"], _event_field_components_yearly_fields_yearly_fields_component__WEBPACK_IMPORTED_MODULE_5__["YearlyFieldsComponent"], _event_field_components_monthly_fields_monthly_fields_component__WEBPACK_IMPORTED_MODULE_6__["MonthlyFieldsComponent"], _event_field_components_weekly_fields_weekly_fields_component__WEBPACK_IMPORTED_MODULE_7__["WeeklyFieldsComponent"], _event_field_components_month_dow_fields_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_8__["MonthDOWFieldsComponent"], _event_field_components_year_month_dow_fields_year_month_dow_fields_component__WEBPACK_IMPORTED_MODULE_9__["YearMonthDowFieldsComponent"], _event_field_components_year_monthly_fields_year_monthly_fields_component__WEBPACK_IMPORTED_MODULE_10__["YearMonthlyFieldsComponent"]], styles: [".toggleEvent[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZUV2ZW50IHtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.css']
            }]
    }], null, { calendarEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/month/month.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/month/month.component.ts ***!
  \*****************************************************/
/*! exports provided: MonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthComponent", function() { return MonthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../day/day.component */ "./src/app/components/day/day.component.ts");




function MonthComponent_tr_3_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r45);
} }
function MonthComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthComponent_tr_3_th_1_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.daysOfWeek);
} }
function MonthComponent_tr_4_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-day", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("day", day_r48);
} }
function MonthComponent_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthComponent_tr_4_td_1_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r48);
} }
function MonthComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthComponent_tr_4_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const week_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", week_r46.days);
} }
const DefaultDoWNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
class MonthComponent {
    constructor() {
        this.daysOfWeek = DefaultDoWNames;
    }
}
MonthComponent.ɵfac = function MonthComponent_Factory(t) { return new (t || MonthComponent)(); };
MonthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthComponent, selectors: [["app-month"]], inputs: { month: "month", daysOfWeek: "daysOfWeek" }, decls: 5, vars: 3, consts: [["align", "center", 1, "month"], [4, "ngIf"], ["class", "week-repeater", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "week-repeater"], ["class", "day-repeater", 4, "ngFor", "ngForOf"], [1, "day-repeater"], ["class", "day-container", 4, "ngIf"], [1, "day-container"], [3, "day"]], template: function MonthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthComponent_tr_3_Template, 2, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthComponent_tr_4_Template, 2, 1, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.month.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.daysOfWeek);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.month.weeks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _day_day_component__WEBPACK_IMPORTED_MODULE_2__["DayComponent"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n    margin: 5px 5px 5px 5px;\r\n}\r\n\r\n.week-repeater[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n}\r\n\r\n.day-repeater[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    min-width: 200px;\r\n    height: 100%;\r\n    padding: 0px;\r\n}\r\n\r\n.day-container[_ngcontent-%COMP%] {\r\n    min-width: 160px;\r\n    min-height: 200px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtBQUNsQzs7QUFHQSxVQUFVLDJCQUEyQixDQUFDOztBQUd0QztJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQzFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vbnRoL21vbnRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAuMmVtIDAuMmVtIDAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbn1cclxuXHJcblxyXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2M2ZDNmZjgxO31cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFmZjgxO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuLndlZWstcmVwZWF0ZXIge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmRheS1yZXBlYXRlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmRheS1jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-month',
                templateUrl: './month.component.html',
                styleUrls: ['./month.component.css']
            }]
    }], null, { month: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], daysOfWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/new-event/new-event.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.ts ***!
  \*************************************************************/
/*! exports provided: NewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventComponent", function() { return NewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








const _c0 = function (a0) { return { "needs-attention": a0 }; };
function NewEventComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_div_19_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r51.offset))("ngModel", ctx_r51.offset);
} }
function NewEventComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_div_20_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.monthOffset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r52.monthOffset))("ngModel", ctx_r52.monthOffset);
} }
function NewEventComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_div_21_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r53.offset))("ngModel", ctx_r53.offset);
} }
function NewEventComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_div_22_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r54.offset))("ngModel", ctx_r54.offset);
} }
function NewEventComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_div_23_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.clickedDayID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r55.clickedDayID))("ngModel", ctx_r55.clickedDayID);
} }
function NewEventComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_div_25_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.repeatDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r56.repeatDays))("ngModel", ctx_r56.repeatDays);
} }
function NewEventComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_div_26_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.weekOffset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r57.weekOffset))("ngModel", ctx_r57.weekOffset);
} }
class NewEventComponent {
    constructor() {
        this.newCyclicalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newYearlyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newMonthlyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newWeeklyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newMonthDOWEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newYearMonthDOWEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newYearMonthlyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newUniqueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventType = 'cyclical';
    }
    closeWindow() {
        this.setWindow.emit(false);
    }
    createEvent() {
        let error = false;
        let message = '';
        if (this.title === null || this.title === '' || this.title === undefined) {
            message += 'Title invalid\n';
            error = true;
        }
        if (this.eventType === 'unique') {
            if (this.clickedDayID === null || this.clickedDayID < 1 || this.clickedDayID === undefined) {
                message += 'Clicked day ID invalid\n';
                error = true;
            }
        }
        else {
            if (this.offset === null || this.offset < 1 || this.offset === undefined) {
                message += 'Offset invalid\n';
                error = true;
            }
        }
        if (this.duration === null || this.duration < 1 || this.duration === undefined) {
            message += 'Duration invalid\n';
            error = true;
        }
        if (this.eventType === 'cyclical') {
            if (this.repeatDays === null || this.repeatDays < 1 || this.repeatDays === undefined) {
                message += 'Repeat days invalid\n';
                error = true;
            }
        }
        if (this.eventType === 'monthDOW') {
            if (this.weekOffset === null || this.weekOffset < 1 || this.weekOffset === undefined) {
                message += 'Month day of week invalid\n';
                error = true;
            }
        }
        if (this.eventType === 'yearMonthDOW') {
            if (this.monthOffset === null || this.monthOffset < 1 || this.monthOffset === undefined) {
                message += 'Month Offset invalid\n';
                error = true;
            }
        }
        if (!error) {
            this.newEventEmit();
            this.clearInput();
        }
        else {
            console.log(message);
        }
    }
    clearInput() {
        this.title = null;
        this.offset = null;
        this.duration = null;
        this.repeatDays = null;
        this.roundToNearest = null;
        this.month = null;
        this.weekOffset = null;
        this.monthOffset = null;
        this.clickedDayID = null;
    }
    newEventEmit() {
        if (this.eventType === 'cyclical') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.offset,
                duration: this.duration,
                repeatDays: this.repeatDays
            };
            this.newCyclicalEvent.emit(newCalendarEvent);
        }
        else if (this.eventType === 'yearly') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.offset,
                duration: this.duration
            };
            this.newYearlyEvent.emit(newCalendarEvent);
        }
        else if (this.eventType === 'monthly') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.offset,
                duration: this.duration
            };
            this.newMonthlyEvent.emit(newCalendarEvent);
        }
        else if (this.eventType === 'weekly') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.offset,
                duration: this.duration
            };
            this.newWeeklyEvent.emit(newCalendarEvent);
        }
        else if (this.eventType === 'monthDOW') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.offset,
                duration: this.duration,
                weekOffset: this.weekOffset
            };
            this.newMonthDOWEvent.emit(newCalendarEvent);
        }
        else if (this.eventType === 'yearMonthDOW') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.offset,
                duration: this.duration,
                weekOffset: this.weekOffset,
                monthOffset: this.monthOffset
            };
            this.newYearMonthDOWEvent.emit(newCalendarEvent);
        }
        else if (this.eventType === 'yearMonthly') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.offset,
                duration: this.duration,
                monthOffset: this.monthOffset
            };
            this.newYearMonthlyEvent.emit(newCalendarEvent);
        }
        else if (this.eventType === 'unique') {
            const newCalendarEvent = {
                title: this.title,
                offset: this.clickedDayID,
                duration: this.duration
            };
            this.newUniqueEvent.emit(newCalendarEvent);
        }
        this.closeWindow();
    }
}
NewEventComponent.ɵfac = function NewEventComponent_Factory(t) { return new (t || NewEventComponent)(); };
NewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewEventComponent, selectors: [["app-new-event"]], inputs: { eventType: "eventType", title: "title", offset: "offset", duration: "duration", repeatDays: "repeatDays", roundToNearest: "roundToNearest", month: "month", weekOffset: "weekOffset", monthOffset: "monthOffset", clickedDayID: "clickedDayID" }, outputs: { newCyclicalEvent: "newCyclicalEvent", newYearlyEvent: "newYearlyEvent", newMonthlyEvent: "newMonthlyEvent", newWeeklyEvent: "newWeeklyEvent", newMonthDOWEvent: "newMonthDOWEvent", newYearMonthDOWEvent: "newYearMonthDOWEvent", newYearMonthlyEvent: "newYearMonthlyEvent", newUniqueEvent: "newUniqueEvent", setWindow: "setWindow" }, decls: 29, vars: 16, consts: [[1, "region"], ["id", "event-type", 3, "ngModel", "ngModelChange"], ["value", "unique"], ["value", "cyclical"], ["value", "yearMonthly"], ["value", "yearly"], ["value", "yearMonthDOW"], ["value", "monthly"], ["value", "monthDOW"], ["value", "weekly"], ["matInput", "", "type", "text", "placeholder", "Title", 3, "ngClass", "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "type", "number", "placeholder", "Duration of event", "min", "1", 3, "ngClass", "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 1, "createButton", 3, "click"], ["matInput", "", "type", "number", "placeholder", "Day of the year", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Month of the year", "min", "1", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Day of the month", "min", "1", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Offset", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Day ID", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Length of cycle", "min", "1", 3, "ngClass", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Week of the month", "min", "1", 3, "ngClass", "ngModel", "ngModelChange"]], template: function NewEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.eventType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Unique event, only happens once");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cyclical, independent of calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Happens once a year in a given month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Happens once a year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Happens once a year, based on the day of the week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Happens once a month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Happens every month, based on the day of the week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Happens once a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_Template_input_ngModelChange_18_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewEventComponent_div_19_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewEventComponent_div_20_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NewEventComponent_div_21_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewEventComponent_div_22_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NewEventComponent_div_23_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEventComponent_Template_input_ngModelChange_24_listener($event) { return ctx.duration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewEventComponent_div_25_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewEventComponent_div_26_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewEventComponent_Template_button_click_27_listener() { return ctx.createEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eventType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, !ctx.title))("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventType === "yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventType === "yearMonthDOW" || ctx.eventType === "yearMonthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventType === "yearMonthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventType !== "yearly" && ctx.eventType !== "unique" && ctx.eventType !== "yearMonthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventType === "unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, !ctx.duration))("ngModel", ctx.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventType === "cyclical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventType === "monthDOW" || ctx.eventType === "yearMonthDOW");
    } }, directives: [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.region[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 400px;\r\n}\r\n\r\n.createButton[_ngcontent-%COMP%] {\r\n    margin-right: 20px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LWV2ZW50L25ldy1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDOztBQUdBLFVBQVUsMkJBQTJCLENBQUM7O0FBR3RDO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FDMUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7O0NBSUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy1ldmVudC9uZXctZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxubGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMC4yZW0gMC4yZW0gMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggOHB4IDhweDtcclxufVxyXG5cclxuXHJcbnRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkM2ZmODE7fVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlYWZmODE7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5jc3NcIjtcclxuXHJcbi5yZWdpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVCdXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcclxufVxyXG5cclxuLypcclxuLm5lZWRzLWF0dGVudGlvbiB7XHJcbiAgICBib3JkZXI6IHJnYigyNTUsIDE0MCwgMTQwKSBzb2xpZCAycHg7XHJcbn1cclxuKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-event',
                templateUrl: './new-event.component.html',
                styleUrls: ['./new-event.component.css']
            }]
    }], function () { return []; }, { newCyclicalEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newYearlyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newMonthlyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newWeeklyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newMonthDOWEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newYearMonthDOWEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newYearMonthlyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newUniqueEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], eventType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], repeatDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roundToNearest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], month: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], monthOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickedDayID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/options.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/options/options.component.ts ***!
  \*********************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/store/selectors/index.ts");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions/view.actions */ "./src/app/store/actions/view.actions.ts");
/* harmony import */ var src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/selectors/options.selector */ "./src/app/store/selectors/options.selector.ts");
/* harmony import */ var src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/actions/options.actions */ "./src/app/store/actions/options.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var src_app_calendar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/calendar.service */ "./src/app/calendar.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _optionsSubsections_year_editor_year_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./optionsSubsections/year-editor/year-editor.component */ "./src/app/components/options/optionsSubsections/year-editor/year-editor.component.ts");
/* harmony import */ var _optionsSubsections_month_editor_month_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./optionsSubsections/month-editor/month-editor.component */ "./src/app/components/options/optionsSubsections/month-editor/month-editor.component.ts");
/* harmony import */ var _optionsSubsections_week_editor_week_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./optionsSubsections/week-editor/week-editor.component */ "./src/app/components/options/optionsSubsections/week-editor/week-editor.component.ts");
/* harmony import */ var _optionsSubsections_leap_year_editor_leap_year_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./optionsSubsections/leap-year-editor/leap-year-editor.component */ "./src/app/components/options/optionsSubsections/leap-year-editor/leap-year-editor.component.ts");
/* harmony import */ var _optionsSubsections_events_editor_events_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./optionsSubsections/events-editor/events-editor.component */ "./src/app/components/options/optionsSubsections/events-editor/events-editor.component.ts");
/* harmony import */ var _optionsSubsections_json_json_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./optionsSubsections/json/json.component */ "./src/app/components/options/optionsSubsections/json/json.component.ts");




















function OptionsComponent_div_5_app_year_editor_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-year-editor", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("setYear", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r78.yearMath$));
} }
function OptionsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.toggleYearOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Year Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionsComponent_div_5_app_year_editor_3_Template, 2, 3, "app-year-editor", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r72.yearOpen$));
} }
function OptionsComponent_div_6_app_month_editor_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-month-editor", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("setMonths", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r81.months$));
} }
function OptionsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.toggleMonthOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Month Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionsComponent_div_6_app_month_editor_3_Template, 2, 3, "app-month-editor", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r73.monthOpen$));
} }
function OptionsComponent_div_7_app_week_editor_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-week-editor", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("setDoW", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r84.weeks$));
} }
function OptionsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.toggleWeekOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Week Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionsComponent_div_7_app_week_editor_3_Template, 2, 3, "app-week-editor", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r74.weekOpen$));
} }
function OptionsComponent_div_8_app_leap_year_editor_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-leap-year-editor", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("setLeapYear", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r87.leapYears$));
} }
function OptionsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.toggleLeapYearOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Leap Year Rule Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionsComponent_div_8_app_leap_year_editor_3_Template, 2, 3, "app-leap-year-editor", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r75.leapYearOpen$));
} }
function OptionsComponent_div_9_app_events_editor_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-events-editor", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("setEventLists", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r90.events$));
} }
function OptionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.toggleEventOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Event Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionsComponent_div_9_app_events_editor_3_Template, 2, 3, "app-events-editor", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r76.eventOpen$));
} }
function OptionsComponent_app_json_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-json", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r77.calendarObject$));
} }
class OptionsComponent {
    constructor(store, calendarService) {
        this.store = store;
        this.calendarService = calendarService;
        this.faArrowAltCircleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltCircleUp"];
        this.calendarObject$ = this.calendarService.getCurrentCalendar$();
        this.yearMath$ = this.calendarObject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(calendar => calendar.year));
        this.months$ = this.calendarObject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(calendar => calendar.months));
        this.weeks$ = this.calendarObject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(calendar => calendar.DoW));
        this.leapYears$ = this.calendarObject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(calendar => calendar.leapYearRules));
        this.events$ = this.calendarObject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(calendar => calendar.events));
        this.activeCalendarSubscription = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["CalendarSelectors"].selectActiveCalendar).subscribe(activeCalendar => this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__["OptionsActions"].setDirtyCalendar({ calendar: activeCalendar })));
        /*
        // Debounce search.
        this.userYearChangeSubscription = this.userYearChange.pipe(
          debounceTime(400),
          distinctUntilChanged())
          .subscribe(value => {
            this.jumpToYear(value);
          });
          */
        this.yearOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_6__["selectYearOptionsOpen"]);
        this.monthOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_6__["selectMonthOptionsOpen"]);
        this.weekOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_6__["selectWeekOptionsOpen"]);
        this.leapYearOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_6__["selectLeapYearOptionsOpen"]);
        this.eventOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_6__["selectEventOptionsOpen"]);
        this.jsonOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_6__["selectJSONOptionsOpen"]);
    }
    ngOnDestroy() {
        if (this.activeCalendarSubscription) {
            this.activeCalendarSubscription.unsubscribe();
        }
    }
    pushChanges() {
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["OptionsSelectors"].selectDirtyCalendar).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(newCalendar => this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__["CalendarActions"].pushCalendar({ newCalendar })));
        this.store.dispatch(Object(src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_5__["toggleOptions"])({}));
    }
    toggleYearOptions() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_7__["toggleYearOptions"])({}));
    }
    toggleMonthOptions() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_7__["toggleMonthOptions"])({}));
    }
    toggleWeekOptions() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_7__["toggleWeekOptions"])({}));
    }
    toggleLeapYearOptions() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_7__["toggleLeapYearOptions"])({}));
    }
    toggleEventOptions() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_7__["toggleEventOptions"])({}));
    }
    toggleJSONOptions() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_7__["toggleJSONOptions"])({}));
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_calendar_service__WEBPACK_IMPORTED_MODULE_9__["CalendarService"])); };
OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], inputs: { lookupArray: "lookupArray", calendarName: "calendarName" }, decls: 15, vars: 9, consts: [[1, "settings-panel"], ["mat-raised-button", "", "color", "basic", 1, "apply", 3, "click"], [3, "icon"], [1, "column"], ["class", "settings-option", 4, "ngIf"], [1, "settings-option"], ["mat-flat-button", "", "color", "primary", 3, "click"], [3, "calendar", 4, "ngIf"], [3, "setYear", 4, "ngIf"], [3, "setYear"], [3, "setMonths", 4, "ngIf"], [3, "setMonths"], [3, "setDoW", 4, "ngIf"], [3, "setDoW"], [3, "setLeapYear", 4, "ngIf"], [3, "setLeapYear"], [3, "setEventLists", 4, "ngIf"], [3, "setEventLists"], [3, "calendar"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_1_listener() { return ctx.pushChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OptionsComponent_div_5_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OptionsComponent_div_6_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OptionsComponent_div_7_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OptionsComponent_div_8_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OptionsComponent_div_9_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_11_listener() { return ctx.toggleJSONOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " JSON Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OptionsComponent_app_json_13_Template, 2, 3, "app-json", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowAltCircleUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yearMath$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.months$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weeks$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leapYears$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.events$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, ctx.jsonOpen$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _optionsSubsections_year_editor_year_editor_component__WEBPACK_IMPORTED_MODULE_13__["YearEditorComponent"], _optionsSubsections_month_editor_month_editor_component__WEBPACK_IMPORTED_MODULE_14__["MonthEditorComponent"], _optionsSubsections_week_editor_week_editor_component__WEBPACK_IMPORTED_MODULE_15__["WeekEditorComponent"], _optionsSubsections_leap_year_editor_leap_year_editor_component__WEBPACK_IMPORTED_MODULE_16__["LeapYearEditorComponent"], _optionsSubsections_events_editor_events_editor_component__WEBPACK_IMPORTED_MODULE_17__["EventsEditorComponent"], _optionsSubsections_json_json_component__WEBPACK_IMPORTED_MODULE_18__["JsonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.settings-panel[_ngcontent-%COMP%] {\r\n  height: 100%; \r\n  width: 100%;\r\n  top: 0;\r\n  position: fixed; \r\n  z-index: 1; \r\n  background-color: rgba(190, 190, 190);\r\n  overflow-x: hidden; \r\n  overflow-y: scroll;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.settings-option[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  width: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: stretch;\r\n  border: 3px solid black;\r\n  margin: 20px;\r\n}\r\n\r\n.apply[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBR0EsVUFBVSwyQkFBMkIsQ0FBQzs7QUFHdEM7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUMxRUE7RUFDRSxZQUFZLEVBQUUsdURBQXVEO0VBQ3JFLFdBQVc7RUFDWCxNQUFNO0VBQ04sZUFBZSxFQUFFLDRDQUE0QztFQUM3RCxVQUFVLEVBQUUsZ0JBQWdCO0VBQzVCLHFDQUFxQztFQUNyQyxrQkFBa0IsRUFBRSw4QkFBOEI7RUFDbEQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAuMmVtIDAuMmVtIDAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbn1cclxuXHJcblxyXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2M2ZDNmZjgxO31cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFmZjgxO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzXCI7XHJcblxyXG4uc2V0dGluZ3MtcGFuZWwge1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbC1oZWlnaHQ6IHJlbW92ZSB0aGlzIGlmIHlvdSB3YW50IFwiYXV0b1wiIGhlaWdodCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTkwKTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNldHRpbmdzLW9wdGlvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uYXBwbHkge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-options',
                templateUrl: './options.component.html',
                styleUrls: ['./options.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: src_app_calendar_service__WEBPACK_IMPORTED_MODULE_9__["CalendarService"] }]; }, { lookupArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calendarName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/events-editor/events-editor.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/events-editor/events-editor.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EventsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsEditorComponent", function() { return EventsEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/actions/options.actions */ "./src/app/store/actions/options.actions.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/options.selector */ "./src/app/store/selectors/options.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _new_event_new_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");










function EventsEditorComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276); const idx_r274 = ctx.index; const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r275.deleteCyclicalEvent(idx_r274); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r273 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r273)("eventType", "cyclical")("editable", true);
} }
function EventsEditorComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r280); const idx_r278 = ctx.index; const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r279.deleteUniqueEvent(idx_r278); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r277 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r277)("eventType", "unique")("editable", true);
} }
function EventsEditorComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r284); const idx_r282 = ctx.index; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r283.deleteYearlyEvent(idx_r282); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r281 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r281)("eventType", "yearly")("editable", true);
} }
function EventsEditorComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288); const idx_r286 = ctx.index; const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r287.deleteMonthlyEvent(idx_r286); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r285 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r285)("eventType", "monthly")("editable", true);
} }
function EventsEditorComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const idx_r290 = ctx.index; const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r291.deleteWeeklyEvent(idx_r290); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r289 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r289)("eventType", "weekly")("editable", true);
} }
function EventsEditorComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_22_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r296); const idx_r294 = ctx.index; const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r295.deleteMonthDOWEvent(idx_r294); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r293 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r293)("eventType", "monthDOW")("editable", true);
} }
function EventsEditorComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_25_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r300); const idx_r298 = ctx.index; const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r299.deleteYearMonthDOWEvent(idx_r298); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r297 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r297)("eventType", "yearMonthDOW")("editable", true);
} }
function EventsEditorComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_div_28_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304); const idx_r302 = ctx.index; const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r303.deleteYearMonthlyEvent(idx_r302); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r301 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calendarEvent", x_r301)("eventType", "yearMonthly")("editable", true);
} }
function EventsEditorComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-new-event", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newCyclicalEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newCyclicalEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r305.createNewCyclicalEvent($event); })("newUniqueEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newUniqueEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r307.createNewUniqueEvent($event); })("newYearlyEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newYearlyEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r308.createNewYearlyEvent($event); })("newMonthlyEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newMonthlyEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r309.createNewMonthlyEvent($event); })("newWeeklyEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newWeeklyEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r310.createNewWeeklyEvent($event); })("newMonthlyDOWEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newMonthlyDOWEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r311.createNewMonthDOWEvent($event); })("newYearlyMonthlyDOWEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newYearlyMonthlyDOWEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r312.createNewYearMonthDOWEvent($event); })("newYearlyMonthlyEvent", function EventsEditorComponent_div_0_div_31_Template_app_new_event_newYearlyMonthlyEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r313.createNewYearlyMonthlyEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventsEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Events:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cyclical Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventsEditorComponent_div_0_div_7_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Unique Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EventsEditorComponent_div_0_div_10_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Yearly Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EventsEditorComponent_div_0_div_13_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Monthly Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EventsEditorComponent_div_0_div_16_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Weekly Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EventsEditorComponent_div_0_div_19_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Monthly Events Based on the Day of the Week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EventsEditorComponent_div_0_div_22_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Yearly Events Based on the Month and Day of the Week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EventsEditorComponent_div_0_div_25_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Yearly Events Based on the Day of the Month ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EventsEditorComponent_div_0_div_28_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsEditorComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r314.toggleNewEventPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " New Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EventsEditorComponent_div_0_div_31_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.cyclicalEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.uniqueEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.yearlyEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.monthlyEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.weeklyEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.monthDOWEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.yearMonthDOWEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r263.eventLists.yearlyMonthlyEvents)("ngForTrackBy", ctx_r263.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 17, ctx_r263.newEventPanelOpen$));
} }
class EventsEditorComponent {
    constructor(store) {
        this.store = store;
        this.newEventPanelOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__["selectNewEventPanelOpen"]);
    }
    set setEventLists(eventLists) {
        this.eventLists = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](eventLists);
    }
    ngOnInit() {
    }
    createNewCyclicalEvent(newEvent) {
        this.eventLists.cyclicalEvents.push(newEvent);
        this.pushEventLists();
    }
    createNewUniqueEvent(newEvent) {
        this.eventLists.uniqueEvents.push(newEvent);
        this.pushEventLists();
    }
    createNewYearlyEvent(newEvent) {
        this.eventLists.yearlyEvents.push(newEvent);
        this.pushEventLists();
    }
    createNewMonthlyEvent(newEvent) {
        this.eventLists.monthlyEvents.push(newEvent);
        this.pushEventLists();
    }
    createNewWeeklyEvent(newEvent) {
        this.eventLists.weeklyEvents.push(newEvent);
        this.pushEventLists();
    }
    createNewMonthDOWEvent(newEvent) {
        this.eventLists.monthDOWEvents.push(newEvent);
        this.pushEventLists();
    }
    createNewYearMonthDOWEvent(newEvent) {
        this.eventLists.yearMonthDOWEvents.push(newEvent);
        this.pushEventLists();
    }
    createNewYearlyMonthlyEvent(newEvent) {
        this.eventLists.yearlyMonthlyEvents.push(newEvent);
        this.pushEventLists();
    }
    deleteCyclicalEvent(index) {
        if (index >= 0) {
            this.eventLists.cyclicalEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    deleteUniqueEvent(index) {
        if (index >= 0) {
            this.eventLists.uniqueEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    deleteYearlyEvent(index) {
        if (index >= 0) {
            this.eventLists.yearlyEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    deleteMonthlyEvent(index) {
        if (index >= 0) {
            this.eventLists.monthlyEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    deleteWeeklyEvent(index) {
        if (index >= 0) {
            this.eventLists.weeklyEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    deleteMonthDOWEvent(index) {
        if (index >= 0) {
            this.eventLists.monthDOWEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    deleteYearMonthDOWEvent(index) {
        if (index >= 0) {
            this.eventLists.yearMonthDOWEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    deleteYearMonthlyEvent(index) {
        if (index >= 0) {
            this.eventLists.yearlyMonthlyEvents.splice(index, 1);
            this.pushEventLists();
        }
    }
    trackArray(index, item) {
        return index;
    }
    pushEventLists() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_1__["setEventLists"])({ events: lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.eventLists) }));
    }
    toggleNewEventPanel() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_1__["toggleNewEvent"])({}));
    }
}
EventsEditorComponent.ɵfac = function EventsEditorComponent_Factory(t) { return new (t || EventsEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
EventsEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsEditorComponent, selectors: [["app-events-editor"]], inputs: { setEventLists: "setEventLists" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "input-region"], [1, "events-list"], [1, "event-category"], ["class", "input-fields", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-flat-button", "", "color", "primary", 1, "newEventButton", 3, "click"], ["class", "new-event-region", 4, "ngIf"], [1, "input-fields"], [3, "calendarEvent", "eventType", "editable"], ["mat-mini-fab", "", "color", "warn", 1, "event-delete", 3, "click"], [1, "new-event-region"], [3, "newCyclicalEvent", "newUniqueEvent", "newYearlyEvent", "newMonthlyEvent", "newWeeklyEvent", "newMonthlyDOWEvent", "newYearlyMonthlyDOWEvent", "newYearlyMonthlyEvent"]], template: function EventsEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventsEditorComponent_div_0_Template, 33, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.eventLists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _event_event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"], _new_event_new_event_component__WEBPACK_IMPORTED_MODULE_8__["NewEventComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".input-fields[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.newEventButton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy9ldmVudHMtZWRpdG9yL2V2ZW50cy1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29wdGlvbnMvb3B0aW9uc1N1YnNlY3Rpb25zL2V2ZW50cy1lZGl0b3IvZXZlbnRzLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5ld0V2ZW50QnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events-editor',
                templateUrl: './events-editor.component.html',
                styleUrls: ['./events-editor.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { setEventLists: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/json/json.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/json/json.component.ts ***!
  \******************************************************************************/
/*! exports provided: JsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonComponent", function() { return JsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/actions/calendar.actions */ "./src/app/store/actions/calendar.actions.ts");
/* harmony import */ var src_app_json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/json.service */ "./src/app/json.service.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class JsonComponent {
    constructor(jsonService, clipboard, store) {
        this.jsonService = jsonService;
        this.clipboard = clipboard;
        this.store = store;
    }
    set calendar(calendar) {
        this.jsonSave = this.jsonService.calendarToJSON(calendar);
    }
    clipboardJSON() {
        const pending = this.clipboard.beginCopy(this.jsonSave);
        let remainingAttempts = 3;
        const attempt = () => {
            const result = pending.copy();
            if (!result && --remainingAttempts) {
                setTimeout(attempt);
            }
            else {
                // Remember to destroy when you're done!
                pending.destroy();
            }
        };
        attempt();
    }
    newUserJSON() {
        this.store.dispatch(Object(src_app_store_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_1__["pushCalendar"])({ newCalendar: this.jsonService.JSONToCalendar(this.fromjson) }));
    }
}
JsonComponent.ɵfac = function JsonComponent_Factory(t) { return new (t || JsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
JsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonComponent, selectors: [["app-json"]], inputs: { calendar: "calendar", fromjson: "fromjson" }, decls: 13, vars: 3, consts: [["id", "jsonRegion", 1, "input-region"], ["mat-flat-button", "", "color", "primary", 3, "cdkCopyToClipboard", "cdkCopyToClipboardAttempts"], [1, "loadJSON"], [1, "loadControls"], ["placeholder", "Paste JSON data here", 1, "jsonArea", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 1, "applyJSON", 3, "click"]], template: function JsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save Calendar as JSON:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Copy Settings to Clipboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Load Calendar from JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JsonComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.fromjson = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonComponent_Template_button_click_11_listener() { return ctx.newUserJSON(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Apply new JSON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.jsonSave)("cdkCopyToClipboardAttempts", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromjson);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["CdkCopyToClipboard"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".applyJSON[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.jsonArea[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 99%;\r\n    resize: vertical;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy9qc29uL2pzb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zU3Vic2VjdGlvbnMvanNvbi9qc29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHlKU09OIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmpzb25BcmVhIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-json',
                templateUrl: './json.component.html',
                styleUrls: ['./json.component.css']
            }]
    }], function () { return [{ type: src_app_json_service__WEBPACK_IMPORTED_MODULE_2__["JsonService"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fromjson: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/leap-year-editor/leap-year-editor.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/leap-year-editor/leap-year-editor.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LeapYearEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeapYearEditorComponent", function() { return LeapYearEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/options.actions */ "./src/app/store/actions/options.actions.ts");
/* harmony import */ var src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/options.selector */ "./src/app/store/selectors/options.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _new_leap_year_rule_new_leap_year_rule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-leap-year-rule/new-leap-year-rule.component */ "./src/app/components/options/optionsSubsections/new-leap-year-rule/new-leap-year-rule.component.ts");











function LeapYearEditorComponent_div_0_tr_13_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeapYearEditorComponent_div_0_tr_13_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r248); const idx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r246.toggleEditLeapYear(idx_r242); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeapYearEditorComponent_div_0_tr_13_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeapYearEditorComponent_div_0_tr_13_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r249.toggleEditLeapYear(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeapYearEditorComponent_div_0_tr_13_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeapYearEditorComponent_div_0_tr_13_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); const idx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r251.deleteLY(idx_r242); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeapYearEditorComponent_div_0_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeapYearEditorComponent_div_0_tr_13_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r255); const idx_r242 = ctx.index; const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r254.leapYears[idx_r242].leapYearCycles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeapYearEditorComponent_div_0_tr_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r255); const idx_r242 = ctx.index; const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r256.leapYears[idx_r242].leapYearOffset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeapYearEditorComponent_div_0_tr_13_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r255); const idx_r242 = ctx.index; const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r257.leapYears[idx_r242].leapYearChange = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeapYearEditorComponent_div_0_tr_13_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r255); const idx_r242 = ctx.index; const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r258.leapYears[idx_r242].leapDayMonth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LeapYearEditorComponent_div_0_tr_13_button_13_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LeapYearEditorComponent_div_0_tr_13_button_15_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LeapYearEditorComponent_div_0_tr_13_button_17_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r242 = ctx.index;
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", idx_r242 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, ctx_r239.leapYearEditingIndex$))("ngModel", ctx_r239.leapYears[idx_r242].leapYearCycles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", idx_r242 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, ctx_r239.leapYearEditingIndex$))("ngModel", ctx_r239.leapYears[idx_r242].leapYearOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", idx_r242 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 15, ctx_r239.leapYearEditingIndex$))("ngModel", ctx_r239.leapYears[idx_r242].leapYearChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", idx_r242 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 17, ctx_r239.leapYearEditingIndex$))("ngModel", ctx_r239.leapYears[idx_r242].leapDayMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r242 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, ctx_r239.leapYearEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r242 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, ctx_r239.leapYearEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r242 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 23, ctx_r239.leapYearEditingIndex$));
} }
function LeapYearEditorComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-new-leap-year-rule", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("leapYearCreation", function LeapYearEditorComponent_div_0_div_16_Template_app_new_leap_year_rule_leapYearCreation_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r259.createNewLeapYear($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeapYearEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Leap year rules:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Years");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Offset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "# of days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LeapYearEditorComponent_div_0_tr_13_Template, 19, 25, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeapYearEditorComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r262); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r261.toggleNewLeapYear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " New Leap Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LeapYearEditorComponent_div_0_div_16_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r238.leapYears)("ngForTrackBy", ctx_r238.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 3, ctx_r238.newLeapYearPanel$));
} }
class LeapYearEditorComponent {
    constructor(store) {
        this.store = store;
        this.leapYearEditingIndex$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__["selectLeapYearEditingIndex"]);
        this.newLeapYearPanel$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__["selectNewLeapYearPanelOpen"]);
    }
    set setLeapYear(leapYears) {
        this.leapYears = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](leapYears);
    }
    ngOnInit() {
    }
    deleteLY(index) {
        if (index >= 0) {
            this.leapYears.splice(index, 1);
        }
    }
    createNewLeapYear(newLeapYear) {
        this.leapYears.push(newLeapYear);
        this.pushLeapYears();
    }
    toggleEditLeapYear(index) {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["leapYearEditingIndex"])({ leapYearEditingIndex: index }));
    }
    pushLeapYears() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["setLeapYears"])({ leapYears: lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.leapYears) }));
    }
    toggleNewLeapYear() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["toggleNewLeapYear"])({}));
    }
    trackArray(index, item) {
        return index;
    }
}
LeapYearEditorComponent.ɵfac = function LeapYearEditorComponent_Factory(t) { return new (t || LeapYearEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
LeapYearEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeapYearEditorComponent, selectors: [["app-leap-year-editor"]], inputs: { setLeapYear: "setLeapYear" }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "input-region"], [1, "LYLabels"], ["class", "LYConfigs", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["class", "new-leap-year-panel", 4, "ngIf"], [1, "LYConfigs"], ["matInput", "", "type", "number", 1, "LYRule", 3, "readonly", "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", "class", "day-edit", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "class", "ly-delete", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "day-edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "ly-delete", 3, "click"], [1, "new-leap-year-panel"], [3, "leapYearCreation"]], template: function LeapYearEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeapYearEditorComponent_div_0_Template, 18, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.leapYears);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _new_leap_year_rule_new_leap_year_rule_component__WEBPACK_IMPORTED_MODULE_9__["NewLeapYearRuleComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".leap-year-rule[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.new-leap-year-panel[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    border: black solid 2px;\r\n    background-color: rgb(197, 228, 238);\r\n    width: 400px;\r\n    z-index: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy9sZWFwLXllYXItZWRpdG9yL2xlYXAteWVhci1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy9sZWFwLXllYXItZWRpdG9yL2xlYXAteWVhci1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFwLXllYXItcnVsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5ldy1sZWFwLXllYXItcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAyMjgsIDIzOCk7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeapYearEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leap-year-editor',
                templateUrl: './leap-year-editor.component.html',
                styleUrls: ['./leap-year-editor.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { setLeapYear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/month-editor/month-editor.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/month-editor/month-editor.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MonthEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthEditorComponent", function() { return MonthEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/options.actions */ "./src/app/store/actions/options.actions.ts");
/* harmony import */ var src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/options.selector */ "./src/app/store/selectors/options.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");











function MonthEditorComponent_div_0_div_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthEditorComponent_div_0_div_4_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209); const idx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r207.toggleEditMonth(idx_r203); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthEditorComponent_div_0_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthEditorComponent_div_0_div_4_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r210.toggleEditMonth(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthEditorComponent_div_0_div_4_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthEditorComponent_div_0_div_4_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r214); const idx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r212.deleteMonth(idx_r203); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthEditorComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthEditorComponent_div_0_div_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216); const idx_r203 = ctx.index; const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r215.settingsMonths[idx_r203].name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthEditorComponent_div_0_div_4_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216); const idx_r203 = ctx.index; const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r217.settingsMonths[idx_r203].length = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MonthEditorComponent_div_0_div_4_button_7_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MonthEditorComponent_div_0_div_4_button_9_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MonthEditorComponent_div_0_div_4_button_11_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r203 = ctx.index;
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", idx_r203 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r200.monthEditingIndex$))("ngModel", ctx_r200.settingsMonths[idx_r203].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", idx_r203 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx_r200.monthEditingIndex$))("ngModel", ctx_r200.settingsMonths[idx_r203].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r203 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, ctx_r200.monthEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r203 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, ctx_r200.monthEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r203 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, ctx_r200.monthEditingIndex$));
} }
function MonthEditorComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Number of months: ", ctx_r201.settingsMonths.length, " ");
} }
function MonthEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Months of the year:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthEditorComponent_div_0_div_4_Template, 13, 17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthEditorComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r218.newMonth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthEditorComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r220.addMonth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MonthEditorComponent_div_0_div_8_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r199.settingsMonths)("ngForTrackBy", ctx_r199.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r199.newMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r199.settingsMonths);
} }
class MonthEditorComponent {
    constructor(store) {
        this.store = store;
        this.monthEditingIndex$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__["selectMonthEditingIndex"]);
    }
    set setMonths(months) {
        this.settingsMonths = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](months);
    }
    ngOnInit() {
    }
    addMonth() {
        if (this.newMonth) {
            this.settingsMonths.push({ name: this.newMonth, length: 1 });
            // this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
            // not implemented
            this.newMonth = '';
            this.pushChanges();
        }
    }
    deleteMonth(index) {
        if (index >= 0) {
            this.settingsMonths.splice(index, 1);
            // this.daysPerYear = this.yearService.sumOfMonthLengths(this.settingsMonths);
            // not implemented
            this.toggleEditMonth(-1);
        }
    }
    toggleEditMonth(index) {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["monthEditingIndex"])({ monthEditingIndex: index }));
        if (index === -1) {
            this.pushChanges();
        }
    }
    pushChanges() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["setMonths"])({ settingsMonths: lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.settingsMonths) }));
    }
    trackArray(index, item) {
        return index;
    }
}
MonthEditorComponent.ɵfac = function MonthEditorComponent_Factory(t) { return new (t || MonthEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
MonthEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthEditorComponent, selectors: [["app-month-editor"]], inputs: { setMonths: "setMonths", newMonth: "newMonth" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "input-region"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matInput", "", "id", "new-month-field", "type", "text", "placeholder", "new month", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", "id", "submit-new-month", 3, "click"], [1, "month-row"], [1, "input-fields"], ["matInput", "", "type", "text", 1, "month-name", 3, "readonly", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "1", 1, "month-length", 3, "readonly", "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", "class", "month-edit", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "class", "month-delete", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "month-edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "month-delete", 3, "click"]], template: function MonthEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MonthEditorComponent_div_0_Template, 9, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsMonths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".input-fields[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.month-row[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy9tb250aC1lZGl0b3IvbW9udGgtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy9tb250aC1lZGl0b3IvbW9udGgtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZmllbGRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubW9udGgtcm93IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-month-editor',
                templateUrl: './month-editor.component.html',
                styleUrls: ['./month-editor.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { setMonths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/new-era/new-era.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/new-era/new-era.component.ts ***!
  \************************************************************************************/
/*! exports provided: NewEraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEraComponent", function() { return NewEraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_era__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/era */ "./src/app/era.ts");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class NewEraComponent {
    constructor(store) {
        this.store = store;
        this.newEra = src_app_era__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ERA"];
        this.eraCreation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    submit() {
        if (this.newEra.eraName !== null &&
            this.newEra.abbreviation !== null &&
            this.newEra.beginning !== null &&
            this.newEra.ending !== null) {
            this.eraCreation.emit({ newEra: this.newEra, newEraOrder: this.newEraOrder });
            this.resetEmptyEra();
        }
        this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["OptionsActions"].toggleNewEra({}));
    }
    resetEmptyEra() {
        this.newEra.eraName = null;
        this.newEra.abbreviation = null;
        this.newEra.beginning = null;
        this.newEra.ending = null;
        this.newEra.reversed = null;
        this.newEraOrder = null;
    }
}
NewEraComponent.ɵfac = function NewEraComponent_Factory(t) { return new (t || NewEraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
NewEraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewEraComponent, selectors: [["app-new-era"]], inputs: { eraListLength: "eraListLength", newEra: "newEra", newEraOrder: "newEraOrder" }, outputs: { eraCreation: "eraCreation" }, decls: 13, vars: 8, consts: [[1, "new-era"], ["matInput", "", "type", "text", "placeholder", "Era Name", "autocomplete", "off", 1, "new-era-name", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Era Abbreviation", "autocomplete", "off", 1, "new-era-abbr", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Start year number", "autocomplete", "off", 1, "new-era-begin", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "End year number", "autocomplete", "off", 1, "new-era-end", 3, "ngModel", "ngModelChange"], ["for", "era-reverse"], ["id", "era-reverse", "type", "checkbox", 1, "new-era-reverse", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Era placement", "autocomplete", "off", 1, "new-era-index", 3, "ngModel", "min", "max", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 1, "new-era-create", 3, "click"]], template: function NewEraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Era: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEraComponent_Template_input_ngModelChange_2_listener($event) { return ctx.newEra.eraName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEraComponent_Template_input_ngModelChange_3_listener($event) { return ctx.newEra.abbreviation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEraComponent_Template_input_ngModelChange_4_listener($event) { return ctx.newEra.beginning = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEraComponent_Template_input_ngModelChange_5_listener($event) { return ctx.newEra.ending = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reverse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEraComponent_Template_input_ngModelChange_9_listener($event) { return ctx.newEra.reversed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewEraComponent_Template_input_ngModelChange_10_listener($event) { return ctx.newEraOrder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewEraComponent_Template_button_click_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEra.eraName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEra.abbreviation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEra.beginning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEra.ending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEra.reversed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEraOrder)("min", 1)("max", ctx.eraListLength + 1);
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zU3Vic2VjdGlvbnMvbmV3LWVyYS9uZXctZXJhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-era',
                templateUrl: './new-era.component.html',
                styleUrls: ['./new-era.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { eraListLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newEra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newEraOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eraCreation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/new-leap-year-rule/new-leap-year-rule.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/new-leap-year-rule/new-leap-year-rule.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NewLeapYearRuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLeapYearRuleComponent", function() { return NewLeapYearRuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_leapYear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/leapYear */ "./src/app/leapYear.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class NewLeapYearRuleComponent {
    constructor() {
        this.candidateLY = src_app_leapYear__WEBPACK_IMPORTED_MODULE_1__["EMPTY_LEAP_YEAR"];
        this.leapYearCreation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    addLY() {
        this.leapYearCreation.emit({ newLeapYear: this.candidateLY });
        this.resetEmptyLeapYear();
    }
    resetEmptyLeapYear() {
        this.candidateLY = {
            leapYearCycles: null,
            leapYearOffset: null,
            leapYearChange: null,
            leapDayMonth: null
        };
    }
}
NewLeapYearRuleComponent.ɵfac = function NewLeapYearRuleComponent_Factory(t) { return new (t || NewLeapYearRuleComponent)(); };
NewLeapYearRuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewLeapYearRuleComponent, selectors: [["app-new-leap-year-rule"]], inputs: { candidateLY: "candidateLY" }, outputs: { leapYearCreation: "leapYearCreation" }, decls: 9, vars: 4, consts: [[1, "new-lyr-fields"], ["matInput", "", "type", "number", "placeholder", "length of cycle", 1, "newLYRule", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "offset", 1, "newLYRule", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "change in days", 1, "newLYRule", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "month affected", 1, "newLYRule", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function NewLeapYearRuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new leap year rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLeapYearRuleComponent_Template_input_ngModelChange_3_listener($event) { return ctx.candidateLY.leapYearCycles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLeapYearRuleComponent_Template_input_ngModelChange_4_listener($event) { return ctx.candidateLY.leapYearOffset = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLeapYearRuleComponent_Template_input_ngModelChange_5_listener($event) { return ctx.candidateLY.leapYearChange = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLeapYearRuleComponent_Template_input_ngModelChange_6_listener($event) { return ctx.candidateLY.leapDayMonth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewLeapYearRuleComponent_Template_button_click_7_listener() { return ctx.addLY(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.candidateLY.leapYearCycles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.candidateLY.leapYearOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.candidateLY.leapYearChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.candidateLY.leapDayMonth);
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zU3Vic2VjdGlvbnMvbmV3LWxlYXAteWVhci1ydWxlL25ldy1sZWFwLXllYXItcnVsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewLeapYearRuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-leap-year-rule',
                templateUrl: './new-leap-year-rule.component.html',
                styleUrls: ['./new-leap-year-rule.component.css']
            }]
    }], function () { return []; }, { candidateLY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leapYearCreation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/week-editor/week-editor.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/week-editor/week-editor.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WeekEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekEditorComponent", function() { return WeekEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/options.actions */ "./src/app/store/actions/options.actions.ts");
/* harmony import */ var src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/options.selector */ "./src/app/store/selectors/options.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");











function WeekEditorComponent_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeekEditorComponent_div_3_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const idx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r228.toggleEditWeek(idx_r224); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeekEditorComponent_div_3_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeekEditorComponent_div_3_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r232); const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r231.toggleEditWeek(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeekEditorComponent_div_3_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeekEditorComponent_div_3_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); const idx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r233.deleteDoW(idx_r224); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeekEditorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeekEditorComponent_div_3_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237); const idx_r224 = ctx.index; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r236.DoW[idx_r224] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeekEditorComponent_div_3_button_5_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WeekEditorComponent_div_3_button_7_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WeekEditorComponent_div_3_button_9_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r224 = ctx.index;
    const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", idx_r224 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx_r221.dayOfWeekEditingIndex$))("ngModel", ctx_r221.DoW[idx_r224]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r224 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r221.dayOfWeekEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r224 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx_r221.dayOfWeekEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r224 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx_r221.dayOfWeekEditingIndex$));
} }
function WeekEditorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Days in a week: ", ctx_r222.DoW.length, " ");
} }
class WeekEditorComponent {
    constructor(store) {
        this.store = store;
        this.dayOfWeekEditingIndex$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_3__["selectDayOfWeekEditingIndex"]);
    }
    set setDoW(DoW) {
        this.DoW = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](DoW);
    }
    ngOnInit() {
    }
    addDoW() {
        this.DoW.push(this.newDoWName);
        this.pushDoW();
        this.newDoWName = '';
    }
    deleteDoW(index) {
        if (index >= 0) {
            this.DoW.splice(index, 1);
            this.daysPerWeek = this.DoW.length;
            this.pushDoW();
        }
    }
    toggleEditWeek(index) {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["dayOfWeekEditingIndex"])({ dayOfWeekEditingIndex: index }));
    }
    trackArray(index, item) {
        return index;
    }
    pushDoW() {
        this.store.dispatch(Object(src_app_store_actions_options_actions__WEBPACK_IMPORTED_MODULE_2__["setDoW"])({ DoW: lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.DoW) }));
    }
}
WeekEditorComponent.ɵfac = function WeekEditorComponent_Factory(t) { return new (t || WeekEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
WeekEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeekEditorComponent, selectors: [["app-week-editor"]], inputs: { setDoW: "setDoW", newDoWName: "newDoWName" }, decls: 8, vars: 4, consts: [[1, "input-region"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matInput", "", "placeholder", "new day of the week", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 3, "click"], [4, "ngIf"], [1, "day"], ["matInput", "", "type", "text", 3, "readonly", "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", "class", "day-edit", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "class", "dow-delete", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "day-edit", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "dow-delete", 3, "click"]], template: function WeekEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Days of the week:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeekEditorComponent_div_3_Template, 11, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeekEditorComponent_Template_input_ngModelChange_4_listener($event) { return ctx.newDoWName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeekEditorComponent_Template_button_click_5_listener() { return ctx.addDoW(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WeekEditorComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DoW)("ngForTrackBy", ctx.trackArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newDoWName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DoW);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".day[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy93ZWVrLWVkaXRvci93ZWVrLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zU3Vic2VjdGlvbnMvd2Vlay1lZGl0b3Ivd2Vlay1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-week-editor',
                templateUrl: './week-editor.component.html',
                styleUrls: ['./week-editor.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { setDoW: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newDoWName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/options/optionsSubsections/year-editor/year-editor.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/options/optionsSubsections/year-editor/year-editor.component.ts ***!
  \********************************************************************************************/
/*! exports provided: YearEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearEditorComponent", function() { return YearEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/selectors/options.selector */ "./src/app/store/selectors/options.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _new_era_new_era_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../new-era/new-era.component */ "./src/app/components/options/optionsSubsections/new-era/new-era.component.ts");
















function YearEditorComponent_div_0_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const era_r165 = ctx.$implicit;
    const i_r166 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", era_r165.eraName, "");
} }
function YearEditorComponent_div_0_mat_form_field_16_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearEditorComponent_div_0_mat_form_field_16_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176); const idx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r174.changeEraEditingIndex(idx_r168); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearEditorComponent_div_0_mat_form_field_16_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearEditorComponent_div_0_mat_form_field_16_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r177.changeEraEditingIndex(0 - 1); return ctx_r177.applyChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearEditorComponent_div_0_mat_form_field_16_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Beginning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearEditorComponent_div_0_mat_form_field_16_div_9_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181); const x_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return x_r167.beginning = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const x_r167 = ctx_r182.$implicit;
    const idx_r168 = ctx_r182.index;
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r167.beginning)("readonly", idx_r168 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r171.eraEditingIndex$));
} }
function YearEditorComponent_div_0_mat_form_field_16_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearEditorComponent_div_0_mat_form_field_16_div_10_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185); const x_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return x_r167.ending = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const x_r167 = ctx_r186.$implicit;
    const idx_r168 = ctx_r186.index;
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r167.ending)("readonly", idx_r168 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r172.eraEditingIndex$));
} }
function YearEditorComponent_div_0_mat_form_field_16_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearEditorComponent_div_0_mat_form_field_16_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189); const idx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r187.deleteEra(idx_r168); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearEditorComponent_div_0_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearEditorComponent_div_0_mat_form_field_16_button_1_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearEditorComponent_div_0_mat_form_field_16_button_3_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearEditorComponent_div_0_mat_form_field_16_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191); const x_r167 = ctx.$implicit; return x_r167.eraName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearEditorComponent_div_0_mat_form_field_16_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191); const x_r167 = ctx.$implicit; return x_r167.abbreviation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, YearEditorComponent_div_0_mat_form_field_16_div_9_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, YearEditorComponent_div_0_mat_form_field_16_div_10_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, YearEditorComponent_div_0_mat_form_field_16_button_11_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r167 = ctx.$implicit;
    const idx_r168 = ctx.index;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r168 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, ctx_r163.eraEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r168 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, ctx_r163.eraEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r167.eraName)("readonly", idx_r168 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, ctx_r163.eraEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", x_r167.abbreviation)("readonly", idx_r168 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, ctx_r163.eraEditingIndex$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r167.beginning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r167.ending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r168 == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 17, ctx_r163.eraEditingIndex$));
} }
function YearEditorComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-new-era", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eraCreation", function YearEditorComponent_div_0_div_20_Template_app_new_era_eraCreation_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r193.createNewEra($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eraListLength", ctx_r164.year.eras.length);
} }
function YearEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Year Settings:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Default Year:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearEditorComponent_div_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r195.defaultYearChange.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Default Era:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearEditorComponent_div_0_Template_mat_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.defaultEraChange.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, YearEditorComponent_div_0_mat_option_12_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Eras: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, YearEditorComponent_div_0_mat_form_field_16_Template, 13, 19, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearEditorComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r198.toggleNewEraPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " New Era");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, YearEditorComponent_div_0_div_20_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r161.year.currentYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r161.year.currentEra);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r161.year.eras);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r161.year.eras)("ngForTrackBy", ctx_r161.trackArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 6, ctx_r161.newEraPanelOpen$));
} }
class YearEditorComponent {
    constructor(store) {
        this.store = store;
        this.defaultYearChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.defaultEraChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Debounce search.
        this.defaultYearChangeSubscription = this.defaultYearChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(value => {
            this.changeDefaultYear(value);
        });
        // Debounce search.
        this.defaultEraChangeSubscription = this.defaultEraChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(value => {
            this.changeDefaultEra(value);
        });
        this.newEraPanelOpen$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_5__["selectNewEraPanelOpen"]);
        this.eraEditingIndex$ = this.store.select(src_app_store_selectors_options_selector__WEBPACK_IMPORTED_MODULE_5__["selectEraEditingIndex"]);
    }
    set setYear(yearMath) {
        this.year = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](yearMath);
    }
    ngOnInit() {
    }
    changeDefaultYear(value) {
        this.year.currentYear = value;
        this.applyChange();
    }
    changeDefaultEra(value) {
        this.year.currentEra = value;
        this.applyChange();
    }
    createNewEra(data) {
        const newEraCopy = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](data.newEra);
        this.year.eras.splice((data.newEraOrder - 1), 0, newEraCopy);
        this.applyChange();
    }
    deleteEra(index) {
        this.year.eras.splice(index, 1);
        this.applyChange();
    }
    trackArray(index, item) {
        return index;
    }
    applyChange() {
        this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["OptionsActions"].setYearMath({ yearMath: lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.year) }));
    }
    toggleNewEraPanel() {
        this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["OptionsActions"].toggleNewEra({}));
    }
    changeEraEditingIndex(newNumber) {
        this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_2__["OptionsActions"].eraEditingIndex({ eraEditingIndex: newNumber }));
    }
}
YearEditorComponent.ɵfac = function YearEditorComponent_Factory(t) { return new (t || YearEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
YearEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearEditorComponent, selectors: [["app-year-editor"]], inputs: { setYear: "setYear" }, decls: 1, vars: 1, consts: [["class", "settings-option", 4, "ngIf"], [1, "settings-option"], [1, "defaults"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["for", "era", "matInput", ""], ["matInput", "", "id", "era", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "era-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["class", "new-era-panel", 4, "ngIf"], ["matInput", "", 3, "value"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["matInput", "", "type", "text", 1, "era-name", 3, "ngModel", "readonly", "ngModelChange"], ["matInput", "", "type", "text", 1, "era-abbr", 3, "ngModel", "readonly", "ngModelChange"], [4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "class", "era-delete", 3, "click", 4, "ngIf"], ["for", "era-begin"], ["id", "era-begin", "matInput", "", "type", "number", 1, "era-begin", 3, "ngModel", "readonly", "ngModelChange"], ["for", "era-end"], ["id", "era-end", "matInput", "", "type", "number", 1, "era-end", 3, "ngModel", "readonly", "ngModelChange"], ["mat-mini-fab", "", "color", "warn", 1, "era-delete", 3, "click"], [1, "new-era-panel"], [3, "eraListLength", "eraCreation"]], template: function YearEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YearEditorComponent_div_0_Template, 22, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.year);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _new_era_new_era_component__WEBPACK_IMPORTED_MODULE_14__["NewEraComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".settings-option[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n}\r\n\r\n.era-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.new-era-panel[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    border: black solid 2px;\r\n    background-color: rgb(197, 228, 238);\r\n    width: 400px;\r\n    z-index: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy95ZWFyLWVkaXRvci95ZWFyLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnNTdWJzZWN0aW9ucy95ZWFyLWVkaXRvci95ZWFyLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLW9wdGlvbiB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5lcmEtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5uZXctZXJhLXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMjI4LCAyMzgpO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-year-editor',
                templateUrl: './year-editor.component.html',
                styleUrls: ['./year-editor.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, { setYear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/view.actions */ "./src/app/store/actions/view.actions.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/store/selectors/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../calendar.service */ "./src/app/calendar.service.ts");
/* harmony import */ var _calendar_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../calendar-event.service */ "./src/app/calendar-event.service.ts");
/* harmony import */ var src_app_key_value_pairs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/key-value-pairs.service */ "./src/app/key-value-pairs.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _calendar_selector_calendar_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../calendar-selector/calendar-selector.component */ "./src/app/components/calendar-selector/calendar-selector.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../options/options.component */ "./src/app/components/options/options.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _new_event_new_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");



















function ViewComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create New Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_div_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeEventWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-new-event", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setWindow", function ViewComponent_div_15_Template_app_new_event_setWindow_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeEventWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickedDayID", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx_r0.newEventDayID));
} }
class ViewComponent {
    constructor(store, calendarService, calendarEventService, keyValuePairsService) {
        this.store = store;
        this.calendarService = calendarService;
        this.calendarEventService = calendarEventService;
        this.keyValuePairsService = keyValuePairsService;
        this.faArrowAltCircleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltCircleUp"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.optionsAreClosed$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["ViewSelectors"].selectOptionsClosed);
        this.newEventPanelIsOpen = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["ViewSelectors"].selectNewEventOpen);
        this.newEventDayID = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["ViewSelectors"].selectNewEventDayID);
        this.calendarList$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["CalendarSelectors"].selectCalendars);
        this.currentCalendar$ = this.calendarService.getCurrentCalendar$();
        this.currentCalendarSubscription = this.currentCalendar$.subscribe(activeCalendar => this.store.dispatch(src_app_store_actions__WEBPACK_IMPORTED_MODULE_5__["CalendarActions"].setActiveCalendar({ activeCalendar })));
        this.calendarKeyValuePairs$ = this.getCalendarKVP$();
        this.calendarID$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["ViewSelectors"].selectCalendarIndex);
    }
    getCalendarKVP$() {
        return this.calendarKeyValuePairs$ = this.calendarList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(calendars => this.keyValuePairsService.pullLookupsFromCalendarList(calendars)));
    }
    ngOnInit() {
        // this.store.dispatch({ type: '[View] Load TotalSettings})
        this.getDefaultSettings();
    }
    ngOnDestroy() {
        if (this.currentCalendarSubscription) {
            this.currentCalendarSubscription.unsubscribe();
        }
    }
    getDefaultSettings() {
        this.store.dispatch({ type: '[Calendar Page] Load Calendar' });
    }
    closeEventWindow() {
        this.store.dispatch(Object(src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_2__["setNewEventPanel"])({ open: false, dayID: 0 }));
    }
    toggleSettingsSidebar() {
        this.store.dispatch(Object(src_app_store_actions_view_actions__WEBPACK_IMPORTED_MODULE_2__["toggleOptions"])({}));
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_7__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_event_service__WEBPACK_IMPORTED_MODULE_8__["CalendarEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_key_value_pairs_service__WEBPACK_IMPORTED_MODULE_9__["KeyValuePairsService"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 17, vars: 13, consts: [[1, "view"], [1, "sidebarToggle"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "buttonText"], ["size", "4x", 3, "icon"], [1, "calendar-selector"], ["align", "center", 3, "lookupArray"], [3, "hidden"], ["align", "center", 1, "calendar-space"], ["align", "center", 3, "newSettings"], ["class", "new-event-panel", 4, "ngIf"], [1, "new-event-panel"], [1, "topBar"], [3, "click"], [3, "clickedDayID", "setWindow"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Custom Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_4_listener() { return ctx.toggleSettingsSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-calendar-selector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-options", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-calendar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViewComponent_div_15_Template, 8, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lookupArray", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.calendarKeyValuePairs$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx.optionsAreClosed$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newSettings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx.currentCalendar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, ctx.newEventPanelIsOpen));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _calendar_selector_calendar_selector_component__WEBPACK_IMPORTED_MODULE_12__["CalendarSelectorComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_13__["OptionsComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _new_event_new_event_component__WEBPACK_IMPORTED_MODULE_16__["NewEventComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    top: 20px;\r\n    left: 10px;\r\n    position: absolute;\r\n    font-size: 50px;\r\n    max-width: 70%;\r\n}\r\n\r\n.scroll-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    border: none;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.new-event-panel[_ngcontent-%COMP%] {\r\n    background-color: rgb(190, 190, 190);\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    padding: 20px;\r\n    border: 2px solid black;\r\n}\r\n\r\n.topBar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.topBar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n    width: 20px;\r\n    padding: 0px;\r\n}\r\n\r\n.sidebarToggle[_ngcontent-%COMP%] {\r\n    position: fixed; \r\n    z-index: 2; \r\n    top: 0; \r\n    right: 0;\r\n    padding-right: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.calendar-space[_ngcontent-%COMP%] {\r\n    margin-top: 62px;\r\n    height: calc(100% - 62px);\r\n    width: 100%;\r\n    position: fixed;\r\n    overflow-y: scroll;\r\n    overflow-x: auto;\r\n}\r\n\r\n.calendar-selector[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    position: fixed;\r\n    right: 180px;\r\n    top: 10px;\r\n}\r\n\r\n.buttonText[_ngcontent-%COMP%] {\r\n    padding-top: 6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZSxFQUFFLDRDQUE0QztJQUM3RCxVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCLE1BQU0sRUFBRSxvQkFBb0I7SUFDNUIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnNjcm9sbC10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4ubmV3LWV2ZW50LXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi50b3BCYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50b3BCYXIgYnV0dG9uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhclRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xyXG4gICAgei1pbmRleDogMjsgLyogU3RheSBvbiB0b3AgKi9cclxuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhbGVuZGFyLXNwYWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYycHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uY2FsZW5kYXItc2VsZWN0b3Ige1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uVGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view',
                templateUrl: './view.component.html',
                styleUrls: ['./view.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _calendar_service__WEBPACK_IMPORTED_MODULE_7__["CalendarService"] }, { type: _calendar_event_service__WEBPACK_IMPORTED_MODULE_8__["CalendarEventService"] }, { type: src_app_key_value_pairs_service__WEBPACK_IMPORTED_MODULE_9__["KeyValuePairsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/week/week.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/week/week.component.ts ***!
  \***************************************************/
/*! exports provided: WeekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekComponent", function() { return WeekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../day/day.component */ "./src/app/components/day/day.component.ts");




function WeekComponent_td_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-day", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("day", day_r94);
} }
function WeekComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeekComponent_td_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r94);
} }
class WeekComponent {
}
WeekComponent.ɵfac = function WeekComponent_Factory(t) { return new (t || WeekComponent)(); };
WeekComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeekComponent, selectors: [["app-week"]], inputs: { week: "week" }, decls: 1, vars: 1, consts: [["class", "day-repeater", 4, "ngFor", "ngForOf"], [1, "day-repeater"], ["class", "day-container", 4, "ngIf"], [1, "day-container"], [3, "day"]], template: function WeekComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeekComponent_td_0_Template, 2, 1, "td", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.week.days);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _day_day_component__WEBPACK_IMPORTED_MODULE_2__["DayComponent"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.day-repeater[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd2Vlay93ZWVrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBR0EsVUFBVSwyQkFBMkIsQ0FBQzs7QUFHdEM7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUMxRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWVrL3dlZWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxubGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMC4yZW0gMC4yZW0gMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggOHB4IDhweDtcclxufVxyXG5cclxuXHJcbnRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkM2ZmODE7fVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlYWZmODE7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5jc3NcIjtcclxuXHJcbi5kYXktcmVwZWF0ZXIge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-week',
                templateUrl: './week.component.html',
                styleUrls: ['./week.component.css']
            }]
    }], null, { week: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/year/year.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/year/year.component.ts ***!
  \***************************************************/
/*! exports provided: YearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearComponent", function() { return YearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _month_month_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../month/month.component */ "./src/app/components/month/month.component.ts");




function YearComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-month", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r99 = ctx.$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("month", month_r99)("daysOfWeek", ctx_r98.year.DoW);
} }
function YearComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearComponent_div_0_div_1_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r97.year.months);
} }
class YearComponent {
    constructor() {
    }
}
YearComponent.ɵfac = function YearComponent_Factory(t) { return new (t || YearComponent)(); };
YearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearComponent, selectors: [["app-year"]], inputs: { year: "year" }, decls: 1, vars: 1, consts: [["class", "calendar", 4, "ngIf"], [1, "calendar"], [4, "ngFor", "ngForOf"], [3, "month", "daysOfWeek"]], template: function YearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YearComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.year && ctx.year.months);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _month_month_component__WEBPACK_IMPORTED_MODULE_2__["MonthComponent"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 3px solid black;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    table-layout: auto;\r\n    border-collapse: collapse;\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    min-width: 140px;\r\n    padding: 15px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-align: left;\r\n    vertical-align: top;\r\n    height: 160px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding: 0.2em 0.2em 0.2em 0.2em;\r\n    background-color:#40506150;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {background-color: #c6d3ff81;}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 0px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    background-color: #e3eaff81;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    margin-left: 75px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    margin-top: 20px;\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBR0EsVUFBVSwyQkFBMkIsQ0FBQzs7QUFHdEM7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWVhci95ZWFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAuMmVtIDAuMmVtIDAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7XHJcbn1cclxuXHJcblxyXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2M2ZDNmZjgxO31cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFmZjgxO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-year',
                templateUrl: './year.component.html',
                styleUrls: ['./year.component.css']
            }]
    }], function () { return []; }, { year: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/era.ts":
/*!************************!*\
  !*** ./src/app/era.ts ***!
  \************************/
/*! exports provided: EMPTY_ERA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ERA", function() { return EMPTY_ERA; });
const EMPTY_ERA = {
    eraName: null,
    abbreviation: null,
    beginning: null,
    ending: null,
    reversed: null
};


/***/ }),

/***/ "./src/app/event field components/cyclical-fields/cyclical-fields.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/event field components/cyclical-fields/cyclical-fields.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CyclicalFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyclicalFieldsComponent", function() { return CyclicalFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function CyclicalFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CyclicalFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r102.cyclicalEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r101.editable)("ngModel", ctx_r101.cyclicalEvent.title);
} }
function CyclicalFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CyclicalFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Offset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CyclicalFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.cyclicalEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CyclicalFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.cyclicalEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Length of Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CyclicalFieldsComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.cyclicalEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r100.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r100.editable)("ngModel", ctx_r100.cyclicalEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r100.editable)("ngModel", ctx_r100.cyclicalEvent.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r100.editable)("ngModel", ctx_r100.cyclicalEvent.duration);
} }
class CyclicalFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.cyclicalEvent = event;
    }
}
CyclicalFieldsComponent.ɵfac = function CyclicalFieldsComponent_Factory(t) { return new (t || CyclicalFieldsComponent)(); };
CyclicalFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CyclicalFieldsComponent, selectors: [["app-cyclical-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], [1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], [1, "title"], ["for", "title-field"]], template: function CyclicalFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CyclicalFieldsComponent_div_0_Template, 14, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cyclicalEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMvY3ljbGljYWwtZmllbGRzL2N5Y2xpY2FsLWZpZWxkcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CyclicalFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cyclical-fields',
                templateUrl: './cyclical-fields.component.html',
                styleUrls: ['./cyclical-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event field components/month-dow-fields/month-dow-fields.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/event field components/month-dow-fields/month-dow-fields.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MonthDOWFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthDOWFieldsComponent", function() { return MonthDOWFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function MonthDOWFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthDOWFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r131.monthlyEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r130.editable)("ngModel", ctx_r130.monthlyEvent.title);
} }
function MonthDOWFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthDOWFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Day of Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthDOWFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.monthlyEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthDOWFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.monthlyEvent.weekOffset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthDOWFieldsComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.monthlyEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r129.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r129.editable)("ngModel", ctx_r129.monthlyEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r129.editable)("ngModel", ctx_r129.monthlyEvent.weekOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r129.editable)("ngModel", ctx_r129.monthlyEvent.duration);
} }
class MonthDOWFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.monthlyEvent = event;
    }
}
MonthDOWFieldsComponent.ɵfac = function MonthDOWFieldsComponent_Factory(t) { return new (t || MonthDOWFieldsComponent)(); };
MonthDOWFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthDOWFieldsComponent, selectors: [["app-month-dow-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], ["id", "offset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "weekOffset"], ["for", "weekOffset-field"], ["id", "weekOffset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], ["id", "duration-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "title"], ["for", "title-field"], ["id", "title-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"]], template: function MonthDOWFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MonthDOWFieldsComponent_div_0_Template, 14, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.monthlyEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMvbW9udGgtZG93LWZpZWxkcy9tb250aC1kb3ctZmllbGRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthDOWFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-month-dow-fields',
                templateUrl: './month-dow-fields.component.html',
                styleUrls: ['./month-dow-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event field components/monthly-fields/monthly-fields.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/event field components/monthly-fields/monthly-fields.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MonthlyFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyFieldsComponent", function() { return MonthlyFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function MonthlyFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthlyFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r117.monthlyEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r116.editable)("ngModel", ctx_r116.monthlyEvent.title);
} }
function MonthlyFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthlyFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Offset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthlyFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.monthlyEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MonthlyFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.monthlyEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r115.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r115.editable)("ngModel", ctx_r115.monthlyEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r115.editable)("ngModel", ctx_r115.monthlyEvent.duration);
} }
class MonthlyFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.monthlyEvent = event;
    }
}
MonthlyFieldsComponent.ɵfac = function MonthlyFieldsComponent_Factory(t) { return new (t || MonthlyFieldsComponent)(); };
MonthlyFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthlyFieldsComponent, selectors: [["app-monthly-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], ["id", "offset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], ["id", "duration-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "title"], ["for", "title-field"], ["id", "title-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"]], template: function MonthlyFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MonthlyFieldsComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.monthlyEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMvbW9udGhseS1maWVsZHMvbW9udGhseS1maWVsZHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthlyFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-monthly-fields',
                templateUrl: './monthly-fields.component.html',
                styleUrls: ['./monthly-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event field components/unique-fields/unique-fields.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/event field components/unique-fields/unique-fields.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UniqueFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldsComponent", function() { return UniqueFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function UniqueFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UniqueFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r148.uniqueEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r147.editable)("ngModel", ctx_r147.uniqueEvent.title);
} }
function UniqueFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UniqueFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Day of Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UniqueFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r150.uniqueEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UniqueFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r152.uniqueEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r146.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r146.editable)("ngModel", ctx_r146.uniqueEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r146.editable)("ngModel", ctx_r146.uniqueEvent.duration);
} }
class UniqueFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.uniqueEvent = event;
    }
}
UniqueFieldsComponent.ɵfac = function UniqueFieldsComponent_Factory(t) { return new (t || UniqueFieldsComponent)(); };
UniqueFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UniqueFieldsComponent, selectors: [["app-unique-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], ["id", "offset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], ["id", "duration-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "title"], ["for", "title-field"], ["id", "title-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"]], template: function UniqueFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UniqueFieldsComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uniqueEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMvdW5pcXVlLWZpZWxkcy91bmlxdWUtZmllbGRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniqueFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unique-fields',
                templateUrl: './unique-fields.component.html',
                styleUrls: ['./unique-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event field components/weekly-fields/weekly-fields.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/event field components/weekly-fields/weekly-fields.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WeeklyFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyFieldsComponent", function() { return WeeklyFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function WeeklyFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeeklyFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r124.weeklyEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r123.editable)("ngModel", ctx_r123.weeklyEvent.title);
} }
function WeeklyFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeeklyFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Offset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeeklyFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.weeklyEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeeklyFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.weeklyEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r122.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r122.editable)("ngModel", ctx_r122.weeklyEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r122.editable)("ngModel", ctx_r122.weeklyEvent.duration);
} }
class WeeklyFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.weeklyEvent = event;
    }
}
WeeklyFieldsComponent.ɵfac = function WeeklyFieldsComponent_Factory(t) { return new (t || WeeklyFieldsComponent)(); };
WeeklyFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeeklyFieldsComponent, selectors: [["app-weekly-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], ["id", "offset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], ["id", "duration-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "title"], ["for", "title-field"], ["id", "title-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"]], template: function WeeklyFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeeklyFieldsComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weeklyEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMvd2Vla2x5LWZpZWxkcy93ZWVrbHktZmllbGRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeeklyFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weekly-fields',
                templateUrl: './weekly-fields.component.html',
                styleUrls: ['./weekly-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event field components/year-month-dow-fields/year-month-dow-fields.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/event field components/year-month-dow-fields/year-month-dow-fields.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: YearMonthDowFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearMonthDowFieldsComponent", function() { return YearMonthDowFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function YearMonthDowFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthDowFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r139.yearMonthlyEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r138.editable)("ngModel", ctx_r138.yearMonthlyEvent.title);
} }
function YearMonthDowFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearMonthDowFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Day of Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthDowFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.yearMonthlyEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthDowFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.yearMonthlyEvent.weekOffset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthDowFieldsComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.yearMonthlyEvent.monthOffset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthDowFieldsComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r145.yearMonthlyEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r137.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r137.editable)("ngModel", ctx_r137.yearMonthlyEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r137.editable)("ngModel", ctx_r137.yearMonthlyEvent.weekOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r137.editable)("ngModel", ctx_r137.yearMonthlyEvent.monthOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r137.editable)("ngModel", ctx_r137.yearMonthlyEvent.duration);
} }
class YearMonthDowFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.yearMonthlyEvent = event;
    }
}
YearMonthDowFieldsComponent.ɵfac = function YearMonthDowFieldsComponent_Factory(t) { return new (t || YearMonthDowFieldsComponent)(); };
YearMonthDowFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearMonthDowFieldsComponent, selectors: [["app-year-month-dow-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], ["id", "offset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "weekOffset"], ["for", "weekOffset-field"], ["id", "weekOffset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "monthOffset"], ["for", "monthOffset-field"], ["id", "monthOffset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], ["id", "duration-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "title"], ["for", "title-field"], ["id", "title-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"]], template: function YearMonthDowFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YearMonthDowFieldsComponent_div_0_Template, 18, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yearMonthlyEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMveWVhci1tb250aC1kb3ctZmllbGRzL3llYXItbW9udGgtZG93LWZpZWxkcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearMonthDowFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-year-month-dow-fields',
                templateUrl: './year-month-dow-fields.component.html',
                styleUrls: ['./year-month-dow-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event field components/year-monthly-fields/year-monthly-fields.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/event field components/year-monthly-fields/year-monthly-fields.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: YearMonthlyFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearMonthlyFieldsComponent", function() { return YearMonthlyFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function YearMonthlyFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthlyFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r155.yearMonthlyEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r154.editable)("ngModel", ctx_r154.yearMonthlyEvent.title);
} }
function YearMonthlyFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearMonthlyFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Day of Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthlyFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r157.yearMonthlyEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthlyFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r159.yearMonthlyEvent.monthOffset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearMonthlyFieldsComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r160.yearMonthlyEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r153.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r153.editable)("ngModel", ctx_r153.yearMonthlyEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r153.editable)("ngModel", ctx_r153.yearMonthlyEvent.monthOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r153.editable)("ngModel", ctx_r153.yearMonthlyEvent.duration);
} }
class YearMonthlyFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.yearMonthlyEvent = event;
    }
}
YearMonthlyFieldsComponent.ɵfac = function YearMonthlyFieldsComponent_Factory(t) { return new (t || YearMonthlyFieldsComponent)(); };
YearMonthlyFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearMonthlyFieldsComponent, selectors: [["app-year-monthly-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], ["id", "offset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "monthOffset"], ["for", "monthOffset-field"], ["id", "monthOffset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], ["id", "duration-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "title"], ["for", "title-field"], ["id", "title-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"]], template: function YearMonthlyFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YearMonthlyFieldsComponent_div_0_Template, 14, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yearMonthlyEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMveWVhci1tb250aGx5LWZpZWxkcy95ZWFyLW1vbnRobHktZmllbGRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearMonthlyFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-year-monthly-fields',
                templateUrl: './year-monthly-fields.component.html',
                styleUrls: ['./year-monthly-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event field components/yearly-fields/yearly-fields.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/event field components/yearly-fields/yearly-fields.component.ts ***!
  \*********************************************************************************/
/*! exports provided: YearlyFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearlyFieldsComponent", function() { return YearlyFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function YearlyFieldsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearlyFieldsComponent_div_0_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r110.yearlyEvent.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r109.editable)("ngModel", ctx_r109.yearlyEvent.title);
} }
function YearlyFieldsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearlyFieldsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Offset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearlyFieldsComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.yearlyEvent.offset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearlyFieldsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.yearlyEvent.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r108.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r108.editable)("ngModel", ctx_r108.yearlyEvent.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r108.editable)("ngModel", ctx_r108.yearlyEvent.duration);
} }
class YearlyFieldsComponent {
    constructor() {
        this.editable = false;
    }
    set addEvent(event) {
        this.yearlyEvent = event;
    }
}
YearlyFieldsComponent.ɵfac = function YearlyFieldsComponent_Factory(t) { return new (t || YearlyFieldsComponent)(); };
YearlyFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearlyFieldsComponent, selectors: [["app-yearly-fields"]], inputs: { addEvent: "addEvent", editable: "editable" }, decls: 1, vars: 1, consts: [["class", "input-fields", 4, "ngIf"], [1, "input-fields"], ["class", "title", 4, "ngIf"], [1, "offset"], ["for", "offset-field"], ["id", "offset-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "duration"], ["for", "duration-field"], ["id", "duration-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"], [1, "title"], ["for", "title-field"], ["id", "title-field", 1, "input-field", 3, "disabled", "ngModel", "ngModelChange"]], template: function YearlyFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YearlyFieldsComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yearlyEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50IGZpZWxkIGNvbXBvbmVudHMveWVhcmx5LWZpZWxkcy95ZWFybHktZmllbGRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearlyFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-yearly-fields',
                templateUrl: './yearly-fields.component.html',
                styleUrls: ['./yearly-fields.component.css']
            }]
    }], null, { addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InMemoryDataService {
    createDb() {
        const defaultCalendarID = 0;
        const defaultCalendarName = 'Gregorian Calendar';
        const defaultUniqueEvents = [
            { title: 'This project\'s inception', offset: 4000082, duration: 1 },
            { title: 'Marty McFly Travels back to 1955', offset: 3987515, duration: 1 }
        ];
        const defaultCyclicalEvents = [
            { title: 'Full Moon', offset: 22, duration: 3, repeatDays: 29.530 }
        ];
        const defaultWeeklyEvents = [];
        const defaultMonthlyEvents = [];
        const defaultYearlyEvents = [];
        const defaultMonthDOWEvents = [];
        const defaultYearMonthDOWEvents = [
            { title: 'MLK Day', duration: 1, offset: 2, weekOffset: 3, monthOffset: 1 },
            { title: 'Presidents\' Day', duration: 1, offset: 2, weekOffset: 3, monthOffset: 2 },
            { title: 'Labor Day', duration: 1, offset: 2, weekOffset: 1, monthOffset: 9 },
            { title: 'Ocktoberfest', duration: 1, offset: 2, weekOffset: 2, monthOffset: 9 },
            { title: 'Thanksgiving', duration: 1, offset: 5, weekOffset: 4, monthOffset: 11 }
        ];
        const defaultYearlyMonthlyEvents = [
            { title: 'New Year\'s Day', duration: 1, offset: 1, monthOffset: 1 },
            { title: 'Groundhog Day', duration: 1, offset: 2, monthOffset: 2 },
            { title: 'Darwin Day', duration: 1, offset: 12, monthOffset: 2 },
            { title: 'Family Day', duration: 1, offset: 18, monthOffset: 2 },
            { title: 'Saint Valentine\'s Day', duration: 1, offset: 14, monthOffset: 2 },
            { title: 'International Women\'s Day', duration: 1, offset: 8, monthOffset: 3 },
            { title: 'Saint Patrick\'s Day', duration: 1, offset: 17, monthOffset: 3 },
            { title: 'Star Wars Day', duration: 1, offset: 4, monthOffset: 5 },
            { title: 'Earth Day', duration: 1, offset: 22, monthOffset: 4 },
            { title: 'King\'s Day', duration: 1, offset: 27, monthOffset: 4 },
            { title: 'Floralia', duration: 1, offset: 28, monthOffset: 4 },
            { title: 'Cinco de Mayo', duration: 1, offset: 5, monthOffset: 5 },
            { title: 'Take Your Dog to Work Day', duration: 1, offset: 24, monthOffset: 6 },
            { title: 'Canada Day', duration: 1, offset: 1, monthOffset: 7 },
            { title: 'Independence Day', duration: 1, offset: 4, monthOffset: 7 },
            { title: 'Le 14 Juillet', duration: 1, offset: 14, monthOffset: 7 },
            { title: 'International Talk Like a Pirate Day', duration: 1, offset: 19, monthOffset: 9 },
            { title: 'Halloween', duration: 1, offset: 31, monthOffset: 10 },
            { title: 'International Men\'s Day', duration: 1, offset: 19, monthOffset: 11 },
            { title: 'Christmas Eve', duration: 1, offset: 24, monthOffset: 12 },
            { title: 'Christmas Day', duration: 1, offset: 25, monthOffset: 12 },
            { title: 'New Year\'s Eve', duration: 1, offset: 31, monthOffset: 12 }
        ];
        const defaultEventList = {
            uniqueEvents: defaultUniqueEvents,
            cyclicalEvents: defaultCyclicalEvents,
            weeklyEvents: defaultWeeklyEvents,
            monthlyEvents: defaultMonthlyEvents,
            yearlyEvents: defaultYearlyEvents,
            monthDOWEvents: defaultMonthDOWEvents,
            yearMonthDOWEvents: defaultYearMonthDOWEvents,
            yearlyMonthlyEvents: defaultYearlyMonthlyEvents
        };
        const defaultStartingDayID = 4000000;
        const defaultStartingDoW = 3;
        const defaultDoW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const defaultMonths = [
            { name: 'January', length: 31 },
            { name: 'February', length: 28 },
            { name: 'March', length: 31 },
            { name: 'April', length: 30 },
            { name: 'May', length: 31 },
            { name: 'June', length: 30 },
            { name: 'July', length: 31 },
            { name: 'August', length: 31 },
            { name: 'September', length: 30 },
            { name: 'October', length: 31 },
            { name: 'November', length: 30 },
            { name: 'December', length: 31 }
        ];
        const defaultEras = [
            { eraName: 'Before Common Era', abbreviation: 'BCE', ending: 1, reversed: true },
            { eraName: 'Common Era', abbreviation: 'CE', beginning: 1, reversed: false }
        ];
        const defaultCurrentEra = 1;
        const defaultCurrentYear = 2020;
        const defaultLeapYearRules = [
            { leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1 },
            { leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1 },
            { leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1 },
        ];
        const defaultSettings = {
            calendarID: defaultCalendarID,
            calendarName: defaultCalendarName,
            year: {
                startingDayID: defaultStartingDayID,
                startingDoW: defaultStartingDoW,
                eras: defaultEras,
                currentEra: defaultCurrentEra,
                currentYear: defaultCurrentYear
            },
            months: defaultMonths,
            DoW: defaultDoW,
            leapYearRules: defaultLeapYearRules,
            events: defaultEventList
        };
        const sylrinCalendarID = 1;
        const sylrinCalendarName = 'Shalan Calendar';
        const sylrinUniqueEvents = [
            { title: 'Narder Invaded', offset: 3928209, duration: 1 },
            { title: 'Nardish Revolution begins', offset: 3934321, duration: 1 },
            { title: 'Nardish Revolution ends', offset: 3936892, duration: 1 },
            { title: 'Second Invasion of Narder', offset: 3945868, duration: 1 },
            // summerseve, 620
            { title: 'Dawn Civil War Begins', offset: 3998922, duration: 1 },
            { title: 'Ver\'s death', offset: 3999299, duration: 1 },
            { title: 'De Lumine meets Kaiso', offset: 4000261, duration: 1 },
            { title: 'Oubat meets the party', offset: 4000276, duration: 1 },
            { title: 'Oubat joins the party', offset: 4000278, duration: 1 },
            { title: 'Esall and Kullak are rescued', offset: 4000281, duration: 1 },
            { title: 'Death Breaks', offset: 4000282, duration: 1 },
            { title: 'Kullak reveals his motives', offset: 4000284, duration: 1 },
            { title: 'Agna talks with Kullak', offset: 4000285, duration: 1 },
            { title: 'Party seperately reaches Taful', offset: 4000287, duration: 1 },
            { title: 'The Fighting Pits', offset: 4000288, duration: 1 },
            { title: 'Party is ambushed by the Society of Purity', offset: 4000290, duration: 1 },
            { title: 'Party returns to life', offset: 4000291, duration: 1 },
            { title: 'Party is sent out to find a Wyvernstone', offset: 4000295, duration: 1 },
            { title: 'Party is attacked by ogres east of Jiddayd', offset: 4000305, duration: 1 },
            { title: 'Party \'meets\' the Catfolk tribe', offset: 4000306, duration: 1 },
            { title: 'Party fights two pixies', offset: 4000308, duration: 1 },
            { title: 'Party escapes the Sacrat Pits', offset: 4000310, duration: 1 },
            { title: 'Party escapes the Thousand Spires', offset: 4000312, duration: 1 }
        ];
        const sylrinCyclicalEvents = [
            { title: 'Full Itric', offset: 3, duration: 2, repeatDays: 20.415153 },
            { title: 'Full Yristo', offset: 7, duration: 5, repeatDays: 50.741297 }
        ];
        const sylrinWeeklyEvents = [];
        const sylrinMonthlyEvents = [];
        const sylrinYearlyEvents = [];
        const sylrinMonthDOWEvents = [];
        const sylrinYearMonthDOWEvents = [
            { title: 'Athok\'s Games', duration: 8, offset: 1, weekOffset: 3, monthOffset: 15 }
        ];
        const sylrinYearlyMonthlyEvents = [
            { title: 'Omre\'s Ascension', duration: 1, offset: 27, monthOffset: 4 },
            { title: 'Djarsday', duration: 1, offset: 31, monthOffset: 9 },
            { title: 'Nardish Liberation Day', duration: 1, offset: 22, monthOffset: 1 },
            { title: 'Gadren\'s Day', duration: 1, offset: 3, monthOffset: 3 },
            { title: 'Athok\'s Games', duration: 8, offset: 3, monthOffset: 3 },
            { title: 'North Summerseve', duration: 1, offset: 28, monthOffset: 4 },
            { title: 'South Winterseve', duration: 1, offset: 28, monthOffset: 4 },
            { title: 'North Summersend', duration: 1, offset: 19, monthOffset: 8 },
            { title: 'South Wintersend', duration: 1, offset: 19, monthOffset: 8 },
            { title: 'North Autumnfest', duration: 1, offset: 20, monthOffset: 8 },
            { title: 'South Spring Bloom', duration: 1, offset: 20, monthOffset: 8 },
            { title: 'North Winterseve', duration: 1, offset: 10, monthOffset: 12 },
            { title: 'South Summerseve', duration: 1, offset: 10, monthOffset: 12 },
            { title: 'North Springseve', duration: 1, offset: 40, monthOffset: 15 },
            { title: 'South Autumnseve', duration: 1, offset: 40, monthOffset: 15 }
        ];
        const sylrinEventLists = {
            uniqueEvents: sylrinUniqueEvents,
            cyclicalEvents: sylrinCyclicalEvents,
            weeklyEvents: sylrinWeeklyEvents,
            monthlyEvents: sylrinMonthlyEvents,
            yearlyEvents: sylrinYearlyEvents,
            monthDOWEvents: sylrinMonthDOWEvents,
            yearMonthDOWEvents: sylrinYearMonthDOWEvents,
            yearlyMonthlyEvents: sylrinYearlyMonthlyEvents
        };
        const sylrinStartingDayID = 4000000;
        const sylrinStartingDoW = 4;
        const sylrinDoW = ['Vesday', 'Orsday', 'Wasday', 'Arday', 'Figday', 'Tolday', 'Erday', 'Kesday'];
        const sylrinMonths = [{ name: 'Veskien', length: 40 },
            { name: 'Greywin', length: 39 },
            { name: 'Gilan', length: 40 },
            { name: 'Orkien', length: 39 },
            { name: 'Winen', length: 39 },
            { name: 'Arkien', length: 39 },
            { name: 'Sybil', length: 40 },
            { name: 'Figkien', length: 39 },
            { name: 'Elmirn', length: 39 },
            { name: 'Amedust', length: 39 },
            { name: 'Tolkien', length: 40 },
            { name: 'Cynen', length: 39 },
            { name: 'Nathyen', length: 39 },
            { name: 'Erkien', length: 39 },
            { name: 'Keskien', length: 40 }
        ];
        const sylrinEras = [
            { eraName: 'Before Teturic', abbreviation: 'BT', ending: 1, reversed: true },
            { eraName: 'Age of Ash', abbreviation: 'AoA', beginning: 1, ending: 309, reversed: false },
            { eraName: 'Magic Era', abbreviation: 'ME', beginning: 1, reversed: false }
        ];
        const sylrinCurrentEra = 2;
        const sylrinCurrentYear = 712;
        const sylrinLeapYearRules = [
            { leapYearCycles: 1000, leapYearOffset: 612, leapYearChange: 1, leapDayMonth: 5 },
        ];
        const sylrinSettings = {
            calendarID: sylrinCalendarID,
            calendarName: sylrinCalendarName,
            year: {
                startingDayID: sylrinStartingDayID,
                startingDoW: sylrinStartingDoW,
                eras: sylrinEras,
                currentEra: sylrinCurrentEra,
                currentYear: sylrinCurrentYear
            },
            months: sylrinMonths,
            DoW: sylrinDoW,
            leapYearRules: sylrinLeapYearRules,
            events: sylrinEventLists
        };
        const calendars = [
            defaultSettings, sylrinSettings
        ];
        return { calendars };
    }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) { return new (t || InMemoryDataService)(); };
InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryDataService, factory: InMemoryDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/json.service.ts":
/*!*********************************!*\
  !*** ./src/app/json.service.ts ***!
  \*********************************/
/*! exports provided: JsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonService", function() { return JsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JsonService {
    constructor() {
    }
    calendarToJSON(calendar) {
        return JSON.stringify(calendar);
    }
    JSONToCalendar(json) {
        return JSON.parse(json);
    }
}
JsonService.ɵfac = function JsonService_Factory(t) { return new (t || JsonService)(); };
JsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonService, factory: JsonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/key-value-pairs.service.ts":
/*!********************************************!*\
  !*** ./src/app/key-value-pairs.service.ts ***!
  \********************************************/
/*! exports provided: KeyValuePairsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValuePairsService", function() { return KeyValuePairsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KeyValuePairsService {
    constructor() {
    }
    pullLookupsFromCalendarList(calendars) {
        const result = [];
        calendars.forEach(calendar => result.push({ key: calendar.calendarID, value: calendar.calendarName }));
        return result;
    }
}
KeyValuePairsService.ɵfac = function KeyValuePairsService_Factory(t) { return new (t || KeyValuePairsService)(); };
KeyValuePairsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KeyValuePairsService, factory: KeyValuePairsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyValuePairsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/leapYear.ts":
/*!*****************************!*\
  !*** ./src/app/leapYear.ts ***!
  \*****************************/
/*! exports provided: EMPTY_LEAP_YEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_LEAP_YEAR", function() { return EMPTY_LEAP_YEAR; });
const EMPTY_LEAP_YEAR = {
    leapYearCycles: null,
    leapYearOffset: null,
    leapYearChange: null,
    leapDayMonth: null
};


/***/ }),

/***/ "./src/app/month.service.ts":
/*!**********************************!*\
  !*** ./src/app/month.service.ts ***!
  \**********************************/
/*! exports provided: MonthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthService", function() { return MonthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MonthService {
    constructor() {
        this.needRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getDisplayMonth(yearStartingDayID, monthStartingDayID, monthLength, settingsMonth, startingDoW, daysPerWeek, monthNumber, calendar) {
        let currentWeekday = startingDoW;
        let week = 0;
        const month = {
            id: 0,
            name: settingsMonth.name,
            weeks: []
        };
        for (let k = 0; k < ((monthLength + startingDoW) / daysPerWeek); k++) {
            month.weeks.push({ id: k, days: this.createWeekProto(daysPerWeek) });
        }
        const weekdayCounts = [];
        for (let x = 0; x < daysPerWeek; x++) {
            weekdayCounts.push(0);
        }
        let i = 0;
        while (i < monthLength) {
            const dayOfMonth = i + 1;
            const dayOfYear = (monthStartingDayID + i) - yearStartingDayID + 1;
            const events = calendar.events;
            month.weeks[week].days[currentWeekday] = {
                id: monthStartingDayID + i,
                dayOfMonth,
                dayOfYear,
                cyclicalEvents: this.getCyclicalEventList(monthStartingDayID + i, events.cyclicalEvents),
                uniqueEvents: this.getUniqueEventList(monthStartingDayID + dayOfMonth, events.uniqueEvents),
                weeklyEvents: this.getWeeklyEventList(currentWeekday, events.weeklyEvents),
                monthlyEvents: this.getMonthlyEventList(dayOfMonth, events.monthlyEvents),
                yearlyEvents: this.getYearlyEventList(dayOfYear, events.yearlyEvents),
                monthDOWEvents: this.getMonthDOWEventList(currentWeekday, weekdayCounts[currentWeekday], events.monthDOWEvents),
                yearMonthDOWEvents: this.getYearMonthDOWEventList(daysPerWeek, currentWeekday, monthNumber, weekdayCounts[currentWeekday], events.yearMonthDOWEvents),
                yearMonthlyEvents: this.getYearMonthlyEventList(dayOfMonth, monthNumber, events.yearlyMonthlyEvents)
            };
            weekdayCounts[currentWeekday]++;
            /*
            let message = '';
            weekdayCounts.forEach(value => message += ('| ' + value + ' |'));
            console.log(message);
            */
            if (currentWeekday === daysPerWeek - 1) {
                currentWeekday = 0;
                week++;
            }
            else {
                currentWeekday++;
            }
            i++;
        }
        return month;
    }
    createWeekProto(daysPerWeek) {
        const weekProto = [];
        for (let v = 0; v < daysPerWeek; v++) {
            weekProto.push(null);
        }
        return weekProto;
    }
    getCyclicalEventList(index, cyclicalEvents) {
        const result = [];
        if (cyclicalEvents) {
            cyclicalEvents.forEach(calendarEvent => {
                if (index - calendarEvent.offset >= 0) {
                    if (calendarEvent.repeatDays === 0) {
                        if (index - calendarEvent.offset <= (calendarEvent.duration)) {
                            result.push(calendarEvent);
                        }
                    }
                    else {
                        if ((index - calendarEvent.offset) % calendarEvent.repeatDays <= (calendarEvent.duration)) {
                            result.push(calendarEvent);
                        }
                    }
                }
            });
        }
        return result;
    }
    getWeeklyEventList(dayOfWeek, weeklyEvents) {
        const result = [];
        if (weeklyEvents) {
            weeklyEvents.forEach(calendarEvent => {
                if (dayOfWeek === (calendarEvent.offset - 1)) {
                    result.push(calendarEvent);
                }
            });
        }
        return result;
    }
    getMonthlyEventList(dayOfMonth, monthlyEvents) {
        const result = [];
        if (monthlyEvents) {
            monthlyEvents.forEach(calendarEvent => {
                if (dayOfMonth === calendarEvent.offset) {
                    result.push(calendarEvent);
                }
            });
        }
        return result;
    }
    getYearlyEventList(dayOfYear, yearlyEvents) {
        const result = [];
        if (yearlyEvents) {
            yearlyEvents.forEach(calendarEvent => {
                if (dayOfYear === calendarEvent.offset) {
                    result.push(calendarEvent);
                }
            });
        }
        return result;
    }
    getMonthDOWEventList(dayOfWeek, weekdayCount, monthDOWEvents) {
        const result = [];
        if (monthDOWEvents) {
            monthDOWEvents.forEach(calendarEvent => {
                if (weekdayCount === (calendarEvent.weekOffset - 1)) {
                    if (dayOfWeek === (calendarEvent.offset - 1)) {
                        result.push(calendarEvent);
                    }
                }
            });
        }
        return result;
    }
    getYearMonthDOWEventList(daysPerWeek, dayOfWeek, monthOfYear, weekdayCount, yearMonthDOWEvents) {
        const result = [];
        if (yearMonthDOWEvents) {
            yearMonthDOWEvents.forEach(calendarEvent => {
                if (monthOfYear === (calendarEvent.monthOffset - 1)) {
                    if (weekdayCount === (calendarEvent.weekOffset - 1)) {
                        if (dayOfWeek === (calendarEvent.offset - 1)) {
                            result.push(calendarEvent);
                        }
                    }
                    // check if the start happened less than the duration ago
                    // rework this to use a continuous array to handle duration
                    /*
                    if (weekdayCount >= (calendarEvent.weekOffset - 1)) {
                      const dayOfWeekDifference = (dayOfWeek - calendarEvent.offset);
                      let inBetween = (daysPerWeek * (weekdayCount - calendarEvent.weekOffset));
                      if (dayOfWeekDifference <= 0) { inBetween += daysPerWeek; }
                      const daysSince = (dayOfWeekDifference + inBetween);
                      if ( daysSince <= calendarEvent.duration && daysSince > 0) {
                          result.push(calendarEvent);
                      }
                    }
                    */
                }
            });
        }
        return result;
    }
    getUniqueEventList(dayID, uniqueEvents) {
        const result = [];
        if (uniqueEvents) {
            uniqueEvents.forEach(calendarEvent => {
                if (dayID === calendarEvent.offset + 1) {
                    result.push(calendarEvent);
                }
            });
        }
        return result;
    }
    getYearMonthlyEventList(dayOfMonth, monthOfYear, yearMonthlyEvents) {
        const result = [];
        if (yearMonthlyEvents) {
            yearMonthlyEvents.forEach(calendarEvent => {
                if (monthOfYear === (calendarEvent.monthOffset - 1)) {
                    if (dayOfMonth === calendarEvent.offset) {
                        result.push(calendarEvent);
                    }
                }
            });
        }
        return result;
    }
    getNextStartingDoW(settingsMonth, startingDoW, daysPerWeek) {
        const newStartingDoW = (settingsMonth.length + startingDoW) % daysPerWeek;
        return newStartingDoW;
    }
    getNextStartingID(startingDayID, monthLength) {
        return startingDayID + monthLength;
    }
    getPreviousStartingDoW(monthLength, startingDoW, daysPerWeek) {
        const newStartingDoW = ((startingDoW + daysPerWeek) - (monthLength % daysPerWeek)) % daysPerWeek;
        return newStartingDoW;
    }
    getPreviousStartingID(startingDayID, monthLength) {
        return startingDayID - monthLength;
    }
}
MonthService.ɵfac = function MonthService_Factory(t) { return new (t || MonthService)(); };
MonthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MonthService, factory: MonthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, { needRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/store/actions/calendar.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/calendar.actions.ts ***!
  \***************************************************/
/*! exports provided: setActiveCalendar, pushCalendar, setCalendarList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveCalendar", function() { return setActiveCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushCalendar", function() { return pushCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCalendarList", function() { return setCalendarList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const setActiveCalendar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Calendar] Set Active Calendar', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const pushCalendar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Calendar] Push Calendar', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setCalendarList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Calendar] Set Calendar List', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: CalendarActions, OptionsActions, ViewActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.actions */ "./src/app/store/actions/calendar.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CalendarActions", function() { return _calendar_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _options_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.actions */ "./src/app/store/actions/options.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "OptionsActions", function() { return _options_actions__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _view_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.actions */ "./src/app/store/actions/view.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ViewActions", function() { return _view_actions__WEBPACK_IMPORTED_MODULE_2__; });








/***/ }),

/***/ "./src/app/store/actions/options.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/options.actions.ts ***!
  \**************************************************/
/*! exports provided: setDirtyCalendar, setYearMath, setEventLists, setLeapYears, setMonths, setDoW, toggleNewEra, toggleNewLeapYear, toggleNewEvent, eraEditingIndex, monthEditingIndex, dayOfWeekEditingIndex, leapYearEditingIndex, toggleYearOptions, toggleMonthOptions, toggleWeekOptions, toggleLeapYearOptions, toggleEventOptions, toggleJSONOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDirtyCalendar", function() { return setDirtyCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setYearMath", function() { return setYearMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEventLists", function() { return setEventLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLeapYears", function() { return setLeapYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMonths", function() { return setMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDoW", function() { return setDoW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNewEra", function() { return toggleNewEra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNewLeapYear", function() { return toggleNewLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNewEvent", function() { return toggleNewEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraEditingIndex", function() { return eraEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthEditingIndex", function() { return monthEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfWeekEditingIndex", function() { return dayOfWeekEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leapYearEditingIndex", function() { return leapYearEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleYearOptions", function() { return toggleYearOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMonthOptions", function() { return toggleMonthOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleWeekOptions", function() { return toggleWeekOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLeapYearOptions", function() { return toggleLeapYearOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEventOptions", function() { return toggleEventOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleJSONOptions", function() { return toggleJSONOptions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const setDirtyCalendar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Set Dirty Calendar', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setYearMath = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] New Year Math', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setEventLists = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] New Event Lists', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setLeapYears = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] New Leap Year Rule', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setMonths = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] New Month List', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setDoW = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] New Day of Week List', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleNewEra = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle New Era', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleNewLeapYear = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle New Leap Year', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleNewEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle New Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const eraEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Change Era Editing Index', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const monthEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Change Month Editing Index', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const dayOfWeekEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Change Day of Week Editing Index', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const leapYearEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Change Leap Year Editing Index', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleYearOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle Year Options', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleMonthOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle Month Options', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleWeekOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle Week Options', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleLeapYearOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle Leap Year Options', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleEventOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle Event Options', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleJSONOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Options] Toggle JSON Options', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/actions/view.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/view.actions.ts ***!
  \***********************************************/
/*! exports provided: toggleOptions, setNewEventPanel, changeCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOptions", function() { return toggleOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewEventPanel", function() { return setNewEventPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCalendar", function() { return changeCalendar; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const toggleOptions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[View] Toggle Options', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setNewEventPanel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[View] Toggle New Event Panel', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const changeCalendar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[View] Change Calendar', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/effects/calendar.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/store/effects/calendar.effects.ts ***!
  \***************************************************/
/*! exports provided: CalendarEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEffects", function() { return CalendarEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_calendar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/calendar.actions */ "./src/app/store/actions/calendar.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var src_app_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/calendar.service */ "./src/app/calendar.service.ts");









class CalendarEffects {
    constructor(store, actions$, calendarService) {
        this.store = store;
        this.actions$ = actions$;
        this.calendarService = calendarService;
        this.loadCalendars$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[Calendar Page] Load Calendar'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.calendarService.requestCalendar$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(newCalendarList => Object(_actions_calendar_actions__WEBPACK_IMPORTED_MODULE_4__["setCalendarList"])({ newCalendarList })));
    }
}
CalendarEffects.ɵfac = function CalendarEffects_Factory(t) { return new (t || CalendarEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_calendar_service__WEBPACK_IMPORTED_MODULE_6__["CalendarService"])); };
CalendarEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalendarEffects, factory: CalendarEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CalendarEffects.prototype, "loadCalendars$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: src_app_calendar_service__WEBPACK_IMPORTED_MODULE_6__["CalendarService"] }]; }, { loadCalendars$: [] }); })();


/***/ }),

/***/ "./src/app/store/effects/options.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/store/effects/options.effects.ts ***!
  \**************************************************/
/*! exports provided: OptionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsEffects", function() { return OptionsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var src_app_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/calendar.service */ "./src/app/calendar.service.ts");





class OptionsEffects {
    constructor(store, actions$, calendarService) {
        this.store = store;
        this.actions$ = actions$;
        this.calendarService = calendarService;
    }
}
OptionsEffects.ɵfac = function OptionsEffects_Factory(t) { return new (t || OptionsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"])); };
OptionsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OptionsEffects, factory: OptionsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: src_app_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/reducers/calendar.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/calendar.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, reducer, addCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCalendar", function() { return addCalendar; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");


const initialState = {
    calendarList: [],
    activeCalendar: null
};
const optionsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CalendarActions"].pushCalendar, (state, { newCalendar }) => (Object.assign(Object.assign({}, state), { calendarList: addCalendar(state.calendarList, newCalendar) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CalendarActions"].setCalendarList, (state, { newCalendarList }) => (Object.assign(Object.assign({}, state), { calendarList: newCalendarList }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["CalendarActions"].setActiveCalendar, (state, { activeCalendar }) => (Object.assign(Object.assign({}, state), { activeCalendar }))));
function reducer(state, action) {
    return optionsReducer(state, action);
}
function addCalendar(calendarList, newCalendar) {
    const duplicateIndex = calendarList.findIndex(c => c.calendarID === newCalendar.calendarID);
    if (duplicateIndex !== -1) {
        const copy = [...calendarList];
        copy.splice(duplicateIndex, 1, newCalendar);
        return copy;
    }
    else {
        return [...calendarList, newCalendar];
    }
}


/***/ }),

/***/ "./src/app/store/reducers/options.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/options.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");


const initialState = {
    dirtySettings: null,
    newEraPanel: false,
    newLeapYearPanel: false,
    newEventPanel: false,
    eraEditingIndex: -1,
    monthEditingIndex: -1,
    dayOfWeekEditingIndex: -1,
    leapYearEditingIndex: -1,
    yearOptionsOpen: false,
    monthOptionsOpen: false,
    weekOptionsOpen: false,
    leapYearOptionsOpen: false,
    eventOptionsOpen: false,
    jsonOptionsOpen: false,
};
const optionsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].setDirtyCalendar, (state, { calendar }) => (Object.assign(Object.assign({}, state), { dirtySettings: calendar }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].setYearMath, (state, { yearMath }) => (Object.assign(Object.assign({}, state), { dirtySettings: Object.assign(Object.assign({}, state.dirtySettings), { year: yearMath }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].setEventLists, (state, { events }) => (Object.assign(Object.assign({}, state), { dirtySettings: Object.assign(Object.assign({}, state.dirtySettings), { events }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].setLeapYears, (state, { leapYears }) => (Object.assign(Object.assign({}, state), { dirtySettings: Object.assign(Object.assign({}, state.dirtySettings), { leapYears }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].setMonths, (state, { settingsMonths }) => (Object.assign(Object.assign({}, state), { dirtySettings: Object.assign(Object.assign({}, state.dirtySettings), { months: settingsMonths }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].setDoW, (state, { DoW }) => (Object.assign(Object.assign({}, state), { dirtySettings: Object.assign(Object.assign({}, state.dirtySettings), { DoW }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleNewEra, state => (Object.assign(Object.assign({}, state), { newEraPanel: !state.newEraPanel }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleNewEvent, state => (Object.assign(Object.assign({}, state), { newEventPanel: !state.newEventPanel }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleNewLeapYear, state => (Object.assign(Object.assign({}, state), { newLeapYearPanel: !state.newLeapYearPanel }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].eraEditingIndex, (state, { eraEditingIndex }) => (Object.assign(Object.assign({}, state), { eraEditingIndex }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].monthEditingIndex, (state, { monthEditingIndex }) => (Object.assign(Object.assign({}, state), { monthEditingIndex }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].dayOfWeekEditingIndex, (state, { dayOfWeekEditingIndex }) => (Object.assign(Object.assign({}, state), { dayOfWeekEditingIndex }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].leapYearEditingIndex, (state, { leapYearEditingIndex }) => (Object.assign(Object.assign({}, state), { leapYearEditingIndex }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleYearOptions, state => (Object.assign(Object.assign({}, state), { yearOptionsOpen: !state.yearOptionsOpen }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleMonthOptions, state => (Object.assign(Object.assign({}, state), { monthOptionsOpen: !state.monthOptionsOpen }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleWeekOptions, state => (Object.assign(Object.assign({}, state), { weekOptionsOpen: !state.weekOptionsOpen }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleLeapYearOptions, state => (Object.assign(Object.assign({}, state), { leapYearOptionsOpen: !state.leapYearOptionsOpen }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleEventOptions, state => (Object.assign(Object.assign({}, state), { eventOptionsOpen: !state.eventOptionsOpen }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["OptionsActions"].toggleJSONOptions, state => (Object.assign(Object.assign({}, state), { jsonOptionsOpen: !state.jsonOptionsOpen }))));
function reducer(state, action) {
    return optionsReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/reducers/view.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/view.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");


const initialState = {
    optionsOpen: false,
    newEventOpen: false,
    dayID: 0,
    calendarIndex: 0,
};
const viewReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ViewActions"].toggleOptions, state => (Object.assign(Object.assign({}, state), { optionsOpen: !state.optionsOpen }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ViewActions"].setNewEventPanel, (state, { open, dayID }) => (Object.assign(Object.assign({}, state), { newEventOpen: open, dayID }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ViewActions"].changeCalendar, (state, { calendarIndex }) => (Object.assign(Object.assign({}, state), { calendarIndex }))));
function reducer(state, action) {
    return viewReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/selectors/calendar.selector.ts":
/*!******************************************************!*\
  !*** ./src/app/store/selectors/calendar.selector.ts ***!
  \******************************************************/
/*! exports provided: calendarView, selectCalendars, selectActiveCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarView", function() { return calendarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCalendars", function() { return selectCalendars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectActiveCalendar", function() { return selectActiveCalendar; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const calendarView = (state) => state.calendar;
const selectCalendars = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(calendarView, (state) => {
    return state.calendarList;
});
const selectActiveCalendar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(calendarView, (state) => {
    return state.activeCalendar;
});


/***/ }),

/***/ "./src/app/store/selectors/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/selectors/index.ts ***!
  \******************************************/
/*! exports provided: CalendarSelectors, OptionsSelectors, ViewSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.selector */ "./src/app/store/selectors/calendar.selector.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CalendarSelectors", function() { return _calendar_selector__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _options_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.selector */ "./src/app/store/selectors/options.selector.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "OptionsSelectors", function() { return _options_selector__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _view_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.selector */ "./src/app/store/selectors/view.selector.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ViewSelectors", function() { return _view_selector__WEBPACK_IMPORTED_MODULE_2__; });








/***/ }),

/***/ "./src/app/store/selectors/options.selector.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/selectors/options.selector.ts ***!
  \*****************************************************/
/*! exports provided: selectOptions, selectDirtyCalendar, selectNewEraPanelOpen, selectNewLeapYearPanelOpen, selectNewEventPanelOpen, selectEraEditingIndex, selectMonthEditingIndex, selectDayOfWeekEditingIndex, selectLeapYearEditingIndex, selectYearOptionsOpen, selectMonthOptionsOpen, selectWeekOptionsOpen, selectLeapYearOptionsOpen, selectEventOptionsOpen, selectJSONOptionsOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptions", function() { return selectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDirtyCalendar", function() { return selectDirtyCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNewEraPanelOpen", function() { return selectNewEraPanelOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNewLeapYearPanelOpen", function() { return selectNewLeapYearPanelOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNewEventPanelOpen", function() { return selectNewEventPanelOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEraEditingIndex", function() { return selectEraEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMonthEditingIndex", function() { return selectMonthEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDayOfWeekEditingIndex", function() { return selectDayOfWeekEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLeapYearEditingIndex", function() { return selectLeapYearEditingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectYearOptionsOpen", function() { return selectYearOptionsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMonthOptionsOpen", function() { return selectMonthOptionsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWeekOptionsOpen", function() { return selectWeekOptionsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLeapYearOptionsOpen", function() { return selectLeapYearOptionsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEventOptionsOpen", function() { return selectEventOptionsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectJSONOptionsOpen", function() { return selectJSONOptionsOpen; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectOptions = (state) => state.options;
const selectDirtyCalendar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.dirtySettings);
const selectNewEraPanelOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.newEraPanel);
const selectNewLeapYearPanelOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.newLeapYearPanel);
const selectNewEventPanelOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.newEventPanel);
const selectEraEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.eraEditingIndex);
const selectMonthEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.monthEditingIndex);
const selectDayOfWeekEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.dayOfWeekEditingIndex);
const selectLeapYearEditingIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.leapYearEditingIndex);
const selectYearOptionsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.yearOptionsOpen);
const selectMonthOptionsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.monthOptionsOpen);
const selectWeekOptionsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.weekOptionsOpen);
const selectLeapYearOptionsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.leapYearOptionsOpen);
const selectEventOptionsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.eventOptionsOpen);
const selectJSONOptionsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOptions, (state) => state.jsonOptionsOpen);
/*
export const selectCurrentID = createSelector(
    selectOptions,
    ( state: State ) => state.currentCalendarID
);
*/


/***/ }),

/***/ "./src/app/store/selectors/view.selector.ts":
/*!**************************************************!*\
  !*** ./src/app/store/selectors/view.selector.ts ***!
  \**************************************************/
/*! exports provided: selectView, selectOptionsOpen, selectOptionsClosed, selectNewEventOpen, selectNewEventDayID, selectCalendarIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectView", function() { return selectView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptionsOpen", function() { return selectOptionsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptionsClosed", function() { return selectOptionsClosed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNewEventOpen", function() { return selectNewEventOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNewEventDayID", function() { return selectNewEventDayID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCalendarIndex", function() { return selectCalendarIndex; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectView = (state) => state.view;
const selectOptionsOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectView, (state) => state.optionsOpen);
const selectOptionsClosed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectView, (state) => !state.optionsOpen);
const selectNewEventOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectView, (state) => state.newEventOpen);
const selectNewEventDayID = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectView, (state) => state.dayID);
const selectCalendarIndex = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectView, (state) => state.calendarIndex);


/***/ }),

/***/ "./src/app/year.service.ts":
/*!*********************************!*\
  !*** ./src/app/year.service.ts ***!
  \*********************************/
/*! exports provided: YearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearService", function() { return YearService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _month_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month.service */ "./src/app/month.service.ts");



class YearService {
    constructor(monthService) {
        this.monthService = monthService;
    }
    getDisplayYear(startingDayID, startingDoW, yearNumber, calendar) {
        const year = {
            id: 0,
            yearNumber,
            months: [],
            DoW: calendar.DoW,
        };
        const months = calendar.months;
        const monthLengths = this.leapYearChange(yearNumber, months, calendar.leapYearRules);
        let nextDayID = startingDayID;
        let nextDoW = startingDoW;
        let month = 0;
        while (month < calendar.months.length) { // again, number of months in the year
            year.months.push(this.monthService.getDisplayMonth(startingDayID, nextDayID, monthLengths[month], months[month], nextDoW, calendar.DoW.length, month, calendar));
            nextDayID = this.monthService.getNextStartingID(nextDayID, monthLengths[month]);
            nextDoW = this.monthService.getNextStartingDoW(months[month], nextDoW, calendar.DoW.length);
            month++;
        }
        return year;
    }
    leapYearChange(yearNumber, months, leapYears) {
        const tempMonths = [];
        months.forEach(element => {
            tempMonths.push(element.length);
        });
        if (leapYears) {
            // if there are rules to follow
            for (let rule = 0; rule < leapYears.length; rule++) {
                // for each rule
                if ((yearNumber - leapYears[rule].leapYearOffset) % leapYears[rule].leapYearCycles === 0) {
                    // if the year is in one of the rule's leap years
                    for (let month = 0; month < tempMonths.length; month++) {
                        // check each month
                        if (leapYears[rule].leapDayMonth === month) {
                            // if the month is the right month for a rule
                            tempMonths[month] += leapYears[rule].leapYearChange;
                        }
                    }
                }
            }
        }
        return tempMonths;
    }
    getNextStartingDoW(yearLength, startingDoW, daysPerWeek) {
        const newStartingDoW = (yearLength + startingDoW) % daysPerWeek;
        return newStartingDoW;
    }
    getNextStartingID(startingDayID, yearLength) {
        return startingDayID + yearLength;
    }
    getPreviousStartingDoW(yearLength, startingDoW, daysPerWeek) {
        const newStartingDoW = ((startingDoW + daysPerWeek) - (yearLength % daysPerWeek)) % daysPerWeek;
        return newStartingDoW;
    }
    getPreviousStartingID(startingDayID, yearLength) {
        return startingDayID - yearLength;
    }
    sumOfMonthLengths(settingsMonths) {
        let sumOfMonths = 0;
        if (settingsMonths.length > 0) { // this is the number of elements in the array
            settingsMonths.forEach(element => {
                sumOfMonths += element.length; // this is the element's length value
            });
        }
        return sumOfMonths;
    }
    daysInYear(calendar, yearNumber) {
        let total = this.sumOfMonthLengths(calendar.months);
        const leapYearRules = calendar.leapYearRules;
        if (leapYearRules) {
            for (let i = 0; i < leapYearRules.length; i++) {
                if ((yearNumber - leapYearRules[i].leapYearOffset) % leapYearRules[i].leapYearCycles === 0) {
                    total += leapYearRules[i].leapYearChange;
                }
            }
        }
        return total;
    }
    isThisLeapYear(yearNumber, leapYears) {
        for (let i = 0; i < leapYears.length; i++) {
            if (yearNumber && leapYears[i].leapYearCycles && leapYears[i].leapYearOffset) {
                if ((yearNumber - leapYears[i].leapYearOffset) % leapYears[i].leapYearCycles) {
                    return true;
                }
            }
        }
        return false;
    }
}
YearService.ɵfac = function YearService_Factory(t) { return new (t || YearService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_month_service__WEBPACK_IMPORTED_MODULE_1__["MonthService"])); };
YearService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YearService, factory: YearService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _month_service__WEBPACK_IMPORTED_MODULE_1__["MonthService"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FantasyCalendar\angular-fantasy-calendar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map