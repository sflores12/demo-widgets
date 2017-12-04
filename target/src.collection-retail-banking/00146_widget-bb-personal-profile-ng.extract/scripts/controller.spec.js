import Controller from './controller';
import * as defaultHooks from './default-hooks';

describe('widget-bb-personal-profile-ng::Controller', function() {
  const user = {
    "BBID": "backbaseId1",
    "EXID": "externalBankId1",
    "entityId": "1enty",
    "id": "userId1",
    "imageAvatar": "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMbaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxNEEyMTcwNUNBQTExRTZBMEUyQTczNjAzMUQzOTMyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNEEyMTZGNUNBQTExRTZBMEUyQTczNjAzMUQzOTMyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjI4RjY4N0ZFNTQ2MTg0Q0VGMDM0NjNBMjA0Q0M2QTQwIiBzdFJlZjpkb2N1bWVudElEPSIyOEY2ODdGRTU0NjE4NENFRjAzNDYzQTIwNENDNkE0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uACZBZG9iZQBkwAAAAAEDABUEAwYKDQAACQYAAAzHAAARMwAAF9L/2wCEAAQDAwMDAwQDAwQG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",
    "firstName": "Henry",
    "lastName": "Duncan",
    "dateOfBirth": "14-03-1986",
    "street": "Clarendon",
    "houseNumber": "154",
    "postalCode": "2011GX",
    "area": "North Holland",
    "city": "Amsterdam",
    "citizenship": "FR",
    "phone": [
      "33-(499)517-0797"
    ],
    "email": "hduncan0@irs.gov"
  };

  let model;
  let bus;
  let widget;

  function getController() {
    return Controller(model, defaultHooks, bus, widget, Promise);
  }

  beforeEach(function() {
    model = {};
    bus = {
      publish: jasmine.createSpy('publish')
    };
    widget = {
      getId: () => '123'
    };
  });

  describe('$ctrl:onInit', function() {

    describe('#load', function () {
      beforeEach(function () {
        model.load = jasmine.createSpy('load').and.returnValue(Promise.resolve(user));
        bus.subscribe = jasmine.createSpy('subscribe');
      });

      it('should publish "cxp.item.loaded" and "bb.item.loaded" events', done => {
        const ctrl = getController();

        ctrl.$onInit();
        setTimeout(() => {
          /* event cxp.item.loaded will be deprecated */
          expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
          expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
          done();
        }, 100);

      });

      it('should initialize the user', done => {
        const ctrl = getController();

        ctrl.$onInit();

        setTimeout(() => {
          expect(ctrl.state.user.data).toEqual(user);
          expect(ctrl.state.user.loading).toBe(false);
          done();
        }, 100);
      });

      it('should set the user to empty on failure', done => {
        model.load = jasmine.createSpy('load').and.returnValue(Promise.reject('Could not load the user'));

        const ctrl = getController();

        ctrl.$onInit();

        setTimeout(() => {
          expect(ctrl.state.user.data).toBeNull();
          expect(ctrl.state.user.loading).toBe(false);
          expect(ctrl.state.user.error).toBe('Could not load the user');
          done();
        }, 100);
      });
    });
  });
});
