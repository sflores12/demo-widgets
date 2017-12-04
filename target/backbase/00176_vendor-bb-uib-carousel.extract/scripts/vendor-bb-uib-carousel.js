(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-carousel", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-carousel"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-carousel"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(12);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	module.exports = __webpack_require__(13);
	__webpack_require__(17);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	
	var MODULE_NAME = 'vendor-bb-uib-carousel';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.carousel', 'uib/template/carousel/carousel.html', 'uib/template/carousel/slide.html']);
	
	module.exports = MODULE_NAME;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/carousel/carousel.html", "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" + "  <div class=\"carousel-inner\" ng-transclude></div>\n" + "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" + "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" + "    <span class=\"sr-only\">previous</span>\n" + "  </a>\n" + "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" + "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" + "    <span class=\"sr-only\">next</span>\n" + "  </a>\n" + "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" + "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" + "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" + "    </li>\n" + "  </ol>\n" + "</div>\n" + "");
	}]);

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/carousel/slide.html", "<div ng-class=\"{\n" + "    'active': active\n" + "  }\" class=\"item text-center\" ng-transclude></div>\n" + "");
	}]);

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.carousel', []).controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function ($scope, $element, $interval, $timeout, $animate) {
	  var self = this,
	      slides = self.slides = $scope.slides = [],
	      SLIDE_DIRECTION = 'uib-slideDirection',
	      currentIndex = $scope.active,
	      currentInterval,
	      isPlaying,
	      bufferedTransitions = [];
	
	  var destroyed = false;
	
	  self.addSlide = function (slide, element) {
	    slides.push({
	      slide: slide,
	      element: element
	    });
	    slides.sort(function (a, b) {
	      return +a.slide.index - +b.slide.index;
	    });
	    //if this is the first slide or the slide is set to active, select it
	    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
	      if ($scope.$currentTransition) {
	        $scope.$currentTransition = null;
	      }
	
	      currentIndex = slide.index;
	      $scope.active = slide.index;
	      setActive(currentIndex);
	      self.select(slides[findSlideIndex(slide)]);
	      if (slides.length === 1) {
	        $scope.play();
	      }
	    }
	  };
	
	  self.getCurrentIndex = function () {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide.index === currentIndex) {
	        return i;
	      }
	    }
	  };
	
	  self.next = $scope.next = function () {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;
	
	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }
	
	    return self.select(slides[newIndex], 'next');
	  };
	
	  self.prev = $scope.prev = function () {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;
	
	    if ($scope.noWrap() && newIndex === slides.length - 1) {
	      $scope.pause();
	      return;
	    }
	
	    return self.select(slides[newIndex], 'prev');
	  };
	
	  self.removeSlide = function (slide) {
	    var index = findSlideIndex(slide);
	
	    var bufferedIndex = bufferedTransitions.indexOf(slides[index]);
	    if (bufferedIndex !== -1) {
	      bufferedTransitions.splice(bufferedIndex, 1);
	    }
	
	    //get the index of the slide inside the carousel
	    slides.splice(index, 1);
	    if (slides.length > 0 && currentIndex === index) {
	      if (index >= slides.length) {
	        currentIndex = slides.length - 1;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[slides.length - 1]);
	      } else {
	        currentIndex = index;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	      $scope.active = currentIndex;
	    }
	
	    //clean the active value when no more slide
	    if (slides.length === 0) {
	      currentIndex = null;
	      $scope.active = null;
	      clearBufferedTransitions();
	    }
	  };
	
	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function (nextSlide, direction) {
	    var nextIndex = findSlideIndex(nextSlide.slide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide.slide.index !== currentIndex && !$scope.$currentTransition) {
	      goNext(nextSlide.slide, nextIndex, direction);
	    } else if (nextSlide && nextSlide.slide.index !== currentIndex && $scope.$currentTransition) {
	      bufferedTransitions.push(slides[nextIndex]);
	    }
	  };
	
	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function (slide) {
	    return +slide.slide.index;
	  };
	
	  $scope.isActive = function (slide) {
	    return $scope.active === slide.slide.index;
	  };
	
	  $scope.isPrevDisabled = function () {
	    return $scope.active === 0 && $scope.noWrap();
	  };
	
	  $scope.isNextDisabled = function () {
	    return $scope.active === slides.length - 1 && $scope.noWrap();
	  };
	
	  $scope.pause = function () {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };
	
	  $scope.play = function () {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };
	
	  $scope.$on('$destroy', function () {
	    destroyed = true;
	    resetTimer();
	  });
	
	  $scope.$watch('noTransition', function (noTransition) {
	    $animate.enabled($element, !noTransition);
	  });
	
	  $scope.$watch('interval', restartTimer);
	
	  $scope.$watchCollection('slides', resetTransition);
	
	  $scope.$watch('active', function (index) {
	    if (angular.isNumber(index) && currentIndex !== index) {
	      for (var i = 0; i < slides.length; i++) {
	        if (slides[i].slide.index === index) {
	          index = i;
	          break;
	        }
	      }
	
	      var slide = slides[index];
	      if (slide) {
	        setActive(index);
	        self.select(slides[index]);
	        currentIndex = index;
	      }
	    }
	  });
	
	  function clearBufferedTransitions() {
	    while (bufferedTransitions.length) {
	      bufferedTransitions.shift();
	    }
	  }
	
	  function getSlideByIndex(index) {
	    for (var i = 0, l = slides.length; i < l; ++i) {
	      if (slides[i].index === index) {
	        return slides[i];
	      }
	    }
	  }
	
	  function setActive(index) {
	    for (var i = 0; i < slides.length; i++) {
	      slides[i].slide.active = i === index;
	    }
	  }
	
	  function goNext(slide, index, direction) {
	    if (destroyed) {
	      return;
	    }
	
	    angular.extend(slide, { direction: direction });
	    angular.extend(slides[currentIndex].slide || {}, { direction: direction });
	    if ($animate.enabled($element) && !$scope.$currentTransition && slides[index].element && self.slides.length > 1) {
	      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
	      var currentIdx = self.getCurrentIndex();
	
	      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
	        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
	      }
	
	      $scope.$currentTransition = true;
	      $animate.on('addClass', slides[index].element, function (element, phase) {
	        if (phase === 'close') {
	          $scope.$currentTransition = null;
	          $animate.off('addClass', element);
	          if (bufferedTransitions.length) {
	            var nextSlide = bufferedTransitions.pop().slide;
	            var nextIndex = nextSlide.index;
	            var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	            clearBufferedTransitions();
	
	            goNext(nextSlide, nextIndex, nextDirection);
	          }
	        }
	      });
	    }
	
	    $scope.active = slide.index;
	    currentIndex = slide.index;
	    setActive(index);
	
	    //every time you change slides, reset the timer
	    restartTimer();
	  }
	
	  function findSlideIndex(slide) {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide === slide) {
	        return i;
	      }
	    }
	  }
	
	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }
	
	  function resetTransition(slides) {
	    if (!slides.length) {
	      $scope.$currentTransition = null;
	      clearBufferedTransitions();
	    }
	  }
	
	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }
	
	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }
	}]).directive('uibCarousel', function () {
	  return {
	    transclude: true,
	    replace: true,
	    controller: 'UibCarouselController',
	    controllerAs: 'carousel',
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
	    },
	    scope: {
	      active: '=',
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	}).directive('uibSlide', function () {
	  return {
	    require: '^uibCarousel',
	    transclude: true,
	    replace: true,
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/slide.html';
	    },
	    scope: {
	      actual: '=?',
	      index: '=?'
	    },
	    link: function link(scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function () {
	        carouselCtrl.removeSlide(scope);
	      });
	    }
	  };
	}).animation('.item', ['$animateCss', function ($animateCss) {
	  var SLIDE_DIRECTION = 'uib-slideDirection';
	
	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }
	
	  return {
	    beforeAddClass: function beforeAddClass(element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass + ' ' + direction, done);
	        element.addClass(direction);
	
	        $animateCss(element, { addClass: directionClass }).start().done(removeClassFn);
	
	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function beforeRemoveClass(element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);
	
	        $animateCss(element, { addClass: directionClass }).start().done(removeClassFn);
	
	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };
	}]);

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.carousel').run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');angular.$$uibCarouselCss = true;
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vendor-bb-uib-carousel.js.map