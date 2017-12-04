import plugins from 'lib-bbm-plugins';
import extEvents from './events';
import { Event } from './constants';

describe('ext-bbm-personal-profile-phone-form-ng:events', () => {
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

  describe('Events:: bb.event.personalProfile.phone.delete.start', () => {
    it('should hide activity indicator', () => {
      const expectedMessage = 'message.personalProfile.phone.delete.start';
      const events = extEvents(context);

      events[Event.PHONE_DELETE_START]();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Events:: bb.event.personalProfile.phone.delete.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PHONE_DELETE_DONE]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      const events = extEvents(context);

      events[Event.PHONE_DELETE_DONE]();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.phone.delete.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PHONE_DELETE_FAILED]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      const events = extEvents(context);

      events[Event.PHONE_DELETE_FAILED]();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.phone.create.start', () => {
    it('should hide activity indicator', () => {
      const expectedMessage = 'message.personalProfile.phone.create.start';
      const events = extEvents(context);

      events[Event.PHONE_CREATE_START]();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Events:: bb.event.personalProfile.phone.create.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PHONE_CREATE_DONE]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      const events = extEvents(context);

      events[Event.PHONE_CREATE_DONE]();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.phone.create.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PHONE_CREATE_FAILED]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      const events = extEvents(context);

      events[Event.PHONE_CREATE_FAILED]();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.phone.edit.start', () => {
    it('should hide activity indicator', () => {
      const expectedMessage = 'message.personalProfile.phone.edit.start';
      const events = extEvents(context);

      events[Event.PHONE_EDIT_START]();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Events:: bb.event.personalProfile.phone.edit.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PHONE_EDIT_DONE]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      const events = extEvents(context);

      events[Event.PHONE_EDIT_DONE]();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.phone.edit.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.PHONE_EDIT_FAILED]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      const events = extEvents(context);

      events[Event.PHONE_EDIT_FAILED]();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });
});