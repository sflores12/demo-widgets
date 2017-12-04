/* global expect, describe, beforeEach, jasmine, it, fail, spyOn */

import Controller from './controller';
import * as defaultHooks from './default-hooks';

import { Message, IntentsKeys } from './constants';

describe('widget-bb-contact-ng::Controller', function() {
  const contacts = [
    { name: 'Alex Sandar', accountIBAN: 'NL32 INGB 2342 2342 3' },
    { name: 'Anne Tuominen', accountIBAN: 'NL32 INGB 2342 2342 3' },
    { name: 'Hale Normand', accountIBAN: 'NL32 INGB 2342 2342 3' },
    { name: 'Ingram Kenrick', accountIBAN: 'NL32 INGB 2342 2342 3' },
    { name: 'Harvey Ste', accountIBAN: 'NL32 INGB 2342 2342 3' },
    { name: 'Driscoll Stacey', accountIBAN: 'NL32 INGB 2342 2342 3' },
  ];

  const rawContacts = {
    totalCount: contacts.length,
    data: contacts,
  };

  let model;
  let bus;

  const win = {
    addEventListener: () => {},
  };

  const scope = {
    $digest: () => {},
  };

  const widget = {
      getId: () => '123'
  };

  const bbIntents = {
    handle: () => {},
    init: () => {},
  };

  function getController(dependencies = {}) {
    return new Controller(
      model,
      defaultHooks,
      bus,
      Promise,
      scope,
      win,
      widget,
      dependencies.intents || bbIntents);
  }

  const preferences = {
    showAvatar: true,
    pageSize: 50,
    groupName: '',
    notificationDismissTime: 3,
    contactNew: false,
  };

  const getContactsPromise = (params) => {
    const startIndex = params.from * params.size;
    const response = Object.assign({}, rawContacts, {
      data: contacts.slice(startIndex, startIndex + params.size),
    });
    return Promise.resolve(response);
  };

  beforeEach(() => {
    model = {
      getContactPreferences: () => preferences,
    };

    bus = {
      publish: jasmine.createSpy('publish')
    };
  });

  describe('$ctrl:onInit', function() {
    describe('getContacts', function() {
      beforeEach(function() {
        model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.resolve(rawContacts));
        model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
        model.getNewContactObject = jasmine.createSpy('getNewContactObject').and.returnValue({ name: '', accounts: [] });
        model.getContactPreferences = () => Object.assign({}, preferences, { contactNew: true });
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

      it('should initialize contacts', done => {
        const ctrl = getController();
        ctrl.$onInit();

        setTimeout(() => {
          expect(model.getNewContactObject).toHaveBeenCalled();
          expect(ctrl.state.contacts.data).toEqual(contacts);
          expect(ctrl.state.contacts.data.length).toEqual(6);
          expect(ctrl.state.contacts.loading).toBeFalse();
          expect(ctrl.state.contacts.hasMore).toBeFalse();
          expect(ctrl.hasContacts()).toBe(true);
          done();
        }, 100);
      });

      it('should set contacts to empty on failure', done => {
        model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.reject());

        const ctrl = getController();

        ctrl.$onInit();

        setTimeout(() => {
          expect(ctrl.state.contacts.data).toBeNull();
          expect(ctrl.state.contacts.loading).toBe(false);
          expect(ctrl.hasContacts()).toBe(false);
          done();
        }, 100);
      });

      describe('intents', () => {
        let intents;

        beforeEach(() => {
          intents = {
            handle: (id, handler) => {},
            init: () => {},
          };
        })

        it('should configure handler for create contact intent', done => {
          intents.handle = jasmine.createSpy('handle').and.callThrough();
          const ctrl = getController({ intents });

          ctrl.$onInit()
            .then(() => {
              expect(intents.handle)
                .toHaveBeenCalledWith(IntentsKeys.CONTACT_CREATE, ctrl.showNewContactForm);
            })
            .then(done)
            .catch(done.fail);
        });

        it('should initialize intents after succesful call', done => {
          intents.init = jasmine.createSpy('init').and.callThrough();
          const ctrl = getController({ intents });

          ctrl.$onInit()
            .then(() => {
              expect(intents.init).toHaveBeenCalled();
            })
            .then(done)
            .catch(done.fail);
        });
      });
    });

    describe('setupContact', function() {
      beforeEach(function() {
        model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.resolve(rawContacts));
        model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
        model.getNewContactObject = jasmine.createSpy('getNewContactObject').and.returnValue({ name: '', accounts: [] });
        bus.subscribe = jasmine.createSpy('subscribe');
      });

      it('should have an empty contact on new', done => {
        model.getContactPreferences = () => Object.assign({}, preferences, { contactNew: true });
        const ctrl = getController();
        ctrl.$onInit();

        setTimeout(() => {
          expect(model.getNewContactObject).toHaveBeenCalled();
          expect(ctrl.state.page).toBe('new');
          expect(ctrl.state.contact.data).toEqual({ name: '', accounts: [] });
          done();
        }, 100);
      });

      it('should have an existing contact on edit', done => {
        model.getContactPreferences = () => Object.assign({}, preferences, { contactNew: false });
        model.getCurrentContact = jasmine.createSpy('getCurrentContact').and.returnValue(Promise.resolve(contacts[0]));

        const ctrl = getController();
        ctrl.$onInit();

        setTimeout(() => {
          expect(model.getNewContactObject).not.toHaveBeenCalled();
          expect(ctrl.state.page).toBe('list');
          expect(ctrl.state.contact.data).toEqual(contacts[0]);
          done();
        }, 100);
      });
    });
  });

  describe('$ctrl:selectContact', function() {
    beforeEach(function() {
      model.storeContactAsCurrent = jasmine.createSpy('storeContactAsCurrent');
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      bus.publish = jasmine.createSpy('publish');
    });

    it('should store a copy of the selected contact', () => {
      const ctrl = getController();
      ctrl.state.page = 'list';

      ctrl.selectContact(contacts[0]);
      expect(ctrl.state.contact.data).not.toBe(contacts[0]);
    });

    it('should publish corresponding event on contact select', () => {
      const ctrl = getController();
      ctrl.state.page = 'list';

      ctrl.selectContact(contacts[0]);

      expect(bus.publish).toHaveBeenCalled();
      expect(ctrl.state.contact.data).toEqual(contacts[0]);
      expect(model.storeContactAsCurrent).toHaveBeenCalledWith(contacts[0]);
      expect(ctrl.state.page).toBe('details');
    });
  });

  describe('$ctrl:deleteContact', function() {
    beforeEach(function() {
      spyOn(defaultHooks, 'deleteContact');
      model.deleteContact = jasmine.createSpy('deleteContact').and.returnValue(Promise.resolve('contact deleted'));
      bus.publish = jasmine.createSpy('publish');
    });

    it('should call deleteContact hook', () => {
      const ctrl = getController();
      ctrl.state.contact.deleting = false;

      ctrl.deleteContact();

      expect(defaultHooks.deleteContact).toHaveBeenCalled();
    });

    it('shouldn\'t call deleteContact hook if contact is being deleting', () => {
      const ctrl = getController();
      ctrl.state.contact.deleting = true;

      ctrl.deleteContact();

      expect(defaultHooks.deleteContact).not.toHaveBeenCalled();
    });

    it('should delete contact when called', done => {
      const ctrl = getController();
      const cb = () => {};
      ctrl.state.contact.data = 'contact data';
      ctrl.state.page = 'not list';

      ctrl.deleteContact();

      const hookArgs = defaultHooks.deleteContact.calls.argsFor(0);
      const confirmCallback = hookArgs[1];
      expect(hookArgs[0]).toEqual('contact data');
      expect(confirmCallback).toBeFunction();
      expect(ctrl.state.page).toEqual('not list');

      confirmCallback()
        .then(res => {
          expect(ctrl.state.contact.deleting).toBeFalsy();
          expect(ctrl.state.page).toBe('list');
          expect(defaultHooks.deleteContact).toHaveBeenCalled();
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.delete.done');
        })
        .then(done)
        .catch(done.fail);

      expect(ctrl.state.contact.deleting).toBeTruthy();
    });

    it('should process delete contact with approval response', done => {
      model.deleteContact.and.returnValue(Promise.resolve({ isApprovalRequired: true }));

      const ctrl = getController();
      ctrl.state.contact.data = 'contact data';
      ctrl.state.page = 'not list';

      ctrl.deleteContact();

      const hookArgs = defaultHooks.deleteContact.calls.argsFor(0);
      const confirmCallback = hookArgs[1];
      expect(hookArgs[0]).toEqual('contact data');
      expect(confirmCallback).toBeFunction();
      expect(ctrl.state.page).toEqual('not list');

      confirmCallback()
        .then(res => {
          expect(ctrl.state.contact.deleting).toBeFalsy();
          expect(ctrl.state.page).toBe('not list');
          expect(defaultHooks.deleteContact).toHaveBeenCalled();
          expect(bus.publish).not.toHaveBeenCalledWith('bb.event.contact.delete.done');
        })
        .then(done)
        .catch(done.fail);

      expect(ctrl.state.contact.deleting).toBeTruthy();
    });
  });

  describe('$ctrl:hasContacts', function() {
    it('should return true if there are contacts', () => {
      const ctrl = getController();
      ctrl.state.contacts.data = contacts;

      expect(ctrl.hasContacts()).toBe(true);
    });

    it('should return false if there are no contacts', () => {
      const ctrl = getController();

      expect(ctrl.hasContacts()).toBe(false);
    });
  });

  describe('$ctrl:loadMore', function() {
    let doneSpy;

    const getContactsPromise = (params) => {
      const startIndex = params.from * params.size;
      const response = Object.assign({}, rawContacts, {
        data: contacts.slice(startIndex, startIndex + params.size),
      });
      return Promise.resolve(response);
    };

    beforeEach(function() {
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.getCurrentContact = jasmine.createSpy('getCurrentContact').and.returnValue(Promise.resolve(contacts[0]));
      bus.subscribe = jasmine.createSpy('subscribe');
    });

    it('should load next page of contacts', done => {
      const requests = [];

      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 1 });
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => {
        requests.push(params);
        return getContactsPromise(params);
      });

      const ctrl = getController();
      ctrl.$onInit()
        .then(ctrl.loadMore)
        .then(() => {
          expect(requests).toEqual([
            { from: 0, size: 1 },
            { from: 1, size: 1 },
          ]);
          expect(ctrl.state.contacts.data).toEqual([contacts[0], contacts[1]]);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should set that there are no more items to load', (done) => {
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(getContactsPromise);
      const ctrl = getController();
      ctrl.$onInit();
      ctrl.loadMore(doneSpy)
        .then(() => {
          expect(ctrl.state.contacts.hasMore).toBeFalse();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should set that there are more items to load', (done) => {
      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 1 });
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(getContactsPromise);
      const ctrl = getController();
      ctrl.$onInit();
      ctrl.loadMore(doneSpy)
        .then(() => {
          expect(ctrl.state.contacts.hasMore).toBeTrue();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should not make a request, if previous there are pending requests for contacts', (done) => {
      const requests = [];

      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 1 });
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => {
        requests.push(params);
        return getContactsPromise(params);
      });

      const ctrl = getController();
      ctrl.$onInit()
        .then(() => Promise.all([
          ctrl.loadMore(),
          ctrl.loadMore()
        ]))
        .then(() => {
          expect(requests).toEqual([
            { from: 0, size: 1 },
            { from: 1, size: 1 },
          ]);
          expect(ctrl.state.contacts.data).toEqual([contacts[0], contacts[1]]);
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('$ctrl:updateContact', function() {
    beforeEach(function() {
      bus.publish = jasmine.createSpy('publish');
    });

    it('should update current contact', done => {
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.updateContact = jasmine.createSpy('updateContact').and.returnValue(Promise.resolve({}));

      const ctrl = getController();
      ctrl.state.page = 'edit';

      const contact = { name: 'Alex Sandar', accountIBAN: 'NL32 INGB 2342 2342 3' };

      ctrl.saveContact(contact)
        .then(() => {
          expect(ctrl.state.page).toBe('details');
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.update.start');
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.update.done', { contact: ctrl.state.contact.data });
        })
        .then(done)
        .catch(done.fail);
    });

    it('should process update contact with approval', done => {
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.updateContact = jasmine.createSpy('updateContact').and.returnValue(Promise.resolve({ isApprovalRequired: true}));

      const ctrl = getController();
      ctrl.state.page = 'edit';

      const contact = { name: 'Alex Sandar', accountIBAN: 'NL32 INGB 2342 2342 3' };

      ctrl.saveContact(contact)
        .then(() => {
          expect(ctrl.state.page).toBe('details');
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.update.start');
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.update.done', { contact: null });
          expect(ctrl.state.contact.data).toBeNull();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should fail if there is no contact', done => {
      const ctrl = getController();
      ctrl.state.page = 'edit';

      ctrl.saveContact(undefined)
        .catch(err => {
          expect(err).toEqual('[Contacts] Current contact is not defined');
          done();
        }, done.fail);
    });

    it('should fail if request failed', done => {
      const error = 'arbError';
      model.updateContact = jasmine.createSpy('updateContact').and.returnValue(Promise.reject(error));

      const ctrl = getController();
      ctrl.state.page = 'edit';

      const contact = { name: 'Alex Sandar', accountIBAN: 'NL32 INGB 2342 2342 3' };

      ctrl.saveContact(contact)
        .then(done.fail)
        .catch((promiseError) => {
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.update.failed', { error });
          expect(promiseError).toEqual(error);
        })
        .then(done, done.fail);
    });
  });

  describe('$ctrl:createContact', () => {
    beforeEach(function() {
      bus.publish = jasmine.createSpy('publish');
    });

    it('should create a contact', done => {
      model.createContact = jasmine.createSpy('createContact').and.returnValue(Promise.resolve({ data: { id: 'test id' } }));

      const ctrl = getController();
      ctrl.state.page = 'new';

      const contact = { firstName: 'Alex', lastName: 'Sandar', accountIBAN: 'NL32 INGB 2342 2342 3' };

      ctrl.saveContact(contact)
        .then(() => {
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.create.start');
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.create.done');
          expect(ctrl.state.contact.data).toEqual({ id: 'test id' });
          expect(ctrl.state.page).toBe('details');
        })
        .then(done, done.fail);
    });

    it('should handle create contact with approval', done => {
      model.createContact = jasmine.createSpy('createContact').and.returnValue(Promise.resolve({ isApprovalRequired: true }));
      model.getCurrentContact = jasmine.createSpy('getCurrentContact').and.returnValue(Promise.resolve());

      const ctrl = getController();
      ctrl.state.page = 'new';

      const contact = { firstName: 'Alex', lastName: 'Sandar', accountIBAN: 'NL32 INGB 2342 2342 3' };

      ctrl.saveContact(contact)
        .then(() => {
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.create.start');
          expect(bus.publish).not.toHaveBeenCalledWith('bb.event.contact.create.done');
          expect(model.getCurrentContact).toHaveBeenCalled();
          expect(ctrl.state.contact.data).toBeUndefined();
          expect(ctrl.state.page).toBe('list');
        })
        .then(done, done.fail);
    });

    it('should fail if request failed', (done) => {
      const error = 'arbError';
      model.createContact = jasmine.createSpy('createContact').and.returnValue(Promise.reject(error));

      const ctrl = getController();
      ctrl.state.page = 'new';

      const contact = { firstName: 'Alex', lastName: 'Sandar', accountIBAN: 'NL32 INGB 2342 2342 3' };

      ctrl.saveContact(contact)
        .then(done.fail)
        .catch(promiseError => {
          expect(bus.publish).toHaveBeenCalledWith('bb.event.contact.create.failed', { error });
          expect(promiseError).toEqual(error);
        })
        .then(done);
    });
  });

  describe('$ctrl:closeContactDetails', () => {
    it('should navigate to list page', () => {
      const ctrl = getController();
      ctrl.state.page = 'edit';

      ctrl.closeContactDetails();
      expect(ctrl.state.page).toBe('list');
    });
  });

  describe('$ctrl:cancelContactForm', () => {
    beforeEach(function() {
      model.getCurrentContact = jasmine.createSpy('getCurrentContact');
    });

    it('should navigate to list page', () => {
      const ctrl = getController();

      model.getCurrentContact.and.returnValue(Promise.resolve('current contact'));

      ctrl.state.page = 'edit';

      ctrl.cancelContactForm();
      expect(ctrl.state.page).toBe('list');
    });

    it('should restore selection from the model', (done) => {
      model.getCurrentContact.and.returnValue(Promise.resolve('current contact'));

      const ctrl = getController();
      ctrl.state.contacts.data = [1, 2, 3];

      ctrl.cancelContactForm();

      setTimeout(() => {
        expect(ctrl.state.contact.data).toBe('current contact');
        done();
      }, 0);
    });

    it('should restore selection contacts', (done) => {
      spyOn(defaultHooks, 'getSelectedContact').and.returnValue('hello');
      model.getCurrentContact.and.returnValue(Promise.resolve(123));

      const ctrl = getController();
      ctrl.state.contacts.data = [1, 2, 3];

      ctrl.cancelContactForm();

      setTimeout(() => {
        expect(defaultHooks.getSelectedContact).toHaveBeenCalledWith([1, 2, 3], 123);
        expect(ctrl.state.contact.data).toBe('hello');
        done();
      }, 0);
    });
  });

  describe('$ctrl:showNewContactForm', () => {
    beforeEach(function() {
      model.getNewContactObject = jasmine.createSpy('getNewContactObject').and.returnValue({ name: '', accounts: [] });
    });

    it('should do nothing when page is new', () => {
      const ctrl = getController();
      ctrl.state.page = 'new';

      ctrl.showNewContactForm();
      expect(ctrl.state.page).toBe('new');
      expect(ctrl.state.contact.data).toBeNull();
    });

    it('should navigate and get new contact object when page is not new', () => {
      const ctrl = getController();
      ctrl.state.page = 'edit';

      ctrl.showNewContactForm();
      expect(ctrl.state.page).toBe('new');
      expect(ctrl.state.contact.data).toEqual({ name: '', accounts: [] });
    });
  });

  describe('$ctrl:showEditContactForm', () => {
    it('should do nothing when page is edit', () => {
      const ctrl = getController();
      ctrl.state.page = 'edit';

      ctrl.showEditContactForm();
      expect(ctrl.state.page).toBe('edit');
    });

    it('should navigate when page is not edit', () => {
      const ctrl = getController();
      ctrl.state.page = 'new';

      ctrl.showEditContactForm();
      expect(ctrl.state.page).toBe('edit');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.resolve(rawContacts));
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.getNewContactObject = jasmine.createSpy('getNewContactObject').and.returnValue({ firstName: '', lastName: '', accounts: [] });
      model.storeContactAsCurrent = jasmine.createSpy('storeContactAsCurrent');
      model.getContactPreferences = () => Object.assign({}, preferences, { contactNew: true });
    });

    describe(Message.CONTACT_UPDATE_DONE, () => {
      it('should use passed contact as a selected one', () => {
        const ctrl = getController();
        const contactUpdateHandlers = [];
        const contact = {};

        bus.subscribe = (evt, fn) => {
          if (evt === Message.CONTACT_UPDATE_DONE) {
            contactUpdateHandlers.push(fn);
          }
        };

        ctrl.$onInit();

        contactUpdateHandlers.forEach(fn => fn({ contact }));

        expect(ctrl.state.contact.data).toEqual(contact);
        expect(model.storeContactAsCurrent).toHaveBeenCalledWith(contact);
      });
    });

    describe(Message.CONTACT_CREATE_DONE, () => {
      beforeEach(() => {
        const data = [
          { name: 'contactA' },
          { name: 'contactB' },
          { name: 'contactC' },
          { name: 'contactD' },
        ];

        const totalCount = data.length;

        model.getContactSchema = jasmine.createSpy('getContactSchema')
          .and.returnValue({});

        model.getNewContactObject = jasmine.createSpy('getNewContactObject')
          .and.returnValue('new contact');

        model.getContacts = jasmine.createSpy('getContacts')
          .and.returnValue(Promise.resolve({
            data,
            totalCount,
          }));

        model.getCurrentContact = jasmine.createSpy('getCurrentContact')
          .and.returnValue(Promise.resolve(data[0]));

        bus.publish = jasmine.createSpy('publish');
      });

      it('should reload the current list of contacts', done => {
        let contactCreateHandler;

        model.getContactPreferences = () => Object.assign({}, preferences, { contactNew: true, pageSize: 3 });

        const expectedReloadRequestParams = {
          from: 0,
          size: 3,
        };

        bus.subscribe = jasmine.createSpy('subscribe').and.callFake((evt, fn) => {
          if (evt === Message.CONTACT_CREATE_DONE) {
            contactCreateHandler = fn;
          }
        });

        const ctrl = getController();

        ctrl.$onInit()
          .then(() => {
            contactCreateHandler();

            expect(model.getContacts).toHaveBeenCalledTimes(2);
            expect(model.getContacts.calls.argsFor(1)).toEqual([expectedReloadRequestParams]);

            done();
          })
          .catch(done.fail);
      });
    });

    describe(Message.CONTACT_SEARCH, () => {
      it('should call the search function with the given value', (done) => {
        let handlerFn;
        const eventObj = {
          detail: {
            action: 'input',
            text: 'test',
          }
        };
        bus.subscribe = jasmine.createSpy('subscribe');

        spyOn(win, 'addEventListener').and.callFake((event, fn) => {
          if (event === Message.CONTACT_SEARCH) {
            handlerFn = fn;
          }
        });

        const ctrl = getController();

        spyOn(ctrl, 'search');
        spyOn(ctrl, 'cancelSearch');

        ctrl.$onInit()
          .then(() => {
            handlerFn(eventObj);

            setTimeout(() => {
              expect(ctrl.cancelSearch).not.toHaveBeenCalled();
              expect(ctrl.search).toHaveBeenCalled();

              const args = ctrl.search.calls.argsFor(0);
              expect(args[0]).toBe('test');
              expect(args[2]).toEqual({ from: 0 });

              done();
            });
          })
          .catch(done.fail);
      });

      it('should not call the search function when search value does not meet requirements', (done) => {
        let handlerFn;
        const eventObj = {
          detail: {
            action: 'input',
            text: 't',
          }
        };
        bus.subscribe = jasmine.createSpy('subscribe');

        spyOn(win, 'addEventListener').and.callFake((event, fn) => {
          if (event === Message.CONTACT_SEARCH) {
            handlerFn = fn;
          }
        });

        const ctrl = getController();
        spyOn(ctrl, 'search');
        spyOn(ctrl, 'cancelSearch');

        ctrl.$onInit()
          .then(() => {
            handlerFn(eventObj);

            setTimeout(() => {
              expect(ctrl.cancelSearch).not.toHaveBeenCalled();
              expect(ctrl.search).not.toHaveBeenCalled();

              done();
            });
          })
          .catch(done.fail);
      });

      it('should cancel the search if the search was canceled', (done) => {
        let handlerFn;
        const event = {
          detail: {
            action: 'cancel',
            text: 'test',
          }
        };

        bus.subscribe = jasmine.createSpy('subscribe');

        spyOn(win, 'addEventListener').and.callFake((event, fn) => {
          if (event === Message.CONTACT_SEARCH) {
            handlerFn = fn;
          }
        });

        const ctrl = getController();

        spyOn(ctrl, 'search');
        spyOn(ctrl, 'cancelSearch');

        ctrl.$onInit()
          .then(() => {
            handlerFn(event);

            expect(ctrl.search).not.toHaveBeenCalled();
            expect(ctrl.cancelSearch).toHaveBeenCalled();
          })
          .then(done, done.fail);
      });
    });
  });

  describe('$ctrl#search', () => {
    beforeEach(() => {
      model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.resolve(rawContacts));
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.getCurrentContact = jasmine.createSpy('getCurrentContact').and.returnValue(Promise.resolve('current contact'));
      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 10 });
      bus.subscribe = jasmine.createSpy('subscribe');
    });

    it('should perform a request with a given query', (done) => {
      const query = 'test';

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => ctrl.search(query))
        .then(() => {
          expect(model.getContacts).toHaveBeenCalledWith({
            from: 0,
            size: 10,
            maxNavPages: 3,
            paginationType: 'load-more',
            query,
            totalItems: 6,
            currentPage: undefined,
          });
        })
        .then(done, done.fail);
    });

    it('should expose found results', (done) => {
      const query = 'test';
      const response = {
        totalCount: contacts.length,
        data: contacts,
      };

      model.getContacts.and.returnValue(Promise.resolve(response));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => ctrl.search(query))
        .then(() => {
          expect(ctrl.state.contactsSearch.data).toEqual(rawContacts.data);
          expect(ctrl.state.contactsSearch.totalCount).toBe(contacts.length);
        })
        .then(done, done.fail);
    });

    it('should set hasMore to true if there are more contacts', (done) => {
      const query = 'test';
      const response = {
        totalCount: contacts.length,
        data: contacts.slice(0, 1),
      };

      model.getContacts.and.returnValue(Promise.resolve(response));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => {
          expect(ctrl.state.contactsSearch.hasMore).toBeFalse();
        })
        .then(() => ctrl.search(query))
        .then(() => {
          expect(ctrl.state.contactsSearch.hasMore).toBeTrue();
        })
        .then(done, done.fail);
    });

    it('should set hasMore to false if there are no more contacts', (done) => {
      const query = 'test';
      const response = {
        totalCount: contacts.length,
        data: contacts.slice(0, 10),
      };

      model.getContacts.and.returnValue(Promise.resolve(response));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => {
          expect(ctrl.state.contactsSearch.hasMore).toBeFalse();
        })
        .then(() => ctrl.search(query))
        .then(() => {
          expect(ctrl.state.contactsSearch.hasMore).toBeFalse();
        })
        .then(done, done.fail);
    });

    it('should expose an error if search failed', (done) => {
      const query = 'test';

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'getContacts').and.returnValue(Promise.reject('Error'));
        })
        .then(() => ctrl.search(query))
        .then(done.fail, () => {
          expect(ctrl.error).not.toBe(null);
          done();
        });
    });

    it('should properly set state flags while searching', (done) => {
      const response = {
        totalCount: contacts.length,
        data: contacts.slice(0, 10),
      };

      model.getContacts.and.returnValue(Promise.resolve(response));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => {
          expect(ctrl.state.contactsSearch.loading).toBeFalse();
          expect(ctrl.state.searching).toBeFalse();
        })
        .then(() => {
          const searchPromise = ctrl.search('test');

          expect(ctrl.state.contactsSearch.loading).toBeTrue();
          expect(ctrl.state.searching).toBeTrue();

          return searchPromise;
        })
        .then(() => {
          expect(ctrl.state.contactsSearch.loading).toBeFalse();
          expect(ctrl.state.searching).toBeTrue();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should expose an error if search failed', (done) => {
      const query = 'test';

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => {
          spyOn(model, 'getContacts').and.returnValue(Promise.reject('Error'));
        })
        .then(() => ctrl.search(query))
        .then(done.fail)
        .catch(() => {
          expect(ctrl.error).not.toBe(null);
        })
        .then(done);
    });
  });

  describe('$ctrl#cancelSearch', () => {
    beforeEach(() => {
      model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.resolve(rawContacts));
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.getCurrentContact = jasmine.createSpy('getCurrentContact').and.returnValue(Promise.resolve('current contact'));
      bus.subscribe = jasmine.createSpy('subscribe');
    });

    it('Should reset contactsSearch params and the constactsSearch on the state', (done) => {
      const initialContactsSearchState = {
        data: null,
        loading: false,
        hasMore: false,
        totalCount: 0,
        query: '',
      };

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => {
          ctrl.state.contactsSearch.data = 'some data';
          ctrl.state.contactsSearch.totalCount = 123;
          ctrl.state.contactsSearch.query = 'search query';

          expect(ctrl.state.contactsSearch).not.toEqual(initialContactsSearchState);

          ctrl.cancelSearch();
          expect(ctrl.state.contactsSearch).toEqual(initialContactsSearchState);
          expect(ctrl.state.searching).toBeFalse();
        })
        .then(done, done.fail);
    });
  });

  describe('$ctrl:searchMore', function() {
    beforeEach(function () {
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.getCurrentContact = jasmine.createSpy('getCurrentContact').and.returnValue(Promise.resolve(contacts[0]));
      model.getNewContactObject = jasmine.createSpy('getNewContactObject').and.returnValue({ name: '', accounts: [] });
      bus.subscribe = jasmine.createSpy('subscribe');
    });

    it('should load next page of contacts', done => {
      const query = 'test';

      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 1 });
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => getContactsPromise(params));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => ctrl.search(query))
        .then(ctrl.searchMore)
        .then(() => {
          expect(model.getContacts.calls.argsFor(1)).toEqual([{ from: 0, size: 1, maxNavPages: 3, paginationType: 'load-more', query: 'test', totalItems: 6, currentPage: undefined }]);
          expect(model.getContacts.calls.argsFor(2)).toEqual([{ from: 1, size: 1, maxNavPages: 3, paginationType: 'load-more', query: 'test', totalItems: 6, currentPage: undefined }]);
        })
        .then(done, done.fail);
    });

    it('should not increase "from" parameter when a request failed', done => {
      const query = 'test';

      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 1 });
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => getContactsPromise(params));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => ctrl.search(query))
        .then(ctrl.searchMore)
        .then(() => {
          model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.reject("Error"));
          return ctrl.searchMore();
        })
        .then(done.fail, () => {
          model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => getContactsPromise(params));
          return ctrl.searchMore();
        })
        .then(() => {
          expect(model.getContacts).toHaveBeenCalledWith({
            from: 2,
            size: 1,
            maxNavPages: 3,
            paginationType: 'load-more',
            query,
            totalItems: 6,
            currentPage: undefined
          });

          done();
        })
        .then(done, done.fail);
    });

    it('should return a rejected promise when the search request has failed', done => {
      const query = 'test';

      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 1 });
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => getContactsPromise(params));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => ctrl.search(query))
        .then(ctrl.searchMore)
        .then(() => {
          model.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.reject("Error"));
          return ctrl.searchMore();
        })
        .then(done.fail, done);
    });

    it('should not load next page of contacts if the hasMore flag is false', done => {
      const query = 'test';

      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => getContactsPromise(params));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => {
          return ctrl.search(query)
            .then(() => {
              expect(ctrl.state.contactsSearch.hasMore).toBeFalse();
            })
        })
        .then(ctrl.searchMore)
        .then(() => {
          expect(model.getContacts).toHaveBeenCalledTimes(2);
        })
        .then(done)
        .catch(done.fail);
    });

    it('should not load next page of contacts if the loading flag is true', done => {
      const query = 'test';

      model.getContactPreferences = () => Object.assign({}, preferences, { pageSize: 1 });
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => getContactsPromise(params));

      const ctrl = getController();

      ctrl.$onInit()
        .then(() => ctrl.search(query))
        .then(() => {
          ctrl.searchMore();
          ctrl.searchMore();
        })
        .then(() => {
          expect(model.getContacts).toHaveBeenCalledTimes(3);
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('Manage contact accounts', () => {
    const newAccount = {
      name: 'Saving account updated',
      IBAN: 'NL91 ABNA 0417 1643 00',
    };

    const accounts = [
      {
        name: 'Saving account',
        IBAN: 'NL91 ABNA 0417 1643 00',
        BIC: 'DABAIE2D',
        addressLine1: 'Dam square 1',
        addressLine2: 'Amsterdam'
      },
      {
        name: 'Spendings account',
        alias: 'Waste',
        addressLine1: 'Dam square 2',
        addressLine2: 'Hoorn'
      },
      {
        name: 'Loan account',
        alias: 'LA',
        addressLine1: 'Dam square 3',
        addressLine2: 'Haarlem'
      }
    ];

    beforeEach(function() {
      model.getContacts = jasmine.createSpy('getContacts').and.callFake(params => getContactsPromise(params));
      model.getContactSchema = jasmine.createSpy('getContactSchema').and.returnValue({});
      model.getNewContactObject = jasmine.createSpy('getNewContactObject').and.returnValue({ name: '', accounts });
      model.getContactPreferences = () => Object.assign({}, preferences, { contactNew: true });
      bus.subscribe = jasmine.createSpy('subscribe');
    });

    it('should get account by provided index', (done) => {
      const ctrl = getController();
      ctrl.$onInit()
        .then(() => {
          expect(ctrl.getAccount(4)).toBe(null);

          expect(ctrl.getAccount(1)).toEqual({
            name: 'Spendings account',
            alias: 'Waste',
            addressLine1: 'Dam square 2',
            addressLine2: 'Hoorn'
          });
        })
        .then(done, done.fail);
    });

    it('should add a new account to the contact', (done) => {
      const ctrl = getController();
      ctrl.$onInit()
        .then(() => {
          expect(ctrl.state.contact.data.accounts.length).toEqual(3);
        })
        .then(() => ctrl.addAccount(newAccount))
        .then(() => {
          expect(ctrl.state.contact.data.accounts.length).toEqual(4);
          expect(ctrl.state.contact.data.accounts[3]).toEqual(newAccount);
        }).then(done, done.fail);
    });

    it('should update existing account by provided index', (done) => {
      const ctrl = getController();
      ctrl.$onInit()
        .then(() => {
          expect(ctrl.state.contact.data.accounts.length).toEqual(3);
          expect(ctrl.state.contact.data.accounts[1]).toEqual({
            name: 'Spendings account',
            alias: 'Waste',
            addressLine1: 'Dam square 2',
            addressLine2: 'Hoorn'
          });
        })
        .then(() => ctrl.updateAccount(newAccount, 1))
        .then(() => {
          expect(ctrl.state.contact.data.accounts.length).toEqual(3);
          expect(ctrl.state.contact.data.accounts[1]).toEqual(newAccount);
        }).then(done, done.fail);
    });

    it('should delete existing account by provided index', (done) => {
      const ctrl = getController();
      ctrl.$onInit()
        .then(() => {
          expect(ctrl.state.contact.data.accounts.length).toEqual(3);
          expect(ctrl.state.contact.data.accounts[0]).toEqual({
            name: 'Saving account',
            IBAN: 'NL91 ABNA 0417 1643 00',
            BIC: 'DABAIE2D',
            addressLine1: 'Dam square 1',
            addressLine2: 'Amsterdam'
          });
        })
        .then(() => ctrl.deleteContactAccount(1))
        .then(() => {
          expect(ctrl.state.contact.data.accounts.length).toEqual(2);
          expect(ctrl.state.contact.data.accounts[1]).toEqual({
            name: 'Loan account',
            alias: 'LA',
            addressLine1: 'Dam square 3',
            addressLine2: 'Haarlem'
          });
        })
        .then(done, done.fail);
    });
  });
});
