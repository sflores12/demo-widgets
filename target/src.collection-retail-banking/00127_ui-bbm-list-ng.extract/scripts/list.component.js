import UiBbmListController from './list.controller';

/**
 * @name uiBbmListComponent
 * @type {object}
 * @description
 * List Component Object
 *
 * @property {function} onScrollToEnd - callback function to invoke when the
 *           threshold of the list has been reached.
 */
const uiBbmListComponent = {
  bindings: {
    onScrollToEnd: '&',
  },
  controller: [
    '$scope',
    '$element',
    '$document',
    '$window',
    UiBbmListController,
  ],
};

export default uiBbmListComponent;
