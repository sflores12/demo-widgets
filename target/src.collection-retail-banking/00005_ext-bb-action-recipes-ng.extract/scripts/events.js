const events = ({ notifications, $filter }) => ({
  'bb.event.actionrecipe.activate.failed': () => {
    notifications.notifyAlert($filter('i18n')('error.recipe.activation.failed'));
  },
  'bb.event.actionrecipe.deactivate.failed': () => {
    notifications.notifyAlert($filter('i18n')('error.recipe.deactivation.failed'));
  },
});

export default events;
