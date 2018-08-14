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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Stuff.js":
/*!**********************!*\
  !*** ./src/Stuff.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack:///./src/Stuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Stuff = __webpack_require__(/*! ./Stuff */ \"./src/Stuff.js\");\n\nvar _Stuff2 = _interopRequireDefault(_Stuff);\n\nvar _Util = __webpack_require__(/*! ./util/Util */ \"./src/util/Util.js\");\n\nvar _Util2 = _interopRequireDefault(_Util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar start = function start() {\n  console.log(\"start\");\n};\n\nvar wait = setInterval(function () {\n  switch (document.readyState) {\n    case \"complete\":\n    case \"loaded\":\n      break;\n    default:\n      return;\n  }\n  clearInterval(wait);\n  start();\n}, 1);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/Util.js":
/*!**************************!*\
  !*** ./src/util/Util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var isTouchDevice = function isTouchDevice() {\n    return navigator.maxTouchPoints || \"ontouchstart\" in document.documentElement;\n  };\n\n  var getScrollTop = function getScrollTop() {\n    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\n  };\n\n  var getOffsetTop = function getOffsetTop(element) {\n    var value = 0;\n    if (element.offsetParent) {\n      do {\n        value += element.offsetTop;\n      } while (element = element.offsetParent);\n    }\n    return value;\n  };\n\n  var getOffsetLeft = function getOffsetLeft(element) {\n    var value = 0;\n    if (element.offsetParent) {\n      do {\n        value += element.offsetLeft;\n      } while (element = element.offsetParent);\n    }\n    return value;\n  };\n\n  var getRgbToHex = function getRgbToHex(r, g, b) {\n    if (r > 255 || g > 255 || b > 255) {\n      throw \"Invalid Color Component\";\n    }\n    return (r << 16 | g << 8 | b).toString(16);\n  };\n\n  return {\n    isTouchDevice: isTouchDevice,\n    getScrollTop: getScrollTop,\n    getOffsetTop: getOffsetTop,\n    getOffsetLeft: getOffsetLeft,\n    getRgbToHex: getRgbToHex\n  };\n}();\n\n//# sourceURL=webpack:///./src/util/Util.js?");

/***/ })

/******/ });