import FormController from './form.controller';
import { Intent } from '../constants';

describe('widget-bbm-product-details-ng::FormController', () => {
  const widget = {
    getId: () => '123',
  };

  const bus = {
    publish: () => { },
    subscribe: () => { },
  };

  const model = {
    patchArrangement: () => Promise.resolve({}),
  };

  const viewModel = {
    state: {
      product: null,
      form: {
        data: {
          productAlias: null,
        },
        loading: false,
        error: null,
      },
    },
    setFormLoading: () => { },
    setFormError: () => { },

    setProductAlias: () => { },
    setProductAliasFormState: () => { },
    getProductAliasFormState: () => { },

    setSelectedProduct: () => { },
    getSelectedProduct: () => { },

    restore: () => Promise.resolve(),
    store: () => Promise.resolve(),
  };

  const hooks = {
    processProductDetails: productDetails => productDetails,
  };

  const bbIntent = {
    create: () => () => { },
    handle: () => { },
    init: () => { },
  };

  const createController = () => new FormController(
    widget,
    model,
    viewModel,
    bbIntent,
    bus,
    hooks
  );

  const mockIntents = (intentMocks) => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => { }
    ));
  };

  let ctrl;

  it('should have appropriate variables in the controller', () => {
    const ctrl = createController();

    expect(ctrl.updateProductAlias).toBeDefined();
    expect(ctrl.$onInit).toBeDefined();
  });

  describe('Methods', () => {
    beforeEach(() => {
      ctrl = createController();
    });

    describe('#onInit', () => {
      it('should publish "cxp.item.loaded" and "bb.item.loaded" event', done => {
        spyOn(bus, 'publish');

        ctrl.$onInit();

        setTimeout(() => {
          expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
          expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
          done();
        }, 0);
      });
    });

    describe('#updateProductAlias', () => {
      it('should call the updateArrangement method with proper params', done => {
        const product = {
          id: '123',
          name: 'Mister Smith',
          alias: 'Smith',
        };
        const productAlias = 'M.Smith';
        const productDetails = {
          id: product.id,
          alias: productAlias,
        };

        spyOn(viewModel, 'getSelectedProduct').and.returnValue(product);
        spyOn(viewModel, 'getProductAliasFormState').and.returnValue(productAlias);
        spyOn(model, 'patchArrangement').and.callThrough();

        ctrl.updateProductAlias()
          .then(() => {
            expect(model.patchArrangement).toHaveBeenCalledWith(productDetails);
            done();
          })
          .catch(done.fail);
      });

      it('should trigger the intent to show the product details view after product details has been updated', done => {
        const product = {
          id: '123',
          name: 'Mister Smith',
          alias: 'Smith',
        };
        const productAlias = 'M.Smith';
        const intent = jasmine.createSpy(Intent.SHOW_PRODUCT_DETAILS_VIEW);

        spyOn(viewModel, 'getSelectedProduct').and.returnValue(product);
        spyOn(viewModel, 'getProductAliasFormState').and.returnValue(productAlias);
        spyOn(viewModel, 'store').and.callThrough();
        spyOn(model, 'patchArrangement').and.callThrough();

        mockIntents({
          [Intent.SHOW_PRODUCT_DETAILS_VIEW]: intent,
        });

        const ctrl = createController();

        ctrl.updateProductAlias()
          .then(() => {
            expect(intent).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });
    });
  });

  describe('Intents handlers', () => {
    describe('intent.bb.productDetails.alias.edit', () => {
      it('should restore the view model', () => {
        const intentHandlers = {};

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'restore').and.callThrough();
        intentHandlers[Intent.SHOW_ALIAS_EDIT_FORM]();

        expect(viewModel.restore).toHaveBeenCalled();        
      });
    });
  });
});
