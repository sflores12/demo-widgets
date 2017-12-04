/* global window */
/**
 * @name UserMenuController
 * @type {object}
 *
 * @description
 * User Menu widget
 */
export default function UserMenuController(hooks, model, userDataService, widgetInstance) {
  const $ctrl = this;
  const portal = window.b$ && window.b$.portal;

  const logoutRedirectPage = widgetInstance.getStringPreference('logoutRedirectPage');
  const userDataUrl = widgetInstance.getStringPreference('userDataUrl');

  const logoutRedirectUrl = portal ?
    `${portal.config.serverRoot}/${portal.portalName}/${logoutRedirectPage}` :
    logoutRedirectPage;

  const logout = () => {
    model.logout()
      .then(() => {
        window.location.assign(logoutRedirectUrl);
      });
  };

  const loggedUser = () => {
    // eslint-disable-next-line max-len, no-console
    console.warn('DEPRECATED - loggedUser method will be removed in the next component major release. Use \'currentUser\' object instead.');
    return $ctrl.currentUser.name || '';
  };

  /**
   * @name getUserFromPortal
   * @type {function}
   * @inner
   *
   * @description
   * Retrieves information about currently logged in user from CX endpoint or CXP global object
   *
   * @returns {Promise}
   */
  const getUserFromPortal = () =>
    userDataService.getUserData()
      .then(userData => {
        $ctrl.currentUser = hooks.processProfileData(userData);
      });

  const $onInit = () => getUserFromPortal();

  Object.assign($ctrl, {
    /**
     * @description AngularJS Lifecycle hook used to initialize the controller
     * @type {function}
     *
     * @name UserMenuController#$onInit
     * @returns {Promise.<void>}
     */
    $onInit,
    /**
     * @description Logout function
     * @type {function}
     *
     * @name UserMenuController#logout
     * @returns {Promise}
     */
    logout,
    /**
     * @description Currently logged in user's data object
     * @name UserMenuController#currentUser
     * @type {User}
     */
    currentUser: {},
    /**
     * @description Retrieves logged in user id
     * Returns empty string if user is not found (deprecated)
     * @type {function}
     *
     * @name UserMenuController#loggedUser
     * @returns {string}
     */
    loggedUser,
    /**
     * @description URL that leads to the page with additional user data
     * @name UserMenuController#userDataUrl
     * @type {string}
     */
    userDataUrl,
  });
}
