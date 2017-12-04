import makeStateContainer from 'lib-bb-state-container';

import Controller from './controller';
import createService from './service';
import createViewModel from './view-model';

describe('Product Summary Widget Controller', () => {
  const createModel = ({ productKinds, total }, product) => ({
    load: () => Promise.resolve({
      productKinds,
      total,
    }),
  });

  const createController = model => {
    const stateContainer = makeStateContainer();
    const viewModel = createViewModel(stateContainer);
    const service = createService(model, viewModel);

    viewModel.init();

    return new Controller(service, stateContainer);
  };

  it('should load products on init', done => {
    const data = {
      productKinds: [{ id: 1 }, { id: 2 }, { id: 3 }],
      total: 3,
    };
    const model = createModel(data, null);
    const ctrl = createController(model);

    spyOn(model, 'load').and.callThrough();

    ctrl.$onInit()
      .then(() => {
        expect(model.load).toHaveBeenCalled();
        done();
      });
  });
});
