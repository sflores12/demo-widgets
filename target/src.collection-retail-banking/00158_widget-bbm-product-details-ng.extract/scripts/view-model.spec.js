import ViewModel from './view-model';
import { MODULE_KEY } from './constants';

describe('widget-bbm-product-details-ng::ViewModel', () => {

  let model;

  const bbStorage = {
    getItem: () => Promise.resolve(),
    setItem: () => Promise.resolve(),
  };

  const createModel = () => { };

  beforeEach(() => {
    model = createModel();
  });

  const createViewModel = () => ViewModel(model, bbStorage);

  const mockState = state => {
    spyOn(bbStorage, 'getItem').and.returnValue(Promise.resolve(state));
  };

  describe('Methods', () => {
    describe('#setSelectedProduct', () => {
      it('should set the selected product on the viewModel state', () => {
        const state = {
          product: null,
        };

        const product = {
          "id": "1234-5678-9014",
          "currency": "EUR",
          "amount": 1234,
          "name": "Product Name"
        };

        const viewModel = createViewModel();

        viewModel.setSelectedProduct(product);

        expect(viewModel.state.product).toEqual(product);
      });
    });

    describe('#restore', () => {
      it('should restore the state from the storage', done => {
        const state = {};

        mockState(state);

        const viewModel = createViewModel();

        viewModel.restore().then(() => {
          expect(viewModel.state).toBe(state);
          done();
        });
      });
    });

    describe('#store', () => {
      it('should store the current state to the storage', done => {
        spyOn(bbStorage, 'setItem');

        mockState({});

        const viewModel = createViewModel();

        viewModel.restore()
          .then(() => viewModel.store())
          .then(() => {
            expect(bbStorage.setItem).toHaveBeenCalledWith('widget-bbm-product-details-ng:state', viewModel.state);
            done();
          });
      });
    });

    describe('#setProductAlias', () => {
      it('should set a product alias to the product state', () => {
        const viewModel = createViewModel();
        const productAlias = 'M.Smith';
        const product = {
          "id": "1234-5678-9014",
          "currency": "EUR",
          "amount": 1234,
          "name": "Product Name"
        };

        viewModel.setSelectedProduct(product);
        viewModel.setProductAlias(productAlias);

        expect(viewModel.state.product.alias).toEqual(productAlias);
      });
    });

    describe('#setProductAliasFormState', () => {
      it('should set the product alias form state', () => {
        const viewModel = createViewModel();
        const productAlias = 'M.Smith';

        viewModel.setProductAliasFormState(productAlias);

        expect(viewModel.state.form.data.productAlias).toEqual(productAlias);
      });
    });

    describe('#getProductAliasFormState', () => {
      it('should get the product alias form state', () => {
        const viewModel = createViewModel();
        const productAlias = 'M.Smith';

        viewModel.setProductAliasFormState(productAlias);

        expect(viewModel.getProductAliasFormState()).toEqual(productAlias);
      });
    });

    describe('#setFormLoading', () => {
      it('should set the given loading state to the form state', () => {
        const viewModel = createViewModel();

        expect(viewModel.state.form.loading).toEqual(false);

        viewModel.setFormLoading(true);

        expect(viewModel.state.form.loading).toEqual(true);
      });
    });

    describe('#setProductLoading', () => {
      it('should set the given loading state to the product state', () => {
        const viewModel = createViewModel();

        expect(viewModel.state.loading).toEqual(false);

        viewModel.setProductLoading(true);

        expect(viewModel.state.loading).toEqual(true);
      });
    });

    describe('#setFormError', () => {
      it('should set the given error to the form state', () => {
        const viewModel = createViewModel();
        const error = "Error";

        expect(viewModel.state.form.error).toEqual(null);

        viewModel.setFormError(error);

        expect(viewModel.state.form.error).toEqual(error);
      });
    });

    describe('#setProductError', () => {
      it('should set the given error to the product state', () => {
        const viewModel = createViewModel();
        const error = "Error";

        expect(viewModel.state.error).toEqual(null);

        viewModel.setProductError(error);

        expect(viewModel.state.error).toEqual(error);
      });
    });
  });
});
