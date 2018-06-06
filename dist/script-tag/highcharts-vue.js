(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Highcharts"));
	else if(typeof define === 'function' && define.amd)
		define(["Highcharts"], factory);
	else if(typeof exports === 'object')
		exports["HighchartsVue"] = factory(require("Highcharts"));
	else
		root["HighchartsVue"] = factory(root["Highcharts"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = install;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });

function install(Vue, options) {
  var tagName = options && options.tagName || 'highcharts';
  Vue.component(tagName, __WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */]);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var HighchartsVueComponent = {
  template: '<div ref="chart"></div>',
  render: function render(createElement) {
    return createElement('div', {
      ref: 'chart'
    });
  },
  props: {
    constructorType: {
      type: String,
      default: 'chart'
    },
    options: {
      type: Object,
      required: true
    },
    callback: Function,
    updateArgs: {
      type: Array,
      default: function _default() {
        return [true, true];
      }
    }
  },
  watch: {
    options: {
      handler: function handler(newValue) {
        var _chart;

        (_chart = this.chart).update.apply(_chart, [newValue].concat(_toConsumableArray(this.updateArgs)));
      },
      deep: true
    }
  },
  mounted: function mounted() {
    // Check wheather the chart configuration object is passed, as well as the constructor is valid
    if (this.options && __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a[this.constructorType]) {
      this.chart = __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a[this.constructorType](this.$refs.chart, this.options, this.callback ? this.callback : null);
    } else {
      !this.options ? console.warn('The "options" parameter was not passed.') : console.warn("'".concat(this.constructorType, "' constructor-type is incorrect. Sometimes this error is casued by the fact, that the corresponding module wasn't imported."));
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Destroy chart if exists
    if (this.chart) {
      this.chart.destroy();
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (HighchartsVueComponent);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});