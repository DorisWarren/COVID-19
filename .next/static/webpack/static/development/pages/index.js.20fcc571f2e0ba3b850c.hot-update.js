webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");

var _jsxFileName = "/Users/doriswarren/Desktop/covid-19/components/CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function CountrySelector() {
  var countries = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries');

  var _useState = useState(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      selectedCountry = _useState2[0],
      setSelectedCountry = _useState2[1];

  if (!countries) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Loading...");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("select", {
    onChange: function onChange(e) {
      console.log(e.target);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, Object.entries(countries.countries).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        country = _ref2[0],
        code = _ref2[1];

    return __jsx("option", {
      key: code,
      value: code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, country);
  })), __jsx(Stats, {
    url: "https://covid19.mathdro.id/api/countries/USA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.20fcc571f2e0ba3b850c.hot-update.js.map