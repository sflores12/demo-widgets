(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("data-bb-action-recipes-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-model-errors"));
	else if(typeof define === 'function' && define.amd)
		define("model-bb-action-recipes-ng", ["vendor-bb-angular", "data-bb-action-recipes-http-ng", "data-bb-product-summary-http-ng", "lib-bb-model-errors"], factory);
	else if(typeof exports === 'object')
		exports["model-bb-action-recipes-ng"] = factory(require("vendor-bb-angular"), require("data-bb-action-recipes-http-ng"), require("data-bb-product-summary-http-ng"), require("lib-bb-model-errors"));
	else
		root["model-bb-action-recipes-ng"] = factory(root["vendor-bb-angular"], root["data-bb-action-recipes-http-ng"], root["data-bb-product-summary-http-ng"], root["lib-bb-model-errors"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_27__) {
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ }),
/* 1 */,
/* 2 */,
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modelActionRecipesKey = exports.moduleKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(23);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _dataBbActionRecipesHttpNg = __webpack_require__(24);
	
	var _dataBbActionRecipesHttpNg2 = _interopRequireDefault(_dataBbActionRecipesHttpNg);
	
	var _dataBbProductSummaryHttpNg = __webpack_require__(25);
	
	var _dataBbProductSummaryHttpNg2 = _interopRequireDefault(_dataBbProductSummaryHttpNg);
	
	var _actionRecipes = __webpack_require__(26);
	
	var _actionRecipes2 = _interopRequireDefault(_actionRecipes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module model-bb-action-recipes-ng
	 *
	 * @description
	 * Model for widget-bb-action-recipes-ng
	 *
	 * @example
	 * import modelActionRecipesModuleKey, { modelActionRecipesKey } from 'model-bb-action-recipes-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     modelActionRecipesModuleKey,
	 *   ])
	 *   .factory('someFactory', [
	 *     modelActionRecipesKey,
	 *     // into
	 *     function someFactory(actionRecipesModel) {
	 *       // ...
	 *     },
	 *   ]);
	 */
	var moduleKey = exports.moduleKey = 'model-bb-action-recipes-ng';
	var modelActionRecipesKey = exports.modelActionRecipesKey = 'model-bb-action-recipes-ng:model';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_dataBbActionRecipesHttpNg2.default, _dataBbProductSummaryHttpNg2.default]).factory(modelActionRecipesKey, [_dataBbActionRecipesHttpNg.actionRecipesDataKey, _dataBbProductSummaryHttpNg.productSummaryDataKey, '$q',
	/* into */
	_actionRecipes2.default]).name;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = actionRecipesModel;
	
	var _libBbModelErrors = __webpack_require__(27);
	
	var _accountMapper = __webpack_require__(28);
	
	var _accountMapper2 = _interopRequireDefault(_accountMapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Model factory for model-bb-action-recipes-ng
	 *
	 * @inner
	 * @type {function}
	 * @param {Object} Promise An ES2015 compatible `Promise` object.
	 *
	 * @return {Object}
	 */
	function actionRecipesModel(actionRecipesData, productSummaryData, $q) {
	  /**
	   * @description Extracting data set from raw response
	   * @inner
	   * @param rawData - response
	   * @returns [object] data response
	   */
	  var convertRawData = function convertRawData(rawData) {
	    return rawData.data || [];
	  };
	
	  /**
	   * @description Load users recipe data.
	   *
	   * @name actionRecipesModel#loadRecipes
	   * @type {function}
	   * @returns {Promise.<Object>} A Promise with an array of Recipes
	   */
	  function loadRecipes() {
	    return actionRecipesData.getActionRecipes().then(convertRawData).then(function (res) {
	      return res.actionRecipes;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description Load available Recipe Specifications
	   *
	   * @name actionRecipesModel#loadSpecifications
	   * @type {function}
	   * @returns {Promise.<Object>} A Promise with an array of specification data
	   */
	  function loadSpecifications() {
	    return actionRecipesData.getActionRecipeSpecifications().then(convertRawData).then(function (res) {
	      return res.actionRecipeSpecifications;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description Method to normalize account data
	   *
	   * @param {object} data http response data
	   * @type {function}
	   * @returns {Array<Account>} accounts normalized account data
	   * @inner
	   */
	  function convertToArray(data) {
	    return Object.keys(data).filter(function (groupName) {
	      return data[groupName].products && data[groupName].products.length > 0;
	    }).map(function (groupName) {
	      return data[groupName].products.map((0, _accountMapper2.default)(groupName));
	    }).reduce(function (accumulated, arr) {
	      return accumulated.concat(arr);
	    }, []);
	  }
	
	  /**
	   * @description Load users account data
	   *
	   * @name actionRecipesModel#loadAccounts
	   * @type {function}
	   * @returns {Promise.<Object>} A Promise with an array of account data
	   */
	  function loadAccounts() {
	    return productSummaryData.getProductsummaryDebitaccounts().then(convertRawData).then(convertToArray).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description
	   * Load all necessary data to display Recipes:
	   * Recipes, Specifications and Accounts.
	   *
	   * @name actionRecipesModel#load
	   * @type {function}
	   * @returns {Promise.<Object>} A Promise with an array of account data
	   */
	  function load() {
	    return $q.all([loadSpecifications(), loadAccounts(), loadRecipes()]).then(function (res) {
	      return {
	        specifications: res[0],
	        accounts: res[1],
	        recipes: res[2]
	      };
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description
	   * Load all necessary data to display Recipes:
	   * Recipes, Specifications and Accounts.
	   *
	   * @name actionRecipesModel#load
	   * @type {function}
	   * @returns {Promise.<Object>} A Promise with an array of account data
	   */
	  function save(recipe) {
	    return actionRecipesData.postActionRecipesRecord(recipe).then(convertRawData).then(function (response) {
	      var id = response.id;
	      return Object.assign(recipe, { id: id });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description
	   * Load all necessary data to display Recipes:
	   * Recipes, Specifications and Accounts.
	   *
	   * @name actionRecipesModel#load
	   * @type {function}
	   * @returns {Promise.<Object>} A Promise with an array of account data
	   */
	  function update(recipe) {
	    return actionRecipesData.putActionRecipesRecord(recipe.id, recipe).then(convertRawData).then(function () {
	      return recipe;
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description
	   * Load all necessary data to display Recipes:
	   * Recipes, Specifications and Accounts.
	   *
	   * @name actionRecipesModel#load
	   * @type {function}
	   * @returns {Promise.<Object>} A Promise with an array of account data
	   */
	  function remove(recipe) {
	    return actionRecipesData.deleteActionRecipesRecord(recipe.id, {}).then(convertRawData).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description Activates given action recipe
	   * @name actionRecipesModel#activate
	   * @type {Function}
	   * @param {Object} recipe recipe to activate
	   * @return {Promise} promise which is resolved with the activated recipe
	   */
	  function activate(recipe) {
	    return actionRecipesData.postActionRecipesActivationRequestRecord(recipe.id).then(function () {
	      return Object.assign(recipe, { active: true });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	   * @description Deactivates given action recipe
	   * @name actionRecipesModel#deactivate
	   * @type {Function}
	   * @param {Object} recipe recipe to deactivate
	   * @return {Promise} promise which is resolved with deactivated recipe
	   */
	  function deactivate(recipe) {
	    return actionRecipesData.postActionRecipesDeactivationRequestRecord(recipe.id).then(function () {
	      return Object.assign(recipe, { active: false });
	    }).catch(function (httpErrorResponse) {
	      throw (0, _libBbModelErrors.fromHttpError)(httpErrorResponse);
	    });
	  }
	
	  /**
	  * @description
	  * Action recipes  widget model service.
	  *
	  * @name actionRecipesModel
	  * @type {object}
	  */
	  return {
	    loadRecipes: loadRecipes,
	    loadSpecifications: loadSpecifications,
	    loadAccounts: loadAccounts,
	    load: load,
	    save: save,
	    update: update,
	    remove: remove,
	    activate: activate,
	    deactivate: deactivate
	  };
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var maskCardNumber = function maskCardNumber(suffix) {
	  var masked = '';
	  if (suffix) {
	    masked = 'XXXX-XXXX-XXXX-' + suffix;
	  }
	  return masked;
	};
	
	var defaultViewModelFactory = function defaultViewModelFactory(_ref) {
	  var id = _ref.id,
	      name = _ref.name,
	      currency = _ref.currency;
	  return {
	    id: id,
	    name: name,
	    currency: currency
	  };
	};
	
	var viewModelFactories = {
	  currentAccounts: function currentAccounts(account) {
	    return {
	      id: account.id,
	      name: account.name,
	      identifier: account.IBAN || account.BBAN,
	      amount: account.availableBalance,
	      currency: account.currency
	    };
	  },
	
	  savingsAccounts: function savingsAccounts(account) {
	    return {
	      id: account.id,
	      name: account.name,
	      identifier: account.IBAN || account.BBAN,
	      amount: account.bookedBalance,
	      currency: account.currency
	    };
	  },
	
	  termDeposits: function termDeposits(account) {
	    return {
	      id: account.id,
	      name: account.name,
	      amount: account.principalAmount,
	      currency: account.currency
	    };
	  },
	
	  loans: function loans(account) {
	    return {
	      id: account.id,
	      name: account.name,
	      amount: account.bookedBalance,
	      currency: account.currency
	    };
	  },
	
	  creditCards: function creditCards(account) {
	    return {
	      id: account.id,
	      name: account.name,
	      identifier: maskCardNumber(account.cardNumberSuffix),
	      amount: account.availableBalance,
	      currency: account.currency
	    };
	  },
	
	  investmentAccounts: function investmentAccounts(account) {
	    return {
	      id: account.id,
	      name: account.name,
	      amount: account.currentInvestmentValue,
	      currency: account.currency
	    };
	  }
	
	};
	
	var viewModelFactory = function viewModelFactory(kind, account) {
	  var acc = (viewModelFactories[kind] || defaultViewModelFactory)(account);
	  acc.kind = kind;
	  return acc;
	};
	
	/**
	 * Prepare the fields of a account into a form ready for display to the User
	 *
	 * @inner
	 * @param {object} account The source account from the API
	 * @returns {AccountView}
	 */
	
	exports.default = function (kindId) {
	  return function (account) {
	    return viewModelFactory(kindId, account);
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=model-bb-action-recipes-ng.js.map