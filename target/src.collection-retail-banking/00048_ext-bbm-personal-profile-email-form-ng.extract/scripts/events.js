// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';
import { Event } from './constants';

export default ({ $filter }) => {
  const i18n = $filter('i18n');

  return {
    [Event.EMAIL_DELETE_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.personalProfile.email.delete.start'));
    },
    [Event.EMAIL_DELETE_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.personalProfile.email.delete.done'));
    },
    [Event.EMAIL_DELETE_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.personalProfile.email.delete.failed'));
    },
    [Event.EMAIL_CREATE_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.personalProfile.email.create.start'));
    },
    [Event.EMAIL_CREATE_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.personalProfile.email.create.done'));
    },
    [Event.EMAIL_CREATE_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.personalProfile.email.create.failed'));
    },
    [Event.EMAIL_EDIT_START]: () => {
      plugins.ActivityIndicator().show(i18n('message.personalProfile.email.edit.start'));
    },
    [Event.EMAIL_EDIT_DONE]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().success(i18n('message.personalProfile.email.edit.done'));
    },
    [Event.EMAIL_EDIT_FAILED]: () => {
      plugins.ActivityIndicator().hide();
      plugins.Snackbar().error(i18n('message.personalProfile.email.edit.failed'));
    },
  };
};
