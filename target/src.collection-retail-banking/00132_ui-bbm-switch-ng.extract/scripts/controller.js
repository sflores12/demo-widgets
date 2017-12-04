import {
  addEventListener,
  getInitialDragState,
  getScreenXFromEvent,
  removeEventListener,
} from './utils';

import {
  ACTION_SWIPE_RIGHT,
  ACTION_SWIPE_LEFT,
  EVENT_TOUCH_END,
  EVENT_TOUCH_MOVE,
  EVENT_TOUCH_START,
  SWIPE_THRESHOLD,
} from './constants';

export default function SwitchController($element, $document) {
  const ctrl = this;

  const ngModelCtrl = $element.controller('ngModel');

  const controlElem = $element[0].querySelector('[data-role="switch-control"]');
  const inputElem = $element[0].querySelector('input');

  const doc = $document[0];
  const dragState = getInitialDragState();

  const setValue = value => ngModelCtrl.$setViewValue(value);

  const createSwipeHandler = actionName => modelValue => screenX => {
    if (dragState.lastAction !== actionName) {
      Object.assign(dragState, {
        lastAction: actionName,
        startScreenX: screenX,
      });

      setValue(modelValue);
    }
  };

  const onSwipeToLeft = createSwipeHandler(ACTION_SWIPE_LEFT)(false);

  const onSwipeToRight = createSwipeHandler(ACTION_SWIPE_RIGHT)(true);

  const drag = screenX => {
    const moveDiff = screenX - dragState.startScreenX;

    if (moveDiff > SWIPE_THRESHOLD) {
      onSwipeToRight(screenX);
    }

    if (moveDiff < -SWIPE_THRESHOLD) {
      onSwipeToLeft(screenX);
    }
  };

  const onTouchMove = evt => {
    if (dragState.dragging) {
      drag(getScreenXFromEvent(evt));
      evt.preventDefault(); // Disables scrolling while dragging
    }
  };

  // eslint-disable-next-line no-use-before-define
  const onTouchEnd = () => stopDrag();

  const stopDrag = () => {
    Object.assign(dragState, getInitialDragState());

    removeEventListener(doc, EVENT_TOUCH_MOVE, onTouchMove);
    removeEventListener(doc, EVENT_TOUCH_END, onTouchEnd);
  };

  const startDrag = screenX => {
    Object.assign(dragState, {
      dragging: true,
      startScreenX: screenX,
    });

    addEventListener(doc, EVENT_TOUCH_MOVE, onTouchMove);
    addEventListener(doc, EVENT_TOUCH_END, onTouchEnd);
  };

  const onTouchStart = evt => startDrag(getScreenXFromEvent(evt));

  const onChange = () => setValue(inputElem.checked);

  const $onInit = () => {
    addEventListener(controlElem, EVENT_TOUCH_START, onTouchStart);
  };

  const $onDestroy = () => {
    removeEventListener(controlElem, EVENT_TOUCH_START, onTouchStart);
    stopDrag();
  };

  Object.assign(ctrl, {
    $onDestroy,
    $onInit,
    onChange,
  });
}
