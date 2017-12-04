/* eslint-disable */
export default (conf) => (Promise, bbStorage, serializeParams) => {
  // Base param constants
  const baseUri = conf.baseUri || '';

  const version = 'v1';

  const schemas = {};

  const STORAGE_KEY = 'MOCK_STATE_backBaseDemoLoginDataModuleKey';
  let state = {};

  bbStorage.subscribe(STORAGE_KEY, (newState) => {
    state = newState;
  });

  const persistState = (newState) => {
    bbStorage.setItem(STORAGE_KEY, newState);
  };

  const responses = {
  
    getLogin: [
    
      {"status":200,"data":{"code":"200","redirectTo":"/home","data":{"userData":{"contrato":"84003256","ultimoAcceso":"2017-10-12T20:35:55.498Z","nombreCliente":"JUAN PEREZ LOPEZ"}}}},
    
    ],
  
    postLoginRecord: [
    
      {"status":200,"data":{"code":"200","redirectTo":"/home","data":{"userData":{"contrato":"84003256","ultimoAcceso":"2017-10-12T20:35:55.498Z","nombreCliente":"JUAN PEREZ LOPEZ"}}}},
    
    ],
  
    postLogoutRecord: [
    
      {"status":200,"data":{"code":"200","redirectTo":"/login"}},
    
    ],
  
    getAccounts: [
    
      {"status":200,"data":{"code":"200","data":[{"alias":"November Rain","numero":12563498,"monto":127283},{"alias":"Silent Hill INC","numero":12560973,"monto":12722},{"alias":"Warriors Invetigation Foundation","numero":12343490,"monto":983900},{"alias":"Fukushima Laboratories","numero":28282890,"monto":673689}]}},
    
    ],
  
    getAccountsRecord: [
    
      {"status":200,"data":{"alias":"November Rain","numero":12563498,"monto":127283}},
    
    ],
  
  };

  const DEFAULT_MOCK = {
    data: {},
    status: 200,
    headers: function(header) {
      return header === 'content-type' && this.data ? 'application/json' : null;
    },
    config: {},
    statusText: 'OK',
  }

  const getResponse = (method, status) => {
    const response = (responses[method] || []).find(response => response.status === status);
    return Object.assign({}, DEFAULT_MOCK, response);
  };

  const PLUGINS_ALL = '__all__';

  const plugins = {
    [PLUGINS_ALL]: [],

    getLogin: [],

    postLoginRecord: [],

    postLogoutRecord: [],

    getAccounts: [],

    getAccountsRecord: [],

  };



  const pluginMocks = (method, args, uri) => {
    const methodPlugins = plugins[method] || [];
    const commonPlugins = plugins[PLUGINS_ALL] || [];
    const allPlugins = methodPlugins.concat(commonPlugins);

    return (initialResult) => {
      return allPlugins.reduce(
        (result, plugin) => result.then(nextResult => plugin(nextResult, args, uri, method)),
        Promise.resolve(initialResult)
      );
    };
  };

  const handleError = (method) => (error) => {
    // If error object is one of the error responses, assume it returned intentionally from one of the plugins
    const isIntendedError = error && error.status && error.status >= 400;
    const response = isIntendedError ? error : getResponse(method, 500);

    console.log(`${method} request rejected because of `, error);
    return Promise.reject(response);
  };


  function getLogin(params, headers) {
    const url = `${baseUri}${version}/login`;
    const mocking = {
      method: 'GET',
      url,
    
      params,
    
      headers,
    };

    console.log('Mocking request with', mocking);
    return Promise.resolve(getResponse('getLogin', 200))
      .then(pluginMocks('getLogin', [params, headers], '{version}/login'))
      
      .catch(handleError('getLogin'));
  }

  function postLoginRecord(data, headers) {
    const url = `${baseUri}${version}/login`;
    const mocking = {
      method: 'POST',
      url,
    
      data,
    
      headers,
    };

    console.log('Mocking request with', mocking);
    return Promise.resolve(getResponse('postLoginRecord', 200))
      .then(pluginMocks('postLoginRecord', [data, headers], '{version}/login'))
      
      .then((result) => {
        // Persist global state to storage, in case plugins changed it.
        persistState(state);
        return result;
      })
      
      .catch(handleError('postLoginRecord'));
  }

  function postLogoutRecord(data, headers) {
    const url = `${baseUri}${version}/logout`;
    const mocking = {
      method: 'POST',
      url,
    
      data,
    
      headers,
    };

    console.log('Mocking request with', mocking);
    return Promise.resolve(getResponse('postLogoutRecord', 200))
      .then(pluginMocks('postLogoutRecord', [data, headers], '{version}/logout'))
      
      .then((result) => {
        // Persist global state to storage, in case plugins changed it.
        persistState(state);
        return result;
      })
      
      .catch(handleError('postLogoutRecord'));
  }

  function getAccounts(params, headers) {
    const url = `${baseUri}${version}/accounts`;
    const mocking = {
      method: 'GET',
      url,
    
      params,
    
      headers,
    };

    console.log('Mocking request with', mocking);
    return Promise.resolve(getResponse('getAccounts', 200))
      .then(pluginMocks('getAccounts', [params, headers], '{version}/accounts'))
      
      .catch(handleError('getAccounts'));
  }

  function getAccountsRecord(accountId, params, headers) {
    const url = `${baseUri}${version}/accounts/${accountId}`;
    const mocking = {
      method: 'GET',
      url,
    
      params,
    
      headers,
    };

    console.log('Mocking request with', mocking);
    return Promise.resolve(getResponse('getAccountsRecord', 200))
      .then(pluginMocks('getAccountsRecord', [accountId, params, headers], '{version}/accounts/{accountId}'))
      
      .catch(handleError('getAccountsRecord'));
  }





  schemas.postLoginRecord = {"properties":{"user":{"type":"string","minLength":1,"maxLength":10,"required":true},"password":{"type":"string","minLength":8,"maxLength":8,"required":true}}};


  return ({

    getLogin,

    postLoginRecord,

    postLogoutRecord,

    getAccounts,

    getAccountsRecord,

    schemas,
  });
};
