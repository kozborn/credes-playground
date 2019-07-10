webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderLink */ "./components/HeaderLink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/piotrek/work/development/credes-playground/frontend-next/components/Header.js";






var Header = function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      visible = _useState2[0],
      toggleMenu = _useState2[1];

  var menuClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()("flex-grow-0 lg:flex lg:items-center", {
    block: visible,
    hidden: !visible
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("nav", {
    className: "block lg:flex flex-grow-0 lg:justify-center lg:items-center bg-white p-6 mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "block lg:hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: "flex items-center px-3 py-2 border rounded border-teal-400 hover:text-teal-400 hover:border-gray-600",
    onClick: function onClick() {
      return toggleMenu(visible ? false : true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: menuClassNames,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "text-sm lg:flex-grow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#some-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Program"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#some-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Events"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#some-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Bulletin Board"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#some-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Membership"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#some-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Resources"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#some-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#some-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.bc3e884ad812207d988e.hot-update.js.map