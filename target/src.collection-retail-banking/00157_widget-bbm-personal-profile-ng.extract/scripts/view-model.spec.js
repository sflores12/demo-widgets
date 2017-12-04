import ViewModel from './view-model';

describe('widget-bbm-personal-profile-ng::ViewModel', () => {
  let model;

  const bbStorage = {
    getItem: () => Promise.resolve(),
    setItem: () => Promise.resolve(),
  };

  const createModel = () => ({
    getUserPreferences: jasmine.createSpy('getUserPreferences').and.returnValue({})
  });

  const createViewModel = () => ViewModel(model, bbStorage);

  const mockState = (state) => {
    spyOn(bbStorage, 'getItem').and.returnValue(Promise.resolve(state));
  };

  const createUser = () => ({
    area: "North Holland",
    citizenship: "ES",
    city: "Amsterdam",
    dateOfBirth: "20-09-1988",
    emails: [{
      value: "scerveza@gmail.com",
      primary: true
    }],
    externalId: "externalBankId1",
    firstName: "Sara",
    houseNumber: "388",
    id: "1",
    imageAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAA…",
    lastName: "Cerveza",
    legalEntityId: "1enty",
    phones: [{
      value: "31-6-298-51-498",
      primary: true
    }, {
      value: "31-7-315-77-497",
      primary: false
    }],
    postalCode: "2023DE",
    street: "Hoofdweg"
  });

  beforeEach(() => {
    model = createModel();
  });

  describe('Methods', () => {
    let viewModel;

    beforeEach(() => {
      viewModel = createViewModel();
    });

    describe('#setUser', () => {
      it('should set the user', () => {
        const user = createUser();

        viewModel.setUser(user);
        expect(viewModel.state.user.data).toEqual(user);
      })
    });

    describe('#getUserData', () => {
      it('should return the user data', () => {
        const user = createUser();

        viewModel.setUser(user);
        expect(viewModel.getUserData()).toEqual(user);
      });
    });

    describe('#setFormPhoneState', () => {
      it('should set the phone data to the form state', () => {
        const phone = {
          value: '31-6-298-51-498',
          primary: true
        };

        viewModel.setFormPhoneState(phone);
        expect(viewModel.state.form.data.phone).toEqual(phone);
      });
    });

    describe('#setFormEmailState', () => {
      it('should set the email data to the form state', () => {
        const email = {
          value: 'scerveza@gmail.com',
          primary: true
        };

        viewModel.setFormEmailState(email);
        expect(viewModel.state.form.data.email).toEqual(email);
      });
    });

    describe('#setFormLoading', () => {
      it('should set the given loading state to the form state', () => {
        expect(viewModel.state.form.loading).toEqual(false);

        viewModel.setFormLoading(true);
        expect(viewModel.state.form.loading).toEqual(true);
      });
    });

    describe('#setFormError', () => {
      it('should set the given error to the form state', () => {
        const error = "Error";

        expect(viewModel.state.form.error).toEqual(null);

        viewModel.setFormError(error);
        expect(viewModel.state.form.error).toEqual(error);
      });
    });

    describe('#selectEmailByIndex', () => {
      it('should select an email by setting an index to the selectedEmail state', () => {
        const index = 1;

        viewModel.selectEmailByIndex(index);
        expect(viewModel.state.selectedEmail.index).toEqual(index);
      });
    });

    describe('#selectPhoneByIndex', () => {
      it('should select a phone by setting an index to the selectedPhone state', () => {
        const index = 1;

        viewModel.selectPhoneByIndex(index);
        expect(viewModel.state.selectedPhone.index).toEqual(index);
      });
    });

    describe('#resetSelectedEmail', () => {
      it('should set the initial state to the selectedEmail state', () => {
        const index = 1;
        const initialState = null;

        viewModel.selectEmailByIndex(index);
        expect(viewModel.state.selectedEmail.index).toEqual(index);

        viewModel.resetSelectedEmail(initialState);
        expect(viewModel.state.selectedEmail.index).toEqual(initialState);
      });
    });

    describe('#resetSelectedPhone', () => {
      it('should set the initial state to the selectedPhone state', () => {
        const index = 1;
        const initialState = null;

        viewModel.selectPhoneByIndex(index);
        expect(viewModel.state.selectedPhone.index).toEqual(index);

        viewModel.resetSelectedPhone(initialState);
        expect(viewModel.state.selectedPhone.index).toEqual(initialState);
      });
    });

    describe('#isPhoneSelected', () => {
      it('should check if the phone is selected', () => {
        const index = 1;

        expect(viewModel.isPhoneSelected()).toBe(false);

        viewModel.selectPhoneByIndex(index);
        expect(viewModel.isPhoneSelected()).toBe(true);
      });
    });

    describe('#isEmailSelected', () => {
      it('should check if the email is selected', () => {
        const index = 1;

        expect(viewModel.isEmailSelected()).toBe(false);

        viewModel.selectEmailByIndex(index);
        expect(viewModel.isEmailSelected()).toBe(true);
      });
    });

    describe('#setUserLoading', () => {
      it('should set the given loading state to the user', () => {
        const viewModel = createViewModel();

        expect(viewModel.state.user.loading).toEqual(false);

        viewModel.setUserLoading(true);
        expect(viewModel.state.user.loading).toEqual(true);
      });
    });

    describe('#setUserError', () => {
      it('should set the given error to the user', () => {
        const viewModel = createViewModel();
        const error = "Error";

        expect(viewModel.state.user.error).toEqual(null);

        viewModel.setUserError(error);
        expect(viewModel.state.user.error).toEqual(error);
      });
    });

    describe('#fetch', () => {
      it('should read the state from the storage', done => {
        const state = {};

        mockState(state);

        const viewModel = createViewModel();
        viewModel.fetch().then(() => {
          expect(viewModel.state).toBe(state);
          done();
        });
      });
    });

    describe('#save', () => {
      it('should save the current state to the storage', done => {
        spyOn(bbStorage, 'setItem');

        mockState({});

        const viewModel = createViewModel();
        viewModel.fetch()
          .then(() => viewModel.save())
          .then(() => {
            expect(bbStorage.setItem).toHaveBeenCalledWith('widget-bbm-personal-profile-ng:state', viewModel.state);
            done();
          });
      });
    });
  });
});
