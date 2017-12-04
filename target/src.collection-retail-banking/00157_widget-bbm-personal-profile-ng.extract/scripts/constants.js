export const MODULE_KEY = 'widget-bbm-personal-profile-ng';

export const DETAILS_CONTROLLER_KEY = 'DetailsController';
export const FORM_CONTROLLER_KEY = 'FormController';

/**
 * Storage keys
 * @type {Object}
 */
export const StorageKey = {
  PERSONAL_PROFILE_STATE: 'widget-bbm-personal-profile-ng:state',
};

/**
 * Pubsub events
 * @type {Object}
 */
export const Event = {
  CXP_ITEM_LOADED: 'cxp.item.loaded',
  BB_ITEM_LOADED: 'bb.item.loaded',

  PHONE_DELETE_START: 'bb.event.personalProfile.phone.delete.start',
  PHONE_DELETE_DONE: 'bb.event.personalProfile.phone.delete.done',
  PHONE_DELETE_FAILED: 'bb.event.personalProfile.phone.delete.failed',

  PHONE_CREATE_START: 'bb.event.personalProfile.phone.create.start',
  PHONE_CREATE_DONE: 'bb.event.personalProfile.phone.create.done',
  PHONE_CREATE_FAILED: 'bb.event.personalProfile.phone.create.failed',

  PHONE_EDIT_START: 'bb.event.personalProfile.phone.edit.start',
  PHONE_EDIT_DONE: 'bb.event.personalProfile.phone.edit.done',
  PHONE_EDIT_FAILED: 'bb.event.personalProfile.phone.edit.failed',

  EMAIL_DELETE_START: 'bb.event.personalProfile.email.delete.start',
  EMAIL_DELETE_DONE: 'bb.event.personalProfile.email.delete.done',
  EMAIL_DELETE_FAILED: 'bb.event.personalProfile.email.delete.failed',

  EMAIL_CREATE_START: 'bb.event.personalProfile.email.create.start',
  EMAIL_CREATE_DONE: 'bb.event.personalProfile.email.create.done',
  EMAIL_CREATE_FAILED: 'bb.event.personalProfile.email.create.failed',

  EMAIL_EDIT_START: 'bb.event.personalProfile.email.edit.start',
  EMAIL_EDIT_DONE: 'bb.event.personalProfile.email.edit.done',
  EMAIL_EDIT_FAILED: 'bb.event.personalProfile.email.edit.failed',
};

/**
 * Intent
 * @type {Object}
 */
export const Intent = {
  SHOW_PERSONAL_PROFILE_DETAILS: 'intent.bb.personalProfile.details.show',
  SHOW_EDIT_PHONE_FORM: 'intent.bb.personalProfile.phone.edit',
  SHOW_EDIT_EMAIL_FORM: 'intent.bb.personalProfile.email.edit',
  SHOW_ADD_PHONE_FORM: 'intent.bb.personalProfile.phone.add',
  SHOW_ADD_EMAIL_FORM: 'intent.bb.personalProfile.email.add',
};
