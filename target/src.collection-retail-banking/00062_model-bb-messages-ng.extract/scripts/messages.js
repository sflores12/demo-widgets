/* global window */
import { fromHttpError } from 'lib-bb-model-errors';
import { MessageState } from './constants';

/**
 * @name encodeInBase64
 * @description Encodes text to Base64 format
 * @param {String} text text to encode
 * @returns {String} base64 encoded text
 * @type {function}
 * @private
 */
const encodeInBase64 = (text) => {
  if (!text) {
    return text;
  }
  return window.btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g,
      (match, p1) => String.fromCharCode(`0x${p1}`)));
};

/**
 * @name MessagingModel
 * @description Model for widget-bb-messages-ng
 * @param {MessagingData} messagingData A Data module to allow access to messaging data.
 * @type {function}
 * @return {MessagingModel}
 * @inner
 */
export default function Model(messagingData, Promise, $timeout) {
  const userId = 'me';

  /**
   * @name MessagingModel#getTopics
   * @description Fetches available topics
   * @type {function}
   * @returns {Promise.<Array>} A Promise with a list of topics
   *                            [{id: 'id123', code: 'ln', name: 'Loans'}]
   */
  function getTopics() {
    return messagingData.getMessageCenterUsersTopics(userId)
      .then(res => res.data.topics)
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * @name MessagingModel#loadConversations
   * @description Loads users conversation threads
   * @type {function}
   * @param {object} params query parameters to pass to backend
   * @returns {Promise.<Object>} A wrapper of conversations in the following format:
   *                             {conversations: [], totalCount: 0}
   */
  function loadConversations(params = {}) {
    return messagingData.getMessageCenterUsersConversations(userId, params)
      .then(res => ({
        conversations: res.data.conversations.map(conversation => Object.assign({
          otherUserName: conversation.otherUser,
          status: params.status || 'inbox',
        }, conversation)),
        totalCount: res.data.totalCount,
      }))
      .catch(e => {
        throw fromHttpError(e);
      });
  }

  /**
   * @name MessagingModel#loadArchivedConversations
   * @description Loads archived users conversation threads
   * @type {function}
   * @param {object} params query parameters to pass to backend
   * @returns {Promise.<Object>} A wrapper of conversations in the following format:
   *                             {conversations: [], totalCount: 0}
   */
  function loadArchivedConversations(params = {}) {
    return loadConversations(Object.assign({ status: 'archived' }, params));
  }

  /**
   * @name MessagingModel#loadSentConversations
   * @description Loads sent users conversation threads
   * @type {function}
   * @param {object} params query parameters to pass to backend
   * @returns {Promise.<Object>} A wrapper of conversations in the following format:
   *                             {conversations: [], totalCount: 0}
   */
  function loadSentConversations(params = {}) {
    return loadConversations(Object.assign({ status: 'sent' }, params));
  }

  /**
   * @name MessagingModel#loadMessages
   * @description Loads messages of a given conversation
   * @param {string} conversationId conversation identifier
   * @type {function}
   * @returns {Promise} An array of messages
   */
  function loadMessages(conversationId) {
    return messagingData.getMessageCenterUsersConversationsMessages(userId, conversationId, {})
      .then(res =>
        res.data.messages.map((message) => Object.assign({
          senderName: message.sender,
        }, message)));
  }

  /**
   * @name MessagingModel#getUnreadMessagesCount
   * @description Gets user's unread messages count
   * @type {function}
   * @param {object} params query parameters to pass to backend
   * @returns {Promise.<{unreadMessagesCount: number}>}
   *          a promise holding user's unread messages count
   */
  function getUnreadMessagesCount(params = {}) {
    return messagingData.getMessageCenterUsersUnreadConversationCount(userId, params)
      .then(res => ({
        unreadMessagesCount: res.data.unreadCount,
      }));
  }

  /**
   * @name MessagingModel#removeConversations
   * @description Removes given conversation
   * @param {string} conversationId Conversation Id to be removed
   * @type {function}
   * @returns {Promise.<Object>} An array of conversations
   */
  function removeConversation(conversationId) {
    return messagingData.deleteMessageCenterUsersConversationsRecord(userId, conversationId, {});
  }

  /**
   * @name MessagingModel#loadDrafts
   * @description Loads users drafts
   * @type {function}
   * @param {object} params query parameters to pass to backend
   * @returns {Promise.<Object>} A wrapper of draft items: {"drafts": []}
   */
  function loadDrafts(params = {}) {
    return messagingData.getUsersDrafts(userId, params).then(res => res.data);
  }

  /**
   * @name MessagingModel#createDraft
   * @description Saves draft
   * @param {any} pDraft Draft to save
   * @type {function}
   * @returns {Promise.<{id: string}>} a promise holding created draft ID
   */
  function createDraft(pDraft) {
    const encodedBody = encodeInBase64(pDraft.body);
    const draft = Object.assign({}, pDraft, { body: encodedBody });
    return messagingData.postMessageCenterUsersDraftsRecord(userId, draft).then(res => res.data);
  }

  /**
   * @name MessagingModel#sendDraftWithRetry
   * @type {function}
   * @description Sends draft, if it fails, it will retry sending for 3 times
   * @param {string} draftId draft ID which will be sent
   * @param {string} messageBody updated message body which will be applied to draft before sending
   * @returns {Promise} a promise which is resolved when draft is successfully sent
   */
  function sendDraftWithRetry(draftId, messageBody, attempt = 1) {
    const encodedBody = encodeInBase64(messageBody);
    return messagingData
      .postMessageCenterUsersDraftsSendDraftRequestRecord(userId, draftId, { body: encodedBody })
      .catch((error) => {
        if (error.status === 404 && attempt < 3) {
          return $timeout(() => sendDraftWithRetry(draftId, encodedBody, attempt + 1), 1000);
        }
        throw error;
      });
  }

  /**
   * @name MessagingModel#sendDraft
   * @description Sends given draft.
   * @param {string} draftId Draft ID to be sent
   * @param {string} messageBody with which message will be sent
   * @type {function}
   * @returns {Promise} an empty promise
   */
  function sendDraft(draftId, messageBody) {
    return sendDraftWithRetry(draftId, messageBody);
  }

  /**
   * @name MessagingModel#createReplyDraft
   * @description Creates a draft for replying to a conversation
   * @param {string} conversationId the conversation ID for which reply draft will be created
   * @param {object} draft object with "body" property in it
   * @type {function}
   * @returns {Promise.<{id: string}>} a promise holding created draft ID
   */
  function createReplyDraft(conversationId, draft) {
    const encodedBody = encodeInBase64(draft.body);
    return messagingData
      .postMessageCenterUsersConversationsDraftsRecord(userId, conversationId,
        Object.assign({}, draft, { body: encodedBody }))
      .then(res => res.data);
  }

  /**
   * @name MessagingModel#updateReplyDraft
   * @description Updates the response draft
   * @param {string} conversationId the conversation ID for which response draft will be updated
   * @param {object} draft object to be updated
   * @type {function}
   * @returns {Promise} an empty promise
   */
  function updateReplyDraft(conversationId, draft) {
    const encodedBody = encodeInBase64(draft.body);
    return messagingData
      .putMessageCenterUsersConversationsDraftsRecord(userId, conversationId, draft.id,
        Object.assign({}, draft, { body: encodedBody }))
      .then(res => res.data);
  }

  /**
   * @name MessagingModel#sortDraftsByUpdatedDateDescending
   * @type {function}
   * @description Function designed to be used as a comparator
   * to determine if draftA is after draftB
   * @param {object} draftA object with "updatedDate" property in it
   * @param {object} draftB object with "updatedDate" property in it
   * @returns {number} time difference between draftB and draftA
   * @private
   * */
  function sortDraftsByUpdatedDateDescending(draftA, draftB) {
    const dateA = new Date(draftA.updatedDate);
    const dateB = new Date(draftB.updatedDate);

    return dateB.getTime() - dateA.getTime();
  }

  /**
   * @name MessagingModel#getLatestConversationDraft
   * @description Gets latest (i.e. last updated) draft belonging to the specified conversation
   * @param {string} conversationId the conversation ID for which draft will be fetched
   * @type {function}
   * @returns {Promise.<Object>} a promise containing latest conversation
   */
  function getLatestConversationDraft(conversationId) {
    return messagingData
      .getMessageCenterUsersConversationsDrafts(userId, conversationId)
      .then(res => (
        res.data.drafts && res.data.drafts.length ?
          res.data.drafts.sort(sortDraftsByUpdatedDateDescending)[0] : {}));
  }

  /**
   * @name MessagingModel#saveConversationDraft
   * @description Saves (creates or updates) conversation draft.
   * @param {string} conversationId the conversation ID for which draft will be saved
   * @param {object} draft draft to be saved.
   * @type {function}
   * @returns {Promise} promise object. If draft has been updated, then the Promise will be empty.
   * If draft was created, then the promise will hold object with an ID of created draft.
   */
  function saveConversationDraft(conversationId, draft) {
    return draft.id ? updateReplyDraft(conversationId, draft) :
                      createReplyDraft(conversationId, draft);
  }

  function markMessageAsRead(conversationId, messageId) {
    return messagingData
      .postMessageCenterUsersConversationsMessagesReadMessageRequestRecord(
        userId,
        conversationId,
        messageId
      );
  }

  /**
   * @name MessagingModel#markUnreadMessagesAsRead
   * @description Marks messages whose recipient is current user as read.
   * @param {object} conversation conversation object for which messages need to be marked as read
   * @param {array} messages array of messages. The array will be filtered and only messages whose
   * recipient is current user will be marked as read.
   * @type {function}
   * @returns {Promise} promise object, which is resolved once all the
   * passed messages are marked as read.
   */
  function markUnreadMessagesAsRead(conversation, messages) {
    const unreadMessages = (messages || [])
      .filter((message =>
          message.status === MessageState.DELIVERED && message.sender === conversation.otherUser));

    const markAsReadRequests = unreadMessages.map(unreadMessage =>
        markMessageAsRead(conversation.id, unreadMessage.id));

    return Promise.all(markAsReadRequests);
  }

  /**
   * @name MessagingModel
   * @type {object}
   *
   * @description
   * Model factory for widget-bb-messaging-ng
   */
  return {
    getTopics,

    // Conversations
    loadConversations,
    loadArchivedConversations,
    loadSentConversations,

    loadMessages,
    getUnreadMessagesCount,
    removeConversation,
    getLatestConversationDraft,
    saveConversationDraft,
    markUnreadMessagesAsRead,

    // Drafts
    loadDrafts,
    createDraft,
    sendDraft,

    // Response drafts
    createReplyDraft,
    updateReplyDraft,
  };
}
