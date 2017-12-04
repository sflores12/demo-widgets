import { Intent, Event } from '../constants';

export default function DetailsController(
  model,
  hooks,
  bus,
  widget,
  bbIntent,
  viewModel
) {
  /**
   * @name DetailsController
   * @ngkey DetailsController
   *
   * @description
   * Mobile personal profile details controller.
   *
   * @type {Object}
   */
  const ctrl = this;

  /**
   * @description
   * A set of intents that the Details controller uses or handles.
   *
   * @name intents
   * @type {Object}
   * @inner
   */
  const intents = {};

  /**
   * @description
   * Handles the intent to show the form to add a phone
   *
   * @name DetailsController#showAddPhoneForm
   * @type {function}
   */
  const showAddPhoneForm = () => {
    viewModel.save()
      .then(() => {
        intents.showAddPhoneForm();
      });
  };

  /**
   * @description
   * Handles the intent to show the form to add an email
   *
   * @name DetailsController#showAddEmailForm
   * @type {function}
   */
  const showAddEmailForm = () => {
    viewModel.save()
      .then(() => {
        intents.showAddEmailForm();
      });
  };

  /**
   * @description
   * Handles the intent to show the form to edit a phone
   *
   * @name DetailsController#showEditPhoneForm
   * @type {function}
   * @param {number} index - position of a phone in the user phone's list
   */
  const showEditPhoneForm = index => {
    viewModel.selectPhoneByIndex(index);
    viewModel.save()
      .then(() => {
        intents.showEditPhoneForm();
      });
  };

  /**
   * @description
   * Handles the intent to show the form to edit an email
   *
   * @name DetailsController#showEditEmailForm
   * @type {function}
   * @param {number} index - position of an email in the user email's list
   */
  const showEditEmailForm = index => {
    viewModel.selectEmailByIndex(index);
    viewModel.save()
      .then(() => {
        intents.showEditEmailForm();
      });
  };

  /**
   * @description
   * Loads the user profile.
   *
   * @name DetailsController#loadUser
   * @type {function}
   *
   * @returns {Promise<module:model-bb-personal-profile-ng.UserProfile>}
   */
  const loadUser = () => {
    viewModel.setUserLoading(true);

    return model.loadUsersProfile()
      .then(hooks.processUser)
      .then(user => {
        viewModel.setUserLoading(false);
        viewModel.setUserError(null);
        viewModel.setUser(user);

        return user;
      })
      .catch(error => {
        viewModel.setUserError(error);
        viewModel.setUserLoading(false);

        throw error;
      });
  };

  /**
   * @description
   * AngularJS Lifecycle hook used to initialize the controller.
   *
   * @name DetailsController#$onInit
   * @type {function}
   *
   * @fires cxp.item.loaded
   * @fires bb.item.loaded
   */
  const $onInit = () => {
    bus.publish(Event.CXP_ITEM_LOADED, {
      id: widget.getId(),
    });

    bus.publish(Event.BB_ITEM_LOADED, {
      id: widget.getId(),
    });

    return loadUser();
  };

  /**
   * @description
   * The intent to show the personal profile form to add an email.
   *
   * @name intents#showAddEmailForm
   * @type {function}
   * @inner
   */
  intents.showAddEmailForm = bbIntent.create(Intent.SHOW_ADD_EMAIL_FORM);

  /**
   * @description
   * The intent to show the personal profile form to add a phone.
   *
   * @name intents#showAddPhoneForm
   * @type {function}
   * @inner
   */
  intents.showAddPhoneForm = bbIntent.create(Intent.SHOW_ADD_PHONE_FORM);

  /**
   * @description
   * The intent to show the personal profile form to edit an email.
   *
   * @name intents#showEditEmailForm
   * @type {function}
   * @inner
   */
  intents.showEditEmailForm = bbIntent.create(Intent.SHOW_EDIT_EMAIL_FORM);

  /**
   * @description
   * The intent to show the personal profile from of editting a phone.
   *
   * @name intents#showEditPhoneForm
   * @type {function}
   * @inner
   */
  intents.showEditPhoneForm = bbIntent.create(Intent.SHOW_EDIT_PHONE_FORM);

  bbIntent.handle(Intent.SHOW_PERSONAL_PROFILE_DETAILS, () => {
    viewModel.fetch();
  });

  bbIntent.init(() => { });

  Object.defineProperty(ctrl, 'state', {
    get() {
      return viewModel.state;
    },
  });

  Object.assign(ctrl, {
    $onInit,
    loadUser,
    showAddEmailForm,
    showAddPhoneForm,
    showEditEmailForm,
    showEditPhoneForm,
  });
}
