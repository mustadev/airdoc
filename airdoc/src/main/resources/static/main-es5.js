function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/pages/contact/contact.component */
    "./src/app/components/pages/contact/contact.component.ts");
    /* harmony import */


    var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/pages/about/about.component */
    "./src/app/components/pages/about/about.component.ts");
    /* harmony import */


    var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pages/home/home.component */
    "./src/app/components/pages/home/home.component.ts");
    /* harmony import */


    var _components_pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/doctor/profile/profile.component */
    "./src/app/components/pages/doctor/profile/profile.component.ts");
    /* harmony import */


    var _components_pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pages/doctor/login/login.component */
    "./src/app/components/pages/doctor/login/login.component.ts");
    /* harmony import */


    var _components_pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/pages/doctor/signup/signup.component */
    "./src/app/components/pages/doctor/signup/signup.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-dash-board/doctor-dash-board.component */
    "./src/app/components/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component */
    "./src/app/components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-change-password/doctor-change-password.component */
    "./src/app/components/pages/doctor/doctor-change-password/doctor-change-password.component.ts");
    /* harmony import */


    var _components_pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/pages/doctor/clinic-settings/clinic-settings.component */
    "./src/app/components/pages/doctor/clinic-settings/clinic-settings.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-appointments/doctor-appointments.component */
    "./src/app/components/pages/doctor/doctor-appointments/doctor-appointments.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-reviews/doctor-reviews.component */
    "./src/app/components/pages/doctor/doctor-reviews/doctor-reviews.component.ts");
    /* harmony import */


    var _components_pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/pages/patient/login/login.component */
    "./src/app/components/pages/patient/login/login.component.ts");
    /* harmony import */


    var _components_pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/pages/patient/signup/signup.component */
    "./src/app/components/pages/patient/signup/signup.component.ts");
    /* harmony import */


    var _components_pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/pages/patient/profile/profile.component */
    "./src/app/components/pages/patient/profile/profile.component.ts");
    /* harmony import */


    var _components_pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/pages/patient/patient-appointments/patient-appointments.component */
    "./src/app/components/pages/patient/patient-appointments/patient-appointments.component.ts");
    /* harmony import */


    var _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/pages/search/search.component */
    "./src/app/components/pages/search/search.component.ts");
    /* harmony import */


    var _services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/doctor-auth.guard */
    "./src/app/services/doctor-auth.guard.ts");
    /* harmony import */


    var _services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/patient-auth-guard */
    "./src/app/services/patient-auth-guard.ts");
    /* harmony import */


    var _components_pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/pages/patient/change-password/change-password.component */
    "./src/app/components/pages/patient/change-password/change-password.component.ts");
    /* harmony import */


    var _components_pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/pages/booking/booking.component */
    "./src/app/components/pages/booking/booking.component.ts"); // @ts-ignore
    // @ts-ignore


    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: 'home',
      component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'contact',
      component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
    }, {
      path: 'about',
      component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'doctor/profile/:id',
      component: _components_pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }, {
      path: 'doctor/login',
      component: _components_pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'doctor/signup',
      component: _components_pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    }, {
      path: 'doctor/dashboard',
      component: _components_pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_8__["DoctorDashBoardComponent"],
      canActivate: [_services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_19__["DoctorAuthGuard"]]
    }, {
      path: 'doctor/profile-settings',
      component: _components_pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_9__["DoctorProfileSettingsComponent"],
      canActivate: [_services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_19__["DoctorAuthGuard"]]
    }, {
      path: 'doctor/clinic-settings',
      component: _components_pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_11__["ClinicSettingsComponent"],
      canActivate: [_services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_19__["DoctorAuthGuard"]]
    }, {
      path: 'doctor/appointments',
      component: _components_pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_12__["DoctorAppointmentsComponent"],
      canActivate: [_services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_19__["DoctorAuthGuard"]]
    }, {
      path: 'doctor/reviews',
      component: _components_pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_13__["DoctorReviewsComponent"],
      canActivate: [_services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_19__["DoctorAuthGuard"]]
    }, {
      path: 'doctor/change-password',
      component: _components_pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_10__["DoctorChangePasswordComponent"],
      canActivate: [_services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_19__["DoctorAuthGuard"]]
    }, {
      path: 'patient/profile',
      component: _components_pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
      canActivate: [_services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_20__["PatientAuthGuard"]]
    }, {
      path: 'patient/login',
      component: _components_pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    }, {
      path: 'patient/signup',
      component: _components_pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    }, {
      path: 'search',
      component: _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"]
    }, {
      path: 'booking/:id',
      component: _components_pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_22__["BookingComponent"],
      canActivate: [_services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_20__["PatientAuthGuard"]]
    }, {
      path: 'patient/appointments',
      component: _components_pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_17__["PatientAppointmentsComponent"],
      canActivate: [_services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_20__["PatientAuthGuard"]]
    }, {
      path: 'patient/change-password',
      component: _components_pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordComponent"],
      canActivate: [_services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_20__["PatientAuthGuard"]]
    }, {
      path: '**',
      redirectTo: 'home'
    } //this must be the last
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(tokenStorageService) {
        _classCallCheck(this, AppComponent);

        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = !!this.tokenStorageService.getToken();

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser(); //console.log(user.roles);
            //this.roles = user.roles;
            //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.username = user.username;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut();
          window.location.reload();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "main-wrapper"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/patient/patient.component */
    "./src/app/components/patient/patient.component.ts");
    /* harmony import */


    var _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/doctor/doctor.component */
    "./src/app/components/doctor/doctor.component.ts");
    /* harmony import */


    var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");
    /* harmony import */


    var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pages/about/about.component */
    "./src/app/components/pages/about/about.component.ts");
    /* harmony import */


    var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/pages/contact/contact.component */
    "./src/app/components/pages/contact/contact.component.ts");
    /* harmony import */


    var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/pages/home/home.component */
    "./src/app/components/pages/home/home.component.ts");
    /* harmony import */


    var _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/pages/search/search.component */
    "./src/app/components/pages/search/search.component.ts");
    /* harmony import */


    var _components_review_review_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/review/review.component */
    "./src/app/components/review/review.component.ts");
    /* harmony import */


    var _components_pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/pages/doctor/signup/signup.component */
    "./src/app/components/pages/doctor/signup/signup.component.ts");
    /* harmony import */


    var _components_pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/pages/doctor/login/login.component */
    "./src/app/components/pages/doctor/login/login.component.ts");
    /* harmony import */


    var _components_pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/pages/doctor/profile/profile.component */
    "./src/app/components/pages/doctor/profile/profile.component.ts");
    /* harmony import */


    var _components_pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/pages/patient/signup/signup.component */
    "./src/app/components/pages/patient/signup/signup.component.ts");
    /* harmony import */


    var _components_pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/pages/patient/login/login.component */
    "./src/app/components/pages/patient/login/login.component.ts");
    /* harmony import */


    var _components_pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/pages/patient/profile/profile.component */
    "./src/app/components/pages/patient/profile/profile.component.ts");
    /* harmony import */


    var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/auth-interceptor.service */
    "./src/app/services/auth-interceptor.service.ts");
    /* harmony import */


    var _services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/doctor-auth.guard */
    "./src/app/services/doctor-auth.guard.ts");
    /* harmony import */


    var _services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/patient-auth-guard */
    "./src/app/services/patient-auth-guard.ts");
    /* harmony import */


    var _services_admin_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/admin-auth.guard */
    "./src/app/services/admin-auth.guard.ts");
    /* harmony import */


    var _components_pages_admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/pages/admin/admin-profile/admin-profile.component */
    "./src/app/components/pages/admin/admin-profile/admin-profile.component.ts");
    /* harmony import */


    var _components_pages_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/pages/admin/admin-login/admin-login.component */
    "./src/app/components/pages/admin/admin-login/admin-login.component.ts");
    /* harmony import */


    var _components_pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/pages/patient/change-password/change-password.component */
    "./src/app/components/pages/patient/change-password/change-password.component.ts");
    /* harmony import */


    var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/reviews/reviews.component */
    "./src/app/components/reviews/reviews.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-dash-board/doctor-dash-board.component */
    "./src/app/components/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component */
    "./src/app/components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts");
    /* harmony import */


    var _components_pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/pages/patient/patient-appointments/patient-appointments.component */
    "./src/app/components/pages/patient/patient-appointments/patient-appointments.component.ts");
    /* harmony import */


    var _components_pages_patient_patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/pages/patient/patient-appointment/patient-appointment.component */
    "./src/app/components/pages/patient/patient-appointment/patient-appointment.component.ts");
    /* harmony import */


    var _components_pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/pages/booking/booking.component */
    "./src/app/components/pages/booking/booking.component.ts");
    /* harmony import */


    var _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");
    /* harmony import */


    var _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/clinic/clinic.component */
    "./src/app/components/clinic/clinic.component.ts");
    /* harmony import */


    var _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/doctor-over-view/doctor-over-view.component */
    "./src/app/components/doctor-over-view/doctor-over-view.component.ts");
    /* harmony import */


    var _components_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/review-form/review-form.component */
    "./src/app/components/review-form/review-form.component.ts");
    /* harmony import */


    var _components_pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/pages/doctor/clinic-settings/clinic-settings.component */
    "./src/app/components/pages/doctor/clinic-settings/clinic-settings.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-side-bar/doctor-side-bar.component */
    "./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _components_pages_patient_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/pages/patient/patient-side-bar/patient-side-bar.component */
    "./src/app/components/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-appointments/doctor-appointments.component */
    "./src/app/components/pages/doctor/doctor-appointments/doctor-appointments.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-appointment/doctor-appointment.component */
    "./src/app/components/pages/doctor/doctor-appointment/doctor-appointment.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-change-password/doctor-change-password.component */
    "./src/app/components/pages/doctor/doctor-change-password/doctor-change-password.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-reviews/doctor-reviews.component */
    "./src/app/components/pages/doctor/doctor-reviews/doctor-reviews.component.ts");
    /* harmony import */


    var _components_pages_doctor_doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/pages/doctor/doctor-review/doctor-review.component */
    "./src/app/components/pages/doctor/doctor-review/doctor-review.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
      }, _services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_24__["DoctorAuthGuard"], _services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_25__["PatientAuthGuard"], _services_admin_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AdminAuthGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({})]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_8__["PatientComponent"], _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_9__["DoctorComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _components_review_review_component__WEBPACK_IMPORTED_MODULE_16__["ReviewComponent"], _components_pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"], _components_pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _components_pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"], _components_pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"], _components_pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _components_pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], _components_pages_admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_27__["AdminProfileComponent"], _components_pages_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_28__["AdminLoginComponent"], _components_pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_29__["ChangePasswordComponent"], _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_30__["ReviewsComponent"], _components_pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_31__["DoctorDashBoardComponent"], _components_pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_33__["PatientAppointmentsComponent"], _components_pages_patient_patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_34__["PatientAppointmentComponent"], _components_pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_32__["DoctorProfileSettingsComponent"], _components_pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_35__["BookingComponent"], _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_36__["RatingStarComponent"], _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_37__["ClinicComponent"], _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_38__["DoctorOverViewComponent"], _components_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_39__["ReviewFormComponent"], _components_pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_40__["ClinicSettingsComponent"], _components_pages_doctor_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_41__["DoctorSideBarComponent"], _components_pages_patient_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_42__["PatientSideBarComponent"], _components_pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_43__["DoctorAppointmentsComponent"], _components_pages_doctor_doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_44__["DoctorAppointmentComponent"], _components_pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_45__["DoctorChangePasswordComponent"], _components_pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_46__["DoctorReviewsComponent"], _components_pages_doctor_doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_47__["DoctorReviewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_8__["PatientComponent"], _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_9__["DoctorComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _components_pages_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _components_review_review_component__WEBPACK_IMPORTED_MODULE_16__["ReviewComponent"], _components_pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"], _components_pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _components_pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"], _components_pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"], _components_pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _components_pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], _components_pages_admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_27__["AdminProfileComponent"], _components_pages_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_28__["AdminLoginComponent"], _components_pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_29__["ChangePasswordComponent"], _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_30__["ReviewsComponent"], _components_pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_31__["DoctorDashBoardComponent"], _components_pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_33__["PatientAppointmentsComponent"], _components_pages_patient_patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_34__["PatientAppointmentComponent"], _components_pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_32__["DoctorProfileSettingsComponent"], _components_pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_35__["BookingComponent"], _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_36__["RatingStarComponent"], _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_37__["ClinicComponent"], _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_38__["DoctorOverViewComponent"], _components_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_39__["ReviewFormComponent"], _components_pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_40__["ClinicSettingsComponent"], _components_pages_doctor_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_41__["DoctorSideBarComponent"], _components_pages_patient_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_42__["PatientSideBarComponent"], _components_pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_43__["DoctorAppointmentsComponent"], _components_pages_doctor_doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_44__["DoctorAppointmentComponent"], _components_pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_45__["DoctorChangePasswordComponent"], _components_pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_46__["DoctorReviewsComponent"], _components_pages_doctor_doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_47__["DoctorReviewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({})],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
          }, _services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_24__["DoctorAuthGuard"], _services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_25__["PatientAuthGuard"], _services_admin_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AdminAuthGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/clinic/clinic.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/clinic/clinic.component.ts ***!
    \*******************************************************/

  /*! exports provided: ClinicComponent */

  /***/
  function srcAppComponentsClinicClinicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicComponent", function () {
      return ClinicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    function ClinicComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var clinicPhoto_r279 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", clinicPhoto_r279.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clinicPhoto_r279.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ClinicComponent =
    /*#__PURE__*/
    function () {
      function ClinicComponent(doctorService) {
        _classCallCheck(this, ClinicComponent);

        this.doctorService = doctorService;
      }

      _createClass(ClinicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("Clinic: ", JSON.stringify(this.clinic));
          this.doctorService.getClinicPhotos(this.doctor.id).subscribe(function (photos) {
            photos.filter(function (photo) {
              console.log("photo ", photo);
              return photo === null;
            });
            _this.clinicPhotos = photos.map(function (photo) {
              return {
                "id": photo.id,
                "image": 'data:image/jpeg;base64,' + photo.image.data
              };
            });
          });
        }
      }]);

      return ClinicComponent;
    }();

    ClinicComponent.ɵfac = function ClinicComponent_Factory(t) {
      return new (t || ClinicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]));
    };

    ClinicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClinicComponent,
      selectors: [["app-clinic"]],
      inputs: {
        clinic: "clinic",
        doctor: "doctor"
      },
      decls: 24,
      vars: 13,
      consts: [[1, "row"], [1, "col-md-10"], [1, "clinic-content"], [1, "clinic-name"], [1, "doc-speciality"], [1, "clinic-details", "mb-0"], [1, "clinic-direction"], [1, "fas", "fa-map-marker-alt"], [4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "consult-price"], [1, "col-md-12", "mt-5"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", "markerDraggable"], ["data-fancybox", "gallery2", 3, "href"], ["alt", "Feature Image", 3, "src"]],
      template: function ClinicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClinicComponent_li_12_Template, 3, 2, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Clinic Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "agm-map", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "agm-marker", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clinic == null ? null : ctx.clinic.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.clinic.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinicPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, ctx.clinic == null ? null : ctx.clinic.consultPrice), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.clinic.location.latitude)("longitude", ctx.clinic.location.longitude)("zoom", ctx.clinic.location.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.clinic.location.latitude)("longitude", ctx.clinic.location.longitude)("markerDraggable", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\n    height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGluaWMvY2xpbmljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGluaWMvY2xpbmljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clinic',
          templateUrl: './clinic.component.html',
          styleUrls: ['./clinic.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }];
      }, {
        clinic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/doctor-over-view/doctor-over-view.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/doctor-over-view/doctor-over-view.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DoctorOverViewComponent */

  /***/
  function srcAppComponentsDoctorOverViewDoctorOverViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorOverViewComponent", function () {
      return DoctorOverViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DoctorOverViewComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r282 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", service_r282, " ");
      }
    }

    function DoctorOverViewComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var speciality_r283 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", speciality_r283, " ");
      }
    }

    var DoctorOverViewComponent =
    /*#__PURE__*/
    function () {
      function DoctorOverViewComponent() {
        _classCallCheck(this, DoctorOverViewComponent);
      }

      _createClass(DoctorOverViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorOverViewComponent;
    }();

    DoctorOverViewComponent.ɵfac = function DoctorOverViewComponent_Factory(t) {
      return new (t || DoctorOverViewComponent)();
    };

    DoctorOverViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorOverViewComponent,
      selectors: [["app-over-view"]],
      inputs: {
        doctor: "doctor",
        clinic: "clinic"
      },
      decls: 17,
      vars: 3,
      consts: [[1, "row"], [1, "col-md-12", "col-lg-9"], [1, "widget", "about-widget"], [1, "widget-title"], [1, "service-list"], [1, "clearfix"], [4, "ngFor", "ngForOf"]],
      template: function DoctorOverViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DoctorOverViewComponent_li_11_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Specializations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DoctorOverViewComponent_li_16_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.aboutMe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.specialities);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLW92ZXItdmlldy9kb2N0b3Itb3Zlci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorOverViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-over-view',
          templateUrl: './doctor-over-view.component.html',
          styleUrls: ['./doctor-over-view.component.css']
        }]
      }], function () {
        return [];
      }, {
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clinic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/doctor/doctor.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/doctor/doctor.component.ts ***!
    \*******************************************************/

  /*! exports provided: DoctorComponent */

  /***/
  function srcAppComponentsDoctorDoctorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorComponent", function () {
      return DoctorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");

    function DoctorComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
      }

      if (rf & 2) {
        var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r225.retrievedAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
      }
    }

    function DoctorComponent_li_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r229 = ctx.$implicit;

        var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx_r227.doctor == null ? null : ctx_r227.doctor.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r229, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r230 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r230, " ");
      }
    }

    var DoctorComponent =
    /*#__PURE__*/
    function () {
      function DoctorComponent(doctorService) {
        _classCallCheck(this, DoctorComponent);

        this.doctorService = doctorService;
        this.showDefaultAvatar = false;
      }

      _createClass(DoctorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //Get Doctor Avatar
          this.doctorService.getAvatar(this.doctor.id).subscribe(function (res) {
            var _a, _b, _c, _d;

            _this2.retrieveResonse = res;
            _this2.base64Data = (_b = (_a = _this2.retrieveResonse) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data;
            _this2.retrievedAvatar = 'data:image/jpeg;base64,' + _this2.base64Data;
            console.log(res); //console.log("base64", this.base64Data);

            console.log("retrievedAvatar: ", _this2.retrievedAvatar);

            if (((_d = (_c = res) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.data) === undefined) {
              _this2.showDefaultAvatar = true;
              console.log("show default");
            }
          }); //Get Doctor Clinic

          this.doctorService.getClinic(this.doctor.id).subscribe(function (res) {
            _this2.clinic = res;
          }); //Get Clinic Photos

          this.doctorService.getClinicPhotos(this.doctor.id).subscribe(function (res) {
            //Convert image to base64 and return it;
            _this2.clinicPhotos = res.map(function (photo) {
              return 'data:image/jpeg;base64,' + photo.image.data;
            });
          });
        }
      }]);

      return DoctorComponent;
    }();

    DoctorComponent.ɵfac = function DoctorComponent_Factory(t) {
      return new (t || DoctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]));
    };

    DoctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorComponent,
      selectors: [["app-doctor"]],
      inputs: {
        doctor: "doctor"
      },
      decls: 51,
      vars: 32,
      consts: [[1, "card"], [1, "card-body"], [1, "doctor-widget"], [1, "doc-info-left"], [1, "doctor-img"], [3, "routerLink"], ["class", "img-fluid", "alt", "Doctor Image", 3, "src", 4, "ngIf"], ["src", "assets/img/doctors/default-doctor.png", "class", "img-fluid", "alt", "Doctor Image", 4, "ngIf"], [1, "doc-info-cont"], [1, "doc-name"], [1, "doc-speciality"], [1, "doc-department"], [1, "rating"], [3, "ratedCount"], [1, "d-inline-block", "average-rating"], [1, "clinic-details"], [1, "doc-location"], [1, "fas", "fa-map-marker-alt"], [1, "clinic-gallery"], [4, "ngFor", "ngForOf"], [1, "clinic-services"], [1, "doc-info-right"], [1, "clini-infos"], [1, "far", "fa-comment"], [1, "far", "fa-money-bill-alt"], [1, "clinic-booking"], [1, "view-pro-btn", 3, "routerLink"], [1, "apt-btn", 3, "routerLink"], ["alt", "Doctor Image", 1, "img-fluid", 3, "src"], ["src", "assets/img/doctors/default-doctor.png", "alt", "Doctor Image", 1, "img-fluid"], ["data-fancybox", "gallery", 3, "routerLink"], ["alt", "Feature", 3, "src"]],
      template: function DoctorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DoctorComponent_img_6_Template, 1, 1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoctorComponent_img_7_Template, 1, 0, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-rating-star", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DoctorComponent_li_29_Template, 3, 2, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DoctorComponent_span_31_Template, 2, 1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Voir Doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "BOOK APPOINTMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 22, ctx.doctor == null ? null : ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratedCount", ctx.doctor == null ? null : ctx.doctor.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.doctor == null ? null : ctx.doctor.averageRating, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 24, ctx.clinic == null ? null : ctx.clinic.country), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 26, ctx.clinic == null ? null : ctx.clinic.city), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinicPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.doctor == null ? null : ctx.doctor.reviews == null ? null : ctx.doctor.reviews.length, " Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.clinic == null ? null : ctx.clinic.country) + " " + (ctx.clinic == null ? null : ctx.clinic.city), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 28, ctx.clinic == null ? null : ctx.clinic.minPrice), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 30, ctx.clinic == null ? null : ctx.clinic.maxPrice), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/booking/", ctx.doctor == null ? null : ctx.doctor.id, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_4__["RatingStarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor',
          templateUrl: './doctor.component.html',
          styleUrls: ['./doctor.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }];
      }, {
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/layout/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/layout/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FooterComponent_div_29_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_29_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_29_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Patient Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "For Patients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Search for Doctors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FooterComponent_div_29_a_9_Template, 3, 0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FooterComponent_div_29_a_11_Template, 3, 0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FooterComponent_div_29_a_13_Template, 3, 0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r239.isLoggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r239.isLoggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r239.showPatientMenu);
      }
    }

    function FooterComponent_div_31_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_31_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_31_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "For Doctors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_div_31_li_4_Template, 4, 0, "li", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_div_31_a_6_Template, 3, 0, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_div_31_a_8_Template, 3, 0, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r240.showDoctorMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r240.isLoggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r240.isLoggedIn);
      }
    }

    var DOCTOR = "DOCTOR";
    var PATIENT = "PATIENT";
    var ADMIN = "ADMIN";

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(authService, tokenStorageService) {
        _classCallCheck(this, FooterComponent);

        this.authService = authService;
        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false; //showAdminBoard = false;
        //showModeratorBoard = false;

        this.showDoctorMenu = false;
        this.showPatientMenu = false;
        this.showAdminMenu = false;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.isLoggedIn = !!this.tokenStorageService.getToken();
          this.authService.getLoggedInUser.subscribe(function (user) {
            return _this3.updateFooter(user);
          });

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            var userType = this.tokenStorageService.getUserType();
            this.roles = user.roles; //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.showDoctorMenu = userType == DOCTOR;
            this.showPatientMenu = userType == PATIENT;
            this.showAdminMenu = userType == ADMIN;
            console.log("userType " + userType);
            console.log("showDoctorMenu: " + this.showDoctorMenu);
            this.username = user.username;
          }
        }
      }, {
        key: "updateFooter",
        value: function updateFooter(user) {
          console.log("LoggerInUser " + user);
          this.isLoggedIn = true;
          this.loggedInUser = user;
          console.log("logged in user : " + this.loggedInUser);
          this.showDoctorMenu = user.userType == DOCTOR;
          console.log("showDoctorMenu");
          console.log(this.showDoctorMenu);
          this.showPatientMenu = user.userType == PATIENT;
          console.log("this.showPatientMenu");
          console.log(this.showPatientMenu);
          this.showAdminMenu = user.userType == ADMIN;
          console.log("this.showAdminMenu");
          console.log(this.showAdminMenu);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 66,
      vars: 2,
      consts: [[1, "footer"], [1, "footer-top"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "footer-widget", "footer-about"], [1, "footer-logo"], ["src", "assets/img/footer-logo.png", "alt", "logo"], [1, "footer-about-content"], [1, "social-icon"], ["href", "#", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-instagram"], [1, "fab", "fa-dribbble"], ["class", "footer-widget footer-menu", 4, "ngIf"], [1, "footer-widget", "footer-contact"], [1, "footer-title"], [1, "footer-contact-info"], [1, "footer-address"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone-alt"], [1, "mb-0"], [1, "fas", "fa-envelope"], [1, "footer-bottom"], [1, "copyright"], [1, "col-md-6", "col-lg-6"], [1, "copyright-text"], [1, "copyright-menu"], [1, "policy-menu"], ["routerLink", "/term-condition"], ["routerLink", "/privacy-policy"], [1, "footer-widget", "footer-menu"], ["routerLink", "/search"], [1, "fas", "fa-angle-double-right"], ["routerLink", "/patient/login", 4, "ngIf"], ["routerLink", "/patient/signup", 4, "ngIf"], ["routerLink", "/patient/profile", 4, "ngIf"], ["routerLink", "/patient/login"], ["routerLink", "/patient/signup"], ["routerLink", "/patient/profile"], [4, "ngIf"], ["routerLink", "/doctor/login", 4, "ngIf"], ["routerLink", "/doctor/signup", 4, "ngIf"], ["routerLink", "/doctor/appointments"], ["routerLink", "/doctor/login"], ["routerLink", "/doctor/signup"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "AirDoc est une application marocaine fond\xE9e en 2020 qui propose un service de gestion en ligne des consultations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FooterComponent_div_29_Template, 14, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FooterComponent_div_31_Template, 9, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Agadir,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Morocco ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " +212 555555555 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " airdoc@example.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Terms and Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDoctorMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPatientMenu);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layout/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/layout/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_ul_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search Doctors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ul_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search Doctors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ul_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ul_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ul_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "login / Signup ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ul_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_21_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r238);

          var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r237.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DOCTOR = "DOCTOR";
    var PATIENT = "PATIENT";
    var ADMIN = "ADMIN";

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(tokenStorageService, authService, router) {
        _classCallCheck(this, HeaderComponent);

        this.tokenStorageService = tokenStorageService;
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = false; //showAdminBoard = false;
        //showModeratorBoard = false;

        this.showDoctorMenu = false;
        this.showPatientMenu = false;
        this.showAdminMenu = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.isLoggedIn = !!this.tokenStorageService.getToken();
          this.authService.getLoggedInUser.subscribe(function (user) {
            return _this4.updateHeader(user);
          });

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            var userType = this.tokenStorageService.getUserType();
            this.roles = user.roles; //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.showDoctorMenu = userType == DOCTOR;
            this.showPatientMenu = userType == PATIENT;
            this.showAdminMenu = userType == ADMIN;
            console.log("userType " + userType);
            console.log("showDoctorMenu: " + this.showDoctorMenu);
            this.username = user.username;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut(); //window.location.reload();

          this.router.navigate(["home"]).then(function () {
            window.location.reload();
          });
        }
      }, {
        key: "updateHeader",
        value: function updateHeader(user) {
          console.log("LoggerInUser ", user);
          this.isLoggedIn = true;
          this.loggedInUser = user;
          console.log("logged in user : " + this.loggedInUser);
          this.showDoctorMenu = user.userType == DOCTOR;
          console.log("showDoctorMenu");
          console.log(this.showDoctorMenu);
          this.showPatientMenu = user.userType == PATIENT;
          console.log("this.showPatientMenu");
          console.log(this.showPatientMenu);
          this.showAdminMenu = user.userType == ADMIN;
          console.log("this.showAdminMenu");
          console.log(this.showAdminMenu);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 22,
      vars: 6,
      consts: [[1, "header"], [1, "navbar", "navbar-expand-lg", "header-nav"], [1, "navbar-header"], ["id", "mobile_btn", "href", "javascript:void(0);"], [1, "bar-icon"], ["routerLink", "home", 1, "navbar-brand", "logo"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "img-fluid"], [1, "main-menu-wrapper"], [1, "menu-header"], ["routerLink", "home", 1, "menu-logo"], ["id", "menu_close", "routerLink", "javascript:void(0);", 1, "menu-close"], [1, "fas", "fa-times"], ["class", "main-nav", 4, "ngIf"], ["class", "nav header-navbar-rht", 4, "ngIf"], [1, "main-nav"], ["routerLinkActive", "active"], ["routerLink", "/home"], ["routerLinkActive", "active", 1, "has-submenu"], ["routerLink", "/search"], ["routerLink", "/contact"], ["routerLink", "/about"], ["routerLink", "/patient/appointments"], [1, "has-submenu"], ["routerLink", "/doctor/appointments", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], ["routerLink", "/admin", "routerLinkActive", "active"], [1, "nav", "header-navbar-rht"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/patient/login", 1, "nav-link", "header-login"], [1, "nav-item"], [1, "btn", "nav-link", "header-login", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ul_16_Template, 14, 0, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_ul_17_Template, 16, 0, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_ul_18_Template, 13, 0, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_ul_19_Template, 7, 0, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_ul_20_Template, 4, 0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_ul_21_Template, 4, 0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPatientMenu && !ctx.showDoctorMenu && !ctx.showAdminMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPatientMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDoctorMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdminMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/about/about.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/pages/about/about.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 7,
      vars: 0,
      consts: [[1, "content"], [1, "container"], [1, "row", "d-flex", "justify-content-center"], [1, "col-8"], [1, "about"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AirDoc est une application marocaine fond\xE9e en 2020 qui propose un service de gestion en ligne des consultations pour les professionnels de sant\xE9 et un service de prise de rendez-vous en ligne pour les patients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about[_ngcontent-%COMP%] {\n    height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XG4gICAgaGVpZ2h0OiA1MHZoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/admin/admin-login/admin-login.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/pages/admin/admin-login/admin-login.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdminLoginComponent */

  /***/
  function srcAppComponentsPagesAdminAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
      return AdminLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AdminLoginComponent_form_14_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r253.errorMessage, " ");
      }
    }

    function AdminLoginComponent_form_14_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_form_14_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_form_14_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_form_14_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLoginComponent_form_14_div_15_div_1_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminLoginComponent_form_14_div_15_div_2_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r256.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r256.errors.minlength);
      }
    }

    function AdminLoginComponent_form_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_form_14_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261);

          var _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r252.form.valid && ctx_r260.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminLoginComponent_form_14_div_3_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_form_14_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261);

          var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r262.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminLoginComponent_form_14_div_9_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_form_14_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261);

          var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r263.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminLoginComponent_form_14_div_15_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r252.submitted && ctx_r251.isLoginFailed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r251.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r252.submitted && _r254.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r251.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r252.submitted && _r256.invalid);
      }
    }

    var AdminLoginComponent =
    /*#__PURE__*/
    function () {
      function AdminLoginComponent(authService, tokenStorage, router, activatedRoute) {
        _classCallCheck(this, AdminLoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.retUrl = "admin/profile";
      }

      _createClass(AdminLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this5.retUrl = params.get('retUrl');
            console.log('LoginComponent/ngOnInit ' + _this5.retUrl);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          this.authService.adminLogin(this.form).subscribe(function (user) {
            _this6.tokenStorage.saveToken(user.accessToken);

            _this6.tokenStorage.saveUser(user);

            _this6.tokenStorage.saveUserType(user.userType);

            _this6.isLoginFailed = false;
            _this6.isLoggedIn = true;
            _this6.roles = _this6.tokenStorage.getUser().roles;

            _this6.authService.getLoggedInUser.emit(user);

            console.log("login successful");
            console.log(_this6.tokenStorage.getUser());
            console.log('return to ' + _this6.retUrl);

            if (_this6.retUrl != null) {
              _this6.router.navigate([_this6.retUrl]);
            } else {
              _this6.router.navigate(['admin/profile']);
            }
          }, function (err) {
            _this6.errorMessage = err.error.message;
            _this6.isLoginFailed = true;
          });
        }
      }]);

      return AdminLoginComponent;
    }();

    AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) {
      return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLoginComponent,
      selectors: [["app-admin-login"]],
      decls: 15,
      vars: 1,
      consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "AirDoc Login", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "form-focus"], ["name", "email", "required", "", "type", "email", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "focus-label"], ["name", "password", "required", "", "minlength", "6", "type", "password", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "/doctor/forgot-password", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", "login-btn"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function AdminLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AirDoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminLoginComponent_form_14_Template, 21, 5, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-login',
          templateUrl: './admin-login.component.html',
          styleUrls: ['./admin-login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/admin/admin-profile/admin-profile.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/pages/admin/admin-profile/admin-profile.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AdminProfileComponent */

  /***/
  function srcAppComponentsPagesAdminAdminProfileAdminProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function () {
      return AdminProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminProfileComponent =
    /*#__PURE__*/
    function () {
      function AdminProfileComponent() {
        _classCallCheck(this, AdminProfileComponent);
      }

      _createClass(AdminProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminProfileComponent;
    }();

    AdminProfileComponent.ɵfac = function AdminProfileComponent_Factory(t) {
      return new (t || AdminProfileComponent)();
    };

    AdminProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminProfileComponent,
      selectors: [["app-admin-profile"]],
      decls: 2,
      vars: 0,
      template: function AdminProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-profile works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-profile',
          templateUrl: './admin-profile.component.html',
          styleUrls: ['./admin-profile.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/booking/booking.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/pages/booking/booking.component.ts ***!
    \***************************************************************/

  /*! exports provided: BookingComponent */

  /***/
  function srcAppComponentsPagesBookingBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingComponent", function () {
      return BookingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Appointment */
    "./src/app/models/Appointment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BookingComponent =
    /*#__PURE__*/
    function () {
      function BookingComponent(route, location, authService, doctorService, patientService, appointmentService) {
        _classCallCheck(this, BookingComponent);

        this.route = route;
        this.location = location;
        this.authService = authService;
        this.doctorService = doctorService;
        this.patientService = patientService;
        this.appointmentService = appointmentService;
        this.appointment = new src_app_models_Appointment__WEBPACK_IMPORTED_MODULE_1__["Appointment"]();
      }

      _createClass(BookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.params.subscribe(function (params) {
            params['id'];

            _this7.doctorService.getById(params['id']).subscribe(function (res) {
              _this7.doctor = res;
              _this7.appointment.doctorId = _this7.doctor.id;
              console.log("Doctor: " + _this7.doctor.id);
            });

            _this7.doctorService.getAvatar(params['id']).subscribe(function (avatar) {
              var _a, _b;

              _this7.doctorAvatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
          this.authService.getCurrentUser().subscribe(function (user) {
            _this7.patientService.getById(user.id).subscribe(function (res) {
              _this7.patient = res;
              _this7.appointment.patientId = _this7.patient.id;
              console.log("Patient: " + _this7.patient.id);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log("date : ", this.appointmentDate);
          console.log(JSON.stringify(this.appointment));
          var appDate = new Date(this.appointmentDate);
          var bookingDate = new Date(); //TODO cela devrait être fait à back-end

          this.appointment.state = "PENDING";
          this.appointment.appointmentDate = appDate.toISOString();
          this.appointment.bookingDate = bookingDate.toISOString();
          console.log("iso date", appDate.toISOString());
          console.log("appoin", JSON.stringify(this.appointment));
          this.appointmentService.add(this.appointment).subscribe(function (res) {
            console.log("appointment added", JSON.stringify(res));
          });
          this.location.back();
        }
      }]);

      return BookingComponent;
    }();

    BookingComponent.ɵfac = function BookingComponent_Factory(t) {
      return new (t || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"]));
    };

    BookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookingComponent,
      selectors: [["app-booking"]],
      decls: 52,
      vars: 14,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index-2.html"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "content"], [1, "container"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "booking-doc-info"], [1, "booking-doc-img", 3, "routerLink"], ["alt", "Doctor Image", 3, "src"], [1, "booking-info"], [3, "routerLink"], [3, "ratedCount", "readonly"], [1, "d-inline-block", "average-rating"], [1, "card", "booking-schedule", "schedule-widget"], [1, "schedule-cont"], [1, "col-md-12"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], [1, "col-md-8"], [1, "form-group"], [1, "control-label"], ["rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], ["type", "datetime-local", "name", "appointmentDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary", 3, "click"]],
      template: function BookingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Booking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Booking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-rating-star", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Schedule an Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "textarea", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_textarea_ngModelChange_45_listener($event) {
            return ctx.appointment.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Appointment Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.appointmentDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingComponent_Template_input_click_51_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.doctorAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 12, ctx.doctor == null ? null : ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratedCount", ctx.doctor == null ? null : ctx.doctor.rating)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.averageRating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appointment.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appointmentDate);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_8__["RatingStarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-booking',
          templateUrl: './booking.component.html',
          styleUrls: ['./booking.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"]
        }, {
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/contact/contact.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/pages/contact/contact.component.ts ***!
    \***************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _models_Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../models/Contact */
    "./src/app/models/Contact.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_12_div_1_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors.required);
      }
    }

    function ContactComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_16_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_16_div_1_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactComponent_div_16_div_2_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.email);
      }
    }

    function ContactComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Message is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_22_div_1_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors.required);
      }
    }

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(contactService, router) {
        _classCallCheck(this, ContactComponent);

        this.contactService = contactService;
        this.router = router;
        this.contact = new _models_Contact__WEBPACK_IMPORTED_MODULE_0__["Contact"]();
        this.submitted = false;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.submitted = true;
          console.log("submiting contact Contact ", JSON.stringify(this.contact));
          this.contactService.addContact(this.contact).subscribe(function (res) {
            console.log("submiting contact Contact ", JSON.stringify(res));

            _this8.router.navigate(['home']);
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 26,
      vars: 9,
      consts: [[1, "cmspage", "mtb-40"], [1, "container"], [1, "page-desc", 3, "hidden"], [1, "row", "justify-content-center"], [1, "col-md-8"], [3, "ngSubmit"], ["addContact", "ngForm"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "placeholder", "Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "error", 4, "ngIf"], ["type", "text", "name", "email", "id", "email", "placeholder", "E-Mail", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "phone", "id", "phone", "placeholder", "Phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "message", "id", "message", "rows", "5", "placeholder", "Message", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["message", "ngModel"], [1, "btn", "btn-success", 3, "disabled"], [1, "error"], [4, "ngIf"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.contact.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContactComponent_div_12_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.contact.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ContactComponent_div_16_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.contact.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "textarea", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_20_listener($event) {
            return ctx.contact.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ContactComponent_div_22_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"]],
      styles: [".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {border: 1px solid #42A948;}\n\n.error[_ngcontent-%COMP%] {color:#ff0000;}\n\n.success[_ngcontent-%COMP%] { color:green; }\n\n.contact-message[_ngcontent-%COMP%] { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOztBQUViLHlDQUF5Qyx5QkFBeUIsQ0FBQzs7QUFDbkUsUUFBUSxhQUFhLENBQUM7O0FBQ3RCLFdBQVcsV0FBVyxFQUFFOztBQUN4QixtQkFBbUIsa0JBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp2YWxpZGF0aW9uKi9cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtib3JkZXI6IDFweCBzb2xpZCAjNDJBOTQ4O31cbi5lcnJvciB7Y29sb3I6I2ZmMDAwMDt9XG4uc3VjY2VzcyB7IGNvbG9yOmdyZWVuOyB9XG4uY29udGFjdC1tZXNzYWdlIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/clinic-settings/clinic-settings.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/clinic-settings/clinic-settings.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ClinicSettingsComponent */

  /***/
  function srcAppComponentsPagesDoctorClinicSettingsClinicSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicSettingsComponent", function () {
      return ClinicSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Clinic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Clinic */
    "./src/app/models/Clinic.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    function ClinicSettingsComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r109.uploadProgress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r109.uploadProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r109.uploadProgress, "% ");
      }
    }

    function ClinicSettingsComponent_div_65_Template(rf, ctx) {
      if (rf & 1) {
        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicSettingsComponent_div_65_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

          var clinicPhoto_r113 = ctx.$implicit;

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114.deleteClinicPhoto(clinicPhoto_r113 == null ? null : clinicPhoto_r113.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var clinicPhoto_r113 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clinicPhoto_r113 == null ? null : clinicPhoto_r113.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ClinicSettingsComponent_div_80_Template(rf, ctx) {
      if (rf & 1) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clinic Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "agm-map", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("zoomChange", function ClinicSettingsComponent_div_80_Template_agm_map_zoomChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r116.zoomChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "agm-marker", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function ClinicSettingsComponent_div_80_Template_agm_marker_dragEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r118.dragEnd($event.coords.lat, $event.coords.lng);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r111.clinic.location.latitude)("longitude", ctx_r111.clinic.location.longitude)("zoom", ctx_r111.clinic.location.zoom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r111.clinic.location.latitude)("longitude", ctx_r111.clinic.location.longitude)("markerDraggable", true);
      }
    }

    function ClinicSettingsComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r112.successMessage, " ");
      }
    }

    var ClinicSettingsComponent =
    /*#__PURE__*/
    function () {
      function ClinicSettingsComponent(authService, doctorService) {
        _classCallCheck(this, ClinicSettingsComponent);

        this.authService = authService;
        this.doctorService = doctorService;
        this.successMessage = '';
      }

      _createClass(ClinicSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            _this9.doctorService.getAvatar(res.id).subscribe(function (avatar) {
              var _a, _b;

              _this9.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });

            _this9.doctorService.getById(res.id).subscribe(function (doctor) {
              _this9.doctor = doctor;
            });

            _this9.doctorService.getClinic(res.id).subscribe(function (clinic) {
              _this9.clinic = clinic;
              console.log("Clinic : : ", JSON.stringify(_this9.clinic));

              if (!!!_this9.clinic) {
                console.log("empty Clinic: ", JSON.stringify(_this9.clinic));
                _this9.clinic = src_app_models_Clinic__WEBPACK_IMPORTED_MODULE_1__["Clinic"].empty();
              }

              _this9.services = _this9.clinic.services.join(', ');
              _this9.specialities = _this9.clinic.specialities.join(', ');
            });

            _this9.doctorService.getClinicPhotos(res.id).subscribe(function (photos) {
              photos = photos.filter(function (photo) {
                console.log("photo ", photo);
                return photo !== null;
              });
              _this9.clinicPhotos = photos.map(function (photo) {
                return {
                  "id": photo.id,
                  "image": 'data:image/jpeg;base64,' + photo.image.data
                };
              });
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          console.log("services: ", this.services.split(','));
          console.log("services: ", this.specialities.split(','));
          this.clinic.services = this.services.split(',');
          this.clinic.specialities = this.specialities.split(',');
          console.log("clinic new name: ", JSON.stringify(this.clinic));
          this.doctorService.updateClinic(this.doctor.id, this.clinic).subscribe(function (clinic) {
            _this10.clinic = clinic;
            console.log("clinic: ", JSON.stringify(_this10.clinic));
            _this10.successMessage = "Change Saved";
            setTimeout(function () {
              _this10.successMessage = '';
            }, 3000);
          });
        }
      }, {
        key: "deleteClinicPhoto",
        value: function deleteClinicPhoto(photoId) {
          var _this11 = this;

          console.log("Photo ID: ", photoId);
          this.doctorService.deleteClinicPhoto(this.doctor.id, photoId).subscribe(function (res) {
            console.log("photo Deleted", JSON.stringify(res));

            _this11.doctorService.getClinicPhotos(_this11.doctor.id).subscribe(function (photos) {
              console.log(JSON.stringify(photos)); // photos = photos.filter((photo, index, photos) => {
              //   console.log("photo ", photo);
              //   if(photo === null){
              //     console.log("photo is null");
              //     photos = photos.slice(index, 1);
              //   };
              // });

              photos = photos.filter(function (photo) {
                console.log("photo ", photo);

                if (photo === null) {
                  console.log("photo is null");
                  return false;
                }

                ;
                return true;
              });
              console.log("photos after filter: ", JSON.stringify(photos));
              _this11.clinicPhotos = photos.map(function (photo) {
                console.log("photo : ", JSON.stringify(photo));
                return {
                  "id": photo.id,
                  "image": 'data:image/jpeg;base64,' + photo.image.data
                };
              });
            });
          });
        }
      }, {
        key: "uploadClinicPhoto",
        value: function uploadClinicPhoto(event) {
          var _this12 = this;

          this.currentSelectedPhoto = event.target.files.item(0);
          this.doctorService.uploadClinicPhoto(this.doctor.id, this.currentSelectedPhoto).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
              _this12.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
              _this12.doctorService.getClinicPhotos(_this12.doctor.id).subscribe(function (photos) {
                _this12.clinicPhotos = photos.map(function (photo) {
                  return {
                    "id": photo.id,
                    "image": 'data:image/jpeg;base64,' + photo.image.data
                  };
                });
                _this12.uploadProgress = 0;
                _this12.currentSelectedPhoto = undefined;
              });
            }
          }, function (err) {
            _this12.uploadProgress = 0;
            _this12.uploadErrorMessage = 'Could not upload the Photo!';
            _this12.currentSelectedPhoto = undefined;
          });
        }
      }, {
        key: "dragEnd",
        value: function dragEnd(latitude, longitude) {
          console.log("latitude: ", latitude, "longitude: ", longitude);
          this.clinic.location.latitude = latitude;
          this.clinic.location.longitude = longitude;
        }
      }, {
        key: "zoomChange",
        value: function zoomChange(zoom) {
          console.log("zoom: ", zoom);
          this.clinic.location.zoom = zoom;
        }
      }]);

      return ClinicSettingsComponent;
    }();

    ClinicSettingsComponent.ɵfac = function ClinicSettingsComponent_Factory(t) {
      return new (t || ClinicSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]));
    };

    ClinicSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClinicSettingsComponent,
      selectors: [["app-clinic-settings"]],
      decls: 85,
      vars: 24,
      consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row", "form-row"], [1, "col-md-6"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "col-md-12"], ["rows", "5", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "col-md-4"], ["type", "number", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["class", "progress", 4, "ngIf"], [1, "upload-img"], [1, "change-photo-btn"], [1, "fa", "fa-upload"], ["type", "file", 1, "upload", 3, "change"], [1, "form-text", "text-muted"], [1, "upload-wrap"], ["class", "upload-images", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-5"], ["class", "col-md-12", 4, "ngIf"], [1, "submit-section", "submit-btn-bottom"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "click"], ["class", "alert alert-success", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], [1, "upload-images"], ["alt", "Upload Image", 3, "src"], [1, "btn", "btn-icon", "btn-danger", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"], [3, "latitude", "longitude", "zoom", "zoomChange"], [3, "latitude", "longitude", "markerDraggable", "dragEnd"], [1, "alert", "alert-success"]],
      template: function ClinicSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-doctor-side-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clinic Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Clinic Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.clinic.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Clinic Full Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.clinic.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.clinic.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.clinic.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_textarea_ngModelChange_35_listener($event) {
            return ctx.clinic.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Min Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.clinic.minPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Max Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_45_listener($event) {
            return ctx.clinic.maxPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Consulte Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.clinic.consultPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Clinic Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ClinicSettingsComponent_div_55_Template, 3, 5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Upload Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClinicSettingsComponent_Template_input_change_61_listener($event) {
            return ctx.uploadClinicPhoto($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "small", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Allowed JPG, GIF or PNG. Max size of 2MB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ClinicSettingsComponent_div_65_Template, 4, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.services = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "small", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Note : Type , to enter to multiple Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Specialisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_77_listener($event) {
            return ctx.specialities = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "small", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Note : Type , to enter to multiple Specializations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ClinicSettingsComponent_div_80_Template, 6, 6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicSettingsComponent_Template_button_click_82_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ClinicSettingsComponent_div_84_Template, 4, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.clinic == null ? null : ctx.clinic.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.address)("ngModel", ctx.clinic == null ? null : ctx.clinic.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.country)("ngModel", ctx.clinic == null ? null : ctx.clinic.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.city)("ngModel", ctx.clinic == null ? null : ctx.clinic.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.description)("ngModel", ctx.clinic == null ? null : ctx.clinic.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.minPrice)("ngModel", ctx.clinic == null ? null : ctx.clinic.minPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.maxPrice)("ngModel", ctx.clinic == null ? null : ctx.clinic.maxPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.consultPrice)("ngModel", ctx.clinic == null ? null : ctx.clinic.consultPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSelectedPhoto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinicPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.services)("ngModel", ctx.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.specialities)("ngModel", ctx.specialities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clinic == null ? null : ctx.clinic.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        }
      },
      directives: [_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMarker"]],
      styles: ["agm-map[_ngcontent-%COMP%] { \n    height: 400px;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kb2N0b3IvY2xpbmljLXNldHRpbmdzL2NsaW5pYy1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYSxFQUFFLHVCQUF1QjtBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2NsaW5pYy1zZXR0aW5ncy9jbGluaWMtc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAgeyBcbiAgICBoZWlnaHQ6IDQwMHB4OyAvKiBoZWlnaHQgaXMgcmVxdWlyZWQgKi8gXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clinic-settings',
          templateUrl: './clinic-settings.component.html',
          styleUrls: ['./clinic-settings.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-appointment/doctor-appointment.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-appointment/doctor-appointment.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: DoctorAppointmentComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorAppointmentDoctorAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorAppointmentComponent", function () {
      return DoctorAppointmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DoctorAppointmentComponent_h5_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r288.patient.email, "");
      }
    }

    function DoctorAppointmentComponent_h5_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r289.patient.phone, "");
      }
    }

    function DoctorAppointmentComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorAppointmentComponent_a_18_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r295);

          var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r294.acceptAppointment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accept ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorAppointmentComponent_a_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorAppointmentComponent_a_19_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297);

          var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r296.cancelAppointment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorAppointmentComponent_a_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r292.appointment.state, " ");
      }
    }

    function DoctorAppointmentComponent_a_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r293.appointment.state, " ");
      }
    }

    var DoctorAppointmentComponent =
    /*#__PURE__*/
    function () {
      function DoctorAppointmentComponent(appointmentService, patientService) {
        _classCallCheck(this, DoctorAppointmentComponent);

        this.appointmentService = appointmentService;
        this.patientService = patientService;
      }

      _createClass(DoctorAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.appointmentDate = new Date(this.appointment.appointmentDate);
          this.patientService.getById(this.appointment.patientId).subscribe(function (res) {
            _this13.patient = res;
          });
          this.patientService.getAvatar(this.appointment.patientId).subscribe(function (avatar) {
            var _a, _b;

            _this13.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
          });
        }
      }, {
        key: "acceptAppointment",
        value: function acceptAppointment() {
          var _this14 = this;

          this.appointment.state = "ACCEPTED";
          this.appointmentService.update(this.appointment).subscribe(function (res) {
            _this14.appointment = res;
          });
        }
      }, {
        key: "cancelAppointment",
        value: function cancelAppointment() {
          var _this15 = this;

          this.appointment.state = "CANCELED";
          this.appointmentService.update(this.appointment).subscribe(function (res) {
            _this15.appointment = res;
          });
        }
      }, {
        key: "viewAppoitment",
        value: function viewAppoitment() {// navigate to appoitment page;
        }
      }]);

      return DoctorAppointmentComponent;
    }();

    DoctorAppointmentComponent.ɵfac = function DoctorAppointmentComponent_Factory(t) {
      return new (t || DoctorAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]));
    };

    DoctorAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorAppointmentComponent,
      selectors: [["app-doctor-appointment"]],
      inputs: {
        appointment: "appointment"
      },
      decls: 22,
      vars: 19,
      consts: [[1, "appointment-list"], [1, "profile-info-widget"], [1, "booking-doc-img", 3, "routerLink"], ["alt", "Patient Image", 3, "src"], [1, "profile-det-info"], [3, "routerLink"], [1, "patient-details"], [1, "far", "fa-clock"], [4, "ngIf"], ["class", "mb-0", 4, "ngIf"], [1, "appointment-action"], ["class", "btn btn-sm bg-success-light", 3, "click", 4, "ngIf"], ["class", "btn btn-sm bg-danger-light", 3, "click", 4, "ngIf"], ["class", "btn btn-sm bg-success-light", 4, "ngIf"], ["class", "btn btn-sm  bg-danger-light", 4, "ngIf"], [1, "fas", "fa-envelope"], [1, "mb-0"], [1, "fas", "fa-phone"], [1, "btn", "btn-sm", "bg-success-light", 3, "click"], [1, "fas", "fa-check"], [1, "btn", "btn-sm", "bg-danger-light", 3, "click"], [1, "fas", "fa-times"], [1, "btn", "btn-sm", "bg-success-light"], [1, "btn", "btn-sm", "bg-danger-light"]],
      template: function DoctorAppointmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DoctorAppointmentComponent_h5_15_Template, 3, 1, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DoctorAppointmentComponent_h5_16_Template, 3, 1, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DoctorAppointmentComponent_a_18_Template, 3, 0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DoctorAppointmentComponent_a_19_Template, 3, 0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DoctorAppointmentComponent_a_20_Template, 3, 1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DoctorAppointmentComponent_a_21_Template, 3, 1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/patient/profile/", ctx.patient.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/patient/profile/", ctx.patient.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, ctx.patient.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, ctx.patient.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 16, ctx.appointmentDate, "full"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "ACCEPTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "CANCELED");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1hcHBvaW50bWVudC9kb2N0b3ItYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-appointment',
          templateUrl: './doctor-appointment.component.html',
          styleUrls: ['./doctor-appointment.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }];
      }, {
        appointment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-appointments/doctor-appointments.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-appointments/doctor-appointments.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: DoctorAppointmentsComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorAppointmentsDoctorAppointmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorAppointmentsComponent", function () {
      return DoctorAppointmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../doctor-appointment/doctor-appointment.component */
    "./src/app/components/pages/doctor/doctor-appointment/doctor-appointment.component.ts");

    function DoctorAppointmentsComponent_app_doctor_appointment_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor-appointment", 18);
      }

      if (rf & 2) {
        var appointment_r121 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appointment", appointment_r121);
      }
    }

    function DoctorAppointmentsComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You Have No appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DoctorAppointmentsComponent =
    /*#__PURE__*/
    function () {
      function DoctorAppointmentsComponent(autService, doctorService, appotmentService) {
        _classCallCheck(this, DoctorAppointmentsComponent);

        this.autService = autService;
        this.doctorService = doctorService;
        this.appotmentService = appotmentService;
      }

      _createClass(DoctorAppointmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.autService.getCurrentUser().subscribe(function (user) {
            _this16.doctorService.getById(user.id).subscribe(function (doctor) {
              _this16.doctor = doctor;
            });

            _this16.doctorService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this16.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });

            _this16.appotmentService.getAllDoctorAppoitments(user.id).subscribe(function (apps) {
              _this16.appointments = apps;
            });
          });
        }
      }]);

      return DoctorAppointmentsComponent;
    }();

    DoctorAppointmentsComponent.ɵfac = function DoctorAppointmentsComponent_Factory(t) {
      return new (t || DoctorAppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"]));
    };

    DoctorAppointmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorAppointmentsComponent,
      selectors: [["app-doctor-appointments"]],
      decls: 22,
      vars: 3,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "content"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "appointments"], [3, "appointment", 4, "ngFor", "ngForOf"], ["class", "appointment-list", 4, "ngIf"], [3, "appointment"], [1, "appointment-list"]],
      template: function DoctorAppointmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-doctor-side-bar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DoctorAppointmentsComponent_app_doctor_appointment_20_Template, 1, 1, "app-doctor-appointment", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DoctorAppointmentsComponent_div_21_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appointments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointments.length === 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_7__["DoctorAppointmentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1hcHBvaW50bWVudHMvZG9jdG9yLWFwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorAppointmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-appointments',
          templateUrl: './doctor-appointments.component.html',
          styleUrls: ['./doctor-appointments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-change-password/doctor-change-password.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-change-password/doctor-change-password.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: DoctorChangePasswordComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorChangePasswordDoctorChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorChangePasswordComponent", function () {
      return DoctorChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Password */
    "./src/app/models/Password.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DoctorChangePasswordComponent_div_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_30_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_30_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorChangePasswordComponent_div_30_div_1_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorChangePasswordComponent_div_30_div_2_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoctorChangePasswordComponent_div_30_div_3_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r90.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r90.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r90.errors.maxlength);
      }
    }

    function DoctorChangePasswordComponent_div_35_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_35_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_35_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorChangePasswordComponent_div_35_div_1_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorChangePasswordComponent_div_35_div_2_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoctorChangePasswordComponent_div_35_div_3_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r92.errors.required && !ctx_r93.successMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r92.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r92.errors.maxlength);
      }
    }

    function DoctorChangePasswordComponent_div_40_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_40_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_40_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorChangePasswordComponent_div_40_div_1_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorChangePasswordComponent_div_40_div_2_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoctorChangePasswordComponent_div_40_div_3_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r94.errors.required && !ctx_r95.successMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r94.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r94.errors.maxlength);
      }
    }

    function DoctorChangePasswordComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " new Password and Confirm Password must match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r97.errorMessage, " ");
      }
    }

    function DoctorChangePasswordComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r98.successMessage, " ");
      }
    }

    var DoctorChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function DoctorChangePasswordComponent(doctorSerive, authService) {
        _classCallCheck(this, DoctorChangePasswordComponent);

        this.doctorSerive = doctorSerive;
        this.authService = authService;
        this.isPasswordFailed = false;
        this.isPasswordSuccess = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.passwordMatch = true;
        this.form = {};
      }

      _createClass(DoctorChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this17.doctorSerive.getById(user.id).subscribe(function (doc) {
              _this17.doctor = doc;
            });

            _this17.doctorSerive.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this17.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this18 = this;

          if (this.form.newPassword !== this.form.confirmPassword) {
            this.passwordMatch = false;
            console.log("password does not match");
            return;
          }

          var password = new src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__["Password"](this.form.oldPassword, this.form.newPassword);
          this.doctorSerive.updatePassword(this.doctor.id, password).subscribe(function (message) {
            console.log("password success: ", JSON.stringify(message));
            _this18.isPasswordSuccess = true;
            _this18.successMessage = message.message;
            setTimeout(function () {
              return _this18.successMessage = '';
            }, 2000);
          }, function (err) {
            _this18.isPasswordFailed = true;
            console.log("password failed: ", JSON.stringify(err));
            _this18.errorMessage = err.error.message;
          });
        }
      }]);

      return DoctorChangePasswordComponent;
    }();

    DoctorChangePasswordComponent.ɵfac = function DoctorChangePasswordComponent_Factory(t) {
      return new (t || DoctorChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    DoctorChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorChangePasswordComponent,
      selectors: [["app-doctor-change-password"]],
      decls: 47,
      vars: 10,
      consts: [[1, "main-wrapper"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "content"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "col-md-12", "col-lg-6"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["type", "password", "name", "oldPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["oldPassword", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "password", "name", "newPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]],
      template: function DoctorChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "editPassword");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-doctor-side-bar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DoctorChangePasswordComponent_Template_form_ngSubmit_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);

            var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return _r89.form.valid && ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorChangePasswordComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.form.oldPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DoctorChangePasswordComponent_div_30_Template, 4, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorChangePasswordComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.form.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DoctorChangePasswordComponent_div_35_Template, 4, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorChangePasswordComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.form.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DoctorChangePasswordComponent_div_40_Template, 4, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DoctorChangePasswordComponent_div_41_Template, 2, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DoctorChangePasswordComponent_div_42_Template, 4, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DoctorChangePasswordComponent_div_43_Template, 5, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.oldPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r89.submitted && _r90.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r89.submitted && _r92.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r89.submitted && _r94.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordMatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r89.submitted && ctx.isPasswordFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r89.submitted && ctx.successMessage);
        }
      },
      directives: [_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1jaGFuZ2UtcGFzc3dvcmQvZG9jdG9yLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-change-password',
          templateUrl: './doctor-change-password.component.html',
          styleUrls: ['./doctor-change-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: DoctorDashBoardComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorDashBoardDoctorDashBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorDashBoardComponent", function () {
      return DoctorDashBoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DoctorDashBoardComponent =
    /*#__PURE__*/
    function () {
      function DoctorDashBoardComponent() {
        _classCallCheck(this, DoctorDashBoardComponent);
      }

      _createClass(DoctorDashBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorDashBoardComponent;
    }();

    DoctorDashBoardComponent.ɵfac = function DoctorDashBoardComponent_Factory(t) {
      return new (t || DoctorDashBoardComponent)();
    };

    DoctorDashBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorDashBoardComponent,
      selectors: [["app-doctor-dash-board"]],
      decls: 2,
      vars: 0,
      template: function DoctorDashBoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "doctor-dash-board works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1kYXNoLWJvYXJkL2RvY3Rvci1kYXNoLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorDashBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-dash-board',
          templateUrl: './doctor-dash-board.component.html',
          styleUrls: ['./doctor-dash-board.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: DoctorProfileSettingsComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorProfileSettingsDoctorProfileSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfileSettingsComponent", function () {
      return DoctorProfileSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DoctorProfileSettingsComponent_div_2_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r79.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorProfileSettingsComponent_div_2_img_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    function DoctorProfileSettingsComponent_div_2_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r81.uploadProgress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r81.uploadProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r81.uploadProgress, "% ");
      }
    }

    function DoctorProfileSettingsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-doctor-side-bar", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DoctorProfileSettingsComponent_div_2_img_13_Template, 1, 1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileSettingsComponent_div_2_img_14_Template, 1, 0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DoctorProfileSettingsComponent_div_2_div_16_Template, 3, 5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Upload Photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DoctorProfileSettingsComponent_div_2_Template_input_change_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.uploadAvatar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Allowed JPG, GIF or PNG. Max size of 2MB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Username ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_2_Template_input_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.doctor.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_2_Template_input_ngModelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.doctor.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Speciality");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_2_Template_input_ngModelChange_56_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.doctor.speciality = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "About Me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Biography");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "textarea", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_2_Template_textarea_ngModelChange_64_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.doctor.aboutMe = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileSettingsComponent_div_2_Template_button_click_66_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Save Changes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx_r78.avatar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.avatar.length > 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.avatar.length < 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.currentSelectedAvatar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r78.doctor.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r78.doctor.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r78.doctor.firstname)("ngModel", ctx_r78.doctor.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r78.doctor.lastname)("ngModel", ctx_r78.doctor.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r78.doctor.speciality)("ngModel", ctx_r78.doctor.speciality);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r78.doctor.aboutMe)("ngModel", ctx_r78.doctor.aboutMe);
      }
    }

    var DoctorProfileSettingsComponent =
    /*#__PURE__*/
    function () {
      function DoctorProfileSettingsComponent(doctorService, authService) {
        _classCallCheck(this, DoctorProfileSettingsComponent);

        this.doctorService = doctorService;
        this.authService = authService;
      }

      _createClass(DoctorProfileSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            _this19.doctorService.getById(res.id).subscribe(function (doc) {
              _this19.doctor = doc;
            });

            _this19.doctorService.getAvatar(res.id).subscribe(function (avatar) {
              var _a, _b;

              _this19.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this20 = this;

          console.log("clinic new name: ", JSON.stringify(this.doctor));
          this.doctorService.updateDoctor(this.doctor).subscribe(function (doc) {
            _this20.doctor = doc;
            window.location.reload();
          });
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(event) {
          var _this21 = this;

          this.currentSelectedAvatar = event.target.files.item(0);
          this.doctorService.uploadAvatar(this.doctor.id, this.currentSelectedAvatar).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
              _this21.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this21.doctorService.getAvatar(_this21.doctor.id).subscribe(function (avatar) {
                _this21.avatar = 'data:image/jpeg;base64,' + avatar.image.data;
                _this21.uploadProgress = 0;
                _this21.currentSelectedAvatar = undefined;
              });
            }
          }, function (err) {
            _this21.uploadProgress = 0;
            _this21.uploadErrorMessage = 'Could not upload the Photo!';
            _this21.currentSelectedAvatar = undefined;
          });
        }
      }]);

      return DoctorProfileSettingsComponent;
    }();

    DoctorProfileSettingsComponent.ɵfac = function DoctorProfileSettingsComponent_Factory(t) {
      return new (t || DoctorProfileSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    DoctorProfileSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorProfileSettingsComponent,
      selectors: [["app-doctor-profile-settings"]],
      decls: 3,
      vars: 1,
      consts: [[1, "content"], [1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row", "form-row"], [1, "col-md-12"], [1, "form-group"], [1, "change-avatar"], [1, "profile-img"], ["alt", "Doctor Image", 3, "src", 4, "ngIf"], ["src", "assets/img/doctors/default-doctor.png", "alt", "Doctor Image", 4, "ngIf"], [1, "upload-img"], ["class", "progress", 4, "ngIf"], [1, "change-photo-btn"], [1, "fa", "fa-upload"], ["type", "file", 1, "upload", 3, "change"], [1, "form-text", "text-muted"], [1, "col-md-6"], [1, "text-danger"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["type", "email", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "form-group", "mb-0"], ["rows", "5", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "submit-section", "submit-btn-bottom"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "click"], ["alt", "Doctor Image", 3, "src"], ["src", "assets/img/doctors/default-doctor.png", "alt", "Doctor Image"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"]],
      template: function DoctorProfileSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorProfileSettingsComponent_div_2_Template, 68, 14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctor);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1wcm9maWxlLXNldHRpbmdzL2RvY3Rvci1wcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorProfileSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-profile-settings',
          templateUrl: './doctor-profile-settings.component.html',
          styleUrls: ['./doctor-profile-settings.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-review/doctor-review.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-review/doctor-review.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DoctorReviewComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorReviewDoctorReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorReviewComponent", function () {
      return DoctorReviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");

    function DoctorReviewComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r298.patient.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r298.patient.lastname), "");
      }
    }

    var DoctorReviewComponent =
    /*#__PURE__*/
    function () {
      function DoctorReviewComponent(patientService) {
        _classCallCheck(this, DoctorReviewComponent);

        this.patientService = patientService;
      }

      _createClass(DoctorReviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.patientService.getById(this.review.patientId).subscribe(function (patient) {
            _this22.patient = patient;
          });
          this.patientService.getAvatar(this.review.patientId).subscribe(function (avatar) {
            _this22.patientAvatar = 'data:image/jpeg;base64,' + avatar.image.data;
          });
        }
      }]);

      return DoctorReviewComponent;
    }();

    DoctorReviewComponent.ɵfac = function DoctorReviewComponent_Factory(t) {
      return new (t || DoctorReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"]));
    };

    DoctorReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorReviewComponent,
      selectors: [["app-doctor-review"]],
      inputs: {
        review: "review"
      },
      decls: 16,
      vars: 5,
      consts: [[2, "list-style", "none"], [1, "comment"], [1, "comment-body"], [1, "row", "pl-2"], [1, "col-4"], [1, "row"], ["alt", "Patient Image", 1, "avatar", "avatar-sm", "rounded-circle", 3, "src"], [1, "row", "mt-2"], [1, "meta-data"], ["class", "comment-author", 4, "ngIf"], [3, "ratedCount", "readonly"], [1, "col-8"], [1, "comment-content"], [1, "comment-author"]],
      template: function DoctorReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DoctorReviewComponent_span_10_Template, 4, 6, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-rating-star", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.patientAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratedCount", ctx.review == null ? null : ctx.review.rating)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.review == null ? null : ctx.review.content, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_3__["RatingStarComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1yZXZpZXcvZG9jdG9yLXJldmlldy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-review',
          templateUrl: './doctor-review.component.html',
          styleUrls: ['./doctor-review.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"]
        }];
      }, {
        review: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-reviews/doctor-reviews.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-reviews/doctor-reviews.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DoctorReviewsComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorReviewsDoctorReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorReviewsComponent", function () {
      return DoctorReviewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/review.service */
    "./src/app/services/review.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../doctor-review/doctor-review.component */
    "./src/app/components/pages/doctor/doctor-review/doctor-review.component.ts");

    function DoctorReviewsComponent_app_doctor_review_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor-review", 22);
      }

      if (rf & 2) {
        var review_r124 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r124);
      }
    }

    function DoctorReviewsComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You Have No Reviews");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DoctorReviewsComponent =
    /*#__PURE__*/
    function () {
      function DoctorReviewsComponent(authService, reviewService, doctorService) {
        var _this23 = this;

        _classCallCheck(this, DoctorReviewsComponent);

        this.authService = authService;
        this.reviewService = reviewService;
        this.doctorService = doctorService;
        this.authService.getCurrentUser().subscribe(function (user) {
          console.log("user ", JSON.stringify(user));

          _this23.doctorService.getById(user.id).subscribe(function (doc) {
            _this23.doctor = doc;
          });

          _this23.doctorService.getAvatar(user.id).subscribe(function (avatar) {
            var _a, _b;

            _this23.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
          });

          _this23.reviewService.getReviews(user.id).subscribe(function (reviews) {
            _this23.reviews = reviews;
          });
        });
      }

      _createClass(DoctorReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorReviewsComponent;
    }();

    DoctorReviewsComponent.ɵfac = function DoctorReviewsComponent_Factory(t) {
      return new (t || DoctorReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"]));
    };

    DoctorReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorReviewsComponent,
      selectors: [["app-doctor-reviews"]],
      decls: 27,
      vars: 3,
      consts: [[1, "main-wrapper"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "content"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "col-md-12"], [1, "comments-list"], [3, "review", 4, "ngFor", "ngForOf"], ["style", "list-style: none", "class", "appointments", 4, "ngIf"], [3, "review"], [1, "appointments", 2, "list-style", "none"]],
      template: function DoctorReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "editPassword");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-doctor-side-bar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DoctorReviewsComponent_app_doctor_review_25_Template, 1, 1, "app-doctor-review", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DoctorReviewsComponent_li_26_Template, 3, 0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews.length === 0);
        }
      },
      directives: [_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_6__["DoctorReviewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1yZXZpZXdzL2RvY3Rvci1yZXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-reviews',
          templateUrl: './doctor-reviews.component.html',
          styleUrls: ['./doctor-reviews.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DoctorSideBarComponent */

  /***/
  function srcAppComponentsPagesDoctorDoctorSideBarDoctorSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorSideBarComponent", function () {
      return DoctorSideBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DoctorSideBarComponent_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
      }

      if (rf & 2) {
        var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r284.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorSideBarComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
      }
    }

    var DoctorSideBarComponent =
    /*#__PURE__*/
    function () {
      // avatar:any;
      function DoctorSideBarComponent(authService, doctorService, tokenStorageService, router) {
        _classCallCheck(this, DoctorSideBarComponent);

        this.authService = authService;
        this.doctorService = doctorService;
        this.tokenStorageService = tokenStorageService;
        this.router = router; // @Input() doctor:Doctor;

        this.showDefaultAvatar = false;
      }

      _createClass(DoctorSideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this24.doctorService.getById(user.id).subscribe(function (doc) {
              _this24.doctor = doc;
              console.log("print avatar : ", _this24.avatar); // if (!this.avatar) {
              //   this.showDefaultAvatar = true;
              //   console.log("show default");
              // } else {
              //   this.showDefaultAvatar = false;
              // }
            }); // this.doctorService.getAvatar(user.id).subscribe(avatar => {
            //   this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
            // // });
            // if (!this.avatar) {
            //   this.showDefaultAvatar = true;
            //   console.log("show default");
            // } else {
            //   this.showDefaultAvatar = false;
            // }

          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut(); //window.location.reload();

          this.router.navigate(["home"]).then(function () {
            window.location.reload();
          });
        }
      }]);

      return DoctorSideBarComponent;
    }();

    DoctorSideBarComponent.ɵfac = function DoctorSideBarComponent_Factory(t) {
      return new (t || DoctorSideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    DoctorSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorSideBarComponent,
      selectors: [["app-doctor-side-bar"]],
      inputs: {
        avatar: "avatar"
      },
      decls: 48,
      vars: 11,
      consts: [[1, "profile-sidebar"], [1, "widget-profile", "pro-widget-content"], [1, "profile-info-widget"], ["href", "#", 1, "booking-doc-img"], ["alt", "Doctor Image", 3, "src", 4, "ngIf"], ["src", "assets/img/doctors/default-doctor.png", "alt", "Doctor Image", 4, "ngIf"], [1, "profile-det-info"], [1, "patient-details"], [1, "mb-0"], [1, "dashboard-widget"], [1, "dashboard-menu"], ["routerLinkActive", "active"], ["routerLink", "/doctor/appointments"], [1, "fas", "fa-calendar-check"], ["routerLink", "/doctor/reviews"], [1, "fas", "fa-star"], ["routerLink", "/doctor/profile-settings"], [1, "fas", "fa-user-cog"], ["routerLink", "/doctor/clinic-settings"], ["routerLink", "/doctor/change-password"], [1, "fas", "fa-lock"], [3, "click"], ["href", "#"], [1, "fas", "fa-sign-out-alt"], ["alt", "Doctor Image", 3, "src"], ["src", "assets/img/doctors/default-doctor.png", "alt", "Doctor Image"]],
      template: function DoctorSideBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DoctorSideBarComponent_img_4_Template, 1, 1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoctorSideBarComponent_img_5_Template, 1, 0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Clinic Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorSideBarComponent_Template_li_click_43_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatar.length > 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatar.length < 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.doctor == null ? null : ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx.doctor == null ? null : ctx.doctor.speciality));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL2RvY3Rvci1zaWRlLWJhci9kb2N0b3Itc2lkZS1iYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-side-bar',
          templateUrl: './doctor-side-bar.component.html',
          styleUrls: ['./doctor-side-bar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/login/login.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/pages/doctor/login/login.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsPagesDoctorLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_form_14_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r25.errorMessage, " ");
      }
    }

    function LoginComponent_form_14_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_14_div_15_div_1_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_14_div_15_div_2_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.errors.minlength);
      }
    }

    function LoginComponent_form_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_14_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r24.form.valid && ctx_r32.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_14_div_3_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_14_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_form_14_div_9_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_14_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_form_14_div_15_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don\u2019t have an account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.submitted && ctx_r23.isLoginFailed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.submitted && _r26.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.submitted && _r28.invalid);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, tokenStorage, router, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.retUrl = "doctor/profile";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this25.retUrl = params.get('retUrl');
            console.log('LoginComponent/ngOnInit ' + _this25.retUrl);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this26 = this;

          this.authService.doctorLogin(this.form).subscribe(function (user) {
            _this26.tokenStorage.saveToken(user.accessToken);

            _this26.tokenStorage.saveUser(user);

            _this26.tokenStorage.saveUserType(user.userType);

            _this26.isLoginFailed = false;
            _this26.isLoggedIn = true;
            _this26.roles = _this26.tokenStorage.getUser().roles;

            _this26.authService.getLoggedInUser.emit(user);

            console.log("login successful");
            console.log(_this26.tokenStorage.getUser());
            console.log('return to ' + _this26.retUrl);

            if (_this26.retUrl != null) {
              _this26.router.navigate([_this26.retUrl]);
            } else {
              _this26.router.navigate(['doctor/appointments']);
            }
          }, function (err) {
            _this26.errorMessage = err.error.message;
            _this26.isLoginFailed = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-doctor-login"]],
      decls: 15,
      vars: 1,
      consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "Doccure Login", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "form-focus"], ["name", "email", "required", "", "type", "email", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "focus-label"], ["name", "password", "required", "", "minlength", "6", "type", "password", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "/doctor/forgot-password", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", "login-btn"], [1, "text-center", "dont-have"], ["routerLink", "/doctor/signup"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AirDoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_form_14_Template, 25, 5, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".content[_ngcontent-%COMP%]{\n    height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9kb2N0b3IvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2RvY3Rvci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/profile/profile.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/pages/doctor/profile/profile.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsPagesDoctorProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../doctor-over-view/doctor-over-view.component */
    "./src/app/components/doctor-over-view/doctor-over-view.component.ts");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");
    /* harmony import */


    var _clinic_clinic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../clinic/clinic.component */
    "./src/app/components/clinic/clinic.component.ts");
    /* harmony import */


    var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../reviews/reviews.component */
    "./src/app/components/reviews/reviews.component.ts");

    function ProfileComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }
    }

    function ProfileComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rating-star", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratedCount", ctx_r16.doctor.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r16.doctor == null ? null : ctx_r16.doctor.averageRating, ")");
      }
    }

    function ProfileComponent_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r20);
      }
    }

    function ProfileComponent_app_clinic_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinic", 44);
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clinic", ctx_r18.clinic)("doctor", ctx_r18.doctor);
      }
    }

    function ProfileComponent_app_reviews_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reviews", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ProfileComponent_app_reviews_64_Template_app_reviews_refresh_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.refresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("doctor", ctx_r19.doctor)("isPatient", ctx_r19.isPatient);
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(route, doctorService, tokenStorage) {
        _classCallCheck(this, ProfileComponent);

        this.route = route;
        this.doctorService = doctorService;
        this.tokenStorage = tokenStorage;
        this.showDefaultAvatar = false;
        this.id = "";
        this.isPatient = false;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.route.params.subscribe(function (params) {
            _this27.id = params['id'];
            console.log("Doctor id" + _this27.id); //Get Doctor

            _this27.doctorService.getById(_this27.id).subscribe(function (res) {
              _this27.doctor = res;
              console.log("rating: ", _this27.doctor.rating);
            });

            _this27.doctorService.getAvatar(_this27.id).subscribe(function (res) {
              var _a, _b, _c, _d;

              _this27.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = res) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
              console.log("print avatar : ", _this27.avatar);

              if (((_d = (_c = res) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.data) === undefined) {
                _this27.showDefaultAvatar = true;
                console.log("show default");
              }
            });

            _this27.doctorService.getClinic(_this27.id).subscribe(function (res) {
              _this27.clinic = res;
              console.log("clinic from Profile", _this27.clinic);
            });

            _this27.doctorService.getClinicPhotos(_this27.id).subscribe(function (res) {
              //Convert image to base64 and return it;
              _this27.clinicPhotos = res.map(function (photo) {
                return 'data:image/jpeg;base64,' + photo.image.data;
              });
            });

            _this27.isPatient = _this27.tokenStorage.getUserType() == "PATIENT";
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this28 = this;

          this.doctorService.getById(this.doctor.id).subscribe(function (res) {
            _this28.doctor = res;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 65,
      vars: 34,
      consts: [[1, "content"], [1, "container"], [1, "card"], [1, "card-body"], [1, "doctor-widget"], [1, "doc-info-left"], [1, "doctor-img"], ["class", "img-fluid", "alt", "Doctor Image", 3, "src", 4, "ngIf"], ["src", "assets/img/doctors/default-doctor.png", "class", "img-fluid", "alt", "Doctor Image", 4, "ngIf"], [1, "doc-info-cont"], [1, "doc-name"], [1, "doc-speciality"], ["class", "rating", 4, "ngIf"], [1, "clinic-details"], [1, "doc-location"], [1, "fas", "fa-map-marker-alt"], [1, "clinic-services"], [4, "ngFor", "ngForOf"], [1, "doc-info-right"], [1, "clini-infos"], [1, "far", "fa-comment"], [1, "far", "fa-money-bill-alt"], [1, "clinic-booking"], [1, "apt-btn", 3, "routerLink"], [1, "card-body", "pt-0"], [1, "user-tabs", "mb-4"], [1, "nav", "nav-tabs", "nav-tabs-bottom", "nav-justified"], [1, "nav-item"], ["href", "#doc_overview", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#doc_clinic", "data-toggle", "tab", 1, "nav-link"], ["href", "#doc_reviews", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", "pt-0"], ["role", "tabpanel", "id", "doc_overview", 1, "tab-pane", "fade", "show", "active"], [3, "doctor", "clinic"], ["role", "tabpanel", "id", "doc_clinic", 1, "tab-pane", "fade"], [1, "location-list"], [3, "clinic", "doctor", 4, "ngIf"], ["role", "tabpanel", "id", "doc_reviews", 1, "tab-pane", "fade"], [3, "doctor", "isPatient", "refresh", 4, "ngIf"], ["alt", "Doctor Image", 1, "img-fluid", 3, "src"], ["src", "assets/img/doctors/default-doctor.png", "alt", "Doctor Image", 1, "img-fluid"], [1, "rating"], [3, "ratedCount"], [1, "d-inline-block", "average-rating"], [3, "clinic", "doctor"], [3, "doctor", "isPatient", "refresh"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_img_7_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_img_8_Template, 1, 0, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_div_17_Template, 4, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_span_25_Template, 2, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Book Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nav", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Clinic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-over-view", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ProfileComponent_app_clinic_62_Template, 1, 2, "app-clinic", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ProfileComponent_app_reviews_64_Template, 1, 2, "app-reviews", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 18, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx.doctor == null ? null : ctx.doctor.lastname), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 22, ctx.doctor == null ? null : ctx.doctor.speciality));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctor == null ? null : ctx.doctor.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 24, ctx.clinic == null ? null : ctx.clinic.city), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 26, ctx.clinic == null ? null : ctx.clinic.country), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.doctor == null ? null : ctx.doctor.averageRating, " Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 28, ctx.clinic == null ? null : ctx.clinic.city), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 30, ctx.clinic == null ? null : ctx.clinic.country), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 32, ctx.clinic == null ? null : ctx.clinic.maxPrice), " per hour ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/booking/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("doctor", ctx.doctor)("clinic", ctx.clinic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clinic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctor);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_5__["DoctorOverViewComponent"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_6__["RatingStarComponent"], _clinic_clinic_component__WEBPACK_IMPORTED_MODULE_7__["ClinicComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/doctor/signup/signup.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/pages/doctor/signup/signup.component.ts ***!
    \********************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsPagesDoctorSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SignupComponent_form_14_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_7_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_7_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_7_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_13_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_13_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_13_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_13_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r41.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r41.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_19_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_19_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_19_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_19_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_25_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_25_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_25_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_25_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r45.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r45.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r45.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at least 10 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_31_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at most 50 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_31_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_31_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_31_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_37_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_37_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_37_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_37_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r51.errorMessage, " ");
      }
    }

    function SignupComponent_form_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_14_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r38.form.valid && ctx_r70.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.form.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_form_14_div_7_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.form.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_form_14_div_13_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.form.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_form_14_div_19_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.form.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_form_14_div_25_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_form_14_div_31_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignupComponent_form_14_div_37_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Already have an account?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignupComponent_form_14_div_43_Template, 4, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.form.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r38.submitted && _r39.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.form.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r38.submitted && _r41.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.form.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r38.submitted && _r43.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.form.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r38.submitted && _r45.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r38.submitted && _r47.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r38.submitted && _r49.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r38.submitted && ctx_r36.isSignUpFailed);
      }
    }

    function SignupComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(router, authService) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this29 = this;

          this.authService.doctorRegister(this.form).subscribe(function (data) {
            console.log(data);
            _this29.isSuccessful = true;
            _this29.isSignUpFailed = false;

            _this29.router.navigate(["doctor/login"]);
          }, function (err) {
            _this29.errorMessage = err.error.message;
            _this29.isSignUpFailed = true;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-doctor-signup"]],
      decls: 16,
      vars: 2,
      consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "Login Banner", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["routerLink", "patient/signup"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "form-focus"], ["type", "text", "name", "firstname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "text", "name", "lastname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "tel", "name", "phone", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "email", "name", "email", "required", "", "minlength", "10", "maxlength", "50", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "/doctor/login", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", "login-btn"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Doctor Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Not a Doctor?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_form_14_Template, 44, 13, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZG9jdG9yL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/home/home.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/pages/home/home.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search(city, query) {
          console.log("city: " + city, "query : " + query);
          this.router.navigate(["search"], {
            queryParams: {
              "city": city,
              "query": query
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 24,
      vars: 0,
      consts: [[1, "section", "section-search"], [1, "container-fluid"], [1, "banner-wrapper"], [1, "banner-header", "text-center"], [1, "search-box"], ["action", "templateshub.net"], [1, "form-group", "search-location"], ["type", "text", "placeholder", "Search City", 1, "form-control"], ["city", ""], [1, "form-text"], [1, "form-group", "search-info"], ["type", "text", "placeholder", "Search Doctors, Clinics, Hospitals, Diseases Etc", 1, "form-control"], ["query", ""], ["type", "submit", 1, "btn", "btn-primary", "search-btn", 3, "click"], [1, "fas", "fa-search"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search Doctor, Make an Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Discover the best doctors, clinic & hospital the city nearest to you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Based on your City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ex : Dental or Sugar Check up etc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            return ctx.search(_r11.value, _r12.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: [".section-search[_ngcontent-%COMP%] {\n    height: 90vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDkwdmg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/patient/change-password/change-password.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/pages/patient/change-password/change-password.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppComponentsPagesPatientChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Password */
    "./src/app/models/Password.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../patient-side-bar/patient-side-bar.component */
    "./src/app/components/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChangePasswordComponent_div_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_30_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_30_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_30_div_1_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_30_div_2_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_30_div_3_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.errors.maxlength);
      }
    }

    function ChangePasswordComponent_div_35_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_35_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_35_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_35_div_1_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_35_div_2_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_35_div_3_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r208.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r208.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r208.errors.maxlength);
      }
    }

    function ChangePasswordComponent_div_40_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_40_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_40_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_40_div_1_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_40_div_2_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_40_div_3_Template, 2, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r210.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r210.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r210.errors.maxlength);
      }
    }

    function ChangePasswordComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " new Password and Confirm Password must match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r213.errorMessage, " ");
      }
    }

    function ChangePasswordComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r214.successMessage, " ");
      }
    }

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(patientService, authService) {
        _classCallCheck(this, ChangePasswordComponent);

        this.patientService = patientService;
        this.authService = authService;
        this.isPasswordFailed = false;
        this.isPasswordSuccess = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.passwordMatch = true;
        this.form = {};
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this30.patientService.getById(user.id).subscribe(function (patient) {
              _this30.patient = patient;
            });

            _this30.patientService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this30.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this31 = this;

          if (this.form.newPassword !== this.form.confirmPassword) {
            this.passwordMatch = false;
            console.log("password does not match");
            return;
          }

          var password = new src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__["Password"](this.form.oldPassword, this.form.newPassword);
          this.patientService.updatePassword(this.patient.id, password).subscribe(function (message) {
            console.log("password success: ", JSON.stringify(message));
            _this31.isPasswordSuccess = true;
            _this31.successMessage = message.message;
            setTimeout(function () {
              return _this31.successMessage = '';
            }, 2000);
          }, function (err) {
            _this31.isPasswordFailed = true;
            console.log("password failed: ", JSON.stringify(err));
            _this31.errorMessage = err.error.message;
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 47,
      vars: 10,
      consts: [[1, "main-wrapper"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "content"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "col-md-12", "col-lg-6"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["type", "password", "name", "oldPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["oldPassword", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "password", "name", "newPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "editPassword");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-patient-side-bar", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224);

            var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return _r205.form.valid && ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.form.oldPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ChangePasswordComponent_div_30_Template, 4, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.form.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ChangePasswordComponent_div_35_Template, 4, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.form.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ChangePasswordComponent_div_40_Template, 4, 3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ChangePasswordComponent_div_41_Template, 2, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ChangePasswordComponent_div_42_Template, 4, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ChangePasswordComponent_div_43_Template, 5, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.oldPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r205.submitted && _r206.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r205.submitted && _r208.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r205.submitted && _r210.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordMatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r205.submitted && ctx.isPasswordFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r205.submitted && ctx.successMessage);
        }
      },
      directives: [_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["PatientSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGF0aWVudC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-password',
          templateUrl: './change-password.component.html',
          styleUrls: ['./change-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/patient/login/login.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/pages/patient/login/login.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsPagesPatientLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_form_14_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r127.errorMessage, " ");
      }
    }

    function LoginComponent_form_14_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_14_div_15_div_1_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_14_div_15_div_2_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r130.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r130.errors.minlength);
      }
    }

    function LoginComponent_form_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_14_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135);

          var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r126.form.valid && ctx_r134.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_14_div_3_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_14_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135);

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r136.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_form_14_div_9_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_14_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r137.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_form_14_div_15_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don\u2019t have an account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r126.submitted && ctx_r125.isLoginFailed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r126.submitted && _r128.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r126.submitted && _r130.invalid);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, tokenStorage, router, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.retUrl = "patient/profile";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this32.retUrl = params.get('retUrl');
            console.log('LoginComponent/ngOnInit ' + _this32.retUrl);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this33 = this;

          this.authService.patientLogin(this.form).subscribe(function (user) {
            _this33.tokenStorage.saveToken(user.accessToken);

            _this33.tokenStorage.saveUser(user);

            _this33.tokenStorage.saveUserType(user.userType);

            _this33.isLoginFailed = false;
            _this33.isLoggedIn = true;
            _this33.roles = _this33.tokenStorage.getUser().roles;

            _this33.authService.getLoggedInUser.emit(user);

            console.log("login successful");
            console.log(_this33.tokenStorage.getUser());
            console.log('return to ' + _this33.retUrl);

            if (_this33.retUrl != null) {
              _this33.router.navigate([_this33.retUrl]);
            } else {
              _this33.router.navigate(['patient/appointments']);
            }
          }, function (err) {
            _this33.errorMessage = err.error.message;
            _this33.isLoginFailed = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-patient-login"]],
      decls: 15,
      vars: 1,
      consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "Doccure Login", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "form-focus"], ["name", "email", "required", "", "type", "email", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "focus-label"], ["name", "password", "required", "", "minlength", "6", "type", "password", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "/doctor/forgot-password", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", "login-btn"], [1, "text-center", "dont-have"], ["routerLink", "/patient/signup"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AirDoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_form_14_Template, 25, 5, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGF0aWVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/patient/patient-appointment/patient-appointment.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/pages/patient/patient-appointment/patient-appointment.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PatientAppointmentComponent */

  /***/
  function srcAppComponentsPagesPatientPatientAppointmentPatientAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAppointmentComponent", function () {
      return PatientAppointmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PatientAppointmentComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r272.appointment.state));
      }
    }

    function PatientAppointmentComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r273.appointment.state));
      }
    }

    var PatientAppointmentComponent =
    /*#__PURE__*/
    function () {
      function PatientAppointmentComponent(doctorSerivce) {
        _classCallCheck(this, PatientAppointmentComponent);

        this.doctorSerivce = doctorSerivce;
      }

      _createClass(PatientAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.appointmentDate = new Date(this.appointment.appointmentDate);
          this.bookingDate = new Date(this.appointment.bookingDate);
          this.doctorSerivce.getById(this.appointment.doctorId).subscribe(function (doc) {
            _this34.doctor = doc;
          });
          this.doctorSerivce.getAvatar(this.appointment.doctorId).subscribe(function (avatar) {
            _this34.doctorAvatar = avatar;
          });
        }
      }]);

      return PatientAppointmentComponent;
    }();

    PatientAppointmentComponent.ɵfac = function PatientAppointmentComponent_Factory(t) {
      return new (t || PatientAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]));
    };

    PatientAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientAppointmentComponent,
      selectors: [["app-patient-appointment"]],
      inputs: {
        appointment: "appointment"
      },
      decls: 20,
      vars: 22,
      consts: [[1, "list-group-item"], [1, "row"], [1, "col-sm"], [1, "avatar"], ["alt", "Doctor Image", 1, "avatar-img", "rounded-circle", 3, "src"], ["class", "col-sm", 4, "ngIf"], [1, "badge", "badge-pill", "bg-success-light"], [1, "badge", "badge-pill", "bg-danger-light"]],
      template: function PatientAppointmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PatientAppointmentComponent_div_18_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PatientAppointmentComponent_div_19_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.doctorAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 12, ctx.appointment.description, 0, 30));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 16, ctx.appointmentDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 19, ctx.bookingDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "ACCEPTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "CANCELED");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGF0aWVudC9wYXRpZW50LWFwcG9pbnRtZW50L3BhdGllbnQtYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-appointment',
          templateUrl: './patient-appointment.component.html',
          styleUrls: ['./patient-appointment.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }];
      }, {
        appointment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/patient/patient-appointments/patient-appointments.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/pages/patient/patient-appointments/patient-appointments.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: PatientAppointmentsComponent */

  /***/
  function srcAppComponentsPagesPatientPatientAppointmentsPatientAppointmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAppointmentsComponent", function () {
      return PatientAppointmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../patient-side-bar/patient-side-bar.component */
    "./src/app/components/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../patient-appointment/patient-appointment.component */
    "./src/app/components/pages/patient/patient-appointment/patient-appointment.component.ts");

    function PatientAppointmentsComponent_app_patient_appointment_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-patient-appointment", 20);
      }

      if (rf & 2) {
        var appointment_r199 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appointment", appointment_r199);
      }
    }

    function PatientAppointmentsComponent_li_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You Have No appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PatientAppointmentsComponent =
    /*#__PURE__*/
    function () {
      function PatientAppointmentsComponent(appointmentService, authService, patientService) {
        _classCallCheck(this, PatientAppointmentsComponent);

        this.appointmentService = appointmentService;
        this.authService = authService;
        this.patientService = patientService;
      }

      _createClass(PatientAppointmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this35.patientService.getById(user.id).subscribe(function (patient) {
              _this35.patient = patient;
            });

            _this35.patientService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this35.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });

            _this35.appointmentService.getAllPatientAppoitments(user.id).subscribe(function (apps) {
              _this35.appointments = apps;
              console.log("appointments: ", JSON.stringify(apps));
            });
          });
        }
      }]);

      return PatientAppointmentsComponent;
    }();

    PatientAppointmentsComponent.ɵfac = function PatientAppointmentsComponent_Factory(t) {
      return new (t || PatientAppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]));
    };

    PatientAppointmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientAppointmentsComponent,
      selectors: [["app-patient-appointments"]],
      decls: 34,
      vars: 3,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index-2.html"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "content"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "list-group"], [1, "list-group-item"], [1, "col-sm"], [3, "appointment", 4, "ngFor", "ngForOf"], ["class", "list-group-item", 4, "ngIf"], [3, "appointment"]],
      template: function PatientAppointmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-patient-side-bar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Doctor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Appointment Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Booking Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PatientAppointmentsComponent_app_patient_appointment_32_Template, 1, 1, "app-patient-appointment", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PatientAppointmentsComponent_li_33_Template, 3, 0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appointments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointments.length === 0);
        }
      },
      directives: [_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["PatientSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_6__["PatientAppointmentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGF0aWVudC9wYXRpZW50LWFwcG9pbnRtZW50cy9wYXRpZW50LWFwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAppointmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-appointments',
          templateUrl: './patient-appointments.component.html',
          styleUrls: ['./patient-appointments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/patient/patient-side-bar/patient-side-bar.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/pages/patient/patient-side-bar/patient-side-bar.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PatientSideBarComponent */

  /***/
  function srcAppComponentsPagesPatientPatientSideBarPatientSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSideBarComponent", function () {
      return PatientSideBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PatientSideBarComponent_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
      }

      if (rf & 2) {
        var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r286.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PatientSideBarComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
      }
    }

    var PatientSideBarComponent =
    /*#__PURE__*/
    function () {
      function PatientSideBarComponent(authService, patientService) {
        _classCallCheck(this, PatientSideBarComponent);

        this.authService = authService;
        this.patientService = patientService;
      }

      _createClass(PatientSideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this36.patientService.getById(user.id).subscribe(function (patient) {
              _this36.patient = patient;
            });
          });
        }
      }]);

      return PatientSideBarComponent;
    }();

    PatientSideBarComponent.ɵfac = function PatientSideBarComponent_Factory(t) {
      return new (t || PatientSideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]));
    };

    PatientSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientSideBarComponent,
      selectors: [["app-patient-side-bar"]],
      inputs: {
        avatar: "avatar"
      },
      decls: 30,
      vars: 8,
      consts: [[1, "profile-sidebar"], [1, "widget-profile", "pro-widget-content"], [1, "profile-info-widget"], ["href", "#", 1, "booking-doc-img"], ["alt", "Patient Image", 3, "src", 4, "ngIf"], ["src", "assets/img/patients/default-patient.jpeg", "alt", "Patient Image", 4, "ngIf"], [1, "profile-det-info"], [1, "patient-details"], [1, "dashboard-widget"], [1, "dashboard-menu"], ["routerLinkActive", "active"], ["routerLink", "/patient/appointments"], [1, "fas", "fa-bookmark"], ["routerLink", "/patient/profile"], [1, "fas", "fa-user-cog"], ["routerLink", "/patient/change-password"], [1, "fas", "fa-lock"], ["alt", "Patient Image", 3, "src"], ["src", "assets/img/patients/default-patient.jpeg", "alt", "Patient Image"]],
      template: function PatientSideBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientSideBarComponent_img_4_Template, 1, 1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PatientSideBarComponent_img_5_Template, 1, 0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatar.length > 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatar.length < 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.patient == null ? null : ctx.patient.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.patient == null ? null : ctx.patient.lastname), "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGF0aWVudC9wYXRpZW50LXNpZGUtYmFyL3BhdGllbnQtc2lkZS1iYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-side-bar',
          templateUrl: './patient-side-bar.component.html',
          styleUrls: ['./patient-side-bar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }];
      }, {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/patient/profile/profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/pages/patient/profile/profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsPagesPatientProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../patient-side-bar/patient-side-bar.component */
    "./src/app/components/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProfileComponent_div_28_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 50);
      }

      if (rf & 2) {
        var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r181.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_div_28_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 51);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    function ProfileComponent_div_28_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r183.uploadProgress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r183.uploadProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r183.uploadProgress, "% ");
      }
    }

    function ProfileComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_28_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r184.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_28_img_7_Template, 1, 1, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_28_img_8_Template, 1, 0, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_28_div_10_Template, 3, 5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Upload Photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_div_28_Template_input_change_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r186.uploadAvatar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Allowed JPG, GIF or PNG. Max size of 2MB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r187.patient.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r188.patient.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Date of Birth");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r189.patient.birthday = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Blood Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_select_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r190.patient.bloodGroup = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "A+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "B-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "B+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "AB-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "AB+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "O-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "O+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Email ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r191.patient.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_63_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r192.patient.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.patient.address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r194.patient.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Zip Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_78_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r195.patient.zipCode = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_28_Template_input_ngModelChange_83_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r196.patient.country = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.avatar.length > 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.avatar.length < 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r180.currentSelectedAvatar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.firstname)("ngModel", ctx_r180.patient.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.lastname)("ngModel", ctx_r180.patient.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r180.patient.birthday);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient == null ? null : ctx_r180.patient.bloodGroup)("ngModel", ctx_r180.patient.bloodGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.email)("ngModel", ctx_r180.patient.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.phone)("ngModel", ctx_r180.patient.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.address)("ngModel", ctx_r180.patient.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.city)("ngModel", ctx_r180.patient.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.zipCode)("ngModel", ctx_r180.patient.zipCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r180.patient.country)("ngModel", ctx_r180.patient.country);
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authService, patientService) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
        this.patientService = patientService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this37.patientService.getById(user.id).subscribe(function (patient) {
              _this37.patient = patient; // const isoBirthday = new Date(patient.birthday);
              // this.birthday = isoBirthday.toISOString().substr(0, 10);;

              console.log("birthday : ", _this37.patient.birthday);
            });

            _this37.patientService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this37.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this38 = this;

          console.log("patient new name: ", JSON.stringify(this.patient)); // const birthday = new Date(this.birthday)
          // this.patient.birthday = birthday.toISOString();

          this.patientService.updatePatient(this.patient).subscribe(function (patient) {
            _this38.patient = patient;
            window.location.reload();
          });
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(event) {
          var _this39 = this;

          console.log("upload started");
          this.currentSelectedAvatar = event.target.files.item(0);
          this.patientService.uploadAvatar(this.patient.id, this.currentSelectedAvatar).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
              _this39.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this39.patientService.getAvatar(_this39.patient.id).subscribe(function (avatar) {
                _this39.avatar = 'data:image/jpeg;base64,' + avatar.image.data;
                _this39.uploadProgress = 0;
                _this39.currentSelectedAvatar = undefined;
              });
            }
          }, function (err) {
            _this39.uploadProgress = 0;
            _this39.uploadErrorMessage = 'Could not upload the Photo!';
            _this39.currentSelectedAvatar = undefined;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 29,
      vars: 2,
      consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0, user-scalable=0"], [1, "main-wrapper"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "content"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [3, "ngSubmit"], [1, "row", "form-row"], [1, "col-12", "col-md-12"], [1, "form-group"], [1, "change-avatar"], [1, "profile-img"], ["alt", "Patient Image", 3, "src", 4, "ngIf"], ["src", "assets/img/patients/default-patient.jpeg", "alt", "Doctor Image", 4, "ngIf"], [1, "upload-img"], ["class", "progress", 4, "ngIf"], [1, "change-photo-btn"], [1, "fa", "fa-upload"], ["type", "file", 1, "upload", 3, "change"], [1, "form-text", "text-muted"], [1, "col-12", "col-md-6"], ["name", "firstname", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "lastname", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "birthday", "type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "bloodGroup", 1, "form-control", "select", 3, "value", "ngModel", "ngModelChange"], ["name", "email", "type", "email", "readonly", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "phone", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "col-12"], ["name", "address", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "city", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "zipCode", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "country", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn"], ["alt", "Patient Image", 3, "src"], ["src", "assets/img/patients/default-patient.jpeg", "alt", "Doctor Image"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AirDoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ol", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-patient-side-bar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_div_28_Template, 87, 22, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.patient);
        }
      },
      directives: [_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["PatientSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
      styles: ["input[type=\"date\"][_ngcontent-%COMP%]::-webkit-clear-button {\n    display: none;\n}\n\n\n\ninput[type=\"date\"][_ngcontent-%COMP%]::-webkit-inner-spin-button { \n    display: none;\n}\n\n\n\ninput[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n    color: #2c3e50;\n}\n\n\n\n\n\ninput[type=\"date\"][_ngcontent-%COMP%], focus[_ngcontent-%COMP%] {\n    color: #95a5a6;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYXRpZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSx3Q0FBd0M7O0FBQ3hDOzs7Ozs7Ozs7OztHQVdHOztBQUVIO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYXRpZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBSZW1vdmVzIHRoZSBzcGluIGJ1dHRvbiAqL1xuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24geyBcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBBbHdheXMgZGlzcGxheSB0aGUgZHJvcCBkb3duIGNhcmV0ICovXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLyogQSBmZXcgY3VzdG9tIHN0eWxlcyBmb3IgZGF0ZSBpbnB1dHMgKi9cbi8qIGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBjb2xvcjogIzk1YTVhNjtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2VjZjBmMTtcbiAgICBiYWNrZ3JvdW5kOiNlY2YwZjE7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufSAqL1xuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSwgZm9jdXMge1xuICAgIGNvbG9yOiAjOTVhNWE2O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/patient/signup/signup.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/pages/patient/signup/signup.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsPagesPatientSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SignupComponent_form_14_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_7_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_7_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_7_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r141.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r141.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r141.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_13_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_13_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_13_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_13_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r143.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r143.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_19_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_19_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_19_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_19_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_25_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_25_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_25_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_25_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at least 10 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_31_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at most 50 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_31_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_31_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_31_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r149.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r149.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r149.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_37_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_14_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_14_div_37_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_14_div_37_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_14_div_37_div_3_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r151.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r151.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.maxlength);
      }
    }

    function SignupComponent_form_14_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r153.errorMessage, " ");
      }
    }

    function SignupComponent_form_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_14_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173);

          var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r140.form.valid && ctx_r172.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173);

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r174.form.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_form_14_div_7_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173);

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r175.form.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_form_14_div_13_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173);

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r176.form.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_form_14_div_19_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r177.form.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_form_14_div_25_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r178.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_form_14_div_31_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_14_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r179.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignupComponent_form_14_div_37_Template, 4, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Already have an account?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignupComponent_form_14_div_43_Template, 4, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r138.form.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r140.submitted && _r141.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r138.form.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r140.submitted && _r143.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r138.form.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r140.submitted && _r145.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r138.form.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r140.submitted && _r147.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r138.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r140.submitted && _r149.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r138.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r140.submitted && _r151.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r140.submitted && ctx_r138.isSignUpFailed);
      }
    }

    function SignupComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(router, authService) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this40 = this;

          this.authService.patientRegister(this.form).subscribe(function (data) {
            console.log(data);
            _this40.isSuccessful = true;
            _this40.isSignUpFailed = false;

            _this40.router.navigate(["patient/login"]);
          }, function (err) {
            _this40.errorMessage = err.error.message;
            _this40.isSignUpFailed = true;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-patient-signup"]],
      decls: 16,
      vars: 2,
      consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "Login Banner", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["routerLink", "/doctor/signup"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "form-focus"], ["type", "text", "name", "firstname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "text", "name", "lastname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "tel", "name", "phone", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "email", "name", "email", "required", "", "minlength", "10", "maxlength", "50", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "patient/login", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", "login-btn"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Patient Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Not a Patient?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_form_14_Template, 44, 13, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGF0aWVudC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/search/search.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/pages/search/search.component.ts ***!
    \*************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsPagesSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../doctor/doctor.component */
    "./src/app/components/doctor/doctor.component.ts");

    function SearchComponent_app_doctor_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor", 24);
      }

      if (rf & 2) {
        var doctor_r203 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("doctor", doctor_r203);
      }
    }

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(doctorService, activatedRoute) {
        _classCallCheck(this, SearchComponent);

        this.doctorService = doctorService;
        this.activatedRoute = activatedRoute;
        this.doctors = [];
        this.searchCity = "";
        this.searchQuery = "";
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this41.searchCity = params.get('city');
            _this41.searchQuery = params.get('query');

            _this41.search(_this41.searchCity, _this41.searchQuery);
          }); // this.doctorService.getDoctors().subscribe((doctors) => {
          //     console.log(doctors);
          //     this.doctors = doctors;
          //   });
        }
      }, {
        key: "search",
        value: function search(location, query) {
          var _this42 = this;

          console.log("searchCom", "location: " + location, "query: " + query);
          this.doctorService.search(location, query).subscribe(function (doctors) {
            return _this42.doctors = doctors;
          });
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 30,
      vars: 4,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-8", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "row", "mt-3", "d-flex", "justify-content-center"], [1, "search-box"], [1, "form-group", "search-location"], ["type", "text", "placeholder", "Search City", 1, "form-control"], ["city", ""], [1, "form-group", "search-info"], ["type", "text", "placeholder", "Search Doctors, Clinics, Hospitals, Diseases Etc", 1, "form-control"], ["query", ""], [1, "btn-search"], ["type", "button", 1, "btn", "btn-block", 3, "click"], [1, "content"], [1, "row"], [1, "col-md-12", "col-lg-8", "col-xl-9", "m-auto"], [3, "doctor", 4, "ngFor", "ngForOf"], [3, "doctor"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204);

            var _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return ctx.search(_r200.value, _r201.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SearchComponent_app_doctor_29_Template, 1, 1, "app-doctor", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.doctors.length, " matches found for : ", ctx.searchQuery, " In ", ctx.searchCity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctors);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_5__["DoctorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/patient/patient.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/patient/patient.component.ts ***!
    \*********************************************************/

  /*! exports provided: PatientComponent */

  /***/
  function srcAppComponentsPatientPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientComponent", function () {
      return PatientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PatientComponent =
    /*#__PURE__*/
    function () {
      function PatientComponent() {
        _classCallCheck(this, PatientComponent);
      }

      _createClass(PatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientComponent;
    }();

    PatientComponent.ɵfac = function PatientComponent_Factory(t) {
      return new (t || PatientComponent)();
    };

    PatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientComponent,
      selectors: [["app-patient"]],
      decls: 2,
      vars: 0,
      template: function PatientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "patient works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient',
          templateUrl: './patient.component.html',
          styleUrls: ['./patient.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/rating-star/rating-star.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/rating-star/rating-star.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RatingStarComponent */

  /***/
  function srcAppComponentsRatingStarRatingStarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingStarComponent", function () {
      return RatingStarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RatingStarComponent_i_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingStarComponent_i_0_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r277);

          var s_r275 = ctx.$implicit;

          var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r276.toggleRating(s_r275);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r275 = ctx.$implicit;

        var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r274.setClass(s_r275));
      }
    }

    var RatingStarComponent =
    /*#__PURE__*/
    function () {
      function RatingStarComponent() {
        _classCallCheck(this, RatingStarComponent);

        // @Input() max: number;
        this.onRating = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = true;
        this.max = 5;
        this.ratedCount = 0;
      }

      _createClass(RatingStarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.maxItem = [];

          for (var i = 0; i < this.max; i++) {
            this.maxItem.push(i + 1);
          }
        }
      }, {
        key: "setClass",
        value: function setClass(s) {
          if (this.readonly) {
            return {
              "fa fa-star": true,
              "ratingIcon": true,
              "ratingHover": false,
              "filled": s <= this.ratedCount
            };
          }

          return {
            "fa fa-star": true,
            "ratingIcon": true,
            "ratingHover": true,
            "filled": s <= this.ratedCount
          };
        }
      }, {
        key: "setHover",
        value: function setHover() {
          if (this.readonly) {
            return {
              "ratingIcon": true,
              "ratingHover": false
            };
          }

          return {
            "ratingIcon": true,
            "ratingHover": true
          };
        }
      }, {
        key: "toggleRating",
        value: function toggleRating(s) {
          if (this.readonly) {
            return;
          }

          this.ratedCount = s;
          this.onRating.emit(this.ratedCount);
        }
      }]);

      return RatingStarComponent;
    }();

    RatingStarComponent.ɵfac = function RatingStarComponent_Factory(t) {
      return new (t || RatingStarComponent)();
    };

    RatingStarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RatingStarComponent,
      selectors: [["app-rating-star"]],
      inputs: {
        readonly: "readonly",
        ratedCount: "ratedCount"
      },
      outputs: {
        onRating: "onRating"
      },
      decls: 1,
      vars: 1,
      consts: [["aria-hidden", "true", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 3, "ngClass", "click"]],
      template: function RatingStarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingStarComponent_i_0_Template, 1, 1, "i", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.maxItem);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".ratingIcon[_ngcontent-%COMP%]{\n    display:inline-block;\n    margin-right:3px;\n    cursor:pointer;\n    color:#ccc;\n}\n.ratingHover[_ngcontent-%COMP%]:hover{color:#FFD700;}\n.filled[_ngcontent-%COMP%] {color:#FFD700;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctc3Rhci9yYXRpbmctc3Rhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRTtBQUNGO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0EsbUJBQW1CLGFBQWEsQ0FBQztBQUNqQyxTQUFTLGFBQWEsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLXN0YXIvcmF0aW5nLXN0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5yYXRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSovXG4ucmF0aW5nSWNvbntcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6M3B4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGNvbG9yOiNjY2M7XG59XG4ucmF0aW5nSG92ZXI6aG92ZXJ7Y29sb3I6I0ZGRDcwMDt9XG4uZmlsbGVkIHtjb2xvcjojRkZENzAwO30gIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingStarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rating-star',
          templateUrl: './rating-star.component.html',
          styleUrls: ['./rating-star.component.css']
        }]
      }], function () {
        return [];
      }, {
        onRating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ratedCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/review-form/review-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/review-form/review-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ReviewFormComponent */

  /***/
  function srcAppComponentsReviewFormReviewFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewFormComponent", function () {
      return ReviewFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Review */
    "./src/app/models/Review.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");

    var ReviewFormComponent =
    /*#__PURE__*/
    function () {
      function ReviewFormComponent(authService) {
        _classCallCheck(this, ReviewFormComponent);

        this.authService = authService;
        this.addReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rating = 1;
      }

      _createClass(ReviewFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            _this43.authorId = res.id;
            console.log("::::::::: authorId: ", _this43.authorId);
          });
        }
      }, {
        key: "onRating",
        value: function onRating(rating) {
          //TODO check rating max and min
          console.log("rating: ", rating);
          this.rating = rating;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log("authorId befor submit: ", this.authorId);
          var review = new src_app_models_Review__WEBPACK_IMPORTED_MODULE_1__["Review"](this.content, [], this.rating, this.authorId);
          console.log("review : ", JSON.stringify(review));
          this.addReview.emit(review);
          this.content = "";
          this.rating = 0;
        }
      }]);

      return ReviewFormComponent;
    }();

    ReviewFormComponent.ɵfac = function ReviewFormComponent_Factory(t) {
      return new (t || ReviewFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    ReviewFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewFormComponent,
      selectors: [["app-review-form"]],
      outputs: {
        addReview: "addReview"
      },
      decls: 19,
      vars: 2,
      consts: [[3, "ngSubmit"], [1, "form-group"], [3, "readonly", "onRating"], ["id", "review_desc", "maxlength", "100", "name", "content", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between", "mt-3"], [1, "text-muted"], ["id", "chars"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn"]],
      template: function ReviewFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReviewFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-rating-star", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRating", function ReviewFormComponent_Template_app_rating_star_onRating_5_listener($event) {
            return ctx.onRating($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewFormComponent_Template_textarea_ngModelChange_9_listener($event) {
            return ctx.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " characters remaining");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_4__["RatingStarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3LWZvcm0vcmV2aWV3LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review-form',
          templateUrl: './review-form.component.html',
          styleUrls: ['./review-form.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        addReview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/review/review.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/review/review.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReviewComponent */

  /***/
  function srcAppComponentsReviewReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewComponent", function () {
      return ReviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Like */
    "./src/app/models/Like.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/review.service */
    "./src/app/services/review.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");

    function ReviewComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r247.author.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r247.author.lastname), "");
      }
    }

    function ReviewComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_a_14_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250);

          var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r249.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ReviewComponent =
    /*#__PURE__*/
    function () {
      //@Output() toggleLike:EventEmitter<Like> = new EventEmitter();
      function ReviewComponent(patientService, reviewService, autheService) {
        _classCallCheck(this, ReviewComponent);

        this.patientService = patientService;
        this.reviewService = reviewService;
        this.autheService = autheService;
        this.deleteReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ReviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          //TODO get author
          this.patientService.getById(this.review.patientId).subscribe(function (res) {
            _this44.author = res;
          });
          this.patientService.getAvatar(this.review.patientId).subscribe(function (res) {
            var _a, _b;

            _this44.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = res) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            console.log("Avatar: ", _this44.avatar);
          });
          this.autheService.getCurrentUser().subscribe(function (res) {
            _this44.currentUserId = res.id;
            _this44.like = new src_app_models_Like__WEBPACK_IMPORTED_MODULE_1__["Like"](_this44.currentUserId);

            _this44.setLiked(_this44.like);
          });
        }
      }, {
        key: "setLiked",
        value: function setLiked(like) {
          this.isLiked = this.review.likes.includes(like);
          console.log("isLiked: " + this.isLiked);
        }
      }, {
        key: "getLiked",
        value: function getLiked() {
          return this.review.likes.includes(this.like);
        }
      }, {
        key: "toggleLike",
        value: function toggleLike() {
          var _this45 = this;

          if (!this.isLiked) {
            console.log("liking");
            this.reviewService.likeReview(this.review.id, this.like).subscribe(function (res) {
              console.log("liking: ", JSON.stringify(res));

              _this45.review.likes.push(_this45.like);

              _this45.isLiked = true;
            });
          }

          if (this.isLiked) {
            console.log("unliking");
            this.reviewService.unlikeReview(this.review.id, this.like).subscribe(function (res) {
              console.log("unliking: ", JSON.stringify(res));
              var likes = _this45.review.likes;
              console.log("befor delete ", JSON.stringify(likes));
              var index = likes.indexOf(_this45.like, 0);

              if (index > -1) {
                likes.splice(index, 1);
              }

              console.log("after delete ", JSON.stringify(likes));
              _this45.review.likes = likes;
              _this45.isLiked = false;
            });
          }
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          this.editReview.emit(this.review);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.deleteReview.emit(this.review);
        }
      }, {
        key: "setClass",
        value: function setClass() {
          return {
            "liked": this.isLiked,
            "fa": true,
            "fa-thumbs-up": true
          };
        }
      }]);

      return ReviewComponent;
    }();

    ReviewComponent.ɵfac = function ReviewComponent_Factory(t) {
      return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewComponent,
      selectors: [["app-review"]],
      inputs: {
        review: "review"
      },
      outputs: {
        deleteReview: "deleteReview",
        editReview: "editReview"
      },
      decls: 16,
      vars: 8,
      consts: [[1, "comment"], ["alt", "Patient Image", 1, "avatar", "avatar-sm", "rounded-circle", 3, "src"], [1, "comment-body"], [1, "meta-data"], ["class", "comment-author", 4, "ngIf"], [3, "ratedCount", "readonly"], [1, "comment-content"], [1, "comment-reply"], [1, "recommend-btn"], [1, "like-btn", 3, "click"], [3, "ngClass"], ["class", "trash-btn", 3, "click", 4, "ngIf"], [1, "comment-author"], [1, "trash-btn", 3, "click"], [1, "fa", "fa-trash"]],
      template: function ReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewComponent_span_5_Template, 4, 6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-rating-star", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_Template_a_click_11_listener() {
            return ctx.toggleLike();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReviewComponent_a_14_Template, 2, 0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratedCount", ctx.review == null ? null : ctx.review.rating)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.review == null ? null : ctx.review.content, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.review == null ? null : ctx.review.likes == null ? null : ctx.review.likes.length, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author && ctx.currentUserId && ctx.author.id == ctx.currentUserId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_6__["RatingStarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
      styles: [".liked[_ngcontent-%COMP%] {\n    color:red;\n}\n\n.trash-btn[_ngcontent-%COMP%]:hover {\n    background-color: red;\n}\n\n.edit-btn[_ngcontent-%COMP%]:hover {\n    background-color:#0DB9F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWtlZCB7XG4gICAgY29sb3I6cmVkO1xufVxuXG4udHJhc2gtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5lZGl0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMERCOUYyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review',
          templateUrl: './review.component.html',
          styleUrls: ['./review.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }, {
          type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, {
        review: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteReview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        editReview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/reviews/reviews.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/reviews/reviews.component.ts ***!
    \*********************************************************/

  /*! exports provided: ReviewsComponent */

  /***/
  function srcAppComponentsReviewsReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function () {
      return ReviewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/review.service */
    "./src/app/services/review.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../review/review.component */
    "./src/app/components/review/review.component.ts");
    /* harmony import */


    var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../review-form/review-form.component */
    "./src/app/components/review-form/review-form.component.ts");

    function ReviewsComponent_app_review_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-review", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteReview", function ReviewsComponent_app_review_2_Template_app_review_deleteReview_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r268);

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r267.deleteReview($event);
        })("editReview", function ReviewsComponent_app_review_2_Template_app_review_editReview_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r268);

          var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r269.editReview($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var review_r266 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r266);
      }
    }

    function ReviewsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Write a review for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-review-form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addReview", function ReviewsComponent_div_3_Template_app_review_form_addReview_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271);

          var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r270.addReview($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r265.doctor == null ? null : ctx_r265.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r265.doctor == null ? null : ctx_r265.doctor.lastname), "");
      }
    }

    var ReviewsComponent =
    /*#__PURE__*/
    function () {
      function ReviewsComponent(reviewService) {
        _classCallCheck(this, ReviewsComponent);

        this.reviewService = reviewService;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.refreshReviews();
        }
      }, {
        key: "addReview",
        value: function addReview(review) {
          var _this46 = this;

          console.log('review : ' + JSON.stringify(review));
          this.reviewService.addReview(this.doctor.id, review).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res));

            _this46.refreshReviews();
          });
        }
      }, {
        key: "deleteReview",
        value: function deleteReview(review) {
          var _this47 = this;

          this.reviewService.deleteReview(this.doctor.id, review.id).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res)); // const index = this.reviews.indexOf(review, 0);
            //     if (index > -1) {
            //        this.reviews.splice(index, 1);
            //     }

            _this47.refreshReviews();
          });
        }
      }, {
        key: "editReview",
        value: function editReview(review) {
          var _this48 = this;

          this.reviewService.updateReview(this.doctor.id, review).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res));

            _this48.refreshReviews();
          });
        }
      }, {
        key: "refreshReviews",
        value: function refreshReviews() {
          var _this49 = this;

          var _a;

          console.log("doctor: ", JSON.stringify(this.doctor));
          this.refresh.emit("refresh");
          this.reviewService.getReviews((_a = this.doctor) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res));
            _this49.reviews = res;
          });
        }
      }]);

      return ReviewsComponent;
    }();

    ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) {
      return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]));
    };

    ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewsComponent,
      selectors: [["app-reviews"]],
      inputs: {
        doctor: "doctor",
        isPatient: "isPatient"
      },
      outputs: {
        refresh: "refresh"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "widget", "review-listing"], [1, "comments-list"], [3, "review", "deleteReview", "editReview", 4, "ngFor", "ngForOf"], ["class", "write-review", 4, "ngIf"], [3, "review", "deleteReview", "editReview"], [1, "write-review"], [3, "addReview"]],
      template: function ReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReviewsComponent_app_review_2_Template, 1, 1, "app-review", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReviewsComponent_div_3_Template, 8, 6, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPatient);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _review_review_component__WEBPACK_IMPORTED_MODULE_3__["ReviewComponent"], _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_4__["ReviewFormComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reviews',
          templateUrl: './reviews.component.html',
          styleUrls: ['./reviews.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]
        }];
      }, {
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isPatient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/Appointment.ts":
  /*!***************************************!*\
    !*** ./src/app/models/Appointment.ts ***!
    \***************************************/

  /*! exports provided: Appointment */

  /***/
  function srcAppModelsAppointmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Appointment", function () {
      return Appointment;
    });

    var Appointment = function Appointment() {
      _classCallCheck(this, Appointment);
    };
    /***/

  },

  /***/
  "./src/app/models/Clinic.ts":
  /*!**********************************!*\
    !*** ./src/app/models/Clinic.ts ***!
    \**********************************/

  /*! exports provided: Clinic */

  /***/
  function srcAppModelsClinicTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clinic", function () {
      return Clinic;
    });
    /* harmony import */


    var _ClinicLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ClinicLocation */
    "./src/app/models/ClinicLocation.ts");

    var Clinic =
    /*#__PURE__*/
    function () {
      function Clinic() {
        _classCallCheck(this, Clinic);
      }

      _createClass(Clinic, null, [{
        key: "empty",
        value: function empty() {
          return {
            name: "",
            description: "",
            services: [],
            specialities: [],
            city: "",
            country: "",
            address: "",
            minPrice: 0,
            maxPrice: 0,
            consultPrice: 0,
            location: new _ClinicLocation__WEBPACK_IMPORTED_MODULE_0__["ClinicLocation"](0, 0, 2)
          };
        }
      }]);

      return Clinic;
    }();
    /***/

  },

  /***/
  "./src/app/models/ClinicLocation.ts":
  /*!******************************************!*\
    !*** ./src/app/models/ClinicLocation.ts ***!
    \******************************************/

  /*! exports provided: ClinicLocation */

  /***/
  function srcAppModelsClinicLocationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicLocation", function () {
      return ClinicLocation;
    });

    var ClinicLocation = function ClinicLocation(latitude, longitude, zoom) {
      _classCallCheck(this, ClinicLocation);

      this.latitude = latitude;
      this.longitude = longitude;
      this.zoom = zoom;
    };
    /***/

  },

  /***/
  "./src/app/models/Contact.ts":
  /*!***********************************!*\
    !*** ./src/app/models/Contact.ts ***!
    \***********************************/

  /*! exports provided: Contact */

  /***/
  function srcAppModelsContactTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });

    var Contact = function Contact() {
      _classCallCheck(this, Contact);
    };
    /***/

  },

  /***/
  "./src/app/models/Like.ts":
  /*!********************************!*\
    !*** ./src/app/models/Like.ts ***!
    \********************************/

  /*! exports provided: Like */

  /***/
  function srcAppModelsLikeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Like", function () {
      return Like;
    });

    var Like = function Like(authorId) {
      _classCallCheck(this, Like);

      this.authorId = authorId;
    };
    /***/

  },

  /***/
  "./src/app/models/Password.ts":
  /*!************************************!*\
    !*** ./src/app/models/Password.ts ***!
    \************************************/

  /*! exports provided: Password */

  /***/
  function srcAppModelsPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Password", function () {
      return Password;
    });

    var Password = function Password(oldPassword, newPassword) {
      _classCallCheck(this, Password);

      this.oldPassword = oldPassword;
      this.newPassword = newPassword;
    };
    /***/

  },

  /***/
  "./src/app/models/Review.ts":
  /*!**********************************!*\
    !*** ./src/app/models/Review.ts ***!
    \**********************************/

  /*! exports provided: Review */

  /***/
  function srcAppModelsReviewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Review", function () {
      return Review;
    });

    var Review = function Review(content, likes, rating, authorId) {
      _classCallCheck(this, Review);

      this.content = content;
      this.likes = likes;
      this.rating = rating;
      this.patientId = authorId;
    };
    /***/

  },

  /***/
  "./src/app/services/admin-auth.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/admin-auth.guard.ts ***!
    \**********************************************/

  /*! exports provided: AdminAuthGuard */

  /***/
  function srcAppServicesAdminAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
      return AdminAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var AdminAuthGuard =
    /*#__PURE__*/
    function () {
      function AdminAuthGuard(router, authStorage) {
        _classCallCheck(this, AdminAuthGuard);

        this.router = router;
        this.authStorage = authStorage;
      }

      _createClass(AdminAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authStorage.getUser() == null || this.authStorage.getUserType() !== "ADMIN") {
            alert('You are not allowed to view this page. You are redirected to login Page');
            console.log("next : " + next);
            console.log("state : " + state);
            this.router.navigate(["admin/login"], {
              queryParams: {
                retUrl: state.url
              }
            });
            return false;
          }

          return true;
        }
      }]);

      return AdminAuthGuard;
    }();

    AdminAuthGuard.ɵfac = function AdminAuthGuard_Factory(t) {
      return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    AdminAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminAuthGuard,
      factory: AdminAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/appointment.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/appointment.service.ts ***!
    \*************************************************/

  /*! exports provided: AppointmentService */

  /***/
  function srcAppServicesAppointmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentService", function () {
      return AppointmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppointmentService =
    /*#__PURE__*/
    function () {
      function AppointmentService(http) {
        _classCallCheck(this, AppointmentService);

        this.http = http;
        this.appoitmentUrl = "http://localhost:8080/appointments";
      }

      _createClass(AppointmentService, [{
        key: "add",
        value: function add(appointment) {
          return this.http.post(this.appoitmentUrl, appointment);
        }
      }, {
        key: "update",
        value: function update(appointment) {
          return this.http.put(this.appoitmentUrl, appointment);
        }
      }, {
        key: "getAppointments",
        value: function getAppointments() {
          return this.http.get(this.appoitmentUrl);
        }
      }, {
        key: "getAllDoctorAppoitments",
        value: function getAllDoctorAppoitments(doctorId) {
          return this.http.get(this.appoitmentUrl + '/doctor/' + doctorId);
        }
      }, {
        key: "getAllPatientAppoitments",
        value: function getAllPatientAppoitments(patientId) {
          return this.http.get(this.appoitmentUrl + '/patient/' + patientId);
        }
      }]);

      return AppointmentService;
    }();

    AppointmentService.ɵfac = function AppointmentService_Factory(t) {
      return new (t || AppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppointmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppointmentService,
      factory: AppointmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/auth-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppServicesAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var TOKEN_HEADER_KEY = 'Authorization';
    var USER_TYPE_HEADER_KEY = 'User-Type';

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(token) {
        _classCallCheck(this, AuthInterceptor);

        this.token = token;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authReq = req;
          var token = this.token.getToken();
          var userType = this.token.getUserType();
          var headers = req.headers;

          if (token != null) {
            headers = headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token);
          }

          if (userType != null) {
            console.log("userType", userType);
            headers = headers.set(USER_TYPE_HEADER_KEY, userType);
          }

          authReq = req.clone({
            headers: headers
          });
          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // const AUTH_API = 'http://localhost:8080/';


    var AUTH_USER = 'http://localhost:8080/api/auth/user';
    var DOCTOR_API = 'http://localhost:8080/api/auth/doctor/'; //TODO make this just /auth/doctor/

    var PATIENT_API = 'http://localhost:8080/api/auth/patient/';
    var ADMIN_API = 'http://localhost:8080/api/auth/admin/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.getLoggedInUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials, api) {
          console.log("email: " + credentials.email + " password: " + credentials.password);
          return this.http.post(api + 'signin', {
            email: credentials.email,
            password: credentials.password
          }, httpOptions);
        } //TODO define registration params

      }, {
        key: "register",
        value: function register(user, api) {
          return this.http.post(api + 'signup', {
            email: user.email,
            password: user.password,
            phone: user.phone,
            username: user.username,
            lastname: user.lastname,
            firstname: user.firstname
          }, httpOptions);
        } //TODO define patients

      }, {
        key: "doctorLogin",
        value: function doctorLogin(credentials) {
          return this.login(credentials, DOCTOR_API);
        } //TODO define registration params

      }, {
        key: "doctorRegister",
        value: function doctorRegister(user) {
          return this.register(user, DOCTOR_API);
        }
      }, {
        key: "patientLogin",
        value: function patientLogin(credentials) {
          return this.login(credentials, PATIENT_API);
        } //TODO define registration params

      }, {
        key: "patientRegister",
        value: function patientRegister(user) {
          return this.register(user, PATIENT_API);
        }
      }, {
        key: "adminLogin",
        value: function adminLogin(credentials) {
          return this.login(credentials, ADMIN_API);
        } //TODO define registration params

      }, {
        key: "adminRegister",
        value: function adminRegister(user) {
          return this.register(user, ADMIN_API);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.http.get(AUTH_USER);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        getLoggedInUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/contact.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/contact.service.ts ***!
    \*********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http;
        this.contactUrl = "http://localhost:8080/contacts";
      }

      _createClass(ContactService, [{
        key: "getContacts",
        value: function getContacts() {
          return this.http.get(this.contactUrl);
        }
      }, {
        key: "addContact",
        value: function addContact(contact) {
          return this.http.post(this.contactUrl, contact);
        }
      }]);

      return ContactService;
    }();

    ContactService.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/doctor-auth.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/doctor-auth.guard.ts ***!
    \***********************************************/

  /*! exports provided: DoctorAuthGuard */

  /***/
  function srcAppServicesDoctorAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorAuthGuard", function () {
      return DoctorAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var DoctorAuthGuard =
    /*#__PURE__*/
    function () {
      function DoctorAuthGuard(router, authStorage) {
        _classCallCheck(this, DoctorAuthGuard);

        this.router = router;
        this.authStorage = authStorage;
      }

      _createClass(DoctorAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authStorage.getUser() == null || this.authStorage.getUserType() !== "DOCTOR") {
            // alert('You are not allowed to view this page. You are redirected to login Page');
            this.router.navigate(["doctor/login"], {
              queryParams: {
                retUrl: state.url
              }
            });
            return false;
          }

          return true;
        }
      }]);

      return DoctorAuthGuard;
    }();

    DoctorAuthGuard.ɵfac = function DoctorAuthGuard_Factory(t) {
      return new (t || DoctorAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    DoctorAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DoctorAuthGuard,
      factory: DoctorAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/doctor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/doctor.service.ts ***!
    \********************************************/

  /*! exports provided: DoctorService */

  /***/
  function srcAppServicesDoctorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorService", function () {
      return DoctorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var API_URL = 'http://localhost:8080/api/test/';

    var DoctorService =
    /*#__PURE__*/
    function () {
      function DoctorService(http) {
        _classCallCheck(this, DoctorService);

        this.http = http;
        this.doctorUrl = "http://localhost:8080/doctors";
      }

      _createClass(DoctorService, [{
        key: "getDoctors",
        value: function getDoctors() {
          return this.http.get(this.doctorUrl);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get(this.doctorUrl + "/" + id);
        }
      }, {
        key: "updateDoctor",
        value: function updateDoctor(doctor) {
          return this.http.put(this.doctorUrl, doctor);
        }
      }, {
        key: "getByUsername",
        value: function getByUsername(username) {
          return this.http.get(this.doctorUrl + "/username/" + username);
        }
      }, {
        key: "search",
        value: function search(city, query) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('city', city).set('query', query);
          console.log("doc service", "city: " + city, "query : " + query);
          return this.http.get(this.doctorUrl, {
            'params': params
          });
        }
      }, {
        key: "getAvatar",
        value: function getAvatar(id) {
          return this.http.get(this.doctorUrl + "/" + id + '/avatar');
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(doctorId, file) {
          var formData = new FormData();
          formData.append('avatar', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.doctorUrl + '/' + doctorId + '/avatar', formData, {
            reportProgress: true,
            responseType: 'json'
          });
          return this.http.request(req);
        }
      }, {
        key: "getClinic",
        value: function getClinic(id) {
          return this.http.get(this.doctorUrl + "/" + id + '/clinic');
        }
      }, {
        key: "getClinicPhotos",
        value: function getClinicPhotos(id) {
          return this.http.get(this.doctorUrl + "/" + id + '/clinic/photos');
        }
      }, {
        key: "updateClinic",
        value: function updateClinic(doctorId, clinic) {
          return this.http.post(this.doctorUrl + '/' + doctorId + '/clinic', clinic);
        }
      }, {
        key: "deleteClinicPhoto",
        value: function deleteClinicPhoto(doctorId, photoId) {
          return this.http["delete"](this.doctorUrl + '/' + doctorId + '/clinic/photos/' + photoId);
        }
      }, {
        key: "uploadClinicPhoto",
        value: function uploadClinicPhoto(doctorId, file) {
          var formData = new FormData();
          formData.append('photo', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.doctorUrl + '/' + doctorId + '/clinic/photos', formData, {
            reportProgress: true,
            responseType: 'json'
          });
          return this.http.request(req);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(doctorId, password) {
          return this.http.post(this.doctorUrl + '/' + doctorId + '/password', password);
        }
      }]);

      return DoctorService;
    }();

    DoctorService.ɵfac = function DoctorService_Factory(t) {
      return new (t || DoctorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DoctorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DoctorService,
      factory: DoctorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/patient-auth-guard.ts":
  /*!************************************************!*\
    !*** ./src/app/services/patient-auth-guard.ts ***!
    \************************************************/

  /*! exports provided: PatientAuthGuard */

  /***/
  function srcAppServicesPatientAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAuthGuard", function () {
      return PatientAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var PatientAuthGuard =
    /*#__PURE__*/
    function () {
      function PatientAuthGuard(router, authStorage) {
        _classCallCheck(this, PatientAuthGuard);

        this.router = router;
        this.authStorage = authStorage;
      }

      _createClass(PatientAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authStorage.getUser() == null || this.authStorage.getUserType() !== "PATIENT") {
            //alert('You are not allowed to view this page. You are redirected to login Page');
            this.router.navigate(["patient/login"], {
              queryParams: {
                retUrl: state.url
              }
            });
            return false;
          }

          return true;
        }
      }]);

      return PatientAuthGuard;
    }();

    PatientAuthGuard.ɵfac = function PatientAuthGuard_Factory(t) {
      return new (t || PatientAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    PatientAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PatientAuthGuard,
      factory: PatientAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/patient.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/patient.service.ts ***!
    \*********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcAppServicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var baseUrl = 'http://localhost:8080/patients';

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(http) {
        _classCallCheck(this, PatientService);

        this.http = http;
      } //TODO Ayoub chaque method doit avoir le type de retour


      _createClass(PatientService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(baseUrl);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post(baseUrl, data);
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.http.put("".concat(baseUrl, "/").concat(id), data);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.http["delete"](baseUrl);
        }
      }, {
        key: "getAvatar",
        value: function getAvatar(id) {
          return this.http.get(baseUrl + "/" + id + '/avatar');
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(patientId, file) {
          var formData = new FormData();
          formData.append('avatar', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', baseUrl + '/' + patientId + '/avatar', formData, {
            reportProgress: true,
            responseType: 'json'
          });
          return this.http.request(req);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(patientId, password) {
          return this.http.post(baseUrl + '/' + patientId + '/password', password);
        }
      }, {
        key: "updatePatient",
        value: function updatePatient(patirnt) {
          return this.http.put(baseUrl, patirnt);
        }
      }]);

      return PatientService;
    }();

    PatientService.ɵfac = function PatientService_Factory(t) {
      return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PatientService,
      factory: PatientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/review.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/review.service.ts ***!
    \********************************************/

  /*! exports provided: ReviewService */

  /***/
  function srcAppServicesReviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewService", function () {
      return ReviewService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ReviewService =
    /*#__PURE__*/
    function () {
      function ReviewService(http) {
        _classCallCheck(this, ReviewService);

        this.http = http;
        this.doctorUrl = "http://localhost:8080/doctors";
      }

      _createClass(ReviewService, [{
        key: "getReviews",
        value: function getReviews(doctorId) {
          return this.http.get(this.doctorUrl + '/' + doctorId + '/reviews');
        }
      }, {
        key: "addReview",
        value: function addReview(doctorId, review) {
          console.log("review in service: ", review);
          return this.http.post(this.doctorUrl + '/' + doctorId + '/reviews', review);
        }
      }, {
        key: "updateReview",
        value: function updateReview(doctorId, review) {
          return this.http.put(this.doctorUrl + '/' + doctorId + '/reviews/' + review.id, review);
        }
      }, {
        key: "deleteReview",
        value: function deleteReview(doctorId, reviewId) {
          return this.http["delete"](this.doctorUrl + '/' + doctorId + '/reviews/' + reviewId);
        }
      }, {
        key: "likeReview",
        value: function likeReview(reviewId, like) {
          return this.http.post(this.doctorUrl + '/reviews/' + reviewId + '/like', like);
        }
      }, {
        key: "unlikeReview",
        value: function unlikeReview(reviewId, like) {
          return this.http.post(this.doctorUrl + '/reviews/' + reviewId + '/unlike', like);
        }
      }]);

      return ReviewService;
    }();

    ReviewService.ɵfac = function ReviewService_Factory(t) {
      return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReviewService,
      factory: ReviewService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-storage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/token-storage.service.ts ***!
    \***************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppServicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';
    var USER_TYPE = 'user-type';

    var TokenStorageService =
    /*#__PURE__*/
    function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          //window.sessionStorage.clear();
          localStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          console.log("saving in storage " + TOKEN_KEY + " : " + token); //window.sessionStorage.removeItem(TOKEN_KEY);
          //window.sessionStorage.setItem(TOKEN_KEY, token);

          localStorage.removeItem(TOKEN_KEY);
          localStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          // return window.sessionStorage.getItem(TOKEN_KEY);
          return localStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUserType",
        value: function saveUserType(userType) {
          console.log("saving in storage " + USER_TYPE + " : " + userType); // window.sessionStorage.removeItem(USER_TYPE);
          // window.sessionStorage.setItem(USER_TYPE, userType);

          localStorage.removeItem(USER_TYPE);
          localStorage.setItem(USER_TYPE, userType);
        }
      }, {
        key: "getUserType",
        value: function getUserType() {
          // return sessionStorage.getItem(USER_TYPE);
          return localStorage.getItem(USER_TYPE);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          console.log("saving in storage " + USER_KEY + " : " + user);
          localStorage.removeItem(USER_KEY);
          localStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(localStorage.getItem(USER_KEY));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
      return new (t || TokenStorageService)();
    };

    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rootman/Development/formation/PFF-Java-Medical-brainstormers/airdoc-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map