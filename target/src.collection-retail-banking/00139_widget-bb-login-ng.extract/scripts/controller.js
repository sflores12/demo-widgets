/* global window */

/**
 * @name LoginController
 * @type {object}
 *
 * @description
 * Login widget
 */
export default function LoginController(model, widgetInstance) {
  const $ctrl = this;
  const portal = window.b$ && window.b$.portal;

  const loginRedirectPage = widgetInstance.getStringPreference('loginRedirectPage');

  const loginRedirectUrl = portal ?
    `${portal.config.serverRoot}/${portal.portalName}/${loginRedirectPage}` :
    loginRedirectPage;

  const username = '';
  const password = '';

  const loginError = false;

  const $onInit = () => { };

  const login = () => {
    $ctrl.isLoading = true;
    return model.login($ctrl.username, $ctrl.password)
      .then((response) => {
        $ctrl.isLoading = false;
        if (response.status === 200) {
          window.location.assign(loginRedirectUrl);
        }
      }).catch(() => {
        $ctrl.isLoading = false;
        $ctrl.loginError = true;
        $ctrl.password = '';
      }
    );
  };

  Object.assign($ctrl, {
    /**
     * @description
     * AngularJS Lifecycle hook used to initialize the controller
     * @type {function}
     *
     * @name LoginController#$onInit
     * @returns {void}
     */
    $onInit,
    /**
     * @description Login function
     * @type {function}
     *
     * @name LoginController#login
     * @returns {Promise}
     */
    login,
    /**
     * @name LoginController#username
     * @type {string}
     */
    username,
    /**
     * @name LoginController#password
     * @type {string}
     */
    password,
    loginError,
    /**
     * @description
     * Loading status
     *
     * @name isLoading
     * @type {boolean}
     */
    isLoading: false,
  });
}
