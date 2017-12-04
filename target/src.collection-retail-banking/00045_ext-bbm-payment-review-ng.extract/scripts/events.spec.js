import plugins from 'lib-bbm-plugins';
import extEvents from './events';

describe('ext-bbm-payment-review-ng:events', () => {
  const context = {
    $filter: () => key => key,
    widget: {
      getBooleanPreference: () => true,
    },
  };

  const hasKey = (obj, key) => ({}.hasOwnProperty.call(obj, key));

  beforeEach(() => {
    const activityIndicator = jasmine.createSpyObj('activityIndicator', ['show', 'hide']);
    const snackbar = jasmine.createSpyObj('snackbar', ['error', 'hide', 'success']);

    activityIndicator.show.and.returnValue(Promise.resolve({}));
    activityIndicator.hide.and.returnValue(Promise.resolve({}));

    snackbar.error.and.returnValue(Promise.resolve({}));

    spyOn(plugins, 'ActivityIndicator').and.returnValue(activityIndicator);
    spyOn(plugins, 'Snackbar').and.returnValue(snackbar);
  });

  describe('bb.event.payment.started', () => {
    it('should show activity indicator', () => {
      const expectedMessage = 'message.payment.start';
      const events = extEvents(context);

      events['bb.event.payment.started']();

      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });

    it('should not be declared if the widget doesn\'t have a review page', () => {
      spyOn(context.widget, 'getBooleanPreference').and.returnValue(false);

      const events = extEvents(context);

      expect(hasKey(events, 'bb.event.payment.started')).toBe(false);
    });
  });

  describe('bb.event.payment.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events['bb.event.payment.done']();

      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success snackbar', () => {
      const events = extEvents(context);
      const expectedMessage = 'message.payment.done';

      events['bb.event.payment.done']();

      expect(plugins.Snackbar().success).toHaveBeenCalledWith(expectedMessage);
    });

    it('should not be declared if the widget doesn\'t have a review page', () => {
      spyOn(context.widget, 'getBooleanPreference').and.returnValue(false);

      const events = extEvents(context);

      expect(hasKey(events, 'bb.event.payment.done')).toBe(false);
    });
  });

  describe('bb.event.payment.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events['bb.event.payment.failed']();

      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error snackbar', () => {
      const events = extEvents(context);
      const expectedMessage = 'message.payment.failed';

      events['bb.event.payment.failed']();

      expect(plugins.Snackbar().error).toHaveBeenCalledWith(expectedMessage);
    });

    it('should not be declared if the widget doesn\'t have a review page', () => {
      spyOn(context.widget, 'getBooleanPreference').and.returnValue(false);

      const events = extEvents(context);

      expect(hasKey(events, 'bb.event.payment.failed')).toBe(false);
    });
  });
});
