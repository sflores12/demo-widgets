import Controller from './controller';

const controller = () =>
  new Controller();

describe('widget-training-detalles-ng::Controller', () => {
  it('should have an $onInit method', () => {
    const ctrl = controller();
    expect(ctrl.$onInit).toBeFunction();
  });
});
