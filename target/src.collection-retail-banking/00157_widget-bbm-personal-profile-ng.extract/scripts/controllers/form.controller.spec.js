import FormController from './form.controller';
import { Intent, Event } from '../constants';

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

describe('widget-bbm-personal-profile-ng::FormController', () => {
  const widget = {
    getId: () => '123',
  };

  const bus = {
    publish: () => { },
    subscribe: () => { },
  };

  const model = {
    loadUsersProfile: () => Promise.resolve({}),
    updateUsersProfile: () => Promise.resolve({}),
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
    proccessUser: user => user,
  };

  const bbIntent = {
    create: () => () => { },
    handle: () => { },
    init: () => { },
  };

  const createController = () => new FormController(
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
    emails: [{
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
    id: "userId3",
    imageAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAA…",
    lastName: "Cerveza",
    legalEntityId: "1enty",
    phones: [{
      value: "31-6-298-51-498",
      primary: true,
    }, {
      value: "31-6-298-55-444",
      primary: false,
    }],
    postalCode: "2023DE",
    street: "Hoofdweg"
  });

  const createForm = () => ({
    email: {
      value: "james.smith@gmail.com",
      primary: false,
    },
    phone: {
      value: "31-6-298-55-555",
      primary: false,
    },
  });

  let ctrl;
  let user;

  it('should have appropriate variables in controller', () => {
    const ctrl = createController();

    expect(ctrl.updateUserEmail).toBeDefined();
    expect(ctrl.updateUserPhone).toBeDefined();
    expect(ctrl.deleteUserEmail).toBeDefined();
    expect(ctrl.deleteUserPhone).toBeDefined();
    expect(ctrl.$onInit).toBeDefined();
  });

  describe('Methods', () => {
    beforeEach(() => {
      ctrl = createController();
    });

    describe('#onInit', () => {
      it('should publish "cxp.item.loaded" and "bb.item.loaded" event', done => {
        spyOn(bus, 'publish');

        ctrl.$onInit();

        setTimeout(() => {
          expect(bus.publish).toHaveBeenCalledWith('cxp.item.loaded', { id: '123' });
          expect(bus.publish).toHaveBeenCalledWith('bb.item.loaded', { id: '123' });
          done();
        }, 0);
      });
    });

    describe('#updateUserEmail', () => {
      it('should update the user email with proper params', done => {
        const form = createForm();
        const user = createUser();
        const selectedEmail = {
          index: 1,
        };
        let newUser = createUser();
        newUser.emails.splice(selectedEmail.index, 1, form.email);

        spyOn(viewModel, 'getFormData').and.returnValue(form);
        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'getSelectedEmail').and.returnValue(selectedEmail);
        spyOn(viewModel, 'isEmailSelected').and.returnValue(true);
        spyOn(model, 'updateUsersProfile').and.callThrough();

        ctrl.updateUserEmail()
          .then(() => {
            expect(model.updateUsersProfile).toHaveBeenCalledWith(newUser);
            done();
          })
          .catch(done.fail);
      });

      it('should update the user by adding an additional email', done => {
        const form = createForm();
        const user = createUser();
        let newUser = createUser();
        newUser.emails.push(form.email);

        spyOn(viewModel, 'getFormData').and.returnValue(form);
        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'isEmailSelected').and.returnValue(false);
        spyOn(model, 'updateUsersProfile').and.callThrough();

        ctrl.updateUserEmail()
          .then(() => {
            expect(model.updateUsersProfile).toHaveBeenCalledWith(newUser);
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#updateUserPhone', () => {      
      it('should update the user phone with proper params', done => {
        const form = createForm();
        const user = createUser();
        const selectedPhone = {
          index: 1,
        };
        let newUser = createUser();
        newUser.phones.splice(selectedPhone.index, 1, form.phone);

        spyOn(viewModel, 'getFormData').and.returnValue(form);
        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'getSelectedPhone').and.returnValue(selectedPhone);
        spyOn(viewModel, 'isPhoneSelected').and.returnValue(true);
        spyOn(model, 'updateUsersProfile').and.callThrough();

        ctrl.updateUserPhone()
          .then(() => {
            expect(model.updateUsersProfile).toHaveBeenCalledWith(newUser);
            done();
          })
          .catch(done.fail);
      });

      it('should updated the user by adding an additional phone', done => {
        const form = createForm();
        const user = createUser();
        let newUser = createUser();
        newUser.phones.push(form.phone);

        spyOn(viewModel, 'getFormData').and.returnValue(form);
        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'isPhoneSelected').and.returnValue(false);
        spyOn(model, 'updateUsersProfile').and.callThrough();

        ctrl.updateUserPhone()
          .then(() => {
            expect(model.updateUsersProfile).toHaveBeenCalledWith(newUser);
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#deleteUserEmail', () => {      
      it('should delete the user email', done => {
        const form = createForm();
        const user = createUser();
        const selectedEmail = {
          index: 1,
        };
        let newUser = createUser();        
        newUser.emails.splice(selectedEmail.index, 1);

        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'getFormData').and.returnValue(form);        
        spyOn(viewModel, 'getSelectedEmail').and.returnValue(selectedEmail);
        spyOn(model, 'updateUsersProfile').and.callThrough();
        
        ctrl.deleteUserEmail()
          .then(() => {
            expect(model.updateUsersProfile).toHaveBeenCalledWith(newUser);
            done();
          })
          .catch(done.fail);
      });
    });

    describe('#deleteUserPhone', () => {
      it('should delete the user phone', done => {
        const form = createForm();
        const user = createUser();
        const selectedPhone = {
          index: 1,
        };
        let newUser = createUser();        
        newUser.phones.splice(selectedPhone.index, 1);

        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'getFormData').and.returnValue(form);        
        spyOn(viewModel, 'getSelectedPhone').and.returnValue(selectedPhone);
        spyOn(model, 'updateUsersProfile').and.callThrough();
        
        ctrl.deleteUserPhone()
          .then(() => {
            expect(model.updateUsersProfile).toHaveBeenCalledWith(newUser);
            done();
          })
          .catch(done.fail);
      });
    });
  });

  describe('Intents handlers', () => {
    describe('intent.bb.personalProfile.phone.edit', () => {
      it('should show the edit phone form', done => {
        const intentHandlers = {};
        const user = createUser();
        const selectedPhone = {
          index: 0,
        };

        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'getSelectedPhone').and.returnValue(selectedPhone);
        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'setFormPhoneState').and.callThrough();
        intentHandlers[Intent.SHOW_EDIT_PHONE_FORM]();

        setTimeout(() => {
          expect(viewModel.setFormPhoneState).toHaveBeenCalledWith(user.phones[selectedPhone.index]);
          done();
        }, 0);
      });
    });

    describe('intent.bb.personalProfile.email.edit', () => {
      it('should show the edit email form', done => {
        const intentHandlers = {};
        const user = createUser();
        const selectedPhone = {
          index: 0,
        };

        spyOn(viewModel, 'getUserData').and.returnValue(user);
        spyOn(viewModel, 'getSelectedEmail').and.returnValue(selectedPhone);
        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'setFormEmailState').and.callThrough();
        intentHandlers[Intent.SHOW_EDIT_EMAIL_FORM]();

        setTimeout(() => {
          expect(viewModel.setFormEmailState).toHaveBeenCalledWith(user.emails[selectedPhone.index]);
          done();
        }, 0);
      });
    });

    describe('intent.bb.personalProfile.email.add', () => {
      it('should show the create email form', done => {
        const intentHandlers = {};
        const user = createUser();
        const email = {
          value: null,
          primary: false,
        };

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'setFormEmailState').and.callThrough();
        intentHandlers[Intent.SHOW_ADD_EMAIL_FORM]();

        setTimeout(() => {
          expect(viewModel.setFormEmailState).toHaveBeenCalledWith(email);
          done();
        }, 0);
      });
    });

    describe('intent.bb.personalProfile.phone.add', () => {
      it('should show the create phone form', done => {
        const intentHandlers = {};
        const user = createUser();
        const phone = {
          value: null,
          primary: false,
        };

        spyOn(bbIntent, 'handle').and.callFake((name, fn) => {
          intentHandlers[name] = fn;
        });

        const ctrl = createController();

        spyOn(viewModel, 'setFormPhoneState').and.callThrough();
        intentHandlers[Intent.SHOW_ADD_PHONE_FORM]();

        setTimeout(() => {
          expect(viewModel.setFormPhoneState).toHaveBeenCalledWith(phone);
          done();
        }, 0);
      });
    });
  });
});
