/**
 * Model factory for model-bb-login-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function loginModel(Promise, cxpData) {
  /**
   * @name loginModel#login
   * @type {function}
   *
   * @description
   * Makes a login request
   *
   * @param {string} username
   * @param {string} password
   * @returns {Promise}
   */
  const login = (username, password) =>
    cxpData.postLogin({ username, password });

  /**
   * @name loginModel#logout
   * @type {function}
   *
   * @description
   * Makes a logout request
   *
   * @returns {Promise}
   */
  const logout = () =>
    cxpData.postLogout();

  /**
   * @name loginModel
   * @type {object}
   *
   * @description
   * Model for widget-bb-login-ng, widget-bb-user-menu-ng and widget-bb-user-context-menu-ng
   */
  return {
    login,
    logout,
  };
}
