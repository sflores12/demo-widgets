import Controller from './controller';
import hooks from './default-hooks';
import Message from './message';

const turnoversData = {
  "arrangementIds": ["123"],
  "intervalDuration": "MONTH",
  "turnovers":[{
    "intervalStartDate": "2016-11-01T16:41:41.090Z",
    "creditAmount": {"amount": "0", "currencyCode": "EUR"},
    "debitAmount": {"amount": "0", "currencyCode": "EUR"},
    "balance": {"amount": "0","currencyCode": "EUR"}
  }, {
    "intervalStartDate": "2016-12-01T16:41:41.090Z",
    "creditAmount": {"amount": "757.10","currencyCode": "EUR"},
    "debitAmount": {"amount": "300.65","currencyCode": "EUR"},
    "balance": {"amount": "456.45","currencyCode": "EUR"}
  }]
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

let multipleAccounts = false;

const controller = () => 
  new Controller(bus, hooks, {
    debounce: fn => fn(),
  }, {
    validateTurnoversParameters: (params) => Promise.resolve(params),
    loadTurnovers: () => Promise.resolve(turnoversData),
    transformToSeries: () => turnoversData,
    getProductsArray: () => Promise.resolve(productsData),
    getSelectedProduct: () => Promise.resolve(productsData[0]),
    getSelectedProducts: () => Promise.resolve(productsData),
    setSelectedProduct: () => false,
    setSelectedProducts: () => false,
    isFirstProductDefault: () => false,
    isMultipleAccount: () => multipleAccounts,
});

describe('widget-bb-turnovers-ng::Controller', () => {
  it('should have an $onInit method', () => {
    const ctrl = controller();
    expect(ctrl.$onInit).toBeFunction();
  });

  it('should have an onProductSelected callback', () => {
    const ctrl = controller();
    expect(ctrl.onProductSelected).toBeFunction();
  });

  it('should have an onPeriodStartDateChanged callback', () => {
    const ctrl = controller();
    expect(ctrl.onPeriodStartDateChanged).toBeFunction();
  });

  it('should have an onPeriodEndDateChanged callback', () => {
    const ctrl = controller();
    expect(ctrl.onPeriodEndDateChanged).toBeFunction();
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

  it('should publish ' + Message.PERIOD_START_CHANGED + ' on period start date change', () => {
    const ctrl = controller();
    ctrl.onPeriodStartDateChanged();
    expect(bus.publish).toHaveBeenCalledWith(Message.PERIOD_START_CHANGED, ctrl.periodStartDate);
  });

  it('should publish ' + Message.PERIOD_END_CHANGED + ' on period end date change', () => {
    const ctrl = controller();
    ctrl.onPeriodEndDateChanged();
    expect(bus.publish).toHaveBeenCalledWith(Message.PERIOD_END_CHANGED, ctrl.periodEndDate);
  });

  it('has products and turnover items updated onInit', (done) => {
    const ctrl = controller();
    ctrl.$onInit()
      .then(() => {
        expect(ctrl.products).toEqual(productsData);
        expect(ctrl.data).toEqual(turnoversData);
        expect(ctrl.series).toEqual(turnoversData);
      })
      .then(done);
  });

  it('should call period related hooks inside onInit', (done) => {
    spyOn(hooks, 'defaultPeriodStart').and.callFake(() => '');
    spyOn(hooks, 'defaultPeriodEnd').and.callFake(() => '');
    spyOn(hooks, 'defaultInterval').and.callFake(() => 0);
    spyOn(hooks, 'defaultStartDay').and.callFake(() => 0);

    const ctrl = controller();
    ctrl.$onInit()
      .then(() => {
        expect(hooks.defaultPeriodStart).toHaveBeenCalled();
        expect(hooks.defaultPeriodEnd).toHaveBeenCalled();
        expect(hooks.defaultInterval).toHaveBeenCalled();
        expect(hooks.defaultStartDay).toHaveBeenCalled();
        expect(ctrl.intervalDuration).toEqual(0);
      })
      .then(done);
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
