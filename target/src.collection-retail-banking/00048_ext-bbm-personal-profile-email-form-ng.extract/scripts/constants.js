export const ToolbarButtonEvent = {
  DELETE: 'bb.action.personalProfile.email.delete',
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
