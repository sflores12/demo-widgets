import Controller from './controller';
import * as defaultHooks from './default-hooks';

import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';

let eventBus;
let widget;

beforeEach(function() {
  eventBus = {
    publish: jasmine.createSpy('publish'),
    subscribe: () => {},
  };
  widget = {
    getId: () => '123'
  };

});

const bbIntent = {
  create: () => () => {},
  handle: () => {},
  init: () => {},
};

const controller = (model, hooks, eventBus, widget, bbIntentParam = bbIntent) =>
    new Controller(model, hooks, eventBus, widget, bbIntentParam);

const createModel = (data) => ({
  load: () => Promise.resolve(data),
  setProductSelected() {},
  setProductsSelected() {},
  getProductDetails: () => Promise.resolve(data),
});

const mockIntents = (intentMocks) => {
  spyOn(bbIntent, 'create').and.callFake((name) => (
    intentMocks[name] ? intentMocks[name] : () => {}
  ));
};

describe('Product Summary Widget Controller', () => {

  it('should publish "cxp.item.loaded" and "bb.item.loaded" events', done => {
    const expected = {
      productKinds: [],
      total: {}
    };
    const model = createModel(expected);
    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit();
    setTimeout(() => {
      /* event cxp.item.loaded will be deprecated */
      expect(eventBus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
      expect(eventBus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
      done();
    },100);
  });

  it('loads values from the model on initialization', (done) => {
    const expected = {
      productKinds: [],
      total: {}
    };
    const model = createModel(expected);
    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.productKinds).toEqual(expected.productKinds);
        expect(ctrl.total).toEqual(expected.total);
      })
      .then(done);
  });

  it('allows the developer to process the products kinds before they are made available to the view', (done) => {
    const currentAccount1 = { id: "CurrentAccount1" };
    const currentAccount2 = { id: "CurrentAccount2" };
    const savingsAccount1 = { id: "SavingsAccount1" };

    const rawData = [
      { id: "CurrentAccount", products: [currentAccount1, currentAccount2] },
      { id: "SavingsAccount", products: [savingsAccount1] },
    ];
    const model = createModel({ productKinds: rawData });

    const expected = [
      { id: "CurrentAccount", products: ['CurrentAccount1', 'CurrentAccount2'] },
      { id: "SavingsAccount", products: ['SavingsAccount1'] },
    ];

    const hooks = {
      processKinds: kinds => kinds.map(kind => Object.assign({}, kind, {
        products: kind.products.map(product => product.id),
      })),
    };

    const ctrl = controller(model, hooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.productKinds).toEqual(expected);
      })
      .then(done);
  });

  it('exposes an Auth error i18n key when Auth fails on load', (done) => {
    const model = {
      load: () => Promise.reject({ code: E_AUTH }),
    };

    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.productKindsError.message).toBe('model.error.auth');
      })
      .then(done);
  });

  it('exposes a Connectivity error i18n key when initial data fails due to connectivity', (done) => {
    const model = {
      load: () => Promise.reject({ code: E_CONNECTIVITY }),
    };

    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.productKindsError.message).toBe('model.error.connectivity');
      })
      .then(done);
  });

  it('exposes an User error i18n key if there was a problem with executing an action ', (done) => {
    const model = {
      load: () => Promise.reject({ code: E_USER }),
    };

    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.productKindsError.message).toBe('model.error.user');
      })
      .then(done);
  });

  it('exposes an Unexpected error i18n key when the initial data due to "other" errors', (done) => {
    const model = {
      load: () => Promise.reject({ code: E_UNEXPECTED }),
    };

    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.productKindsError.message).toBe('model.error.unexpected');
      })
      .then(done);
  });

  it('saves selected product to the model', () => {
    eventBus = jasmine.createSpyObj('eventBus', ['publish']);
    const model = createModel({});

    spyOn(model, 'setProductSelected');

    const ctrl = controller(model, defaultHooks, eventBus, widget);
    const product = {
      kind: 'ArbProductKind',
    };

    ctrl.selectProduct(product);

    expect(model.setProductSelected).toHaveBeenCalledWith(product);
  });

  it('saves selected products to the model', () => {
    eventBus = jasmine.createSpyObj('eventBus', ['publish']);
    const model = createModel({});

    spyOn(model, 'setProductsSelected');

    const ctrl = controller(model, defaultHooks, eventBus, widget);
    const products = [{
      kind: 'Kind1',
    },{
      kind: 'Kind2',
    }];

    ctrl.selectProducts(products);

    expect(model.setProductsSelected).toHaveBeenCalledWith(products);
  });

  it('triggers a `bb.event.product.selected` when a product is selected', () => {
    eventBus = jasmine.createSpyObj('eventBus', ['publish']);
    const model = createModel({});

    const ctrl = controller(model, defaultHooks, eventBus, widget);
    const product = {
      kind: 'ArbProductKind',
    };

    ctrl.selectProduct(product);

    expect(eventBus.publish).toHaveBeenCalledWith('bb.event.product.selected', { product });
    expect(eventBus.publish).toHaveBeenCalledWith('bb.event.product.selected.ArbProductKind', { product });
  });

  it('triggers a `bb.event.products.selected` when a product selection is updated', () => {
    eventBus = jasmine.createSpyObj('eventBus', ['publish']);
    const model = createModel({});

    const ctrl = controller(model, defaultHooks, eventBus, widget);
    const products = [{
      kind: 'Kind1',
    },{
      kind: 'Kind2',
    }];

    ctrl.selectProducts(products);

    expect(eventBus.publish).toHaveBeenCalledWith('bb.event.products.selected', { products });
  });

  it('should init intents', done => {
    const bbIntent = {
      create: jasmine.createSpy('bbIntent.create'),
      handle: jasmine.createSpy('bbIntent.handle'),
      init: jasmine.createSpy('bbIntent.init'),
    };

    const model = createModel([]);
    const ctrl = controller(model, defaultHooks, eventBus, widget, bbIntent);

    ctrl.$onInit()
      .then(()=> {
        expect(bbIntent.create).toHaveBeenCalled();
        expect(bbIntent.handle).toHaveBeenCalled();
        done();
      })
      .catch(done.fail);
  });

  it('should call viewManageProducts intent', done => {
    const intent = jasmine.createSpy('intent.bb.manage.products.view');

    mockIntents({
      'intent.bb.manage.products.view': intent,
    });

    const model = createModel([]);
    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => ctrl.viewManageProducts())
      .then(()=> {
        expect(intent).toHaveBeenCalled();
        done();
      })
      .catch(done.fail);

  });

  it('should load product details', (done) => {
    const expectedProduct = {
      id: "6152",
      name: "testProduct",
      lastUpdatedDate: "11082017",
    };

    const actualProduct = {
      id: "6152",
    }

    const model = createModel({});
    model.load = jasmine.createSpy('load').and.returnValue(Promise.resolve({}));
    model.getProductSelected = jasmine.createSpy('getProductSelected').and.returnValue(Promise.resolve(actualProduct));
    model.getProductDetails = jasmine.createSpy('getProductDetails').and.returnValue(Promise.resolve(expectedProduct));
    const ctrl = controller(model, defaultHooks, eventBus, widget);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.extendedProduct).toEqual(expectedProduct);
      })
      .then(done)
      .catch(done.fail)
  });

});
