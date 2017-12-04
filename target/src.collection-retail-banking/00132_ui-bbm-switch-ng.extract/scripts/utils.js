import { ACTION_NONE, EVENT_TOUCH_MOVE } from './constants';

const getEventListenerOptions = event => ({
  capture: true,
  // We use non-passive subscription for touchmove events,
  // so we can use preventDefault to disable scrolling while dragging.
  // The event listener for touchmove is active *only while dragging*,
  // so it won't affect scrolling performance.
  passive: event !== EVENT_TOUCH_MOVE,
});

export const getInitialDragState = () => ({
  dragging: false,
  lastAction: ACTION_NONE,
  startX: null,
});

export const getScreenXFromEvent = ({ targetTouches }) => targetTouches[0].screenX;

export const addEventListener = (elem, event, handler) => {
  elem.addEventListener(event, handler, getEventListenerOptions(event));
};

export const removeEventListener = (elem, event, handler) => {
  elem.removeEventListener(event, handler, getEventListenerOptions(event));
};
