import helpers from './helpers';

const createCtrl = (selectedCount, unreadMessagesCount) => {
  let ctrl = {
    state: {
      currentFolder: {
        currentPage: 1,
        totalCount: 11
      },
      currentView: 'inbox'
    },
    config: {
      pageSize: 10
    },
    statics: {
      views: {
        inbox: 'inbox'
      },
    },
  };

  ctrl.removeSelectedItems = () => {
    ctrl.state.currentFolder.totalCount -= selectedCount;
    return Promise.resolve();
  };
  ctrl.loadPage = (view, pageNo) => {
    ctrl.state.currentFolder.currentPage = pageNo;
  };
  ctrl.openFolder = (view) => {
  };
  ctrl.fetchUnreadMessagesCount = () => {
    ctrl.state.currentFolder.unreadMessagesCount = unreadMessagesCount;
  };

  return ctrl;
};

describe('removeSelectedConversations helper', () => {

  it('loads the same page if the current page is valid', (done) => {
    const ctrl = createCtrl(3);

    helpers.removeSelectedConversations(ctrl)
      .then(() => expect(ctrl.state.currentFolder.totalCount).toEqual(8))
      .then(() => expect(ctrl.state.currentFolder.currentPage).toEqual(1))
      .then(done)
      .catch(e => done.fail(e));
  });

  it('loads the last page if the current page becomes invalid', (done) => {
    const ctrl = createCtrl(3);

    ctrl.state.currentFolder.currentPage = 3;
    ctrl.state.currentFolder.totalCount = 22;
    helpers.removeSelectedConversations(ctrl)
      .then(() => expect(ctrl.state.currentFolder.totalCount).toEqual(19))
      .then(() => expect(ctrl.state.currentFolder.currentPage).toEqual(2))
      .then(done)
      .catch(e => done.fail(e));
  });

  it("doesn't load the page if all the messages were deleted", (done) => {
    const ctrl = createCtrl(3);
    ctrl.loadPage = () => { throw "Load page should not be called"; }

    ctrl.state.currentFolder.currentPage = 1;
    ctrl.state.currentFolder.totalCount = 3;
    helpers.removeSelectedConversations(ctrl)
      .then(() => expect(ctrl.state.currentFolder.totalCount).toEqual(0))
      .then(() => expect(ctrl.state.currentFolder.currentPage).toEqual(1))
      .then(done)
      .catch(e => done.fail(e));
  });

  it('loads the unread messages count', () => {
    const ctrl = createCtrl(0, 11);
    helpers.init(ctrl);
    expect(ctrl.state.currentFolder.unreadMessagesCount).toEqual(11);
  });
});
