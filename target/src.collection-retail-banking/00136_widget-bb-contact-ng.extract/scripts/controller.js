/* global window */
import angular from 'vendor-bb-angular';
import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';
import { Message, StatusClasses, TranslationKeys, IntentsKeys } from './constants';

const errorMessages = {
  [E_AUTH]: 'contact.model.error.auth',
  [E_CONNECTIVITY]: 'contact.model.error.connectivity',
  [E_USER]: 'contact.model.error.user',
  [E_UNEXPECTED]: 'contact.model.error.unexpected',
};

/**
 * Defines the default pageSize for the contact page
 * which is 50, as defined in the widget model.xml
 * @inner
 * @type {number}
 */
const DEFAULT_PAGE_SIZE = 50;

/**
 * Defines the default maxNavPages for the accounts page
 * as defined in the widget model.xml
 * @inner
 * @type {number}
 */
const DEFAULT_MAX_NAV_PAGES = 3;

/**
 * Defines the default paginationType for the accounts page
 * as defined in the widget model.xml
 * @inner
 * @type {string}
 */
const DEFAULT_PAGINATION_TYPE = 'load-more';

/**
 * @description
 * Defines default time in seconds after which
 * notification dismisses
 * @inner
 * @type {number}
 */
const DEFAULT_DISMISS_TIME = 3;

/**
 * Defines the min length for the search query
 * @inner
 * @type {number}
 */
const SEARCH_MIN_QUERY = 2;

/**
 * Defines the debouncing time for a search to happen (in ms)
 * @inner
 * @type {number}
 */
const SEARCH_INPUT_THRESHOLD = 1000;

/**
 * Defines widget search action enumeration
 * @inner
 * @enum {string}
 * @type {object}
 */
const searchActions = {
  CANCEL: 'cancel',
  INPUT: 'input',
};

/**
 * Defines widget page enumeration
 * @inner
 * @enum {string}
 * @type {object}
 */
const Page = {
  DETAILS: 'details',
  EDIT: 'edit',
  NEW: 'new',
  LIST: 'list',
};

/**
 * @description
 * Creates an error object for template
 *
 * @name uiError
 *
 * @inner
 * @param {object} modelError Error object
 * @type {function}
 * @returns {{message: string}}
 */
const uiError = modelError => {
  let message = '';

  if (modelError && modelError.code) {
    message = errorMessages[modelError.code];
  }

  return { message };
};

/**
 * @description
 * Creates an success status object for template
 *
 * @name uiStatusSuccess
 *
 * @inner
 * @param {string} key Translation keys
 * @type {function}
 * @returns {{i18n: string, class: string, isError: boolean}}
 */
const uiStatusSuccess = key => ({
  i18n: key,
  class: StatusClasses.SUCCESS,
  isError: false,
});

/**
 * @description
 * Creates an error status object for template
 *
 * @name uiStatusError
 *
 * @inner
 * @param {object} error Error object
 * @type {function}
 * @returns {{i18n: string, class: string, isError: boolean}}
 */
const uiStatusError = error => ({
  i18n: uiError(error).message,
  class: StatusClasses.ERROR,
  isError: true,
});

/**
 * @description
 * Throttles some action by a given delay (threshold)
 *
 * @name throttle
 *
 * @inner
 * @param {function} fn - function to execute
 * @param {int} threshold - delay in execution (in ms)
 * @type {function}
 * @returns {function}
 */
const throttle = (fn, threshold) => {
  let last;
  let timeout;

  return function throttledFn(...args) {
    const context = this;
    const now = Date.now();
    const timeDifference = now - last;

    if (last && timeDifference < threshold) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshold - timeDifference);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};


/**
 * @name ContactController
 *
 * @description
 * Contact widget controller
 *
 * @type {function}
 */
function ContactController(model, hooks, bus, Promise, scope, window, widget, bbIntents) {
  const ctrl = this;
  const preferences = model.getContactPreferences();
  const pageSize = preferences.pageSize || DEFAULT_PAGE_SIZE;
  const maxNavPages = preferences.maxNavPages || DEFAULT_MAX_NAV_PAGES;
  const paginationType = preferences.paginationType || DEFAULT_PAGINATION_TYPE;
  const dismissTime = preferences.notificationDismissTime || DEFAULT_DISMISS_TIME;
  const CONTACT_SELECTED = preferences.groupName ?
    `${Message.CONTACT_SELECTED}.${preferences.groupName}` : Message.CONTACT_SELECTED;

  const contacts = {
    rawItems: [],
    params: {
      from: 0,
      size: pageSize,
    },
  };

  const contactsSearch = {
    rawItems: [],
    activeSearches: 0,
    params: {
      from: 0,
      size: pageSize,
      maxNavPages,
      paginationType,
      query: null,
    },
  };

  let contactToBeSelectedNext;

  /**
   * @description
   * Holds current controller state made by
   * previous method executions
   *
   * @name state
   *
   * @type {object}
   */
  const state = {
    contact: {
      data: null,
      schema: null,
      deleting: false,
      updating: false,
      accountsChanged: false,
    },
    contacts: {
      data: null,
      loading: false,
      error: null,
      hasMore: false,
      dirty: false,
    },
    contactsSearch: {
      data: null,
      loading: false,
      error: null,
      hasMore: false,
      totalCount: 0,
      query: '',
    },
    status: null,
    initialLoading: true,
    error: null,
    showAvatar: preferences.showAvatar,
    editing: false,
    searching: false,
    page: preferences.contactNew ? Page.NEW : Page.LIST,
    pageParams: contactsSearch.params,
    notifications: [],
  };

  /**
   * @name navigateTo
   * @description Changes current page in widget
   * @type {function}
   * @inner
   * @param {string} page Page to navigate to
   */
  function navigateTo(page) {
    state.contact.accountsChanged = false;
    state.page = page;
  }

  /**
   * @name closeContactDetails
   *
   * @description
   * Handles click on Back button on Contact details page.
   * Navigates the user to the Contact list view.
   *
   * @type {function}
   */
  function closeContactDetails() {
    navigateTo(Page.LIST);
  }

  /**
   * Returns deep copy of currently selected contact
   *
   * @inner
   * @param {object} defaultValue Default value to return
   * @returns {object} Selected contact
   */
  function getSelectedContact(defaultValue) {
    return angular.copy(hooks.getSelectedContact(state.contacts.data, defaultValue));
  }

  /**
   * @name restoreSelection
   * @description Restores previously selected contact in selection
   * @type {function}
   * @inner
   */
  function restoreSelection() {
    model.getCurrentContact()
      .then(contact => {
        state.contact.data = getSelectedContact(contact);
      });
  }

  /**
   * @name cancelContactForm
   *
   * @description
   * Handles click on Back/Cancel button on Contact form page.
   * Restores selected contact, and navigates the user to the Contact list view.
   *
   * @type {function}
   */
  function cancelContactForm() {
    restoreSelection();
    navigateTo(Page.LIST);
  }

  /**
   * @name showNewContactForm
   *
   * @description
   * Handles click on Create new contact button.
   * Navigates the user to the Create new contact view.
   *
   * @type {function}
   */
  function showNewContactForm() {
    if (state.page !== Page.NEW) {
      state.status = null;
      state.contact.data = angular.copy(hooks.getNewContactObject(model.getNewContactObject()));
      navigateTo(Page.NEW);
    }
  }

  /**
   * @name showEditContactForm
   *
   * @description
   * Handles click on Edit button on contact details.
   * Navigates the user to the Create new contact view.
   *
   * @type {function}
   */
  function showEditContactForm() {
    if (state.page !== Page.EDIT) {
      state.status = null;
      navigateTo(Page.EDIT);
    }
  }

  /**
   * @name hasContacts
   * @description
   * if contacts found returns true else false
   *
   * @type {function}
   * @returns {boolean}
   */
  function hasContacts() {
    return Boolean(state.contacts.data && state.contacts.data.length);
  }

  /**
   * @name hasSearchContacts
   * @description
   * if contacts found returns true else false
   *
   * @type {function}
   * @returns {boolean}
   */
  function hasSearchContacts() {
    return Boolean(state.contactsSearch.data && state.contactsSearch.data.length);
  }

  /**
   * @name selectContact
   * @description
   * Handles clicks on contact in the list.
   * Navigates the user to the details view.
   *
   * @param {object} contact Contact object
   * @type {function}
   * @fires bb.event.contact.selected
   */
  function selectContact(contact) {
    state.contact.data = angular.copy(contact);
    state.status = null;

    navigateTo(Page.DETAILS);
    model.storeContactAsCurrent(angular.copy(contact));

    bus.publish(CONTACT_SELECTED, {
      contact: state.contact.data,
    });
  }

  /**
   * @name onContactSelect
   *
   * @description
   * Handles contact select
   *
   * @inner
   * @param {object} data Contact data
   * @type {function}
   */
  function onContactSelect(data) {
    state.contact.data = angular.copy(data.contact);
  }

  /**
   * Merges new items with existing items
   *
   * @inner
   * @name append
   * @type {function}
   * @returns {array} merged array of old and new items
   */
  function append(newItems, existingItems) {
    return [...existingItems, ...newItems];
  }

  /**
   * Replaces existing items with new items
   *
   * @inner
   * @name replace
   * @type {function}
   * @returns {array} new items
   */
  function replace(items) {
    return items;
  }

  /**
   * @name load
   *
   * @description
   * Loads contacts data, called from $onInit
   *
   * @see $onInit
   *
   * @type {function}
   * @param {object} params Request params
   * @param {number} params.from Page number
   * @param {number} params.size Page size
   * @param {function} merge Function to merge loaded contacts to the previous ones
   * @returns {Promise} Promise which is resolved once contacts are loaded and processed,
   *   or rejected in case of errors
   */
  function load(params, merge = replace) {
    const requestParams = hooks.processRequestParams(contacts.params, params);

    state.contacts.loading = true;

    return model.getContacts(requestParams)
      .then(raw => {
        contacts.rawItems = merge(raw.data, contacts.rawItems);
        state.contacts.hasMore = contacts.rawItems.length < raw.totalCount;
        state.pageParams.totalItems = raw.totalCount || 0;
        state.pageParams.currentPage = requestParams.currentPage;
        return contacts.rawItems;
      })
      .then(hooks.processContacts)
      .then(processedContacts => {
        state.contacts.data = processedContacts;
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .catch(error => {
        state.error = uiError(error);
        state.contacts.error = uiError(error);
        state.contacts.loading = false;
        bus.publish(Message.CONTACT_SERVER_ERROR, error);
      });
  }

  /**
   * @name changeSearchingState
   *
   * @description
   * Change "loading" state of the contactsSearch
   *
   * @type {function}
   * @inner
   */
  function changeSearchingState() {
    // Set "contactsSearch.loading" will only be set to false,
    // when there are no more active search processes
    state.contactsSearch.loading = !!--contactsSearch.activeSearches;
  }

  /**
   * @name search
   *
   * @description
   * Searches contacts data, called when searching and query length is big enough
   *
   * @type {function}
   * @param {string} query - query to search on
   * @param {function} merge Function to merge loaded contacts to the previous ones
   * @returns {Promise} Promise which is resolved once contacts are loaded and processed,
   *   or rejected in case of errors
   */
  function search(query, merge = replace, params = {}) {
    state.searching = state.contactsSearch.loading = true;
    contactsSearch.params.query = query;
    contactsSearch.activeSearches++;

    const requestParams = hooks.processSearchRequestParams(contactsSearch.params, params);
    return model.getContacts(requestParams)
      .then(raw => {
        contactsSearch.rawItems = merge(raw.data, contactsSearch.rawItems);
        state.contactsSearch.hasMore = contactsSearch.rawItems.length < raw.totalCount;
        state.contactsSearch.totalCount = raw.totalCount;
        return contactsSearch.rawItems;
      })
      .then(hooks.processSearchContacts)
      .then(processedSearchContacts => {
        state.contactsSearch.data = processedSearchContacts;
        state.contactsSearch.error = null;

        // Select first found contact
        if (state.contactsSearch.data.length && state.contactsSearch.data[0].contacts) {
          state.contact.data = getSelectedContact(state.contactsSearch.data[0].contacts[0]);
        }
        changeSearchingState();
      })
      .catch(error => {
        state.error = uiError(error);
        state.contactsSearch.error = uiError(error);
        changeSearchingState();
        bus.publish(Message.CONTACT_SERVER_ERROR, error);
        return Promise.reject(state.error);
      });
  }

  /**
   * @description
   * Get params for request.
   *
   * @name ContactController#getRequestParams
   *
   * @inner
   * @param {Object} params Custom params
   * @type {function}
   * @returns {Object} A request params
   */
  const getRequestParams = (params) => Object.assign({}, contactsSearch.params, {
    // In BE services pagination starts from 0 page, but in bootstrap directive it's 1
    from: params.currentPage - 1,
  }, params);

  /**
   * @description
   * Change page of displayed contacts.
   *
   * @name ContactController#changePage
   * @type {function}
   * @returns {Promise.<module:model-bb-contact-ng.Contacts, ModelError>}
   * A Promise with loaded contacts
   */
  const changePage = (params = {}) => {
    const currentParams = getRequestParams(params);

    return load(currentParams);
  };

  /**
   * @name reload
   *
   * @description
   * Reloads the entire list of stored contacts
   *
   * @inner
   * @type {function}
   * @param {function} cb Callback to be called on page reload
   *
   * @return {Promise}
   */
  function reload(cb = () => {}) {
    const from = 0;
    const pagesCount = contacts.params.from + 1;
    const size = pagesCount * contacts.params.size;
    let result;

    if (state.searching) {
      result = search(contactsSearch.params.query, replace, { from, size });
      state.contacts.dirty = true;
    } else {
      result = load({ from, size }, replace);
      state.contacts.dirty = false;
    }

    return result.then(cb);
  }

  /**
   * @name loadMore
   *
   * @description
   * Loads more contacts if they are available.
   *
   * @type {function}
   * @param {function} done callback to stop loading more
   * @returns {Promise}
   */
  function loadMore(done) {
    if (!state.contacts.hasMore) {
      return Promise.resolve();
    }

    if (state.contacts.loading) {
      return Promise.resolve();
    }

    contacts.params.from++;

    return load({}, append)
      .then(done)
      .catch(() => {
        contacts.params.from--;
        done();
      });
  }

  /**
   * @name searchMore
   *
   * @description
   * Searches more contacts if they are available.
   *
   * @type {function}
   * @param {function} done callback to stop loading more
   * @returns {Promise}
   */
  function searchMore(done) {
    if (!state.contactsSearch.hasMore) {
      return Promise.resolve();
    }

    if (state.contactsSearch.loading) {
      return Promise.resolve();
    }

    contactsSearch.params.from++;

    return search(contactsSearch.params.query, append)
      .then(done)
      .catch(error => {
        contactsSearch.params.from--;
        done();
        return Promise.reject(error);
      });
  }

  /**
   * @name selectActiveContact
   * @type {function}
   * @inner
   * @description
   * Selects a new contact if previous does not exist in a contacts group anymore
   */
  function selectActiveContact() {
    contactToBeSelectedNext = hooks.returnContactIfExists(state.contacts.data, state.contact.data);

    if (!contactToBeSelectedNext) {
      const index = (state.contacts.data || [])
        .findIndex((item) => item.id === state.contact.data.id);

      contactToBeSelectedNext = hooks
        .selectPrevContact(state.contacts.data, index, state.contact.data);
    }

    state.contact.data = angular.copy(contactToBeSelectedNext);
  }

  /**
   * @name onContactCreateStart
   *
   * @description
   * Handles contact create start
   *
   * @inner
   * @param {object} contact Contact object
   * @type {function}
   * @returns {*}
   */
  function onContactCreateStart() {
    state.contact.updating = true;
    bus.publish(Message.CONTACT_CREATE_START);
  }

  /**
   * @name onContactCreateDone
   *
   * @description
   * Handles contact create done
   *
   * @inner
   * @param {object} response Contact delete response object
   * @type {function}
   */
  function onContactCreateDone(response) {
    state.contact.updating = false;

    const key = response.isApprovalRequired ?
      TranslationKeys.CONTACT_CREATE_ACCEPTED : TranslationKeys.CONTACT_CREATE_SUCCESS;
    state.status = uiStatusSuccess(key);

    if (!response.isApprovalRequired) {
      state.contact.data = angular.copy(response.data);

      navigateTo(Page.DETAILS);
      bus.publish(Message.CONTACT_CREATE_DONE);
    } else {
      cancelContactForm();
    }
  }

  /**
   * @name onContactCreateFail
   *
   * @description
   * Handles contact create fail
   *
   * @inner
   * @param {object} err Error object
   * @type {function}
   */
  function onContactCreateFail(error) {
    state.contact.updating = false;
    state.status = uiStatusError(error);

    bus.publish(Message.CONTACT_CREATE_FAILED, { error });
    return Promise.reject(error);
  }

  /**
   * @name onContactDeleteStart
   *
   * @description
   * Handles preparations for contact delete
   *
   * @inner
   * @type {function}
   */
  function onContactDeleteStart() {
    state.status = null;
    state.contact.deleting = true;
  }

  /**
   * @name onContactDeleteDone
   *
   * @description
   * Handles contact delete
   *
   * @inner
   * @param {object} response Contact delete response object
   * @type {function}
   */
  function onContactDeleteDone(response) {
    state.contact.deleting = false;

    const key = response.isApprovalRequired ?
      TranslationKeys.CONTACT_DELETE_ACCEPTED : TranslationKeys.CONTACT_DELETE_SUCCESS;
    state.status = uiStatusSuccess(key);

    if (!response.isApprovalRequired) {
      navigateTo(Page.LIST);

      // Pass a callback to the reload function
      bus.publish(Message.CONTACT_DELETE_DONE);
    }
    contactToBeSelectedNext = null;
  }

  /**
   * @name onContactDeleteFail
   *
   * @description
   * Handles contact delete failed
   *
   * @inner
   * @param {object} err Error object
   * @type {function}
   */
  function onContactDeleteFail(error) {
    state.contact.deleting = false;
    state.status = uiStatusError(error);

    bus.publish(Message.CONTACT_DELETE_FAILED, { error });
  }

  /**
   * @name onContactUpdateStart
   *
   * @description
   * Handles contact update start
   *
   * @inner
   * @type {function}
   */
  function onContactUpdateStart() {
    state.contact.updating = true;
    bus.publish(Message.CONTACT_UPDATE_START);
  }

  /**
   * @name onContactUpdateDone
   *
   * @description
   * Response handler for successful Contact update request
   *
   * @inner
   * @param {object} response Contact update response object
   * @type {function}
   */
  function onContactUpdateDone(response) {
    state.contact.updating = false;

    const key = response.isApprovalRequired ?
      TranslationKeys.CONTACT_UPDATE_ACCEPTED : TranslationKeys.CONTACT_UPDATE_SUCCESS;
    state.status = uiStatusSuccess(key);

    const contact = response.isApprovalRequired ? null : state.contact.data;
    bus.publish(Message.CONTACT_UPDATE_DONE, { contact });

    navigateTo(Page.DETAILS);
  }

  /**
   * @name onContactUpdateFail
   *
   * @description
   * Handles contact update fail
   *
   * @inner
   * @param {object} error Error object
   * @type {function}
   */
  function onContactUpdateFail(error) {
    state.contact.updating = false;

    state.status = uiStatusError(error);
    bus.publish(Message.CONTACT_UPDATE_FAILED, { error });
    return Promise.reject(error);
  }

  /**
   * @name applyUpdatedContact
   *
   * @description
   * Applies the updated contact to the state
   *
   * @inner
   * @param {object} contact data
   * @type {function}
   */
  function applyUpdatedContact({ contact }) {
    state.contact.data = angular.copy(contact);
    model.storeContactAsCurrent(contact);
  }

  /**
   * @name updateContact
   *
   * @description
   * Updates a contact
   *
   * @inner
   * @param {object} form Contact form object
   * @type {function}
   * @return {Promise}
   */
  function updateContact(contact) {
    if (!contact) {
      return Promise.reject('[Contacts] Current contact is not defined');
    }

    return Promise.resolve(contact)
      .then(onContactUpdateStart)
      .then(() => model.updateContact(contact))
      .then(onContactUpdateDone)
      .catch(error => onContactUpdateFail(error));
  }

  /**
   * @name createContact
   *
   * @description
   * create a new contact
   *
   * @inner
   * @param {object} form Contact form object
   * @type {function}
   * @return {Promise}
   */
  function createContact(contact) {
    onContactCreateStart();

    return model.createContact(contact)
      .then(onContactCreateDone)
      .catch(error => onContactCreateFail(error));
  }

  /**
   * @name saveContact
   *
   * @description
   * Save new or update existing contact
   *
   * @param {object} contact Contact form data
   * @type {function}
   * @return {Promise} Promise which is resolved once the contact is created or updated
   */
  function saveContact(contact) {
    const processedContact = hooks.processContactBeforeSave(contact);
    return state.page === Page.NEW ?
      createContact(processedContact) : updateContact(processedContact);
  }

  /**
   * @name ContactController#getAccount
   * @type {function}
   *
   * @description
   * Return account by its index, return empty object if it does not exist
   *
   * @param {number} accountIndex Account index in list of accounts
   * @return {Object}
   */
  function getAccount(accountIndex) {
    return (state.contact.data && state.contact.data.accounts[accountIndex]) ?
      Object.assign({}, state.contact.data.accounts[accountIndex]) : null;
  }

  /**
   * @name ContactController#addAccount
   * @type {function}
   *
   * @description
   * Add account to contact
   *
   * @param {Object} account Account data object
   */
  function addAccount(account) {
    if (state.contact.data) {
      state.contact.data.accounts.push(account);
      state.contact.accountsChanged = true;
    }
  }

  /**
   * @name ContactController#updateAccount
   * @type {function}
   *
   * @description
   * Update existing account by accountIndex
   *
   * @param {Object} account Account data object
   * @param {number} accountIndex Account index in list of accounts
   */
  function updateAccount(account, accountIndex) {
    if (getAccount(accountIndex)) {
      state.contact.data.accounts[accountIndex] = account;
      state.contact.accountsChanged = true;
    }
  }

  /**
   * ContactController@delectContactAccount
   * @type {function}
   *
   * @description
   * Remove account from accounts list of contact by index
   *
   * @param {number} accountIndex Account index in list of accounts
   */
  function deleteContactAccount(accountIndex) {
    if (getAccount(accountIndex)) {
      state.contact.data.accounts.splice(accountIndex, 1);
      state.contact.accountsChanged = true;
    }
  }

  /**
   * @name onContactDeleteConfirm
   *
   * @description
   * Handles delete confirmed
   *
   * @inner
   * @type {function}
   * @return {Promise} Promise for delete contact model action
   */
  function onContactDeleteConfirm() {
    const contact = state.contact.data;

    if (!contact) {
      throw new Error('[Contacts] Current contact is not defined');
    }

    bus.publish(Message.CONTACT_DELETE_START);
    onContactDeleteStart();

    return model.deleteContact(contact)
      .then(onContactDeleteDone)
      .catch(onContactDeleteFail);
  }

  /**
   * @name deleteContact
   *
   * @description
   * Deletes a contact by calling the `deleteContact` hook.
   *
   * @type {function}
   */
  function deleteContact() {
    if (!state.contact.deleting) {
      hooks.deleteContact(state.contact.data, onContactDeleteConfirm);
    }
  }

  /**
   * @name onContactDeleteAction
   *
   * @description
   * Handles contact delete action
   *
   * @inner
   * @type {function}
   */
  function onContactDeleteAction() {
    deleteContact();
  }

  /**
   * @name setupContact
   *
   * @description
   * Sets the current contact or create a new contact
   *
   * @inner
   * @type {function}
   */
  function setupContact() {
    if (state.page === Page.NEW) {
      state.contact.data = angular.copy(hooks.getNewContactObject(model.getNewContactObject()));
    } else {
      model.getCurrentContact()
        .then(contact => {
          state.contact.data = angular.copy(contact);
        });
    }
  }

  /**
   * @description
   * Sets the contact schema for validating the contact
   *
   * @inner
   *
   * @name setupContactSchema
   * @type {function}
   */
  function setupContactSchema() {
    state.contact.schema = model.getContactSchema();
  }

  /**
   * Resets search
   *
   * @public
   * @name cancelSearch
   * @type {function}
   */
  function cancelSearch() {
    Object.assign(contactsSearch, {
      rawItems: [],
      params: {
        from: 0,
        size: pageSize,
        query: null,
      },
    });

    Object.assign(state, {
      searching: false,
      contactsSearch: {
        data: null,
        loading: false,
        hasMore: false,
        totalCount: 0,
        query: '',
      },
    });

    if (state.contacts.dirty) {
      reload().then(selectActiveContact);
    }
  }

  /**
   * Handles search field input
   *
   * @see search
   *
   * @inner
   * @name onContactsSearchInput
   */
  const onContactsSearchInput = throttle(value => {
    if (value.length >= SEARCH_MIN_QUERY) {
      ctrl.search(value, replace, { from: 0 });
    }
  }, SEARCH_INPUT_THRESHOLD);

  /**
   * Handles search cancel
   *
   * @see cancelSearch
   *
   * @inner
   * @name onContactsSearchCancel
   */
  function onContactsSearchCancel() {
    ctrl.cancelSearch();
  }

  const onContactUpdate = data => {
    if (data && data.contact) {
      applyUpdatedContact(data);
      reload();
    } else {
      restoreSelection();
    }
  };

  /**
   * @name bindEvents
   *
   * @description
   * Adds subscriptions to bus events
   *
   * @inner
   * @type {function}
   */
  function bindEvents() {
    window.addEventListener(Message.CONTACT_DELETE, onContactDeleteAction);

    window.addEventListener(Message.CONTACT_CREATE, () => {
      bus.publish(Message.CONTACT_CREATE);
    });

    window.addEventListener(Message.CONTACT_EDIT, () => {
      bus.publish(Message.CONTACT_EDIT);
    });

    bus.subscribe(Message.CONTACT_UPDATE_DONE, onContactUpdate);

    // Reload the list on any change
    bus.subscribe(Message.CONTACT_CREATE_DONE, () => reload(selectActiveContact));

    bus.subscribe(Message.CONTACT_DELETE_DONE, () => reload(selectActiveContact));

    if (state.page !== Page.NEW) {
      bus.subscribe(CONTACT_SELECTED, onContactSelect);
    }

    window.addEventListener(Message.CONTACT_SEARCH, ({ detail }) => {
      if (detail.action === searchActions.INPUT) {
        onContactsSearchInput(detail.text);
      } else if (detail.action === searchActions.CANCEL) {
        onContactsSearchCancel();
      }
      scope.$digest();
    });

    bus.subscribe(Message.NOTIFICATION_EVENT, (notification) => {
      state.notifications.push(notification);
    });
  }

  /**
   * @name ContactController#$onInit
   *
   * @description
   * AngularJS Lifecycle hook used to initialize the controller
   *
   * @type {function}
   * @returns {Promise.<void>} Promise which is resolved once contoller is initialized,
   *   or rejected in case of errors
   */
  function $onInit() {
    const loadRequest = load().then(() => {
      // Update default contact data only if it's loaded initially
      state.contact.data = getSelectedContact(state.contact.data);
      state.initialLoading = false;
    })
    .then(() => {
      bbIntents.handle(IntentsKeys.CONTACT_CREATE, showNewContactForm);
      bbIntents.init();
    });


    setupContactSchema();
    setupContact();
    bindEvents();

    /**
     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
     * and will be removed with the update to widget collection 3 (WC3)
     */
    bus.publish(Message.CXP_ITEM_LOADED, {
      id: widget.getId(),
    });

    bus.publish(Message.BB_ITEM_LOADED, {
      id: widget.getId(),
    });

    return loadRequest;
  }

  Object.assign(ctrl, {
    state,
    dismissTime,
    selectContact,
    deleteContact,
    hasContacts,
    hasSearchContacts,
    loadMore,
    saveContact,
    showNewContactForm,
    showEditContactForm,
    closeContactDetails,
    cancelContactForm,
    search,
    searchMore,
    cancelSearch,
    /* Lifecycle hooks */
    $onInit,
    changePage,
    getAccount,
    addAccount,
    updateAccount,
    deleteContactAccount,
  });
}

export default ContactController;
