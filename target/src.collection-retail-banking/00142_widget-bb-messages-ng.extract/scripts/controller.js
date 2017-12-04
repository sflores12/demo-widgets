import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED } from 'lib-bb-model-errors';
import { Event, Text, Views, Error } from './constants';

const errorMessages = {
  [E_AUTH]: Text.ERROR_AUTH,
  [E_CONNECTIVITY]: Text.ERROR_CONNECTION,
  [E_UNEXPECTED]: Text.ERROR_UNEXPECTED,
};

export default function MessagesController(model, userDataService, hooks, $q, widget, bus) {
  /**
   * @name MessagesController
   * @ngkey MessagesController
   * @type {object}
   * @description Controller for message conversations list.
   */
  const $ctrl = this;

  const onNewItemsLoaded = (itemsWrapper) => {
    $ctrl.state.currentFolder.items = itemsWrapper.items;
    $ctrl.state.currentFolder.totalCount = itemsWrapper.totalCount;
  };

  /**
   * @name MessagesController#logGlobalError
   * @description Registers global error.
   * This blocks from using the widget.
   * @param {object} modelError Error retuned from Data module
   * @type {function}
   */
  const logGlobalError = modelError => {
    let error = '';
    if (modelError && modelError.code) {
      error = errorMessages[modelError.code];
    }

    $ctrl.state.globalError = {
      message: error,
    };
  };

  /**
   * @name MessagesController#logError
   * @description Registers error.
   * This does not block the user form using other parts of the widget.
   * @param {string} error Error code
   * @type {function}
   */
  const logError = error => {
    $ctrl.state.error = error;
  };

  const fetchData = (loadFn) => {
    $ctrl.state.currentFolder.loading = true;

    return loadFn()
      .catch(err => { bus.publish(Event.CONVERSATION_LOAD_FAILED, err); })
      .finally(() => {
        $ctrl.state.currentFolder.loading = false;
        return;
      });
  };

  /**
   * @description Enriches conversations with sender field.
   * If the sender parameter is undefined, conversation.otherUserName is mapped
   * to the sender field.
   *
   * @param {Array<Conversation>} conversations array of conversations
   * @param {string?} sender sender's name to be mapped to conversations.
   * If not specified, conversation.otherUserName is used.
   * @type {function}
   * */
  const enrichWithSenderField = (conversations, sender) =>
    conversations.map(conversation => {
      const conversationSender = sender || conversation.otherUserName;
      if (conversationSender) {
        return Object.assign({
          sender: conversationSender,
        }, conversation);
      }
      return conversation;
    });

  /**
   * @description
   * Loads items for given view. The number of returned items is always equal or lower than limit.
   * This method can both be used with "ui-bb-load-more-ng" component.
   * @name MessagesController#loadPage
   * @param {string} view view for which the page should be loaded
   * @param {number} [offset] offset, from which the items will be collected.
   * @param {number} [limit] limit, which determines the maximum amount of returned items.
   * @param {function} [finallyCallback] optional callback function to be executed after page is
   *                                   loaded. It will be executed both on successful and failing
   *                                   loads.
   * @type {function}
   */
  const loadItems = (view, offset, finallyCallback) => {
    const sliceConfig = {
      from: offset,
      size: $ctrl.config.pageSize,
    };

    let loadFn;
    let sender;
    switch (view) {
      case Views.inbox:
        loadFn = model.loadConversations;
        break;

      case Views.archived:
        loadFn = model.loadArchivedConversations;
        break;

      case Views.sent:
        loadFn = model.loadSentConversations;
        sender = $ctrl.currentUser.username;
        break;

      case Views.drafts:
        loadFn = model.loadDrafts;
        break;

      default:
        throw new Error(`Unknown view ${view}. Unable to fetch data.`);
    }

    const promise = fetchData(loadFn.bind(model, sliceConfig))
      .then(itemsWrapper => {
        const items = enrichWithSenderField(
          itemsWrapper.conversations || itemsWrapper.drafts || [],
          sender);

        return {
          items,
          totalCount: itemsWrapper.totalCount,
        };
      })
      .then(itemsWrapper =>
        hooks.transformConversations(itemsWrapper, $ctrl.state.currentFolder.items))
      .then(onNewItemsLoaded.bind(this));

    if (finallyCallback) {
      promise.finally(finallyCallback);
    }

    return promise;
  };

  /**
   * @description
   * Loads a page of items for given view. Pages are counted starting with 1.
   * This method can both be used with "ui-bb-load-more-ng" and "uib-pagination" components.
   * @name MessagesController#loadPage
   * @param {string} view view for which the page should be loaded
   * @param {number} [pageNo=1] Optional page number to load. Numbering starts to 1. Defaults to 1.
   * @param {function} [finallyCallback] optional callback function to be executed after page is
   *                                   loaded. It will be executed both on successful and failing
   *                                   loads.
   * @type {function}
   */
  const loadPage = (view, pageNo = 1, finallyCallback) => {
    const offset = (pageNo - 1) * $ctrl.config.pageSize;
    return loadItems(view, offset, finallyCallback)
      .then(() => {
        $ctrl.state.currentFolder.currentPage = pageNo;
      });
  };

  /**
   * @name MessagesController#fetchUnreadMessagesCount
   * @description Counts user's unread messages and updates the model value
   * @type {function}
   * @returns {Promise.<{unreadMessagesCount: number}>}
   *          a promise holding user's unread messages count
   */
  const fetchUnreadMessagesCount = () =>
    model.getUnreadMessagesCount()
      .then(countWrapper => {
        $ctrl.state.unreadMessagesCount = countWrapper.unreadMessagesCount;
        return countWrapper;
      });

  /**
   * @description
   * Switches mailbox view between different conversation lists.
   * E.g. from Drafts to Archived.
   * @name MessagesController#openFolder
   * @param {string} view View for which folder should be revealed
   * @type {function}
   */
  const openFolder = (view) => {
    /* Clear selections */
    $ctrl.state.selectedConversations = [];
    $ctrl.state.currentView = view;
    $ctrl.state.currentFolder = $ctrl.state.folders[view];

    /* Load items if not loaded */
    if (!$ctrl.state.currentFolder.items) {
      loadPage(view);
    }
  };

  /**
   * @typedef {Object} ConversationData
   * @property {Array<Conversation>} items List of conversations. Null value means that
   *                                       conversations haven't been loaded yet.
   * @property {number} totalCount total count of items in the backend. Used to determine if there
   *                               are more pages to load.
   * @property {number} currentPage current page. Numbering starts at 1.
   * @property {boolean} loading Flag indicating whether conversation data is currently being loaded
   */
  function ConversationData() {
    return {
      items: null, // null means not loaded
      totalCount: 0,
      currentPage: 1,
      loading: false,
    };
  }

  /**
   * @name MessagesController#countUnreadItems
   * @description
   * Returns unread item count for user Inbox.
   * Returns 0, if inbox is loading.
   *
   * @type {function}
   * @returns {number}
   */
  const countUnreadItems = () => $ctrl.state.unreadMessagesCount;

  /**
   * @description Handles conversation selection
   * @name MessagesController#onItemSelected
   * @param {Conversation} conversation Conversation to be selected
   * @type {function}
   */
  function onItemSelected(conversation) {
    $ctrl.state.selectedConversations.push(conversation);
  }

  /**
   * @description Handles conversation de-selection
   * @name MessagesController#onItemDeselected
   * @param {Conversation} conversation Conversation to be de-selected
   * @type {function}
   */
  function onItemDeselected(conversation) {
    $ctrl.state.selectedConversations.splice(
      $ctrl.state.selectedConversations.indexOf(conversation), 1);
  }

  /**
   * @name MessagesController#decrementUnreadMessagesCount
   * @description Decrements unread messages count
   * @type {function}
   * @inner
   */
  const decrementUnreadMessagesCount = () => {
    if ($ctrl.state.unreadMessagesCount > 0) {
      $ctrl.state.unreadMessagesCount--;
    }
  };

  /**
   * @description Removes given conversation
   * @name MessagesController#doRemove
   * @param {Object} conversation Converstation to be removed
   * @inner
   * @type {function}
   */
  const doRemove = (conversation) => {
    const currentFolder = $ctrl.state.currentFolder;
    const conversations = currentFolder.items;
    currentFolder.totalCount--;
    Object.assign(conversation, {
      deleteInProgress: true,
      selected: false,
    });

    return model.removeConversation(conversation.id)
      .then(() => {
        conversations.splice(conversations.indexOf(conversation), 1);
        if (conversation.containsUnread && conversation.status === 'inbox') {
          decrementUnreadMessagesCount();
        }
      })
      .catch((err) => {
        logError(Error.CONVERSATION_REMOVE);
        currentFolder.totalCount++;
        Object.assign(conversation, { deleteInProgress: false });

        /*
         * Event indicates that removal of a conversation has failed.
         *
         * <p> Payload contains server-side error </p>
         * @event bb.event.messaging.delete.failed
         * @type {string}
         */
        bus.publish(Event.CONVERSATION_DELETE_FAILED, err);
      });
  };

  /**
   * Removes selected conversations.
   * <p>Selected conversations are tracked in "selectedConversations" property in controller's
   * state object.</p>
   * @name MessagesController#removeSelectedItems
   * @type {function}
   * @return {Promise} succesful promise if removal of all selected conversations succeeded
   */
  function removeSelectedItems() {
    const promises = [];

    $ctrl.state.selectedConversations.forEach((selectedConversation) => {
      promises.push(doRemove(selectedConversation));
      return;
    });
    $ctrl.state.selectedConversations = [];

    return $q.all(promises);
  }

  /**
   * @name MessagesController#hideMailbox
   * @description Turn mailbox display OFF
   * @type {function}
   * @inner
   */
  function hideMailbox() {
    $ctrl.state.showMailbox = false;
  }

  /**
   * @name MessagesController#showMailbox
   * @description Turn mailbox display ON
   * @type {function}
   * @inner
   */
  function showMailbox() {
    $ctrl.state.showMailbox = true;
  }

  /**
   * @name MessagesController#bindEvents
   * @description Adds subscriptions to bus events
   *
   * @inner
   * @type {function}
   */
  function bindEvents() {
    bus.subscribe(Event.DRAFT_CREATE, hideMailbox);
    bus.subscribe(Event.DRAFT_SENT, showMailbox);
    bus.subscribe(Event.DRAFT_DISMISS, showMailbox);
    bus.subscribe(Event.CONVERSATION_CLOSE, showMailbox);
    bus.subscribe(Event.CONVERSATION_OPEN, hideMailbox);
    bus.subscribe(Event.CONVERSATION_LOAD_FAILED, logGlobalError);

    // Error handling
    bus.subscribe(Event.ERROR, logError);
  }

  /*
   * @description Widget initialization logic.
   * @type {function}
   */
  const $onInit = () => {
    bindEvents();
    userDataService.getUserData()
      .then(userData => {
        $ctrl.currentUser = userData;
        return model.getTopics();
      })
      .then(topics => {
        $ctrl.topics = Object.freeze(topics);
      });

    userDataService.getUserData().then(userData => {
      $ctrl.userData = userData;
    });
  };

  /**
   * Opens given conversation item. Hides currently viewed mailbox and
   * publishes event to open conversation.
   * @name MessagesController#openItem
   * @type {function}
   * @param {Conversation} conversation conversation to open
   * @fires bb.event.messaging.conversation.open
   */
  function openItem(conversation) {
    if (conversation.containsUnread && conversation.status === 'inbox') {
      decrementUnreadMessagesCount();
    }
    /*
     * Event indicates that user has initiated opening of a single conversation.
     * <p>Payload is of Conversation type</p>
     * @event bb.event.messaging.conversation.open
     * @type {string}
     */
    bus.publish(Event.CONVERSATION_OPEN, conversation);
  }

  Object.assign($ctrl, {

    /**
     * Config mapped from widget's preferences.
     *
     * <p>"showUnreadConversationsCount" is mapped from "showUnreadConversationsCount" preference
     * </p>
     * @name MessagesController#config
     * @type {MessagesControllerConfig}
     */
    config: Object.freeze({
      showUnreadConversationsCount: widget.getBooleanPreference('showUnreadConversationsCount'),
      pageSize: widget.getLongPreference('pageSize'),
    }),

    /**
     *  Holds static data of controller.
     *  @name MessagesController#statics
     *  @type {MessagesControllerStatics}
     */
    statics: {
      views: Views,
    },

    /**
     * @description Keeps state related data
     * @name MessagesController#state
     * @type {MessagesControllerState}
     */
    state: {
      showMailbox: true,
      currentView: Views.INBOX,
      currentFolder: new ConversationData(),
      folders: {
        inbox: new ConversationData(),
        sent: new ConversationData(),
        archived: new ConversationData(),
        drafts: new ConversationData(),
      },
      selectedConversations: [],
      error: null,
    },

    openFolder,
    loadItems,
    loadPage,
    fetchUnreadMessagesCount,
    countUnreadItems,
    onItemSelected,
    onItemDeselected,
    openItem,
    removeSelectedItems,

    /* Lifecycle hooks */
    $onInit,
  });
}

/**
 * @typedef {Object} MessagesControllerConfig
 * @property {Number} subjectMaxLength Max allowed length for new draft subject.
 * @property {Number} pageSize Number of items to be displayed in a single page load
 */

/**
 * @typedef {Object} MessagesControllerState State of MessagesController
 * @property {boolean} showMailbox Mailbox show/hide flag
 * @property {string} currentView Tracks the state of which Folder the user has active
 * @property {ConversationData} currentFolder Data of currently opened folder
 * @property {Object<string, ConversationData>} folders Holds users mailbox data. Keys as folders
 * @property {Array<Conversation>} selectedConversations An array of currently selected
 *                                                       conversations
 * @property {string} error Recent error code, if any.
 * @property {string} globalError Global error, if any.
 * @property {number} unreadMessagesCount Unread messages count,
                                          undefined if the call to backend failed.
 */

/**
 * @typedef {Object} Conversation
 * @property {string} id ID of the conversation
 * @property {string} category category of the conversation
 * @property {string} otherUser other user's LDAP user string
 * @property {string} otherUserName other user's name
 * @property {string} sender name of the conversation sender
 * @property {string} body body of last message in the conversation
 * @property {string} subject conversation subject
 * @property {boolean} containsUnread flag indicating whether the conversation has unread messages
 * @property {boolean} important importance flag
 * @property {number} numberOfMessages count of number of messages in the conversation
 * @property {string} timestamp last modification time
 */

/**
 * @typedef {Object} MessagesControllerStatics
 * @property {Views} views views supported by controller
 */
