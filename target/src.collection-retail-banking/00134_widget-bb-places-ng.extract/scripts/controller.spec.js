/* global expect, describe, beforeEach, jasmine, it, fail, spyOn */

import Controller from './controller';
import * as defaultHooks from './default-hooks';

const controller = (model, hooks, bus) => 
  new Controller(model, hooks, bus);

const events = {};
const bus = {
  subscribe: (eventName, callback) => {
    events[eventName] = (data) => defaultHooks.onContainerToggle(data);
  },
  publish: (eventName, data) => {
    if (events[eventName]) {
      events[eventName](data);
    }
  }
};

describe('widget-bb-places-ng::Controller', () => {
  let model;
  const places = [0];

  beforeEach(() => {
    model = {
      getPlaces: () => Promise.resolve(places),
    };
  });

  it('should have an $onInit method', () => {
    const ctrl = controller();
    expect(ctrl.$onInit).toBeFunction();
  });

  describe('event binding after init', () => {
    beforeEach(() => {
      const ctrl = controller(null, defaultHooks, bus);
      ctrl.$onInit();
      spyOn(defaultHooks, 'onContainerToggle')
    });

    it('should execute onContainerToggle after "DeckPanelLoaded" event', () => {
      expect(defaultHooks.onContainerToggle).not.toHaveBeenCalledWith({});
      bus.publish("DeckPanelLoaded", {});
      expect(defaultHooks.onContainerToggle).toHaveBeenCalledWith({});
    });

    it('should execute onContainerToggle after "CarouselSlideLoaded" event', () => {
      expect(defaultHooks.onContainerToggle).not.toHaveBeenCalledWith({});
      bus.publish("CarouselSlideLoaded", {});
      expect(defaultHooks.onContainerToggle).toHaveBeenCalledWith({});
    });

    it('should execute onContainerToggle after "LightboxOpened" event', () => {
      expect(defaultHooks.onContainerToggle).not.toHaveBeenCalledWith({});
      bus.publish("LightboxOpened", {});
      expect(defaultHooks.onContainerToggle).toHaveBeenCalledWith({});
    });
  });

  describe('#load()', () => {
    it('should load places', (done) => {
      const ctrl = controller(model, defaultHooks);
      ctrl.loadPlaces()
        .then(() => {
          expect(ctrl.places).toBe(places);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should accept and send properties to model', (done) => {
      const ctrl = controller(model, defaultHooks);
      const properties = { test: 'test' };
      spyOn(model, 'getPlaces').and.callThrough();

      ctrl.loadPlaces(properties)
        .then(() => {
          expect(model.getPlaces).toHaveBeenCalledWith(jasmine.objectContaining(properties));
        })
        .then(done)
        .catch(done.fail);
    });
  });
});
