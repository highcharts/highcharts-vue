(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("highcharts"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["highcharts", "vue"], factory);
	else if(typeof exports === 'object')
		exports["HighchartsVue"] = factory(require("highcharts"), require("vue"));
	else
		root["HighchartsVue"] = factory(root["Highcharts"], root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Chart", function() { return /* binding */ Chart; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ install; });

// EXTERNAL MODULE: external {"root":"Highcharts","commonjs":"highcharts","commonjs2":"highcharts","amd":"highcharts"}
var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_ = __webpack_require__(0);
var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default = /*#__PURE__*/__webpack_require__.n(external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_);

// CONCATENATED MODULE: ./utils/tools.js


function doCopy(copy, original, copyArray) {
  // Callback function to iterate on array or object elements
  function callback(value, key) {
    // Copy the contents of objects
    if (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a.isObject(value, !copyArray) && !external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a.isClass(value) && !external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a.isDOMElement(value)) {
      copy[key] = doCopy(copy[key] || external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a.isArray(value) ? [] : {}, value, copyArray);
    } else {
      // Primitives are copied over directly
      copy[key] = original[key];
    }
  }

  if (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a.isArray(original)) {
    original.forEach(callback);
  } else {
    external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a.objectEach(original, callback);
  }

  return copy;
}

var copyObject = function copyObject(obj, copyArray) {
  return doCopy({}, obj, copyArray);
};


// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./src/component.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function destroyChart() {
  if (this.chart) {
    this.chart.destroy();
  }
}

var component_generateVueComponent = function generateVueComponent(Highcharts, VueVersion) {
  var VUE_MAJOR = VueVersion.split('.')[0];
  var VERSION_DEPENDENT_PROPS = VUE_MAJOR < 3 ? {
    // Fallback options for Vue v2 to keep backward compatibility.
    render: function render(createElement) {
      return createElement('div', {
        ref: 'chart'
      });
    },
    beforeDestroy: destroyChart // The new Vue's 3 syntax.

  } : {
    render: function render() {
      return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["h"])('div', {
        ref: 'chart'
      });
    },
    beforeUnmount: destroyChart
  };
  return _objectSpread({
    template: '<div ref="chart"></div>',
    props: {
      constructorType: {
        type: String,
        "default": 'chart'
      },
      options: {
        type: Object,
        required: true
      },
      callback: Function,
      updateArgs: {
        type: Array,
        "default": function _default() {
          return [true, true];
        }
      },
      highcharts: {
        type: Object
      },
      deepCopyOnUpdate: {
        type: Boolean,
        "default": true
      }
    },
    watch: {
      options: {
        handler: function handler(newValue) {
          var _this$chart;

          (_this$chart = this.chart).update.apply(_this$chart, [copyObject(newValue, this.deepCopyOnUpdate)].concat(_toConsumableArray(this.updateArgs)));
        },
        deep: true
      }
    },
    mounted: function mounted() {
      var HC = this.highcharts || Highcharts; // Check whether the chart configuration object is passed, as well as the constructor is valid.

      if (this.options && HC[this.constructorType]) {
        this.chart = HC[this.constructorType](this.$refs.chart, copyObject(this.options, true), // Always pass the deep copy when generating a chart. #80
        this.callback ? this.callback : null);
      } else {
        !this.options ? console.warn('The "options" parameter was not passed.') : console.warn("'".concat(this.constructorType, "' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported."));
      }
    }
  }, VERSION_DEPENDENT_PROPS);
};

/* harmony default export */ var component = (component_generateVueComponent);
// CONCATENATED MODULE: ./src/index.js



var Chart = component(external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a, external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["version"] || external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.version);
function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.component(options.tagName || 'highcharts', component(options.highcharts || external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default.a, Vue.version));
}

/***/ })
/******/ ]);
});