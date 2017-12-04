/* global expect, describe, beforeEach, jasmine, it, fail, spyOn */
/* eslint new-cap: ["error", { "capIsNew": false }] */

import plugins from 'lib-bbm-plugins';
import * as extHooks from './hooks';

function noop() {}

describe('ext-bbm-contact-form-ng:hooks', function() {
  const alertDialog = {
    show() {},
    hide() {},
  };

  beforeEach(() => {
    spyOn(plugins, 'AlertDialog').and.returnValue(alertDialog);

    spyOn(alertDialog, 'show').and.returnValue(Promise.resolve({}));
    spyOn(alertDialog, 'hide').and.returnValue(Promise.resolve({}));
  });

  describe('deleteContact', function() {
    it('should trigger a confirm dialog', function() {
      extHooks.deleteContact({}, noop, noop);
      expect(alertDialog.show).toHaveBeenCalled();
    });

    it('should call a given confirm function once user confirmed deleting', function(done) {
      alertDialog.show.and.returnValue(Promise.resolve({
        callback: 'confirm',
      }));

      extHooks.deleteContact({}, done, fail);
    });

    it('should call a given cancel function once user declined deleting', function(done) {
      const onCancel = jasmine.createSpy('onCancel');

      alertDialog.show.and.returnValue(Promise.resolve({
        callback: 'cancel',
      }));

      extHooks.deleteContact({}, noop, onCancel);

      setTimeout(function() {
        expect(onCancel).toHaveBeenCalled();
        done();
      }, 0);
    });

    it('should call a given cancel function if confirm dialog failed', function(done) {
      const onCancel = jasmine.createSpy('onCancel');

      alertDialog.show.and.returnValue(Promise.reject());

      extHooks.deleteContact({}, noop, onCancel);

      setTimeout(function() {
        expect(onCancel).toHaveBeenCalled();
        done();
      }, 0);
    });
  });
});
