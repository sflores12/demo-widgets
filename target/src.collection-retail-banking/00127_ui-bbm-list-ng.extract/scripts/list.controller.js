import { Platform } from './constants';

/**
 * @name uiBbmListController
 *
 * @description
 * List Controller
 *
 * @ngkey uiBbmListController
 * @type {function}
 * @inner
 */
function uiBbmListController(scope, element, doc, win) {
  const ctrl = this;

  let $scrollHost;
  let targetElement;
  let positionTracker;

  /**
   * Calculates if the threshold has been reached and calls the callback
   * function accordingly.
   * @inner
   */
  const onScroll = () => {
    const scrollPos = positionTracker.scrollTop;
    const elementHeight = targetElement.offsetHeight;
    const scrollHeight = targetElement.scrollHeight;
    const hasScroll = scrollHeight > elementHeight;
    const distanceToBottom = scrollHeight - (scrollPos + elementHeight);
    const targetDistanceToBottom = elementHeight;

    if (hasScroll && distanceToBottom <= targetDistanceToBottom) {
      if (typeof ctrl.onScrollToEnd === 'function') {
        ctrl.onScrollToEnd();
      }
    }
  };

  /**
   * Checks if the platform is Ios.
   * @return {boolean}
   * @inner
   */
  const isIos = () => win.BB_PLATFORM === Platform.IOS;

  /**
   * Sets scroll to the top.
   * @inner
   */
  const resetScroll = () => {
    if (!isIos()) {
      win.scrollTo(0, 0);
    }
  };

  const unbindEvents = () => {
    $scrollHost.off('scroll', onScroll);
  };

  const bindEvents = () => {
    $scrollHost.on('scroll', onScroll);

    element.on('$destroy', () => {
      unbindEvents();
      resetScroll();
    });
  };

  const $onInit = () => {
    if (isIos()) {
      $scrollHost = element;
      targetElement = element[0];
      positionTracker = targetElement;
    } else {
      $scrollHost = doc;
      targetElement = doc[0].documentElement;
      positionTracker = doc[0].body;
    }

    bindEvents();
  };

  scope.$on('destroy', () => {
    unbindEvents();
  });

  Object.assign(ctrl, {
    $onInit,
  });
}

export default uiBbmListController;
