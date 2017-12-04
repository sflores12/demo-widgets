import plugins from 'lib-bbm-plugins';
import extEvents from './events';
import { Event } from './constants';

describe('ext-bbm-product-details-form-ng:Events', () => {
  const context = {
    $filter: () => key => key,
  };

  beforeEach(() => {
    const activityIndicator = jasmine.createSpyObj('activityIndicator', ['show', 'hide']);
    const snackbar = jasmine.createSpyObj('snackbar', ['error', 'hide', 'success']);

    activityIndicator.show.and.returnValue(Promise.resolve({}));
    activityIndicator.hide.and.returnValue(Promise.resolve({}));

    snackbar.error.and.returnValue(Promise.resolve({}));

    spyOn(plugins, 'ActivityIndicator').and.returnValue(activityIndicator);
    spyOn(plugins, 'Snackbar').and.returnValue(snackbar);
  });

  describe('Event::bb.event.productDetails.alias.edit.start', () => {
    it('should hide activity indicator', () => {
      const expectedMessage = 'message.productDetails.alias.edit.start';
      const events = extEvents(context);

      events[Event.PRODUCT_ALIAS_EDIT_START]();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Event::bb.event.productDetails.alias.edit.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PRODUCT_ALIAS_EDIT_DONE]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      const events = extEvents(context);

      events[Event.PRODUCT_ALIAS_EDIT_DONE]();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('Event::bb.event.productDetails.alias.edit.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PRODUCT_ALIAS_EDIT_FAILED]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      const events = extEvents(context);

      events[Event.PRODUCT_ALIAS_EDIT_FAILED]();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });
});
