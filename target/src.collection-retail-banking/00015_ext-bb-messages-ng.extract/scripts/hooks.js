/**
 * @name Hooks
 * @type {object}
 * @description Hook extensions for ext-bb-messages-ng extension
 */
export default {

  /**
   * @name Hooks#transformConversations
   * @description Hook extension function which appends newly loaded items to already existing
   *              items. Such functionality is used together with ui-bb-load-more-ng component
   *              in order to have a "Load more" button.
   * @param {itemsWrapper} itemsWrapper a wrapper for newly loaded page items. The object will have
   *                                    the following structure: {items: [], totalCount: 0}
   * @param {object} currentItems list of current items displayed in the folder
   * @returns {object} a wrapper object of items which contains newly loaded items appended to
   *                   current items. Wrapper structure is as follow: {items: [], totalCount: 0}
   * @type {function}
   */
  transformConversations: (itemsWrapper, currentItems) => {
    const result = {
      items: (currentItems || []).slice(),
      totalCount: itemsWrapper.totalCount,
    };

    itemsWrapper.items.forEach(item => {
      if (!result.items.some(existingItem => item.id === existingItem.id)) {
        result.items.push(Object.assign({}, item));
      }
    });

    return result;
  },
};
