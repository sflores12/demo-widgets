import { MessageState } from './constants';
import Model from './messages';
import { E_AUTH, E_CONNECTIVITY, E_UNEXPECTED, E_USER } from 'lib-bb-model-errors';

describe('model-bb-messages-ng::model', function() {

  describe('fetch recipient list', () => {

    it('returns topics', (done) => {
      const rawData = {
        data: {
          topics: [
            {
              "id": "40219526-aa79-4a81-a0a5-ffd12ffed8a3",
              "code": "ma",
              "name": "Mortgage application",
            },
            {
              "id": "b0069a89-3dcb-4bdc-b7da-fc65643064a6",
              "code": "ln",
              "name": "Loans",
            },
            {
              "id": "4fb026ec-62e5-41c8-aa28-149d7544b704",
              "code": "pym",
              "name": "Problems with making a payment",
            },
          ],
        }
      };
      const expectedData = [
        {
          "id": "40219526-aa79-4a81-a0a5-ffd12ffed8a3",
          "code": "ma",
          "name": "Mortgage application",
        },
        {
          "id": "b0069a89-3dcb-4bdc-b7da-fc65643064a6",
          "code": "ln",
          "name": "Loans",
        },
        {
          "id": "4fb026ec-62e5-41c8-aa28-149d7544b704",
          "code": "pym",
          "name": "Problems with making a payment",
        },
      ];

      const model = Model({
        getMessageCenterUsersTopics: () => Promise.resolve(rawData),
      });

      model.getTopics()
        .then(actual => expect(actual).toEqual(expectedData))
        .then(done)
        .catch(e => done.fail(e));

    });

    it('gives an "authorization" error when the HTTP returns a 401 response', (done) => {
      const model = Model({
        getMessageCenterUsersTopics: () => Promise.reject({ status: 401 }),
      });

      model.getTopics()
        .catch(error => expect(error.code).toBe(E_AUTH))
        .then(done)
        .catch(e => done.fail(e));
    });

  });

  describe('Conversations', () => {
    it('should load conversations and extract senders name', (done) => {
      const rawData = {
        data: {
          conversations: [{
            id: '1',
            otherUser: 'Maggie Grace',
            category: 'non',
            body: 'delectus',
            subject: 'aperiam',
            containsUnread: false,
            important: false,
            numberOfMessages:1,
            timestamp:''
          }],
          totalCount: 1
        }
      };

      const expectedData = {
        conversations: [{
          id: '1',
          otherUserName: 'Maggie Grace',
          otherUser: 'Maggie Grace',
          category: 'non',
          body: 'delectus',
          subject: 'aperiam',
          containsUnread: false,
          important: false,
          numberOfMessages:1,
          timestamp:'',
          status: 'inbox'
        }],
        totalCount: 1,
      };

      const messagingData = {
        getMessageCenterUsersConversations: (userId, data) => Promise.resolve(rawData),
      };

      const model = Model(messagingData);

      model.loadConversations()
        .then(actual => {
          expect(actual).toEqual(expectedData);
        })
        .then(done);
    });
  });

  describe('getting latest conversation draft', () => {
    it('selects latest updated draft', (done) => {

      let model = new Model({
        getMessageCenterUsersConversationsDrafts: () => Promise.resolve(
          {
            data: {
              drafts: [{
                id: '1',
                updatedDate: new Date('2015-01-01').toISOString(),
              }, {
                id: '2',
                updatedDate: new Date('2016-10-31').toISOString(),
              }, {
                id: '3',
                updatedDate: new Date('2016-01-01').toISOString(),
              }]
            }
          }),
        });

      model
        .getLatestConversationDraft({ id: 'whatever' })
        .then((draft) => {
          expect(draft.id).toBe('2');
          done();
        });
    });

    it('returns empty object if there are no drafts', (done) => {
      let model = new Model({
        getMessageCenterUsersConversationsDrafts: () => Promise.resolve({data: {drafts: []}})
      });

      model
        .getLatestConversationDraft({ id: 'whatever' })
        .then((draft) => {
          expect(draft).toEqual({});
          done();
        });
    });
  });

  describe("saving conversation draft", () => {
    var messagingData;

    beforeEach(() => {
      messagingData = {
        postMessageCenterUsersConversationsDraftsRecord: () => {},
        putMessageCenterUsersConversationsDraftsRecord:  () => {},
      };

      spyOn(messagingData, 'postMessageCenterUsersConversationsDraftsRecord').and.returnValue(Promise.resolve({}));
      spyOn(messagingData, 'putMessageCenterUsersConversationsDraftsRecord').and.returnValue(Promise.resolve({}));
    });

    it("creates conversation draft if necessary", () => {
      // let model = new Model(messagingData);
      const model = Model(messagingData);

      model.saveConversationDraft('whatever', {body: 'whatever'});

      expect(messagingData.postMessageCenterUsersConversationsDraftsRecord).toHaveBeenCalled();
      expect(messagingData.putMessageCenterUsersConversationsDraftsRecord).not.toHaveBeenCalled();
    });

    it("updates existing conversation draft", () => {
      let model = new Model(messagingData);

      model.saveConversationDraft('whatever', { id: '1', body: 'whatever' });

      expect(messagingData.postMessageCenterUsersConversationsDraftsRecord).not.toHaveBeenCalled();
      expect(messagingData.putMessageCenterUsersConversationsDraftsRecord).toHaveBeenCalled();
    });
  });

  describe('marking unread messages as read', () => {

    it('marks only messages which were sent by another user', (done) => {
      let conversation = {
        id: '1',
        otherUser: 'Kobe Jordan',
      };

      let messages = [{
        id: '2',
        sender: 'LeBron Curry',
        body: 'What\'s up?',
        status: MessageState.DELIVERED,
      }, {
        id: '3',
        sender: 'Kobe Jordan',
        body: 'Not much',
        status: MessageState.DELIVERED,
      }];

      let messagingData = {
        postMessageCenterUsersConversationsMessagesReadMessageRequestRecord: () => Promise.resolve(),
      };

      spyOn(messagingData, 'postMessageCenterUsersConversationsMessagesReadMessageRequestRecord').and.callThrough();

      let model = new Model(messagingData, Promise);

      model
        .markUnreadMessagesAsRead(conversation, messages)
        .then(() => {
          expect(messagingData.postMessageCenterUsersConversationsMessagesReadMessageRequestRecord).toHaveBeenCalledWith('me', '1', '3');
          expect(messagingData.postMessageCenterUsersConversationsMessagesReadMessageRequestRecord.calls.count()).toBe(1);
        })
        .then(done);
    });
  });

  describe('sending a draft', () => {

    let $timeout = (fn) => Promise.resolve(fn());

    it('calls backend with user ID, draft ID and message body', () => {
      const messagingData = {
        postMessageCenterUsersDraftsSendDraftRequestRecord: () => Promise.resolve(),
      };

      spyOn(messagingData, 'postMessageCenterUsersDraftsSendDraftRequestRecord').and.callThrough();

      let model = new Model(messagingData, null, $timeout);
      const draftId = '1';
      const messageBody = "Hello!";
      const encodedMessageBody = 'SGVsbG8h';
      model.sendDraft(draftId, messageBody);

      expect(messagingData.postMessageCenterUsersDraftsSendDraftRequestRecord).toHaveBeenCalledWith('me', draftId, { body: encodedMessageBody });
    });

    it('propagates failure if backend fails', (done) => {
      const messagingData = {
        postMessageCenterUsersDraftsSendDraftRequestRecord: () => Promise.reject({ status: 401 }),
      };

      let model = new Model(messagingData, null, $timeout);

      model.sendDraft('1', 'Hello')
        .catch((error) => {
          expect(error.status).toBe(401);
        })
        .then(done);
    });

    it('reattempts to call backend 3 times on HTTP 404', (done) => {
      const messagingData = {
        postMessageCenterUsersDraftsSendDraftRequestRecord: () => Promise.reject({ status: 404 }),
      };

      spyOn(messagingData, 'postMessageCenterUsersDraftsSendDraftRequestRecord').and.callThrough();

      let model = new Model(messagingData, null, $timeout);

      model.sendDraft('1', 'Hello')
        .catch((error) => {
          expect(messagingData.postMessageCenterUsersDraftsSendDraftRequestRecord.calls.count()).toBe(3);
        })
        .then(done);
    });

    it('is treated as success if one of reattempts succeeds', (done) => {
      const messagingData = {
        postMessageCenterUsersDraftsSendDraftRequestRecord: jasmine.createSpy('postUsersDraftsSendDraftRequestRecord')
          .and
          .returnValues(
            Promise.reject({ status: 404 }),
            Promise.resolve()
          ),
      };

      let model = new Model(messagingData, null, $timeout);

      model.sendDraft('1', 'Hello').then(done);
    });
  });

  describe('marking unread messages as read', () => {

    it('marks only messages which were sent by another user', (done) => {
      let conversation = {
        id: '1',
        otherUser: 'Kobe Jordan',
      };

      let messages = [{
        id: '2',
        sender: 'LeBron Curry',
        body: 'What\'s up?',
        status: MessageState.DELIVERED,
      }, {
        id: '3',
        sender: 'Kobe Jordan',
        body: 'Not much',
        status: MessageState.DELIVERED,
      }];

      let messagingData = {
        postMessageCenterUsersConversationsMessagesReadMessageRequestRecord: () => Promise.resolve(),
      };

      spyOn(messagingData, 'postMessageCenterUsersConversationsMessagesReadMessageRequestRecord').and.callThrough();

      let model = new Model(messagingData, Promise);

      model
        .markUnreadMessagesAsRead(conversation, messages)
        .catch(error => console.log('got error', error))
        .then(() => {
          expect(messagingData.postMessageCenterUsersConversationsMessagesReadMessageRequestRecord).toHaveBeenCalledWith('me', '1', '3');
          expect(messagingData.postMessageCenterUsersConversationsMessagesReadMessageRequestRecord.calls.count()).toBe(1);
        })
        .then(done);
    });
  });

  describe('message body encoding', () => {
    const messagingData = {
      postMessageCenterUsersDraftsRecord: () => Promise.resolve(),
      postMessageCenterUsersDraftsSendDraftRequestRecord: () => Promise.resolve(),
      postMessageCenterUsersConversationsDraftsRecord: () => Promise.resolve(),
      putMessageCenterUsersConversationsDraftsRecord: () => Promise.resolve(),
    };

    const $timeout = (fn) => Promise.resolve(fn());
    const model = new Model(messagingData, null, $timeout);
    const messageBody = 'Hello! This is a message.';
    const encodedBody = 'SGVsbG8hIFRoaXMgaXMgYSBtZXNzYWdlLg==';

    it('encodes body when creating a draft', () => {
      spyOn(messagingData, 'postMessageCenterUsersDraftsRecord').and.callThrough();

      model.createDraft({ body: messageBody });

      expect(messagingData.postMessageCenterUsersDraftsRecord)
        .toHaveBeenCalledWith('me', { body: encodedBody });
    });

    it('encodes body when sending a draft', () => {
      spyOn(messagingData, 'postMessageCenterUsersDraftsSendDraftRequestRecord').and.callThrough();

      const id = 'id1';
      model.sendDraft(id, messageBody);

      expect(messagingData.postMessageCenterUsersDraftsSendDraftRequestRecord)
        .toHaveBeenCalledWith('me', id, { body: encodedBody });
    });

    it('encodes body when creating a reply draft', () => {
      spyOn(messagingData, 'postMessageCenterUsersConversationsDraftsRecord').and.callThrough();

      const conversationId = 'convId1';
      model.saveConversationDraft(conversationId, { body: messageBody });

      expect(messagingData.postMessageCenterUsersConversationsDraftsRecord)
        .toHaveBeenCalledWith('me', conversationId, { body: encodedBody });
    });

    it('encodes body when updating a reply draft', () => {
      spyOn(messagingData, 'putMessageCenterUsersConversationsDraftsRecord').and.callThrough();

      const conversationId = 'convId1';
      const draftId = 'draftId2';
      const draft = { id: draftId, body: messageBody };
      model.saveConversationDraft(conversationId, draft);

      expect(messagingData.putMessageCenterUsersConversationsDraftsRecord)
        .toHaveBeenCalledWith('me', conversationId, draftId, { id: draftId, body: encodedBody });
    });

    it('encodes unicode string', () => {
      spyOn(messagingData, 'postMessageCenterUsersDraftsRecord').and.callThrough();

      model.createDraft({ body: '✓ à la mode' });

      expect(messagingData.postMessageCenterUsersDraftsRecord)
        .toHaveBeenCalledWith('me', { body: '4pyTIMOgIGxhIG1vZGU=' });
    });
  });
});
