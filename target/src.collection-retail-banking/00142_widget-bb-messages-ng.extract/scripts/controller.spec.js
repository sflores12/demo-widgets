import Controller from './controller';
import * as hooks from './default-hooks';

Promise.prototype.finally = function(cb) {
    cb();
    return this;
};

hooks.transformConversations = (itemsWrapper, currentItems) => ({
  items: (currentItems || []).concat(itemsWrapper.items),
});

const createModel = (removeConversation) => ({
  removeConversation: () => Promise.resolve(removeConversation)
});

const mockWidget = {
  getPreference: (name) => name,
  getBooleanPreference: name => true,
  getLongPreference: () => 10
};

const mockUserDataService = {
  getUserData: () => Promise.resolve({ username: 'User' }),
};

const noopBus = ({ publish: () => {} });

const controller = (model = {}, bus = noopBus) => {
  const ctrl = new Controller(model, mockUserDataService, hooks, Promise, mockWidget, bus, {});
  ctrl.currentUser = { username: 'User' };
  return ctrl;
};

describe('widget-bb-messages-ng::Controller', function() {

  describe('Conversation selection list', () => {

    it('should track selected conversations', () => {
      let ctrl = controller();
      let conversation = {'id' : 1};

      ctrl.onItemSelected(conversation);

      expect(ctrl.state.selectedConversations).toEqual([conversation]);
    });

    it('should remove deselected conversations', () => {
      let ctrl = controller();

      let conversation1 = {id: 1};
      let conversation2 = {id: 2};
      let conversation3 = {id: 3};

      ctrl.state.selectedConversations.push(conversation1, conversation2, conversation3);

      ctrl.onItemDeselected(conversation2);

      expect(ctrl.state.selectedConversations).toEqual([conversation1, conversation3]);
    });

    it('should be cleared after items removed', () => {
      const model = Object.assign(createModel(), {
        removeConversation: () => Promise.resolve(),
      });
      let ctrl = controller(model);
      let conversation1 = {id: 1};
      let conversation2 = {id: 2};
      let conversation3 = {id: 3};

      // Given items are loaded
      ctrl.state.currentFolder.items = [conversation1, conversation2, conversation3];
      ctrl.onItemSelected(conversation1);

      // When item removed
      ctrl.removeSelectedItems();

      expect(ctrl.state.selectedConversations.length).toBe(0);
    });

    it('should mark the conversation as being deleted while deletion is in progress', (done) => {
      const conversation = {id: 1};

      const model = Object.assign(createModel(), {
        removeConversation: () => {
          expect(conversation.deleteInProgress).toBeTrue();
          return Promise.reject();
        },
      });
      let ctrl = controller(model);
      ctrl.state.currentFolder.items = [conversation];
      ctrl.onItemSelected(conversation);

      ctrl.removeSelectedItems()
        .then(() => expect(conversation.deleteInProgress).toBeFalse())
        .then(done)
        .catch(e => done.fail(e));
    });

    it('deletes the conversation from the list only when deletion is confirmed', (done) => {
      const conversations = [{id: 1}, {id: 2}, {id: 3}];

      const model = Object.assign(createModel(), {
        removeConversation: () => {
          expect(conversations[1].deleteInProgress).toBeTrue();
          expect(ctrl.state.currentFolder.items.length).toBe(3);
          return Promise.resolve();
        },
      });
      let ctrl = controller(model);
      ctrl.state.currentFolder.items = conversations;
      ctrl.onItemSelected(conversations[1]);

      ctrl.removeSelectedItems()
        .then(() => expect(ctrl.state.currentFolder.items.length).toBe(2))
        .then(done)
        .catch(e => done.fail(e));
    });

    it("should decrement the total messages count after deleting messages", done => {
      const model = Object.assign(createModel(), {
        removeConversation: () => Promise.resolve(),
      });
      let ctrl = controller(model);

      ctrl.state.currentFolder.items = [{id: 1}, {id: 2}, {id: 3}];
      ctrl.state.currentFolder.totalCount = 3;
      ctrl.onItemSelected({id: 1});
      ctrl.onItemSelected({id: 3});

      ctrl.removeSelectedItems()
        .then(() => expect(ctrl.state.currentFolder.totalCount).toEqual(1))
        .then(done)
        .catch(e => done.fail(e));
    });
  });

  describe("opening an item", () => {
    it("publishes bb.event.messaging.conversation.open event", () => {
      let bus = { publish: jasmine.createSpy('publish') };
      let ctrl = controller({}, bus);
      let conversation = { subject: "Mock subject" };

      ctrl.openItem(conversation);

      expect(bus.publish)
        .toHaveBeenCalledWith('bb.event.messaging.conversation.open', conversation);
    });

    it("hides conversation list", () => {
      let bus = {};
      let handlers = [];
      let ctrl = controller({
        getTopics: () => Promise.resolve([]),
      }, bus);
      let conversation = {};

      bus.publish = () => {};
      bus.subscribe = (evt, fn) => {
        if (evt === 'bb.event.messaging.conversation.open') {
          handlers.push(fn);
        }
      };
      ctrl.$onInit();
      ctrl.state.showMailbox = true;

      ctrl.openItem(conversation);

      handlers.forEach(fn => fn({ conversation }));
      expect(ctrl.state.showMailbox).toBe(false);
    });
  });

  describe("loading a page", () => {

    let model = {
      loadConversations: () => Promise.resolve({conversations: [{id: 'conversations'}]}),
      loadArchivedConversations: () => Promise.resolve({conversations: [{id: 'archived'}]}),
      loadSentConversations: () => Promise.resolve({conversations: [{id: 'sent'}]}),
      loadDrafts: () => Promise.resolve({drafts: [{id: 'drafts'}]}),
      getUnreadMessagesCount: () => Promise.resolve({ unreadMessagesCount: 0 })
    };

    let ctrl = controller(model);

    beforeEach(() => {
      ctrl.state.currentFolder = {
        items: [],
      };
    });


    it("loads conversations for inbox view", done => {
        ctrl
          .loadPage('inbox')
          .then(() => expect(ctrl.state.currentFolder.items[0].id).toEqual('conversations'))
          .then(done)
          .catch(e => done.fail(e));

    });

    it("loads archived conversations", done => {
        ctrl
          .loadPage('archived')
          .then(() => expect(ctrl.state.currentFolder.items[0].id).toEqual('archived'))
          .then(done)
          .catch(e => done.fail(e));
    });

    it("loads sent conversations", done => {
        ctrl
          .loadPage('sent')
          .then(() => expect(ctrl.state.currentFolder.items[0].id).toEqual('sent'))
          .then(done)
          .catch(e => done.fail(e));
    });

    it("loads drafts", done => {
        ctrl
          .loadPage('drafts')
          .then(() => expect(ctrl.state.currentFolder.items[0].id).toEqual('drafts'))
          .then(done)
          .catch(e => done.fail(e));
    });

    it("transforms page number to zero based", done => {
        spyOn(model, 'loadConversations').and.callThrough();
        ctrl
          .loadPage('inbox')
          .then(() =>
                      expect(model.loadConversations)
                        .toHaveBeenCalledWith(jasmine.objectContaining({from: 0})))
          .then(done)
          .catch(e => done.fail(e));

    });

    it("passes page size from widget config", done => {
      spyOn(mockWidget, 'getLongPreference').and.returnValue(100);
      spyOn(model, 'loadConversations').and.callThrough();

       let ctrl = controller(model);

      ctrl
        .loadPage('inbox')
        .then(() => expect(model.loadConversations)
                      .toHaveBeenCalledWith(jasmine.objectContaining({ size: 100 })))
        .then(done)
        .catch(e => done.fail(e));
    });
  });

  describe("loading items", () => {
    let conversations = [];

    const model = {
      loadConversations: (conf) => {
        let result = [];
        for (var i = conf.from; i < conf.from + conf.size; i++) {
          result.push(conversations[i]);
        }
        return Promise.resolve({
          conversations: result,
        });
      },
    };

    let ctrl = controller(model);
    ctrl.config = {
      pageSize: 3,
    };

    beforeEach(() => {
      ctrl.state.currentFolder = {
        items: [],
      };
      conversations = [
        { id: 'conv_1' }, { id: 'conv_2' }, { id: 'conv_3' },
        { id: 'conv_4' }, { id: 'conv_5' }, { id: 'conv_6' },
      ];
    });

    it("loads items from offset correctly even if a conversation is deleted in BE", done => {
      ctrl
        .loadItems('inbox', 0)
        .then(() => expect(ctrl.state.currentFolder.items).toEqual([
          { id: 'conv_1' }, { id: 'conv_2' }, { id: 'conv_3' },
        ]))
        .then(() => conversations.splice(1, 1))
        .then(() => ctrl.state.currentFolder.items.splice(1, 1))
        .then(() => ctrl.loadItems('inbox', ctrl.state.currentFolder.items.length))
        .then(() => expect(ctrl.state.currentFolder.items).toEqual([
          { id: 'conv_1' }, { id: 'conv_3' },
          { id: 'conv_4' }, { id: 'conv_5' }, { id: 'conv_6' },
        ]))
        .then(done)
        .catch(e => done.fail(e));
    });
  });

  describe("unread messages", () => {

    const createModel = (unreadMessagesCount, removeConversationPromise = Promise.resolve()) => ({
      loadConversations: () => Promise.resolve({conversations: [{id: 'conv1'}, {id: 'conv2'}]}),
      getUnreadMessagesCount: () => {
        return unreadMessagesCount >= 0 ?
          Promise.resolve({ unreadMessagesCount: unreadMessagesCount }) :
          Promise.reject("....");
      },
      removeConversation: () => removeConversationPromise,
    });

    it("are fetched and set correctly", done => {
        let ctrl = controller(createModel(4));

        expect(ctrl.countUnreadItems()).not.toBeDefined();

        ctrl
          .fetchUnreadMessagesCount()
          .then(data => expect(data.unreadMessagesCount).toEqual(4))
          .then(() => expect(ctrl.countUnreadItems()).toEqual(4))
          .then(done)
          .catch(e => done.fail(e));
    });

    it("number doesn't change if promise fails", done => {
        let ctrl = controller(createModel(-1));

        ctrl.state.unreadMessagesCount = 3;

        ctrl
          .fetchUnreadMessagesCount()
          .then(() => done.fail(), () => expect(ctrl.countUnreadItems()).toEqual(3))
          .then(done)
          .catch(e => done.fail(e));
    });

    it("count gets decremented after reading an unread message", done => {
      let model = createModel(2);
      let ctrl = controller(model, noopBus);

      ctrl
        .fetchUnreadMessagesCount()
        .then(() => expect(ctrl.countUnreadItems()).toEqual(2))
        .then(() => ctrl.openItem({containsUnread: true, status: 'inbox'}))
        .then(() => expect(ctrl.countUnreadItems()).toEqual(1))
        .then(done)
        .catch(e => done.fail(e));
    });

    it("count does not decrement after reading an already read message", done => {
      let model = createModel(1);
      let ctrl = controller(model, noopBus);

      ctrl
        .fetchUnreadMessagesCount()
        .then(() => expect(ctrl.countUnreadItems()).toEqual(1))
        .then(() => ctrl.openItem({containsUnread: false, status: 'inbox'}))
        .then(() => expect(ctrl.countUnreadItems()).toEqual(1))
        .then(done)
        .catch(e => done.fail(e));
    });

    it("count is decremented after deleting an unread message", done => {
      let model = createModel(2);
      let ctrl = controller(model, noopBus);

      ctrl.state.selectedConversations = [];

      ctrl
        .loadPage('inbox')
        .then(() => ctrl.fetchUnreadMessagesCount())
        .then(() => ctrl.onItemSelected({id: 'conv1', containsUnread: true, status: 'inbox'}))
        .then(() => ctrl.removeSelectedItems())
        .then(() => expect(ctrl.countUnreadItems()).toEqual(1))
        .then(done)
        .catch(e => done.fail(e));
    });

    it("count is not decremented after deleting an unread message which is not from inbox", done => {
      let model = createModel(2);
      let ctrl = controller(model, noopBus);

      ctrl.state.selectedConversations = [];

      ctrl
        .loadPage('inbox')
        .then(() => ctrl.fetchUnreadMessagesCount())
        .then(() => ctrl.onItemSelected({id: 'conv1', containsUnread: true}))
        .then(() => ctrl.removeSelectedItems())
        .then(() => expect(ctrl.countUnreadItems()).toEqual(2))
        .then(done)
        .catch(e => done.fail(e));
    });

    it("count is not decremented after deleting a read message", done => {
      let model = createModel(1);
      let ctrl = controller(model, noopBus);

      ctrl.state.selectedConversations = [];

      ctrl
        .loadPage('inbox')
        .then(() => ctrl.fetchUnreadMessagesCount())
        .then(() => ctrl.onItemSelected({id: 'conv1', containsUnread: false, status: 'inbox'}))
        .then(() => ctrl.removeSelectedItems())
        .then(() => expect(ctrl.countUnreadItems()).toEqual(1))
        .then(done)
        .catch(e => done.fail(e));
    });

    it("count is not decremented if the deletion fails", done => {
      let model = createModel(2, Promise.reject("..."));
      let ctrl = controller(model, noopBus);

      ctrl.state.selectedConversations = [];

      ctrl
        .loadPage('inbox')
        .then(() => ctrl.fetchUnreadMessagesCount())
        .then(() => ctrl.onItemSelected({id: 'conv1', containsUnread: true, status: 'inbox'}))
        .then(() => ctrl.removeSelectedItems())
        .then(() => expect(ctrl.countUnreadItems()).toEqual(2))
        .then(done)
        .catch(e => done.fail(e));
    });
  });
});
