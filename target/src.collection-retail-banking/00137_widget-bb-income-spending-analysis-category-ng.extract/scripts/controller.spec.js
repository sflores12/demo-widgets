import Controller from './controller';
import hooks from './default-hooks';
import Message from './message';

const analysisData = {
  "total": {
    "amount": 54.04,
    "currencyCode": "EUR"
  },
  "items": [
    {
      "category": "Hobbies & Entertainment",
      "totalAmount": {
        "amount": 34.04,
        "currencyCode": "EUR"
      },
      "trend": 12,
      "portion": 4
    },
    {
      "category": "Eating & Drinking",
      "totalAmount": {
        "amount": 20,
        "currencyCode": "EUR"
      },
      "trend": -3,
      "portion": 13
    }
  ]
};

const bbIntent = {
    create: () => () => {},
    handle: () => {},
    init: () => {},
  };

const productsData = [{
  "id": "123",
  "name": "Acc",
  "IBAN": "NL12TRIO3456789012",
}, {
  "id": "456",
  "name": "Acc 2",
  "IBAN": "NL12ABNA3456789012",
}];

const bus = {
  subscribe: jasmine.createSpy('subscribe'),
  publish: jasmine.createSpy('publish'),
};

const turnoversModel = {
  validateTurnoversParameters: () => Promise.resolve(true),
};

let multipleAccounts = false;

const controller = () =>
  new Controller(bus, hooks, {
    debounce: fn => fn(),
  }, {
    validateAnalysisParameters: (params) => Promise.resolve(params),
    loadAnalysisData: () => Promise.resolve(analysisData),
    getProductsArray: () => Promise.resolve(productsData),
    getSelectedProduct: () => Promise.resolve(productsData[0]),
    getSelectedProducts: () => Promise.resolve(productsData),
    setSelectedProduct: () => false,
    setSelectedProducts: () => false,
    isFirstProductDefault: () => false,
    isMultipleAccount: () => multipleAccounts,
  }, turnoversModel, bbIntent, {
    getStringPreference: () => '',
  });

describe('widget-bb-income-spending-analysis-category-ng::Controller', () => {
  it('should have an $onInit method', () => {
    const ctrl = controller();
    expect(ctrl.$onInit).toBeFunction();
  });

  it('should have an onProductSelected callback', () => {
    const ctrl = controller();
    expect(ctrl.onProductSelected).toBeFunction();
  });

  it('should publish ' + Message.PRODUCT_SELECTED + ' on product change', () => {
    const ctrl = controller();
    ctrl.onProductSelected();
    expect(bus.publish).toHaveBeenCalledWith(Message.PRODUCT_SELECTED, { product: ctrl.selectedProducts[0] });
  });

  it('should publish ' + Message.PRODUCTS_SELECTED + ' on products selection change', () => {
    const ctrl = controller();
    ctrl.onProductsSelected();
    expect(bus.publish).toHaveBeenCalledWith(Message.PRODUCTS_SELECTED, { products: ctrl.selectedProducts });
  });

  it('should update products and load analysis data onInit', (done) => {
    const ctrl = controller();
    ctrl.$onInit()
      .then(() => {
        expect(ctrl.products).toEqual(productsData);
        expect(ctrl.items).toEqual(analysisData);
      })
      .then(setTimeout(done, 500));
  });

  it('should call period related hooks inside onInit', (done) => {
    spyOn(hooks, 'defaultPeriodStart').and.callFake(() => '');
    spyOn(hooks, 'defaultPeriodEnd').and.callFake(() => '');

    const ctrl = controller();

    ctrl.$onInit()
      .then(() => {
        expect(hooks.defaultPeriodStart).toHaveBeenCalled();
        expect(hooks.defaultPeriodEnd).toHaveBeenCalled();
      })
      .then(setTimeout(done, 500));
  });

  it('should get single selected product when multiple selection is set to false', (done) => {
    const ctrl = controller();
    ctrl.$onInit()
      .then(() => {
        expect(ctrl.selectedProducts).toEqual([productsData[0]]);
      })
      .then(done);
  });

  it('should get multiple selected products when multiple selection is set to true', (done) => {
    multipleAccounts = true;
    const ctrl = controller();
    ctrl.$onInit()
      .then(() => {
        expect(ctrl.selectedProducts).toEqual(productsData);
      })
      .then(done);
  });
});
