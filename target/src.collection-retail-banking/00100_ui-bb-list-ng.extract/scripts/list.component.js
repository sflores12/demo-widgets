import UiBbListController from './list.controller';

/**
 * @name uiBbListComponent
 * @type {object}
 * @description
 * List Component Object
 *
 * @property {function} onScrollToEnd - callback function to invoke when the
 *           threshold of the list has been reached.
 */
const uiBbListComponent = {
  bindings: {
    onScrollToEnd: '&',
  },
  controller: [
    '$scope',
    '$element',
    UiBbListController,
  ],
};

export default uiBbListComponent;
