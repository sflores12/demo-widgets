import { Event, Error, IntentsKeys } from './constants';

export default function DraftController(model, widget, bus, $q, bbIntents) {
  /**
   * @name DraftController
   * @ngkey DraftController
   * @type {object}
   * @description Draft Controller is responsible for draft creation and sending.
   */
  const $draftCtrl = this;

  /**
   * @description Handles logic after draft has been sent
   * @name DraftController#afterSent
   * @param {any} draft Draft letter which was sent
   * @type {function}
   * @fires bb.event.messaging.draft.sent
   * @inner
   */
  const afterSent = () => {
    /**
     * @event bb.event.messaging.draft.sent
     * @description Event fired when draft has been sent. Event carries no payload.
     * @type {string}
     */
    bus.publish(Event.DRAFT_SENT);
    $draftCtrl.state.opened = false;
  };

  /**
   * @description Sends out given draft letter
   * @name DraftController#send
   * @param {Draft} pDraft Draft letter to send
   * @fires bb.event.messaging.draft.sent
   * @fires bb.event.messaging.error
   * @type {function}
   * @return {Promise} succesful promise if draft has been sent successfully
   */
  const send = (pDraft) => {
    const draft = Object.assign({}, pDraft);
    const promise = !draft.id ? model.createDraft(draft) : $q.when(draft);

    return promise
      .then(response => {
        draft.id = response.id;
        model.sendDraft(draft.id)
          .then(afterSent)
          .catch(() => {
            bus.publish(Event.ERROR, Error.DRAFT_SAVE);
          });
      })
      .catch(() => {
        $draftCtrl.sendMessageError = true;
        bus.publish(Event.ERROR, Error.DRAFT_SAVE);
        return;
      });
  };

  /**
   * @description Cancel draft editing
   * @name DraftController#dismiss
   * @type {function}
   * @fires bb.event.messaging.draft.dismiss
   */
  const dismiss = () => {
    /**
     * @event bb.event.messaging.draft.dismiss
     * @description Event fired when user dismisses draft creation. Event carries no payload.
     * @type {string}
     */
    bus.publish(Event.DRAFT_DISMISS);
    $draftCtrl.state.opened = false;
  };

  /**
   * @description Initiate draft creation/editing
   * @name DraftController#open
   * @type {function}
   * @fires bb.event.messaging.draft.create
   */
  const open = () => {
    /**
     * @event bb.event.messaging.draft.create
     * @description Event fired when user opens draft creation. Event carries no payload.
     * @type {string}
     */
    bus.publish(Event.DRAFT_CREATE);
    $draftCtrl.state.opened = true;
  };

  /*
   * @description Widget initialization logic.
   * @type {function}
   */
  const $onInit = () => {
    bbIntents.handle(IntentsKeys.MESSAGE_CREATE, () => {
      open();
    });
  };

  Object.assign($draftCtrl, {

    /**
     * Config mapped from widget's preferences.
     *
     * <p>"subjectMaxLength" is mapped from "subjectMaxLength" preference</p>
     * @name DraftController#config
     * @type {DraftControllerConfig}
     */
    config: Object.freeze({
      subjectMaxLength: widget.getStringPreference('subjectMaxLength'),
    }),

    /**
     * Holds controller's state
     * @name DraftController#state
     * @type {DraftControllerState}
     */
    state: {
      opened: false,
    },

    open,
    dismiss,
    send,
    /* Lifecycle hooks */
    $onInit,
  });
}

/**
 * @typedef {Object} DraftControllerState
 * @property {boolean} opened indicates whether draft editing is currently opened
 */

/**
 * @typedef {Object} DraftControllerConfig
 * @property {number} subjectMaxLength Max allowed length for new draft subject.
 */
/**
 * @typedef {Object} Draft
 * @property {string} body
 * @property {string} subject
 * @property {string} recipient LDAP X500Principle representation of recipient
 * @property {string} category category of the draft
 * @property {boolean} important flag indicating importance of the message
 * @property {object} additions API extension additions
 */
