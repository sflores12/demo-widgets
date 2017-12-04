import Controller from './controller';
import defaultHooks from './default-hooks';

const controller = (modelParam = {}, eventBusParam = eventBus, hooksParam = defaultHooks, bbIntentParam = bbIntent) =>
  new Controller(modelParam, eventBusParam, hooksParam, bbIntentParam);

const createModel = data => ({
  load: () => Promise.resolve(data),
  patchArrangement: () => Promise.resolve(),
  setProductSelected() {},
});

const bbIntent = {
  create: () => () => {},
  handle: () => {},
  init: () => {},
};

const eventBus = {
  publish: () => {},
  subscribe: () => {},
};

const mockIntents = (intentMocks) => {
  spyOn(bbIntent, 'create').and.callFake((name) => (
    intentMocks[name] ? intentMocks[name] : () => {}
  ));
};

describe('widget-bb-manage-products-ng::Controller', () => {

  it('should have an $onInit method', () => {
    const ctrl = controller();
    expect(ctrl.$onInit).toBeFunction();
  });

  it('should get, load the products', done => {
    const productKindsRawData = {
      productKinds: [
        {
          "name": "Current Account",
          "id": "currentAccounts",
          "products": [
            {
              "kind": "currentAccounts",
              "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
              "name": "Mr and Mrs J. Smith",
              "alias": "Our joined account",
              "visible": true
            },
            {
              "kind": "currentAccounts",
              "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
              "name": "Mr J. Smith",
              "alias": "My special account",
              "visible": true
            }
          ]
        },
        {
          "name": "Savings Account",
          "id": "savingsAccounts",
          "products": [
            {
              "kind": "savingsAccounts",
              "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
              "name": "Smith Bonus Savings",
              "alias": "Our joined account",
              "visible": true
            },
            {
              "kind": "savingsAccounts",
              "id": "4cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
              "name": "Smith Savings",
              "alias": "Our joined account",
              "visible": true
            }
          ]
        }
      ],
    };

    const model = createModel(productKindsRawData);
    const ctrl = controller(model);

    ctrl.getProducts()
      .then(() => {
        expect(ctrl.state.isProductLoading).toEqual(false);
      })
      .catch(done.fail)
      .then(done);
  });

  it('should update product', done => {
    const model = createModel([]);
    const ctrl = controller(model);

    ctrl.updateProduct("1", "newName", true)
      .then( () => {
        expect(ctrl.state.status).toEqual({ message: 'product.notification.updated.success', isError: false });
        expect(ctrl.state.productSelected).toEqual({ id: null, showInput: null });
      })
      .catch(done.fail)
      .then(done);
  });

  it('should call processKinds hook', done => {
    const hooks = {};
    hooks.processKinds = jasmine.createSpy('processKinds').and.returnValue([]);
    const model = createModel([]);
    const ctrl = controller(model, {}, hooks);

    ctrl.getProducts()
      .then( () => {
        expect(hooks.processKinds).toHaveBeenCalled();
      })
      .catch(done.fail)
      .then(done);
  });

  it('should init intents', done => {
    const bbIntent = {
      create: jasmine.createSpy('bbIntent.create'),
      handle: jasmine.createSpy('bbIntent.handle'),
      init: jasmine.createSpy('bbIntent.init'),
    };

    const model = createModel([]);
    const ctrl = controller(model, eventBus, defaultHooks, bbIntent);

    ctrl.$onInit()
      .then(()=> {
        expect(bbIntent.create).toHaveBeenCalled();
        expect(bbIntent.handle).toHaveBeenCalled();
        done();
      })
      .catch(done.fail);
  });

  it('should call viewProductSummary intent', done => {
    const intent = jasmine.createSpy('intent.bb.product.summary.view');

    mockIntents({
      'intent.bb.product.summary.view': intent,
    });

    const model = createModel([]);
    const ctrl = controller(model, eventBus, defaultHooks);

    ctrl.$onInit()
      .then(() => ctrl.viewProductSummary())
      .then(()=> {
        expect(intent).toHaveBeenCalled();
        done();
      })
      .catch(done.fail);

  });

});
