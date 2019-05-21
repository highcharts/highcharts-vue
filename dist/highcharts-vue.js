(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("highcharts"));
	else if(typeof define === 'function' && define.amd)
		define(["highcharts"], factory);
	else if(typeof exports === 'object')
		exports["HighchartsVue"] = factory(require("highcharts"));
	else
		root["HighchartsVue"] = factory(root["Highcharts"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = install;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);


var Chart = Object(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_highcharts___default.a);
function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.component(options.tagName || 'highcharts', Object(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */])(options.highcharts || __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a));
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_tools__ = __webpack_require__(3);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var generateVueComponent = function generateVueComponent(Highcharts) {
  return {
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
      },
      highcharts: {
        type: Object
      },
      deepCopyOnUpdate: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      options: {
        handler: function handler(newValue) {
          var _this$chart;

          (_this$chart = this.chart).update.apply(_this$chart, [Object(__WEBPACK_IMPORTED_MODULE_0__utils_tools__["a" /* copyObject */])(newValue, this.deepCopyOnUpdate)].concat(_toConsumableArray(this.updateArgs)));
        },
        deep: true
      }
    },
    mounted: function mounted() {
      var HC = this.highcharts || Highcharts; // Check wheather the chart configuration object is passed, as well as the constructor is valid

      if (this.options && HC[this.constructorType]) {
        this.chart = HC[this.constructorType](this.$refs.chart, Object(__WEBPACK_IMPORTED_MODULE_0__utils_tools__["a" /* copyObject */])(this.options, true), // Always pass the deep copy when generating a chart. #80
        this.callback ? this.callback : null);
      } else {
        !this.options ? console.warn('The "options" parameter was not passed.') : console.warn("'".concat(this.constructorType, "' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported."));
      }
    },
    beforeDestroy: function beforeDestroy() {
      // Destroy chart if exists
      if (this.chart) {
        this.chart.destroy();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (generateVueComponent);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copyObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);


function doCopy(copy, original, copyArray) {
  // Callback function to iterate on array or object elements
  function callback(value, key) {
    // Copy the contents of objects
    if (__WEBPACK_IMPORTED_MODULE_0_highcharts___default.a.isObject(value, !copyArray) && !__WEBPACK_IMPORTED_MODULE_0_highcharts___default.a.isClass(value) && !__WEBPACK_IMPORTED_MODULE_0_highcharts___default.a.isDOMElement(value)) {
      copy[key] = doCopy(copy[key] || __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a.isArray(value) ? [] : {}, value, copyArray);
    } else {
      // Primitives are copied over directly
      copy[key] = original[key];
    }
  }

  if (__WEBPACK_IMPORTED_MODULE_0_highcharts___default.a.isArray(original)) {
    original.forEach(callback);
  } else {
    __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a.objectEach(original, callback);
  }

  return copy;
}

var copyObject = function copyObject(obj, copyArray) {
  return doCopy({}, obj, copyArray);
};



/***/ })
/******/ ]);
});