(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-storage-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-bbm-notification-center-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "model-bb-notifications-ng", "lib-bb-intent-ng", "lib-bb-widget-extension-ng", "lib-bb-storage-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-bbm-notification-center-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("model-bb-notifications-ng"), require("lib-bb-intent-ng"), require("lib-bb-widget-extension-ng"), require("lib-bb-storage-ng"));
	else
		root["widget-bbm-notification-center-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["model-bb-notifications-ng"], root["lib-bb-intent-ng"], root["lib-bb-widget-extension-ng"], root["lib-bb-storage-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__) {
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

	module.exports = __webpack_require__(62);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(36);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(38);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(39);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbIntentNg = __webpack_require__(53);
	
	var _libBbIntentNg2 = _interopRequireDefault(_libBbIntentNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(63);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _modelBbNotificationsNg = __webpack_require__(52);
	
	var _modelBbNotificationsNg2 = _interopRequireDefault(_modelBbNotificationsNg);
	
	var _libBbStorageNg = __webpack_require__(64);
	
	var _libBbStorageNg2 = _interopRequireDefault(_libBbStorageNg);
	
	var _list = __webpack_require__(65);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _details = __webpack_require__(67);
	
	var _details2 = _interopRequireDefault(_details);
	
	var _sharedApi = __webpack_require__(68);
	
	var _sharedApi2 = _interopRequireDefault(_sharedApi);
	
	var _viewModel = __webpack_require__(69);
	
	var _viewModel2 = _interopRequireDefault(_viewModel);
	
	var _defaultHooks = __webpack_require__(70);
	
	var defaultHooks = _interopRequireWildcard(_defaultHooks);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-bbm-notification-center-ng
	 *
	 * @description
	 * Mobile notification center widget.
	 *
	 * @example
	 * <!-- Notifications list template -->
	 * <div data-ng-controller="ListController as $ctrl">
	 *  <ul data-ng-repeat="notification in $ctrl.state.notifications.data track by notification.id">
	 *    <li>{{notification.id}}</li>
	 *  </ul>
	 * </div>
	 *
	 * <!-- Notification details template -->
	 * <div data-ng-controller="DetailsController as $ctrl">
	 *  <h2>{{$ctrl.state.selectedNotification.title}}</h2>
	 *  <p>
	 *    {{$ctrl.state.selectedNotification.message}}
	 *  </p>
	 * </div>
	 */
	var moduleKey = 'widget-bbm-notification-center-ng';
	var sharedApiKey = moduleKey + ':sharedApi';
	var viewModelKey = moduleKey + ':viewModel';
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbStorageNg2.default, _libBbEventBusNg2.default, _libBbIntentNg2.default, _modelBbNotificationsNg2.default, _libBbWidgetNg2.default]).factory(viewModelKey, [
	// dependencies to inject
	
	// dependencies to inject
	_modelBbNotificationsNg.modelNotificationsKey, _libBbStorageNg.bbStorageServiceKey,
	
	// into
	_viewModel2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(defaultHooks)).factory(sharedApiKey, [_modelBbNotificationsNg.modelNotificationsKey, _libBbEventBusNg.eventBusKey, viewModelKey,
	
	// into
	_sharedApi2.default]).controller('ListController', [
	// dependencies to inject
	
	// dependencies to inject
	_libBbWidgetNg.widgetKey, _modelBbNotificationsNg.modelNotificationsKey, viewModelKey, sharedApiKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey, hooksKey,
	
	// into
	_list2.default]).controller('DetailsController', [_libBbWidgetNg.widgetKey, _modelBbNotificationsNg.modelNotificationsKey, viewModelKey, sharedApiKey, _libBbIntentNg.bbIntentKey, _libBbEventBusNg.eventBusKey,
	
	// into
	_details2.default]).name;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ListController;
	
	var _constants = __webpack_require__(66);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function ListController(widget, model, viewModel, sharedApi, bbIntent, bus, hooks) {
	  /**
	   * @name ListController
	   * @ngkey ListController
	   *
	   * @description
	   * Notification center list controller.
	   * Loads notifications on start.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  /**
	   * @description
	   * A set of intents that the List controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	  var intents = {};
	
	  /**
	   * Creates a duplicate-free version of an array
	   *
	   * @param {Array} items
	   * @inner
	   */
	  var uniqueArray = function uniqueArray(array) {
	    return array.filter(function (itemOuter, index) {
	      return array.findIndex(function (itemInner) {
	        return itemOuter.id === itemInner.id;
	      }) === index;
	    });
	  };
	
	  /**
	   * Merges new notifications with existing notifications
	   *
	   * @name ListController#append
	   * @type {function}
	   * @returns {module:model-bb-notifications-ng.Notification[]}
	   * merged array of old and new notifications
	   * @inner
	   */
	  var append = function append(newItems, existingItems) {
	    return uniqueArray([].concat(_toConsumableArray(existingItems), _toConsumableArray(newItems)));
	  };
	
	  /**
	   * Replaces existing notifications with new notifications
	   *
	   * @name ListController#replace
	   * @type {function}
	   * @returns {module:model-bb-notifications-ng.Notification[]} new notifications
	   * @inner
	   */
	  var replace = function replace(items) {
	    return items;
	  };
	
	  /**
	   * @description
	   * Loads notifications.
	   *
	   * @name ListController#loadNotifications
	   * @type {function}
	   * @param {function} mergeStrategy - Strategy on how to handle the merging of notifications
	   * @returns {Promise}
	   * @inner
	   */
	  var loadNotifications = function loadNotifications(requestParams) {
	    var mergeStrategy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : replace;
	
	    viewModel.setNotificationsLoading(true);
	
	    return model.load(requestParams).then(function (raw) {
	      var rawNotifications = mergeStrategy(raw.data, viewModel.state.notifications.pagination.rawData);
	
	      var hasMore = rawNotifications.length < raw.totalCount;
	      var processedData = hooks.processNotifications(rawNotifications);
	
	      viewModel.setRawNotifications(rawNotifications);
	      viewModel.setHasMoreFlag(hasMore);
	
	      viewModel.setNotifications(processedData);
	      viewModel.setNotificationsError(null);
	      viewModel.setNotificationsLoading(false);
	    }).catch(function (error) {
	      viewModel.setNotificationsError(error);
	      viewModel.setNotificationsLoading(false);
	
	      throw error;
	    });
	  };
	
	  /**
	   * @description
	   * Loads more notifications.
	   *
	   * @name ListController#loadMoreNotifications
	   * @type {function}
	   * @returns {Promise.<Array>}
	   */
	  var loadMoreNotifications = function loadMoreNotifications() {
	    if (viewModel.state.notifications.loading || !viewModel.hasMoreNotifications()) {
	      return Promise.resolve();
	    }
	
	    var size = viewModel.getPageSize();
	    var from = viewModel.getTotalCount();
	
	    var requestParams = {
	      from: from,
	      size: size
	    };
	
	    return loadNotifications(requestParams, append);
	  };
	
	  var getReloadRequestParams = function getReloadRequestParams(pageSize, totalCount) {
	    var from = 0;
	    var size = Math.max(Math.ceil(totalCount / pageSize) * pageSize, pageSize);
	
	    return {
	      from: from,
	      size: size
	    };
	  };
	
	  /**
	   * @description
	   * Reloads notifications
	   *
	   * @name ListController#reloadNotifications
	   * @type {function}
	   * @returns {Promise}
	   * @inner
	   */
	  var reloadNotifications = function reloadNotifications() {
	    return loadNotifications(getReloadRequestParams(viewModel.getPageSize(), viewModel.getTotalCount()), replace);
	  };
	
	  /**
	   * Handles the intent to show the notification details
	   *
	   * @name ListController#showNotificationsDetails
	   * @type {function}
	   * @param {string} id - Id of the notification
	   */
	  var showNotificationDetails = function showNotificationDetails(notificationId) {
	    viewModel.setSelectedNotification(notificationId);
	    viewModel.save().then(function () {
	      intents.showNotificationDetails(notificationId);
	    });
	  };
	
	  /**
	   * @description
	   * Checks if there are notifications on the view model
	   *
	   * @name ListController#hasNotifications
	   * @type {function}
	   * @returns {boolean}
	   */
	  var hasNotifications = function hasNotifications() {
	    return viewModel.hasNotifications();
	  };
	
	  /**
	   * @description
	   * Gets initial request params
	   *
	   * @name ListController#getInitialRequestParams
	   * @type {function}
	   * @returns {Object}
	   * @inner
	   */
	  var getInitialRequestParams = function getInitialRequestParams() {
	    return {
	      fromDate: null,
	      toDate: null,
	      levels: null,
	      read: null,
	      from: 0,
	      size: viewModel.getPageSize()
	    };
	  };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * Preloads notifications and prepares the view model.
	   *
	   * @name ListController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   * @fires bb.item.loaded
	   */
	  var $onInit = function $onInit() {
	    /**
	     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	     * and will be removed with the update to widget collection 3 (WC3)
	     */
	    bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.publish(_constants.Event.BB_ITEM_LOADED, {
	      id: widget.getId()
	    });
	
	    bus.subscribe(_constants.Event.NOTIFICATION_CHANGE_READ, function (notification) {
	      viewModel.setNotificationRead(notification.id, notification.read);
	    });
	
	    bus.subscribe(_constants.Event.NOTIFICATION_DELETE_DONE, function (notification) {
	      viewModel.deleteNotification(notification.id);
	    });
	
	    return loadNotifications(getInitialRequestParams(), replace);
	  };
	
	  /**
	   * @description
	   * The intent to show the notification details.
	   *
	   * @name intents#showNotifactionDetails
	   * @type {function}
	   * @inner
	   */
	  intents.showNotificationDetails = bbIntent.create(_constants.Intent.SHOW_NOTIFICATION_DETAILS);
	
	  bbIntent.handle(_constants.Intent.SHOW_NOTIFICATION_LIST, function () {
	    viewModel.fetch();
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    hasNotifications: hasNotifications,
	    loadMoreNotifications: loadMoreNotifications,
	    showNotificationDetails: showNotificationDetails,
	    reloadNotifications: reloadNotifications
	  });
	}

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Pubsub events
	 * @type {Object}
	 */
	var Event = exports.Event = {
	  CXP_ITEM_LOADED: 'cxp.item.loaded',
	  BB_ITEM_LOADED: 'bb.item.loaded',
	
	  NOTIFICATION_DELETE_START: 'bb.event.notification.delete.start',
	  NOTIFICATION_DELETE_DONE: 'bb.event.notification.delete.done',
	  NOTIFICATION_DELETE_FAILED: 'bb.event.notification.delete.failed',
	  NOTIFICATION_CHANGE_READ: 'bb.event.notification.read.change'
	};
	
	/**
	 * Intents
	 * @type {Object}
	 */
	var Intent = exports.Intent = {
	  SHOW_NOTIFICATION_DETAILS: 'intent.bb.notification.details.show',
	  SHOW_NOTIFICATION_LIST: 'intent.bb.notification.list.show'
	};
	
	/**
	 * Storage keys
	 * @type {Object}
	 */
	var StorageKey = exports.StorageKey = {
	  NOTIFICATION_STATE: 'widget-bbm-notification-center-ng:state'
	};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DetailsController;
	
	var _constants = __webpack_require__(66);
	
	function DetailsController(widget, model, viewModel, sharedApi, bbIntent, bus) {
	  /**
	   * @name DetailsController
	   * @ngkey DetailsController
	   *
	   * @description
	   * Notification center details controller.
	   * Loads notification on start.
	   *
	   * @type {Object}
	   */
	  var ctrl = this;
	
	  var setNotificationRead = sharedApi.setNotificationRead,
	      changeNotificationRead = sharedApi.changeNotificationRead;
	
	  /**
	   * @description
	   * A set of intents that the Details controller uses or handles.
	   *
	   * @name intents
	   * @type {Object}
	   * @inner
	   */
	
	  var intents = {};
	
	  /**
	   * @name DetailsController#deleteNotification
	   *
	   * @description
	   * Deletes the selected notification.
	   *
	   * @type {function}
	   * @returns {Promise}
	   */
	  var deleteNotification = function deleteNotification() {
	    return sharedApi.deleteNotification(viewModel.state.selectedNotification.id).then(function () {
	      viewModel.deleteNotification(viewModel.state.selectedNotification.id);
	      viewModel.save().then(function () {
	        intents.showNotificationList();
	      });
	    });
	  };
	
	  /**
	   * @description
	   * AngularJS Lifecycle hook used to initialize the controller.
	   *
	   * Preloads the notification details and prepares the view model.
	   *
	   * @name DetailsController#$onInit
	   * @type {function}
	   *
	   * @fires cxp.item.loaded
	   * @fires bb.item.loaded
	   */
	  var $onInit = function $onInit() {
	    return viewModel.fetch().then(function () {
	      /**
	       * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
	       * and will be removed with the update to widget collection 3 (WC3)
	       */
	      bus.publish(_constants.Event.CXP_ITEM_LOADED, {
	        id: widget.getId()
	      });
	
	      bus.publish(_constants.Event.BB_ITEM_LOADED, {
	        id: widget.getId()
	      });
	    });
	  };
	
	  /**
	   * @description
	   * The intent to show the notification details.
	   *
	   * @name intents#showNotifactionDetails
	   * @type {function}
	   * @inner
	   */
	  intents.showNotificationList = bbIntent.create(_constants.Intent.SHOW_NOTIFICATION_LIST);
	
	  bbIntent.handle(_constants.Intent.SHOW_NOTIFICATION_DETAILS, function (notificationId) {
	    viewModel.fetch().then(function () {
	      viewModel.setSelectedNotification(notificationId);
	      setNotificationRead(notificationId, true);
	    });
	  });
	
	  bbIntent.init(function () {});
	
	  Object.defineProperty(ctrl, 'state', {
	    get: function get() {
	      return viewModel.state;
	    }
	  });
	
	  Object.assign(ctrl, {
	    $onInit: $onInit,
	    /**
	     * @description
	     * Set notification read status
	     *
	     * @name DetailsController#setNotificationRead
	     * @type {function}
	     *
	     * @param {string} notificationId - Id of the notification
	     * @param {boolean} readStatus - read status of notification
	     */
	    setNotificationRead: setNotificationRead,
	    /**
	     * @description
	     * Change notification read status
	     *
	     * @name DetailsController#changeNotificationRead
	     * @type {function}
	     *
	     * @param {string} notificationId - Id of the notification
	     */
	    changeNotificationRead: changeNotificationRead,
	    deleteNotification: deleteNotification
	  });
	}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(66);
	
	exports.default = function (model, bus, viewModel) {
	  /**
	   * @description
	   * Delete notification
	   *
	   * @name deleteNotification
	   * @type {function}
	   *
	   * @returns {Promise}
	   * @inner
	   */
	  var deleteNotification = function deleteNotification(notificationId) {
	    if (!notificationId) {
	      throw new Error('[notificationId] Notification Id is not defined');
	    }
	
	    bus.publish(_constants.Event.NOTIFICATION_DELETE_START);
	
	    return model.deleteRecord(notificationId).then(function () {
	      bus.publish(_constants.Event.NOTIFICATION_DELETE_DONE, { id: notificationId });
	    }).catch(function (error) {
	      bus.publish(_constants.Event.NOTIFICATION_DELETE_FAILED, { error: error });
	
	      throw error;
	    });
	  };
	
	  var setNotificationRead = function setNotificationRead(notificationId, readStatus) {
	    var id = String(notificationId);
	    var read = Boolean(readStatus);
	    model.putReadRecord(id, { read: read }).then(function () {
	      viewModel.setNotificationRead(notificationId, read);
	      bus.publish(_constants.Event.NOTIFICATION_CHANGE_READ, { id: id, read: read });
	    }).catch(function (error) {
	      viewModel.setNotificationsError(error);
	    });
	  };
	
	  var changeNotificationRead = function changeNotificationRead(notificationId) {
	    var selectedNotification = viewModel.findNotificationById(notificationId);
	    if (selectedNotification) {
	      var currentRead = selectedNotification.read;
	      setNotificationRead(notificationId, !currentRead);
	    }
	  };
	
	  return {
	    deleteNotification: deleteNotification,
	    setNotificationRead: setNotificationRead,
	    changeNotificationRead: changeNotificationRead
	  };
	};

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(66);
	
	exports.default = function (model, bbStorage) {
	  var viewModel = {};
	
	  /**
	   * @description
	   * A set of preferences.
	   *
	   * @name preferences
	   * @type {Object}
	   * @inner
	   */
	  var preferences = model.getNotificationPreferences();
	
	  /**
	   * @description
	   * Notifications array size
	   *
	   * @name getTotalCount
	   * @type {function}
	   * @returns {Number}
	   * @inner
	   */
	  var getTotalCount = function getTotalCount() {
	    return (viewModel.state.notifications.data || []).length;
	  };
	
	  /**
	   * @description
	   * Page size property
	   *
	   * @name getPageSize
	   * @type {function}
	   * @returns {Number}
	   * @inner
	   */
	  var getPageSize = function getPageSize() {
	    return preferences.pageSize;
	  };
	
	  /**
	   * @description
	   * Returns the initial state of the view model.
	   *
	   * @name getInitialState
	   * @type {function}
	   *
	   * @returns {PaymentView}
	   * @inner
	   */
	  var getInitialState = function getInitialState() {
	    return {
	      notifications: {
	        error: null,
	        loading: false,
	        data: null,
	        pagination: {
	          hasMore: true,
	          rawData: null
	        }
	      }
	    };
	  };
	
	  /**
	   * @description
	   * Checks if there are notifications
	   *
	   * @name hasNotifications
	   * @type {function}
	   * @returns {Boolean}
	   * @inner
	   */
	  var hasNotifications = function hasNotifications() {
	    return Boolean(viewModel.state.notifications.data && viewModel.state.notifications.data.length > 0);
	  };
	
	  /**
	   * @description
	   * Checks if there are more notifications to load
	   *
	   * @name hasMoreNotifications
	   * @type {function}
	   * @returns {Boolean} hasMore
	   * @inner
	   */
	  var hasMoreNotifications = function hasMoreNotifications() {
	    return viewModel.state.notifications.pagination.hasMore;
	  };
	
	  /**
	   * @description
	   * Sets the given loading state to the given target.
	   *
	   * @name setLoading
	   * @type {function}
	   *
	   * @param {Object} target
	   * @param {boolean} loading
	   * @inner
	   */
	  var setLoading = function setLoading(target, loading) {
	    return Object.assign(target, {
	      loading: Boolean(loading)
	    });
	  };
	
	  /**
	   * @description
	   * Sets the given error to the given target.
	   *
	   * @name setError
	   * @type {function}
	   *
	   * @param {Object} target
	   * @param {Error} error
	   * @inner
	   */
	  var setError = function setError(target, error) {
	    return Object.assign(target, { error: error });
	  };
	
	  /**
	   * @description
	   * Returns the list of notifications.
	   *
	   * @name getNotifications
	   * @type {function}
	   *
	   * @returns {*}
	   * @inner
	   */
	  var getNotifications = function getNotifications() {
	    return viewModel.state.notifications.data;
	  };
	
	  /**
	   * @description
	   * Sets the given parameter as the list of notifications.
	   *
	   * @name setNotifications
	   * @type {function}
	   *
	   * @param {*} notifications
	   * @inner
	   */
	  var setNotifications = function setNotifications(notifications) {
	    return Object.assign(viewModel.state.notifications, {
	      data: notifications
	    });
	  };
	
	  /**
	   * @description
	   * Sets the given parameter as the list of raw notifications.
	   *
	   * @name setRawNotifications
	   * @type {function}
	   *
	   * @param {*} notifications
	   * @inner
	   */
	  var setRawNotifications = function setRawNotifications(notifications) {
	    return Object.assign(viewModel.state.notifications.pagination, {
	      rawData: notifications
	    });
	  };
	
	  /**
	   * @description
	   * Sets the given parameter as the hasMore flag of the pagination object.
	   *
	   * @name setHasMoreFlag
	   * @type {function}
	   *
	   * @param {boolean} hasMore
	   * @inner
	   */
	  var setHasMoreFlag = function setHasMoreFlag(hasMore) {
	    return Object.assign(viewModel.state.notifications.pagination, {
	      hasMore: hasMore
	    });
	  };
	
	  /**
	   * @description
	   * Sets an error state to the notifications with the given error.
	   *
	   * @name setNotificationsError
	   * @type {function}
	   *
	   * @param {Error} error
	   * @inner
	   */
	  var setNotificationsError = function setNotificationsError(error) {
	    setError(viewModel.state.notifications, error);
	  };
	
	  /**
	   * @description
	   * Sets the loading state of the notifications.
	   *
	   * @name setNotificationsLoading
	   * @type {function}
	   *
	   * @param {boolean} loading
	   * @inner
	   */
	  var setNotificationsLoading = function setNotificationsLoading(loading) {
	    setLoading(viewModel.state.notifications, loading);
	  };
	
	  /**
	   * @description
	   * Finds the selected notification in the notifications array based on the
	   * given notification id
	   *
	   * @name findNotificationById
	   * @type {function}
	   *
	   * @param {string} notificationId
	   * @inner
	   */
	  var findNotificationById = function findNotificationById(notificationId) {
	    return (viewModel.state.notifications.data || []).find(function (notification) {
	      return notification.id === notificationId;
	    });
	  };
	
	  /**
	   * @description
	   * Finds the selected notification in the notifications array based on the
	   * given notification id
	   *
	   * @name findNotificationById
	   * @type {function}
	   *
	   * @param {string} notificationId
	   * @inner
	   */
	  var findNotificationIndexById = function findNotificationIndexById(notificationId) {
	    return (viewModel.state.notifications.data || []).findIndex(function (notification) {
	      return notification.id === notificationId;
	    });
	  };
	
	  /**
	   * @description
	   * Sets the selected notification on the state
	   *
	   * @name setSelectedNotification
	   * @type {function}
	   *
	   * @param {string} notificationId
	   * @inner
	   */
	  var setSelectedNotification = function setSelectedNotification(notificationId) {
	    return Object.assign(viewModel.state, {
	      selectedNotification: viewModel.findNotificationById(notificationId)
	    });
	  };
	
	  /**
	   * @description
	   * Updates the selected notification on the state with the notification that has just been changed
	   *
	   * @name updateSelectedNotification
	   * @type {function}
	   *
	   * @inner
	   */
	  var updateSelectedNotification = function updateSelectedNotification() {
	    var selectedNotification = viewModel.state.selectedNotification;
	
	    if (selectedNotification) {
	      setSelectedNotification(selectedNotification.id);
	    }
	  };
	
	  /**
	   * @description
	   * Sets "read" status of notification.
	   *
	   * @name setNotificationRead
	   * @type {function}
	   * @param {string} notificationId
	   * @param {boolean} read
	   * @inner
	   */
	  var setNotificationRead = function setNotificationRead(notificationId, read) {
	    var notification = viewModel.findNotificationById(notificationId);
	
	    Object.assign(notification, { read: read });
	
	    if (viewModel.state.selectedNotification && viewModel.state.selectedNotification.id === notificationId) {
	      updateSelectedNotification();
	    }
	  };
	
	  /**
	   * @description
	   * deletes the notification from the notifications list.
	   *
	   * @name deleteNotification
	   * @type {function}
	   * @param {string} notificationId
	   * @inner
	   */
	  var deleteNotification = function deleteNotification(notificationId) {
	    var notificationIndex = viewModel.findNotificationIndexById(notificationId);
	
	    viewModel.state.notifications.data.splice(notificationIndex, 1);
	  };
	
	  /**
	   * @description
	   * Fetches the state from the storage.
	   *
	   * @name fetch
	   * @type {function}
	   * @inner
	   */
	  var fetch = function fetch() {
	    return bbStorage.getItem(_constants.StorageKey.NOTIFICATION_STATE).then(function (state) {
	      if (state) {
	        viewModel.state = state;
	      }
	    });
	  };
	
	  /**
	   * @description
	   * Saves the state to the storage.
	   *
	   * @name save
	   * @type {function}
	   * @inner
	   */
	  var save = function save() {
	    return bbStorage.setItem(_constants.StorageKey.NOTIFICATION_STATE, viewModel.state);
	  };
	
	  Object.assign(viewModel, {
	    state: getInitialState(),
	
	    hasNotifications: hasNotifications,
	    hasMoreNotifications: hasMoreNotifications,
	
	    getNotifications: getNotifications,
	
	    setRawNotifications: setRawNotifications,
	    setHasMoreFlag: setHasMoreFlag,
	
	    setNotifications: setNotifications,
	    setNotificationsError: setNotificationsError,
	    setNotificationsLoading: setNotificationsLoading,
	
	    findNotificationById: findNotificationById,
	    findNotificationIndexById: findNotificationIndexById,
	    setSelectedNotification: setSelectedNotification,
	
	    setNotificationRead: setNotificationRead,
	
	    deleteNotification: deleteNotification,
	
	    fetch: fetch,
	    save: save,
	
	    getPageSize: getPageSize,
	    getTotalCount: getTotalCount
	  });
	
	  return viewModel;
	};

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable import/prefer-default-export */
	
	/**
	 * @description
	 * Hooks for widget-bbm-notification-center-ng.
	 *
	 * @name Hooks
	 * @type {object}
	 */
	
	/**
	 * @description
	 * Processes the list of notifications.
	 *
	 * @name Hooks#processNotifications
	 * @type {function}
	 * @param {Array.<module:model-bb-notifications-ng.Notification>} notifications Original list
	 *   of notifications from the model.
	 * @returns {Array.<module:model-bb-notifications-ng.Notification>} Processed list of notifications.
	 */
	var processNotifications = exports.processNotifications = function processNotifications(notifications) {
	  return notifications;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=widget-bbm-notification-center-ng.js.map