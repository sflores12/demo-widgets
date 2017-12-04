/* eslint-disable */
export default (conf) => (Promise, bbStorage, serializeParams) => {
  // Base param constants
  const baseUri = conf.baseUri || '';

  const version = 'v1';

  const schemas = {};

  const STORAGE_KEY = 'MOCK_STATE_advisorsDataModuleKey';
  let state = {
  "/{version}/advisors": [
    {
      "id": "5849736ccfe74afd819a09cf",
      "role": "advisor",
      "personalData": {
        "firstname": "Savannah",
        "surname": "Briggs",
        "fullname": "Savannah Briggs",
        "gender": "female",
        "email": "savannahbriggs@singavera.com"
      }
    },
    {
      "id": "5849736cd07a7076044609a6",
      "role": "advisor",
      "personalData": {
        "firstname": "Franks",
        "surname": "Frank",
        "fullname": "Franks Frank",
        "gender": "male",
        "email": "franksfrank@singavera.com"
      }
    },
    {
      "id": "5849736cfddf84a6e3c5dbb2",
      "role": "advisor",
      "personalData": {
        "firstname": "Crystal",
        "surname": "Mccoy",
        "fullname": "Crystal Mccoy",
        "gender": "female",
        "email": "crystalmccoy@imperium.com"
      }
    },
    {
      "id": "5849736c5ee66a3551043314",
      "role": "advisor",
      "personalData": {
        "firstname": "Drake",
        "surname": "Whitley",
        "fullname": "Drake Whitley",
        "gender": "male",
        "email": "drakewhitley@zentry.com"
      }
    },
    {
      "id": "5849736ca941aaccb552b255",
      "role": "advisor",
      "personalData": {
        "firstname": "Whitfield",
        "surname": "Ballard",
        "fullname": "Whitfield Ballard",
        "gender": "male",
        "email": "whitfieldballard@zentry.com"
      }
    },
    {
      "id": "5849736cf88474ee35a68031",
      "role": "advisor",
      "personalData": {
        "firstname": "Espinoza",
        "surname": "Fleming",
        "fullname": "Espinoza Fleming",
        "gender": "male",
        "email": "espinozafleming@comtrak.com"
      }
    }
  ]
};

  bbStorage.subscribe(STORAGE_KEY, (newState) => {
    state = newState;
  });

  const persistState = (newState) => {
    bbStorage.setItem(STORAGE_KEY, newState);
  };

  const responses = {
  
    getAdvisors: [
    
      {"status":200,"data":[{"id":"5849736ccfe74afd819a09cf","role":"advisor","personalData":{"firstname":"Savannah","surname":"Briggs","fullname":"Savannah Briggs","gender":"female","email":"savannahbriggs@singavera.com"}},{"id":"5849736cd07a7076044609a6","role":"advisor","personalData":{"firstname":"Franks","surname":"Frank","fullname":"Franks Frank","gender":"male","email":"franksfrank@singavera.com"}},{"id":"5849736cfddf84a6e3c5dbb2","role":"advisor","personalData":{"firstname":"Crystal","surname":"Mccoy","fullname":"Crystal Mccoy","gender":"female","email":"crystalmccoy@imperium.com"}},{"id":"5849736c5ee66a3551043314","role":"advisor","personalData":{"firstname":"Drake","surname":"Whitley","fullname":"Drake Whitley","gender":"male","email":"drakewhitley@zentry.com"}},{"id":"5849736ca941aaccb552b255","role":"advisor","personalData":{"firstname":"Whitfield","surname":"Ballard","fullname":"Whitfield Ballard","gender":"male","email":"whitfieldballard@zentry.com"}},{"id":"5849736cf88474ee35a68031","role":"advisor","personalData":{"firstname":"Espinoza","surname":"Fleming","fullname":"Espinoza Fleming","gender":"male","email":"espinozafleming@comtrak.com"}}]},
    
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

    getAdvisors: [],

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


  function getAdvisors(params, headers) {
    const url = `${baseUri}/${version}/advisors`;
    const mocking = {
      method: 'GET',
      url,
    
      params,
    
      headers,
    };

    console.log('Mocking request with', mocking);
    return Promise.resolve(getResponse('getAdvisors', 200))
      .then(pluginMocks('getAdvisors', [params, headers], '/{version}/advisors'))
      
      .catch(handleError('getAdvisors'));
  }






  return ({

    getAdvisors,

    schemas,
  });
};
