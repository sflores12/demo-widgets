/* eslint-disable */
export default (conf) => (httpClient, serializeParams) => {
  // Base param constants
  const baseUri = conf.baseUri || '';

  const version = 'v1';


  /**
   * The root defined types from the RAML.
   * @private
   */
  const definedTypes = {};

  
  definedTypes['BackBaseDemoLoginData.User'] = {"properties":{"user":{"type":"string","minLength":1,"maxLength":10,"required":true},"password":{"type":"string","minLength":8,"maxLength":8,"required":true}}};
  
  definedTypes['BackBaseDemoLoginData.Account'] = {"properties":{"alias":{"type":"string","minLength":1,"maxLength":35,"required":true},"numero":{"type":"integer","minLength":8,"maxLength":8,"required":true},"monto":{"type":"integer","maxLength":20,"required":true}}};
  
  definedTypes['BackBaseDemoLoginData.AccountList'] = {"properties":{"code":{"type":"string","minLength":3,"maxLength":3,"required":true},"data":{"type":"array","items":{"properties":{"alias":{"type":"string","minLength":1,"maxLength":35,"required":true},"numero":{"type":"integer","minLength":8,"maxLength":8,"required":true},"monto":{"type":"integer","maxLength":20,"required":true}}},"required":false}}};
  
  definedTypes['BackBaseDemoLoginData.Response20X'] = {"properties":{"code":{"type":"string","minLength":3,"maxLength":3,"required":true},"redirectTo":{"type":"string","minLength":2,"maxLength":100,"required":true},"data":{"type":"object","properties":{},"required":false}}};
  
  definedTypes['BackBaseDemoLoginData.Response40X'] = {"properties":{"code":{"type":"string","minLength":3,"maxLength":3,"required":true},"message":{"type":"string","minLength":6,"maxLength":100,"required":true},"data":{"type":"object","properties":{},"required":false}}};
  
  definedTypes['BackBaseDemoLoginData.Response50X'] = {"properties":{"success":{"type":"string","enum":["true","false"],"required":true},"message":{"type":"string","minLength":6,"maxLength":100,"required":true},"data":{"type":"object","properties":{},"required":false}}};
  

  
  /**
   * @typedef BackBaseDemoLoginData.Account
   * @type {Object}
   * @property {String} alias
   * @property {Integer} numero
   * @property {Integer} monto
   * @property {?Object} additions Container object for custom API extensions
   */
  
  /**
   * @typedef BackBaseDemoLoginData.AccountList
   * @type {Object}
   * @property {String} code
   * @property {?Array.<BackBaseDemoLoginData.Account>} data
   * @property {?Object} additions Container object for custom API extensions
   */
  
  /**
   * @typedef BackBaseDemoLoginData.Response20X
   * @type {Object}
   * @property {String} code
   * @property {String} redirectTo
   * @property {?Object} data
   * @property {?Object} additions Container object for custom API extensions
   */
  
  /**
   * @typedef BackBaseDemoLoginData.Response40X
   * @type {Object}
   * @property {String} code
   * @property {String} message
   * @property {?Object} data
   * @property {?Object} additions Container object for custom API extensions
   */
  
  /**
   * @typedef BackBaseDemoLoginData.Response50X
   * @type {Object}
   * @property {String} success One of "true", "false"
   * @property {String} message
   * @property {?Object} data
   * @property {?Object} additions Container object for custom API extensions
   */
  
  /**
   * @typedef BackBaseDemoLoginData.User
   * @type {Object}
   * @property {String} user
   * @property {String} password
   * @property {?Object} additions Container object for custom API extensions
   */
  

  /*
   * @name parse
   * @type {Function}
   * @private
   * @description Should be overwritten by transformResponse on a project level
   */
  function parse(res) {
    return {
      data: res.data,
      headers: res.headers,
      status: res.status,
      statusText: res.statusText,
    };
  }

  
  /**
   * @name BackBaseDemoLoginData#getLogin
   * @type {Function}
   * @description Valida usuario y password.
   
   * @param {?Object} params Map of query parameters.
     
   
   * @param {?Object} headers Map of custom header attributes.
     
   
   * @returns {Promise.<Response>} Resolves data value as {@link BackBaseDemoLoginData.Response20X} on success 
   *
   * @example
   * backBaseDemoLoginData
   *  .getLogin(params, headers)
   *  .then(function(result){
   *    console.log('headers', result.headers)
   *    console.log('data', result.data);
   *  });
   */
  function getLogin(params, headers) {
    const url = `${baseUri}${version}/login`;

    return httpClient({
      method: 'GET',
      url,
      
      params: params || {},
      
      headers: headers || {},
    }).then(parse)
    .catch(err => { throw parse(err); });
  }
  
  /**
   * @name BackBaseDemoLoginData#postLoginRecord
   * @type {Function}
   * @description Valida usuario y password.
   
   * @param {BackBaseDemoLoginData.User} data Data to be sent as the request message data.
     
   
   * @param {?Object} headers Map of custom header attributes.
     
   
   * @returns {Promise.<Response>} Resolves data value as {@link BackBaseDemoLoginData.Response20X} on success 
   *
   * @example
   * backBaseDemoLoginData
   *  .postLoginRecord(data, headers)
   *  .then(function(result){
   *    console.log('headers', result.headers)
   *    console.log('data', result.data);
   *  });
   */
  function postLoginRecord(data, headers) {
    const url = `${baseUri}${version}/login`;

    return httpClient({
      method: 'POST',
      url,
      
      data: data || {},
      
      headers: headers || {},
    }).then(parse)
    .catch(err => { throw parse(err); });
  }
  
  /**
   * @name BackBaseDemoLoginData#postLogoutRecord
   * @type {Function}
   * @description post request
   
   * @param {?Object} data Data to be sent as the request message data.
     
   
   * @param {Object} headers Map of custom header attributes.
     
   * @param {string} headers.sessionID Token para identificar al usuario en la peticiones. Eg: 12decfr34e.
     
   
   * @returns {Promise.<Response>} Resolves data value as {@link BackBaseDemoLoginData.Response20X} on success 
   *
   * @example
   * backBaseDemoLoginData
   *  .postLogoutRecord(data, headers)
   *  .then(function(result){
   *    console.log('headers', result.headers)
   *    console.log('data', result.data);
   *  });
   */
  function postLogoutRecord(data, headers) {
    const url = `${baseUri}${version}/logout`;

    return httpClient({
      method: 'POST',
      url,
      
      data: data || {},
      
      headers: headers || {},
    }).then(parse)
    .catch(err => { throw parse(err); });
  }
  
  /**
   * @name BackBaseDemoLoginData#getAccounts
   * @type {Function}
   * @description obtener la lista de cuentas del usuario
   
   * @param {?Object} params Map of query parameters.
     
   
   * @param {Object} headers Map of custom header attributes.
     
   * @param {string} headers.sessionID Token para identificar al usuario en la peticiones. Eg: 12decfr34e.
     
   
   * @returns {Promise.<Response>} Resolves data value as {@link BackBaseDemoLoginData.AccountList} on success 
   *
   * @example
   * backBaseDemoLoginData
   *  .getAccounts(params, headers)
   *  .then(function(result){
   *    console.log('headers', result.headers)
   *    console.log('data', result.data);
   *  });
   */
  function getAccounts(params, headers) {
    const url = `${baseUri}${version}/accounts`;

    return httpClient({
      method: 'GET',
      url,
      
      params: params || {},
      
      headers: headers || {},
    }).then(parse)
    .catch(err => { throw parse(err); });
  }
  
  /**
   * @name BackBaseDemoLoginData#getAccountsRecord
   * @type {Function}
   * @description obtener una cuenta especifica del usuario
   
   * @param {string} accountId 
     
   
   * @param {?Object} params Map of query parameters.
     
   
   * @param {Object} headers Map of custom header attributes.
     
   * @param {string} headers.sessionID Token para identificar al usuario en la peticiones. Eg: 12decfr34e.
     
   
   * @returns {Promise.<Response>} Resolves data value as {@link BackBaseDemoLoginData.Account} on success 
   *
   * @example
   * backBaseDemoLoginData
   *  .getAccountsRecord(accountId, params, headers)
   *  .then(function(result){
   *    console.log('headers', result.headers)
   *    console.log('data', result.data);
   *  });
   */
  function getAccountsRecord(accountId, params, headers) {
    const url = `${baseUri}${version}/accounts/${accountId}`;

    return httpClient({
      method: 'GET',
      url,
      
      params: params || {},
      
      headers: headers || {},
    }).then(parse)
    .catch(err => { throw parse(err); });
  }
  

  

  
  /**
   * @description
   * Schema data. Keys of the object are names of the POST and PUT methods
   *
   * Note: The schema is not strictly a JSON schema. It is a whitelisted set of
   * keys for each object property. The keys that are exposed are meant for validation
   * purposes.
   *
   * The full list of *possible* keys for each property is:
   * type, minimum, maximum, minLength, maxLength, pattern, enum, format, default,
   * properties, items, minItems, maxItems, uniqueItems and required.
   *
   * See http://json-schema.org/latest/json-schema-validation.html for more details
   * on the meaning of these keys.
   *
   * The "required" array from JSON schema is tranformed into a "required" boolean
   * on each property. This is for ease of use.
   *
   * @name BackBaseDemoLoginData#schemas
   * @type {Object}
   */
  const schemas = {};

    
  /**
   * @description
   * An object describing the JSON schema for the postLoginRecord method
   *
   * @name BackBaseDemoLoginData#schemas.postLoginRecord
   * @type {Object}
   * @example
   * {
  "properties": {
    "user": {
      "type": "string",
      "minLength": 1,
      "maxLength": 10,
      "required": true
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 8,
      "required": true
    }
  }
}
   */
      
  schemas.postLoginRecord = definedTypes['BackBaseDemoLoginData.User'];
      

  /**
   * @typedef Response
   * @type {Object}
   * @property {Object} data See method descriptions for possible return types
   * @property {Function} headers Getter headers function
   * @property {Number} status HTTP status code of the response.
   * @property {String} statusText HTTP status text of the response.
   */

  return ({
    
    getLogin,
    
    postLoginRecord,
    
    postLogoutRecord,
    
    getAccounts,
    
    getAccountsRecord,
    
    
    schemas,
  });
};
