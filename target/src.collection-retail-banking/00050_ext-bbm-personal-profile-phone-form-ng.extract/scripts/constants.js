export const ToolbarButtonEvent = {
  DELETE: 'bb.action.personalProfile.phone.delete',
};

/**
 * Confirm dialog button types
 * TODO: Read them from the plugin
 * @type {Object}
 */
export const ButtonType = {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
};

/**
 * Confirm dialog actions
 * @type {Object}
 */
export const ConfirmAction = {
  CANCEL: 'cancel',
  CONFIRM: 'confirm',
};

/**
 * Pubsub events
 * @type {Object}
 */
export const Event = {
  PHONE_DELETE_START: 'bb.event.personalProfile.phone.delete.start',
  PHONE_DELETE_DONE: 'bb.event.personalProfile.phone.delete.done',
  PHONE_DELETE_FAILED: 'bb.event.personalProfile.phone.failed',

  PHONE_CREATE_START: 'bb.event.personalProfile.phone.create.start',
  PHONE_CREATE_DONE: 'bb.event.personalProfile.phone.create.done',
  PHONE_CREATE_FAILED: 'bb.event.personalProfile.phone.create.failed',

  PHONE_EDIT_START: 'bb.event.personalProfile.phone.edit.start',
  PHONE_EDIT_DONE: 'bb.event.personalProfile.phone.edit.done',
  PHONE_EDIT_FAILED: 'bb.event.personalProfile.phone.edit.failed',
};
