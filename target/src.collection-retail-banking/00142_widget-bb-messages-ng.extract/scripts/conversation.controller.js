import { Event, Error } from './constants';

export default function ConversationController(bus, model, userDataService, Promise) {
  /**
   * Conversation controller handles logic of viewing and operating a list of
   * messages in a single conversation.
   * @name ConversationController
   * @ngkey ConversationController
   * @type {Object}
   */
  const $ctrl = this;

  /**
   * The currently opened conversation
   * @name ConversationController#conversation
   * @type {Conversation}
   */
  this.conversation = null;

  /**
   * Messages of currently opened conversation.
   * @name ConversationController#messages
   * @type {Array<Message>}
   */
  this.messages = [];

  /**
   * Reply draft.
   * @name ConversationController#draft
   * @type {Draft}
   */
  this.draft = {};

  function fetchMessages(conversation) {
    $ctrl.messages = [];
    return model.loadMessages(conversation.id)
      .then((messages) => {
        $ctrl.messages = messages;
        return messages;
      });
  }

  function fetchDrafts(conversation) {
    $ctrl.draft = {};
    return model
      .getLatestConversationDraft(conversation.id)
      .then((draft) => {
        $ctrl.draft = draft;
        return;
      });
  }

  function markConversationMessagesAsRead(pConversation, messages) {
    const conversation = pConversation;
    return model
      .markUnreadMessagesAsRead(conversation, messages)
      .then(() => {
        conversation.containsUnread = false;
      });
  }

  /**
   * Presents messages of the conversation for viewing. Also, marks unread messages of
   * conversation as read.
   * @name ConversationController#viewConversation
   * @type {function}
   * @param {Conversation} conversation conversation to view
   * @return {Promise} a succesful promise when all data has been loaded
   */
  function viewConversation(conversation) {
    $ctrl.conversation = conversation;
    $ctrl.state.open = true;

    const fetchMessagesPromise = fetchMessages(conversation);
    const markMessagesAsRead = fetchMessagesPromise
      .then(messages => markConversationMessagesAsRead(conversation, messages));

    return Promise.all([markMessagesAsRead, fetchDrafts(conversation)]);
  }

  /**
   * Closes conversation view.
   * @name ConversationController#close
   * @type {function}
   * @fires bb.event.messaging.conversation.close
   */
  function close() {
    $ctrl.state.open = false;
    $ctrl.conversation = null;
    $ctrl.messages = [];

    /**
     * Event is fired when user closes single conversation view. Event carries no payload.
     * @event bb.event.messaging.conversation.close
     * @type {string}
     */
    bus.publish(Event.CONVERSATION_CLOSE);
  }

  function $onInit() {
    bus.subscribe(Event.CONVERSATION_OPEN, viewConversation);

    userDataService.getUserData().then(userData => {
      $ctrl.currentUser = userData;
    });
  }

  /**
   * Sends out a draft as reply to the given conversation
   * @name ConversationController#sendReply
   * @param {string} conversationId ID of the conversation to which the draft should be sent
   * as a reply
   * @type {function}
   * @param {Draft} draft the draft to send
   * @fires bb.event.messaging.error
   * @return {Promise} a successful promise of reply draft has been sent successfully
   */
  function sendReply(conversationId, draft) {
    let draftId = draft.id;
    const saveDraft = model.saveConversationDraft(conversationId, draft);

    if (draftId === undefined) {
      saveDraft.then(idHolder => {
        draftId = idHolder.id;
        return;
      });
    }

    return saveDraft
      .then(() => {
        $ctrl.messages.push({
          id: draftId,
          senderName: $ctrl.currentUser.username,
          body: draft.body,
          deliveredOn: new Date().toISOString(),
        });

        $ctrl.draft = {};
        return;
      })
      .then(() => {
        model
          .sendDraft(draftId, draft.body)
          .catch(() => {
            $ctrl.messages = $ctrl.messages.filter(message => message.id !== draftId);
            bus.publish(Event.ERROR, Error.CONVERSATION_SEND_REPLY);
          });
      })
      .catch(() => {
        bus.publish(Event.ERROR, Error.CONVERSATION_SAVE_REPLY);
      });
  }

  Object.assign($ctrl, {
    viewConversation,
    close,
    sendReply,

    /**
     * Holds state of controller.
     * @name ConversationController#state
     * @type {ConversationControllerState}
     */
    state: {
      open: false,
    },

    $onInit,
  });
}

/**
 * @typedef {Object} ConversationControllerState
 * @property {boolean} open flag inidicating whether single conversation view is open
 */

/**
 * @typedef {Object} Message
 * @property {string} id ID of the message
 * @property {string} subject subject of the conversation the message belongs to
 * @property {string} body message body
 * @property {string} category category of the conversation the message belongs to
 * @property {string} status message status (READ, DELIVERED, etc)
 * @property {string} sender message sender's X500Principle string representation
 * @property {string} senderName message sender's name
 * @property {string} deliveredOn message's delivery timestamp
 * @property {boolean} important flag indicating importance of conversation the message belongs to
 */
