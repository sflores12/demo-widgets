(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-dateparser"), require("vendor-bb-uib-is-class"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-datepicker", ["vendor-bb-angular", "vendor-bb-uib-dateparser", "vendor-bb-uib-is-class"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-datepicker"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-dateparser"), require("vendor-bb-uib-is-class"));
	else
		root["vendor-bb-uib-datepicker"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-dateparser"], root["vendor-bb-uib-is-class"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__) {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	module.exports = __webpack_require__(23);
	__webpack_require__(31);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(24);__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	
	var MODULE_NAME = 'vendor-bb-uib-datepicker';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.datepicker', 'uib/template/datepicker/datepicker.html', 'uib/template/datepicker/day.html', 'uib/template/datepicker/month.html', 'uib/template/datepicker/year.html']);
	
	module.exports = MODULE_NAME;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/datepicker/datepicker.html", "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" + "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" + "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" + "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" + "</div>\n" + "");
	}]);

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/datepicker/day.html", "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "    <tr>\n" + "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" + "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" + "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" + "        id=\"{{::dt.uid}}\"\n" + "        ng-class=\"::dt.customClass\">\n" + "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" + "          uib-is-class=\"\n" + "            'btn-info' for selectedDt,\n" + "            'active' for activeDt\n" + "            on dt\"\n" + "          ng-click=\"select(dt.date)\"\n" + "          ng-disabled=\"::dt.disabled\"\n" + "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
	}]);

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/datepicker/month.html", "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" + "        id=\"{{::dt.uid}}\"\n" + "        ng-class=\"::dt.customClass\">\n" + "        <button type=\"button\" class=\"btn btn-default\"\n" + "          uib-is-class=\"\n" + "            'btn-info' for selectedDt,\n" + "            'active' for activeDt\n" + "            on dt\"\n" + "          ng-click=\"select(dt.date)\"\n" + "          ng-disabled=\"::dt.disabled\"\n" + "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
	}]);

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/datepicker/year.html", "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" + "        id=\"{{::dt.uid}}\"\n" + "        ng-class=\"::dt.customClass\">\n" + "        <button type=\"button\" class=\"btn btn-default\"\n" + "          uib-is-class=\"\n" + "            'btn-info' for selectedDt,\n" + "            'active' for activeDt\n" + "            on dt\"\n" + "          ng-click=\"select(dt.date)\"\n" + "          ng-disabled=\"::dt.disabled\"\n" + "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
	}]);

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass']).value('$datepickerSuppressError', false).value('$datepickerLiteralWarning', true).constant('uibDatepickerConfig', {
	  datepickerMode: 'day',
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  maxDate: null,
	  maxMode: 'year',
	  minDate: null,
	  minMode: 'day',
	  ngModelOptions: {},
	  shortcutPropagation: false,
	  showWeeks: true,
	  yearColumns: 5,
	  yearRows: 4
	}).controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser', function ($scope, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop },
	      // nullModelCtrl;
	  ngModelOptions = {},
	      watchListeners = [],
	      optionsUsed = !!$attrs.datepickerOptions;
	
	  if (!$scope.datepickerOptions) {
	    $scope.datepickerOptions = {};
	  }
	
	  // Modes chain
	  this.modes = ['day', 'month', 'year'];
	
	  ['customClass', 'dateDisabled', 'datepickerMode', 'formatDay', 'formatDayHeader', 'formatDayTitle', 'formatMonth', 'formatMonthTitle', 'formatYear', 'maxDate', 'maxMode', 'minDate', 'minMode', 'showWeeks', 'shortcutPropagation', 'startingDay', 'yearColumns', 'yearRows'].forEach(function (key) {
	    switch (key) {
	      case 'customClass':
	      case 'dateDisabled':
	        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
	        break;
	      case 'datepickerMode':
	        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ? $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
	        break;
	      case 'formatDay':
	      case 'formatDayHeader':
	      case 'formatDayTitle':
	      case 'formatMonth':
	      case 'formatMonthTitle':
	      case 'formatYear':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ? $interpolate($scope.datepickerOptions[key])($scope.$parent) : datepickerConfig[key];
	        break;
	      case 'showWeeks':
	      case 'shortcutPropagation':
	      case 'yearColumns':
	      case 'yearRows':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ? $scope.datepickerOptions[key] : datepickerConfig[key];
	        break;
	      case 'startingDay':
	        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
	          self.startingDay = $scope.datepickerOptions.startingDay;
	        } else if (angular.isNumber(datepickerConfig.startingDay)) {
	          self.startingDay = datepickerConfig.startingDay;
	        } else {
	          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
	        }
	
	        break;
	      case 'maxDate':
	      case 'minDate':
	        $scope.$watch('datepickerOptions.' + key, function (value) {
	          if (value) {
	            if (angular.isDate(value)) {
	              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
	            } else {
	              if ($datepickerLiteralWarning) {
	                $log.warn('Literal date support has been deprecated, please switch to date object usage');
	              }
	
	              self[key] = new Date(dateFilter(value, 'medium'));
	            }
	          } else {
	            self[key] = datepickerConfig[key] ? dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) : null;
	          }
	
	          self.refreshView();
	        });
	
	        break;
	      case 'maxMode':
	      case 'minMode':
	        if ($scope.datepickerOptions[key]) {
	          $scope.$watch(function () {
	            return $scope.datepickerOptions[key];
	          }, function (value) {
	            self[key] = $scope[key] = angular.isDefined(value) ? value : datepickerOptions[key];
	            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) || key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
	              $scope.datepickerMode = self[key];
	              $scope.datepickerOptions.datepickerMode = self[key];
	            }
	          });
	        } else {
	          self[key] = $scope[key] = datepickerConfig[key] || null;
	        }
	
	        break;
	    }
	  });
	
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
	
	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if (angular.isDefined($attrs.ngDisabled)) {
	    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function (disabled) {
	      $scope.disabled = disabled;
	      self.refreshView();
	    }));
	  }
	
	  $scope.isActive = function (dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };
	
	  this.init = function (ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelOptions = ngModelCtrl_.$options || datepickerConfig.ngModelOptions;
	    if ($scope.datepickerOptions.initDate) {
	      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.timezone) || new Date();
	      $scope.$watch('datepickerOptions.initDate', function (initDate) {
	        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
	          self.refreshView();
	        }
	      });
	    } else {
	      self.activeDate = new Date();
	    }
	
	    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
	    this.activeDate = !isNaN(date) ? dateParser.fromTimezone(date, ngModelOptions.timezone) : dateParser.fromTimezone(new Date(), ngModelOptions.timezone);
	
	    ngModelCtrl.$render = function () {
	      self.render();
	    };
	  };
	
	  this.render = function () {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);
	
	      if (isValid) {
	        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object');
	      }
	    }
	    this.refreshView();
	  };
	
	  this.refreshView = function () {
	    if (this.element) {
	      $scope.selectedDt = null;
	      this._refreshView();
	      if ($scope.activeDt) {
	        $scope.activeDateId = $scope.activeDt.uid;
	      }
	
	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      date = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      ngModelCtrl.$setValidity('dateDisabled', !date || this.element && !this.isDisabled(date));
	    }
	  };
	
	  this.createDateObject = function (date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    model = dateParser.fromTimezone(model, ngModelOptions.timezone);
	    var today = new Date();
	    today = dateParser.fromTimezone(today, ngModelOptions.timezone);
	    var time = this.compare(date, today);
	    var dt = {
	      date: date,
	      label: dateParser.filter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      past: time < 0,
	      current: time === 0,
	      future: time > 0,
	      customClass: this.customClass(date) || null
	    };
	
	    if (model && this.compare(date, model) === 0) {
	      $scope.selectedDt = dt;
	    }
	
	    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
	      $scope.activeDt = dt;
	    }
	
	    return dt;
	  };
	
	  this.isDisabled = function (date) {
	    return $scope.disabled || this.minDate && this.compare(date, this.minDate) < 0 || this.maxDate && this.compare(date, this.maxDate) > 0 || $scope.dateDisabled && $scope.dateDisabled({ date: date, mode: $scope.datepickerMode });
	  };
	
	  this.customClass = function (date) {
	    return $scope.customClass({ date: date, mode: $scope.datepickerMode });
	  };
	
	  // Split array into smaller arrays
	  this.split = function (arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };
	
	  $scope.select = function (date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);
	
	      $scope.$emit('uib:datepicker.mode');
	    }
	
	    $scope.$broadcast('uib:datepicker.focus');
	  };
	
	  $scope.move = function (direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };
	
	  $scope.toggleMode = function (direction) {
	    direction = direction || 1;
	
	    if ($scope.datepickerMode === self.maxMode && direction === 1 || $scope.datepickerMode === self.minMode && direction === -1) {
	      return;
	    }
	
	    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);
	
	    $scope.$emit('uib:datepicker.mode');
	  };
	
	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };
	
	  var focusElement = function focusElement() {
	    self.element[0].focus();
	  };
	
	  // Listen for focus requests from popup directive
	  $scope.$on('uib:datepicker.focus', focusElement);
	
	  $scope.keydown = function (evt) {
	    var key = $scope.keys[evt.which];
	
	    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
	      return;
	    }
	
	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }
	
	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	
	  $scope.$on('$destroy', function () {
	    //Clear all watch listeners on destroy
	    while (watchListeners.length) {
	      watchListeners.shift()();
	    }
	  });
	
	  function setMode(mode) {
	    $scope.datepickerMode = mode;
	    $scope.datepickerOptions.datepickerMode = mode;
	  }
	}]).controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function (scope, $element, dateFilter) {
	  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	  this.step = { months: 1 };
	  this.element = $element;
	  function getDaysInMonth(year, month) {
	    return month === 1 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
	  }
	
	  this.init = function (ctrl) {
	    angular.extend(ctrl, this);
	    scope.showWeeks = ctrl.showWeeks;
	    ctrl.refreshView();
	  };
	
	  this.getDates = function (startDate, n) {
	    var dates = new Array(n),
	        current = new Date(startDate),
	        i = 0,
	        date;
	    while (i < n) {
	      date = new Date(current);
	      dates[i++] = date;
	      current.setDate(current.getDate() + 1);
	    }
	    return dates;
	  };
	
	  this._refreshView = function () {
	    var year = this.activeDate.getFullYear(),
	        month = this.activeDate.getMonth(),
	        firstDayOfMonth = new Date(this.activeDate);
	
	    firstDayOfMonth.setFullYear(year, month, 1);
	
	    var difference = this.startingDay - firstDayOfMonth.getDay(),
	        numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference,
	        firstDate = new Date(firstDayOfMonth);
	
	    if (numDisplayedFromPreviousMonth > 0) {
	      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	    }
	
	    // 42 is the number of days on a six-week calendar
	    var days = this.getDates(firstDate, 42);
	    for (var i = 0; i < 42; i++) {
	      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
	        secondary: days[i].getMonth() !== month,
	        uid: scope.uniqueId + '-' + i
	      });
	    }
	
	    scope.labels = new Array(7);
	    for (var j = 0; j < 7; j++) {
	      scope.labels[j] = {
	        abbr: dateFilter(days[j].date, this.formatDayHeader),
	        full: dateFilter(days[j].date, 'EEEE')
	      };
	    }
	
	    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
	    scope.rows = this.split(days, 7);
	
	    if (scope.showWeeks) {
	      scope.weekNumbers = [];
	      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
	          numWeeks = scope.rows.length;
	      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	        scope.weekNumbers.push(getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	      }
	    }
	  };
	
	  this.compare = function (date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };
	
	  function getISO8601WeekNumber(date) {
	    var checkDate = new Date(date);
	    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	    var time = checkDate.getTime();
	    checkDate.setMonth(0); // Compare with Jan 1
	    checkDate.setDate(1);
	    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	  }
	
	  this.handleKeyDown = function (key, evt) {
	    var date = this.activeDate.getDate();
	
	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 7;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 7;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var month = this.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
	      this.activeDate.setMonth(month, 1);
	      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
	    } else if (key === 'home') {
	      date = 1;
	    } else if (key === 'end') {
	      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
	    }
	    this.activeDate.setDate(date);
	  };
	}]).controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function (scope, $element, dateFilter) {
	  this.step = { years: 1 };
	  this.element = $element;
	
	  this.init = function (ctrl) {
	    angular.extend(ctrl, this);
	    ctrl.refreshView();
	  };
	
	  this._refreshView = function () {
	    var months = new Array(12),
	        year = this.activeDate.getFullYear(),
	        date;
	
	    for (var i = 0; i < 12; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(year, i, 1);
	      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }
	
	    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
	    scope.rows = this.split(months, 3);
	  };
	
	  this.compare = function (date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };
	
	  this.handleKeyDown = function (key, evt) {
	    var date = this.activeDate.getMonth();
	
	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 3;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 3;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var year = this.activeDate.getFullYear() + (key === 'pageup' ? -1 : 1);
	      this.activeDate.setFullYear(year);
	    } else if (key === 'home') {
	      date = 0;
	    } else if (key === 'end') {
	      date = 11;
	    }
	    this.activeDate.setMonth(date);
	  };
	}]).controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function (scope, $element, dateFilter) {
	  var columns, range;
	  this.element = $element;
	
	  function getStartingYear(year) {
	    return parseInt((year - 1) / range, 10) * range + 1;
	  }
	
	  this.yearpickerInit = function () {
	    columns = this.yearColumns;
	    range = this.yearRows * columns;
	    this.step = { years: range };
	  };
	
	  this._refreshView = function () {
	    var years = new Array(range),
	        date;
	
	    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(start + i, 0, 1);
	      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }
	
	    scope.title = [years[0].label, years[range - 1].label].join(' - ');
	    scope.rows = this.split(years, columns);
	    scope.columns = columns;
	  };
	
	  this.compare = function (date1, date2) {
	    return date1.getFullYear() - date2.getFullYear();
	  };
	
	  this.handleKeyDown = function (key, evt) {
	    var date = this.activeDate.getFullYear();
	
	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - columns;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + columns;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      date += (key === 'pageup' ? -1 : 1) * range;
	    } else if (key === 'home') {
	      date = getStartingYear(this.activeDate.getFullYear());
	    } else if (key === 'end') {
	      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
	    }
	    this.activeDate.setFullYear(date);
	  };
	}]).directive('uibDatepicker', function () {
	  return {
	    replace: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerOptions: '=?'
	    },
	    require: ['uibDatepicker', '^ngModel'],
	    controller: 'UibDatepickerController',
	    controllerAs: 'datepicker',
	    link: function link(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	          ngModelCtrl = ctrls[1];
	
	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	}).directive('uibDaypicker', function () {
	  return {
	    replace: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/day.html';
	    },
	    require: ['^uibDatepicker', 'uibDaypicker'],
	    controller: 'UibDaypickerController',
	    link: function link(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	          daypickerCtrl = ctrls[1];
	
	      daypickerCtrl.init(datepickerCtrl);
	    }
	  };
	}).directive('uibMonthpicker', function () {
	  return {
	    replace: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/month.html';
	    },
	    require: ['^uibDatepicker', 'uibMonthpicker'],
	    controller: 'UibMonthpickerController',
	    link: function link(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	          monthpickerCtrl = ctrls[1];
	
	      monthpickerCtrl.init(datepickerCtrl);
	    }
	  };
	}).directive('uibYearpicker', function () {
	  return {
	    replace: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/year.html';
	    },
	    require: ['^uibDatepicker', 'uibYearpicker'],
	    controller: 'UibYearpickerController',
	    link: function link(scope, element, attrs, ctrls) {
	      var ctrl = ctrls[0];
	      angular.extend(ctrl, ctrls[1]);
	      ctrl.yearpickerInit();
	
	      ctrl.refreshView();
	    }
	  };
	});

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.datepicker').run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>');angular.$$uibDatepickerCss = true;
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vendor-bb-uib-datepicker.js.map