/**
 * @description
 * Helpers for ext-bbm-contact-list-ng
 *
 * @name Helpers
 * @type {Object}
 */
export default () => {
  /**
   * @description
   * Checks for the contacts presence.
   *
   * @name Helpers#hasContacts
   * @type {function}
   *
   * @param {module:widget-bb-contact-ng.ContactController} ctrl
   * @return {boolean}
   */
  const hasContacts = ctrl => (
    Boolean(ctrl.state.contacts.data && ctrl.state.contacts.data.length)
  );

  /**
   * @description
   * Checks for the searched contacts presence.
   *
   * @name Helpers#hasSearchContacts
   * @type {function}
   *
   * @param {module:widget-bb-contact-ng.ContactController} ctrl
   * @return {boolean}
   */
  const hasSearchContacts = ctrl => (
    Boolean(ctrl.state.contactsSearch.data && ctrl.state.contactsSearch.data.length)
  );

  /**
  * @description
  * Checks for the loading state of the contacts.
  *
  * @name Helpers#showLoadingState
  * @type {function}
  *
  * @param {module:widget-bb-contact-ng.ContactController} ctrl
  * @return {boolean}
  */
  const showLoadingState = ctrl => (
    ctrl.state.contacts.loading && !hasContacts(ctrl)
  );

  /**
  * @description
  * Checks for the loading state of the contacts search.
  *
  * @name Helpers#showSearchLoadingState
  * @type {function}
  *
  * @param {module:widget-bb-contact-ng.ContactController} ctrl
  * @return {boolean}
  */
  const showSearchLoadingState = ctrl => (
    ctrl.state.contactsSearch.loading && !hasSearchContacts(ctrl)
  );

  /**
   * @description
   * Checks if the searching has been failed.
   *
   * @name Helpers#showSearchErrorState
   * @type {function}
   *
   * @param {module:widget-bb-contact-ng.ContactController} ctrl
   * @return {boolean}
   */
  const showSearchErrorState = ctrl => (
    ctrl.state.contactsSearch.error &&
    !ctrl.state.contactsSearch.loading &&
    !hasSearchContacts(ctrl)
  );

  /**
   * @description
   * Checks if there are no search results.
   *
   * @name Helpers#showSearchEmptyState
   * @type {function}
   *
   * @param {module:widget-bb-contact-ng.ContactController} ctrl
   * @return {boolean}
   */
  const showSearchEmptyState = ctrl => (
    Boolean(ctrl.state.contactsSearch.data && !ctrl.state.contactsSearch.data.length) &&
    !ctrl.state.contactsSearch.error &&
    !ctrl.state.contactsSearch.loading
  );

  /**
   * @description
   * Checks if there are no contacts.
   *
   * @name Helpers#showEmptyState
   * @type {function}
   *
   * @param {module:widget-bb-contact-ng.ContactController} ctrl
   * @return {boolean}
   */
  const showEmptyState = ctrl => (
    Boolean(ctrl.state.contacts.data && !ctrl.state.contacts.data.length) &&
    !ctrl.state.contacts.error &&
    !ctrl.state.contacts.loading
  );

  /**
   * @description
   * Checks if the loading request has been failed.
   *
   * @name Helpers#showErrorState
   * @type {function}
   *
   * @param {module:widget-bb-contact-ng.ContactController} ctrl
   * @return {boolean}
   */
  const showErrorState = ctrl => (
    ctrl.state.contacts.error &&
    !hasContacts(ctrl)
  );

  /**
  * @description
  * Checks for the search load's more loading state.
  *
  * @name Helpers#showSearchLoadMoreLoading
  * @type {function}
  *
  * @param {module:widget-bb-contact-ng.ContactController} ctrl
  * @return {boolean}
  */
  const showSearchLoadMoreLoading = ctrl => (
    ctrl.state.contactsSearch.loading && hasSearchContacts(ctrl)
  );

  /**
  * @description
  * Checks for the load's more loading state.
  *
  * @name Helpers#showLoadMoreLoading
  * @type {function}
  *
  * @param {module:widget-bb-contact-ng.ContactController} ctrl
  * @return {boolean}
  */
  const showLoadMoreLoading = ctrl => (
    ctrl.state.contacts.loading && hasContacts(ctrl)
  );

  /**
  * @description
  * Checks for the search load more states.
  *
  * @name Helpers#showSearchLoadMore
  * @type {function}
  *
  * @param {module:widget-bb-contact-ng.ContactController} ctrl
  * @return {boolean}
  */
  const showSearchLoadMore = ctrl => (
    showSearchLoadMoreLoading(ctrl)
  );

  /**
  * @description
  * Checks for the load more states.
  *
  * @name Helpers#showLoadMore
  * @type {function}
  *
  * @param {module:widget-bb-contact-ng.ContactController} ctrl
  * @return {boolean}
  */
  const showLoadMore = ctrl => (
    showLoadMoreLoading(ctrl)
  );

  return {
    hasContacts,
    hasSearchContacts,
    showLoadingState,
    showSearchLoadingState,
    showErrorState,
    showSearchErrorState,
    showEmptyState,
    showSearchEmptyState,
    showLoadMore,
    showSearchLoadMore,
    showLoadMoreLoading,
    showSearchLoadMoreLoading,
  };
};
