webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/showcase.js":
/*!********************************!*\
  !*** ./components/showcase.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowCace; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");


var _showcase_body,
    _jsxFileName = "/Users/tema/machine/components/showcase.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var styles = {
  showcase_body: (_showcase_body = {
    position: "relative",
    padding: "2rem 1.25rem",
    border: "0.125rem solid #0e4e0f",
    borderRadius: "0.25rem",
    background: "-o-radial-gradient(#153817, #0a160d)"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_showcase_body, "background", "radial-gradient(#153817, #0a160d)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_showcase_body, "boxShadow", "inset 0 0 0.25rem 0 rgba(56, 254, 58, 0.4)"), _showcase_body),
  product_list: {
    display: "flex",
    flexWrap: "wrap",
    aligContent: "streth",
    paddingLeft: 0,
    marginTop: 0,
    marginRight: "-0.875rem",
    marginBottom: 0
  }
};
function ShowCace(_ref) {
  var _this = this;

  var items = _ref.items,
      deposit = _ref.deposit;

  var isEnabled = function isEnabled(item) {
    return item.price <= deposit;
  };

  return __jsx("div", {
    style: styles.showcase_body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: styles.product_list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, items.map(function (item) {
    return __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.name,
      item: item,
      number: items.indexOf(item) + 1,
      enabled: isEnabled(item),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.267b3525a09b1ef6b53a.hot-update.js.map