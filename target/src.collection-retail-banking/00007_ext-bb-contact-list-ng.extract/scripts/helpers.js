const NO_ITEMS = Symbol('NO_ITEMS');
const NO_ITEMS_CREATE = Symbol('NO_ITEMS_CREATE');
const SEARCH = Symbol('SEARCH');

const EmptyStateConfig = {
  [NO_ITEMS]: {
    // @TODO: use underneath commented line when theme upgrades FontAwesome Icons to 4.7,
    // current is: 4.6.1
    // iconClassName: 'fa-address-book-o',
    iconClassName: 'fa-users',
    title: 'contacts.empty.title',
    description: 'contacts.empty.message.noContact',
  },
  [NO_ITEMS_CREATE]: {
    // @TODO: use underneath commented line when theme upgrades FontAwesome Icons to 4.7,
    // current is: 4.6.1
    // iconClassName: 'fa-address-book-o',
    iconClassName: 'fa-users',
    title: 'contacts.empty.title',
    description: 'contacts.empty.message.create.noContact',
  },
  [SEARCH]: {
    iconClassName: 'fa-search',
    title: 'contacts.loadMore.emptySearch',
    description: 'contacts.loadMore.emptySearchMessage',
  },
};

const isCreating = $ctrl => $ctrl.state.page === 'new';

/**
 * @name Helpers#getEmptyStateConfig
 * @type {function}
 *
 * @description
 * Returns emptyState configuration depending on current state (search/create)
 *
 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
 * @returns {Object} emptyState configuration
 */
const getEmptyStateConfig = $ctrl => {
  let emptyState;
  if ($ctrl.state.searching) {
    emptyState = SEARCH;
  } else {
    emptyState = isCreating($ctrl) ? NO_ITEMS_CREATE : NO_ITEMS;
  }
  return EmptyStateConfig[emptyState];
};

const resetFormState = form => {
  if (form) {
    form.$setUntouched();
    form.$setPristine();
  }
};

const isFormPristine = form => !form || form.$pristine;

const cancelEditForm = (ext, $ctrl) => {
  if (ext.contactForm) {
    resetFormState(ext.contactForm);
    Object.assign(ext, { contactForm: null });
  }

  if (ext.contactToSelect) {
    $ctrl.selectContact(ext.contactToSelect);
    Object.assign(ext, { contactToSelect: null });
  } else {
    $ctrl.cancelContactForm();
  }
};

const tryToCancelEditForm = (ext, $ctrl) => {
  if (isFormPristine(ext.contactForm)) {
    cancelEditForm(ext, $ctrl);
  } else {
    Object.assign(ext, { cancelFormConfirmOpened: true });
  }
};

const saveContact = ($ctrl, form) => {
  const contact = $ctrl.state.contact.data;
  return $ctrl.saveContact(contact).then(() => resetFormState(form));
};

/**
 * @name Helpers#searchContact
 * @description
 * Search a contact if search query is defined
 * @type {function}
 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
 */
const searchContact = $ctrl => {
  const queryString = $ctrl.state.contactsSearch.query;
  if (queryString) {
    $ctrl.search(queryString, undefined, { from: 0 });
  } else {
    $ctrl.cancelSearch();
  }
};

/**
 * @name Helpers#getListData
 * @description
 * Get contacts from default or searching list
 * @type {function}
 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
 * @return {Array.<Object>} A list of contacts
 */
const getListData = $ctrl => (
  $ctrl.state.searching && $ctrl.state.contactsSearch.data ?
    $ctrl.state.contactsSearch.data : $ctrl.state.contacts.data
);

/**
 * @name Helpers#isSearching
 * @description
 * Check if the search action is in progress
 * @type {function}
 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
 * @return {boolean} Flag indicating search status
 */
const isSearching = $ctrl => $ctrl.state.contactsSearch.loading;

/**
 * @description
 * Checks if there is any account loaded in the list, regardless if it is searching or not
 *
 * @name Helpers#isContactListEmpty
 * @type {function}
 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
 * @returns {boolean}
 */
const isContactListEmpty = $ctrl => {
  if ($ctrl.state.searching) {
    return !$ctrl.state.contactsSearch.loading && !$ctrl.hasSearchContacts();
  }

  return !$ctrl.state.contacts.loading && !$ctrl.hasContacts();
};

/**
 * @description
 * Returns the empty state icon classes
 *
 * @name Helpers#getEmptyIconClasses
 * @type {function}
 * @param {Object.<module:widget-bb-contact-ng.ContactController>} $ctrl Current controller
 * @returns {string}
 */
const getEmptyIconClasses = $ctrl =>
  `fa fa-4x ${getEmptyStateConfig($ctrl).iconClassName} text-muted`;

const helpers = context => {
  const i18n = context.$filter('i18n');

  return {
    cancelEditForm,
    tryToCancelEditForm,
    saveContact,
    searchContact,
    getListData,
    isSearching,
    isContactListEmpty,
    getEmptyIconClasses,

    notificationMessage: (statusObject) => {
      let message = statusObject.text || '';
      if (statusObject.i18n) {
        message = i18n(statusObject.i18n);
      }
      return message;
    },

    getEmptyTitle: $ctrl => i18n(getEmptyStateConfig($ctrl).title),
    getEmptyDescription: $ctrl => i18n(getEmptyStateConfig($ctrl).description),
  };
};

export default helpers;
