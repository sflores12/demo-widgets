import ViewController from './view.controller';
import { Intent } from '../constants';

const state = {};

describe('widget-bbm-product-details-ng::ViewController', () => {
  const widget = {
    getId: () => '123',
  };

  const model = {
    getProductDetails: () => Promise.resolve(),
  };

  const bus = {
    publish: () => { },
    subscribe: () => { },
  };

  const viewModel = {
    getSelectedProduct: () => { },
    setSelectedProduct: () => { },
    setProductLoading: () => { },
    setProductError: () => { },
    restore: () => Promise.resolve(),
    store: () => Promise.resolve(),
    state,
  };

  const bbIntent = {
    create: () => () => { },
    handle: () => { },
    init: () => { },
  };

  const hooks = {
    processProductDetails: () => { },
  };

  const mockIntents = (intentMocks) => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => { }
    ));
  };

  const createController = () => new ViewController(
    widget,
    model,
    viewModel,
    bbIntent,
    bus,
    hooks,
  );

  describe('Methods', () => {
    describe('#$onInit', () => {
      it('should publish "cxp.item.loaded" and "bb.item.loaded" event', () => {
        const ctrl = createController();

        spyOn(bus, 'publish');

        ctrl.$onInit();

        /* event cxp.item.loaded will be deprecated */
        expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
        expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
      });
    });

    describe('#showProductAliasEditForm', () => {
      it('should trigger the intent to show the product alias edit form', done => {
        const intent = jasmine.createSpy(Intent.SHOW_ALIAS_EDIT_FORM);

        spyOn(viewModel, 'store').and.callThrough();

        mockIntents({
          [Intent.SHOW_ALIAS_EDIT_FORM]: intent,
        });

        const ctrl = createController();
        ctrl.showProductAliasEditForm()
          .then(() => {
            expect(intent).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });
    });
  });

  describe('Intents handlers', () => {
    describe('intent.bb.productDetails.view.show', () => {
      it('should get the product details for the given productId from the model', done => {
        const intentHandlers = {};
        const product = {
          id: '123',
        };
        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'restore').and.callThrough();
        spyOn(viewModel, 'getSelectedProduct').and.returnValue(product);
        spyOn(model, 'getProductDetails').and.callThrough();

        intentHandlers['intent.bb.productDetails.view.show']('321');

        setTimeout(() => {
          expect(model.getProductDetails).toHaveBeenCalledWith('321');
          done()
        }, 0);
      });

      it('should not make a get request if passed id is the same', done => {
        const intentHandlers = {};
        const product = {
          id: '123',
        };
        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'restore').and.callThrough();
        spyOn(viewModel, 'getSelectedProduct').and.returnValue(product);
        spyOn(model, 'getProductDetails').and.callThrough();

        intentHandlers['intent.bb.productDetails.view.show'](product.id);

        setTimeout(() => {
          expect(model.getProductDetails).not.toHaveBeenCalled();
          done();
        }, 0);
      });

      it('should process the product details via the hook and store it as the selected product', done => {
        const intentHandlers = {};

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(hooks, 'processProductDetails');
        spyOn(viewModel, 'setSelectedProduct');

        intentHandlers['intent.bb.productDetails.view.show']('123');

        setTimeout(() => {
          expect(hooks.processProductDetails).toHaveBeenCalled();
          expect(viewModel.setSelectedProduct).toHaveBeenCalled();
          done();
        }, 0);
      });
    });
  });
});
