export default stateContainer => ({
  /**
   * @name ViewModelNotificationActions
   * @type {object}
   * @inner
   */

  /**
   * @name ViewModelNotificationActions#removeNotification
   * @description Update the `ViewState after failed transactions export
   * @type {function}
   * @inner
   * @return {void}
   */
  removeNotification: stateContainer.createAction((state, payload) => ({
    ...state,
    notifications: state.notifications.filter(item => item.id !== payload),
  })),
});
