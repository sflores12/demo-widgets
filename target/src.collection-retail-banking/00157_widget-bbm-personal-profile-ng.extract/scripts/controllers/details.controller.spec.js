import DetailsController from './details.controller';
import * as defaultHooks from '../default-hooks';
import {
  DETAILS_CONTROLLER_KEY,
  Intent
} from '../constants';

const state = {
  user: {
    error: null,
    loading: false,
    data: null,
  },
  form: {
    data: {
      phone: {
        value: null,
        primary: false,
      },
      email: {
        value: null,
        primary: false,
      },
    },
    loading: false,
    error: null,
  },
  selectedPhone: {
    index: null,
  },
  selectedEmail: {
    index: null,
  },
};

describe(`${DETAILS_CONTROLLER_KEY}::Controller`, () => {
  const widget = {
    getId: () => '123',
  };

  const bus = {
    publish: () => { },
    subscribe: () => { },
  };

  const model = {
    loadUsersProfile: () => Promise.resolve({}),
  };

  const viewModel = {
    state,

    getUserData: () => { },
    getFormData: () => { },
    getSelectedEmail: () => { },
    getSelectedPhone: () => { },

    setUser: () => { },
    setFormEmailState: () => { },
    setFormPhoneState: () => { },
    setUserLoading: () => { },
    setUserError: () => { },
    setFormLoading: () => { },
    setFormError: () => { },

    selectEmailByIndex: () => { },
    selectPhoneByIndex: () => { },
    isPhoneSelected: () => { },
    isEmailSelected: () => { },
    resetSelectedEmail: () => { },
    resetSelectedPhone: () => { },

    fetch: () => Promise.resolve(),
    save: () => Promise.resolve(),
  };

  const hooks = {
    processUser: (user) => user,
  };

  const bbIntent = {
    create: () => () => { },
    handle: () => { },
    init: () => { },
  };

  const mockIntents = intentMocks => {
    spyOn(bbIntent, 'create').and.callFake((name) => (
      intentMocks[name] ? intentMocks[name] : () => { }
    ));
  };

  const createController = () => new DetailsController(
    model,
    hooks,
    bus,
    widget,
    bbIntent,
    viewModel
  );

  const createUser = () => ({
    area: "North Holland",
    citizenship: "ES",
    city: "Amsterdam",
    dateOfBirth: "20-09-1988",
    email: [{
      value: "scerveza@gmail.com",
      primary: false,
    }, {
      value: "jim.smith@gmail.com",
      primary: false,
    }, {
      value: "john.smith@gmail.com",
      primary: true,
    }],
    externalId: "externalBankId1",
    firstName: "Sara",
    houseNumber: "388",
    id: "1",
    imageAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAA…",
    lastName: "Cerveza",
    legalEntityId: "1enty",
    phone: [{
      value: "31-6-298-51-498",
      primary: true,
    }, {
      value: "31-6-298-55-444",
      primary: false,
    }],
    postalCode: "2023DE",
    street: "Hoofdweg"
  });

  let ctrl;
  
  describe('Methods', () => {
    beforeEach(() => {
      ctrl = createController();
    });

    describe('#onInit', () => {
      it('should publish "cxp.item.loaded" and "bb.item.loaded" event', done => {
        spyOn(bus, 'publish');

        ctrl.$onInit()
          .then(() => {
            expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
            expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });

            done();
          })
          .catch(done.fail);
      });

      it('should trigger the load function at the init phase', done => {
        spyOn(model, 'loadUsersProfile').and.callThrough();

        ctrl.$onInit()
          .then(() => {
            expect(model.loadUsersProfile).toHaveBeenCalled();
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#load', () => {
      it('should load a user', done => {
        const user = createUser();

        spyOn(model, 'loadUsersProfile').and.callFake(() => Promise.resolve(user));

        ctrl.loadUser()
          .then((user) => {
            expect(user).toEqual(user);
            done();
          })
          .catch(done.fail);
      });

      it('should set the loading state to true at the begging of the loadUser method and false at the end', done => {
        spyOn(viewModel, 'setUserLoading');

        ctrl.loadUser()
          .then(() => {
            expect(viewModel.setUserLoading).toHaveBeenCalledTimes(2);
            done();
          })
          .catch(done.fail);
      });

      it('should set an error to the user state if there was the error during the load user phase', done => {
        const _error_ = 'Error';

        spyOn(model, 'loadUsersProfile').and.callFake(() => Promise.reject(_error_))
        spyOn(viewModel, 'setUserError');

        ctrl.loadUser()
          .catch((error) => {
            expect(error).toEqual(_error_);
            expect(viewModel.setUserError).toHaveBeenCalledWith(error);
            done();
          });
      });
    });
  });

  describe('Intents handlers', () => {
    describe('intent.bb.personalProfile.details.show', () => {
      it('should fetch the view model', done => {
        const intentHandlers = {};

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'fetch').and.callThrough();
        intentHandlers[Intent.SHOW_PERSONAL_PROFILE_DETAILS]();

        setTimeout(() => {          
          expect(viewModel.fetch).toHaveBeenCalled();
          done();
        }, 0);
      });
    });
  });
});
