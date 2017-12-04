/**
 * Model factory for model-training-detalles-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function detallesModel(Promise,bDemoLogin) {
 function getDataAccounts() {
    return bDemoLogin
      .getAccounts()
      .then(function(response) {
        return response;
      });
 }
 function postLogout() {
    return bDemoLogin
      .postLogoutRecord()
      .then(function(response) {
        return response;
      });
 }
 
  return {
    getDataAccounts,
	postLogout,
  };
}
