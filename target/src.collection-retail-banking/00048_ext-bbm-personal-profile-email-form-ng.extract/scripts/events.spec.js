import plugins from 'lib-bbm-plugins';
import extEvents from './events';
import { Event } from './constants';

describe('ext-bbm-personal-profile-email-form-ng:events', () => {
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

  describe('Events:: bb.event.personalProfile.email.delete.start', () => {
    it('should hide activity indicator', () => {
      const expectedMessage = 'message.personalProfile.email.delete.start';
      const events = extEvents(context);

      events[Event.EMAIL_DELETE_START]();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Events:: bb.event.personalProfile.email.delete.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.EMAIL_DELETE_DONE]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      const events = extEvents(context);

      events[Event.EMAIL_DELETE_DONE]();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.email.delete.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.EMAIL_DELETE_FAILED]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      const events = extEvents(context);

      events[Event.EMAIL_DELETE_FAILED]();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.email.create.start', () => {
    it('should hide activity indicator', () => {
      const expectedMessage = 'message.personalProfile.email.create.start';
      const events = extEvents(context);

      events[Event.EMAIL_CREATE_START]();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Events:: bb.event.personalProfile.email.create.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.EMAIL_CREATE_DONE]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      const events = extEvents(context);

      events[Event.EMAIL_CREATE_DONE]();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.email.create.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.EMAIL_CREATE_FAILED]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      const events = extEvents(context);

      events[Event.EMAIL_CREATE_FAILED]();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.email.edit.start', () => {
    it('should hide activity indicator', () => {
      const expectedMessage = 'message.personalProfile.email.edit.start';
      const events = extEvents(context);

      events[Event.EMAIL_EDIT_START]();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Events:: bb.event.personalProfile.email.edit.done', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.EMAIL_EDIT_DONE]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      const events = extEvents(context);

      events[Event.EMAIL_EDIT_DONE]();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('Events:: bb.event.personalProfile.email.edit.failed', () => {
    it('should hide activity indicator', () => {
      const events = extEvents(context);

      events[Event.EMAIL_EDIT_FAILED]();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      const events = extEvents(context);

      events[Event.EMAIL_EDIT_FAILED]();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });
});
