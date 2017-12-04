import Controller from './controller';
import hooks from './default-hooks';
import Message from './message';

const spendingData = {
  "totalSpending": {
    "amount": "4793.44",
    "currencyCode": "EUR"
  },
 "items": [
    {
      "category": "Hobbies & Entertainment",
      "totalAmount": {
        "amount": "34.04",
        "currencyCode": "EUR"
      },
      "trend": 12,
      "portion": 4
    },
    {
      "category": "Eating & Drinking",
      "totalAmount": {
        "amount": "20",
        "currencyCode": "EUR"
      },
      "trend": -3,
      "portion": 13
    }
  ]
}

const bbIntent = {
    create: () => () => {},
    handle: () => {},
    init: () => {},
  };

const productsData = [{
  "id": "123",
  "name": "Acc",
  "IBAN": "NL12TRIO3456789012",
}];

const bus = {
  subscribe: jasmine.createSpy('subscribe'),
  publish: jasmine.createSpy('publish'),
};

const controller = () =>
  new Controller(bus, hooks, {
    loadSpending: () => Promise.resolve(spendingData),
    getProductsArray: () => Promise.resolve(productsData),
    getSelectedProduct: () => Promise.resolve(productsData[0]),
    setSelectedProduct: () => false
  }, bbIntent);

describe('widget-bb-spending-ng::Controller', () => {
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
    expect(bus.publish).toHaveBeenCalledWith(Message.PRODUCT_SELECTED, ctrl.selectedProduct);
  });

  it('should update products and spending items onInit', (done) => {
    const ctrl = controller();
    ctrl.$onInit()
      .then(() => {
        expect(ctrl.products).toEqual(productsData);
        expect(ctrl.items).toEqual(spendingData);
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
});
