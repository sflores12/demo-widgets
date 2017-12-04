import productsHelpers from './helpers';

describe('helpers', () => {
  const helpers = productsHelpers();

  describe('isInitialLoading', () => {
    it('should be true if it is the first loading', () => {
      const ctrl = {
        productKinds: null,
        isProductLoading: true,
      };

      expect(helpers.isInitialLoading(ctrl)).toEqual(true);
    });

    it('should be false if it is not the first loading', () => {
      const ctrl = {
        productKinds: [{ id: 1 }, { id: 2 }, { id: 3 }],
        isProductLoading: true,
      };

      expect(helpers.isInitialLoading(ctrl)).toEqual(false);
    });
  });

  describe('isEmptyState', () => {
    it('should be true if there are no products', () => {
      const ctrl = {
        productKinds: [],
        isProductLoading: false,
        productKindsError: false,
      };

      expect(helpers.isEmptyState(ctrl)).toEqual(true);
    });

    it('should be false if there are some products', () => {
      const ctrl = {
        productKinds: [{ id: 1 }, { id: 2 }, { id: 3 }],
        isProductLoading: false,
        productKindsError: false,
      };

      expect(helpers.isEmptyState(ctrl)).toEqual(false);
    });
  });

  describe('isErrorState', () => {
    it('should be true if there is an error during the loading', () => {
      const ctrl = {
        productKindsError: true,
        isProductLoading: false,
      };

      expect(helpers.isErrorState(ctrl)).toEqual(true);
    });

    it('should be false if there are no errors', () => {
      const ctrl = {
        productKindsError: false,
        isProductLoading: false,
      };

      expect(helpers.isErrorState(ctrl)).toEqual(false);
    });
  });
});
