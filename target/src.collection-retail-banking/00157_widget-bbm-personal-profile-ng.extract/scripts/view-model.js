import { StorageKey } from './constants';

export default (model, bbStorage) => {
  const viewModel = {};

  /**
   * @description
   * Returns the initial state of the view model.
   *
   * @name getInitialState
   * @type {function}
   *
   * @returns {PersonalProfileView}
   * @inner
   */
  const getInitialState = () => ({
    user: {
      data: null,
      loading: false,
      error: null,
    },
    form: {
      data: {
        phone: {
          value: null,
          primary: false,
        },
        email: {
          value: null,
          primary: false,
        },
      },
      loading: false,
      error: null,
    },
    selectedPhone: {
      index: null,
    },
    selectedEmail: {
      index: null,
    },
  });

  /**
   * @description
   * Sets the given loading state to the given target.
   *
   * @name setLoading
   * @type {function}
   *
   * @param {Object} target
   * @param {boolean} loading
   * @inner
   */
  const setLoading = (target, loading) => {
    Object.assign(target, { loading });
  };

  /**
   * @description
   * Sets the given error to the given target.
   *
   * @name setError
   * @type {function}
   *
   * @param {Object} target
   * @param {Error} error
   * @inner
   */
  const setError = (target, error) => {
    Object.assign(target, { error });
  };

  /**
   * @description
   * Sets the loading state of the user.
   *
   * @name setUserLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setUserLoading = loading => {
    setLoading(viewModel.state.user, loading);
  };

  /**
   * @description
   * Sets the loading state of the form.
   *
   * @name setFormLoading
   * @type {function}
   *
   * @param {boolean} loading
   * @inner
   */
  const setFormLoading = loading => {
    setLoading(viewModel.state.form, loading);
  };

  /**
   * @description
   * Sets an error state to the user with the given error.
   *
   * @name setUserError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setUserError = error => {
    setError(viewModel.state.user, error);
  };

  /**
   * @description
   * Sets an error state to the form with the given error.
   *
   * @name setFormError
   * @type {function}
   *
   * @param {Error} error
   * @inner
   */
  const setFormError = error => {
    setError(viewModel.state.form, error);
  };

  /**
   * @description
   * Returns the user data.
   *
   * @name getUserData
   * @type {function}
   *
   * @returns {module:model-bb-personal-profile-ng.UserProfile}
   * @inner
   */
  const getUserData = () => viewModel.state.user.data;

  /**
   * @description
   * Returns the form data.
   *
   * @name getFormData
   * @type {function}
   *
   * @returns {FormData}
   * @inner
   */
  const getFormData = () => viewModel.state.form.data;

  /**
   * @description
   * Sets the user.
   *
   * @name setUser
   * @type {function}
   *
   * @param {module:model-bb-personal-profile-ng.UserProfile} user
   * @inner
   */
  const setUser = user => {
    Object.assign(viewModel.state.user, {
      data: user,
    });
  };

  /**
   * @description
   * Sets the data to the phone's form.
   *
   * @name setFormPhoneState
   * @type {function}
   *
   * @param {module:model-bb-personal-profile-ng.Phone} phone
   * @inner
   */
  const setFormPhoneState = ({ value, primary }) => {
    Object.assign(viewModel.state.form.data.phone, {
      value,
      primary,
    });
  };

  /**
   * @description
   * Sets the data to the email's form.
   *
   * @name setFormEmailState
   * @type {function}
   *
   * @param {module:model-bb-personal-profile-ng.Email} email
   * @inner
   */
  const setFormEmailState = ({ value, primary }) => {
    Object.assign(viewModel.state.form.data.email, {
      value,
      primary,
    });
  };

  /**
   * @description
   * Selects the user's phone by index.
   *
   * @name selectPhoneByIndex
   * @type {function}
   *
   * @param {number} index
   * @inner
   */
  const selectPhoneByIndex = index => {
    Object.assign(viewModel.state.selectedPhone, { index });
  };

  /**
   * @description
   * Selects the user's email by index.
   *
   * @name selectEmailByIndex
   * @type {function}
   *
   * @param {number} index
   * @inner
   */
  const selectEmailByIndex = index => {
    Object.assign(viewModel.state.selectedEmail, { index });
  };

  /**
   * @description
   * Resets the selected email.
   *
   * @name resetSelectedEmail
   * @type {function}
   * @inner
   */
  const resetSelectedEmail = () => {
    Object.assign(viewModel.state.selectedEmail, { index: null });
  };

  /**
   * @description
   * Resets the selected phone.
   *
   * @name resetSelectedPhone
   * @type {function}
   * @inner
   */
  const resetSelectedPhone = () => {
    Object.assign(viewModel.state.selectedPhone, { index: null });
  };

  /**
   * @description
   * Checks if the user phone is selected.
   *
   * @name isPhoneSelected
   * @type {function}
   *
   * @returns {boolean}
   * @inner
   */
  const isPhoneSelected = () => viewModel.state.selectedPhone.index !== null;

  /**
   * @description
   * Checks if the user email is selected.
   *
   * @name isEmailSelected
   * @type {function}
   *
   * @returns {boolean}
   * @inner
   */
  const isEmailSelected = () => viewModel.state.selectedEmail.index !== null;

  /**
   * @description
   * Returns the selected email.
   *
   * @name getSelectedEmail
   * @type {function}
   *
   * @returns {SelectedEmail}
   * @inner
   */
  const getSelectedEmail = () => viewModel.state.selectedEmail;

  /**
   * @description
   * Returns the selected email.
   *
   * @name getSelectedPhone
   * @type {function}
   *
   * @returns {SelectedPhone}
   * @inner
   */
  const getSelectedPhone = () => viewModel.state.selectedPhone;

  /**
   * @description
   * Fetches the state from the storage.
   *
   * @name fetch
   * @type {function}
   * @inner
   */
  const fetch = () => (
    bbStorage.getItem(StorageKey.PERSONAL_PROFILE_STATE)
      .then((state) => {
        if (state) {
          viewModel.state = state;
        }
      })
  );

  /**
   * @description
   * Saves the state to the storage.
   *
   * @name save
   * @type {function}
   * @inner
   */
  const save = () => (
    bbStorage.setItem(StorageKey.PERSONAL_PROFILE_STATE, viewModel.state)
  );

  Object.assign(viewModel, {
    state: getInitialState(),

    getUserData,
    getFormData,

    setUser,
    setFormEmailState,
    setFormPhoneState,
    setUserLoading,
    setUserError,
    setFormLoading,
    setFormError,

    selectEmailByIndex,
    selectPhoneByIndex,
    getSelectedEmail,
    getSelectedPhone,
    resetSelectedEmail,
    resetSelectedPhone,
    isPhoneSelected,
    isEmailSelected,

    fetch,
    save,
  });

  return viewModel;
};

/**
 * @typedef {Object} SelectedPhone
 * @property {number} index - position of a phone in the user's phone list
 */

 /**
 * @typedef {Object} SelectedEmail
 * @property {number} index - position of an email in the user's email list
 */

 /**
 * @typedef {Object} FormData
 * @property {Phone} phone - phone data
 * @property {Email} email - email data
 */
