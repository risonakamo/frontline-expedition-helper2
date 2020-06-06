/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/currentexp/currentexp.less":
/*!***********************************************!*\
  !*** ./components/currentexp/currentexp.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/currentexp/currentexp.less?");

/***/ }),

/***/ "./components/currentexp/currentexp.tsx":
/*!**********************************************!*\
  !*** ./components/currentexp/currentexp.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CurrentExpeditions; });\n/* harmony import */ var _exprow_exprow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exprow/exprow */ \"./components/exprow/exprow.tsx\");\n/* harmony import */ var _currentexp_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentexp.less */ \"./components/currentexp/currentexp.less\");\n/* harmony import */ var _currentexp_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_currentexp_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* CurrentExpeditions(ExpeditionData[] currentExpeditions) */\nclass CurrentExpeditions extends React.PureComponent {\n  render() {\n    return /*#__PURE__*/React.createElement(\"table\", {\n      className: \"current-expeditions\"\n    }, /*#__PURE__*/React.createElement(\"tbody\", null, _.map(this.props.currentExpeditions, x => {\n      return /*#__PURE__*/React.createElement(_exprow_exprow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        data: x,\n        key: x.name\n      });\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./components/currentexp/currentexp.tsx?");

/***/ }),

/***/ "./components/exprow/exprow.less":
/*!***************************************!*\
  !*** ./components/exprow/exprow.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/exprow/exprow.less?");

/***/ }),

/***/ "./components/exprow/exprow.tsx":
/*!**************************************!*\
  !*** ./components/exprow/exprow.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExpeditionRow; });\n/* harmony import */ var _exprow_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exprow.less */ \"./components/exprow/exprow.less\");\n/* harmony import */ var _exprow_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_exprow_less__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* ExpeditionRow(ExpeditionData data) */\nclass ExpeditionRow extends React.PureComponent {\n  render() {\n    return /*#__PURE__*/React.createElement(\"tr\", {\n      className: \"expedition-row\"\n    }, /*#__PURE__*/React.createElement(\"td\", null, this.props.data.name), /*#__PURE__*/React.createElement(\"td\", null, this.props.data.gas), /*#__PURE__*/React.createElement(\"td\", null, this.props.data.ammo), /*#__PURE__*/React.createElement(\"td\", null, this.props.data.mre), /*#__PURE__*/React.createElement(\"td\", null, this.props.data.parts), /*#__PURE__*/React.createElement(\"td\", null, this.props.data.doll), /*#__PURE__*/React.createElement(\"td\", null, this.props.data.equip), /*#__PURE__*/React.createElement(\"td\", null, this.props.data.total));\n  }\n\n}\n\n//# sourceURL=webpack:///./components/exprow/exprow.tsx?");

/***/ }),

/***/ "./components/exptable/exptable.less":
/*!*******************************************!*\
  !*** ./components/exptable/exptable.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/exptable/exptable.less?");

/***/ }),

/***/ "./components/exptable/exptable.tsx":
/*!******************************************!*\
  !*** ./components/exptable/exptable.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExpeditionTable; });\n/* harmony import */ var _exprow_exprow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exprow/exprow */ \"./components/exprow/exprow.tsx\");\n/* harmony import */ var _exptable_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exptable.less */ \"./components/exptable/exptable.less\");\n/* harmony import */ var _exptable_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exptable_less__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* ExpeditionTable(ExpeditionData[] data) */\nclass ExpeditionTable extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"table\", {\n      className: \"expedition-table\"\n    }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, \"name\"), /*#__PURE__*/React.createElement(\"td\", null, \"gas\"), /*#__PURE__*/React.createElement(\"td\", null, \"ammo\"), /*#__PURE__*/React.createElement(\"td\", null, \"mre\"), /*#__PURE__*/React.createElement(\"td\", null, \"parts\"), /*#__PURE__*/React.createElement(\"td\", null, \"doll\"), /*#__PURE__*/React.createElement(\"td\", null, \"equip\"), /*#__PURE__*/React.createElement(\"td\", null, \"total\"))), /*#__PURE__*/React.createElement(\"tbody\", null, _.map(this.props.data, x => {\n      return /*#__PURE__*/React.createElement(_exprow_exprow__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        data: x,\n        key: x.name\n      });\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./components/exptable/exptable.tsx?");

/***/ }),

/***/ "./index.less":
/*!********************!*\
  !*** ./index.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.less?");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_exptable_exptable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/exptable/exptable */ \"./components/exptable/exptable.tsx\");\n/* harmony import */ var _components_currentexp_currentexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/currentexp/currentexp */ \"./components/currentexp/currentexp.tsx\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass IndexMain extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      data: [],\n      currentExpeditions: []\n    };\n  }\n\n  async componentDidMount() {\n    this.setState({\n      data: await getExpData()\n    }, this.testSetCurrent);\n  } // test function, set the current expeditions to some of the data\n\n\n  testSetCurrent() {\n    console.log(\"test set current\");\n    this.setState({\n      currentExpeditions: [this.state.data[0], this.state.data[2], this.state.data[4], this.state.data[5]]\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_exptable_exptable__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      data: this.state.data\n    }), /*#__PURE__*/React.createElement(_components_currentexp_currentexp__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      currentExpeditions: this.state.currentExpeditions\n    }));\n  }\n\n}\n\nfunction main() {\n  ReactDOM.render( /*#__PURE__*/React.createElement(IndexMain, null), document.querySelector(\".main\"));\n} // get expedition data from data file\n\n\nfunction getExpData() {\n  return new Promise(resolve => {\n    var xhr = new XMLHttpRequest();\n    xhr.open(\"GET\", \"data/expeditiondata.csv\");\n\n    xhr.onreadystatechange = () => {\n      if (xhr.readyState == 4) {\n        resolve(fixRawExpeditionData(Papa.parse(xhr.response, {\n          header: true\n        }).data));\n      }\n    };\n\n    xhr.send();\n  });\n} // given raw expedition data, fix strings to floats and calculate\n// total field\n\n\nfunction fixRawExpeditionData(data) {\n  return _.map(data, x => {\n    var expdata = {\n      name: x.name,\n      gas: _.round(parseFloat(x.gas), 2),\n      ammo: _.round(parseFloat(x.ammo), 2),\n      mre: _.round(parseFloat(x.mre), 2),\n      parts: _.round(parseFloat(x.parts), 2),\n      doll: _.round(parseFloat(x.doll), 2),\n      equip: _.round(parseFloat(x.equip), 2)\n    };\n    expdata.total = _.round(expdata.gas + expdata.ammo + expdata.mre + expdata.parts + expdata.doll + expdata.equip, 2);\n    return expdata;\n  });\n}\n\nwindow.onload = main;\n\n//# sourceURL=webpack:///./index.tsx?");

/***/ })

/******/ });