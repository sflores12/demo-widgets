/**
 * @name uiBbListController
 *
 * @description
 * List Controller
 *
 * @ngkey uiBbListController
 * @type {function}
 * @inner
 */
const uiBbListController = function (scope, element) {
  const ctrl = this;

  /**
   * Calculates if the threshold has been reached and calls the callback
   * function accordingly.
   *
   * @param {event} event
   */
  function onScroll(event) {
    const scrollPos = event.target.scrollTop;
    const elementHeight = event.target.offsetHeight;
    const scrollHeight = event.target.scrollHeight;
    const hasScroll = scrollHeight > elementHeight;
    const distanceToBottom = scrollHeight - (scrollPos + elementHeight);
    const targetDistanceToBottom = elementHeight;

    if (hasScroll && distanceToBottom <= targetDistanceToBottom) {
      if (typeof ctrl.onScrollToEnd === 'function') {
        ctrl.onScrollToEnd();
      }
    }
  }

  function bindEvents() {
    element.on('scroll', onScroll);
  }

  function unbindEvents() {
    element.off('scroll', onScroll);
  }

  scope.$on('destroy', () => {
    unbindEvents();
  });

  bindEvents();
};

export default uiBbListController;
