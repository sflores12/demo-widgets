/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-messages-ng
 */

/**
 * @description
 * A hook which will be called when a page of items is loaded.
 * This hook can be used to customize how the new page is displayed.
 * For example, if "Show more" functionality used for paging,
 * then this hook should just append new items to current items.
 * As another example, if pagination component is used,
 * this hook should just return the new items.
 * @name Hooks#transformConversations
 * @param {itemsWrapper} itemsWrapper a wrapper for newly loaded page items. The object will have
 *                                    the following structures: {items: [], totalCount: 0}
 * @param {object} currentItems list of current items displayed in the folder
 * @returns {object} a wrapper object of items which will be used as items to display in current
 *                   folder. Object structure should be as follow: {items: [], totalCount: 0}
 * @type {function}
 */
export function transformConversations(itemsWrapper) {
  return itemsWrapper;
}

export default transformConversations;
