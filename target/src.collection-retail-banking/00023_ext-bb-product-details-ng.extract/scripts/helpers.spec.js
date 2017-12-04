import helpersFactory from './helpers';

const context = {
  $filter: () => () => {},
};

let helpers;

describe('ext-bb-product-details-ng::helpers', () => {
  beforeEach(() => {
    helpers = helpersFactory(context);
  });

  describe('#maskCardNumber', () => {
    it('should set a prefix of unicode characters to a given number', () => {

      const prefixMask = '\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF ';
      const product = {
        id: '1',
        name: 'Mr and Mrs J. Smith',
        number: 1234
      };

      const actual = helpers.maskCardNumber(product.number);
      const expected = prefixMask + product.number;

      expect(actual).toEqual(expected);
    });
  });
});
