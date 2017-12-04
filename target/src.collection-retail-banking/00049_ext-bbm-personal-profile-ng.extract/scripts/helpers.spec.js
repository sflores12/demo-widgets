import helpers from './helpers';

describe('helpers', () => {
  let helpersInstance;

  beforeEach(() => {
    helpersInstance = helpers();
  });

  describe('showLoadingState', () => {
    it('should be true if it is the first loading', () => {
      const ctrl = {
        state: {
          user: {
            data: null,
            loading: true,
          },
        },
      };

      expect(helpersInstance.showLoadingState(ctrl)).toEqual(true);
    });

    it('should be false if it is not the first loading', () => {
      const ctrl = {
        state: {
          user: {
            data: {},
            loading: true,
          },
        },
      };

      expect(helpersInstance.showLoadingState(ctrl)).toEqual(false);
    });
  });

  describe('showErrorState', () => {
    it('should be true if there is an error during the loading', () => {
      const ctrl = {
        state: {
          user: {
            loading: false,
            error: true,
          },
        },
      };

      expect(helpersInstance.showErrorState(ctrl)).toEqual(true);
    });

    it('should be false if there are no errors', () => {
      const ctrl = {
        state: {
          user: {
            loading: false,
            error: false,
          },
        },
      };

      expect(helpersInstance.showErrorState(ctrl)).toEqual(false);
    });
  });
});
