const helpers = {
  /**
   * Removes selected conversations and updates conversation list
   * @name removeSelectedConversations
   * @type {function}
   * @param  {Object} $ctrl The extension controller
   * @return {Promise}       Promise to be fulfilled after loading list
   */
  removeSelectedConversations: ($ctrl) =>
    $ctrl.removeSelectedItems()
      .then(() => {
        const { currentPage, totalCount } = $ctrl.state.currentFolder;
        const pageSize = $ctrl.config.pageSize;

        if (totalCount > 0) {
          const maxPage = Math.ceil(totalCount / pageSize);
          // only the last page can dissapear after conversations are deleted
          const newPage = Math.min(currentPage, maxPage);

          return $ctrl.loadPage($ctrl.state.currentView, newPage);
        }
        return Promise.resolve();
      }),

  /**
   * Function, which should be called with ng-init at the extension's
   * root element. This function opens the inbox folder and fetches
   * the total unread messages count
   * @name init
   * @type {function}
   * @param  {Object} $ctrl The extension controller
   */
  init: $ctrl => {
    $ctrl.openFolder($ctrl.statics.views.inbox);
    $ctrl.fetchUnreadMessagesCount();
  },
};

export default helpers;
