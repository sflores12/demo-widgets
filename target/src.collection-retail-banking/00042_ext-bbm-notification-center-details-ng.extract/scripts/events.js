// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';

const Event = {
  NOTIFICATION_DELETE_START: 'bb.event.notification.delete.start',
  NOTIFICATION_DELETE_DONE: 'bb.event.notification.delete.done',
  NOTIFICATION_DELETE_FAILED: 'bb.event.notification.delete.failed',
};

export default ({ $filter }) => {
  const i18n = $filter('i18n');

  return {
    [Event.NOTIFICATION_DELETE_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.notification.delete.start'));
    },

    [Event.NOTIFICATION_DELETE_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.notification.delete.done'));
    },

    [Event.NOTIFICATION_DELETE_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.notification.delete.failed'));
    },
  };
};
