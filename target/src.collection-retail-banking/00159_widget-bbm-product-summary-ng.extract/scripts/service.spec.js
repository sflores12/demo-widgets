/* eslint-env jasmine */
import { E_UNEXPECTED } from 'lib-bb-model-errors';

import createService from './service';

const randomInt = to => {
  const min = Math.ceil(0);;
  const max = Math.floor(to);

  return Math.floor(Math.random() * (max - min) + min);
};

const string = (length = 10) => randomInt(Number.MAX_VALUE).toString(36).substr(0, length);
const aProductId = string;

const aWidget = (options = {}) => {
  const values = Object.assign({
    preferences: {},
  }, options);

  return {
    getStringPreferences: pref => values.preferences[pref],
  };
};

const aProduct = (options = {}) => {
  const values = Object.assign({
    id: aProductId(),
  }, options);

  return {
    id: values.id,
  };
};

const anError = (options = {}) => {
  const values = Object.assign({
    code: E_UNEXPECTED,
  }, options);

  return {
    code: values.code,
  };
};

const aModel = (options = {}) => {
  const values = Object.assign({
    productKinds: [aProduct(), aProduct(), aProduct()],
    productKindsError: null,
  }, options);

  return {
    load: jasmine.createSpy('load')
      .and.callFake(() => (
        (values.productKindsError === null)
          ? Promise.resolve({
            productKinds: values.productKinds,
            total: values.productKinds.length,
          })
          : Promise.reject(values.productKindsError)
      )),
  };
};

const aState = (options = {}) =>
  Object.assign({}, options);

const aViewModel = (options = {}) => {
  const values = Object.assign({
    state: aState(),
  }, options);

  return {
    getState: jasmine.createSpy('getState')
      .and.callFake(() => values.state),
    list: jasmine.createSpyObj('list', [
      'beforeLoad', 'afterLoadSuccess', 'afterLoadError',
    ]),
  };
};

const aService = (options = {}) => {
  const values = Object.assign({
    model: aModel(),
    viewModel: aViewModel(),
    widget: aWidget(),
  }, options);

  return createService(values.model, values.viewModel);
};

describe('ProductSummaryService::Methods', () => {
  describe('loadProducts', () => {
    it('allows the view to be updated before fetching the data', () => {
      const viewModel = aViewModel();
      const service = aService({ viewModel });

      service.loadProducts();

      expect(viewModel.list.beforeLoad).toHaveBeenCalled();
    });

    it('should expose the products if the request has been succeed', done => {
      const productKinds = [aProduct()];
      const model = aModel({ productKinds });
      const viewModel = aViewModel();
      const service = aService({ model, viewModel });
      service.loadProducts()
        .then(() => {
          expect(viewModel.list.afterLoadSuccess).toHaveBeenCalledWith(jasmine.objectContaining({
            total: 1,
            productKinds,
          }));
          done();
        })
        .catch(done.fail);
    });


    it('should expose an error if the request has been failed', done => {
      const error = anError();
      const model = aModel({ productKindsError: error });
      const viewModel = aViewModel();
      const service = aService({ model, viewModel });

      service.loadProducts()
        .then(done.fail)
        .catch(err => {
          expect(err).toEqual(error);
          expect(viewModel.list.afterLoadError).toHaveBeenCalledWith(err);
          done();
        });
    });
  });
});
