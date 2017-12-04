// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';
import { Event } from './constants';

export default ({ $filter }) => {
  const i18n = $filter('i18n');

  return {
    [Event.PRODUCT_ALIAS_EDIT_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.productDetails.alias.edit.start'));
    },
    [Event.PRODUCT_ALIAS_EDIT_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.productDetails.alias.edit.done'));
    },
    [Event.PRODUCT_ALIAS_EDIT_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.personalProfile.alias.edit.failed'));
    },
  };
};
