import Model from './turnovers';
import { bbStorageKeys, preferencesKeys, E_PARAMS } from './constants';

const turnoversRequest = {
  arrangementIds: ['1'],
  periodStartDate: 2,
  periodEndDate: 3,
  intervalDuration: 4,
};

const turnoversData = {
  headers: {},
  data: {
    "arrangementIds": ["1110afc5-4f7e-46c0-b0db-927138aa46c2"],
    "intervalDuration": "MONTH",
    "turnovers":[{
      "intervalStartDate": "2016-11-01T16:41:41.090Z",
      "creditAmount": {"amount": "0","currencyCode": "EUR"},
      "debitAmount": {"amount": "0","currencyCode": "EUR"},
      "balance": {"amount": "0","currencyCode": "EUR"}
    }, {
      "intervalStartDate": "2016-12-01T16:41:41.090Z",
      "creditAmount": {"amount": "90382.10","currencyCode": "EUR"},
      "debitAmount": {"amount": "300.65","currencyCode": "EUR"},
      "balance": {"amount": "90081.45","currencyCode": "EUR"}
    }, {
      "intervalStartDate": "2017-01-01T16:41:41.090Z",
      "creditAmount": {"amount": "503.20","currencyCode": "EUR"},
      "debitAmount": {"amount": "504.50","currencyCode": "EUR"},
      "balance": {"amount": "-1.30","currencyCode": "EUR"}
    }, {
      "intervalStartDate": "2017-02-01T16:41:41.090Z",
      "creditAmount": {"amount": "61000.70","currencyCode": "EUR"},
      "debitAmount": {"amount": "65535.50","currencyCode": "EUR"},
      "balance": {"amount": "-4534.80","currencyCode": "EUR"}
    }, {
      "intervalStartDate": "2017-03-01T16:41:41.090Z",
      "creditAmount": {"amount": "4005.50","currencyCode": "EUR"},
      "debitAmount": {"amount": "2999.99","currencyCode": "EUR"},
      "balance": {"amount": "1005.51","currencyCode": "EUR"}
    }, {
      "intervalStartDate": "2017-04-01T16:41:41.090Z",
      "creditAmount": {"amount": "3250","currencyCode": "EUR"},
      "debitAmount": {"amount": "3250.05","currencyCode": "EUR"},
      "balance": {"amount": "-0.05","currencyCode": "EUR"}
    }]
  },
};

const productsData = {
  headers: {},
  data: {
    "aggregatedBalance": {"value": "126692.78","currency": "EUR"},
    "currentAccounts": {
      "name": "Current Account",
      "products":[{
        "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
        "name": "Mr and Mrs J. Smith",
        "IBAN": "DE69759506070806035216",
      }],
      "aggregatedBalance": {"value": "1000.00","currency": "EUR"}
    },
    "savingsAccounts": {
      "name": "Savings Account",
      "products":[{
        "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
        "name": "Smith Bonus Savings",
        "IBAN": "NL81TRIO0212471066"
      }],
      "aggregatedBalance": {"value": "5500.00","currency": "EUR"}
    }
  }
};


const transactionsEndpointStub = {
  getTransactionsTurnovers: () => Promise.resolve(turnoversData)
};
const productEndpointStub = {
  getProductsummary: () => Promise.resolve(productsData)
};

const storageData = {
  selectedProducts: [
    "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
    "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
  ],
  products: {
    "currentAccounts": {"name": "Current Account","products":[{
        "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
        "name": "Mr and Mrs J. Smith",
        "alias": "Our joined account",
        "bookedBalance": "1000.00",
        "availableBalance": "1500.00",
        "creditLimit": "500.00",
        "currency": "EUR",
        "IBAN": "DE69759506070806035216",
        "BBAN": "FR596129172765GE6UQ2U8TYD56",
        "externalTransferAllowed":true,
        "urgentTransferAllowed":true,
        "crossCurrencyAllowed":true
      }],
      "aggregatedBalance": {"value": "3000.00","currency": "EUR"}},
    "savingsAccounts": {"name": "Savings Account","products":[{
      "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
      "name": "Smith Bonus Savings",
      "IBAN": "NL81TRIO0212471066"
    }],"aggregatedBalance": {"value": "0.00","currency": "EUR"}}
  }
};

const prefs = {
  fromStorage: false,
  isFirst: true
}

const bbStorage = {
  getItem: (key) => {
    let result = null;
    switch (key) {
      case bbStorageKeys.PRODUCT_SELECTED:
        result = storageData.selectedProducts[0];
        break;
      case bbStorageKeys.PRODUCTS_SELECTED:
        result = storageData.selectedProducts;
        break;
      case bbStorageKeys.PRODUCT_SUMMARY:
        result = storageData.products;
        break;
    }
    return Promise.resolve(result);
  },
  setItem: () => Promise.resolve(),
};

const widget = {
  getBooleanPreference: (key) => {
    let result = null;
    switch (key) {
      case preferencesKeys.IS_PRODUCTS_LIST_FROM_STORAGE:
        result = prefs.fromStorage;
        break;
      case preferencesKeys.IS_FIRST_PRODUCT_DEFAULT:
        result = prefs.isFirst;
        break;
    }
    return result;
  },
}

const getModel = () => Model(Promise, transactionsEndpointStub, productEndpointStub, bbStorage, widget);

describe('model-bb-turnovers-ng::model', function() {

  describe('validateTurnoversParameters()', function() {
    const model = getModel();

    it('returns parameters if all required properties are there', function(done) {
      model.validateTurnoversParameters(turnoversRequest)
      .then((response) => {
        expect(response).toBe(turnoversRequest);
      })
      .then(done);
    });

    it('returns error object if some of the required parameters are missing', function(done) {
      turnoversRequest.arrangementIds = null;
      model.validateTurnoversParameters(turnoversRequest)
      .catch((error) => {
        expect(error.code).toEqual(E_PARAMS);
      })
      .then(done);
    });

  });

  describe('loadTurnovers()', function() {
    const model = getModel();

    it('returns some data', function(done) {
      model.loadTurnovers()
      .then((response) => {
        expect(response).toBeDefined();
      })
      .then(done);
    });

    it('returns mocked data in the same format as it is in mocks', function(done) {
      model.loadTurnovers()
      .then((response) => {
        expect(response).toEqual(turnoversData.data);
      })
      .then(done);
    });

  });

  describe('getProducts()', function() {
    const model = getModel();

    it('loads data then it`s called', function(done) {
      model.getProducts()
        .then(function(response) {
          expect(response).toBeDefined();
        })
        .then(done);
    });

    it('returns mocked data in the same format as it is in mocks', function(done) {
      model.getProducts()
      .then((response) => {
        expect(response).toEqual(productsData.data);
      })
      .then(done);
    });

    it('returns data from storage if specified', function(done) {
      prefs.fromStorage = true;
      getModel().getProducts()
      .then((response) => {
        expect(response).toEqual(storageData.products);
        prefs.fromStorage = false;
      })
      .then(done);
    });
  });

  describe('getProductsArray()', function() {
    const model = getModel();

    it('loads data then it`s called', function(done) {
      model.getProductsArray()
        .then(function(response) {
          expect(response).toBeDefined();
        })
        .then(done);
    });

    it('returns products array', function(done) {
      model.getProductsArray()
      .then((response) => {
        expect(response instanceof Array).toBeTruthy();
        expect(response.length > 0).toBeTruthy()
      })
      .then(done);
    });

     it('returns data from storage if specified', function(done) {
      model.getProductsArray()
      .then((response) => {
        expect(response instanceof Array).toBeTruthy();
      })
      .then(done);
    });
  });


  describe('getSelectedProduct()', function() {
    const model = getModel();

    it('loads data then it`s called', function(done) {
      model.getSelectedProduct()
        .then(function(response) {
          expect(response).toBeDefined();
        })
        .then(done);
    });

    it('returns first one as a default if it`s configured so', function(done) {
      prefs.fromStorage = true;
      prefs.isFirst = true;
      getModel().getSelectedProduct()
        .then(function(response) {
          expect(response).toEqual(storageData.products.currentAccounts.products[0]);
          prefs.fromStorage = false;
          prefs.isFirst = false;
        })
        .then(done);
    });
  });

  describe('getSelectedProducts()', function() {
    const model = getModel();

    it('loads data then it`s called', function(done) {
      model.getSelectedProducts()
        .then(function(response) {
          expect(response).toBeDefined();
        })
        .then(done);
    });

    it('returns array of selected products', function(done) {
      getModel().getSelectedProducts()
        .then(function(response) {
          expect(response).toEqual([
            productsData.data.currentAccounts.products[0],
            productsData.data.savingsAccounts.products[0],
          ]);
        })
        .then(done);
    });
  });
});
