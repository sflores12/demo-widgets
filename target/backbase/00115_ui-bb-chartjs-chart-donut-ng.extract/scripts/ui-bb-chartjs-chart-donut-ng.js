(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else if(typeof define === 'function' && define.amd)
		define("ui-bb-chartjs-chart-donut-ng", ["vendor-bb-angular", "vendor-bb-chartjs"], factory);
	else if(typeof exports === 'object')
		exports["ui-bb-chartjs-chart-donut-ng"] = factory(require("vendor-bb-angular"), require("vendor-bb-chartjs"));
	else
		root["ui-bb-chartjs-chart-donut-ng"] = factory(root["vendor-bb-angular"], root["vendor-bb-chartjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_36__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(39);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(2);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _vendorBbChartjs = __webpack_require__(36);
	
	var _vendorBbChartjs2 = _interopRequireDefault(_vendorBbChartjs);
	
	var _component = __webpack_require__(40);
	
	var _component2 = _interopRequireDefault(_component);
	
	__webpack_require__(43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @description The angular module name
	 * @name default
	 * @type {string}
	 */
	/**
	 * @module ui-bb-chartjs-chart-donut-ng
	 *
	 * @example
	 * // In an extension:
	 * // file: scripts/index.js
	 * import uiBbChartjsChartDonut from 'ui-bb-chartjs-chart-donut-ng';
	 *
	 * export const dependencyKeys = [
	 *   uiBbChartjsChartDonut,
	 * ];
	 *
	 * // file: templates/template.ng.html
	 * <ui-bb-chartjs-chart-donut
	 *   data-series="$ctrl.series"
	 *   data-title="$ctrl.title"
	 *   data-cutout-percentage="30"
	 *   data-legend="ext.helpers.customizeLegend"
	 *   data-options="ext.helpers.chartOptions"
	 *   data-click-getter="ext.helpers.getClickHandler($ctrl)">
	 *     <!-- Optional content that can be inserted over the canvas -->
	 *     <div class="absolute-center">Total amount: 100</div>
	 * <ui-bb-chartjs-chart-donut
	 */
	
	exports.default = _vendorBbAngular2.default.module('ui-bb-chartjs-chart-donut-ng', []).value('chartjs', _vendorBbChartjs2.default).component('uiBbChartjsChartDonutNg', _component2.default).name;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(41);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name uiBbChartjsChartDonutComponent
	 * @type {object}
	 * @description
	 * Chart.js Donut chart component object
	 *
	 * @property {string} title Title of the chart
	 * @property {ChartjsDonutSeries} series Object used to draw Chartjs donut chart
	 * @property {ChartjsLegend} legend Object used to define chart's legend behavior and look
	 * @property {number} cutoutPercentage The percentage of the chart that is cut out of the middle.
	 * Example: 50 - for doughnut, 0 - for pie
	 * @property {function} tooltip Method for drawing custom tooltip. If this property is not
	 * used, default tooltip will be rendered. Otherwise, this method will be provided with:
	 * - tooltip: Chart.js tooltip object
	 * - element: tooltip DOM element
	 * - data: series used to draw chart
	 * - chart: Chart.js chart object
	 * Custom method needs at least to fill in internal HTML of custom tooltip
	 * by injecting the content into element provided
	 * - Example:
	 * customTooltip: (tooltip, element, data, chart) =>
	 * Object.assign(element, { innerHTML: '<div>Custom content</div>' }),
	 * @property {ChartjsPlugin[]} plugins
	 * @property {ChartjsSettings} options Object that overrides any property of
	 * Chart.js default settings object
	 * @property {ChartjsEvents} clickGetter Function, which returns click handler
	 * for the Donut chart.
	 */
	var component = {
	  controller: ['$element', '$scope', 'chartjs', _controller2.default],
	  bindings: {
	    title: '@',
	    series: '<',
	    legend: '<',
	    cutoutPercentage: '<',
	    tooltip: '<',
	    plugins: '<',
	    options: '<',
	    clickGetter: '&'
	  },
	  transclude: true,
	  template: '\n    <div class="donut-chart-container">\n      <ng-transclude></ng-transclude>\n      <div class="donut-chart-canvas-container">\n        <canvas></canvas>\n      </div>\n    </div>'
	};
	
	exports.default = component;
	
	/**
	 * Series object used to draw Chartjs donut chart. Compatible with BBSeries generated
	 * by model modules.
	 * @typedef {object} ChartjsDonutSeries
	 * @property {string[]} labels Array of chart labels
	 * @property {ChartjsDonutDataset[]} datasets Array of datasets
	 */
	
	/**
	 * Dataset object for donut chart as defined by Chart.js library.
	 * Compatible with BBDataset object used in BBSeries.
	 * It is required for it to contain data as array of values.
	 * More info about additional (optional) properties can be found at
	 * {@link http://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties}
	 * @typedef {object} ChartjsDonutDataset
	 * @property {number[]} data Array of data points to be drawn for each label
	 */
	
	/**
	 * Legend object as defined in Chart.js library.
	 * More info
	 * {@link http://www.chartjs.org/docs/latest/configuration/legend.html#configuration-options}
	 * @typedef {object} ChartjsLegend
	 */
	
	/**
	 * Plugin object as defined in Chart.js library. It should define at least one hook from
	 * {@link http://www.chartjs.org/docs/latest/developers/plugins.html#plugin-core-api}
	 * @typedef {object} ChartjsPlugin
	 */
	
	/**
	 * Settings object with options available for Donut chart.
	 * More info {@link http://www.chartjs.org/docs/latest/charts/doughnut.html}
	 * @typedef {object} ChartjsSettings
	 */
	
	/**
	 * Function, which returns click handler for the Donut chart.
	 * More info {@link http://www.chartjs.org/docs/latest/general/interactions/events.html}
	 * @typedef {object} ChartjsEvents
	 */

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(42);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var uiBbChartjsChartDonutController = function uiBbChartjsChartDonutController($element, $scope, Chartjs) {
	  var $ctrl = this;
	  var element = $element.find('canvas')[0];
	  var HAS_CUSTOM_TOOLTIP = typeof $ctrl.tooltip === 'function';
	
	  var chart = void 0;
	
	  /**
	   * @name drawTooltip
	   * @type {function}
	   * @inner
	   * @description
	   * In case there is custom tooltip callback, this method will prepare
	   * DOM element and provide reference to it, additionally with all
	   * series data and chart instance
	   *
	   * @param {object} tooltip Chart.js tooltip object
	   */
	  var drawTooltip = function drawTooltip(tooltip) {
	    // retrieve existing tooltip DOM element or create a new one
	    var tooltipDataAttr = 'data-chartjs-tooltip';
	    var tooltipSelector = 'div[' + tooltipDataAttr + ']';
	    var tooltipEl = $element[0].querySelector(tooltipSelector);
	    if (!tooltipEl) {
	      tooltipEl = document.createElement('div');
	      tooltipEl.setAttribute(tooltipDataAttr, '');
	      // prevent flickering when hovering above tooltip that covers part of the chart
	      tooltipEl.setAttribute('onmouseenter', 'event.target.style.display = \'inherit\'');
	      tooltipEl.setAttribute('onmouseleave', 'event.target.style.display = \'none\'');
	      chart.canvas.parentNode.appendChild(tooltipEl);
	    }
	
	    // if tooltip should not be visible, hide it and stop execution
	    if (tooltip.opacity === 0) {
	      tooltipEl.style.display = 'none';
	      return;
	    }
	
	    tooltipEl.style.display = 'inherit';
	    // execute custom tooltip builder
	    $ctrl.tooltip(tooltip, tooltipEl, $ctrl.series, chart);
	  };
	
	  /**
	   * @name getChartOptions
	   * @type {function}
	   * @inner
	   * @description
	   * Builds JSON structure needed for chart rendering
	   */
	  var getChartOptions = function getChartOptions() {
	    // legend is displayed by default, so if there is no legend data
	    // create an object that forces it to be hidden
	    var legend = $ctrl.legend ? Object.assign($ctrl.legend, { display: true }) : { display: false };
	
	    var options = {
	      title: {
	        display: !!$ctrl.title,
	        text: $ctrl.title
	      },
	      legend: legend,
	      cutoutPercentage: $ctrl.cutoutPercentage,
	      tooltips: {
	        enabled: !HAS_CUSTOM_TOOLTIP,
	        custom: HAS_CUSTOM_TOOLTIP ? function (tooltip) {
	          return drawTooltip(tooltip);
	        } : null
	      }
	    };
	    _utils2.default.removeEmptyProperties(options);
	    return options;
	  };
	
	  /**
	   * @name createChart
	   * @type {function}
	   * @inner
	   * @description
	   * Creates new chart instance
	   */
	  var createChart = function createChart() {
	    // generate chart with all the options combined
	    chart = Object.assign(new Chartjs(element, {
	      type: 'doughnut',
	      options: angular.merge(getChartOptions(), $ctrl.options, {
	        onClick: $ctrl.clickGetter()
	      }),
	      data: $ctrl.series,
	      plugins: $ctrl.plugins
	    }), { $scope: $scope });
	  };
	
	  /**
	   * @name updateChart
	   * @type {function}
	   * @inner
	   * @description
	   * Redraws chart with the new data
	   */
	  var updateChart = function updateChart() {
	    chart.data = $ctrl.series;
	    chart.update();
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name $onInit
	   * @type {function}
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    return createChart();
	  };
	
	  /**
	   * AngularJS Lifecycle hook used to update chart
	   *
	   * @name $onChanges
	   * @type {function}
	   * @returns {void}
	   */
	  var $onChanges = function $onChanges() {
	    // Skip update before init
	    if (chart) {
	      updateChart();
	    }
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    $onChanges: $onChanges
	  });
	}; /* global angular, document */
	
	/**
	 * @name uiBbChartjsChartDonutController
	 * @ngkey uiBbChartjsChartDonutController
	 * @type {function}
	 *
	 * @description
	 * Chart.js donut chart controller
	 */
	
	exports.default = uiBbChartjsChartDonutController;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* global angular */
	// TODO: move to common library
	/**
	 * @name removeEmptyProperty
	 * @type {function}
	 * @inner
	 * @description
	 * Returns a copy of the scanned object without selected property
	 * if the property is null or undefined
	 *
	 * @param {string} prop Name of the property
	 * @param {object} obj Object to be scanned
	 * @returns {object} Cleared object
	 */
	var removeEmptyProperty = function removeEmptyProperty(prop, obj) {
	  var target = obj;
	  var item = target[prop];
	  if (item === null || item === undefined) {
	    delete target[prop];
	  } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	    angular.forEach(item, function (value, key) {
	      return removeEmptyProperty(key, item);
	    });
	  }
	
	  return target;
	};
	
	/**
	 * @name removeEmptyProperties
	 * @type {function}
	 * @inner
	 * @description
	 * Removes all null or undefined properties from an object
	 *
	 * @param {object} obj Object to be scanned
	 */
	var removeEmptyProperties = function removeEmptyProperties(obj) {
	  return angular.forEach(obj, function (value, key) {
	    return removeEmptyProperty(key, obj);
	  });
	};
	
	exports.default = {
	  removeEmptyProperty: removeEmptyProperty,
	  removeEmptyProperties: removeEmptyProperties
	};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "ui-bb-chartjs-chart-donut-ng {\n  display: block;\n}\n\nui-bb-chartjs-chart-donut-ng .donut-chart-container {\n  position: relative;\n}", ""]);
	
	// exports


/***/ })

/******/ })
});
;
//# sourceMappingURL=ui-bb-chartjs-chart-donut-ng.js.map