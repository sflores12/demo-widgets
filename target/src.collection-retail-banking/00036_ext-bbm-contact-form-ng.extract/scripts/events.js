// Temporary disable capsInNew until it fixed in lib-bbm-plugins
/* eslint new-cap: ["error", { "capIsNew": false }] */
import plugins from 'lib-bbm-plugins';

const Event = {
  CONTACT_CREATE_START: 'bb.event.contact.create.start',
  CONTACT_CREATE_DONE: 'bb.event.contact.create.done',
  CONTACT_CREATE_FAILED: 'bb.event.contact.create.failed',
  CONTACT_DELETE_START: 'bb.event.contact.delete.start',
  CONTACT_DELETE_DONE: 'bb.event.contact.delete.done',
  CONTACT_DELETE_FAILED: 'bb.event.contact.delete.failed',
  CONTACT_UPDATE_START: 'bb.event.contact.update.start',
  CONTACT_UPDATE_DONE: 'bb.event.contact.update.done',
  CONTACT_UPDATE_FAILED: 'bb.event.contact.update.failed',
};

export default {
  [Event.CONTACT_DELETE_START]() {
    plugins.ActivityIndicator().show('Deleting contact');
  },

  [Event.CONTACT_DELETE_DONE]() {
    plugins.ActivityIndicator().hide();
    plugins.Snackbar().success('Contact deleted successfully');
  },

  [Event.CONTACT_DELETE_FAILED]() {
    plugins.ActivityIndicator().hide();
    plugins.Snackbar().error('Unable to delete the contact, please try again');
  },

  [Event.CONTACT_UPDATE_START]() {
    plugins.ActivityIndicator().show('Updating contact');
  },

  [Event.CONTACT_UPDATE_DONE]() {
    plugins.ActivityIndicator().hide();
    plugins.Snackbar().success('Contact updated successfully');
  },

  [Event.CONTACT_UPDATE_FAILED]() {
    plugins.ActivityIndicator().hide();
    plugins.Snackbar().error('Unable to update the contact, please try again');
  },

  [Event.CONTACT_CREATE_START]() {
    plugins.ActivityIndicator().show('Creating new contact');
  },

  [Event.CONTACT_CREATE_DONE]() {
    plugins.ActivityIndicator().hide();
    plugins.Snackbar().success('Contact created successfully');
  },

  [Event.CONTACT_CREATE_FAILED]() {
    plugins.ActivityIndicator().hide();
    plugins.Snackbar().error('Unable to create the contact, please try again');
  },
};
