webpackHotUpdate("static/development/pages/index.js",{

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
    // root: {
    //   display: "flex",
    //   flexDirection: "column",
    //   width : "30%",
    //   backgroundColor: enabled?"#654676":"#6546",
    //   border: "1px solid black",
    //   padding: "5px",
    //   margin : "5px",
    //   height: "30%"
    // },
    product_list_item: {
      flex: "0 0 calc(33%-0.625rem)",
      marginRight: "0.3125rem",
      marginBottom: "1rem",
      marginLeft: "0.3125rem"
    },
    product: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
      padding: "0.625rem 0.5rem 0.375rem 0.5rem",
      backgroundColor: enabled ? "#654676" : "#6546"
    }
  };
};

function Card(_ref) {
  var item = _ref.item,
      isEnabled = _ref.isEnabled;
  var enabled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    isEnabled(item);
  }, [item, isEnabled]);
  var styles = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return makeStyles(enabled);
  }, [enabled]);
  return __jsx("div", {
    style: styles.product_list_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: styles.product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: styles.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, item.name), __jsx("span", {
    style: styles.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, item.type), __jsx("span", {
    style: styles.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, item.price)), console.log(isEnabled));
}

/***/ })

})
//# sourceMappingURL=index.js.df052a2b8af8f85cf0eb.hot-update.js.map