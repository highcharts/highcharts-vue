(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("highcharts"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["highcharts", "vue"], factory);
	else if(typeof exports === 'object')
		exports["HighchartsVue"] = factory(require("highcharts"), require("vue"));
	else
		root["HighchartsVue"] = factory(root["Highcharts"], root["Vue"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__612__, __WEBPACK_EXTERNAL_MODULE__154__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 612
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__612__;

/***/ },

/***/ 154
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__154__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Chart: () => (/* binding */ Chart),
  "default": () => (/* binding */ src),
  install: () => (/* binding */ install)
});

// EXTERNAL MODULE: external {"root":"Highcharts","commonjs":"highcharts","commonjs2":"highcharts","amd":"highcharts"}
var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_ = __webpack_require__(612);
var external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default = /*#__PURE__*/__webpack_require__.n(external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_);
;// ./src/utils.js

var _copyObject = function copyObject(original, copyArray) {
  // Initialize the copy based on the original's type
  var copy = external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isArray(original) ? [] : {};

  // Callback function to iterate on array or object elements
  function callback(value, key) {
    // Copy the contents of objects
    if (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isObject(value, !copyArray) && !external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isClass(value) && !external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isDOMElement(value)) {
      copy[key] = _copyObject(value, copyArray); // recursive call
    } else {
      // Primitives are copied over directly
      copy[key] = value;
    }
  }
  if (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().isArray(original)) {
    original.forEach(function (item, index) {
      return callback(item, index);
    });
  } else {
    external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default().objectEach(original, callback);
  }
  return copy;
};

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(154);
;// ./src/component.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
;

var generateVueComponent = function generateVueComponent(Highcharts) {
  var _this = this;
  return {
    render: function render() {
      return (0,external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_.h)('div', {
        ref: 'chart'
      });
    },
    beforeUnmount: function beforeUnmount() {
      var _this$chart;
      return _this === null || _this === void 0 || (_this$chart = _this.chart) === null || _this$chart === void 0 ? void 0 : _this$chart.destroy();
    },
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
          if (this.chart) {
            var _this$chart2;
            (_this$chart2 = this.chart).update.apply(_this$chart2, [_copyObject(newValue, this.deepCopyOnUpdate)].concat(_toConsumableArray(this.updateArgs)));
          }
        },
        deep: true
      }
    },
    mounted: function mounted() {
      var HC = this.highcharts || Highcharts;
      if (!HC[this.constructorType]) {
        console.error("'".concat(this.constructorType, "' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported."));
        return;
      }
      if (!this.options) {
        console.error('The "options" parameter was not passed.');
        return;
      }
      this.chart = HC[this.constructorType](this.$refs.chart, _copyObject(this.options, true),
      // Always pass the deep copy when generating a chart. #80
      this.callback ? this.callback : null);
    }
  };
};
/* harmony default export */ const component = (generateVueComponent);
;// ./src/index.js


var Chart = component((external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default()));
function install(app) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  app.component(options.tagName || 'highcharts', component(options.highcharts || (external_root_Highcharts_commonjs_highcharts_commonjs2_highcharts_amd_highcharts_default())));
}
/* harmony default export */ const src = (install);
/******/ 	return __webpack_exports__;
/******/ })()
;
});