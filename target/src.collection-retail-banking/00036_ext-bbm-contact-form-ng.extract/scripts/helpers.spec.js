/* global jasmine, describe, expect, fail, it */

import helpers from './helpers';

const setup = () => {
  const form = jasmine.createSpyObj('form', ['$setPristine', '$setUntouched']);
  const ctrl = jasmine.createSpyObj('$ctrl', ['saveContact']);
  ctrl.saveContact.and.returnValue(Promise.resolve({}));
  return {
    form,
    ctrl,
  };
};

describe('resets the form after saving', () => {
  it('when on the new contact page, creates a new contact', (done) => {
    const { ctrl, form } = setup();
    const contact = { id: 'arbContactId' };
    ctrl.state = {
      contact: {
        data: contact,
      },
    };

    helpers.saveContact(ctrl, form)
      .then(() => {
        expect(ctrl.saveContact).toHaveBeenCalledWith(contact);
        expect(form.$setUntouched).toHaveBeenCalled();
        expect(form.$setPristine).toHaveBeenCalled();
      })
      .then(done, fail);
  });
});
