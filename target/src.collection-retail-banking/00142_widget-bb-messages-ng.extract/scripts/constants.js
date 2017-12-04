/**
 * @description Different views the user can toggle between
 * @name Views
 * @type {Views}
 */
export const Views = {
  inbox: 'inbox',
  sent: 'sent',
  archived: 'archived',
  drafts: 'drafts',
};

export const Error = {
  DRAFT_SAVE: 'error.draft.save',
  DRAFT_SENT: 'error.draft.send',
  CONVERSATION_SAVE_REPLY: 'error.conversation.save-reply',
  CONVERSATION_SEND_REPLY: 'error.conversation.send-reply',
  CONVERSATION_REMOVE: 'error.conversation.remove',
};

/**
 * @description
 * Widget static texts for the template
 *
 * @name Text
 * @type {object}
 */
export const Text = {
  ERROR_AUTH: 'error.auth',
  ERROR_CONNECTION: 'error.connection',
  ERROR_UNEXPECTED: 'error.unexpected',
};

export const Event = {
  /**
   * @event bb.event.messaging.error
   * @description Event payload is a string with error code.
   * @type {string}
   */
  ERROR: 'bb.event.messaging.error',

  DRAFT_CREATE: 'bb.event.messaging.draft.create',
  DRAFT_SENT: 'bb.event.messaging.draft.sent',
  DRAFT_DISMISS: 'bb.event.messaging.draft.dismiss',

  CONVERSATION_OPEN: 'bb.event.messaging.conversation.open',
  CONVERSATION_CLOSE: 'bb.event.messaging.conversation.close',
  CONVERSATION_DELETE_FAILED: 'bb.event.messaging.delete.failed',
  CONVERSATION_LOAD_FAILED: 'bb.event.messaging.load.failed',
};

/**
 * @description
 * Widget intents to be handled
 *
 * @name IntentsKeys
 * @type {object}
 */
export const IntentsKeys = {
  MESSAGE_CREATE: 'go.message.create',
};

/**
 * Contains dynamic properties with view names. Example: {inbox: "inbox"}.
 * @typedef {Object} Views
 */
