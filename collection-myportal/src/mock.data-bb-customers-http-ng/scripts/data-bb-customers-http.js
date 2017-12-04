/* eslint-disable */
export default (conf) => (Promise, bbStorage, serializeParams) => {
  // Base param constants
  const baseUri = conf.baseUri || '';

  const version = 'v1';

  const schemas = {};

  const STORAGE_KEY = 'MOCK_STATE_customersDataModuleKey';
  let state = {
  "/{version}/customers": [
    {
      "id": "5849736c0270436610a94fc1",
      "role": "customer",
      "finantialData": {
        "balance": 226065.69,
        "currency": "EUR",
        "sharesStock": [
          {
            "id": "5849736c2e79f97415bb3f67",
            "company": "Dragbot",
            "investedAmount": 1065.88,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.707Z",
            "returnPercentage": -0.5
          },
          {
            "id": "5849736cbc24a2c882c21ca9",
            "company": "Singavera",
            "investedAmount": 2795.46,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.707Z",
            "returnPercentage": 1.16
          }
        ]
      },
      "personalData": {
        "firstname": "Cline",
        "surname": "Glass",
        "fullname": "Cline Glass",
        "gender": "male",
        "email": "clineglass@singavera.com"
      }
    },
    {
      "id": "5849736c3aed0212c495b2b1",
      "role": "customer",
      "finantialData": {
        "balance": 150677.82,
        "currency": "EUR",
        "sharesStock": [
          {
            "id": "5849736c14d4af8c0061eafe",
            "company": "Imperium",
            "investedAmount": 6156.84,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.708Z",
            "returnPercentage": -0.31
          }
        ]
      },
      "personalData": {
        "firstname": "Shawn",
        "surname": "Cooley",
        "fullname": "Shawn Cooley",
        "gender": "female",
        "email": "shawncooley@imperium.com"
      }
    },
    {
      "id": "5849736c532de1b6833a2e44",
      "role": "customer",
      "finantialData": {
        "balance": 195207.66,
        "currency": "EUR",
        "sharesStock": [
          {
            "id": "5849736cbb3458b1aa3839fd",
            "company": "Aquoavo",
            "investedAmount": 5219.35,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.708Z",
            "returnPercentage": -0.84
          },
          {
            "id": "5849736c01a421b3f35eae01",
            "company": "Zentry",
            "investedAmount": 1639.35,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.708Z",
            "returnPercentage": 0.28
          }
        ]
      },
      "personalData": {
        "firstname": "Miriam",
        "surname": "Sims",
        "fullname": "Miriam Sims",
        "gender": "female",
        "email": "miriamsims@zentry.com"
      }
    },
    {
      "id": "5849736c3c39c2eecc6e44b7",
      "role": "customer",
      "finantialData": {
        "balance": 316378.15,
        "currency": "EUR",
        "sharesStock": [
          {
            "id": "5849736c6898092f73d52ebd",
            "company": "Nexgene",
            "investedAmount": 2479.14,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.708Z",
            "returnPercentage": 0.38
          }
        ]
      },
      "personalData": {
        "firstname": "Concepcion",
        "surname": "Underwood",
        "fullname": "Concepcion Underwood",
        "gender": "female",
        "email": "concepcionunderwood@nexgene.com"
      }
    },
    {
      "id": "5849736c1d7608bafd03c6a5",
      "role": "customer",
      "finantialData": {
        "balance": 453591.13,
        "currency": "EUR",
        "sharesStock": [
          {
            "id": "5849736cde22f8e18b96f0f7",
            "company": "Miraclis",
            "investedAmount": 6545.49,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.708Z",
            "returnPercentage": 0.55
          },
          {
            "id": "5849736cbf9e89ea57781578",
            "company": "Comtrak",
            "investedAmount": 1923.63,
            "currency": "EUR",
            "expires": "2016-12-08T14:51:24.708Z",
            "returnPercentage": -0.01
          }
        ]
      },
      "personalData": {
        "firstname": "Wynn",
        "surname": "Battle",
        "fullname": "Wynn Battle",
        "gender": "male",
        "email": "wynnbattle@comtrak.com"
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
  
    getCustomers: [
    
      {"status":200,"data":[{"id":"5849736c0270436610a94fc1","role":"customer","finantialData":{"balance":226065.69,"currency":"EUR","sharesStock":[{"id":"5849736c2e79f97415bb3f67","company":"Dragbot","investedAmount":1065.88,"currency":"EUR","expires":"2016-12-08T14:51:24.707Z","returnPercentage":-0.5},{"id":"5849736cbc24a2c882c21ca9","company":"Singavera","investedAmount":2795.46,"currency":"EUR","expires":"2016-12-08T14:51:24.707Z","returnPercentage":1.16}]},"personalData":{"firstname":"Cline","surname":"Glass","fullname":"Cline Glass","gender":"male","email":"clineglass@singavera.com"}},{"id":"5849736c3aed0212c495b2b1","role":"customer","finantialData":{"balance":150677.82,"currency":"EUR","sharesStock":[{"id":"5849736c14d4af8c0061eafe","company":"Imperium","investedAmount":6156.84,"currency":"EUR","expires":"2016-12-08T14:51:24.708Z","returnPercentage":-0.31}]},"personalData":{"firstname":"Shawn","surname":"Cooley","fullname":"Shawn Cooley","gender":"female","email":"shawncooley@imperium.com"}},{"id":"5849736c532de1b6833a2e44","role":"customer","finantialData":{"balance":195207.66,"currency":"EUR","sharesStock":[{"id":"5849736cbb3458b1aa3839fd","company":"Aquoavo","investedAmount":5219.35,"currency":"EUR","expires":"2016-12-08T14:51:24.708Z","returnPercentage":-0.84},{"id":"5849736c01a421b3f35eae01","company":"Zentry","investedAmount":1639.35,"currency":"EUR","expires":"2016-12-08T14:51:24.708Z","returnPercentage":0.28}]},"personalData":{"firstname":"Miriam","surname":"Sims","fullname":"Miriam Sims","gender":"female","email":"miriamsims@zentry.com"}},{"id":"5849736c3c39c2eecc6e44b7","role":"customer","finantialData":{"balance":316378.15,"currency":"EUR","sharesStock":[{"id":"5849736c6898092f73d52ebd","company":"Nexgene","investedAmount":2479.14,"currency":"EUR","expires":"2016-12-08T14:51:24.708Z","returnPercentage":0.38}]},"personalData":{"firstname":"Concepcion","surname":"Underwood","fullname":"Concepcion Underwood","gender":"female","email":"concepcionunderwood@nexgene.com"}},{"id":"5849736c1d7608bafd03c6a5","role":"customer","finantialData":{"balance":453591.13,"currency":"EUR","sharesStock":[{"id":"5849736cde22f8e18b96f0f7","company":"Miraclis","investedAmount":6545.49,"currency":"EUR","expires":"2016-12-08T14:51:24.708Z","returnPercentage":0.55},{"id":"5849736cbf9e89ea57781578","company":"Comtrak","investedAmount":1923.63,"currency":"EUR","expires":"2016-12-08T14:51:24.708Z","returnPercentage":-0.01}]},"personalData":{"firstname":"Wynn","surname":"Battle","fullname":"Wynn Battle","gender":"male","email":"wynnbattle@comtrak.com"}}]},
    
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

    getCustomers: [],

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


  function getCustomers(params, headers) {
    const url = `${baseUri}/${version}/customers`;
    const mocking = {
      method: 'GET',
      url,
    
      params,
    
      headers,
    };

    console.log('Mocking request with', mocking);
    return Promise.resolve(getResponse('getCustomers', 200))
      .then(pluginMocks('getCustomers', [params, headers], '/{version}/customers'))
      
      .catch(handleError('getCustomers'));
  }






  return ({

    getCustomers,

    schemas,
  });
};
