import Controller from './controller';
import defaultHooks from './default-hooks';
import { Intent } from './constants';

let intents = Intent.SHOW_CATEGORIES;

const createController = (model, hooks = defaultHooks) =>
  new Controller(bus, hooks, widget, model, bbIntent);

const createModel = () => ({
  getCategories: () => Promise.resolve(
    [
      {
        "categoryId": 1,
        "categoryName": "Home",
        "categoryType": "Expenses"
      },
      {
        "categoryId": 2,
        "categoryName": "Health & Beauty",
        "categoryType": "Expenses"
      }
    ]
  ),
});

const bus = {
  publish: () => null,
  subscribe: () => null,
};

const bbIntent = {
  create: () => () => { },
  handle: () => { },
  init: () => { },
};

const mockIntents = (intentMocks) => {
  spyOn(bbIntent, 'create').and.callFake((name) => (
    intentMocks[name] ? intentMocks[name] : () => { }
  ));
};

const scope = {
  $digest: () => {},
};

const widget = {
  getId: () => '123',
  getStringPreference: () => '',
};

describe('widget-bb-transaction-categories-ng::Controller', () => {
  it('should have an $onInit method', () => {
    const model = createModel();
    const ctrl = createController(model);

    expect(ctrl.$onInit).toBeFunction();
  });

  it('should publish "cxp.item.loaded" and "bb.item.loaded" events', done => {
    const model = createModel();
    const ctrl = createController(model);

    spyOn(bus, 'publish');

    ctrl.$onInit()
      .then(() => {
        expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
        expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
      })
      .then(done);
  });

  it('$onInit should load the categories list', (done) => {
    const model = createModel();
    const ctrl = createController(model);

    ctrl.$onInit()
      .then(() => {
        expect(ctrl.items.length).not.toBeNull();
      })
      .then(done);
  });
});
