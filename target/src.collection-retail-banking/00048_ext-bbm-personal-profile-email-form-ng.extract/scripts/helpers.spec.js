import helpers from './helpers';
import plugins from 'lib-bbm-plugins';
import { ToolbarButtonEvent } from './constants';

describe('helpers', () => {
  const alertDialog = {
    show: () => { },
    hide: () => { },
  };

  const filters = {    
    'i18n': key => key,        
  };

  const $filter = filter => ((...args) => {
    return filters[filter].apply(null, args);
  });

  let helpersInstance;

  beforeEach(() => {
    helpersInstance = helpers({ $filter });

    spyOn(plugins, 'AlertDialog').and.returnValue(alertDialog);
  });

  describe('onInit', () => {
    it('should delete email once user confirmed deleting', done => {
      const handlers = {};

      spyOn(window, 'addEventListener').and.callFake((eventType, handler) => {
        handlers[eventType] = handler;
      });

      const ctrl = {
        deleteUserEmail: jasmine.createSpy('deleteUserEmail'),
      };

      spyOn(alertDialog, 'show').and.returnValue(Promise.resolve({
        callback: 'confirm',
      }));

      helpersInstance.onInit(ctrl);

      handlers[ToolbarButtonEvent.DELETE]();

      setTimeout(() => {
        expect(ctrl.deleteUserEmail).toHaveBeenCalled();
        done();
      }, 0);
    });
  });
});