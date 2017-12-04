import angular from 'vendor-bb-angular';

import Controller from './controller';

describe('ui-bb-credit-suggest-ng::controller', () => {
  const templateCache = {
    get: () => {},
    put: () => {},
  };

  function createElement() {
    const element = angular.element();
    element.controller = () => ({
      $validators: [],
      $formatters: [],
    });
    element.find = () => ({
      eq: () => [{}]
    });
    return element;
  }

  const $filter = (filter) => {
    switch (filter) {
      case 'i18n':
        return key => `i18n-${key}`;
    }
  };

  function createController() {
    const ctrl = new Controller(createElement(), {}, $filter);
    ctrl.getAccounts = () => {};
    ctrl.selected = {};

    return ctrl;
  }

  describe('filterAccounts()', () => {
    it('exposes initial accounts data if search is empty', (done) => {
      const ctrl = createController();
      ctrl.accounts = [{name: 'Karal'}];

      ctrl.filterAccounts({})
        .then((accounts) => {
          expect(accounts.data.length).toEqual(1);
          expect(accounts.data[0].name).toEqual('Karal');
          expect(accounts.totalItems).toEqual(1);

        })
        .then(done)
        .catch(done.fail);
    });

    it('filters accounts on contactname and accountname', (done) => {
      const ctrl = createController();

      ctrl.accounts = [
        {name: 'PC account', contactPerson: 'Karel'},
        {name: 'My karel Account', contactPerson: 'Meral'},
        {name: 'My third Account', contactPerson: 'John'}
      ];

      ctrl.filterAccounts({searchQuery: 'kar'}, 'name')
        .then((accounts) => {
          expect(accounts.data.length).toEqual(2);
          expect(accounts.data[0].name).toEqual('PC account'); // match on contact
          expect(accounts.data[1].name).toEqual('My karel Account'); // match on account
          expect(accounts.totalItems).toEqual(2);
        })
        .then(done)
        .catch(done.fail);
    });

    it('filters accounts on iban', (done) => {
      const ctrl = createController();

      ctrl.accounts = [
        {name: 'PC account', IBAN: 'FI2112345600000785'},
        {name: 'Account two',  IBAN: 'NL76ABNA0527677058'}
      ];

      ctrl.filterAccounts({searchQuery: 'ABN'}, 'iban')
        .then((accounts) => {
          expect(accounts.data.length).toEqual(1);
          expect(accounts.data[0].name).toEqual('Account two');
          expect(accounts.totalItems).toEqual(1);
        })
        .then(done)
        .catch(done.fail);
    });

    it('filters accounts on bban', (done) => {
      const ctrl = createController();

      ctrl.accounts = [
        {name: 'PC account', BBAN: '12345'},
        {name: 'Account two', BBAN: '6789'}
      ];

      ctrl.filterAccounts({searchQuery: '234'}, 'bban')
        .then((accounts) => {
          expect(accounts.data.length).toEqual(1);
          expect(accounts.data[0].name).toEqual('PC account');
          expect(accounts.totalItems).toEqual(1);
        })
        .then(done)
        .catch(done.fail);
    });
    
    it('will add group property to first item of all internal accounts', (done) => {
      const ctrl = createController();

      ctrl.accounts = [ // accounts without external:true are considered internal
        {name: 'My second Account'},
        {name: 'PC account'},
      ];

     ctrl.filterAccounts({})
        .then((accounts) => {
          expect(accounts.data[0]).toEqual({name: 'My second Account', group: 'i18n-ui-bb-credit-suggest-ng.group.internal'});
          expect(accounts.data[1]).toEqual({name: 'PC account'});
        })
        .then(done)
        .catch(done.fail);
    });

    it('will add group property to first item of every contact person', (done) => {
      const ctrl = createController();

      ctrl.accounts = [ // accounts without external:true are considered internal
        { name: 'Z Account1', external: true, contactPerson: 'Z' },
        { name: 'A Account1', external: true, contactPerson: 'A' },
        { name: 'Z Account2', external: true, contactPerson: 'Z' }
      ];

      ctrl.filterAccounts({})
        .then((accounts) => {
          expect(accounts.data[0]).toEqual({ name: 'A Account1', external: true, contactPerson: 'A', group: 'A' });
          expect(accounts.data[1]).toEqual({ name: 'Z Account1', external: true, contactPerson: 'Z', group: 'Z' });
          expect(accounts.data[2]).toEqual({ name: 'Z Account2', external: true, contactPerson: 'Z' });
        })
        .then(done)
        .catch(done.fail);
    });
  });

 
});
