"use strict";
(self["webpackChunkeshop_ui_customer"] = self["webpackChunkeshop_ui_customer"] || []).push([["main"],{

/***/ 7156:
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressComponent: () => (/* binding */ AddressComponent)
/* harmony export */ });
/* harmony import */ var _model_order_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/order/order */ 2443);
/* harmony import */ var _model_order_order_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/order/order-item */ 3623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _model_address_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/address/address */ 3527);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_basket_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/basket-shared.service */ 4155);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/order.service */ 6915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _directive_email_directive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directive/email-directive.directive */ 8935);












function AddressComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Jm\u00E9no mus\u00ED b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Jm\u00E9no mus\u00ED m\u00EDt alespo\u0148 3 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_11_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_11_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const sName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sName_r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sName_r3.errors.minlength);
  }
}
function AddressComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " P\u0159\u00EDjmen\u00ED mus\u00ED b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " P\u0159\u00EDjmen\u00ED mus\u00ED m\u00EDt alespo\u0148 3 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_17_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_17_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const sSurname_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sSurname_r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sSurname_r4.errors.minlength);
  }
}
function AddressComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00ED b\u00FDt vypln\u011Bna ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm m\u00EDt alespo\u0148 4 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_24_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_24_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const sStreet_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sStreet_r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sStreet_r5.errors.minlength);
  }
}
function AddressComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_30_div_1_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const sStreetNumber_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sStreetNumber_r6.errors.required);
  }
}
function AddressComponent_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zadej alespo\u0148 2 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_37_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_37_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const sCity_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sCity_r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sCity_r7.errors.minlength);
  }
}
function AddressComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_43_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zadej alespo\u0148 3 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_43_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_43_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const sZipCode_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sZipCode_r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sZipCode_r8.errors.minlength);
  }
}
function AddressComponent_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_54_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zadej alespo\u0148 9 znak\u016F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_54_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_54_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const sPhone_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sPhone_r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sPhone_r9.errors.minlength);
  }
}
function AddressComponent_div_60_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Jm\u00E9no mus\u00ED b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Jm\u00E9no mus\u00ED m\u00EDt alespo\u0148 3 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_60_div_10_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_60_div_10_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const bName_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bName_r12.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bName_r12.errors.minlength);
  }
}
function AddressComponent_div_60_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " P\u0159\u00EDjmen\u00ED mus\u00ED b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " P\u0159\u00EDjmen\u00ED mus\u00ED m\u00EDt alespo\u0148 3 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_60_div_16_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_60_div_16_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const bLastName_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bLastName_r13.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bLastName_r13.errors.minlength);
  }
}
function AddressComponent_div_60_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00ED b\u00FDt vypln\u011Bna ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm m\u00EDt alespo\u0148 4 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_60_div_23_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_60_div_23_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const bStreet_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bStreet_r14.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bStreet_r14.errors.minlength);
  }
}
function AddressComponent_div_60_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_60_div_29_div_1_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const bStreetNumber_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bStreetNumber_r15.errors.required);
  }
}
function AddressComponent_div_60_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zadej alespo\u0148 2 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_60_div_36_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_60_div_36_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const bCity_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bCity_r16.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bCity_r16.errors.minlength);
  }
}
function AddressComponent_div_60_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zadej alespo\u0148 3 znaky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_60_div_42_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_60_div_42_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const bZipCode_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bZipCode_r17.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bZipCode_r17.errors.minlength);
  }
}
function AddressComponent_div_60_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mus\u00EDm b\u00FDt vypln\u011Bno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_53_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zadej alespo\u0148 9 znak\u016F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_60_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_60_div_53_div_1_Template, 2, 0, "div", 52)(2, AddressComponent_div_60_div_53_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const bPhone_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bPhone_r18.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bPhone_r18.errors.minlength);
  }
}
function AddressComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Billing address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 22)(5, "div", 23)(6, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Jm\u00E9no");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 55, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.firstName, $event) || (ctx_r10.billingAddress.firstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AddressComponent_div_60_div_10_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 23)(12, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "P\u0159\u00EDjmen\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 57, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.lastName, $event) || (ctx_r10.billingAddress.lastName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AddressComponent_div_60_div_16_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 22)(18, "div", 29)(19, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Ulice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 59, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.street, $event) || (ctx_r10.billingAddress.street = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, AddressComponent_div_60_div_23_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 32)(25, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\u010C\u00EDslo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "input", 61, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.streetNumber, $event) || (ctx_r10.billingAddress.streetNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, AddressComponent_div_60_div_29_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 22)(31, "div", 35)(32, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "M\u011Bsto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "input", 63, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.city, $event) || (ctx_r10.billingAddress.city = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, AddressComponent_div_60_div_36_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 38)(38, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "PS\u010C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "input", 65, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.zipCode, $event) || (ctx_r10.billingAddress.zipCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, AddressComponent_div_60_div_42_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 20)(44, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "St\u00E1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 67, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.country, $event) || (ctx_r10.billingAddress.country = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 20)(49, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Telefon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "input", 69, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_div_60_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r10.billingAddress.phone, $event) || (ctx_r10.billingAddress.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, AddressComponent_div_60_div_53_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bName_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    const bLastName_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
    const bStreetNumber_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);
    const bCity_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);
    const bZipCode_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](41);
    const bPhone_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](52);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const createOrderForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const sStreet_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && bName_r12.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && bLastName_r13.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sStreet_r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.streetNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && bStreetNumber_r15.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && bCity_r16.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.zipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && bZipCode_r17.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readOnly", true)("value", ctx_r10.billingAddress.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r10.billingAddress.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && bPhone_r18.invalid);
  }
}
function AddressComponent_div_66_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressComponent_div_66_div_1_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const email_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", email_r19.errors.isInvalidEmail);
  }
}
class AddressComponent {
  constructor(basketSharedService, orderService) {
    this.basketSharedService = basketSharedService;
    this.orderService = orderService;
    this.order = new _model_order_order__WEBPACK_IMPORTED_MODULE_0__.Order();
    this.shippingAddress = new _model_address_address__WEBPACK_IMPORTED_MODULE_2__.Address();
    this.billingAddress = new _model_address_address__WEBPACK_IMPORTED_MODULE_2__.Address();
    this.items = Array();
    this.products = Array();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
    this.init();
  }
  init() {
    this.totalPrice = 0;
    this.order = new _model_order_order__WEBPACK_IMPORTED_MODULE_0__.Order();
    this.shippingAddress = new _model_address_address__WEBPACK_IMPORTED_MODULE_2__.Address();
    this.billingAddress = new _model_address_address__WEBPACK_IMPORTED_MODULE_2__.Address();
    this.shippingAddress.country = 'Czech Republic';
    this.billingAddress.country = 'Czech Republic';
    this.order.billingAsShipping = true;
  }
  ngOnInit() {
    this.basketSharedService.getBasket().subscribe({
      next: data => {
        this.products = data;
        this.items = this.mapToOrderItem(data);
        this.products.map(product => this.totalPrice += product.priceAmount * product.quantity);
      },
      error: err => {
        this.items = Array();
        console.log(err);
      }
    });
  }
  mapToOrderItem(product) {
    return product.map(data => new _model_order_order_item__WEBPACK_IMPORTED_MODULE_1__.OrderItem(data.url, data.quantity));
  }
  createOrder() {
    this.order.items = this.items;
    this.order.shippingAddress = this.shippingAddress;
    this.order.billingAddress = this.order.billingAsShipping ? this.shippingAddress : this.billingAddress;
    this.orderService.createOrder(this.errorDto, this.order).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.errorMessage = '';
        console.log(response);
        console.log('Order created');
      },
      error: err => {
        this.errorMessage = 'Order was not created';
        console.error(this.errorMessage, err);
      }
    });
  }
  asImage(product) {
    return 'data:image/jpeg;base64,' + product.file.bytes;
  }
  getQuantity(product) {
    return 'počet: ' + product.quantity;
  }
  getPrice(product) {
    return product.priceAmount * product.quantity;
  }
  ngOnDestroy() {
    this.init();
    this.destroy$.next(true);
  }
  static #_ = this.ɵfac = function AddressComponent_Factory(t) {
    return new (t || AddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_basket_shared_service__WEBPACK_IMPORTED_MODULE_4__.BasketSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AddressComponent,
    selectors: [["app-address"]],
    decls: 69,
    vars: 22,
    consts: [["createOrderForm", "ngForm"], ["sName", "ngModel"], ["sSurname", "ngModel"], ["sStreet", "ngModel"], ["sStreetNumber", "ngModel"], ["sCity", "ngModel"], ["sZipCode", "ngModel"], ["sCountry", "ngModel"], ["sPhone", "ngModel"], ["sameBillingAndShipping", "ngModel"], ["email", "ngModel"], ["bName", "ngModel"], ["bLastName", "ngModel"], ["bStreet", "ngModel"], ["bStreetNumber", "ngModel"], ["bCity", "ngModel"], ["bZipCode", "ngModel"], ["bCountry", "ngModel"], ["bPhone", "ngModel"], [1, "card"], [1, "mb-3"], ["novalidate", "", 3, "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "sFirstName"], ["type", "text", "id", "sFirstName", "placeholder", "required", "value", "", "minlength", "3", "required", "", "name", "sName", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "sLastName"], ["type", "text", "id", "sLastName", "placeholder", "required", "minlength", "3", "required", "", "name", "sSurname", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-8", "mb-6"], ["for", "sStreet"], ["type", "text", "id", "sStreet", "placeholder", "required", "value", "", "minlength", "4", "required", "", "name", "sStreet", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4", "mb-3"], ["for", "sStreetNumber"], ["type", "text", "id", "sStreetNumber", "placeholder", "required", "required", "", "name", "sStreetNumber", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-7", "mb-3"], ["for", "sCity"], ["type", "text", "id", "sCity", "placeholder", "required", "minlength", "2", "required", "", "name", "sCity", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-5", "mb-3"], ["for", "sZipCode"], ["type", "text", "id", "sZipCode", "placeholder", "required", "minlength", "3", "required", "", "name", "sZipCode", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "sState"], ["type", "text", "id", "sState", "name", "sCountry", 1, "form-control", 3, "ngModelChange", "readOnly", "value", "ngModel"], ["for", "sPhone"], ["type", "text", "id", "sPhone", "minlength", "9", "placeholder", "required", "required", "", "name", "sPhone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "sameBillingAndShipping", 3, "ngModelChange", "value", "ngModel"], [1, "checkmark"], ["id", "billing", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "required", "emailApp", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "float-lg-right", "btn", "btn-info"], [1, "alert", "alert-danger"], [4, "ngIf"], ["id", "billing"], ["for", "bFirstName"], ["type", "text", "id", "bFirstName", "placeholder", "required", "value", "", "required", "", "name", "bName", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bLastName"], ["type", "text", "id", "bLastName", "placeholder", "required", "value", "", "required", "", "name", "bLastName", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bStreet"], ["type", "text", "id", "bStreet", "placeholder", "required", "required", "", "name", "bStreet", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bStreetNumber"], ["type", "text", "id", "bStreetNumber", "placeholder", "required", "required", "", "name", "bStreetNumber", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bTown"], ["type", "text", "id", "bTown", "placeholder", "required", "required", "", "name", "bCity", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bZipCode"], ["type", "text", "id", "bZipCode", "placeholder", "required", "required", "", "name", "bZipCode", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bState"], ["type", "text", "id", "bState", "name", "bCountry", 1, "form-control", 3, "ngModelChange", "readOnly", "value", "ngModel"], ["for", "bPhone"], ["type", "text", "id", "bPhone", "required", "", "placeholder", "required", "name", "bPhone", 1, "form-control", 3, "ngModelChange", "ngModel"]],
    template: function AddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Dodac\u00ED\u00A0adresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "form", 21, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AddressComponent_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          const createOrderForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](createOrderForm_r2.form.valid && ctx.createOrder());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 22)(6, "div", 23)(7, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Jm\u00E9no");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 25, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.firstName, $event) || (ctx.shippingAddress.firstName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AddressComponent_div_11_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 23)(13, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "P\u0159\u00EDjmen\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 28, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.lastName, $event) || (ctx.shippingAddress.lastName = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, AddressComponent_div_17_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 22)(19, "div", 29)(20, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Ulice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "input", 31, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.street, $event) || (ctx.shippingAddress.street = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, AddressComponent_div_24_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 32)(26, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u010C\u00EDslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 34, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.streetNumber, $event) || (ctx.shippingAddress.streetNumber = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AddressComponent_div_30_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 22)(32, "div", 35)(33, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "M\u011Bsto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "input", 37, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.city, $event) || (ctx.shippingAddress.city = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, AddressComponent_div_37_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 38)(39, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "PS\u010C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "input", 40, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.zipCode, $event) || (ctx.shippingAddress.zipCode = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, AddressComponent_div_43_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 20)(45, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "St\u00E1t");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "input", 42, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.country, $event) || (ctx.shippingAddress.country = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 20)(50, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Telefon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "input", 44, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.shippingAddress.phone, $event) || (ctx.shippingAddress.phone = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, AddressComponent_div_54_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "label")(56, "input", 45, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_56_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.order.billingAsShipping, $event) || (ctx.order.billingAsShipping = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "\u00A0\u00A0Faktura\u010Dn\u00ED\u00A0adresa\u00A0je\u00A0stejn\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, AddressComponent_div_60_Template, 54, 17, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 20)(62, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "input", 49, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_64_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.order.email, $event) || (ctx.order.email = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, AddressComponent_div_66_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "\u00A0Dokon\u010Dit objedn\u00E1vku");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const createOrderForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        const sName_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
        const sSurname_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
        const sStreet_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
        const sStreetNumber_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29);
        const sCity_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](36);
        const sZipCode_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](42);
        const sPhone_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53);
        const email_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sName_r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sSurname_r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sStreet_r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.streetNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sStreetNumber_r6.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sCity_r7.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.zipCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sZipCode_r8.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readOnly", true)("value", ctx.shippingAddress.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.shippingAddress.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && sPhone_r9.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.order.billingAsShipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.order.billingAsShipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.order.billingAsShipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.order.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", createOrderForm_r2.submitted && email_r19.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _directive_email_directive_directive__WEBPACK_IMPORTED_MODULE_6__.EmailDirectiveDirective],
    styles: ["h4[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  padding-top: 25px;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n#billing[_ngcontent-%COMP%] {\n  border-top: grey 1px solid;\n  border-bottom: grey 1px solid;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#bPhone[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 80px;\n  font-size: 1.7rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  border: none;\n  border-radius: 10px;\n  background-color: #673AB7;\n  color: #fff;\n  padding: 20px 25px;\n  margin: 20px 0px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline-width: 0;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #311B92;\n  color: #fff;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  transform: scale(2.1);\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUdFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5hbGVydC1kYW5nZXJ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4jYmlsbGluZyB7XG4gIGJvcmRlci10b3A6IGdyZXkgMXB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiBncmV5IDFweCBzb2xpZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI2JQaG9uZSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczQUI3O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDBcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMUI5MjtcbiAgY29sb3I6ICNmZmZcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuMSk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1572:
/*!******************************************************!*\
  !*** ./src/app/advertising/advertising.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvertisingComponent: () => (/* binding */ AdvertisingComponent)
/* harmony export */ });
/* harmony import */ var _model_advertisement_advertisement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/advertisement/advertisement */ 7843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_advertisement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/advertisement.service */ 3526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);







class AdvertisingComponent {
  constructor(advertisementService) {
    this.advertisementService = advertisementService;
    this.advertisementDto = new _model_advertisement_advertisement__WEBPACK_IMPORTED_MODULE_0__.Advertisement();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
  }
  ngOnInit() {
    this.loadAdvertisement();
  }
  loadAdvertisement() {
    console.log("Reloading advertisement");
    this.advertisementService.findAdvertisement(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.advertisementDto = response.data;
      },
      error: err => {
        this.advertisementDto = new _model_advertisement_advertisement__WEBPACK_IMPORTED_MODULE_0__.Advertisement();
        console.error('Unable to load config from advertisement', err);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function AdvertisingComponent_Factory(t) {
    return new (t || AdvertisingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_advertisement_service__WEBPACK_IMPORTED_MODULE_2__.AdvertisementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AdvertisingComponent,
    selectors: [["app-advertising"]],
    decls: 137,
    vars: 12,
    consts: [[1, "container", "pt-4"], [1, "text-center"], [1, "py-3"], [1, "font-monospace"], [1, "fw-bold"], [1, "list-group", "list-group-numbered"], [1, "list-group-item", "pt-3"], [1, "list-group", "list-group-numbered", "pt-3"], [1, "list-group-item"], [1, "list-group", "list-group-numbered", "pt-3", "border-0"], [1, "list-group-item", "border-0"], ["href", "https://www.coi.cz"], [1, "list-group"]],
    template: function AdvertisingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reklama\u010Dn\u00ED\u00A0\u0159\u00E1d");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Tento reklama\u010Dn\u00ED \u0159\u00E1d se vztahuje na prodej zbo\u017E\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " I\u010CO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " , se s\u00EDdlem na adrese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " (d\u00E1le jako ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "prod\u00E1vaj\u00EDc\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ol", 5)(18, "li", 6)(19, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Z\u00E1ruka za jakost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ol", 7)(22, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Prod\u00E1vaj\u00EDc\u00ED odpov\u00EDd\u00E1 kupuj\u00EDc\u00EDmu, \u017Ee v\u011Bc p\u0159i p\u0159evzet\u00ED nem\u00E1 vady. Zejm\u00E9na prod\u00E1vaj\u00EDc\u00ED odpov\u00EDd\u00E1 kupuj\u00EDc\u00EDmu, \u017Ee v dob\u011B, kdy kupuj\u00EDc\u00ED v\u011Bc p\u0159evzal: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ol", 9)(25, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "m\u00E1 v\u011Bc vlastnosti, kter\u00E9 si strany ujednaly, a chyb\u00ED-li ujedn\u00E1n\u00ED takov\u00E9 vlastnosti, pak takov\u00E9, kter\u00E9 prod\u00E1vaj\u00EDc\u00ED nebo v\u00FDrobce popsal nebo kter\u00E9 kupuj\u00EDc\u00ED o\u010Dek\u00E1val s ohledem na povahu zbo\u017E\u00ED a na z\u00E1klad\u011B reklamy prod\u00E1vaj\u00EDc\u00EDho a/nebo v\u00FDrobce; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "se v\u011Bc hod\u00ED k \u00FA\u010Delu, kter\u00FD pro jej\u00ED pou\u017Eit\u00ED prod\u00E1vaj\u00EDc\u00ED uv\u00E1d\u00ED nebo ke kter\u00E9mu se v\u011Bc tohoto druhu obvykle pou\u017E\u00EDv\u00E1; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "je v\u011Bc v odpov\u00EDdaj\u00EDc\u00EDm mno\u017Estv\u00ED, m\u00ED\u0159e nebo hmotnosti;");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "vyhovuje v\u011Bc po\u017Eadavk\u016Fm pr\u00E1vn\u00EDch p\u0159edpis\u016F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Kupuj\u00EDc\u00ED je povinen p\u0159i osobn\u00EDm p\u0159evzet\u00ED od prod\u00E1vaj\u00EDc\u00EDho zkontrolovat p\u0159eb\u00EDran\u00E9 zbo\u017E\u00ED, jeho \u00FAplnost a nepo\u0161kozenost obal\u016F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Kupuj\u00EDc\u00ED je povinen p\u0159i p\u0159evzet\u00ED od p\u0159epravce \u0159\u00E1dn\u011B zkontrolovat stav p\u0159eb\u00EDran\u00E9ho zbo\u017E\u00ED, jeho \u00FAplnost a nepo\u0161kozenost obal\u016F podle p\u0159epravn\u00EDho listu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "li", 6)(38, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Zp\u016Fsob uplatn\u011Bn\u00ED reklamace.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ol", 7)(41, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Pr\u00E1va kupuj\u00EDc\u00EDho z vadn\u00E9ho pln\u011Bn\u00ED (d\u00E1le jako \u201E");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "reklamace");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\u201C) mus\u00ED b\u00FDt uplatn\u011Bna v souladu s t\u00EDmto reklama\u010Dn\u00EDm \u0159\u00E1dem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Kupuj\u00EDc\u00ED m\u00E1 pr\u00E1vo uplatnit reklamaci u prod\u00E1vaj\u00EDc\u00EDho, a to na adrese: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Prod\u00E1vaj\u00EDc\u00ED je povinen zabezpe\u010Dit p\u0159\u00EDtomnost pracovn\u00EDka pov\u011B\u0159en\u00E9ho p\u0159ij\u00EDmat reklamace po celou provozn\u00ED dobu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Kupuj\u00EDc\u00ED m\u00E1 pr\u00E1vo uplatnit reklamaci u osoby, kter\u00E1 je k tomu ur\u010Dena v p\u0159\u00EDslu\u0161n\u00E9m z\u00E1ru\u010Dn\u00EDm list\u011B a/nebo v p\u0159islu\u0161n\u00E9m da\u0148ov\u00E9m dokladu, je-li ur\u010Den\u00E1 osoba v m\u00EDst\u011B prod\u00E1vaj\u00EDc\u00EDho nebo v m\u00EDst\u011B kupuj\u00EDc\u00EDmu bli\u017E\u0161\u00EDm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Kupuj\u00EDc\u00ED je povinen p\u0159i reklamaci dolo\u017Eit datum koup\u011B dan\u00E9ho zbo\u017E\u00ED, a to zejm\u00E9na p\u0159edlo\u017Een\u00EDm p\u0159\u00EDslu\u0161n\u00E9ho da\u0148ov\u00E9ho dokladu a/nebo z\u00E1ru\u010Dn\u00EDho listu, pop\u0159. jin\u00FDm v\u011Brohodn\u00FDm zp\u016Fsobem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Kupuj\u00EDc\u00ED nem\u00E1 pr\u00E1vo uplatnit reklamaci na vadu, kter\u00E1 byla vyt\u00FDk\u00E1na ji\u017E v minulosti, pokud na ni byla poskytnuta p\u0159im\u011B\u0159en\u00E1 sleva z kupn\u00ED ceny dan\u00E9ho zbo\u017E\u00ED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "li", 6)(59, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Lh\u016Fty pro uplatn\u011Bn\u00ED a vy\u0159\u00EDzen\u00ED reklamace.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ol", 7)(62, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Poskytl-li prod\u00E1vaj\u00EDc\u00ED nad r\u00E1mec z\u00E1konn\u00FDch povinnost\u00ED (zejm\u00E9na z\u00E1konn\u00E9 lh\u016Fty) z\u00E1ruku za jakost, jej\u00ED uplatn\u011Bn\u00ED se \u0159\u00EDd\u00ED t\u00EDmto reklama\u010Dn\u00EDm \u0159\u00E1dem, pokud z\u00E1ru\u010Dn\u00ED list nebo smlouva nestanov\u00ED jinak. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Lh\u016Fta pro uplatn\u011Bn\u00ED reklamace za\u010D\u00EDn\u00E1 b\u011B\u017Eet dnem p\u0159evzet\u00ED zbo\u017E\u00ED kupuj\u00EDc\u00EDm, kter\u00FD je uveden v da\u0148ov\u00E9m dokladu nebo na z\u00E1ru\u010Dn\u00EDm list\u011B \u010Di jin\u00E9m takov\u00E9m dokumentu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Z\u00E1ru\u010Dn\u00ED lh\u016Fta pro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " \u010Din\u00ED pro nov\u00E9 zbo\u017E\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Prod\u00E1vaj\u00EDc\u00ED poskytuje z\u00E1ruku kupuj\u00EDc\u00EDmu, kter\u00FD nen\u00ED spot\u0159ebitelem (tj. pro podnikatele), v p\u0159\u00EDpad\u011B, \u017Ee je to u dan\u00E9ho zbo\u017E\u00ED v\u00FDslovn\u011B uvedeno. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "U spot\u0159ebn\u00EDho zbo\u017E\u00ED je kupuj\u00EDc\u00ED opr\u00E1vn\u011Bn uplatnit pr\u00E1vo z vad pouze do data vyzna\u010Den\u00E9ho na obalu takov\u00E9ho zbo\u017E\u00ED, je-li tato lh\u016Fta krat\u0161\u00ED ne\u017E lh\u016Fta uveden\u00E1 v odst. 3.3 tohoto reklama\u010Dn\u00EDho \u0159\u00E1du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Kupuj\u00EDc\u00ED je povinen reklamovat zbo\u017E\u00ED bez zbyte\u010Dn\u00E9ho odkladu pot\u00E9, co zjist\u00ED, \u017Ee je na zbo\u017E\u00ED vada. Prod\u00E1vaj\u00EDc\u00ED neodpov\u00EDd\u00E1 za zv\u011Bt\u0161en\u00ED rozsahu po\u0161kozen\u00ED, pokud kupuj\u00EDc\u00ED zbo\u017E\u00ED u\u017E\u00EDv\u00E1, a\u010Dkoliv o vad\u011B v\u00ED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Reklamuje-li kupuj\u00EDc\u00ED zbo\u017E\u00ED opr\u00E1vn\u011Bn\u011B, neb\u011B\u017E\u00ED lh\u016Fta pro reklamaci po dobu, po kterou je zbo\u017E\u00ED v oprav\u011B, a kupuj\u00EDc\u00ED jej nem\u016F\u017Ee u\u017E\u00EDvat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Prod\u00E1vaj\u00EDc\u00ED je povinen o reklamaci rozhodnout ihned, ve slo\u017Eit\u011Bj\u0161\u00EDch p\u0159\u00EDpadech do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, ". Do t\u00E9to lh\u016Fty se nezapo\u010D\u00EDt\u00E1v\u00E1 doba pot\u0159ebn\u00E1 k odborn\u00E9mu posouzen\u00ED vady. Prod\u00E1vaj\u00EDc\u00ED je povinen vydat kupuj\u00EDc\u00EDmu p\u00EDsemn\u00E9 potvrzen\u00ED, ve kter\u00E9m bude uvedeno datum a m\u00EDsto uplatn\u011Bn\u00ED reklamace, charakteristika vyt\u00FDkan\u00E9 vady, po\u017Eadovan\u00FD zp\u016Fsob vy\u0159\u00EDzen\u00ED reklamace a zp\u016Fsob, jak\u00FDm bude kupuj\u00EDc\u00ED informov\u00E1n o jej\u00EDm vy\u0159\u00EDzen\u00ED. Reklamace v\u010Detn\u011B odstran\u011Bn\u00ED vady mus\u00ED b\u00FDt vy\u0159\u00EDzena bez zbyte\u010Dn\u00E9ho odkladu, nejpozd\u011Bji do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, " ode dne uplatn\u011Bn\u00ED reklamace, pokud se prod\u00E1vaj\u00EDc\u00ED s kupuj\u00EDc\u00EDm nedohodne na del\u0161\u00ED lh\u016Ft\u011B. Marn\u00E9 uplynut\u00ED t\u00E9to lh\u016Fty se pova\u017Euje za podstatn\u00E9 poru\u0161en\u00ED smlouvy. Zp\u016Fsob vy\u0159\u00EDzen\u00ED reklamace a dobu jej\u00EDho trv\u00E1n\u00ED je prod\u00E1vaj\u00EDc\u00ED povinen kupuj\u00EDc\u00EDmu p\u00EDsemn\u011B potvrdit. Kupuj\u00EDc\u00ED nen\u00ED opr\u00E1vn\u011Bn bez souhlasu prod\u00E1vaj\u00EDc\u00EDho m\u011Bnit jednou zvolen\u00FD zp\u016Fsob vy\u0159\u00EDzen\u00ED reklamace vyjma situace, kdy j\u00EDm zvolen\u00FD zp\u016Fsob \u0159e\u0161en\u00ED nen\u00ED mo\u017En\u00E9 v\u016Fbec nebo v\u010Das uskute\u010Dnit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Je-li reklamace uzn\u00E1na za opr\u00E1vn\u011Bnou, m\u00E1 kupuj\u00EDc\u00ED pr\u00E1vo na \u00FAhradu \u00FA\u010Deln\u011B vynalo\u017Een\u00FDch n\u00E1klad\u016F spojen\u00FDch s uplatn\u011Bn\u00EDm reklamace. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "V p\u0159\u00EDpad\u011B vy\u0159e\u0161en\u00ED reklamace v\u00FDm\u011Bnou zbo\u017E\u00ED neb\u011B\u017E\u00ED nov\u00E1 lh\u016Fta pro uplatn\u011Bn\u00ED pr\u00E1v z vadn\u00E9ho pln\u011Bn\u00ED, ale pokra\u010Duje b\u011Bh lh\u016Fty reklamovan\u00E9ho zbo\u017E\u00ED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "li", 6)(95, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "V\u00FDjimky z odpov\u011Bdnosti za vady.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "ol", 7)(98, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Prod\u00E1vaj\u00EDc\u00ED neodpov\u00EDd\u00E1 za vady zbo\u017E\u00ED v n\u00E1sleduj\u00EDc\u00EDch p\u0159\u00EDpadech: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "ol", 7)(101, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "je-li vada na zbo\u017E\u00ED v dob\u011B p\u0159evzet\u00ED a pro takovou vadu je sjedn\u00E1na sleva z kupn\u00ED ceny; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "je zp\u016Fsobena kupuj\u00EDc\u00EDm a vznikla nespr\u00E1vn\u00FDm u\u017E\u00EDv\u00E1n\u00EDm, skladov\u00E1n\u00EDm, nespr\u00E1vnou \u00FAdr\u017Ebou, z\u00E1sahem kupuj\u00EDc\u00EDho \u010Di mechanick\u00FDm po\u0161kozen\u00EDm zbo\u017E\u00ED; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "vada na zbo\u017E\u00ED vznikla opot\u0159eben\u00EDm zp\u016Fsoben\u00FDm obvykl\u00FDm u\u017E\u00EDv\u00E1n\u00EDm nebo vypl\u00FDv\u00E1-li to z povahy v\u011Bci; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "jde-li o zbo\u017E\u00ED pou\u017Eit\u00E9 a vada odpov\u00EDd\u00E1 m\u00ED\u0159e pou\u017E\u00EDv\u00E1n\u00ED nebo opot\u0159eben\u00ED, kter\u00E9 m\u011Blo zbo\u017E\u00ED v dob\u011B p\u0159evzet\u00ED zbo\u017E\u00ED kupuj\u00EDc\u00EDm; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "mechanick\u00E9 po\u0161kozen\u00ED zbo\u017E\u00ED;");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "vada vznikla neodbornou instalac\u00ED, zach\u00E1zen\u00EDm, obsluhou nebo zanedb\u00E1n\u00EDm p\u00E9\u010De o zbo\u017E\u00ED; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "proveden\u00ED nekvalifikovan\u00E9ho z\u00E1sahu \u010Di zm\u011Bna parametr\u016F;");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "pou\u017E\u00EDv\u00E1n\u00ED zbo\u017E\u00ED v podm\u00EDnk\u00E1ch, kter\u00E9 neodpov\u00EDdaj\u00ED svoj\u00ED teplotou, pra\u0161nost\u00ED, vlhkost\u00ED, chemick\u00FDmi a mechanick\u00FDmi vlivy prost\u0159ed\u00ED, kter\u00E9 je prodejcem nebo v\u00FDrobcem ur\u010Deno; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "po\u0161kozen\u00ED v d\u016Fsledku vy\u0161\u0161\u00ED moci;");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "li", 6)(120, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Z\u00E1v\u011Bre\u010Dn\u00E1 ustanoven\u00ED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "ol", 7)(123, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Ve vztahu ke spln\u011Bn\u00ED povinnosti dle \u00A714 z\u00E1kona \u010D. 634/1992 Sb. prod\u00E1vaj\u00EDc\u00ED informuje kupuj\u00EDc\u00EDho o mo\u017Enosti vyu\u017E\u00EDt pro p\u0159\u00EDpadn\u00E9 mimosoudn\u00ED \u0159e\u0161en\u00ED spot\u0159ebitelsk\u00FDch spor\u016F \u010Ceskou obchodn\u00ED inspekci ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, " coi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, ", je\u017E je notifikovan\u00FDm subjektem mimosoudn\u00EDho \u0159e\u0161en\u00ED spot\u0159ebitelsk\u00FDch spor\u016F veden\u00FDm na seznamu Evropsk\u00E9 komise. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "li", 6)(129, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "\u00DA\u010Dinnost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "ol", 12)(132, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, " Tento reklama\u010Dn\u00ED \u0159\u00E1d nab\u00FDv\u00E1 \u00FA\u010Dinnosti dne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](136, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.who);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.ico);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.consumer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.complaintDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.complaintDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.complaintDaysDelayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](136, 9, ctx.advertisementDto.dueDate, "dd.MM.yyyy"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8301:
/*!**********************************!*\
  !*** ./src/app/app-constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConstants: () => (/* binding */ AppConstants)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPhone */ 8773);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9634);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class AppConstants {
  static #_ = this.iconPhone = _fortawesome_free_solid_svg_icons_faPhone__WEBPACK_IMPORTED_MODULE_0__.faPhone;
  static #_2 = this.iconEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEnvelope;
  static #_3 = this.iconSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSearch;
  static #_4 = this.iconShipping = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faShippingFast;
  static #_5 = this.iconPolicy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faShield;
  static #_6 = this.iconBasket = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faShoppingCart;
  static #_7 = this.iconUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUser;
  static #_8 = this.iconHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faHome;
  static #_9 = this.iconPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPlus;
  static #_10 = this.iconMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faMinus;
  static #_11 = this.iconBin = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTrash;
  static #_12 = this.iconLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowLeft;
  static get baseUrl() {
    //return 'http://localhost:8080';
    return 'https://waldashop.herokuapp.com';
  }
  static get acceptJson() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Accept', 'application/json');
  }
  static get contentTypeAndAcceptJson() {
    return this.acceptJson.set('Content-Type', 'application/json');
  }
  static get emptyDefaultImage() {
    return '/assets/images/empty-product.png';
  }
  static get postOfficeDelivery() {
    return '/assets/images/delivery-type/posta.jpg';
  }
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ 8712);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.component */ 4790);
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address/address.component */ 7156);
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery/delivery.component */ 934);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 1696);
/* harmony import */ var _advertising_advertising_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advertising/advertising.component */ 1572);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms/terms.component */ 544);
/* harmony import */ var _product_list_home_product_list_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list-home/product-list-home.component */ 1092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);











const routes = [
// {path: '', pathMatch: 'full', redirectTo: 'products'},
{
  path: 'products',
  component: _product_list_home_product_list_home_component__WEBPACK_IMPORTED_MODULE_7__.ProductListHomeComponent
}, {
  path: 'products/:categoryUrl',
  component: _product_list_home_product_list_home_component__WEBPACK_IMPORTED_MODULE_7__.ProductListHomeComponent
}, {
  path: 'product-detail/:productUrl',
  component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailComponent
}, {
  path: 'cart',
  component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__.CartComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
}, {
  path: 'delivery-address',
  component: _address_address_component__WEBPACK_IMPORTED_MODULE_2__.AddressComponent
}, {
  path: 'delivery',
  component: _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_3__.DeliveryComponent
}, {
  path: 'advertising',
  component: _advertising_advertising_component__WEBPACK_IMPORTED_MODULE_5__.AdvertisingComponent
}, {
  path: 'terms',
  component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__.TermsComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 708);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2152);




class AppComponent {
  constructor() {
    this.title = 'eshop-ui-customer';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [[1, "container", "mt-0", "mt-sm-5"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ 1838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 708);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _directive_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/highlight.directive */ 1719);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 8712);
/* harmony import */ var _directive_email_directive_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/email-directive.directive */ 8935);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ 4790);
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address/address.component */ 7156);
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delivery/delivery.component */ 934);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 1696);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var _advertising_advertising_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./advertising/advertising.component */ 1572);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terms/terms.component */ 544);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 7165);
/* harmony import */ var _ngx_slider_wrapper_ngx_slider_wrapper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ngx-slider-wrapper/ngx-slider-wrapper.component */ 8512);
/* harmony import */ var _product_list_home_product_list_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-list-home/product-list-home.component */ 1092);
/* harmony import */ var _enum_drop_down_form_enum_drop_down_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./enum-drop-down-form/enum-drop-down.component */ 3491);
/* harmony import */ var _variant_catalog_filter_variant_catalog_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./variant-catalog-filter/variant-catalog-filter.component */ 7650);
/* harmony import */ var _variant_catalog_filter_item_variant_catalog_filter_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./variant-catalog-filter-item/variant-catalog-filter-item.component */ 100);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7580);




























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__.FontAwesomeModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_26__.NgxSliderModule, _ngx_slider_wrapper_ngx_slider_wrapper_component__WEBPACK_IMPORTED_MODULE_14__.NgxSliderWrapperComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent, _product_list_home_product_list_home_component__WEBPACK_IMPORTED_MODULE_15__.ProductListHomeComponent, _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__.ProductDetailComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _directive_highlight_directive__WEBPACK_IMPORTED_MODULE_5__.HighlightDirective, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _directive_email_directive_directive__WEBPACK_IMPORTED_MODULE_7__.EmailDirectiveDirective, _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__.CartComponent, _address_address_component__WEBPACK_IMPORTED_MODULE_9__.AddressComponent, _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_10__.DeliveryComponent, _advertising_advertising_component__WEBPACK_IMPORTED_MODULE_12__.AdvertisingComponent, _terms_terms_component__WEBPACK_IMPORTED_MODULE_13__.TermsComponent, _enum_drop_down_form_enum_drop_down_component__WEBPACK_IMPORTED_MODULE_16__.EnumDropDownComponent, _variant_catalog_filter_variant_catalog_filter_component__WEBPACK_IMPORTED_MODULE_17__.VariantCatalogFilterComponent, _variant_catalog_filter_item_variant_catalog_filter_item_component__WEBPACK_IMPORTED_MODULE_18__.VariantCatalogFilterItemComponent],
    imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__.FontAwesomeModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_26__.NgxSliderModule, _ngx_slider_wrapper_ngx_slider_wrapper_component__WEBPACK_IMPORTED_MODULE_14__.NgxSliderWrapperComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_27__.NgxPaginationModule],
    exports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent, _enum_drop_down_form_enum_drop_down_component__WEBPACK_IMPORTED_MODULE_16__.EnumDropDownComponent]
  });
})();

/***/ }),

/***/ 4790:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _model_delivery_payment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/delivery/payment-model */ 5399);
/* harmony import */ var _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/delivery/payment-type */ 6952);
/* harmony import */ var _model_delivery_delivery_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/delivery/delivery-model */ 3389);
/* harmony import */ var _model_header_header_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/header/header-dto */ 5031);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_basket_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/basket-shared.service */ 4155);
/* harmony import */ var _service_payment_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/payment-shared.service */ 3729);
/* harmony import */ var _service_header_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/header-shared.service */ 5758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);













const _c0 = () => ["/delivery"];
function CartComponent_div_17_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Cena za kus ", product_r2.priceAmount, "");
  }
}
function CartComponent_div_17_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Cena za kus ", product_r2.priceAmount, "");
  }
}
function CartComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 21)(3, "div", 22)(4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 25)(7, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 28)(12, "div", 29)(13, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_fa_icon_click_13_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeQuantity(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_a_click_14_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addQuantity(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_fa_icon_click_16_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addQuantity(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 32)(18, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, CartComponent_div_17_span_20_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_fa_icon_click_21_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeBasket(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 35)(23, "div", 36)(24, "div", 37)(25, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_fa_icon_click_25_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeQuantity(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_a_click_26_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addQuantity(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_fa_icon_click_28_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addQuantity(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 39)(30, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "fa-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_div_17_Template_fa_icon_click_32_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeBasket(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, CartComponent_div_17_div_34_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("routerLink", "/product-detail/", product_r2.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.asImage(product_r2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("routerLink", "/product-detail/", product_r2.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](product_r2.isbn);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faMinus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", product_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faPlus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r2.getPrice(product_r2), "\u00A0K\u010D");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r2.quantity > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faMinus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", product_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faPlus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r2.getPrice(product_r2), "\u00A0K\u010D");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r2.faDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r2.quantity > 1);
  }
}
class CartComponent {
  constructor(basketService, deliveryService, headerSharedService) {
    this.basketService = basketService;
    this.deliveryService = deliveryService;
    this.headerSharedService = headerSharedService;
    this.isEmpty = true;
    this.products = [];
    this.paymentModel = _model_delivery_payment_model__WEBPACK_IMPORTED_MODULE_0__.PaymentModel.bankTransfer;
    this.deliveryModel = _model_delivery_delivery_model__WEBPACK_IMPORTED_MODULE_2__.DeliveryModel.packageToMall;
    this.totalPrice = 0;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.faPlus = _app_constants__WEBPACK_IMPORTED_MODULE_4__.AppConstants.iconPlus;
    this.faMinus = _app_constants__WEBPACK_IMPORTED_MODULE_4__.AppConstants.iconMinus;
    this.faDelete = _app_constants__WEBPACK_IMPORTED_MODULE_4__.AppConstants.iconBin;
    this.faArrowLeft = _app_constants__WEBPACK_IMPORTED_MODULE_4__.AppConstants.iconLeft;
  }
  ngOnInit() {
    this.basketService.getBasket().subscribe(msg => {
      this.products = msg;
      this.products.map(product => this.totalPrice += product.priceAmount * product.quantity);
    });
    this.headerSharedService.getHeaderGuideAsObservable().subscribe(data => console.log(data));
    this.deliveryService.getPaymentObservable().subscribe({
      next: paymentType => {
        switch (paymentType) {
          case _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_1__.PaymentType.PROFORMA:
            this.paymentModel = _model_delivery_payment_model__WEBPACK_IMPORTED_MODULE_0__.PaymentModel.proforma;
            break;
          default:
            {
              this.paymentModel = _model_delivery_payment_model__WEBPACK_IMPORTED_MODULE_0__.PaymentModel.bankTransfer;
              break;
            }
        }
      },
      error: err => {
        console.error('Error when obtain payment model', err);
        this.paymentModel = _model_delivery_payment_model__WEBPACK_IMPORTED_MODULE_0__.PaymentModel.bankTransfer;
      }
    });
    console.log('Selected last product in cart component  is', this.products.length);
  }
  getPrice(product) {
    return product.priceAmount * product.quantity;
  }
  getTotalPrice() {
    this.totalPrice = 0;
    this.products.forEach(data => this.totalPrice += data.priceAmount * data.quantity);
  }
  getItem() {
    switch (this.products.length) {
      case 1:
        return 'položku';
      case 2:
        return 'položky';
      case 3:
        return 'položky';
      case 4:
        return 'položky';
      default:
        return 'položek';
    }
  }
  removeBasket(product) {
    this.basketService.removeFromBasket(product);
    this.getTotalPrice();
  }
  addQuantity(product) {
    if (product.quantity >= 10) {
      return;
    }
    this.basketService.addQuantity(product);
    this.getTotalPrice();
  }
  removeQuantity(product) {
    if (product.quantity < 2) {
      product.quantity = 1;
      return;
    }
    this.basketService.removeQuantity(product);
    this.getTotalPrice();
  }
  ngOnDestroy() {
    this.destroy$.complete();
    this.destroy$.next(true);
  }
  asImage(product) {
    return 'data:image/jpeg;base64,' + product.file.bytes;
  }
  activePaymentStep() {
    const headerDto = new _model_header_header_dto__WEBPACK_IMPORTED_MODULE_3__.HeaderDto();
    headerDto.stepCart = false;
    headerDto.showHeaderGuide = true;
    headerDto.address = false;
    headerDto.deliveryAndPayment = true;
    this.headerSharedService.updateValue(headerDto);
  }
  static #_ = this.ɵfac = function CartComponent_Factory(t) {
    return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_basket_shared_service__WEBPACK_IMPORTED_MODULE_5__.BasketSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_payment_shared_service__WEBPACK_IMPORTED_MODULE_6__.PaymentSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_header_shared_service__WEBPACK_IMPORTED_MODULE_7__.HeaderSharedService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CartComponent,
    selectors: [["app-cart"]],
    decls: 47,
    vars: 12,
    consts: [[1, "h-100"], [1, "container"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-9", "align-self-center"], [1, "card"], [1, "card-body", "p-4"], [1, "mb-3"], ["href", "#!", 1, "text-body", "me-2"], [1, "me-2", 3, "icon"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-1"], [1, "mb-0"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "card", "mb-3"], [1, "card-body"], [1, "ms-3"], [1, "d-flex", "justify-content-between", "px-4"], [1, "mb-1", "text-start"], [1, "mb-1", "text-end"], [1, "d-flex", "justify-content-end", "pt-3"], [1, "btn", "btn-primary", 3, "click", "routerLink"], [1, "d-flex", "justify-content-center", "justify-content-sm-start"], [1, "d-flex", "flex-row", "align-items-center"], [1, "content", "text-start"], ["alt", "Shopping item", 1, "img-fluid", "rounded-3", "pointer", "ms-3", "md-sm-0", 3, "routerLink", "src"], [1, "ms-4", "inner-content", "text-start", "text-sm-center"], [1, "pointer", 3, "routerLink"], [1, "small", "mb-2"], [1, "d-none", "d-md-flex", "w-100", "align-items-center"], [1, "col", "pointer", "text-center", "w-50"], [3, "click", "icon"], [1, "me-2", "ms-2", 3, "click"], [1, "align-items-end", "pricing", "text-start", "text-sm-center", "text-md-end", "w-50"], ["class", "d-inline", 4, "ngIf"], [1, "pointer", "bg-gray", "ms-2", 3, "click", "icon"], [1, "row", "d-flex", "d-md-none"], [1, "col-4", "col-sm-5", "mt-2"], [1, "pointer", "text-start", "text-sm-center", "me-sm-5"], [1, "me-1", 3, "click"], [1, "col-8", "col-sm-7", "mt-2", "text-center", "text-sm-start"], [1, "ms-1", "d-inline"], [1, "pointer", "bg-gray", "d-inline", "ms-2", "mb-1", 3, "click", "icon"], [1, "d-flex", "d-md-none"], ["class", "text-end text-sm-center me-1 me-sm-0 mt-1 w-100", 4, "ngIf"], [1, "d-inline"], [1, "text-end", "text-sm-center", "me-1", "me-sm-0", "mt-1", "w-100"]],
    template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Pokra\u010Dovat v n\u00E1kupu");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "div")(13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Shopping cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, CartComponent_div_17_Template, 35, 19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div")(21, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Shrnut\u00ED objedn\u00E1vky");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 16)(25, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Polo\u017Eky");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 16)(30, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 16)(35, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 16)(40, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Celkem");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 19)(45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CartComponent_Template_button_click_45_listener() {
          return ctx.activePaymentStep();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " Pokra\u010Dovat v objedn\u00E1vce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("M\u00E1te ", ctx.products.length, " ", ctx.getItem(), " v ko\u0161\u00EDku");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.totalPrice, "\u00A0K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.deliveryModel.deliveryType);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.deliveryModel.price, " K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.paymentModel.paymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.paymentModel.price, " K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.totalPrice + ctx.paymentModel.price + ctx.deliveryModel.price, "\u00A0K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent],
    styles: [".content[_ngcontent-%COMP%] {\n  height: 105px;\n  width: 105px;\n}\n\n.pricing[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.inner-content[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  max-height: 100px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.bg-gray[_ngcontent-%COMP%] {\n  color: #7c878e;\n}\n\n@media only screen and (min-device-width: 320px) {\n  .inner-content[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdDQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLFlBQUE7RUFHRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gIGhlaWdodDogMTA1cHg7XG4gIHdpZHRoOiAxMDVweDtcbn1cblxuLnByaWNpbmd7XG4gIHdpZHRoOiAzMCU7XG59XG4uaW5uZXItY29udGVudHtcbiAgbWF4LXdpZHRoOjIwMHB4O1xufVxuXG4uaW1nLWZsdWlke1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5iZy1ncmF5e1xuICBjb2xvcjogIzdjODc4ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpe1xuICAuaW5uZXItY29udGVudHtcbiAgICB3aWR0aDoxNjBweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1778:
/*!*************************************************!*\
  !*** ./src/app/common/abstract/base-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService),
/* harmony export */   ErrorDto: () => (/* binding */ ErrorDto)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7919);

const friendlyHttpStatus = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  306: 'Unused',
  307: 'Temporary Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Required',
  413: 'Request Entry Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported'
};
class ErrorDto {}
class BaseService {
  constructor() {}
  handleError(error, errorDto) {
    errorDto.httpStatus = error.status == 0 ? 500 : error.status;
    errorDto.httpStatusMessage = friendlyHttpStatus[errorDto.httpStatus];
    errorDto.errorMessage = error.status == 0 ? 'Server site unavailable' : error.error.message;
    console.error(error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => error);
  }
  addParamIntoUrl(url, parameter) {
    return url + '/' + parameter;
  }
}

/***/ }),

/***/ 8712:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _Users_david_stransky_java_projects_eshop_ui_customer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _model_email_write_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/email/write-us */ 4177);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/email.service */ 7187);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _directive_email_directive_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directive/email-directive.directive */ 8935);












const _c0 = ["contactUsForm"];
function ContactComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email je povinn\u00FD. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Promi\u0148, ale vypad\u00E1 to na nevalidn\u00ED emailovou adresu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContactComponent_div_15_div_1_Template, 2, 0, "div", 23)(2, ContactComponent_div_15_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const email_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", email_r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", email_r4.errors.isInvalidEmail && ctx_r2.writeUs.emailFrom);
  }
}
function ContactComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("className", ctx_r2.clazz);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.notificationMessage, " ");
  }
}
function ContactComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Zpr\u00E1va nen\u00ED vypln\u011Bna! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Promi\u0148, ale na dotaz to je to p\u0159\u00EDli\u0161 kr\u00E1tk\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ContactComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContactComponent_div_28_div_1_Template, 2, 0, "div", 13)(2, ContactComponent_div_28_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const body_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", body_r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", body_r5.errors.minlength);
  }
}
class ContactComponent {
  constructor(emailService, spinner, router) {
    this.emailService = emailService;
    this.spinner = spinner;
    this.router = router;
    this.writeUs = new _model_email_write_us__WEBPACK_IMPORTED_MODULE_1__.WriteUs();
    this.send = false;
    this.notificationMessage = 'Email odeslán';
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
    this.clazz = 'alert alert-danger';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {}
  contactUs() {
    this.spinner.show().then(r => r);
    this.emailService.contactUs(this.writeUs, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        console.log('Email contact us send', response);
        this.notificationMessage = 'Email odeslán';
        this.clazz = 'alert alert-success';
        this.send = true;
        this.myForm.resetForm();
        this.spinner.hide().then(() => this.deleteSuccessfulMessage());
      },
      error: err => {
        this.notificationMessage = 'Oops to je nemilé, chyba je na Naši straně.\n Funkce je dočasně mimo službu!';
        this.send = true;
        this.clazz = 'alert alert-danger';
        console.error('Email contact us failed', err);
        this.spinner.hide().then(() => this.deleteSuccessfulMessage());
      }
    });
  }
  deleteSuccessfulMessage() {
    var _this = this;
    return (0,_Users_david_stransky_java_projects_eshop_ui_customer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield new Promise(resolve => setTimeout(resolve, 4000)).then(() => _this.router.navigateByUrl('/product-detail/'));
    })();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_email_service__WEBPACK_IMPORTED_MODULE_3__.EmailService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    viewQuery: function ContactComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.myForm = _t.first);
      }
    },
    decls: 32,
    vars: 8,
    consts: [["contactUsForm", "ngForm"], ["name", "ngModel"], ["email", "ngModel"], ["phone", "ngModel"], ["body", "ngModel"], [1, "container", "py-4", "border", "border-1", "rounded", "rounded-3", "col-6"], [1, "h1-responsive", "font-weight-bold", "text-center", "my-4"], ["id", "contactForm", "novalidate", "", 3, "ngSubmit"], [1, "form-floating", "mb-3"], ["type", "text", "name", "name", "id", "contactName", "placeholder", "Jm\u00E9no", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "contactName"], ["type", "text", "name", "email", "placeholder", "Email *", "id", "contact-us-email", "required", "", "emailApp", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "contact-us-email"], [4, "ngIf"], ["type", "text", "name", "phone", "placeholder", "Telefon\u00ED \u010D\u00EDslo", "id", "contact-us-phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "contact-us-phone"], [3, "className", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-spin-clockwise", "fullScreen", "true"], ["name", "body", "id", "contact-us-message", "required", "", "minlength", "14", "maxlength", "254", 1, "form-control", 2, "width", "100%", "height", "150px", "padding", "15px", 3, "ngModelChange", "placeholder", "ngModel"], ["for", "contact-us-message"], ["class", "alert alert-danger", 4, "ngIf"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg"], ["class", "alert alert-danger", "type", "danger", 4, "ngIf"], ["type", "danger", 1, "alert", "alert-danger"], [3, "className"], [1, "alert", "alert-danger"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Napi\u0161te n\u00E1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          const contactUsForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](contactUsForm_r2.form.valid && ctx.contactUs());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 8)(6, "input", 9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.writeUs.name, $event) || (ctx.writeUs.name = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Jm\u00E9no");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "input", 11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.writeUs.emailFrom, $event) || (ctx.writeUs.emailFrom = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ContactComponent_div_15_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8)(17, "input", 14, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.writeUs.phoneNumber, $event) || (ctx.writeUs.phoneNumber = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Telefon\u00ED \u010D\u00EDslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ContactComponent_div_21_Template, 2, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ngx-spinner", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 8)(24, "textarea", 18, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.writeUs.body, $event) || (ctx.writeUs.body = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Co chcete \u0159\u00EDci...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ContactComponent_div_28_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 21)(30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const contactUsForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        const email_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const body_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.writeUs.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.writeUs.emailFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", contactUsForm_r2.submitted && email_r4.errors && (email_r4.invalid || email_r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.writeUs.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.send);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", "Co chcete \u0159\u00EDct...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.writeUs.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", contactUsForm_r2.submitted && body_r5.errors && (body_r5.invalid || body_r5.touched));
      }
    },
    dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _directive_email_directive_directive__WEBPACK_IMPORTED_MODULE_4__.EmailDirectiveDirective],
    styles: [".form-floating[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZsb2F0aW5nID4gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 934:
/*!************************************************!*\
  !*** ./src/app/delivery/delivery.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryComponent: () => (/* binding */ DeliveryComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/delivery/payment-type */ 6952);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_payment_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/payment-shared.service */ 3729);
/* harmony import */ var _service_header_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/header-shared.service */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);








const _c0 = () => ["/delivery-address"];
class DeliveryComponent {
  constructor(deliveryService, headerSharedService) {
    this.deliveryService = deliveryService;
    this.headerSharedService = headerSharedService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.isTransferSelectedDefault = true;
    this.isProformaSelected = false;
    this.postOfficePrice = 125;
    // TODO will be reloaded from config
    this.defaultBankTransferPrice = 0;
    // TODO will be reloaded from config
    this.proformaPrice = 75;
  }
  static getPrice(price) {
    return price === 0 ? 'Zdarma' : price + 'Kč';
  }
  ngOnInit() {
    this.deliveryService.getPaymentObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: paymentType => {
        switch (paymentType) {
          case _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.PROFORMA:
            this.isTransferSelectedDefault = false;
            this.isProformaSelected = true;
            break;
          default:
            {
              this.isTransferSelectedDefault = true;
              this.isProformaSelected = false;
              break;
            }
        }
      },
      error: err => {
        console.error('Error when obtain delivery', err);
        this.setPaymentType(_model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.BANK_TRANSFER);
      }
    });
  }
  getProformaPrice() {
    return DeliveryComponent.getPrice(this.proformaPrice);
  }
  getBankTransferPrice() {
    return DeliveryComponent.getPrice(this.defaultBankTransferPrice);
  }
  applyProforma() {
    this.setPaymentType(_model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.PROFORMA);
    this.isProformaSelected = true;
    this.isTransferSelectedDefault = false;
  }
  applyTransfer() {
    this.setPaymentType(_model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.BANK_TRANSFER);
    this.isProformaSelected = false;
    this.isTransferSelectedDefault = true;
  }
  getPostOfficeImage() {
    return _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.postOfficeDelivery;
  }
  setPaymentType(paymentType) {
    this.deliveryService.changeValue(paymentType);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  activeDeliveryAddress() {
    const headerDto = {
      stepCart: false,
      showHeaderGuide: true,
      address: true,
      deliveryAndPayment: false
    };
    this.headerSharedService.updateValue(headerDto);
  }
  static #_ = this.ɵfac = function DeliveryComponent_Factory(t) {
    return new (t || DeliveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_payment_shared_service__WEBPACK_IMPORTED_MODULE_2__.PaymentSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_header_shared_service__WEBPACK_IMPORTED_MODULE_3__.HeaderSharedService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DeliveryComponent,
    selectors: [["app-delivery"]],
    decls: 49,
    vars: 11,
    consts: [[1, "card"], [1, "container", "px-4", "py-5", "mx-auto"], [1, "heading"], [1, "payment-option-main"], [1, "payment-option-label-main"], ["id", "post-office", "type", "radio", "name", "post-office-delivery", "data-toggle", "collapse", "data-target", "#post-office-delivery", "readonly", "", 3, "checked"], [1, "payment-option-title"], ["height", "24px", 3, "src"], [1, "payment-body"], ["id", "post-office-delivery", 1, "collapse"], ["id", "bank-transfer", "type", "radio", "name", "payment_type_transfer", "data-toggle", "collapse", "data-target", "#bank-transfer-info", "readonly", "", 3, "click", "checked"], ["aria-hidden", "true", 1, "fa", "fa-university"], ["id", "bank-transfer-info", 1, "collapse", 3, "hidden"], [2, "color", "#ff0000"], ["id", "bank-proforma", "type", "radio", "name", "payment_type_proforma", "data-toggle", "collapse", "data-target", "#bank-proforma-info", "readonly", "", 3, "click", "checked"], ["aria-hidden", "true", 1, "fa", "fa-file-text-o"], ["id", "bank-proforma-info", 1, "collapse", 3, "hidden"], ["type", "submit", 1, "btn", "btn-info", "ml-auto", 3, "click", "routerLink"]],
    template: function DeliveryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Zp\u016Fsob doru\u010Den\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "h3")(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u010Cesk\u00E1\u00A0po\u0161ta - Bal\u00EDk\u00A0na\u00A0po\u0161tu\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Doru\u010Den\u00ED bal\u00EDku na vybranou po\u0161tu n\u00E1sleduj\u00EDc\u00ED pracovn\u00ED den po pod\u00E1n\u00ED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Zvolte zp\u016Fsob platby");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 3)(19, "h3")(20, "label", 4)(21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeliveryComponent_Template_input_click_21_listener() {
          return ctx.applyTransfer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Bankovn\u00ED\u00A0p\u0159evod\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 8)(28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Po odesl\u00E1n\u00ED objedn\u00E1vky v\u00E1m obratem za\u0161leme \u00FAdaje pro realizov\u00E1n\u00ED platby (\u010D\u00EDslo \u00FA\u010Dtu, variabiln\u00ED symbol a \u010D\u00E1stku). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "br")(31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Term\u00EDn dod\u00E1n\u00ED objedn\u00E1vky se m\u016F\u017Ee vzhledem na zvolenou formu platby prodlou\u017Eit. Objedn\u00E1vka se za\u010Dne zpracov\u00E1vat a\u017E po p\u0159ijet\u00ED platby.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 3)(35, "h3")(36, "label", 4)(37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeliveryComponent_Template_input_click_37_listener() {
          return ctx.applyProforma();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Dob\u00EDrka\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 8)(44, "div", 16)(45, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Z bezpe\u010Dnostn\u00EDch d\u016Fvod\u016F v\u00E1m doporu\u010Dujeme vyu\u017E\u00EDt platbu kartou p\u0159edem, aby mohlo p\u0159evzet\u00ED va\u0161eho bal\u00ED\u010Dku prob\u011Bhnout co nejrychleji.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeliveryComponent_Template_button_click_47_listener() {
          return ctx.activeDeliveryAddress();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "\u00A0Pokra\u010Dovat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.getPostOfficeImage(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.postOfficePrice, "K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.isTransferSelectedDefault);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getBankTransferPrice());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.isTransferSelectedDefault);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.isProformaSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getProformaPrice());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.isProformaSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
    styles: [".payment-option-main[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 20px 20px 15px 15px;\n  cursor: pointer;\n  position: relative;\n  background-color: rgba(103, 103, 103, 0.11);\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.55rem;\n  max-width: 500px;\n  margin: 35px auto;\n}\n\n.heading[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  border: 0;\n  width: 22px;\n  height: 22px;\n}\n\n.payment-img-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  margin: 0 auto;\n  align-items: flex-end;\n  justify-content: flex-end;\n  max-width: 75px;\n}\n\n.payment-option-title-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n  font-weight: 500;\n  font-family: \"Gotham Rounded\", sans-serif;\n  padding-left: 15px;\n  white-space: nowrap;\n  margin-bottom: auto;\n  margin-top: 6px;\n}\n\n.payment-option-label-main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.payment-option-title[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  font-family: \"Gotham Rounded\", sans-serif;\n  padding-left: 38px;\n  transition: color 0.4s;\n  padding-top: 1px;\n  display: flex;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  border: none;\n  border-radius: 10px;\n  background-color: #673AB7;\n  color: #fff;\n  padding: 20px 25px;\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-end;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline-width: 0;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #311B92;\n  color: #fff;\n}\n\n.payment-option-title[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before {\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid #dcdee2;\n  transition: border-color 0.4s, background-color 0.4s, box-shadow 0.4s;\n  top: calc(50% - 10px);\n  left: 0;\n}\n\n.payment-option-title[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n}\n\n.payment-option-title-inner[_ngcontent-%COMP%] {\n  padding-left: 21px;\n}\n\n.payment-body[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: 0.2px;\n  line-height: 20px;\n  padding: 5px 0;\n  color: #7c878e;\n  display: block;\n}\n\n@media (max-width: 767px) {\n  .payment-body[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-right: 0;\n  }\n  .payment-option-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 16px;\n    padding-left: 21px;\n    align-items: flex-start;\n  }\n  .payment-option-title[_ngcontent-%COMP%]:before, .payment-option-title[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    width: 17px;\n    height: 17px;\n    left: 0;\n    top: 3px;\n  }\n  .payment-option-title-inner[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .payment-img-wrapper[_ngcontent-%COMP%] {\n    height: 18px;\n    max-width: 65px;\n    bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDQyxrQkFBQTtBQUVEOztBQUFBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFHRSwyQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFHQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUVBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtFQUdGO0VBQUE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0VBRUY7RUFBQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUFFRjtFQUNBO0lBQ0UsWUFBQTtFQUNGO0VBRUE7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7RUFBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtb3B0aW9uLW1haW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxNXB4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzIDEwMyAxMDMgLyAxMSUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjU1cmVtO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46MzVweCBhdXRvO1xufVxuLmhlYWRpbmd7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG59XG5cbi5wYXltZW50LWltZy13cmFwcGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4ucGF5bWVudC1vcHRpb24tdGl0bGUtcHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogJ0dvdGhhbSBSb3VuZGVkJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5wYXltZW50LW9wdGlvbi1sYWJlbC1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBheW1lbnQtb3B0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIFJvdW5kZWQnLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWxlZnQ6IDM4cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIC40cztcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M0FCNztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5idXR0b246Zm9jdXMge1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMFxufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzExQjkyO1xuICBjb2xvcjogI2ZmZlxufVxuXG4ucGF5bWVudC1vcHRpb24tdGl0bGUgOmJlZm9yZSB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkZWUyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjRzLCBiYWNrZ3JvdW5kLWNvbG9yIC40cywgYm94LXNoYWRvdyAuNHM7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgbGVmdDogMDtcbn1cblxuLnBheW1lbnQtb3B0aW9uLXRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wYXltZW50LW9wdGlvbi10aXRsZS1pbm5lciB7XG4gIHBhZGRpbmctbGVmdDogMjFweDtcbn1cblxuLnBheW1lbnQtYm9keSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY29sb3I6ICM3Yzg3OGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBheW1lbnQtYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5wYXltZW50LW9wdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMjFweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAucGF5bWVudC1vcHRpb24tdGl0bGU6YmVmb3JlLCAucGF5bWVudC1vcHRpb24tdGl0bGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTdweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDNweDtcbiAgfVxuXG4gIC5wYXltZW50LW9wdGlvbi10aXRsZS1pbm5lciB7XG4gICAgcGFkZGluZzogNnB4O1xuICB9XG5cbiAgLnBheW1lbnQtaW1nLXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIG1heC13aWR0aDogNjVweDtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8935:
/*!********************************************************!*\
  !*** ./src/app/directive/email-directive.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailDirectiveDirective: () => (/* binding */ EmailDirectiveDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class EmailDirectiveDirective {
  constructor() {
    this.isInvalidEmail = false;
    this.regex = new RegExp('^[\\w!#$%&\'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&\'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$');
  }
  validate(control) {
    return this.regex.test(control.value) ? null : {
      isInvalidEmail: true
    };
  }
  static #_ = this.ɵfac = function EmailDirectiveDirective_Factory(t) {
    return new (t || EmailDirectiveDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: EmailDirectiveDirective,
    selectors: [["", "emailApp", ""]],
    outputs: {
      isInvalidEmail: "isInvalidEmail"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: EmailDirectiveDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 1719:
/*!**************************************************!*\
  !*** ./src/app/directive/highlight.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightDirective: () => (/* binding */ HighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HighlightDirective {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.setTitle = false; // sets title attribute of HTML
  }
  ngOnChanges(changes) {
    if (!this.content) {
      return;
    }
    if (this.setTitle) {
      this.renderer.setProperty(this.el.nativeElement, 'title', this.content);
    }
    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.getFormattedText());
  }
  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord})`, 'gi');
    return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
  static #_ = this.ɵfac = function HighlightDirective_Factory(t) {
    return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: HighlightDirective,
    selectors: [["", "appHighlight", ""]],
    inputs: {
      searchedWord: "searchedWord",
      content: "content",
      classToApply: "classToApply",
      setTitle: "setTitle"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 3491:
/*!*****************************************************************!*\
  !*** ./src/app/enum-drop-down-form/enum-drop-down.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnumDropDownComponent: () => (/* binding */ EnumDropDownComponent),
/* harmony export */   ProductSortEmittedVo: () => (/* binding */ ProductSortEmittedVo)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _model_filter_product_sort_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/filter/product-sort-type */ 9238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);





function EnumDropDownComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const enumValue_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", enumValue_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](enumValue_r1);
  }
}
class EnumDropDownComponent {
  constructor() {
    this.enumValues = Object.values(_model_filter_product_sort_type__WEBPACK_IMPORTED_MODULE_0__.ProductSortType);
    this.sortOrder = _model_filter_product_sort_type__WEBPACK_IMPORTED_MODULE_0__.ProductSortType.PRICE;
    this.sortEmittedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  emitProductSortValueChanged($event) {
    console.log('emitProductSortValueChanged ', this.sortOrder);
    this.sortEmittedValue.emit({
      sortType: this.sortOrder
    });
  }
  static #_ = this.ɵfac = function EnumDropDownComponent_Factory(t) {
    return new (t || EnumDropDownComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EnumDropDownComponent,
    selectors: [["app-enum-drop-down"]],
    outputs: {
      sortEmittedValue: "sortEmittedValue"
    },
    decls: 5,
    vars: 2,
    consts: [[1, ""], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function EnumDropDownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EnumDropDownComponent_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.sortOrder, $event) || (ctx.sortOrder = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EnumDropDownComponent_Template_select_change_3_listener($event) {
          return ctx.emitProductSortValueChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EnumDropDownComponent_option_4_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.sortOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.enumValues);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    encapsulation: 2
  });
}
class ProductSortEmittedVo {}

/***/ }),

/***/ 708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);



class FooterComponent {
  constructor() {
    this.faPhone = _app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconPhone;
    this.faEnvelope = _app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconEnvelope;
    this.faHome = _app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.iconHome;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 59,
    vars: 3,
    consts: [[1, "container"], [1, "footer", "border-top", "py-2"], [1, "text-center", "text-md-start", "mt-5"], [1, "row", "mt-3"], [1, "col-md-3", "col-lg-4", "col-xl-3", "mx-auto", "mb-4"], [1, "text-uppercase", "fw-bold", "mb-4"], [1, "d-block", "text-center"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], ["href", "#!", 1, "text-reset"], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], ["href", "/advertising", 1, "text-reset"], ["href", "/terms", 1, "text-reset"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mb-md-0", "mb-4"], [1, "d-inline"], [1, "me-2", 3, "icon"], [1, "d-lg-inline-block", "d-xs-block", "me-3"], [1, "d-block", "px-3"], [1, "d-block", "px-5"], [1, "me-3", 3, "icon"], [1, "text-center", "text-light", "bg-dark", "p-4", "w-100"], ["href", "https://mdbootstrap.com/", 1, "text-reset", "fw-bold"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Comic-shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Tato str\u00E1nka je ur\u010Dena p\u0159ev\u00E1\u017En\u011B nad\u0161enc\u016Fm do komiks\u016F. K dispozici m\u00E1me i speci\u00E1ln\u00ED vydavatelsk\u00E9 edice, kter\u00FDch nen\u00ED mnoho. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p")(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p")(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p")(20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Vue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p")(23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Laravel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9)(26, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " U\u017Eite\u010Dn\u00E9\u00A0odkazy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p")(29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Reklama\u010Dn\u00ED\u00A0\u0159\u00E1d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p")(32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Obchodn\u00ED\u00A0podm\u00EDnky");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p")(35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12)(38, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Kontakt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p")(41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u010Cesk\u00E1\u00A0Republika");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00A0\u00A0\u00A0Sokolnick\u00E1\u00A0321");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "665\u00A030");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " comic@shop.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " +420\u00A0725\u00A0405\u00A0962 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " \u00A9 2022 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Comic Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faEnvelope);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPhone);
      }
    },
    dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIixBcmlhbCxzYW5zLXNlcmlmO1xufVxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _model_header_header_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/header/header-dto */ 5031);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_basket_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/basket-shared.service */ 4155);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ 2056);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/category.service */ 9097);
/* harmony import */ var _service_header_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/header-shared.service */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);















const _c0 = () => ["/contact"];
const _c1 = () => ["/cart"];
function HeaderComponent_ul_31_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "products/", category_r1.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](category_r1.name);
  }
}
function HeaderComponent_ul_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_ul_31_li_1_Template, 3, 3, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
function HeaderComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "option", 38);
  }
  if (rf & 2) {
    const filterProduct_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", filterProduct_r3.name);
  }
}
function HeaderComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.productsInBasket.length);
  }
}
function HeaderComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_54_Template_div_click_1_listener() {
      const filterProduct_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.productDetail(filterProduct_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 42)(3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 45)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 46)(9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const filterProduct_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImage(filterProduct_r5.file), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](filterProduct_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", filterProduct_r5.priceAmount, "\u00A0K\u010D");
  }
}
class HeaderComponent {
  constructor(basketService, productService, categoryService, headerSharedService, route) {
    this.basketService = basketService;
    this.productService = productService;
    this.categoryService = categoryService;
    this.headerSharedService = headerSharedService;
    this.route = route;
    this.headerDto = new _model_header_header_dto__WEBPACK_IMPORTED_MODULE_0__.HeaderDto();
    this.faPhone = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconPhone;
    this.faEnvelope = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconEnvelope;
    this.faShield = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconPolicy;
    this.faShipping = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconShipping;
    this.faSearch = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconSearch;
    this.faBasket = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconBasket;
    this.faUser = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.iconUser;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.productTotal = -1;
    this.showEmptyCart = false;
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_2__.ErrorDto();
  }
  searchBy(byName) {
    if (!!byName) {
      this.loadProductsByName(byName);
    } else {
      this.products = [];
    }
  }
  getImage(file) {
    if (!!file.bytes && !!file.type) {
      return 'data:' + file.type + ';base64,' + file.bytes;
    }
    return _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.emptyDefaultImage;
  }
  loadProductsByName(byName) {
    console.log('Call filter function next');
    this.productService.filterProducts(this.errorDto, byName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        console.log('Call filter function next');
        this.products = response.data;
        this.productTotal = this.products.length;
      },
      error: err => {
        this.products = [];
        this.productTotal = -1;
        console.error('Load products by name error', err);
      }
    });
  }
  loadCategories() {
    this.categoryService.findCategories(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.categories = response.data;
      },
      error: err => {
        this.categories = [];
      }
    });
  }
  activeCartStep() {
    const headerDto = new _model_header_header_dto__WEBPACK_IMPORTED_MODULE_0__.HeaderDto();
    headerDto.stepCart = true;
    headerDto.showHeaderGuide = true;
    headerDto.address = false;
    headerDto.deliveryAndPayment = false;
    this.headerSharedService.updateValue(headerDto);
    this.showEmptyCart = this.productsInBasket.length <= 0;
    console.log(this.showEmptyCart);
  }
  removeSearch() {
    this.products = [];
    this.productTotal = -1;
    this.searchByName = '';
  }
  productDetail(product) {
    this.route.navigate(['product-detail/', product.categoryUrl, product.url]).then(r => this.removeSearch());
  }
  ngOnInit() {
    this.products = [];
    this.productTotal = -1;
    this.loadCategories();
    this.basketService.getBasket().subscribe(msg => this.productsInBasket = msg);
    this.headerSharedService.getHeaderGuideAsObservable().subscribe(data => {
      console.log(data);
      if (this.headerDto == null) {
        const headerDto = new _model_header_header_dto__WEBPACK_IMPORTED_MODULE_0__.HeaderDto();
        headerDto.stepCart = true;
        headerDto.showHeaderGuide = true;
        headerDto.address = false;
        headerDto.deliveryAndPayment = false;
        this.headerDto = headerDto;
      } else {
        this.headerDto = data;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_basket_shared_service__WEBPACK_IMPORTED_MODULE_3__.BasketSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_5__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_header_shared_service__WEBPACK_IMPORTED_MODULE_6__.HeaderSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 55,
    vars: 17,
    consts: [[1, "superNav", "border-bottom"], [1, "container"], [1, "row"], [1, "col-12", "col-md-6", "text-center", "text-md-start", "small"], [1, "d-none", "d-md-inline-block", "me-3"], [1, "icon-blue", 3, "icon"], [1, "me-3"], [1, "col-12", "col-md-6", "d-none", "d-md-block", "text-end", "small"], ["href", "#"], [1, "navbar", "navbar-expand-lg", "bg-white", "sticky-md-top", "shadow-sm"], [1, "navbar-brand"], ["src", "/assets/images/logo.png", "alt", "logo", 1, "img-logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["class", "dropdown-menu dropdown-menu-center", "aria-labelledby", "navbarDropdownMenuLink", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "navbar-nav", "mx-auto"], [1, "ms-auto", "d-none", "d-md-block"], [1, "input-group"], [1, "input-group-text", "bg-primary", "text-white"], [3, "icon"], ["type", "text", "placeholder", "Vyhledat", "maxlength", "22", "autofocus", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "showDataList"], [3, "value", 4, "ngFor", "ngForOf"], [1, "navbar-nav", "ms-auto"], ["class", "cart-counter", 4, "ngIf"], [1, "nav-link", 3, "click", "routerLink"], [1, "minicart_note"], [1, "col"], ["class", "card mx-auto", 4, "ngFor", "ngForOf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-center"], [4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", "p-2", 3, "routerLink"], [3, "value"], [1, "cart-counter"], [1, "card", "mx-auto"], [1, "card-body", 3, "click"], [1, "row", "align-items-center"], [1, "col-3"], ["alt", "Shopping item", 1, "img-fluid", "me-auto", "mx-auto", 3, "src"], [1, "col-7"], [1, "col-2"], [1, "small", "d-inline-flex", "text-start"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00A0komiksarium@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u00A0725\u00A0406\u00A0961");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7)(11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u00A0Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u00A0Obecn\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nav", 9)(20, "div", 1)(21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " COMIC-ESHOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 14)(27, "ul", 15)(28, "li", 16)(29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " Produkty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, HeaderComponent_ul_31_Template, 2, 1, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "li", 19)(33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Napi\u0161te n\u00E1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ul", 21)(36, "div", 22)(37, "div", 23)(38, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.searchByName, $event) || (ctx.searchByName = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_40_listener() {
          return ctx.searchBy(ctx.searchByName);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "datalist", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, HeaderComponent_option_42_Template, 1, 1, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "ul", 29)(44, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, HeaderComponent_span_45_Template, 2, 1, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_46_listener() {
          return ctx.activeCartStep();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\u00A0Ko\u0161\u00EDk");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("@hideShowAnimator.done", function HeaderComponent_Template_div_animation_hideShowAnimator_done_49_listener() {
          return ctx.showEmptyCart = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " V\u00E1\u0161 ko\u0161\u00EDk je moment\u00E1ln\u011B pr\u00E1zdn\u00FD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 1)(52, "div", 2)(53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, HeaderComponent_div_54_Template, 11, 3, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faEnvelope);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faShipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faShield);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.categories == null ? null : ctx.categories.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.searchByName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.productsInBasket.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.faBasket);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@hideShowAnimator", ctx.showEmptyCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@filterAnimation", ctx.productTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent],
    styles: [".card[_ngcontent-%COMP%] {\n  width: 450px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.icon-blue[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  height: 85px;\n  width: auto;\n  cursor: pointer;\n}\n\n.card-body[_ngcontent-%COMP%]:hover {\n  background: #ADD8E6;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  height: 65px;\n  width: auto;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 50px;\n}\n\n.numberCircle[_ngcontent-%COMP%] {\n  font: 22px Arial, sans-serif;\n  width: 2em;\n  height: 2em;\n  background: #fff;\n  border: 0.1em solid #666;\n  color: #666;\n  text-align: center;\n  border-radius: 50%;\n  line-height: 2em;\n  box-sizing: content-box;\n}\n\n.numberCircle.active[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n.cart-counter[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  background: #e88686;\n  text-align: center;\n  border-radius: 50%;\n  margin-left: -7px;\n  position: absolute;\n}\n\n.cart-counter[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.filter-c[_ngcontent-%COMP%]:hover {\n  background-color: cornflowerblue;\n}\n\n.dropdown-menu-center[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.minicart_note[_ngcontent-%COMP%] {\n  max-height: calc(100vh + 1px - 60px);\n  border: 1px #d8dbdd solid;\n  display: none;\n  background: white;\n  border-radius: 0 0 16px 16px;\n  min-width: 160px;\n  padding: 10px 10px 10px 10px;\n  list-style: none;\n  font-size: 14px;\n  color: black;\n  max-width: 300px;\n  position: relative;\n  margin: 0 auto;\n  font-family: \"Gotham Rounded\", sans-serif;\n  font-weight: 600;\n}\n\n@media screen and (max-width: 640px) {\n  .minicart_note[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .centerOnMobile[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .cart-counter[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    position: absolute;\n  }\n  .filter-main[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    font-size: 12px;\n  }\n  .img-fluid[_ngcontent-%COMP%] {\n    width: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBTUE7RUFDRTtJQUNFLE1BQUE7RUFIRjtFQU1BO0lBQ0Usa0JBQUE7RUFKRjtFQU9BO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQUxGO0VBT0E7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFMRjtFQU9BO0lBQ0UsV0FBQTtFQUxGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkIHtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaWNvbi1ibHVlIHtcbiAgY29sb3I6ICMwZDZlZmQ7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWJvZHk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjQUREOEU2O1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmltZy1sb2dvIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbi5udW1iZXJDaXJjbGUge1xuICBmb250OiAyMnB4IEFyaWFsLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjNjY2O1xuICBjb2xvcjogIzY2NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5udW1iZXJDaXJjbGUuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbn1cblxuXG4uZm9ybS1jb250cm9sIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJ0LWNvdW50ZXIge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTg4Njg2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcnQtY291bnRlciA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXItYzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuXG4uZHJvcGRvd24tbWVudS1jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcblxufVxuXG4ubWluaWNhcnRfbm90ZSB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggKyAxcHggLSA2MHB4KTtcbiAgYm9yZGVyOiAxcHggI2Q4ZGJkZCBzb2xpZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LWZhbWlseTogJ0dvdGhhbSBSb3VuZGVkJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAubWluaWNhcnRfbm90ZSB7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmNlbnRlck9uTW9iaWxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgfVxuXG4gIC5jYXJ0LWNvdW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmZpbHRlci1tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmltZy1mbHVpZCB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('filterAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':enter, * => 0, * => -1', []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':increment', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
        opacity: 0,
        width: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
        opacity: 1,
        width: '*'
      }))])], {
        optional: true
      })]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':decrement', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.stagger)(50, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
        opacity: 0,
        width: 0
      }))])])])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('hideShowAnimator', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
        opacity: 1,
        display: 'block'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
        opacity: 0,
        display: 'none'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('0 => 1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('.9s')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('1 => 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('1.9s'))])]
    }
  });
}

/***/ }),

/***/ 3527:
/*!******************************************!*\
  !*** ./src/app/model/address/address.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* binding */ Address)
/* harmony export */ });
class Address {}

/***/ }),

/***/ 7843:
/*!******************************************************!*\
  !*** ./src/app/model/advertisement/advertisement.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Advertisement: () => (/* binding */ Advertisement)
/* harmony export */ });
class Advertisement {}

/***/ }),

/***/ 3389:
/*!**************************************************!*\
  !*** ./src/app/model/delivery/delivery-model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryModel: () => (/* binding */ DeliveryModel)
/* harmony export */ });
/* harmony import */ var _delivery_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-type */ 4158);

const DeliveryModel = {
  packageToMall: {
    deliveryType: _delivery_type__WEBPACK_IMPORTED_MODULE_0__.DeliveryType.POST_OFFICE,
    price: 125
  }
};

/***/ }),

/***/ 4158:
/*!*************************************************!*\
  !*** ./src/app/model/delivery/delivery-type.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryType: () => (/* binding */ DeliveryType)
/* harmony export */ });
var DeliveryType;
(function (DeliveryType) {
  DeliveryType["POST_OFFICE"] = "Bal\u00EDk na po\u0161tu";
})(DeliveryType || (DeliveryType = {}));

/***/ }),

/***/ 5399:
/*!*************************************************!*\
  !*** ./src/app/model/delivery/payment-model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentModel: () => (/* binding */ PaymentModel)
/* harmony export */ });
/* harmony import */ var _payment_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-type */ 6952);

const PaymentModel = {
  bankTransfer: {
    paymentType: _payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.BANK_TRANSFER,
    price: 0
  },
  proforma: {
    paymentType: _payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.PROFORMA,
    price: 75
  }
};

/***/ }),

/***/ 6952:
/*!************************************************!*\
  !*** ./src/app/model/delivery/payment-type.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentType: () => (/* binding */ PaymentType)
/* harmony export */ });
var PaymentType;
(function (PaymentType) {
  PaymentType["BANK_TRANSFER"] = "Bankovn\u00ED p\u0159evod";
  PaymentType["PROFORMA"] = "Dob\u00EDrka";
})(PaymentType || (PaymentType = {}));

/***/ }),

/***/ 9113:
/*!*************************************************!*\
  !*** ./src/app/model/email/write-us-request.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WriteUsRequest: () => (/* binding */ WriteUsRequest)
/* harmony export */ });
class WriteUsRequest {
  constructor(category) {
    this.data = category;
  }
}

/***/ }),

/***/ 4177:
/*!*****************************************!*\
  !*** ./src/app/model/email/write-us.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WriteUs: () => (/* binding */ WriteUs)
/* harmony export */ });
class WriteUs {
  constructor() {
    this.subject = 'Dotaz';
  }
}

/***/ }),

/***/ 9238:
/*!***************************************************!*\
  !*** ./src/app/model/filter/product-sort-type.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSortType: () => (/* binding */ ProductSortType)
/* harmony export */ });
var ProductSortType;
(function (ProductSortType) {
  ProductSortType["PRICE"] = "PRICE";
  ProductSortType["NAME"] = "NAME";
})(ProductSortType || (ProductSortType = {}));

/***/ }),

/***/ 5031:
/*!********************************************!*\
  !*** ./src/app/model/header/header-dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderDto: () => (/* binding */ HeaderDto)
/* harmony export */ });
class HeaderDto {}

/***/ }),

/***/ 5884:
/*!*********************************************!*\
  !*** ./src/app/model/order/order-create.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderCreate: () => (/* binding */ OrderCreate)
/* harmony export */ });
class OrderCreate {
  constructor(data) {
    this.data = data;
  }
}

/***/ }),

/***/ 3623:
/*!*******************************************!*\
  !*** ./src/app/model/order/order-item.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItem: () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
  constructor(productUrl, quantity) {
    this.productUrl = productUrl;
    this.count = quantity;
  }
}

/***/ }),

/***/ 2443:
/*!**************************************!*\
  !*** ./src/app/model/order/order.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Order: () => (/* binding */ Order)
/* harmony export */ });
var PaymentType;
(function (PaymentType) {
  PaymentType[PaymentType["CREDIT_CARD"] = 0] = "CREDIT_CARD";
})(PaymentType || (PaymentType = {}));
class Order {
  constructor() {
    this.paymentType = PaymentType.CREDIT_CARD;
  }
}

/***/ }),

/***/ 4058:
/*!***********************************************!*\
  !*** ./src/app/model/product/product-file.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFile: () => (/* binding */ ProductFile)
/* harmony export */ });
class ProductFile {
  constructor(bytes, type) {
    this.bytes = bytes;
    this.type = type;
  }
}

/***/ }),

/***/ 7427:
/*!******************************************!*\
  !*** ./src/app/model/product/product.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
class Product {}

/***/ }),

/***/ 8512:
/*!********************************************************************!*\
  !*** ./src/app/ngx-slider-wrapper/ngx-slider-wrapper.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxSliderWrapperComponent: () => (/* binding */ NgxSliderWrapperComponent),
/* harmony export */   SliderEmittedVo: () => (/* binding */ SliderEmittedVo)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 7165);




class NgxSliderWrapperComponent {
  constructor() {
    this.minValue = 0;
    this.maxValue = 30000;
    this.emittedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.defaultCurrency = 'CZK';
    this.options = {
      floor: 0,
      ceil: 30000,
      translate: (value, label) => {
        switch (label) {
          case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__.LabelType.Low:
            return "<b>Min price:</b> " + value + ' ' + this.defaultCurrency;
          case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__.LabelType.High:
            return "<b>Max price:</b> " + value + ' ' + this.defaultCurrency;
          default:
            return value + ' ' + this.defaultCurrency;
        }
      }
    };
  }
  emmitSliderEvent() {
    console.log('emittedValue', {
      minValue: this.minValue,
      maxValue: this.maxValue
    });
    this.emittedValue.emit({
      minValue: this.minValue,
      maxValue: this.maxValue
    });
  }
  static #_ = this.ɵfac = function NgxSliderWrapperComponent_Factory(t) {
    return new (t || NgxSliderWrapperComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgxSliderWrapperComponent,
    selectors: [["app-ngx-slider-wrapper"]],
    outputs: {
      emittedValue: "emittedValue"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "valueChange", "highValueChange", "userChangeEnd", "value", "highValue", "options"]],
    template: function NgxSliderWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("valueChange", function NgxSliderWrapperComponent_Template_ngx_slider_valueChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.minValue, $event) || (ctx.minValue = $event);
          return $event;
        })("highValueChange", function NgxSliderWrapperComponent_Template_ngx_slider_highValueChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.maxValue, $event) || (ctx.maxValue = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userChangeEnd", function NgxSliderWrapperComponent_Template_ngx_slider_userChangeEnd_0_listener() {
          return ctx.emmitSliderEvent();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("value", ctx.minValue)("highValue", ctx.maxValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
      }
    },
    dependencies: [_angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__.NgxSliderModule, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__.SliderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class SliderEmittedVo {}

/***/ }),

/***/ 1696:
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _model_product_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/product/product */ 7427);
/* harmony import */ var _model_product_product_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/product/product-file */ 4058);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShoppingCart */ 8555);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ 2056);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var _service_basket_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/basket-shared.service */ 4155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);















const _c0 = () => ["/product-detail"];
function ProductDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.errorDto.httpStatusMessage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.errorDto.errorMessage, " ");
  }
}
class ProductDetailComponent {
  constructor(actRoute, productService, spinner, basketService) {
    this.actRoute = actRoute;
    this.productService = productService;
    this.spinner = spinner;
    this.basketService = basketService;
    this.product = new _model_product_product__WEBPACK_IMPORTED_MODULE_0__.Product();
    this.productFile = new _model_product_product_file__WEBPACK_IMPORTED_MODULE_1__.ProductFile(null, 'image/jpeg');
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_3__.ErrorDto();
    this.faShoppingBasket = _fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_8__.faShoppingCart;
    this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faArrowLeft;
  }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.findProduct(params.get('productUrl'));
      this.findProductImage(params.get('productUrl'));
    });
  }
  findProduct(productUrl) {
    this.spinner.show().then(r => r);
    this.productService.findProduct(productUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide().then(() => this.product = response.data);
      },
      error: () => {
        this.spinner.hide().then(r => r);
      }
    });
  }
  findProductImage(productUrl) {
    this.spinner.show().then(r => r);
    this.productService.findProductImage(productUrl, this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide().then(() => this.productFile = response.data);
      },
      error: () => {
        this.spinner.hide().then(r => r);
      }
    });
  }
  addToCart(product) {
    this.basketService.addToBasket(product);
  }
  getImage(file) {
    if (!!file.bytes && !!file.type) {
      return 'data:' + file.type + ';base64,' + file.bytes;
    }
    return _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.emptyDefaultImage;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function ProductDetailComponent_Factory(t) {
    return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_basket_shared_service__WEBPACK_IMPORTED_MODULE_5__.BasketSharedService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProductDetailComponent,
    selectors: [["app-product-detail"]],
    decls: 30,
    vars: 9,
    consts: [[1, "container", "mt-5", "mb-5"], [1, "row", "d-flex", "justify-content-center"], [1, "mb-3"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "large", "color", "#fff", "type", "ball-spin-clockwise"], [1, "col-md-10"], [1, "card"], [1, "row"], [1, "col-md-6"], [1, "images", "p-3"], [1, "text-center", "p-4"], ["id", "main-image", "width", "300", 1, "img-fluid", 3, "src"], [1, "product", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "pointer", 3, "routerLink"], [3, "icon"], [1, "ms-1"], [1, "mt-4", "mb-3"], [1, "text-uppercase"], [1, "price", "d-flex", "flex-row", "align-items-center"], [1, "act-price"], [1, "about", 3, "innerHTML"], [1, "cart", "align-items-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"]],
    template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductDetailComponent_div_3_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ngx-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8)(13, "div", 12)(14, "div", 13)(15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 17)(20, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 19)(23, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 22)(27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_27_listener() {
          return ctx.addToCart(ctx.product);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "\u00A0Koupit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorDto.httpStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.getImage(ctx.productFile), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.product.priceAmount, "\u00A0K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.product.description, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faShoppingBasket);
      }
    },
    dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1092:
/*!******************************************************************!*\
  !*** ./src/app/product-list-home/product-list-home.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListHomeComponent: () => (/* binding */ ProductListHomeComponent)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_slider_wrapper_ngx_slider_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngx-slider-wrapper/ngx-slider-wrapper.component */ 8512);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-list/product-list.component */ 1838);
/* harmony import */ var _enum_drop_down_form_enum_drop_down_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enum-drop-down-form/enum-drop-down.component */ 3491);
/* harmony import */ var _variant_catalog_filter_variant_catalog_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variant-catalog-filter/variant-catalog-filter.component */ 7650);








function ProductListHomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorDto.httpStatusMessage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorDto.errorMessage, " ");
  }
}
class ProductListHomeComponent {
  constructor() {
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this.sliderEmittedVo = null;
    this.productSortEmittedVo = null;
    this.variantCatalogEmittedVo = null;
  }
  changeSliderMinMax($event) {
    this.sliderEmittedVo = $event;
  }
  changeProductSortValue($event) {
    this.productSortEmittedVo = $event;
  }
  changeCatalogEmittedValue($event) {
    this.variantCatalogEmittedVo = $event;
  }
  static #_ = this.ɵfac = function ProductListHomeComponent_Factory(t) {
    return new (t || ProductListHomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProductListHomeComponent,
    selectors: [["app-product-list-home"]],
    decls: 11,
    vars: 5,
    consts: [[1, "row"], [1, "mb-3"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["bdColor", "rgba(51,51,51,0.8)", "size", "large", "color", "#fff", "type", "ball-spin-clockwise"], [1, "col-3"], [3, "emittedValue"], [3, "sortEmittedValue"], [3, "variantCatalogEmittedValue"], [1, "col-9"], [3, "errorDto", "sliderEmittedVo", "productSortEmittedVo", "variantCatalogEmittedVo"], ["role", "alert", 1, "alert", "alert-danger"]],
    template: function ProductListHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProductListHomeComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 0)(5, "div", 4)(6, "app-ngx-slider-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("emittedValue", function ProductListHomeComponent_Template_app_ngx_slider_wrapper_emittedValue_6_listener($event) {
          return ctx.changeSliderMinMax($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "app-enum-drop-down", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sortEmittedValue", function ProductListHomeComponent_Template_app_enum_drop_down_sortEmittedValue_7_listener($event) {
          return ctx.changeProductSortValue($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "app-variant-catalog-filter", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("variantCatalogEmittedValue", function ProductListHomeComponent_Template_app_variant_catalog_filter_variantCatalogEmittedValue_8_listener($event) {
          return ctx.changeCatalogEmittedValue($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-product-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorDto.httpStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("errorDto", ctx.errorDto)("sliderEmittedVo", ctx.sliderEmittedVo)("productSortEmittedVo", ctx.productSortEmittedVo)("variantCatalogEmittedVo", ctx.variantCatalogEmittedVo);
      }
    },
    dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ngx_slider_wrapper_ngx_slider_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.NgxSliderWrapperComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent, _enum_drop_down_form_enum_drop_down_component__WEBPACK_IMPORTED_MODULE_3__.EnumDropDownComponent, _variant_catalog_filter_variant_catalog_filter_component__WEBPACK_IMPORTED_MODULE_4__.VariantCatalogFilterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1838:
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent),
/* harmony export */   ProductPaginationVo: () => (/* binding */ ProductPaginationVo)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShoppingCart */ 8555);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/product.service */ 2056);
/* harmony import */ var _service_basket_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/basket-shared.service */ 4155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 2423);












const _c0 = (a0, a1, a2) => ({
  itemsPerPage: a0,
  currentPage: a1,
  totalItems: a2
});
function ProductListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_ng_container_1_Template_img_click_3_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.productDetail(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6)(5, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_ng_container_1_Template_button_click_9_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.addToCart(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u00A0Koupit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.getImage(product_r2.file), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", product_r2.priceAmount, "\u00A0K\u010D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faShoppingBasket);
  }
}
class ProductListComponent {
  constructor(productService, basketService, actRoute, route, spinner) {
    this.productService = productService;
    this.basketService = basketService;
    this.actRoute = actRoute;
    this.route = route;
    this.spinner = spinner;
    this.products = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.faShoppingBasket = _fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_5__.faShoppingCart;
    this.errorDto = null;
    this.sliderEmittedVo = null;
    this.productSortEmittedVo = null;
    this.variantCatalogEmittedVo = null;
    this.productPagination = null;
    // prevents bug during loading
    this.loaded = false;
    this._totalPages = null;
    this._totalElements = null;
    this._defaultPageSize = 10;
    this._defaultPageNumber = 0;
  }
  ngOnInit() {
    this.productPagination = this.createDefaultPagination();
    this.actRoute.paramMap.subscribe(params => {
      this.selectedCategoryUrl = params.get('categoryUrl');
      this.loadProducts(this.selectedCategoryUrl, undefined, undefined, this.variantCatalogEmittedVo);
    });
    this.basketService.getBasket().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(msg => this.productsInBasket = msg);
    this.loaded = true;
  }
  ngOnChanges(changes) {
    if (this.loaded) {
      this.loadProducts(this.selectedCategoryUrl, this.sliderEmittedVo, this.productSortEmittedVo, this.variantCatalogEmittedVo);
    }
  }
  getImage(file) {
    if (!!file.bytes && !!file.type) {
      return 'data:' + file.type + ';base64,' + file.bytes;
    }
    return _app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.emptyDefaultImage;
  }
  loadProducts(byCategoryUrl, emittedVo, sortEmittedVo, variantCatalogEmittedVo) {
    this.spinner.show().then(r => r);
    this.productService.filterProducts(this.errorDto, null, byCategoryUrl, emittedVo?.minValue, emittedVo?.maxValue, sortEmittedVo?.sortType, variantCatalogEmittedVo?.selectedVariants, this.productPagination).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.spinner.hide().then(() => {
          this.products = response.data;
          this.productPagination = this.createPaginationVo(response.meta.page);
        });
      },
      error: () => {
        this.spinner.hide().then(r => r);
      }
    });
  }
  createPaginationVo(page) {
    return new ProductPaginationVo(page.totalPages, page.totalElements, page.pageSize, page.pageNumber);
  }
  addToCart(product) {
    this.basketService.addToBasket(product);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  productDetail(product) {
    this.route.navigate(['product-detail/', product.url]).then(r => r);
  }
  reloadPage(page) {
    this.productPagination.pageNumber = page;
    if (this.loaded) {
      this.loadProducts(this.selectedCategoryUrl, this.sliderEmittedVo, this.productSortEmittedVo, this.variantCatalogEmittedVo);
    }
  }
  createDefaultPagination() {
    return new ProductPaginationVo(this._totalPages, this._totalElements, this._defaultPageSize, this._defaultPageNumber);
  }
  static #_ = this.ɵfac = function ProductListComponent_Factory(t) {
    return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_basket_shared_service__WEBPACK_IMPORTED_MODULE_2__.BasketSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["app-product-list"]],
    inputs: {
      errorDto: "errorDto",
      sliderEmittedVo: "sliderEmittedVo",
      productSortEmittedVo: "productSortEmittedVo",
      variantCatalogEmittedVo: "variantCatalogEmittedVo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 8,
    consts: [[1, "row"], [4, "ngFor", "ngForOf"], ["autoHide", "false", "maxSize", "10", "responsive", "true", 3, "pageChange"], [1, "col-3"], [1, "product", "p-1", "mb-5"], [1, "img-fluid", 3, "click", "src", "alt"], [1, "card-body", "p-1"], [1, "card-title"], [1, "text-center", "mt-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "icon"]],
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductListComponent_ng_container_1_Template, 12, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "pagination-controls", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function ProductListComponent_Template_pagination_controls_pageChange_3_listener($event) {
          return ctx.reloadPage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx.products, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c0, ctx.productPagination.pageSize, ctx.productPagination.pageNumber, ctx.productPagination.totalElements)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginatePipe],
    styles: [".product[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 240px;\n  min-width: 105%;\n  height: 400px;\n  text-align: center;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 250px;\n  width: auto;\n  margin: auto;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  height: 90px;\n}\n\n@media screen and (max-width: 640px) {\n  .img-fluid[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    margin: auto;\n  }\n  .product[_ngcontent-%COMP%] {\n    border: none;\n    padding: 15px;\n    display: block;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBSUE7RUFFRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUFGRjtFQUtBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQUhGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc2Fzcy92YXJpYWJsZXMnO1xuLnByb2R1Y3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIG1pbi13aWR0aDogMTA1JTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhcmQtYm9keXtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBob25lKSB7XG5cbiAgLmltZy1mbHVpZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5wcm9kdWN0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class ProductPaginationVo {
  constructor(totalPages, totalElements, pageSize, pageNumber) {
    this.totalPages = totalPages;
    this.totalElements = totalElements;
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
  }
}

/***/ }),

/***/ 3526:
/*!**************************************************!*\
  !*** ./src/app/service/advertisement.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvertisementService: () => (/* binding */ AdvertisementService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





class AdvertisementService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.advertisementEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/config/advertisement';
  }
  findAdvertisement(errorDto) {
    return this.httpClient.get(this.advertisementEndpoint, {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function AdvertisementService_Factory(t) {
    return new (t || AdvertisementService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AdvertisementService,
    factory: AdvertisementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4155:
/*!**************************************************!*\
  !*** ./src/app/service/basket-shared.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasketSharedService: () => (/* binding */ BasketSharedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 6352);



class BasketSharedService {
  constructor(localStorage) {
    this.subjectProductsStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    const data = JSON.parse(localStorage.getItem('basket'));
    if (data == null) {
      this.subjectProductsStream.next([]);
    } else {
      this.subjectProductsStream.next(JSON.parse(localStorage.getItem('basket')));
    }
  }
  addToBasket(product) {
    const containProduct = this.subjectProductsStream.getValue().filter(data => data.url === product.url).length > 0;
    if (!containProduct) {
      product.quantity = 1;
      this.subjectProductsStream.getValue().push(product);
      const data = this.subjectProductsStream.getValue();
      localStorage.setItem('basket', JSON.stringify(data));
      this.subjectProductsStream.next(data);
    }
  }
  addQuantity(product) {
    product.quantity += 1;
    const updatedItemIndex = this.subjectProductsStream.getValue().findIndex(item => item.url === product.url);
    this.subjectProductsStream.getValue()[updatedItemIndex] = product;
    localStorage.setItem('basket', JSON.stringify(this.subjectProductsStream.getValue()));
  }
  removeQuantity(product) {
    product.quantity -= 1;
    const updatedItemIndex = this.subjectProductsStream.getValue().findIndex(item => item.url === product.url);
    this.subjectProductsStream.getValue()[updatedItemIndex] = product;
    localStorage.setItem('basket', JSON.stringify(this.subjectProductsStream.getValue()));
  }
  removeFromBasket(product) {
    console.log('remove from basket', product);
    const updatedArray = this.subjectProductsStream.getValue().filter(data => data.url !== product.url);
    localStorage.setItem('basket', JSON.stringify(updatedArray));
    this.subjectProductsStream.next(updatedArray);
  }
  getBasket() {
    return this.subjectProductsStream.asObservable();
  }
  static #_ = this.ɵfac = function BasketSharedService_Factory(t) {
    return new (t || BasketSharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: BasketSharedService,
    factory: BasketSharedService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9097:
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





class CategoryService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.categoriesEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/categories';
  }
  findCategories(errorDto) {
    return this.httpClient.get(this.categoriesEndpoint, {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function CategoryService_Factory(t) {
    return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CategoryService,
    factory: CategoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7187:
/*!******************************************!*\
  !*** ./src/app/service/email.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailService: () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _model_email_write_us_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/email/write-us-request */ 9113);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);






class EmailService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.writeUsEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.baseUrl + '/api/email/write-us';
  }
  contactUs(writeUs, errorDto) {
    const body = JSON.stringify(new _model_email_write_us_request__WEBPACK_IMPORTED_MODULE_1__.WriteUsRequest(writeUs));
    return this.httpClient.post(this.writeUsEndpoint, body, {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function EmailService_Factory(t) {
    return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: EmailService,
    factory: EmailService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5758:
/*!**************************************************!*\
  !*** ./src/app/service/header-shared.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderSharedService: () => (/* binding */ HeaderSharedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _model_header_header_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/header/header-dto */ 5031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class HeaderSharedService {
  constructor() {
    this.headerDtoBehaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(new _model_header_header_dto__WEBPACK_IMPORTED_MODULE_0__.HeaderDto());
    this.headerDtoDefault = {
      showHeaderGuide: false,
      address: false,
      deliveryAndPayment: false,
      stepCart: false
    };
    try {
      const data = JSON.parse(localStorage.getItem('headerGuide'));
      this.updateValue(data);
    } catch (e) {
      localStorage.removeItem('headerGuide');
      this.updateValue(this.headerDtoDefault);
    }
  }
  getHeaderGuideAsObservable() {
    return this.headerDtoBehaviorSubject.asObservable();
  }
  updateValue(headerDto) {
    localStorage.removeItem('headerGuide');
    this.headerDtoBehaviorSubject.next(headerDto);
    localStorage.setItem('headerGuide', JSON.stringify(headerDto));
  }
  static #_ = this.ɵfac = function HeaderSharedService_Factory(t) {
    return new (t || HeaderSharedService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: HeaderSharedService,
    factory: HeaderSharedService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6352:
/*!**************************************************!*\
  !*** ./src/app/service/local-storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LocalStorageService {
  constructor() {}
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
  static #_ = this.ɵfac = function LocalStorageService_Factory(t) {
    return new (t || LocalStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LocalStorageService,
    factory: LocalStorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6915:
/*!******************************************!*\
  !*** ./src/app/service/order.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _model_order_order_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/order/order-create */ 5884);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);






class OrderService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.createOrderEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.baseUrl + '/api/orders';
  }
  createOrder(errorDto, order) {
    const body = JSON.stringify(new _model_order_order_create__WEBPACK_IMPORTED_MODULE_1__.OrderCreate(order));
    return this.httpClient.post(this.createOrderEndpoint, body, {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.contentTypeAndAcceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function OrderService_Factory(t) {
    return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: OrderService,
    factory: OrderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3729:
/*!***************************************************!*\
  !*** ./src/app/service/payment-shared.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentSharedService: () => (/* binding */ PaymentSharedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/delivery/payment-type */ 6952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class PaymentSharedService {
  constructor() {
    this.subjectPaymentType = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.BANK_TRANSFER);
    this.reload();
  }
  getPaymentObservable() {
    return this.subjectPaymentType.asObservable();
  }
  reload() {
    const data = localStorage.getItem('paymentType');
    if (data === _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.PROFORMA.valueOf()) {
      localStorage.removeItem('paymentType');
      localStorage.setItem('paymentType', _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.PROFORMA);
      this.subjectPaymentType.next(_model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.PROFORMA);
    } else {
      localStorage.removeItem('paymentType');
      localStorage.setItem('paymentType', _model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.BANK_TRANSFER);
      this.subjectPaymentType.next(_model_delivery_payment_type__WEBPACK_IMPORTED_MODULE_0__.PaymentType.BANK_TRANSFER);
    }
  }
  changeValue(paymentType) {
    localStorage.removeItem('paymentType');
    this.subjectPaymentType.next(paymentType);
    localStorage.setItem('paymentType', paymentType);
  }
  static #_ = this.ɵfac = function PaymentSharedService_Factory(t) {
    return new (t || PaymentSharedService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PaymentSharedService,
    factory: PaymentSharedService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2056:
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var _model_filter_product_sort_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/filter/product-sort-type */ 9238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);







class ProductService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.productsFilterEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/products/filter';
    this.productEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/products';
    this.productImageEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/products/img-upload';
  }
  filterProducts(errorDto, byName, byCategoryUrl, priceMin, priceMax, productSort, filters, productPagination) {
    let paramsData = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('detailed', 'true').set('sortBy', productSort || _model_filter_product_sort_type__WEBPACK_IMPORTED_MODULE_2__.ProductSortType.NAME);
    let pageNumber = productPagination?.pageNumber;
    if (pageNumber !== undefined) {
      if (pageNumber > 0) {
        paramsData = paramsData.set('pageNumber', productPagination.pageNumber - 1);
      } else {
        paramsData = paramsData.set('pageNumber', productPagination.pageNumber);
      }
      // TODO solve problem with pagination from 0 instead of 1 - does not work
    }
    if (productPagination?.pageSize !== undefined) {
      paramsData = paramsData.set('pageSize', productPagination.pageSize);
    }
    if (byName) {
      paramsData = paramsData.set('name', byName);
    }
    if (byCategoryUrl !== undefined) {
      paramsData = paramsData.set('categories', byCategoryUrl);
    }
    if (priceMin !== undefined) {
      paramsData = paramsData.set('priceMin', priceMin.toString());
    }
    if (priceMax !== undefined) {
      paramsData = paramsData.set('priceMax', priceMax.toString());
    }
    if (filters !== undefined && filters.length > 0) {
      paramsData = paramsData.set('variantIds', filters.join(','));
    }
    return this.httpClient.get(this.productsFilterEndpoint, {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson,
      params: paramsData
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  findProduct(productUrl, errorDto) {
    const productUrlEndpoint = this.addParamIntoUrl(this.productEndpoint, productUrl);
    return this.httpClient.get(productUrlEndpoint, {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  findProductImage(productUrl, errorDto) {
    const productUrlEndpoint = this.addParamIntoUrl(this.productImageEndpoint, productUrl);
    return this.httpClient.get(productUrlEndpoint, {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6120:
/*!****************************************************!*\
  !*** ./src/app/service/variant-catalog.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantCatalogService: () => (/* binding */ VariantCatalogService)
/* harmony export */ });
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-constants */ 8301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





class VariantCatalogService extends _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.variantCatalogEndpoint = _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseUrl + '/api/variant-catalog';
  }
  listAll(errorDto) {
    return this.httpClient.get(this.variantCatalogEndpoint.concat("/all"), {
      headers: _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.acceptJson
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => this.handleError(err, errorDto)));
  }
  static #_ = this.ɵfac = function VariantCatalogService_Factory(t) {
    return new (t || VariantCatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: VariantCatalogService,
    factory: VariantCatalogService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 544:
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsComponent: () => (/* binding */ TermsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _model_advertisement_advertisement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/advertisement/advertisement */ 7843);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_advertisement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/advertisement.service */ 3526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);







class TermsComponent {
  constructor(advertisementService) {
    this.advertisementService = advertisementService;
    this.advertisementDto = new _model_advertisement_advertisement__WEBPACK_IMPORTED_MODULE_0__.Advertisement();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_1__.ErrorDto();
  }
  loadAdvertisement() {
    console.log('Reloading advertisement');
    this.advertisementService.findAdvertisement(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.advertisementDto = response.data;
      },
      error: err => {
        this.advertisementDto = new _model_advertisement_advertisement__WEBPACK_IMPORTED_MODULE_0__.Advertisement();
      }
    });
  }
  ngOnInit() {
    this.loadAdvertisement();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function TermsComponent_Factory(t) {
    return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_advertisement_service__WEBPACK_IMPORTED_MODULE_2__.AdvertisementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TermsComponent,
    selectors: [["app-terms"]],
    decls: 147,
    vars: 15,
    consts: [[1, "container", "pt-4"], [1, "text-center", "d-block"], [1, "text-center", "d-block", "fw-bold"], [1, "d-block", "ps-2", "pt-3", "fw-bold"], [1, "list-group", "list-group-numbered", "pt-3"], [1, "list-group-item"], [1, "fw-bold"], [1, "d-block", "ps-4"], [1, "d-block", "ps-2", "fw-bold", "pt-3"], [1, "list-group-item", "ps-2"], [1, "font-monospace", "ps-2", "pt-3"], ["href", "/terms"], [1, "d-block", "ps-4", "fw-bold"]],
    template: function TermsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Obchodn\u00ED podm\u00EDnky");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Z\u00E1kladn\u00ED ustanoven\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ol", 4)(8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u201EProd\u00E1vaj\u00EDc\u00ED\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, ") a jej\u00EDmi z\u00E1kazn\u00EDky (d\u00E1le jen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u201EKupuj\u00EDc\u00ED\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "tel. \u010D\u00EDslo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Kupuj\u00EDc\u00EDm se rozum\u00ED ka\u017Ed\u00FD \u010Dlov\u011Bk, kter\u00FD mimo r\u00E1mec sv\u00E9 podnikatelsk\u00E9 \u010Dinnosti nebo mimo r\u00E1mec samostatn\u00E9ho v\u00FDkonu sv\u00E9ho povol\u00E1n\u00ED uzav\u00EDr\u00E1 smlouvu s Prod\u00E1vaj\u00EDc\u00EDm nebo s n\u00EDm jinak jedn\u00E1 za \u00FA\u010Delem koup\u011B zbo\u017E\u00ED nab\u00EDzen\u00E9ho Prodejcem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "P\u0159i zah\u00E1jen\u00ED pr\u00E1vn\u00EDho jedn\u00E1n\u00ED p\u0159ed\u00E1v\u00E1 Kupuj\u00EDc\u00ED Prod\u00E1vaj\u00EDc\u00EDmu pouze sv\u00E9 kontaktn\u00ED \u00FAdaje, nutn\u00E9 pro bezprobl\u00E9mov\u00E9 vy\u0159\u00EDzen\u00ED objedn\u00E1vky, pop\u0159\u00EDpad\u011B \u00FAdaje, kter\u00E9 chce m\u00EDt uvedeny na n\u00E1kupn\u00EDch dokladech. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Pr\u00E1vn\u00ED vztahy Prod\u00E1vaj\u00EDc\u00EDho s Kupuj\u00EDc\u00EDm v\u00FDslovn\u011B neupraven\u00E9 t\u011Bmito obchodn\u00EDmi podm\u00EDnkami se \u0159\u00EDd\u00ED p\u0159\u00EDslu\u0161n\u00FDmi ustanoven\u00EDmi z\u00E1k. \u010D. 89/2012 Sb., (ob\u010Dansk\u00FD z\u00E1kon\u00EDk), z\u00E1k. \u010D. 634/1992 Sb. o ochran\u011B spot\u0159ebitele, jako\u017E i pr\u00E1vn\u00EDmi p\u0159edpisy souvisej\u00EDc\u00EDmi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Kupuj\u00EDc\u00ED si je v\u011Bdom, \u017Ee mu koup\u00ED produkt\u016F, je\u017E jsou v obchodn\u00ED nab\u00EDdce Prod\u00E1vaj\u00EDc\u00EDho, nevznikaj\u00ED \u017E\u00E1dn\u00E1 pr\u00E1va na pou\u017E\u00EDv\u00E1n\u00ED registrovan\u00FDch zna\u010Dek, obchodn\u00EDch n\u00E1zv\u016F, firemn\u00EDch log \u010Di patent\u016F Prod\u00E1vaj\u00EDc\u00EDho nebo dal\u0161\u00EDch firem, nen\u00ED-li v konkr\u00E9tn\u00EDm p\u0159\u00EDpad\u011B zvl\u00E1\u0161tn\u00ED smlouvou sjedn\u00E1no jinak. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Bezpe\u010Dnost a ochrana informac\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ol", 4)(37, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Uzav\u0159en\u00EDm smlouvy Kupuj\u00EDc\u00ED potvrzuje, \u017Ee osobn\u00ED \u00FAdaje, kter\u00E9 uvedl jsou pravdiv\u00E9 a souhlas\u00ED s t\u00EDm, aby poskytnut\u00E9 \u00FAdaje byly Prod\u00E1vaj\u00EDc\u00EDm zpracov\u00E1ny a uchov\u00E1ny v souladu se z\u00E1konem o ochran\u011B osobn\u00EDch \u00FAdaj\u016F a Obecn\u00FDm na\u0159\u00EDzen\u00EDm o ochran\u011B osobn\u00EDch \u00FAdaj\u016F (GDPR). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Prod\u00E1vaj\u00EDc\u00ED prohla\u0161uje, \u017Ee ve\u0161ker\u00E9 osobn\u00ED \u00FAdaje Kupuj\u00EDc\u00EDho budou pou\u017Eity pouze k uskute\u010Dn\u011Bn\u00ED pln\u011Bn\u00ED smlouvy a nebudou jinak zve\u0159ejn\u011Bny nebo poskytnuty t\u0159et\u00ED osob\u011B; s v\u00FDjimkou situace souvisej\u00EDc\u00ED s distribuc\u00ED \u010Di platebn\u00EDm stykem t\u00FDkaj\u00EDc\u00EDho se objednan\u00E9ho zbo\u017E\u00ED (sd\u011Blen\u00ED jm\u00E9na a adresy dod\u00E1n\u00ED). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "V\u00EDce se o ochran\u011B osobn\u00EDch \u00FAdaj\u016F do\u010Dtete v dokumentu s n\u00E1zvem Jak chr\u00E1n\u00EDme Va\u0161e osobn\u00ED \u00FAdaje, kter\u00FD je dostupn\u00FD na internetov\u00FDch str\u00E1nk\u00E1ch Prodejce. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Objedn\u00E1n\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ol", 4)(46, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Kupuj\u00EDc\u00ED od Prod\u00E1vaj\u00EDc\u00EDho kupuje zbo\u017E\u00ED za cenu platnou v okam\u017Eiku objedn\u00E1n\u00ED. Kupn\u00ED cena je v\u017Edy uvedena u konkr\u00E9tn\u00EDho zbo\u017E\u00ED v internetov\u00E9m obchod\u011B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "N\u00E1klady na po\u0161tovn\u00E9 a baln\u00E9 nese kupuj\u00EDc\u00ED dle zp\u016Fsobu, kter\u00FD zvolil p\u0159i objedn\u00E1n\u00ED zbo\u017E\u00ED. Tyto n\u00E1klady se \u0159\u00EDd\u00ED cenami uveden\u00FDmi v \u010Dl\u00E1nku ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "\"Dodac\u00ED podm\u00EDnky\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, ". t\u011Bchto obchodn\u00EDch podm\u00EDnek. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Uzav\u0159en\u00ED smlouvy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "ol", 4)(58, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "K uzav\u0159en\u00ED kupn\u00ED smlouvy doch\u00E1z\u00ED na z\u00E1klad\u011B p\u0159ijet\u00ED nab\u00EDdky Prod\u00E1vaj\u00EDc\u00EDho Kupuj\u00EDc\u00EDm prost\u0159ednictv\u00EDm objedn\u00E1n\u00ED zbo\u017E\u00ED, kter\u00E9 je uvedeno na internetov\u00FDch str\u00E1nk\u00E1ch Prodejce. Objedn\u00E1vku nelze u\u010Dinit telefonicky. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Ka\u017Ed\u00E1 smlouva uzav\u0159en\u00E1 mezi Prod\u00E1vaj\u00EDc\u00EDm a Kupuj\u00EDc\u00EDm m\u016F\u017Ee b\u00FDt uzav\u0159ena pouze v \u010Desk\u00E9m jazyku. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "P\u0159ijet\u00ED nab\u00EDdky s dodatkem nebo odchylkou nen\u00ED p\u0159ijet\u00EDm nab\u00EDdky a nevyvol\u00E1 pr\u00E1vn\u00ED \u00FA\u010Dinky, a to i v p\u0159\u00EDpad\u011B, kdy\u017E dodatek nebo odchylka podstatn\u011B nem\u011Bn\u00ED podm\u00EDnky nab\u00EDdky. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "P\u0159evzet\u00ED nevy\u017E\u00E1dan\u00E9ho pln\u011Bn\u00ED ze strany Kupuj\u00EDc\u00EDho neznamen\u00E1 p\u0159ijet\u00ED nab\u00EDdky. V p\u0159\u00EDpad\u011B p\u0159eb\u00EDr\u00E1n\u00ED nevy\u017E\u00E1dan\u00E9ho pln\u011Bn\u00ED je Kupuj\u00EDc\u00ED povinen o existenci tohoto pln\u011Bn\u00ED Prod\u00E1vaj\u00EDc\u00EDho informovat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Po dokon\u010Den\u00ED objedn\u00E1vky bude Kupuj\u00EDc\u00EDmu elektronickou cestou zasl\u00E1no potvrzen\u00ED objedn\u00E1vky (uzav\u0159en\u00ED kupn\u00ED smlouvy). Objedn\u00E1vka Kupuj\u00EDc\u00EDho z\u016Fst\u00E1v\u00E1 ulo\u017Eena u Prod\u00E1vaj\u00EDc\u00EDho. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Chyby vznikl\u00E9 p\u0159i zad\u00E1v\u00E1n\u00ED dat p\u0159ed pod\u00E1n\u00EDm objedn\u00E1vky m\u016F\u017Ee Kupuj\u00EDc\u00ED opravit pouze do odesl\u00E1n\u00ED objedn\u00E1vky. Po odesl\u00E1n\u00ED objedn\u00E1vky Prod\u00E1vaj\u00EDc\u00EDmu m\u016F\u017Ee Kupuj\u00EDc\u00ED Prod\u00E1vaj\u00EDc\u00EDho o t\u011Bchto chyb\u00E1ch informovat prost\u0159ednictv\u00EDm jeho kontaktn\u00EDch \u00FAdaj\u016F. Pro Prod\u00E1vaj\u00EDc\u00EDho jsou tyto zm\u011Bny pr\u00E1vn\u011B z\u00E1vazn\u00E9 pouze v p\u0159\u00EDpad\u011B, \u017Ee Kupuj\u00EDc\u00EDmu p\u00EDsemn\u011B potvrd\u00ED, \u017Ee je s nimi srozum\u011Bn. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Odstoupen\u00ED od smlouvy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "ol", 4)(73, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "V p\u0159\u00EDpad\u011B, \u017Ee Kupuj\u00EDc\u00ED odebral zbo\u017E\u00ED jin\u00FDm zp\u016Fsobem ne\u017E osobn\u011B, tedy kdy\u017E mu bylo objednan\u00E9 zbo\u017E\u00ED doru\u010Deno dopravn\u00ED slu\u017Ebou, je lh\u016Fta pro odstoupen\u00ED od smlouvy 14 dn\u00ED od doru\u010Den\u00ED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Napln\u00ED-li Kupuj\u00EDc\u00ED v\u0161echny n\u00E1le\u017Eitosti pro odstoupen\u00ED od spot\u0159ebitelsk\u00E9 smlouvy uzav\u0159en\u00E9 distan\u010Dn\u00EDm zp\u016Fsobem a rozhodne-li se pro odstoupen\u00ED ve shora uveden\u00E9 lh\u016Ft\u011B, je nutno splnit n\u00E1sleduj\u00EDc\u00ED podm\u00EDnky: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "ol", 4)(78, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Odeslat dopis (nejl\u00E9pe e-mailem na adresu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, ") s textem: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " \u201EJ\u00E1 \u2026\u2026\u2026\u2026. (jm\u00E9no Kupuj\u00EDc\u00EDho) jsem dne DD.MM.RRRR uzav\u0159el smlouvu \u010D. (\u010D\u00EDslo objedn\u00E1vky/faktury) se spole\u010Dnost\u00ED D\u016Fm zahrady a.s. V n\u00E1vaznosti na ustanoven\u00ED z\u00E1k. \u010D. 89/2012 Sb. o spot\u0159ebitelsk\u00FDch smlouv\u00E1ch uzav\u0159en\u00FDch distan\u010Dn\u00EDm zp\u016Fsobem t\u00EDmto jednostrann\u011B odstupuji od v\u00FD\u0161e uveden\u00E9 smlouvy, po\u017Eaduji vr\u00E1cen\u00ED uhrazen\u00E9 \u010D\u00E1stky za zbo\u017E\u00ED na \u00FA\u010Det \u010D\u00EDslo: \u2026\u2026\u2026\u2026\u2026\u2026\u2026/\u2026\u2026\u2026 a prohla\u0161uji, \u017Ee spl\u0148uji v\u0161echny z\u00E1konn\u00E9 po\u017Eadavky pro toto odstoupen\u00ED od smlouvy dle p\u0159\u00EDslu\u0161n\u00FDch pr\u00E1vn\u00EDch p\u0159edpis\u016F\u201C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "V p\u0159\u00EDpad\u011B p\u00EDsemn\u00E9ho vyhotoven\u00ED dopisu je Kupuj\u00EDc\u00ED povinen opat\u0159it dopis p\u0159\u00EDslu\u0161n\u00FDm datem a vlastnoru\u010Dn\u00EDm podpisem.] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, " Zbo\u017E\u00ED odes\u00EDlan\u00E9 a doru\u010Den\u00E9 zp\u011Bt na adresu Prod\u00E1vaj\u00EDc\u00EDho mus\u00ED b\u00FDt nepo\u0161kozen\u00E9, kompletn\u00ED (v\u010Detn\u011B p\u0159\u00EDslu\u0161enstv\u00ED, n\u00E1vodu atd.) a s kopi\u00ED dokladu o koupi. V p\u0159\u00EDpad\u011B nedodr\u017Een\u00ED n\u011Bkter\u00E9 z uveden\u00FDch n\u00E1le\u017Eitost\u00ED m\u00E1 Prod\u00E1vaj\u00EDc\u00ED pr\u00E1vo odm\u00EDtnout vr\u00E1cen\u00E9 zbo\u017E\u00ED nebo pom\u011Brn\u011B sn\u00ED\u017Eit \u010D\u00E1stku, za kterou bude zbo\u017E\u00ED p\u0159ijato zp\u011Bt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, " Mo\u017Enost odstoupit od smlouvy se nevztahuje na zbo\u017E\u00ED upraven\u00E9 dle p\u0159\u00E1n\u00ED Kupuj\u00EDc\u00EDho a jin\u00E9 zbo\u017E\u00ED, kter\u00E9 nelze vr\u00E1tit do p\u016Fvodn\u00EDho stavu p\u0159ed koup\u00ED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Reklamace zbo\u017E\u00ED a pr\u00E1va z vadn\u00E9ho pln\u011Bn\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "ol", 4)(94, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, " Reklama\u010Dn\u00ED \u0159\u00E1d v\u010Detn\u011B pr\u00E1va z vadn\u00E9ho pln\u011Bn\u00ED naleznete na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "reklama\u010Dn\u00ED \u0159\u00E1d");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Informace o zbo\u017E\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "ol", 4)(101, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, " Informace o zbo\u017E\u00ED nab\u00EDzen\u00E9m v internetov\u00E9m obchodu Prod\u00E1vaj\u00EDc\u00EDho maj\u00ED pouze ilustra\u010Dn\u00ED charakter a v detailech se mohou li\u0161it od dod\u00E1van\u00E9ho zbo\u017E\u00ED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, " V internetov\u00E9m obchod\u011B jsou v\u017Edy aktu\u00E1ln\u00ED a platn\u00E9 ceny nab\u00EDzen\u00E9ho zbo\u017E\u00ED. V cen\u011B zbo\u017E\u00ED nen\u00ED zahrnuto po\u0161tovn\u00E9 a baln\u00E9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Platebn\u00ED podm\u00EDnky");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "ol", 4)(108, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, " Objednan\u00E9 zbo\u017E\u00ED je mo\u017En\u00E9 zaplatit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "platbou pomoc\u00ED p\u0159evodu na \u00FA\u010Det Prod\u00E1vaj\u00EDc\u00EDho po dokon\u010Den\u00ED objedn\u00E1vky.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, " Zbo\u017E\u00ED z\u016Fst\u00E1v\u00E1 do \u00FApln\u00E9ho zaplacen\u00ED majetkem Prod\u00E1vaj\u00EDc\u00EDho. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "Dodac\u00ED podm\u00EDnky");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "ol", 4)(117, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "Zas\u00EDl\u00E1n\u00ED dopravn\u00ED slu\u017Ebou: Objednan\u00E9 zbo\u017E\u00ED bude odesl\u00E1no po\u0161tovn\u00ED dopravn\u00ED slu\u017Ebou. Cena dopravy se \u0159\u00EDd\u00ED dle cen\u00EDku dopravce aktu\u00E1ln\u00EDho v den objedn\u00E1vky.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "P\u0159i n\u00E1kupu zbo\u017E\u00ED nad");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, " a doru\u010Den\u00ED po \u010CR hrad\u00ED n\u00E1klady na dopravu zbo\u017E\u00ED Prod\u00E1vaj\u00EDc\u00ED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "Kupuj\u00EDc\u00ED je povinen p\u0159i dod\u00E1n\u00ED zbo\u017E\u00ED p\u0159evz\u00EDt s v\u00FDjimkou uvedenou v \u010Dl. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Dodac\u00ED podm\u00EDnky.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, " odst. 5 t\u011Bchto obchodn\u00EDch podm\u00EDnek. Nep\u0159evezme-li kupuj\u00EDc\u00ED zbo\u017E\u00ED p\u0159i dod\u00E1n\u00ED, je Prod\u00E1vaj\u00EDc\u00ED opr\u00E1vn\u011Bn od kupn\u00ED smlouvy odstoupit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Pokud je z d\u016Fvodu na stran\u011B Kupuj\u00EDc\u00EDho nutno zbo\u017E\u00ED doru\u010Dovat opakovan\u011B nebo jin\u00FDm zp\u016Fsobem, ne\u017E bylo uvedeno v objedn\u00E1vce, je Kupuj\u00EDc\u00ED povinen uhradit n\u00E1klady spojen\u00E9 s opakovan\u00FDm doru\u010Dov\u00E1n\u00EDm zbo\u017E\u00ED, jako\u017E i n\u00E1klady spojen\u00E9 s jin\u00FDm zp\u016Fsobem doru\u010Den\u00ED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "P\u0159i p\u0159eb\u00EDr\u00E1n\u00ED zbo\u017E\u00ED od dopravce je Kupuj\u00EDc\u00ED povinen zkontrolovat neporu\u0161enost obal\u016F zbo\u017E\u00ED a p\u0159\u00EDpadn\u00E9 z\u00E1vady ozn\u00E1mit dopravci. Zbo\u017E\u00ED se zjevn\u011B po\u0161kozen\u00FDm obalem nen\u00ED Kupuj\u00EDc\u00ED povinen od dopravce p\u0159evz\u00EDt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Podpisem dodac\u00EDho listu kupuj\u00EDc\u00ED stvrzuje, \u017Ee z\u00E1silka zbo\u017E\u00ED spl\u0148ovala v\u0161echny podm\u00EDnky a n\u00E1le\u017Eitosti a na p\u0159\u00EDpadnou pozd\u011Bj\u0161\u00ED reklamaci ohledn\u011B poru\u0161en\u00ED obalu z\u00E1silky nebude br\u00E1n z\u0159etel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Dal\u0161\u00ED pr\u00E1va a povinnosti p\u0159i doprav\u011B zbo\u017E\u00ED mohou b\u00FDt upraveny v p\u0159\u00EDslu\u0161n\u00FDch dodac\u00EDch podm\u00EDnk\u00E1ch dopravce");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Z\u00E1v\u011Bre\u010Dn\u00E1 ustanoven\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "ol", 4)(140, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](142, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "Aktu\u00E1ln\u00ED obchodn\u00ED podm\u00EDnky jsou k dispozici na internetov\u00FDch str\u00E1nk\u00E1ch Prod\u00E1vaj\u00EDc\u00EDho.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "Prod\u00E1vaj\u00EDc\u00ED si vyhrazuje pr\u00E1vo zm\u011Bnit tyto obchodn\u00ED podm\u00EDnky bez p\u0159edchoz\u00EDho upozorn\u011Bn\u00ED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.eshopName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Tyto obchodn\u00ED podm\u00EDnky upravuj\u00ED vztahy mezi kupuj\u00EDc\u00EDm a prod\u00E1vaj\u00EDc\u00EDm v oblasti prodeje ", ctx.advertisementDto.sortiment, " a souvisej\u00EDc\u00EDho zbo\u017E\u00ED mezi spole\u010Dnost\u00ED ", ctx.advertisementDto.eshopName, " (d\u00E1le jen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("Prod\u00E1vaj\u00EDc\u00EDm je spole\u010Dnost ", ctx.advertisementDto.eshopName, ", se s\u00EDdlem ", ctx.advertisementDto.address, " kter\u00E1 je registrovan\u00FDm podnikatelsk\u00FDm subjektem s I\u010CO ", ctx.advertisementDto.ico, ". Kontaktn\u00ED \u00FAdaje na Prod\u00E1vaj\u00EDc\u00EDho jsou: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.emailWho);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Prod\u00E1vaj\u00EDc\u00ED nedisponuje tzv. kamenn\u00FDm obchodem, kde si m\u016F\u017Ee Kupuj\u00EDc\u00ED zbo\u017E\u00ED osobn\u011B prohl\u00E9dnout a vyzvednout. Pro \u00FA\u010Del nab\u00EDdky zbo\u017E\u00ED slou\u017E\u00ED internetov\u00FD obchod, kter\u00FD je provozov\u00E1n na webov\u00E9 adrese ", ctx.advertisementDto.webEshopAddress, ", tud\u00ED\u017E je k dispozici 24 hodin denn\u011B, 7 dn\u00ED v t\u00FDdnu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.eshopEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.advertisementDto.limitFreeShippingPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Tyto obchodn\u00ED podm\u00EDnky tvo\u0159\u00ED ned\u00EDlnou sou\u010D\u00E1st ka\u017Ed\u00E9 smlouvy uzav\u0159en\u00E9 mezi Prod\u00E1vaj\u00EDc\u00EDm a Kupuj\u00EDc\u00EDm s platnost\u00ED od ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](142, 12, ctx.advertisementDto.dueDate, "dd.MM.yyyy"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 100:
/*!**************************************************************************************!*\
  !*** ./src/app/variant-catalog-filter-item/variant-catalog-filter-item.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterChangeEventVo: () => (/* binding */ FilterChangeEventVo),
/* harmony export */   VariantCatalogFilterItemComponent: () => (/* binding */ VariantCatalogFilterItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function VariantCatalogFilterItemComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VariantCatalogFilterItemComponent_div_2_Template_input_change_2_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.fireFilterChangeEvent($event, item_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r2.id)("checked", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
  }
}
class VariantCatalogFilterItemComponent {
  constructor() {
    this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  fireFilterChangeEvent($event, id) {
    console.log($event);
    let target = $event.target;
    const isChecked = target.checked;
    let filterChangeEventVo = new FilterChangeEventVo(this.variantCatalogDataItem.paramName, id, isChecked);
    this.filterChange.emit(filterChangeEventVo);
    console.log('emitted' + JSON.stringify(filterChangeEventVo));
  }
  static #_ = this.ɵfac = function VariantCatalogFilterItemComponent_Factory(t) {
    return new (t || VariantCatalogFilterItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VariantCatalogFilterItemComponent,
    selectors: [["app-variant-catalog-filter-item"]],
    inputs: {
      variantCatalogDataItem: "variantCatalogDataItem"
    },
    outputs: {
      filterChange: "filterChange"
    },
    decls: 3,
    vars: 2,
    consts: [["class", "d-flex flex-row", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row"], [1, "px-2"], ["type", "checkbox", 3, "change", "id", "checked"]],
    template: function VariantCatalogFilterItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VariantCatalogFilterItemComponent_div_2_Template, 6, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.variantCatalogDataItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.variantCatalogDataItem.variants);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    encapsulation: 2
  });
}
class FilterChangeEventVo {
  get filterParamName() {
    return this._filterParamName;
  }
  get filterItemId() {
    return this._filterItemId;
  }
  get checked() {
    return this._checked;
  }
  constructor(_filterParamName, _filterItemId, _checked) {
    this._filterParamName = _filterParamName;
    this._filterItemId = _filterItemId;
    this._checked = _checked;
  }
}

/***/ }),

/***/ 7650:
/*!****************************************************************************!*\
  !*** ./src/app/variant-catalog-filter/variant-catalog-filter.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnabledFilterItem: () => (/* binding */ EnabledFilterItem),
/* harmony export */   VariantCatalogEmittedVo: () => (/* binding */ VariantCatalogEmittedVo),
/* harmony export */   VariantCatalogFilterComponent: () => (/* binding */ VariantCatalogFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/abstract/base-service */ 1778);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/variant-catalog.service */ 6120);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _variant_catalog_filter_item_variant_catalog_filter_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variant-catalog-filter-item/variant-catalog-filter-item.component */ 100);










function VariantCatalogFilterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "app-variant-catalog-filter-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("filterChange", function VariantCatalogFilterComponent_div_0_Template_app_variant_catalog_filter_item_filterChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.processFilterChangeEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const variantCatalogDataItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("variantCatalogDataItem", variantCatalogDataItem_r3);
  }
}
class VariantCatalogFilterComponent {
  putOrUpdate($event) {
    let key = $event.filterParamName;
    let found = this.actualCheckBoxStates.get(key);
    let checked = $event.checked;
    let enabledFilterItem = new EnabledFilterItem($event.filterItemId, checked);
    if (!checked) {
      this.cleanNotCheckedFromStates(key, enabledFilterItem);
      return;
    }
    if (found == null) {
      this.actualCheckBoxStates.set(key, [enabledFilterItem]);
    } else {
      found.push(enabledFilterItem);
    }
  }
  cleanNotCheckedFromStates(inKey, enabledFilterItem) {
    let found = this.actualCheckBoxStates.get(inKey);
    if (found == null) {
      return;
    }
    let filteredOutChanged = found.filter(item => item.filterId !== enabledFilterItem.filterId);
    this.actualCheckBoxStates.set(inKey, filteredOutChanged);
  }
  constructor(variantCatalogService, spinner, _route, _router) {
    this.variantCatalogService = variantCatalogService;
    this.spinner = spinner;
    this._route = _route;
    this._router = _router;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.errorDto = new _common_abstract_base_service__WEBPACK_IMPORTED_MODULE_0__.ErrorDto();
    this._name = 'variant-catalog';
    this.variantCatalog = [];
    this.variantCatalogEmittedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * Map of checkbox states queryParamName -> EnabledFilterItem
     * @private
     */
    this.actualCheckBoxStates = new Map();
  }
  ngOnInit() {
    this.loadVariantCatalog();
  }
  navigateToQueryParams() {
    var obj = {
      param1: 'something',
      param2: 'somethingelse',
      param3: 'another'
    };
    // this._router.navigate([], {
    //   queryParams: obj,
    //   queryParamsHandling: '',
    // });
    //console.log(this._router.url)
    let params = new Array();
    this.actualCheckBoxStates.forEach((value, key) => {
      let joined = value.map(item => item.filterId);
      params = params.concat(joined);
    });
    this.variantCatalogEmittedValue.emit({
      selectedVariants: params
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  loadVariantCatalog() {
    this.spinner.show(this._name).then(r => r);
    this.variantCatalogService.listAll(this.errorDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: catalogVariants => {
        this.variantCatalog = catalogVariants.data;
      },
      error: () => {
        this.spinner.hide('Variant Catalog').then(() => {
          this.variantCatalog = [];
        });
      }
    });
  }
  processFilterChangeEvent($event) {
    this.putOrUpdate($event);
    this.navigateToQueryParams();
    console.log($event);
  }
  static #_ = this.ɵfac = function VariantCatalogFilterComponent_Factory(t) {
    return new (t || VariantCatalogFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_variant_catalog_service__WEBPACK_IMPORTED_MODULE_1__.VariantCatalogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: VariantCatalogFilterComponent,
    selectors: [["app-variant-catalog-filter"]],
    outputs: {
      variantCatalogEmittedValue: "variantCatalogEmittedValue"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "mt-2", 4, "ngFor", "ngForOf"], [1, "mt-2"], [3, "filterChange", "variantCatalogDataItem"]],
    template: function VariantCatalogFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VariantCatalogFilterComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.variantCatalog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _variant_catalog_filter_item_variant_catalog_filter_item_component__WEBPACK_IMPORTED_MODULE_2__.VariantCatalogFilterItemComponent],
    encapsulation: 2
  });
}
class EnabledFilterItem {
  get filterId() {
    return this._filterId;
  }
  get enabled() {
    return this._enabled;
  }
  constructor(_filterId, _enabled) {
    this._filterId = _filterId;
    this._enabled = _enabled;
  }
}
class VariantCatalogEmittedVo {
  constructor() {
    this.selectedVariants = [];
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map