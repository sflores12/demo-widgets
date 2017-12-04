import Controller from './controller';

const controller = () =>
  new Controller({}, {
    getStringPreference: () => '',
  });

describe('widget-bb-login-ng::Controller', () => {
  it('should have an $onInit method', () => {
    const ctrl = controller();
    expect(ctrl.$onInit).toBeFunction();
  });
});
