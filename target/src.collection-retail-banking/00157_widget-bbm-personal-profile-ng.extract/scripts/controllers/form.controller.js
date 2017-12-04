/* global angular */
import { Intent, Event } from '../constants';

export default function FormController(
  model,
  hooks,
  bus,
  widget,
  bbIntent,
  viewModel
) {
  /**
   * @name FormController
   * @ngkey FormController
   *
   * @description
   * Mobile personal profile form controller.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A set of the intents that the Form controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @description
   * Initializes the form for creating a phone.
   *
   * @name FormController#initializeAddPhoneFormState
   * @type {function}
   * @inner
   */
  const initializeAddPhoneFormState = () => {
    const phone = {
      value: null,
      primary: false,
    };

    viewModel.setFormPhoneState(phone);
  };

  /**
   * @description
   * Initializes the form from creating an email.
   *
   * @name FormController#initializeAddEmailFormState
   * @type {function}
   * @inner
   */
  const initializeAddEmailFormState = () => {
    const email = {
      value: null,
      primary: false,
    };

    viewModel.setFormEmailState(email);
  };

  /**
   * @description
   * Sets up the form for editig a phone.
   *
   * @name FormController#setupEditPhoneFormState
   * @type {function}
   * @inner
   */
  const setupEditPhoneFormState = () => {
    const { index } = viewModel.getSelectedPhone();
    const user = viewModel.getUserData();
    const phone = angular.copy(user.phones[index]);

    viewModel.setFormPhoneState({ ...phone });
  };

  /**
   * @description
   * Sets up the form for editin an email.
   *
   * @name FormController#setupEditEmailFormState
   * @type {function}
   * @inner
   */
  const setupEditEmailFormState = () => {
    const { index } = viewModel.getSelectedEmail();
    const user = viewModel.getUserData();
    const email = angular.copy(user.emails[index]);

    viewModel.setFormEmailState({ ...email });
  };

  /**
   * @description
   * Resets the selected phone if exists
   *
   * @name FormController#resetSelectedPhoneIfNeeded
   * @type {function}
   * @inner
   */
  const resetSelectedPhoneIfNeeded = () => {
    if (viewModel.isPhoneSelected()) {
      viewModel.resetSelectedPhone();
    }
  };

  /**
   * @description
   * Resets the selected email if exists
   *
   * @name FormController#resetSelectedEmailIfNeeded
   * @type {function}
   * @inner
   */
  const resetSelectedEmailIfNeeded = () => {
    if (viewModel.isEmailSelected()) {
      viewModel.resetSelectedEmail();
    }
  };

  /**
   * @description
   * Updates a user
   *
   * @name FormController#updateUser
   * @type {function}
   * @param {module:model-bb-personal-profile-ng.UserProfile} user
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   * @inner
   */
  const updateUser = user => {
    viewModel.setFormLoading(true);

    return model.updateUsersProfile(user)
      .then(updatedUser => {
        viewModel.setUser(updatedUser);
        viewModel.setFormLoading(false);
        viewModel.setFormError(null);

        return updatedUser;
      })
      .catch(error => {
        viewModel.setFormLoading(false);
        viewModel.setFormError(error);

        throw error;
      });
  };

  /**
   * @description
   * Creates a user email
   *
   * @name FormController#createEmail
   * @type {function}
   * @param {module:model-bb-personal-profile-ng.Email} email
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   * @inner
   */
  const createEmail = email => {
    const user = angular.copy(viewModel.getUserData());
    user.emails.push(email);

    bus.publish(Event.EMAIL_CREATE_START);

    return updateUser(user)
      .then(updatedUser => {
        bus.publish(Event.EMAIL_CREATE_DONE, { updatedUser });

        viewModel.save()
          .then(() => {
            intents.showPersonalProfileDetails();
          });
      })
      .catch(error => {
        bus.publish(Event.EMAIL_CREATE_FAILED, { error });

        throw error;
      });
  };

  /**
   * @description
   * Edits user's emails
   *
   * @name FormController#editEmail
   * @type {function}
   * @param {module:model-bb-personal-profile-ng.Email} email
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   * @inner
   */
  const editEmail = email => {
    const user = angular.copy(viewModel.getUserData());
    const { index } = viewModel.getSelectedEmail();
    user.emails.splice(index, 1, email);

    bus.publish(Event.EMAIL_EDIT_START);

    return updateUser(user)
      .then(updatedUser => {
        bus.publish(Event.EMAIL_EDIT_DONE, { updatedUser });

        viewModel.save()
          .then(() => {
            intents.showPersonalProfileDetails();
          });
      })
      .catch(error => {
        bus.publish(Event.EMAIL_EDIT_FAILED, { error });

        throw error;
      });
  };

  /**
   * @description
   * Updates user's emails
   *
   * @name FormController#updateUserEmail
   * @type {function}
   */
  const updateUserEmail = () => {
    const { email } = viewModel.getFormData();

    return viewModel.isEmailSelected()
      ? editEmail(email)
      : createEmail(email);
  };

  /**
   * @description
   * Creates a user phone
   *
   * @name FormController#createPhone
   * @type {function}
   * @param {module:model-bb-personal-profile-ng.Phone} phone
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   * @inner
   */
  const createPhone = phone => {
    const user = angular.copy(viewModel.getUserData());
    user.phones.push(phone);

    bus.publish(Event.PHONE_CREATE_START);

    return updateUser(user)
      .then(updatedUser => {
        bus.publish(Event.PHONE_CREATE_DONE, { updatedUser });

        viewModel.save()
          .then(() => {
            intents.showPersonalProfileDetails();
          });
      })
      .catch(error => {
        bus.publish(Event.PHONE_CREATE_FAILED, { error });

        throw error;
      });
  };

  /**
   * @description
   * Edits user's phones
   *
   * @name FormController#editPhone
   * @type {function}
   * @param {module:model-bb-personal-profile-ng.Phone} phone
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   * @inner
   */
  const editPhone = phone => {
    const user = angular.copy(viewModel.getUserData());
    const { index } = viewModel.getSelectedPhone();
    user.phones.splice(index, 1, phone);

    bus.publish(Event.PHONE_EDIT_START);

    return updateUser(user)
      .then(updatedUser => {
        bus.publish(Event.PHONE_EDIT_DONE, { updatedUser });

        viewModel.save()
          .then(() => {
            intents.showPersonalProfileDetails();
          });
      })
      .catch(error => {
        bus.publish(Event.PHONE_EDIT_FAILED, { error });

        throw error;
      });
  };

  /**
   * @description
   * Updates user's phones
   *
   * @name FormController#updateUserPhone
   * @type {function}
   */
  const updateUserPhone = () => {
    const { phone } = viewModel.getFormData();

    return viewModel.isPhoneSelected()
      ? editPhone(phone)
      : createPhone(phone);
  };

  /**
   * @description
   * Deletes a user phone
   *
   * @name FormController#deleteUserPhone
   * @type {function}
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   */
  const deleteUserPhone = () => {
    const { index } = viewModel.getSelectedPhone();
    const user = angular.copy(viewModel.getUserData());
    user.phones.splice(index, 1);

    bus.publish(Event.PHONE_DELETE_START);

    return updateUser(user)
      .then(updatedUser => {
        bus.publish(Event.PHONE_DELETE_DONE, { updatedUser });

        viewModel.save()
          .then(() => {
            intents.showPersonalProfileDetails();
          });
      })
      .catch(error => {
        bus.publish(Event.PHONE_DELETE_FAILED, { error });

        throw error;
      });
  };

  /**
   * @description
   * Deletes a user email
   *
   * @name FormController#deleteUserEmail
   * @type {function}
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   */
  const deleteUserEmail = () => {
    const { index } = viewModel.getSelectedEmail();
    const user = angular.copy(viewModel.getUserData());
    user.emails.splice(index, 1);

    bus.publish(Event.EMAIL_DELETE_START);

    return updateUser(user)
      .then(updatedUser => {
        bus.publish(Event.EMAIL_DELETE_DONE, { updatedUser });

        viewModel.save()
          .then(() => {
            intents.showPersonalProfileDetails();
          });
      })
      .catch(error => {
        bus.publish(Event.EMAIL_DELETE_FAILED, { error });

        throw error;
      });
  };

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * @name FormController#$onInit
   * @type {function}
   *
   * @fires cxp.item.loaded
   * @fires bb.item.loaded
   */
  const $onInit = () => {
    /**
     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
     * and will be removed with the update to widget collection 3 (WC3)
     */
    bus.publish(Event.CXP_ITEM_LOADED, {
      id: widget.getId(),
    });

    bus.publish(Event.BB_ITEM_LOADED, {
      id: widget.getId(),
    });
  };

  /**
   * @description
   * The intent to show the personal profile details.
   *
   * @name intents#showPersonalProfileDetails
   * @type {function}
   * @inner
   */
  intents.showPersonalProfileDetails = bbIntent.create(Intent.SHOW_PERSONAL_PROFILE_DETAILS);

  bbIntent.handle(Intent.SHOW_ADD_PHONE_FORM, () => {
    viewModel.fetch().then(() => {
      resetSelectedPhoneIfNeeded();
      initializeAddPhoneFormState();
    });
  });

  bbIntent.handle(Intent.SHOW_ADD_EMAIL_FORM, () => {
    viewModel.fetch().then(() => {
      resetSelectedEmailIfNeeded();
      initializeAddEmailFormState();
    });
  });

  bbIntent.handle(Intent.SHOW_EDIT_PHONE_FORM, () => {
    viewModel.fetch().then(() => {
      setupEditPhoneFormState();
    });
  });

  bbIntent.handle(Intent.SHOW_EDIT_EMAIL_FORM, () => {
    viewModel.fetch().then(() => {
      setupEditEmailFormState();
    });
  });

  bbIntent.init(() => { });

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    $onInit,
    updateUserEmail,
    updateUserPhone,
    deleteUserEmail,
    deleteUserPhone,
  });
}
