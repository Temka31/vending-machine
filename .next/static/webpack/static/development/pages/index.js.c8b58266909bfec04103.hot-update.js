webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/showcase */ "./components/showcase.js");
/* harmony import */ var _components_controlpanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controlpanel */ "./components/controlpanel.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _components_surrender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/surrender */ "./components/surrender.js");


var _page,
    _jsxFileName = "/Users/tema/machine/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var styles = {
  page: (_page = {
    display: "-webkit-box"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_page, "display", "-ms-flexbox"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_page, "display", "flex"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_page, "height", "100vh"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_page, "fontSize", "1.125rem"), _page),
  page_showcase: {
    flex: "1 1 auto",
    padding: "1.75rem",
    backgroundColor: "#141a0d"
  },
  panel: {
    flex: "0 0 22.5rem",
    padding: "1.75rem",
    backgroundColor: "#1a1f15",
    overflowY: "scroll"
  }
};
var surrender = {
  10: 0,
  5: 0,
  2: 0,
  1: 0
};
function Index() {
  var items = [{
    name: "Cola",
    type: "Cold drink",
    price: 130
  }, {
    name: "Evian",
    type: "Water",
    price: 90
  }, {
    name: "Durex",
    type: "Condoms",
    price: 600
  }, {
    name: "Snickers",
    type: "Choco bar",
    price: 105
  }, {
    name: "Wagon Wheels",
    type: "Choco cookies",
    price: 165
  }, {
    name: "WTF, Alice?",
    type: "I don't know",
    price: 200
  }, {
    name: "Fanta",
    type: "Cold drink",
    price: 130
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      deposit = _useState[0],
      setDeposit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      purchasedItem = _useState2[0],
      setpurchasedItem = _useState2[1];

  var purchased = function purchased(selected) {
    // if (items[selected - 1].price <= deposit) {
    setpurchasedItem(items[selected - 1]);
    surrender[10] = ~~((deposit - items[selected - 1].price) / 10);
    surrender[5] = ~~((deposit - items[selected - 1].price) % 10 / 5);
    surrender[2] = ~~((deposit - items[selected - 1].price) % 10 % 5 / 2);
    surrender[1] = ~~((deposit - items[selected - 1].price) % 10 % 5 % 2 / 1);
  };

  return __jsx("div", {
    style: styles.page,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: styles.page_showcase,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components_showcase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: items,
    deposit: deposit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: styles.panel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_components_controlpanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setDeposit: setDeposit,
    deposit: deposit,
    purchased: purchased,
    items: items,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(_components_surrender__WEBPACK_IMPORTED_MODULE_5__["default"], {
    surrender: surrender,
    item: purchasedItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.c8b58266909bfec04103.hot-update.js.map