import Controller from './controller';

describe('widget-bb-action-recipes-ng::Controller', () => {
  it('should have an $onInit method', () => {
    const ctrl = new Controller();
    expect(ctrl.$onInit).toBeFunction();
  });

  describe('on recipe activation', () => {
    const bus = {
      publish: jasmine.createSpy('publish'),
    };

    const modelWithActivateError = {
      activate: () => new Promise((resolve, reject) => {
        throw new Error('Mock error');
      }),
    };

    it('sends out activation request', (done) => {
      const model = {
        activate: () => Promise.resolve({}),
      };

      spyOn(model, 'activate').and.callThrough();

      const ctrl = new Controller({}, bus, model, {});

      let recipe = { id: '123456' };
      ctrl.onActivate(recipe)
        .then(() =>
          expect(model.activate)
            .toHaveBeenCalledWith(jasmine.objectContaining({ id: '123456' })))
        .then(done);
    });

    it('publishes an error event if request fails', (done) => {
      const ctrl = new Controller({}, bus, modelWithActivateError, {});

      ctrl.onActivate({ id: '123456', active: true})
        .then(() =>
          expect(bus.publish)
            .toHaveBeenCalledWith(
              'bb.event.actionrecipe.activate.failed',
              jasmine.objectContaining({ id: '123456', active: false })))
        .then(done);
    });

    it('marks recipe as inactive in case of failure', (done) => {
      const ctrl = new Controller({}, bus, modelWithActivateError, {});

      const recipe = { id: '123456', active: true};
      ctrl.onActivate(recipe)
        .then(() => expect(recipe.active).toBe(false))
        .then(done);
    });

    it('marks recipe as in status change state while request is in progress', (done) => {
      jasmine.clock().install();
      const model = {
        activate: () => new Promise((resolve, reject) => {
          setTimeout(() => resolve({}), 1);
        }),
      };

      const ctrl = new Controller({}, bus, model, {});

      const recipe = { id: '123456' };
      const promise = ctrl.onActivate(recipe);

      // request in progress
      expect(recipe.changingStatus).toBe(true);

      // finish request
      jasmine.clock().tick(1);
      jasmine.clock().uninstall();
      promise
        .then(() => expect(recipe.changingStatus).toBe(false))
        .then(done);
    });

    it('marks recipe as no longer in status change state if request fails', (done) => {
      const ctrl = new Controller({}, bus, modelWithActivateError, {});

      const recipe = { id: '123456', active: true};
      ctrl.onActivate(recipe)
        .then(() => expect(recipe.changingStatus).toBe(false))
        .then(done);
    });
  });

  describe('on recipe deactivation', () => {
    const bus = {
      publish: jasmine.createSpy('publish'),
    };

    const modelWithDeactivateError = {
      deactivate: () => new Promise((resolve, reject) => {
        throw new Error('Mock error');
      }),
    };

    it('sends out deactivation request', (done) => {
      const model = {
        deactivate: () => Promise.resolve({}),
      };

      spyOn(model, 'deactivate').and.callThrough();

      const ctrl = new Controller({}, bus, model, {});

      let recipe = { id: '123456' };
      ctrl.onDeactivate(recipe)
        .then(() =>
          expect(model.deactivate)
            .toHaveBeenCalledWith(jasmine.objectContaining({ id: '123456' })))
        .then(done);
    });

    it('publishes an error event if request fails', (done) => {
      const ctrl = new Controller({}, bus, modelWithDeactivateError, {});

      ctrl.onDeactivate({ id: '123456', active: false})
        .then(() =>
          expect(bus.publish)
            .toHaveBeenCalledWith(
              'bb.event.actionrecipe.deactivate.failed',
              jasmine.objectContaining({ id: '123456', active: true })))
        .then(done);
    });

    it('marks recipe as active in case of failure', (done) => {
      const ctrl = new Controller({}, bus, modelWithDeactivateError, {});

      const recipe = { id: '123456', active: false};
      ctrl.onDeactivate(recipe)
        .then(() => expect(recipe.active).toBe(true))
        .then(done);
    });

    it('marks recipe as in status change state while request is in progress', (done) => {
      jasmine.clock().install();
      const model = {
        deactivate: () => new Promise((resolve, reject) => {
          setTimeout(() => resolve({}), 1);
        }),
      };

      const ctrl = new Controller({}, bus, model, {});

      const recipe = { id: '123456' };
      const promise = ctrl.onDeactivate(recipe);

      // request in progress
      expect(recipe.changingStatus).toBe(true);

      // finish request
      jasmine.clock().tick(1);
      jasmine.clock().uninstall();
      promise
        .then(() => expect(recipe.changingStatus).toBe(false))
        .then(done);
    });

    it('marks recipe as no longer in status change state if request fails', (done) => {
      const ctrl = new Controller({}, bus, modelWithDeactivateError, {});

      const recipe = { id: '123456', active: true};
      ctrl.onDeactivate(recipe)
        .then(() => expect(recipe.changingStatus).toBe(false))
        .then(done);
    });
  });

  describe('on save', () => {
    it('converts recipe to API model when updating', () => {
      let model = {
        update: () => Promise.resolve({})
      };

      spyOn(model, 'update').and.callThrough();

      let ctrl = new Controller({}, {}, model, {});

      let recipe = { id: '1', toApiModel: () => 'converted recipe' };

      ctrl.onSave(recipe);

      expect(model.update).toHaveBeenCalledWith('converted recipe');
    });

    it('converts recipe to API model when creating new recipe', () => {
      let model = {
        save: () => Promise.resolve({})
      };

      spyOn(model, 'save').and.callThrough();

      let ctrl = new Controller({}, {}, model, {});

      let recipe = { toApiModel: () => 'converted recipe' };

      ctrl.onSave(recipe);

      expect(model.save).toHaveBeenCalledWith('converted recipe');
    });
  })
});
