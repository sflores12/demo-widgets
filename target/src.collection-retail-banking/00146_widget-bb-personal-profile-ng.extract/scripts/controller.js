export default function PersonalProfileController(model, hooks, bus, widget) {
  /**
   * @name PersonalProfileController
   * @ngkey PersonalProfileController
   *
   * @type {object}
   *
   * @description
   * Personal Profile controller.
   */
  // @TODO: rewrite controller to user $ctrl with Object.assing($ctrl, {})
  // const $ctrl = this;

  /**
   * @description State of the personal profile controller
   * @type {object} state
   */
  const state = {
    user: {
      data: null,
      loading: false,
      error: null,
    },
  };

  /**
   * @name PersonalProfileController#load
   *
   * @description
   * Loads the data for the user that is currently logged in
   *
   * @type {function}
   * @returns {Promise<User>}
   * @inner
   */
  function load() {
    state.user.loading = true;
    return model.load()
      .then(user => {
        state.user.loading = false;
        return user;
      })
      .then(hooks.processUser)
      .then(user => {
        state.user.data = user;
      })
      .catch(error => {
        state.user.error = error;
        state.user.loading = false;
      });
  }

  const $onInit = () => {
    /**
     * This event (cxp.item.loaded) is deprecated in Mobile SDK version > 3.0
     * and will be removed with the update to widget collection 3 (WC3)
     */
    bus.publish('cxp.item.loaded', {
      id: widget.getId(),
    });

    bus.publish('bb.item.loaded', {
      id: widget.getId(),
    });

    return load();
  };

  return {
    state,

    /* Lifecycle hooks */
    $onInit,
  };
}

/**
 * @typedef {Object} User
 * @property {string} bbid - Internal Backbase identifier
 * @property {string} exid - External bank identifier
 * @property {string} entityId - External entity identifier
 * @property {string} id - Internally used unique identification of the user
 * @property {string} imageAvatar - Base64 encoded picture of the user
 * @property {string} firstName - The given name of a user
 * @property {string} lastName - The given family name of a user
 * @property {string} dateOfBirth - The date the user was born in format "DD-MM-YYYY"
 * @property {string} street - Street name (part of the address)
 * @property {string} houseNumber - House number (part of the address)
 * @property {string} postalCode - Postal code (part of the address)
 * @property {string} area - Area (part of the address)
 * @property {string} city - City (part of the address)
 * @property {string} citizenship - Country where the user is citizen of
 * @property {string} email - The primary e-mail address of the user
 * @property {array} phone - The phone numbers where the user can be reached
 */
