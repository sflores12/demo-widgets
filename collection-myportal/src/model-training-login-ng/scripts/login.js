/**
 * Model factory for model-training-login-ng
 *
 * @inner
 * @type {function}
 * @param {Object} Promise An ES2015 compatible `Promise` object.
 *
 * @return {Object}
 */
export default function loginModel(Promise, loginData) {
    function postLogin(data) {
        return loginData
            .postLoginRecord(data)
            .then(function(response) {
                return response.data;
            });
    }

    function getLogin() {
        return loginData
            .getLogin()
            .then(function(response) {
                return response.data;
            });
    }

    return {
        postLogin,
        getLogin,
    };
}