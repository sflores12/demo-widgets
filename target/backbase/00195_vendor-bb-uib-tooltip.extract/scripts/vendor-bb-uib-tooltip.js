(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("vendor-bb-uib-position"), require("vendor-bb-uib-stacked-map"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-tooltip", ["vendor-bb-angular", "vendor-bb-uib-position", "vendor-bb-uib-stacked-map"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-tooltip"] = factory(require("vendor-bb-angular"), require("vendor-bb-uib-position"), require("vendor-bb-uib-stacked-map"));
	else
		root["vendor-bb-uib-tooltip"] = factory(root["vendor-bb-angular"], root["vendor-bb-uib-position"], root["vendor-bb-uib-stacked-map"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_48__) {
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

	module.exports = __webpack_require__(91);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(34);
	module.exports = __webpack_require__(92);
	__webpack_require__(97);

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);__webpack_require__(34);__webpack_require__(48);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	
	var MODULE_NAME = 'vendor-bb-uib-tooltip';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.tooltip', 'uib/template/tooltip/tooltip-popup.html', 'uib/template/tooltip/tooltip-html-popup.html', 'uib/template/tooltip/tooltip-template-popup.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 93:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-popup.html", "<div class=\"tooltip\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 94:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html", "<div class=\"tooltip\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 95:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html", "<div class=\"tooltip\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\"\n" + "    uib-tooltip-template-transclude=\"contentExp()\"\n" + "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" + "</div>\n" + "");
	}]);

/***/ },

/***/ 96:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])
	
	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$uibTooltip', function () {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    placementClassPrefix: '',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false
	  };
	
	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'outsideClick': 'outsideClick',
	    'focus': 'blur',
	    'none': ''
	  };
	
	  // The options specified to the provider globally.
	  var globalOptions = {};
	
	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
	  this.options = function (value) {
	    angular.extend(globalOptions, value);
	  };
	
	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };
	
	  /**
	   * This is a helper function for translating camel-case to snake_case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function (letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }
	
	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function ($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
	    var openedTooltips = $$stackedMap.createNew();
	    $document.on('keypress', keypressListener);
	
	    $rootScope.$on('$destroy', function () {
	      $document.off('keypress', keypressListener);
	    });
	
	    function keypressListener(e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    }
	
	    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);
	
	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function (trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }
	
	      var directiveName = snake_case(ttType);
	
	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template = '<div ' + directiveName + '-popup ' + 'uib-title="' + startSym + 'title' + endSym + '" ' + (options.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + startSym + 'content' + endSym + '" ') + 'placement="' + startSym + 'placement' + endSym + '" ' + 'popup-class="' + startSym + 'popupClass' + endSym + '" ' + 'animation="animation" ' + 'is-open="isOpen" ' + 'origin-scope="origScope" ' + 'class="uib-position-measure"' + '>' + '</div>';
	
	      return {
	        compile: function compile(tElem, tAttrs) {
	          var tooltipLinker = $compile(template);
	
	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var showTimeout;
	            var hideTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
	            var observers = [];
	            var lastPlacement;
	
	            var positionTooltip = function positionTooltip() {
	              // check if tooltip exists and is not empty
	              if (!tooltip || !tooltip.html()) {
	                return;
	              }
	
	              if (!positionTimeout) {
	                positionTimeout = $timeout(function () {
	                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });
	
	                  if (!tooltip.hasClass(ttPosition.placement.split('-')[0])) {
	                    tooltip.removeClass(lastPlacement.split('-')[0]);
	                    tooltip.addClass(ttPosition.placement.split('-')[0]);
	                  }
	
	                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
	                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
	                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
	                  }
	
	                  // first time through tt element will have the
	                  // uib-position-measure class or if the placement
	                  // has changed we need to position the arrow.
	                  if (tooltip.hasClass('uib-position-measure')) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                    tooltip.removeClass('uib-position-measure');
	                  } else if (lastPlacement !== ttPosition.placement) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                  }
	                  lastPlacement = ttPosition.placement;
	
	                  positionTimeout = null;
	                }, 0, false);
	              }
	            };
	
	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;
	
	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	            openedTooltips.add(ttScope, {
	              close: hide
	            });
	
	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }
	
	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }
	
	              cancelHide();
	              prepareTooltip();
	
	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!showTimeout) {
	                  showTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }
	
	            function hideTooltipBind() {
	              cancelShow();
	
	              if (ttScope.popupCloseDelay) {
	                if (!hideTimeout) {
	                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
	                }
	              } else {
	                hide();
	              }
	            }
	
	            // Show the tooltip popup element.
	            function show() {
	              cancelShow();
	              cancelHide();
	
	              // Don't show empty tooltips.
	              if (!ttScope.content) {
	                return angular.noop;
	              }
	
	              createTooltip();
	
	              // And show the tooltip.
	              ttScope.$evalAsync(function () {
	                ttScope.isOpen = true;
	                assignIsOpen(true);
	                positionTooltip();
	              });
	            }
	
	            function cancelShow() {
	              if (showTimeout) {
	                $timeout.cancel(showTimeout);
	                showTimeout = null;
	              }
	
	              if (positionTimeout) {
	                $timeout.cancel(positionTimeout);
	                positionTimeout = null;
	              }
	            }
	
	            // Hide the tooltip popup element.
	            function hide() {
	              if (!ttScope) {
	                return;
	              }
	
	              // First things first: we don't show it anymore.
	              ttScope.$evalAsync(function () {
	                if (ttScope) {
	                  ttScope.isOpen = false;
	                  assignIsOpen(false);
	                  // And now we remove it from the DOM. However, if we have animation, we
	                  // need to wait for it to expire beforehand.
	                  // FIXME: this is a placeholder for a port of the transitions library.
	                  // The fade transition in TWBS is 150ms.
	                  if (ttScope.animation) {
	                    if (!transitionTimeout) {
	                      transitionTimeout = $timeout(removeTooltip, 150, false);
	                    }
	                  } else {
	                    removeTooltip();
	                  }
	                }
	              });
	            }
	
	            function cancelHide() {
	              if (hideTimeout) {
	                $timeout.cancel(hideTimeout);
	                hideTimeout = null;
	              }
	
	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	            }
	
	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                return;
	              }
	
	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function (tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });
	
	              prepObservers();
	            }
	
	            function removeTooltip() {
	              cancelShow();
	              cancelHide();
	              unregisterObservers();
	
	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }
	
	            /**
	             * Set the initial scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in sync.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }
	
	              ttScope.popupClass = attrs[prefix + 'Class'];
	              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
	              var placement = $position.parsePlacement(ttScope.placement);
	              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];
	
	              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
	              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
	            }
	
	            function assignIsOpen(isOpen) {
	              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
	                isOpenParse.assign(scope, isOpen);
	              }
	            }
	
	            ttScope.contentExp = function () {
	              return ttScope.content;
	            };
	
	            /**
	             * Observe the relevant attributes.
	             */
	            attrs.$observe('disabled', function (val) {
	              if (val) {
	                cancelShow();
	              }
	
	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });
	
	            if (isOpenParse) {
	              scope.$watch(isOpenParse, function (val) {
	                if (ttScope && !val === ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }
	
	            function prepObservers() {
	              observers.length = 0;
	
	              if (contentParse) {
	                observers.push(scope.$watch(contentParse, function (val) {
	                  ttScope.content = val;
	                  if (!val && ttScope.isOpen) {
	                    hide();
	                  }
	                }));
	
	                observers.push(tooltipLinkedScope.$watch(function () {
	                  if (!repositionScheduled) {
	                    repositionScheduled = true;
	                    tooltipLinkedScope.$$postDigest(function () {
	                      repositionScheduled = false;
	                      if (ttScope && ttScope.isOpen) {
	                        positionTooltip();
	                      }
	                    });
	                  }
	                }));
	              } else {
	                observers.push(attrs.$observe(ttType, function (val) {
	                  ttScope.content = val;
	                  if (!val && ttScope.isOpen) {
	                    hide();
	                  } else {
	                    positionTooltip();
	                  }
	                }));
	              }
	
	              observers.push(attrs.$observe(prefix + 'Title', function (val) {
	                ttScope.title = val;
	                if (ttScope.isOpen) {
	                  positionTooltip();
	                }
	              }));
	
	              observers.push(attrs.$observe(prefix + 'Placement', function (val) {
	                ttScope.placement = val ? val : options.placement;
	                if (ttScope.isOpen) {
	                  positionTooltip();
	                }
	              }));
	            }
	
	            function unregisterObservers() {
	              if (observers.length) {
	                angular.forEach(observers, function (observer) {
	                  observer();
	                });
	                observers.length = 0;
	              }
	            }
	
	            // hide tooltips/popovers for outsideClick trigger
	            function bodyHideTooltipBind(e) {
	              if (!ttScope || !ttScope.isOpen || !tooltip) {
	                return;
	              }
	              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
	              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
	                hideTooltipBind();
	              }
	            }
	
	            var unregisterTriggers = function unregisterTriggers() {
	              triggers.show.forEach(function (trigger) {
	                if (trigger === 'outsideClick') {
	                  element.off('click', toggleTooltipBind);
	                } else {
	                  element.off(trigger, showTooltipBind);
	                  element.off(trigger, toggleTooltipBind);
	                }
	              });
	              triggers.hide.forEach(function (trigger) {
	                if (trigger === 'outsideClick') {
	                  $document.off('click', bodyHideTooltipBind);
	                } else {
	                  element.off(trigger, hideTooltipBind);
	                }
	              });
	            };
	
	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();
	
	              triggers = getTriggers(val);
	
	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function (trigger, idx) {
	                  if (trigger === 'outsideClick') {
	                    element.on('click', toggleTooltipBind);
	                    $document.on('click', bodyHideTooltipBind);
	                  } else if (trigger === triggers.hide[idx]) {
	                    element.on(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element.on(trigger, showTooltipBind);
	                    element.on(triggers.hide[idx], hideTooltipBind);
	                  }
	
	                  element.on('keypress', function (e) {
	                    if (e.which === 27) {
	                      hideTooltipBind();
	                    }
	                  });
	                });
	              }
	            }
	
	            prepTriggers();
	
	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
	
	            var appendToBodyVal;
	            var appendKey = prefix + 'AppendToBody';
	            if (appendKey in attrs && attrs[appendKey] === undefined) {
	              appendToBodyVal = true;
	            } else {
	              appendToBodyVal = scope.$eval(attrs[appendKey]);
	            }
	
	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
	
	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              unregisterTriggers();
	              removeTooltip();
	              openedTooltips.remove(ttScope);
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})
	
	// This is mostly ngInclude code but with a custom scope
	.directive('uibTooltipTemplateTransclude', ['$animate', '$sce', '$compile', '$templateRequest', function ($animate, $sce, $compile, $templateRequest) {
	  return {
	    link: function link(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);
	
	      var changeCounter = 0,
	          currentScope,
	          previousElement,
	          currentElement;
	
	      var cleanupLastIncludeContent = function cleanupLastIncludeContent() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }
	
	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }
	
	        if (currentElement) {
	          $animate.leave(currentElement).then(function () {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };
	
	      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function (src) {
	        var thisChangeId = ++changeCounter;
	
	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function (response) {
	            if (thisChangeId !== changeCounter) {
	              return;
	            }
	            var newScope = origScope.$new();
	            var template = response;
	
	            var clone = $compile(template)(newScope, function (clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });
	
	            currentScope = newScope;
	            currentElement = clone;
	
	            currentScope.$emit('$includeContentLoaded', src);
	          }, function () {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });
	
	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])
	
	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('uibTooltipClasses', ['$uibPosition', function ($uibPosition) {
	  return {
	    restrict: 'A',
	    link: function link(scope, element, attrs) {
	      // need to set the primary position so the
	      // arrow has space during position measure.
	      // tooltip.positionTooltip()
	      if (scope.placement) {
	        // // There are no top-left etc... classes
	        // // in TWBS, so we need the primary position.
	        var position = $uibPosition.parsePlacement(scope.placement);
	        element.addClass(position[0]);
	      }
	
	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }
	
	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	}]).directive('uibTooltipPopup', function () {
	  return {
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
	  };
	}).directive('uibTooltip', ['$uibTooltip', function ($uibTooltip) {
	  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
	}]).directive('uibTooltipTemplatePopup', function () {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
	  };
	}).directive('uibTooltipTemplate', ['$uibTooltip', function ($uibTooltip) {
	  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]).directive('uibTooltipHtmlPopup', function () {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
	  };
	}).directive('uibTooltipHtml', ['$uibTooltip', function ($uibTooltip) {
	  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]);

/***/ },

/***/ 97:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.tooltip').run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>');angular.$$uibTooltipCss = true;
	});

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-tooltip.js.map