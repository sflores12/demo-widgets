import helpersFactory from './helpers';

const context = {
  $filter: () => () => {},
};

let helpers;

describe('ext-bb-manage-products-ng::helpers', () => {
  beforeEach(() => {
    helpers = helpersFactory(context);
  });

  describe('#handleAlias', () => {
    it('should return the alias of the product', () => {

      const selectedProducts = [
        {
          "kind": "currentAccounts",
          "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr and Mrs J. Smith",
          "alias": "Our joined account",
          "visible": true
        },
        {
          "kind": "savingsAccounts",
          "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr J. Smith",
          "visible": true
        },
        {
          "kind": "termDeposits",
          "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr J. Smith",
          "visible": true
        }
      ];

      const actual = helpers.handleAlias(selectedProducts[0].alias, selectedProducts[0].name);
      const expected = selectedProducts[0].alias;

      expect(actual).toEqual(expected);
    });

    it('should return the name of the product when alias is not present', () => {
      const selectedProducts = [
        {
          "kind": "currentAccounts",
          "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr and Mrs J. Smith",
          "alias": "Our joined account",
          "visible": true
        },
        {
          "kind": "savingsAccounts",
          "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr J. Smith",
          "visible": true
        },
        {
          "kind": "termDeposits",
          "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr J. Smith",
          "visible": true
        }
      ];

      const actual = helpers.handleAlias(selectedProducts[1].alias, selectedProducts[1].name);
      const expected = selectedProducts[1].name;

      expect(actual).toEqual(expected);
    });
  });

  describe('#processBalances', () => {
    it('should map a primary value param on each product kind', () => {
      const selectedProducts = [
        {
          "kind": "currentAccounts",
          "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr and Mrs J. Smith",
          "alias": "Our joined account",
          "visible": true,
          "bookedBalance": 1270
        },
        {
          "kind": "savingsAccounts",
          "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr J. Smith",
          "visible": true
        },
        {
          "kind": "termDeposits",
          "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
          "name": "Mr J. Smith",
          "visible": true
        }
      ];

      const actual = helpers.processBalances(selectedProducts[0]);
      const expected = selectedProducts[0].bookedBalance;

      expect(actual).toEqual(expected);
    });
  });
});
