(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-iban", [], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-iban"] = factory();
	else
		root["lib-bb-iban"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(54);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatByGroups = exports.isValidBBAN = exports.isValidIBAN = undefined;
	
	var _countrySpec = __webpack_require__(55);
	
	var _countrySpec2 = _interopRequireDefault(_countrySpec);
	
	var _helpers = __webpack_require__(56);
	
	var _bigIntegerMod = __webpack_require__(57);
	
	var _bigIntegerMod2 = _interopRequireDefault(_bigIntegerMod);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Validates IBAN structure defined in ISO 13616-1 and ISO/IEC 7064 (MOD97-10).
	 *
	 * @name isValidIBAN
	 * @type {function}
	 * @param {string} iban International bank account number.
	 * @returns {boolean}
	 */
	var isValidIBAN = exports.isValidIBAN = function isValidIBAN(iban) {
	  if (typeof iban !== 'string') {
	    return false;
	  }
	
	  var spec = void 0;
	  var compactIBAN = (0, _helpers.compact)(iban.toUpperCase());
	
	  try {
	    spec = (0, _countrySpec2.default)(compactIBAN);
	  } catch (error) {
	    return false;
	  }
	
	  return spec.len === compactIBAN.length && (0, _helpers.bbanRegexp)(spec.bban).test(compactIBAN.slice(4)) && (0, _bigIntegerMod2.default)((0, _helpers.convertIban)(compactIBAN), 97) === 1;
	};
	
	/**
	 * Validates BBAN structure defined in ISO 13616-1.
	 *
	 * @name isValidBBAN
	 * @type {function}
	 * @param {string} iban International bank account number.
	 * @returns {boolean}
	 */
	/**
	 * @module lib-bb-iban
	 * @description IBAN structure validation library
	 */
	
	// References:
	// https://www.swift.com/standards/data-standards/iban
	// https://en.wikipedia.org/wiki/International_Bank_Account_Number
	
	var isValidBBAN = exports.isValidBBAN = function isValidBBAN(iban) {
	  if (typeof iban !== 'string') {
	    return false;
	  }
	
	  var spec = void 0;
	  var compactIBAN = (0, _helpers.compact)(iban);
	
	  try {
	    spec = (0, _countrySpec2.default)(compactIBAN);
	  } catch (error) {
	    return false;
	  }
	
	  // Remove country code and check digits
	  var bban = compactIBAN.slice(4);
	
	  return bban.length === spec.len - 4 && (0, _helpers.bbanRegexp)(spec.bban).test(bban);
	};
	
	/**
	 * @name formatByGroups
	 * @type {function}
	 *
	 * @description
	 * Splits the string up with spaces by groups of 4.
	 * "IE47FNLL45049097007367" => "IE47 FNLL 4504 9097 0073 67"
	 *
	 * @param str {string}
	 * @param symbol {string}
	 * @param groupLen {number}
	 * @return {string}
	 */
	var formatByGroups = exports.formatByGroups = function formatByGroups(str, symbol, groupLen) {
	  return (0, _helpers.explodeString)(str, symbol, groupLen);
	};

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Collection of countries that are compliant with the ISO 13616 standard.
	 * BBAN field is the representation of the format accepted by that country.
	 *
	 * @inner
	 * @type {object}
	 */
	var countries = {
	  AL: {
	    name: 'Albania',
	    len: 28,
	    bban: '08N16C',
	    example: 'AL47212110090000000235698741'
	  },
	  AD: {
	    name: 'Andorra',
	    len: 24,
	    bban: '08N12C',
	    example: 'AD1200012030200359100100'
	  },
	  AT: {
	    name: 'Austria',
	    len: 20,
	    bban: '16N',
	    example: 'AT611904300234573201'
	  },
	  AZ: {
	    name: 'Azerbaijan',
	    len: 28,
	    bban: '04C20N',
	    example: 'AZ21NABZ00000000137010001944'
	  },
	  BH: {
	    name: 'Bahrain',
	    len: 22,
	    bban: '04A14C',
	    example: 'BH29BMAG1299123456BH00'
	  },
	  BE: {
	    name: 'Belgium',
	    len: 16,
	    bban: '12N',
	    example: 'BE68539007547034'
	  },
	  BA: {
	    name: 'Bosnia and Herzegovina',
	    len: 20,
	    bban: '16N',
	    example: 'BA391290079401028494'
	  },
	  BR: {
	    name: 'Brazil',
	    len: 29,
	    bban: '23N01A01C',
	    example: 'BR9700360305000010009795493P1'
	  },
	  BG: {
	    name: 'Bulgaria',
	    len: 22,
	    bban: '04A06N08C',
	    example: 'BG80BNBG96611020345678'
	  },
	  CR: {
	    name: 'Costa Rica',
	    len: 21,
	    bban: '17N',
	    example: 'CR0515202001026284066'
	  },
	  HR: {
	    name: 'Croatia',
	    len: 21,
	    bban: '17N',
	    example: 'HR1210010051863000160'
	  },
	  CY: {
	    name: 'Cyprus',
	    len: 28,
	    bban: '08N16C',
	    example: 'CY17002001280000001200527600'
	  },
	  CZ: {
	    name: 'Czech Republic',
	    len: 24,
	    bban: '20N',
	    example: 'CZ6508000000192000145399'
	  },
	  DK: {
	    name: 'Denmark',
	    len: 18,
	    bban: '14N',
	    example: 'DK5000400440116243'
	  },
	  DO: {
	    name: 'Dominican Republic',
	    len: 28,
	    bban: '04A20N',
	    example: 'DO28BAGR00000001212453611324'
	  },
	  TL: {
	    name: 'East Timor',
	    len: 23,
	    bban: '19N',
	    example: 'TL380080012345678910157'
	  },
	  EE: {
	    name: 'Estonia',
	    len: 20,
	    bban: '16N',
	    example: 'EE382200221020145685'
	  },
	  FO: {
	    name: 'Faroe Islands',
	    len: 18,
	    bban: '14N',
	    example: 'FO1464600009692713'
	  },
	  FI: {
	    name: 'Finland',
	    len: 18,
	    bban: '14N',
	    example: 'FI2112345600000785'
	  },
	  FR: {
	    name: 'France',
	    len: 27,
	    bban: '10N11C02N',
	    example: 'FR7630007000110009970004942'
	  },
	  GE: {
	    name: 'Georgia',
	    len: 22,
	    bban: '02C16N',
	    example: 'GE29NB0000000101904917'
	  },
	  DE: {
	    name: 'Germany',
	    len: 22,
	    bban: '18N',
	    example: 'DE89370400440532013000'
	  },
	  GI: {
	    name: 'Gibraltar',
	    len: 23,
	    bban: '04A15C',
	    example: 'GI75NWBK000000007099453'
	  },
	  GR: {
	    name: 'Greece',
	    len: 27,
	    bban: '07N16C',
	    example: 'GR1601101250000000012300695'
	  },
	  GL: {
	    name: 'Greenland',
	    len: 18,
	    bban: '14N',
	    example: 'GL8964710001000206'
	  },
	  GT: {
	    name: 'Guatemala',
	    len: 28,
	    bban: '04C20C',
	    example: 'GT82TRAJ01020000001210029690'
	  },
	  HU: {
	    name: 'Hungary',
	    len: 28,
	    bban: '24N',
	    example: 'HU42117730161111101800000000'
	  },
	  IS: {
	    name: 'Iceland',
	    len: 26,
	    bban: '22N',
	    example: 'IS140159260076545510730339'
	  },
	  IE: {
	    name: 'Ireland',
	    len: 22,
	    bban: '04C14N',
	    example: 'IE29AIBK93115212345678'
	  },
	  IL: {
	    name: 'Israel',
	    len: 23,
	    bban: '19N',
	    example: 'IL620108000000099999999'
	  },
	  IT: {
	    name: 'Italy',
	    len: 27,
	    bban: '01A10N12C',
	    example: 'IT60X0542811101000000123456'
	  },
	  JO: {
	    name: 'Jordan',
	    len: 30,
	    bban: '04A22N',
	    example: 'JO94CBJO0010000000000131000302'
	  },
	  KZ: {
	    name: 'Kazakhstan',
	    len: 20,
	    bban: '03N13C',
	    example: 'KZ176010251000042993'
	  },
	  XK: {
	    name: 'Kosovo',
	    len: 20,
	    bban: '04N10N02N',
	    example: 'XK051212012345678906'
	  },
	  KW: {
	    name: 'Kuwait',
	    len: 30,
	    bban: '04A22C',
	    example: 'KW74NBOK0000000000001000372151'
	  },
	  LV: {
	    name: 'Latvia',
	    len: 21,
	    bban: '04A13C',
	    example: 'LV80BANK0000435195001'
	  },
	  LB: {
	    name: 'Lebanon',
	    len: 28,
	    bban: '04N20C',
	    example: 'LB30099900000001001925579115'
	  },
	  LI: {
	    name: 'Liechtenstein',
	    len: 21,
	    bban: '05N12C',
	    example: 'LI21088100002324013AA'
	  },
	  LT: {
	    name: 'Lithuania',
	    len: 20,
	    bban: '16N',
	    example: 'LT121000011101001000'
	  },
	  LU: {
	    name: 'Luxembourg',
	    len: 20,
	    bban: '03N13C',
	    example: 'LU280019400644750000'
	  },
	  MK: {
	    name: 'Macedonia',
	    len: 19,
	    bban: '03N10C02N',
	    example: 'MK07300000000042425'
	  },
	  MT: {
	    name: 'Malta',
	    len: 31,
	    bban: '04A05N18C',
	    example: 'MT84MALT011000012345MTLCAST001S'
	  },
	  MR: {
	    name: 'Mauritania',
	    len: 27,
	    bban: '23N',
	    example: 'MR1300012000010000002037372'
	  },
	  MU: {
	    name: 'Mauritius',
	    len: 30,
	    bban: '04A19N03A',
	    example: 'MU17BOMM0101101030300200000MUR'
	  },
	  MC: {
	    name: 'Monaco',
	    len: 27,
	    bban: '10N11C02N',
	    example: 'MC5813488000010051108001292'
	  },
	  MD: {
	    name: 'Moldova',
	    len: 24,
	    bban: '02C18C',
	    example: 'MD24AG000225100013104168'
	  },
	  ME: {
	    name: 'Montenegro',
	    len: 22,
	    bban: '18N',
	    example: 'ME25505000012345678951'
	  },
	  NL: {
	    name: 'Netherlands',
	    len: 18,
	    bban: '04A10N',
	    example: 'NL91ABNA0417164300'
	  },
	  NO: {
	    name: 'Norway',
	    len: 15,
	    bban: '11N',
	    example: 'NO9386011117947'
	  },
	  PK: {
	    name: 'Pakistan',
	    len: 24,
	    bban: '04C16N',
	    example: 'PK24SCBL0000001171495101'
	  },
	  PS: {
	    name: 'Palestinian territories',
	    len: 29,
	    bban: '04C21N',
	    example: 'PS92PALS000000000400123456702'
	  },
	  PL: {
	    name: 'Poland',
	    len: 28,
	    bban: '24N',
	    example: 'PL27114020040000300201355387'
	  },
	  PT: {
	    name: 'Portugal',
	    len: 25,
	    bban: '21N',
	    example: 'PT50000200000163099310355'
	  },
	  QA: {
	    name: 'Qatar',
	    len: 29,
	    bban: '04A21C',
	    example: 'QA58DOHB00001234567890ABCDEFG'
	  },
	  RO: {
	    name: 'Romania',
	    len: 24,
	    bban: '04A16C',
	    example: 'RO49AAAA1B31007593840000'
	  },
	  SM: {
	    name: 'San Marino',
	    len: 27,
	    bban: '01A10N12C',
	    example: 'SM86U0322509800000000270100'
	  },
	  SA: {
	    name: 'Saudi Arabia',
	    len: 24,
	    bban: '02N18C',
	    example: 'SA0380000000608010167519'
	  },
	  RS: {
	    name: 'Serbia',
	    len: 22,
	    bban: '18N',
	    example: 'RS35260005601001611379'
	  },
	  SK: {
	    name: 'Slovakia',
	    len: 24,
	    bban: '20N',
	    example: 'SK3112000000198742637541'
	  },
	  SI: {
	    name: 'Slovenia',
	    len: 19,
	    bban: '15N',
	    example: 'SI56191000000123438'
	  },
	  ES: {
	    name: 'Spain',
	    len: 24,
	    bban: '20N',
	    example: 'ES9121000418450200051332'
	  },
	  SE: {
	    name: 'Sweden',
	    len: 24,
	    bban: '20N',
	    example: 'SE3550000000054910000003'
	  },
	  CH: {
	    name: 'Switzerland',
	    len: 21,
	    bban: '05N12C',
	    example: 'CH9300762011623852957'
	  },
	  TN: {
	    name: 'Tunisia',
	    len: 24,
	    bban: '20N',
	    example: 'TN5914207207100707129648'
	  },
	  TR: {
	    name: 'Turkey',
	    len: 26,
	    bban: '05N17C',
	    example: 'TR330006100519786457841326'
	  },
	  AE: {
	    name: 'United Arab Emirates',
	    len: 23,
	    bban: '03N16N',
	    example: 'AE260211000000230064016'
	  },
	  GB: {
	    name: 'United Kingdom',
	    len: 22,
	    bban: '04A14N',
	    example: 'GB29NWBK60161331926819'
	  },
	  VG: {
	    name: 'Virgin Islands, British',
	    len: 24,
	    bban: '04C16N',
	    example: 'VG96VPVG0000012345678901'
	  },
	  DZ: {
	    name: 'Algeria',
	    len: 24,
	    bban: '20N',
	    example: 'DZ4000400174401001050486'
	  },
	  AO: {
	    name: 'Angola',
	    len: 25,
	    bban: '21N',
	    example: 'AO06000600000100037131174'
	  },
	  BJ: {
	    name: 'Benin',
	    len: 28,
	    bban: '01A23N',
	    example: 'BJ11B00610100400271101192591'
	  },
	  BF: {
	    name: 'Burkina Faso',
	    len: 27,
	    bban: '23N',
	    example: 'BF1030134020015400945000643'
	  },
	  BI: {
	    name: 'Burundi',
	    len: 16,
	    bban: '12N',
	    example: 'BI43201011067444'
	  },
	  CM: {
	    name: 'Cameroon',
	    len: 27,
	    bban: '23N',
	    example: 'CM2110003001000500000605306'
	  },
	  CV: {
	    name: 'Cape Verde',
	    len: 25,
	    bban: '21N',
	    example: 'CV64000300004547069110176'
	  },
	  IR: {
	    name: 'Iran',
	    len: 26,
	    bban: '22N',
	    example: 'IR580540105180021273113007'
	  },
	  CI: {
	    name: 'Ivory Coast',
	    len: 28,
	    bban: '01A23N',
	    example: 'CI05A00060174100178530011852'
	  },
	  MG: {
	    name: 'Madagascar',
	    len: 27,
	    bban: '23N',
	    example: 'MG4600005030010101914016056'
	  },
	  ML: {
	    name: 'Mali',
	    len: 28,
	    bban: '01A23N',
	    example: 'ML03D00890170001002120000447'
	  },
	  MZ: {
	    name: 'Mozambique',
	    len: 25,
	    bban: '21N',
	    example: 'MZ59000100000011834194157'
	  },
	  SN: {
	    name: 'Senegal',
	    len: 28,
	    bban: '01A23N',
	    example: 'SN12K00100152000025690007542'
	  },
	  UA: {
	    name: 'Ukraine',
	    len: 29,
	    bban: '06N19C',
	    example: 'UA573543470006762462054925026'
	  },
	  CG: {
	    name: 'Congo',
	    len: 27,
	    bban: '23C',
	    example: 'CG5230011000202151234567890'
	  },
	  EG: {
	    name: 'Egypt',
	    len: 27,
	    bban: '23C',
	    example: 'EG1100006001880800100014553'
	  },
	  GA: {
	    name: 'Gabon',
	    len: 27,
	    bban: '23C',
	    example: 'GA2140002000055602673300064'
	  }
	};
	
	/**
	 * Given an iban returns that country specification
	 *
	 * @type {function}
	 * @inner
	 * @throws {Error} If Country code is not defined
	 * @param {string} iban A valid IBAN number
	 * @return {object} Country specification
	 */
	
	exports.default = function (iban) {
	  var countryCode = iban.slice(0, 2);
	
	  if (!{}.hasOwnProperty.call(countries, countryCode)) {
	    throw new Error('Country code ' + countryCode + ' is not supported');
	  }
	
	  return countries[countryCode];
	};

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var A = 'A'.charCodeAt(0);
	var Z = 'Z'.charCodeAt(0);
	
	var PATTERNS = {
	  A: 'A-Z',
	  N: '0-9',
	  C: '0-9A-Z'
	};
	
	// Stores bban validation regular expressions
	var cachedBbanRegexp = {};
	
	// Generates BBAN format as a regular expression and cache it
	var prepareBbanRegexp = function prepareBbanRegexp(bbanFormat) {
	  var pattern = bbanFormat.match(/[0-9]{2}[ANC]/g).reduce(function (prevPattern, block) {
	    var quantity = parseInt(block.slice(0, 2), 10);
	    var code = block[2];
	    return prevPattern + '[' + PATTERNS[code] + ']{' + quantity + '}';
	  }, '');
	  cachedBbanRegexp[bbanFormat] = new RegExp(pattern);
	  return cachedBbanRegexp[bbanFormat];
	};
	
	// Move the four initial characters to the end of the string
	var rearrangeIban = function rearrangeIban(iban) {
	  return '' + iban.slice(4) + iban.slice(0, 4);
	};
	
	/**
	 * Removes spaces
	 *
	 * @name  compact
	 * @inner
	 * @param  {string} str A given string
	 * @return {string}     Compact string
	 */
	var compact = exports.compact = function compact(str) {
	  return str.replace(/\s+/g, '');
	};
	
	/**
	 * Generates a regular expression from encoded representation
	 * It is grouped in blocks of 3 characters, first 2 represents the number
	 * and the last character represents the type of character.
	 * * A = Upper case alpha characters [A-Z]
	 * * N = Numeric characters [0-9]
	 * * C = Mixed case alphanumeric characters [0-9a-zA-Z]
	 *
	 * @name bbanRegexp
	 * @inner
	 * @param  {string} bbanFormat Encoded regular expression
	 * @return {object}            Resulting regular expression
	 */
	var bbanRegexp = exports.bbanRegexp = function bbanRegexp(bbanFormat) {
	  return cachedBbanRegexp[bbanFormat] || prepareBbanRegexp(bbanFormat);
	};
	
	/**
	 * Replace each letter in the string with two digits,
	 * thereby expanding the string, where A = 10, B = 11, ..., Z = 35
	 *
	 * @name convertIban
	 * @inner
	 * @param {string} iban IBAN number
	 * @return {string} Number representation of the IBAN
	 */
	var convertIban = exports.convertIban = function convertIban(iban) {
	  return rearrangeIban(iban).split('').reduce(function (result, char) {
	    var code = char.charCodeAt(0);
	    var num = void 0;
	    if (code >= A && code <= Z) {
	      num = String(code - A + 10);
	    } else {
	      num = char;
	    }
	    return '' + result + num;
	  }, '');
	};
	
	/**
	 * @name alreadyExploded
	 * @type {function}
	 * @inner
	 *
	 * @description
	 * Checks if string is already split up
	 *
	 * @param str
	 * @param symbol {string}
	 * @return {boolean}
	 */
	var alreadyExploded = function alreadyExploded(str, symbol) {
	  return str && str.split(symbol).length > 1;
	};
	
	/**
	 * @name explodeString
	 * @type {function}
	 *
	 * @description
	 * Splits the string up with spaces (or other symbol)
	 * by groups of 4 (or other number).
	 *
	 * @param str {string}
	 * @param symbol {string}
	 * @param groupLen {number}
	 * @return {string}
	 */
	var explodeString = exports.explodeString = function explodeString(str) {
	  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
	  var groupLen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
	
	  if (!str || alreadyExploded(str, symbol)) return str;
	
	  var groups = Math.ceil(str.length / groupLen);
	  var chunks = [];
	
	  for (var i = 0; i < groups; i++) {
	    chunks.push(str.substr(groupLen * i, groupLen));
	  }
	
	  return chunks.join(symbol);
	};

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * Calculates remainder for numbers bigger than 2^53 - 1,
	 * not supported in JavaScript.
	 *
	 * @type {function}
	 * @inner
	 * @param  {string} dividend The dividend
	 * @param  {number} divisor  The divisor
	 * @return {number}          The remainder
	 */
	exports.default = function (dividend, divisor) {
	  if (dividend.length < 10) {
	    return parseInt(dividend, 10) % divisor;
	  }
	
	  var D = dividend.slice(9);
	  var N = dividend.slice(0, 9);
	  var remainder = parseInt(N, 10) % divisor;
	
	  while (D.length > 7) {
	    N = String(remainder) + D.slice(0, 7);
	    remainder = parseInt(N, 10) % divisor;
	    D = D.slice(7);
	  }
	
	  if (D.length) {
	    N = String(remainder) + D;
	  }
	
	  return parseInt(N, 10) % divisor;
	};

/***/ })

/******/ })
});
;
//# sourceMappingURL=lib-bb-iban.js.map