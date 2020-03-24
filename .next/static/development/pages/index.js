(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/machine/components/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var makeStyles = function makeStyles(enabled) {
  return {
    product_list_item: {
      flex: "0 0 calc(33% - 0.625rem)",
      marginRight: "0.3125rem",
      marginBottom: "2rem",
      marginLeft: "0.3125rem"
    },
    product: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
      padding: "0.625rem 0.5rem 0.375rem 0.5rem",
      transition: "color 1000ms ease-in, text-shadow 1200ms ease-in",
      color: "#38fe3a",
      borderRadius: "0.125rem",
      backgroundColor: "rgba(34, 102, 33, 0.4)"
    },
    name: {
      marginBottom: "0.5rem",
      fontSize: "1.25rem",
      lineHeight: "1.625rem"
    },
    desc: {
      marginBottom: "0.875rem",
      lineHeight: "1.5rem"
    },
    price: {
      marginTop: "auto",
      color: enabled ? "#63e0ed" : "#38fe3a"
    },
    number: {
      position: "absolute",
      right: "0.375rem",
      bottom: "0.125rem",
      fontSize: "1.75rem",
      color: enabled ? "#63e0ed" : "#38fe3a"
    }
  };
};

function Card(_ref) {
  var item = _ref.item,
      enabled = _ref.enabled,
      number = _ref.number;
  var styles = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return makeStyles(enabled);
  }, [enabled]);
  return __jsx("div", {
    style: styles.product_list_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: styles.product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: styles.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }
  }, item.name), __jsx("span", {
    style: styles.desc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, item.type), __jsx("span", {
    style: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, item.price), __jsx("span", {
    style: styles.number,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, number)));
}

/***/ }),

/***/ "./components/controlpanel.js":
/*!************************************!*\
  !*** ./components/controlpanel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlPanel; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _label,
    _finput,
    _jsxFileName = "/Users/tema/machine/components/controlpanel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var styles = {
  root: {
    flexDirection: "column"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3.5rem"
  },
  label: (_label = {
    display: "flex",
    alignItems: "center",
    height: "5.25rem",
    padding: "0 1rem 0 1rem",
    color: "#65e551",
    border: "0.125rem solid rgba(101, 229, 81, 0.4)",
    borderRadius: "0.25rem",
    backgroundImage: "-o-radial-gradient(#153817, #0a160d)"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "backgroundImage", "radial-gradient(#153817, #0a160d)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "boxShadow", "inset 0 0 0.25rem 0 rgba(56, 254, 58, 0.4)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "verticalAlign", "middle"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "lineHeight", "1.5rem"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "marginBottom", "1rem"), _label),
  finput: (_finput = {
    height: "3.75rem",
    padding: "0 1rem 0 2rem",
    transition: "border 400ms ease-in",
    color: "#63e0ed",
    border: "0.125rem solid rgba(99, 224, 237, 0.4)",
    borderRadius: "0.25rem",
    background: "-o-radial-gradient(#17713c, #125f32)"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_finput, "background", "radial-gradient(#17713c, #125f32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_finput, "verticalAlign", "middle"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_finput, "textShadow", "0 0 0.25rem rgba(99, 224, 237, 0.3)"), _finput),
  desc: {
    width: "90%",
    color: "#ebe8dd",
    lineHeight: "1.5rem"
  }
};
function ControlPanel(_ref) {
  var setDeposit = _ref.setDeposit,
      setSelected = _ref.setSelected,
      purchased = _ref.purchased;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      dep = _useState[0],
      setDep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      sel = _useState2[0],
      setSel = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Insert banknotes..."),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("."),
      messageTwo = _useState4[0],
      setMessageTwo = _useState4[1];

  var handleSubmitDeposit = function handleSubmitDeposit(event) {
    if (dep == 50 || dep == 100 || dep == 200 || dep == 500 || dep == 1000) {
      setDeposit(dep);
      setMessage("Inserted money:" + dep + "R");
      setMessageTwo("Choose product...");
      event.preventDefault();
    } else {
      setMessage("Unknown banknote!");
      event.preventDefault();
    }
  };

  var handleSubmitSelected = function handleSubmitSelected(event) {
    purchased(sel);
    setMessageTwo("Success!");
    event.preventDefault();
  };

  var handleChangeDep = function handleChangeDep(event) {
    setDep(event.target.value);
  };

  var handleChangeSel = function handleChangeSel(event) {
    setSel(event.target.value);
  };

  return __jsx("div", {
    style: styles.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("form", {
    style: styles.form,
    onSubmit: handleSubmitDeposit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("label", {
    style: styles.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, message), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx("input", {
    style: styles.finput,
    type: "text",
    value: dep,
    onChange: handleChangeDep,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx("span", {
    style: styles.desc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 10
    }
  }, " Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.")), __jsx("form", {
    style: styles.form,
    onSubmit: handleSubmitSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 1
    }
  }, __jsx("label", {
    style: styles.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, messageTwo), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 10
    }
  }), __jsx("input", {
    style: styles.finput,
    type: "text",
    value: sel,
    onChange: handleChangeSel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })));
}

/***/ }),

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
      columnNumber: 7
    }
  }, __jsx("div", {
    style: styles.product_list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
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
        lineNumber: 30,
        columnNumber: 27
      }
    });
  })));
}

/***/ }),

/***/ "./components/surrender.js":
/*!*********************************!*\
  !*** ./components/surrender.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Surrender; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _label,
    _outputItem,
    _jsxFileName = "/Users/tema/machine/components/surrender.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
var styles = {
  output: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingBottom: "1.75rem"
  },
  label: (_label = {
    display: "flex",
    alignItems: "center",
    height: "5.25rem",
    padding: "0 1rem 0 1rem",
    color: "#65e551",
    border: "0.125rem solid rgba(101, 229, 81, 0.4)",
    borderRadius: "0.25rem",
    backgroundImage: "-o-radial-gradient(#153817, #0a160d)"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "backgroundImage", "radial-gradient(#153817, #0a160d)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "boxShadow", "inset 0 0 0.25rem 0 rgba(56, 254, 58, 0.4)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "verticalAlign", "middle"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "lineHeight", "1.5rem"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_label, "marginBottom", "1rem"), _label),
  outputItem: (_outputItem = {
    display: "flex",
    flex: "0 0 calc(43% - 0.65rem)",
    color: "#65e551",
    height: "17.5rem",
    padding: "1.25rem 0.875rem",
    border: "0.125rem solid rgba(101, 229, 81, 0.4)",
    borderRadius: "0.25rem",
    background: "-o-radial-gradient(#153817, #0a160d)"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_outputItem, "background", "radial-gradi, #0a160dent(#153817)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_outputItem, "boxShadow", "inset 0 0 0.25rem 0 rgba(56, 254, 58, 0.4)"), _outputItem),
  row: {
    display: "flex"
  }
};
function Surrender(_ref) {
  var surrender = _ref.surrender,
      item = _ref.item;
  return __jsx("div", {
    style: styles.output,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: styles.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "\u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0442\u043E\u0432\u0430\u0440")), __jsx("div", {
    style: styles.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: styles.outputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }
  }, surrender.ten > 0 ? "10 R:" + surrender.ten + "coin" : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)), __jsx("div", {
    style: styles.outputItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 1
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 1
    }
  }, item.name, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), item.type, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), item.price))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftema%2Fmachine%2Fpages%2Findex.js!./":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftema%2Fmachine%2Fpages%2Findex.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

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
  ten: 0,
  five: 0,
  two: 0,
  one: 0
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
    if (items[selected - 1].price <= deposit) {
      setpurchasedItem(items[selected - 1]);
      surrender.ten = ~~((deposit - items[selected - 1].price) / 10);
      surrender.five = ~~((deposit - items[selected - 1].price) % 10 / 5);
      surrender.two = ~~((deposit - items[selected - 1].price) % 10 % 5 / 2);
      surrender.one = ~~((deposit - items[selected - 1].price) % 10 % 5 % 2 / 1);
    }
  };

  return __jsx("div", {
    style: styles.page,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: styles.page_showcase,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_components_showcase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: items,
    deposit: deposit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  })), __jsx("div", {
    style: styles.panel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_components_controlpanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setDeposit: setDeposit,
    deposit: deposit,
    purchased: purchased,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx(_components_surrender__WEBPACK_IMPORTED_MODULE_5__["default"], {
    surrender: surrender,
    item: purchasedItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ 1:
/*!*************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ftema%2Fmachine%2Fpages%2Findex.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ftema%2Fmachine%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftema%2Fmachine%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map