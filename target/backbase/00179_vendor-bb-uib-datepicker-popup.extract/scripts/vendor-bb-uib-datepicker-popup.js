(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-position"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-datepicker-popup", ["vendor-bb-angular", "vendor-bb-uib-datepicker", "vendor-bb-uib-position"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-datepicker-popup"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-datepicker"), require("vendor-bb-uib-position"));
	else
		root["vendor-bb-uib-datepicker-popup"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-datepicker"], root["vendor-bb-uib-position"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__) {
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(33);__webpack_require__(34);
	module.exports = __webpack_require__(35);
	__webpack_require__(38);

/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(33);__webpack_require__(34);
	__webpack_require__(36);
	__webpack_require__(37);
	
	var MODULE_NAME = 'vendor-bb-uib-datepicker-popup';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.datepickerPopup', 'uib/template/datepickerPopup/popup.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 36:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/datepickerPopup/popup.html", "<div>\n" + "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" + "    <li ng-transclude></li>\n" + "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" + "      <span class=\"btn-group pull-left\">\n" + "        <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" + "        <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" + "      </span>\n" + "      <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" + "    </li>\n" + "  </ul>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 37:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position']).value('$datepickerPopupLiteralWarning', true).constant('uibDatepickerPopupConfig', {
	  altInputFormats: [],
	  appendToBody: false,
	  clearText: 'Clear',
	  closeOnDateSelection: true,
	  closeText: 'Done',
	  currentText: 'Today',
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
	  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  onOpenFocus: true,
	  showButtonBar: true,
	  placement: 'auto bottom-left'
	}).controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning', function ($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
	  var cache = {},
	      isHtml5DateInput = false;
	  var dateFormat,
	      closeOnDateSelection,
	      appendToBody,
	      onOpenFocus,
	      datepickerPopupTemplateUrl,
	      datepickerTemplateUrl,
	      popupEl,
	      datepickerEl,
	      scrollParentEl,
	      ngModel,
	      ngModelOptions,
	      $popup,
	      altInputFormats,
	      watchListeners = [],
	      timezone;
	
	  this.init = function (_ngModel_) {
	    ngModel = _ngModel_;
	    ngModelOptions = _ngModel_.$options;
	    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ? $scope.$parent.$eval($attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection;
	    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ? $scope.$parent.$eval($attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
	    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ? $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
	    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ? $attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl;
	    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ? $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
	    altInputFormats = angular.isDefined($attrs.altInputFormats) ? $scope.$parent.$eval($attrs.altInputFormats) : datepickerPopupConfig.altInputFormats;
	
	    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ? $scope.$parent.$eval($attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
	
	    if (datepickerPopupConfig.html5Types[$attrs.type]) {
	      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
	      isHtml5DateInput = true;
	    } else {
	      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
	      $attrs.$observe('uibDatepickerPopup', function (value, oldValue) {
	        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	        // Invalidate the $modelValue to ensure that formatters re-run
	        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	        if (newDateFormat !== dateFormat) {
	          dateFormat = newDateFormat;
	          ngModel.$modelValue = null;
	
	          if (!dateFormat) {
	            throw new Error('uibDatepickerPopup must have a date format specified.');
	          }
	        }
	      });
	    }
	
	    if (!dateFormat) {
	      throw new Error('uibDatepickerPopup must have a date format specified.');
	    }
	
	    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
	      throw new Error('HTML5 date input types do not support custom formats.');
	    }
	
	    // popup element used to display calendar
	    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
	    if (ngModelOptions) {
	      timezone = ngModelOptions.timezone;
	      $scope.ngModelOptions = angular.copy(ngModelOptions);
	      $scope.ngModelOptions.timezone = null;
	      if ($scope.ngModelOptions.updateOnDefault === true) {
	        $scope.ngModelOptions.updateOn = $scope.ngModelOptions.updateOn ? $scope.ngModelOptions.updateOn + ' default' : 'default';
	      }
	
	      popupEl.attr('ng-model-options', 'ngModelOptions');
	    } else {
	      timezone = null;
	    }
	
	    popupEl.attr({
	      'ng-model': 'date',
	      'ng-change': 'dateSelection(date)',
	      'template-url': datepickerPopupTemplateUrl
	    });
	
	    // datepicker element
	    datepickerEl = angular.element(popupEl.children()[0]);
	    datepickerEl.attr('template-url', datepickerTemplateUrl);
	
	    if (!$scope.datepickerOptions) {
	      $scope.datepickerOptions = {};
	    }
	
	    if (isHtml5DateInput) {
	      if ($attrs.type === 'month') {
	        $scope.datepickerOptions.datepickerMode = 'month';
	        $scope.datepickerOptions.minMode = 'month';
	      }
	    }
	
	    datepickerEl.attr('datepicker-options', 'datepickerOptions');
	
	    if (!isHtml5DateInput) {
	      // Internal API to maintain the correct ng-invalid-[key] class
	      ngModel.$$parserName = 'date';
	      ngModel.$validators.date = validator;
	      ngModel.$parsers.unshift(parseDate);
	      ngModel.$formatters.push(function (value) {
	        if (ngModel.$isEmpty(value)) {
	          $scope.date = value;
	          return value;
	        }
	
	        if (angular.isNumber(value)) {
	          value = new Date(value);
	        }
	
	        $scope.date = dateParser.fromTimezone(value, timezone);
	
	        return dateParser.filter($scope.date, dateFormat);
	      });
	    } else {
	      ngModel.$formatters.push(function (value) {
	        $scope.date = dateParser.fromTimezone(value, timezone);
	        return value;
	      });
	    }
	
	    // Detect changes in the view from the text box
	    ngModel.$viewChangeListeners.push(function () {
	      $scope.date = parseDateString(ngModel.$viewValue);
	    });
	
	    $element.on('keydown', inputKeydownBind);
	
	    $popup = $compile(popupEl)($scope);
	    // Prevent jQuery cache memory leak (template is now redundant after linking)
	    popupEl.remove();
	
	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else {
	      $element.after($popup);
	    }
	
	    $scope.$on('$destroy', function () {
	      if ($scope.isOpen === true) {
	        if (!$rootScope.$$phase) {
	          $scope.$apply(function () {
	            $scope.isOpen = false;
	          });
	        }
	      }
	
	      $popup.remove();
	      $element.off('keydown', inputKeydownBind);
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);
	
	      //Clear all watch listeners on destroy
	      while (watchListeners.length) {
	        watchListeners.shift()();
	      }
	    });
	  };
	
	  $scope.getText = function (key) {
	    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	  };
	
	  $scope.isDisabled = function (date) {
	    if (date === 'today') {
	      date = dateParser.fromTimezone(new Date(), timezone);
	    }
	
	    var dates = {};
	    angular.forEach(['minDate', 'maxDate'], function (key) {
	      if (!$scope.datepickerOptions[key]) {
	        dates[key] = null;
	      } else if (angular.isDate($scope.datepickerOptions[key])) {
	        dates[key] = dateParser.fromTimezone(new Date($scope.datepickerOptions[key]), timezone);
	      } else {
	        if ($datepickerPopupLiteralWarning) {
	          $log.warn('Literal date support has been deprecated, please switch to date object usage');
	        }
	
	        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
	      }
	    });
	
	    return $scope.datepickerOptions && dates.minDate && $scope.compare(date, dates.minDate) < 0 || dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
	  };
	
	  $scope.compare = function (date1, date2) {
	    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	  };
	
	  // Inner change
	  $scope.dateSelection = function (dt) {
	    if (angular.isDefined(dt)) {
	      $scope.date = dt;
	    }
	    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	    $element.val(date);
	    ngModel.$setViewValue(date);
	
	    if (closeOnDateSelection) {
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };
	
	  $scope.keydown = function (evt) {
	    if (evt.which === 27) {
	      evt.stopPropagation();
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };
	
	  $scope.select = function (date, evt) {
	    evt.stopPropagation();
	
	    if (date === 'today') {
	      var today = new Date();
	      if (angular.isDate($scope.date)) {
	        date = new Date($scope.date);
	        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	      } else {
	        date = new Date(today.setHours(0, 0, 0, 0));
	      }
	    }
	    $scope.dateSelection(date);
	  };
	
	  $scope.close = function (evt) {
	    evt.stopPropagation();
	
	    $scope.isOpen = false;
	    $element[0].focus();
	  };
	
	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if ($attrs.ngDisabled) {
	    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function (disabled) {
	      $scope.disabled = disabled;
	    }));
	  }
	
	  $scope.$watch('isOpen', function (value) {
	    if (value) {
	      if (!$scope.disabled) {
	        $timeout(function () {
	          positionPopup();
	
	          if (onOpenFocus) {
	            $scope.$broadcast('uib:datepicker.focus');
	          }
	
	          $document.on('click', documentClickBind);
	
	          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	          if (appendToBody || $position.parsePlacement(placement)[2]) {
	            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
	            if (scrollParentEl) {
	              scrollParentEl.on('scroll', positionPopup);
	            }
	          } else {
	            scrollParentEl = null;
	          }
	
	          angular.element($window).on('resize', positionPopup);
	        }, 0, false);
	      } else {
	        $scope.isOpen = false;
	      }
	    } else {
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);
	    }
	  });
	
	  function cameltoDash(string) {
	    return string.replace(/([A-Z])/g, function ($1) {
	      return '-' + $1.toLowerCase();
	    });
	  }
	
	  function parseDateString(viewValue) {
	    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
	    if (isNaN(date)) {
	      for (var i = 0; i < altInputFormats.length; i++) {
	        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
	        if (!isNaN(date)) {
	          return date;
	        }
	      }
	    }
	    return date;
	  }
	
	  function parseDate(viewValue) {
	    if (angular.isNumber(viewValue)) {
	      // presumably timestamp to date object
	      viewValue = new Date(viewValue);
	    }
	
	    if (!viewValue) {
	      return null;
	    }
	
	    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	      return viewValue;
	    }
	
	    if (angular.isString(viewValue)) {
	      var date = parseDateString(viewValue);
	      if (!isNaN(date)) {
	        return dateParser.toTimezone(date, timezone);
	      }
	    }
	
	    return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
	  }
	
	  function validator(modelValue, viewValue) {
	    var value = modelValue || viewValue;
	
	    if (!$attrs.ngRequired && !value) {
	      return true;
	    }
	
	    if (angular.isNumber(value)) {
	      value = new Date(value);
	    }
	
	    if (!value) {
	      return true;
	    }
	
	    if (angular.isDate(value) && !isNaN(value)) {
	      return true;
	    }
	
	    if (angular.isString(value)) {
	      return !isNaN(parseDateString(viewValue));
	    }
	
	    return false;
	  }
	
	  function documentClickBind(event) {
	    if (!$scope.isOpen && $scope.disabled) {
	      return;
	    }
	
	    var popup = $popup[0];
	    var dpContainsTarget = $element[0].contains(event.target);
	    // The popup node may not be an element node
	    // In some browsers (IE) only element nodes have the 'contains' function
	    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
	    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
	      $scope.$apply(function () {
	        $scope.isOpen = false;
	      });
	    }
	  }
	
	  function inputKeydownBind(evt) {
	    if (evt.which === 27 && $scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function () {
	        $scope.isOpen = false;
	      });
	      $element[0].focus();
	    } else if (evt.which === 40 && !$scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function () {
	        $scope.isOpen = true;
	      });
	    }
	  }
	
	  function positionPopup() {
	    if ($scope.isOpen) {
	      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
	      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	      var position = $position.positionElements($element, dpElement, placement, appendToBody);
	      dpElement.css({ top: position.top + 'px', left: position.left + 'px' });
	      if (dpElement.hasClass('uib-position-measure')) {
	        dpElement.removeClass('uib-position-measure');
	      }
	    }
	  }
	
	  $scope.$on('uib:datepicker.mode', function () {
	    $timeout(positionPopup, 0, false);
	  });
	}]).directive('uibDatepickerPopup', function () {
	  return {
	    require: ['ngModel', 'uibDatepickerPopup'],
	    controller: 'UibDatepickerPopupController',
	    scope: {
	      datepickerOptions: '=?',
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@'
	    },
	    link: function link(scope, element, attrs, ctrls) {
	      var ngModel = ctrls[0],
	          ctrl = ctrls[1];
	
	      ctrl.init(ngModel);
	    }
	  };
	}).directive('uibDatepickerPopupWrap', function () {
	  return {
	    replace: true,
	    transclude: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
	    }
	  };
	});

/***/ },

/***/ 38:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.datepickerPopup').run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>');angular.$$uibDatepickerpopupCss = true;
	});

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-datepicker-popup.js.map