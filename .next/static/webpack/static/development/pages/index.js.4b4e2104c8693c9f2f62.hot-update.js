webpackHotUpdate("static/development/pages/index.js",{

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
      deposit = _ref.deposit,
      items = _ref.items,
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
    } else {
      setMessage("Unknown banknote!");
    }

    event.preventDefault();
  };

  var handleSubmitSelected = function handleSubmitSelected(event) {
    event.preventDefault();

    if (sel < 8 && sel > 0 && deposit >= items[sel - 1].price) {
      purchased(sel);
      setMessageTwo("Success!");
    } else {
      if (sel < 8 && sel > 0) {
        setMessageTwo("Не хватает денег!");
      } else {
        setMessageTwo("Enter the correct number!");
      }
    }
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
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("form", {
    style: styles.form,
    onSubmit: handleSubmitDeposit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("label", {
    style: styles.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, message), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("input", {
    style: styles.finput,
    type: "text",
    value: dep,
    onChange: handleChangeDep,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("span", {
    style: styles.desc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, " ", "Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.")), __jsx("form", {
    style: styles.form,
    onSubmit: handleSubmitSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("label", {
    style: styles.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, messageTwo), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx("input", {
    disabled: deposit > 0 ? "" : "disabled",
    style: styles.finput,
    type: "text",
    value: sel,
    onChange: handleChangeSel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.4b4e2104c8693c9f2f62.hot-update.js.map