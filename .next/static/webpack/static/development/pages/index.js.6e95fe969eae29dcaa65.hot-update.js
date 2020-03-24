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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: styles.product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: styles.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, item.name), __jsx("span", {
    style: styles.desc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, item.type), __jsx("span", {
    style: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, item.price), __jsx("span", {
    style: styles.number,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, number)));
}

/***/ })

})
//# sourceMappingURL=index.js.6e95fe969eae29dcaa65.hot-update.js.map