// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';
import { Event } from './constants';

export default ({ $filter }) => {
  const i18n = $filter('i18n');

  return {
    [Event.PHONE_DELETE_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.personalProfile.phone.delete.start'));
    },
    [Event.PHONE_DELETE_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.personalProfile.phone.delete.done'));
    },
    [Event.PHONE_DELETE_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.personalProfile.phone.delete.failed'));
    },
    [Event.PHONE_CREATE_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.personalProfile.phone.create.start'));
    },
    [Event.PHONE_CREATE_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.personalProfile.phone.create.done'));
    },
    [Event.PHONE_CREATE_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.personalProfile.phone.create.failed'));
    },
    [Event.PHONE_EDIT_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.personalProfile.phone.edit.start'));
    },
    [Event.PHONE_EDIT_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.personalProfile.phone.edit.done'));
    },
    [Event.PHONE_EDIT_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.personalProfile.phone.edit.failed'));
    },
  };
};
