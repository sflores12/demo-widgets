(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-user-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-personal-profile-ng", ["vendor-bb-angular", "data-bb-user-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-personal-profile-ng"] = factory(require("vendor-bb-angular"), require("data-bb-user-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-personal-profile-ng"] = factory(root["vendor-bb-angular"], root["data-bb-user-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_22__) {
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

	module.exports = __webpack_require__(18);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelPersonalProfileKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(19);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbUserHttpNg = __webpack_require__(20);
	
	var _dataBbUserHttpNg2 = _interopRequireDefault(_dataBbUserHttpNg);
	
	var _personalProfile = __webpack_require__(21);
	
	var _personalProfile2 = _interopRequireDefault(_personalProfile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = exports.moduleKey = 'model-bb-personal-profile-ng'; /**
	                                                                     * @module model-bb-personal-profile-ng
	                                                                     *
	                                                                     * @description
	                                                                     * Personal profile widget model.
	                                                                     *
	                                                                     * @usage
	                                                                     * import modelPersonalProfileModuleKey, {
	                                                                     *   modelPersonalProfileKey,
	                                                                     * } from 'model-bb-personal-profile-ng';
	                                                                     *
	                                                                     * angular.module('widget-bb-payment-ng', [
	                                                                     *   modelPersonalProfileModuleKey,
	                                                                     * ])
	                                                                     * .controller('PersonalProfileController', [
	                                                                     *   modelPersonalProfileKey,
	                                                                     *   ...,
	                                                                     * ])
	                                                                     */
	var modelPersonalProfileKey = exports.modelPersonalProfileKey = 'model-bb-personal-profile-ng:model';
	
	exports.default = _vendorBbAngular2.default.module('model-bb-personal-profile-ng', [_dataBbUserHttpNg2.default]).factory(modelPersonalProfileKey, ['$q', _dataBbUserHttpNg.userDataKey,
	/* into */
	_personalProfile2.default]).name;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = personalProfileModel;
	
	var _libBbModelErrors = __webpack_require__(22);
	
	/**
	 * @description
	 * Model for widget-bb-personal-profile-ng
	 *
	 * @param {object} Promise An ES2015 compatible `Promise` object.
	 * @param {UserData} userData -
	 * A Data module to allow access to user data.
	 *
	 * type {function}
	 * @return {UserModel}
	 */
	function personalProfileModel(Promise, userData) {
	  /**
	   * @name PersonalProfileModel#load
	   * @type {function}
	   *
	   * @description
	   * Loads the data for the current logged in user
	   *
	   * @returns {Promise<User, module:lib-bb-model-errors.ModelError>} A Promise with the user's data.
	   */
	  function load() {
	    // @TODO: change hardcoded id to the real user id from the session
	    return userData.getUsersRecord('userId1').then(function (response) {
	      return response.data;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @name PersonalProfileModel#loadUsersProfile
	   * @type {function}
	   *
	   * @description
	   * Loads the data for the current logged in user
	   *
	   * @returns {Promise<UserProfile, module:lib-bb-model-errors.ModelError>} A Promise with the user's data.
	   */
	  var loadUsersProfile = function loadUsersProfile() {
	    return (
	      // @TODO: change hardcoded id to the real user id from the session
	      userData.getUsersProfilesRecord('userId3').then(function (response) {
	        return response.data;
	      }).catch(function (httpErrorResponse) {
	        throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	      })
	    );
	  };
	
	  /**
	   * @name PersonalProfileModel#updateUsersProfile
	   * @type {function}
	   *
	   * @description
	   * Updates a user
	   *
	   * @param {UserProfile} user User data
	   * @returns {Promise<UserProfile, module:lib-bb-model-errors.ModelError>} A Promise with the user's data.
	   */
	  var updateUsersProfile = function updateUsersProfile(user) {
	    return userData.putUsersProfilesRecord(user.id, user).then(function (response) {
	      return response.data;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  };
	
	  /**
	   * @name PersonalProfileModel
	   * @type {Object}
	   *
	   * @description
	   * Personal Profile model service
	   */
	  return {
	    load: load,
	    loadUsersProfile: loadUsersProfile,
	    updateUsersProfile: updateUsersProfile
	  };
	}
	
	/**
	 * @typedef {Object} User
	 * @property {string} bbid - Internal Backbase identifier
	 * @property {string} exid - External bank identifier
	 * @property {string} entityId - External entity identifier
	 * @property {string} id - Internally used unique identification of the user
	 * @property {string} imageAvatar - Base64 encoded picture of the user
	 * @property {string} firstName - The given name of a user
	 * @property {string} lastName - The given family name of a user
	 * @property {string} dateOfBirth - The date the user was born in format "DD-MM-YYYY"
	 * @property {string} street - Street name (part of the address)
	 * @property {string} houseNumber - House number (part of the address)
	 * @property {string} postalCode - Postal code (part of the address)
	 * @property {string} area - Area (part of the address)
	 * @property {string} city - City (part of the address)
	 * @property {string} citizenship - Country where the user is citizen of
	 * @property {string} email - The primary email address of the user
	 * @property {array} phone - The phone numbers where the user can be reached
	 */
	
	/**
	 * @typedef {Object} Email
	 * @property {string} value - The email address of the user
	 * @property {boolean} primary - The flag to identidy if an email is primary
	 */
	
	/**
	* @typedef {Object} Phone
	* @property {string} value - The phone number of the user
	* @property {boolean} primary - The flag to identidy if a phone is primary
	*/
	
	/**
	* @typedef {Object} UserProfile
	* @property {string} bbid - Internal Backbase identifier
	* @property {string} exid - External bank identifier
	* @property {string} entityId - External entity identifier
	* @property {string} id - Internally used unique identification of the user
	* @property {string} imageAvatar - Base64 encoded picture of the user
	* @property {string} firstName - The given name of a user
	* @property {string} lastName - The given family name of a user
	* @property {string} dateOfBirth - The date the user was born in format "DD-MM-YYYY"
	* @property {string} street - Street name (part of the address)
	* @property {string} houseNumber - House number (part of the address)
	* @property {string} postalCode - Postal code (part of the address)
	* @property {string} area - Area (part of the address)
	* @property {string} city - City (part of the address)
	* @property {string} citizenship - Country where the user is citizen of
	* @property {array<Email>} emails - Email adresses of the user
	* @property {array<Phone>} phones - Phone numbers where the user can be reached
	*/
	/* eslint max-len: ["error", 100, { "ignoreComments": true }]*/

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ })

/******/ })
});
;
//# sourceMappingURL=model-bb-personal-profile-ng.js.map