import productDetailsHelpers from './helpers';

describe('helpers', () => {
  let helpersInstance;

  beforeEach(() => {
    helpersInstance = productDetailsHelpers();
  });

  describe('isLoading', () => {
    it('should be true if there is the loading state', () => {
      const ctrl = {
        state: {
          loading: true,
        },
      };

      expect(helpersInstance.isLoading(ctrl)).toEqual(true);
    });

    it('should be false if there is no loading at the moment', () => {
      const ctrl = {
        state: {
          loading: false,
        },
      };

      expect(helpersInstance.isLoading(ctrl)).toEqual(false);
    });
  });

  describe('isErrorState', () => {
    it('should be true if there is an error during the loading', () => {
      const ctrl = {
        state: {
          loading: false,
          error: true,
        },
      };

      expect(helpersInstance.isErrorState(ctrl)).toEqual(true);
    });

    it('should be false if there are no errors', () => {
      const ctrl = {
        state: {
          loading: false,
          error: false,
        },
      };

      expect(helpersInstance.isErrorState(ctrl)).toEqual(false);
    });
  });
});
