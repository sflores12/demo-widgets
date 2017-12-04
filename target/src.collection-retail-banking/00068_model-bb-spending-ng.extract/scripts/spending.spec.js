import Model from './spending';
import { bbStorageKeys, preferencesKeys } from './constants';

const spendingData = {
  headers: {},
  data: [
    {
      "category": "Hobbies & Entertainment",
      "totalAmount": {
        "amount": "34.04",
        "currencyCode": "EUR"
      },
      "trend": 12,
      "portion": 0.2
    },
    {
      "category": "Eating & Drinking",
      "totalAmount": {
        "amount": "0",
        "currencyCode": "EUR"
      },
      "trend": -3,
      "portion": 3
    }
  ]
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
  getTransactionsSpending: () => Promise.resolve(spendingData)
};
const productEndpointStub = {
  getProductsummary: () => Promise.resolve(productsData)
};

const storageData = {
  selectedProduct: "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
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
      "aggregatedBalance": {"value": "1500.00","currency": "EUR"}},
    "savingsAccounts": {"name": "Savings Account","products":[],"aggregatedBalance": {"value": "0.00","currency": "EUR"}}
  }
};

const prefs = {
  fromStorage: false,
  isFirst: true
};

const bbStorage = {
  getItem: (key) => {
    let result = null;
    switch (key) {
      case bbStorageKeys.PRODUCT_SELECTED:
        result = storageData.selectedProduct;
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
};

const getModel = () => Model(
  Promise,
  transactionsEndpointStub,
  productEndpointStub,
  bbStorage,
  widget
);



describe('model-bb-spending-ng::model', function() {

  describe('loadSpending()', function() {
    const model = getModel();

    it('returns some data', function(done) {
      model.loadSpending()
      .then((response) => {
        expect(response).toBeDefined();
      })
      .then(done);
    });

    it('returns mocked data in the same format as it is in mocks', function(done) {
      model.loadSpending()
      .then((response) => {
        expect(response).toEqual(spendingData.data);
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
});
