/**
 * @name helpers
 * @description Controller helpers
 * @type {Object}
 *
 * @property {function} debounce Executes a callback after some time
 */
const helpers = ($timeout) => {
  /**
   * @name current
   * @description Keeps current timeout identifier for debounce helper
   * @inner
   * @type {any}
   */
  let current = null;

  return {
    debounce: (callback, time) => {
      if (current) {
        $timeout.cancel(current);
      }

      current = $timeout(callback, time);
    },
  };
};

export default helpers;
