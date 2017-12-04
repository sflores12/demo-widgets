import { Platform } from './constants';

/**
 * @name uiBbmScrollNgController
 *
 * @description
 * Scroll controller.
 *
 * @ngkey uiBbmScrollNgController
 * @type {function}
 * @inner
 */
function uiBbmScrollNgController(scope, element, doc, win) {
  const ctrl = this;

  let $scrollEventElement;
  let scrollElement;
  let scrollPositionElement;

  /**
   * Calculates if the threshold has been reached and calls the callback
   * function accordingly.
   * @inner
   */
  const onScroll = () => {
    const scrollPos = scrollPositionElement.scrollTop;
    const elementHeight = scrollElement.offsetHeight;
    const scrollHeight = scrollElement.scrollHeight;
    const hasScroll = scrollHeight > elementHeight;
    const distanceToBottom = scrollHeight - (scrollPos + elementHeight);
    const thresholdDistanceToBottom = elementHeight;

    if (hasScroll && distanceToBottom <= thresholdDistanceToBottom) {
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
    $scrollEventElement.off('scroll', onScroll);
  };

  const bindEvents = () => {
    $scrollEventElement.on('scroll', onScroll);

    element.on('$destroy', () => {
      unbindEvents();
      resetScroll();
    });
  };

  const $onInit = () => {
    if (isIos()) {
      $scrollEventElement = element.children().eq(0);
      scrollElement = element[0].children[0];
      scrollPositionElement = scrollElement;
    } else {
      $scrollEventElement = doc;
      scrollElement = doc[0].documentElement;
      scrollPositionElement = doc[0].body;
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

export default uiBbmScrollNgController;
