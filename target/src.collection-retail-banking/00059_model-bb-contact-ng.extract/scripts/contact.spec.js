import Model from './contact';
import { Preference } from './constants';

describe('model-bb-contact-ng::model', function() {
  const contactData = {};
  // Mock for widget object
  const mockWidget = {
    getBooleanPreference: (pref) => {
      let result;
      switch(pref) {
        case Preference.SHOW_AVATAR:
          result = true;
          break;
        case Preference.CONTACT_NEW:
          result = false;
          break;
      }
      return result;
    },
    getLongPreference: (pref) => {
      let result;
      switch(pref) {
        case Preference.PAGE_SIZE:
          result = 50;
          break;
        case Preference.NOTIFICATION_DISMISS_TIME:
          result = 3;
          break;
        case Preference.MAX_NAV_PAGES:
          result = 3;
          break;
      }
      return result;
    },
    getStringPreference: (pref) => {
      let result;
      switch(pref) {
        case Preference.GROUP_NAME:
          result = 'test';
          break;
        case Preference.PAGINATION_TYPE:
          result = 'pagination';
          break;
      }
      return result;
    },
  };
  const rawContacts = [
    {
      name: 'Alex Sandar',
      accountIBAN: 'NL32 INGB 2342 2342 3'
    }
  ];

  const bbStorage = {
    getItem: () => {},
    setItem: () => {}
  };

  const bbChallenge = {
    create: (method, options) => method,
  }

  function getModel(widget = mockWidget) {
    return Model(Promise, contactData, widget, bbStorage, bbChallenge);
  }

  describe('#getNewContactObject', () => {
    it('should return new contact object', () => {
      const newContact = getModel().getNewContactObject();
      expect(newContact).toBeObject();
      expect(newContact.name).toBeDefined();
      expect(newContact.accounts).toBeArray();
      expect(newContact.accounts.length).toEqual(0);
    });
  });

  describe('#createContact', () => {
    it('should create a contact successfully', done => {
      const contact = 'contact';
      const response = {
        headers: {},
        data: {
          id: "123"
        }
      };
      contactData.postContactsRecord = jasmine.createSpy('postContactsRecord').and.returnValue(Promise.resolve(response));

      getModel().createContact(contact)
        .then(response => {
          expect(contactData.postContactsRecord).toHaveBeenCalledWith(contact);
          expect(response.isApprovalRequired).toBeFalse();
          expect(response.data.status).not.toBeDefined();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should indicate that approval needed', done => {
      const contact = 'contact';
      const response = {
        headers: {},
        data: {
          status: 'APPROVAL_REQUIRED'
        },
        status: 202
      };
      contactData.postContactsRecord = jasmine.createSpy('postContactsRecord').and.returnValue(Promise.resolve(response));

      getModel().createContact(contact)
        .then(response => {
          expect(contactData.postContactsRecord).toHaveBeenCalledWith(contact);
          expect(response.isApprovalRequired).toBeTrue();
          expect(response.data.status).toBe('APPROVAL_REQUIRED');
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('#deleteContact', () => {
    it('should delete a contact successfully', done => {
      const response = {
        headers: {},
        data: {
          id: "123"
        }
      };
      contactData.deleteContactsRecord = jasmine.createSpy('deleteContactsRecord').and.returnValue(Promise.resolve(response));

      getModel().deleteContact({ id: '123' })
        .then(response => {
          expect(contactData.deleteContactsRecord).toHaveBeenCalledWith('123');
          expect(response.isApprovalRequired).toBeFalse();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should indicate that approval is needed', done => {
      const response = {
        headers: {},
        data: {
          status: 'APPROVAL_REQUIRED'
        },
        status: 202
      };
      contactData.deleteContactsRecord = jasmine.createSpy('deleteContactsRecord').and.returnValue(Promise.resolve(response));

      getModel().deleteContact({ id: '123' })
        .then(response => {
          expect(contactData.deleteContactsRecord).toHaveBeenCalledWith('123');
          expect(response.isApprovalRequired).toBeTrue();
          expect(response.data.status).toBe('APPROVAL_REQUIRED');
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('#getContacts', () => {
    it('should load list of contact', done => {
      const response = {
        headers: (attrib) => {
          let result;
          switch(attrib) {
            case 'x-total-count':
              result = 1;
              break;
            default:
              result = null;
          }
          return result;
        },
        data: rawContacts
      };
      contactData.getContacts = jasmine.createSpy('getContacts').and.returnValue(Promise.resolve(response));

      getModel().getContacts()
        .then(function(response) {
          expect(response.data).toBeDefined();
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('#getCurrentContact', () => {
    const storageKey = 'bb.contact.selected';
    const contact = rawContacts[0];

    beforeEach(() => {
      bbStorage.getItem = jasmine.createSpy('getItem').and.returnValue(Promise.resolve(contact));
    });

    afterEach(() => {
      bbStorage.getItem = null;
    });

    it('should get the current contact from preference', (done) => {
      getModel().getCurrentContact()
        .then(currentContact => {
          expect(currentContact).toEqual(contact);
          done();
        })
        .catch(done.fail);
    });

    it('should use bbStorage with default key', () => {
      // Return empty group name preference
      const widget = Object.assign({}, mockWidget, {
        getStringPreference: jasmine.createSpy('getStringPreference').and.returnValue(''),
      });
      getModel(widget).getCurrentContact();
      expect(bbStorage.getItem).toHaveBeenCalledWith(storageKey);
    });

    it('should use bbStorage with key suffixing group name', () => {
      const key = `${storageKey}.${mockWidget.getStringPreference(Preference.GROUP_NAME)}`;
      getModel().getCurrentContact();
      expect(bbStorage.getItem).toHaveBeenCalledWith(key);
    });
  });

  describe('#storeContactAsCurrent', () => {
    const storageKey = 'bb.contact.selected';

    beforeEach(() => {
      bbStorage.setItem = jasmine.createSpy('setItem');
    });

    afterEach(() => {
      bbStorage.setItem = null;
    });

    it('should store the contact using bbStorage with default key', () => {
      const contact = rawContacts[0];
      // Return empty group name preference
      const widget = Object.assign({}, mockWidget, {
        getStringPreference: jasmine.createSpy('getStringPreference').and.returnValue(''),
      });

      getModel(widget).storeContactAsCurrent(contact);

      expect(bbStorage.setItem).toHaveBeenCalledWith(storageKey, contact);
    });

    it('should store the contact using bbStorage with key suffixing group name', () => {
      const contact = rawContacts[0];
      const key = `${storageKey}.${mockWidget.getStringPreference(Preference.GROUP_NAME)}`;
      getModel().storeContactAsCurrent(contact);

      expect(bbStorage.setItem).toHaveBeenCalledWith(key, contact);
    });
  });

  describe('#updateContact', () => {
    it('should update the contact', done => {
      const response = {
        headers: {},
        data: {
          id: "123"
        }
      };

      contactData.putContactsRecord = jasmine.createSpy('putContactsRecord').and.returnValue(Promise.resolve(response));

      getModel().updateContact({})
        .then(response => {
          expect(response.isApprovalRequired).toBeFalse();
        })
        .then(done)
        .catch(done.fail);
    });

    it('should indicate that approval is needed', done => {
      const response = {
        headers: {},
        data: {
          status: 'APPROVAL_REQUIRED'
        },
        status: 202
      };

      contactData.putContactsRecord = jasmine.createSpy('putContactsRecord').and.returnValue(Promise.resolve(response));

      getModel().updateContact({})
        .then(response => {
          expect(response.isApprovalRequired).toBeTrue();
          expect(response.data.status).toBe('APPROVAL_REQUIRED');
        })
        .then(done)
        .catch(done.fail);
    });
  });

  describe('#getContactPreferences', () => {
    it('should return widget preferences object', () => {
      const preferences = {
        showAvatar: true,
        pageSize: 50,
        maxNavPages: 3,
        paginationType: 'pagination',
        notificationDismissTime: 3,
        contactNew: false,
        groupName: 'test',
      };
      expect(getModel().getContactPreferences()).toEqual(preferences);
    });
  });
});
