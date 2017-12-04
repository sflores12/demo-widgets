/* eslint-disable import/prefer-default-export */
import { E_AUTH, E_CONNECTIVITY, E_USER, E_UNEXPECTED } from 'lib-bb-model-errors';

const errorMessages = {
  [E_AUTH]: 'model.error.auth',
  [E_CONNECTIVITY]: 'model.error.connectivity',
  [E_USER]: 'model.error.user',
  [E_UNEXPECTED]: 'model.error.unexpected',
};

export const uiError = error => ({
  message: errorMessages[error.code],
});
