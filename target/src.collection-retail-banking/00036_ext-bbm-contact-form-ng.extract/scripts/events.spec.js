/* global expect, describe, beforeEach, jasmine, it, fail, spyOn */
/* eslint new-cap: ["error", { "capIsNew": false }] */

import plugins from 'lib-bbm-plugins';
import extEvents from './events';

describe('ext-bbm-contact-form-ng:events', () => {
  beforeEach(() => {
    const alertDialog = jasmine.createSpyObj('alertDialog', ['show', 'hide']);
    alertDialog.show.and.returnValue(Promise.resolve({}));
    alertDialog.hide.and.returnValue(Promise.resolve({}));

    const activityIndicator = jasmine.createSpyObj('activityIndicator', ['show', 'hide']);
    activityIndicator.show.and.returnValue(Promise.resolve({}));
    activityIndicator.hide.and.returnValue(Promise.resolve({}));

    const snackbar = jasmine.createSpyObj('snackbar', ['error', 'hide', 'success']);
    snackbar.error.and.returnValue(Promise.resolve({}));
    snackbar.hide.and.returnValue(Promise.resolve({}));
    snackbar.success.and.returnValue(Promise.resolve({}));

    spyOn(plugins, 'AlertDialog').and.returnValue(alertDialog);
    spyOn(plugins, 'ActivityIndicator').and.returnValue(activityIndicator);
    spyOn(plugins, 'Snackbar').and.returnValue(snackbar);
  });

  describe('deleteContact', () => {
    it('should hide activity indicator', () => {
      extEvents['bb.event.contact.delete.start']();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalledWith('Deleting contact');
    });
  });

  describe('deleteContactDone', () => {
    it('should hide activity indicator', () => {
      extEvents['bb.event.contact.delete.done']();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      extEvents['bb.event.contact.delete.done']();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('deleteContactFail', () => {
    it('should hide activity indicator', () => {
      extEvents['bb.event.contact.delete.failed']();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      extEvents['bb.event.contact.delete.failed']();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });

  describe('updateContact', () => {
    it('should display activity indicator', () => {
      extEvents['bb.event.contact.update.start']();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalled();
    });
  });

  describe('updateContactDone', () => {
    it('should hide activity indicator', () => {
      extEvents['bb.event.contact.update.done']();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      extEvents['bb.event.contact.update.done']();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('updateContactFail', () => {
    it('should hide activity indicator', () => {
      extEvents['bb.event.contact.update.failed']();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      extEvents['bb.event.contact.update.failed']();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });

  describe('createContact', () => {
    it('should display activity indicator', () => {
      extEvents['bb.event.contact.create.start']();
      expect(plugins.ActivityIndicator().show).toHaveBeenCalled();
    });
  });

  describe('createContactDone', () => {
    it('should hide activity indicator', () => {
      extEvents['bb.event.contact.create.done']();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show success notification', () => {
      extEvents['bb.event.contact.create.done']();
      expect(plugins.Snackbar().success).toHaveBeenCalled();
    });
  });

  describe('createContactFail', () => {
    it('should hide activity indicator', () => {
      extEvents['bb.event.contact.create.failed']();
      expect(plugins.ActivityIndicator().hide).toHaveBeenCalled();
    });

    it('should show error notification', () => {
      extEvents['bb.event.contact.create.failed']();
      expect(plugins.Snackbar().error).toHaveBeenCalled();
    });
  });
});
