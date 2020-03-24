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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
var _jsxFileName = "/Users/tema/machine/components/showcase.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var styles = {
  showcase_body: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: "2rem 1.25rem",
    border: "0.125rem solid #0e4e0f"
  },
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
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: styles.product_list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, items.map(function (item) {
    return __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.name,
      item: item,
      isEnabled: isEnabled(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 27
      }
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.2f684b44c55322f87f0c.hot-update.js.map