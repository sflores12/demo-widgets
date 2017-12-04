import contactHelpers from './helpers';

describe('helpers', () => {
  const helpers = contactHelpers();

  describe('hasContacts', () => {
    it('should return true if contacts exist', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
          },
        },
      };

      expect(helpers.hasContacts(ctrl)).toEqual(true);
    });

    it('should return false if there are no contacts', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [],
          },
        },
      };

      expect(helpers.hasContacts(ctrl)).toEqual(false);
    });
  });

  describe('hasSearchContacts', () => {
    it('should return true if there are some search results', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
          },
        },
      };

      expect(helpers.hasSearchContacts(ctrl)).toEqual(true);
    });

    it('should return false if there are no search results', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [],
          },
        },
      };

      expect(helpers.hasSearchContacts(ctrl)).toEqual(false);
    });
  });

  describe('showLoadingState', () => {
    it('should be true if there is a loading at the moment and there are no contacts', () => {
      const ctrl = {
        state: {
          contacts: {
            data: null,
            loading: true,
          },
        },
      };

      expect(helpers.showLoadingState(ctrl)).toEqual(true);
    });

    it('should be false if there is no loading at the moment', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: false,
          },
        },
      };

      expect(helpers.showLoadingState(ctrl)).toEqual(false);
    });

    it('should be false if the loading is started and contacts already exist', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: true,
          },
        },
      };

      expect(helpers.showLoadingState(ctrl)).toEqual(false);
    });
  });

  describe('showSearchLoadingState', () => {
    it('should be true if there is a searching at the moment and there are no search results', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: null,
            loading: true,
          },
        },
      };

      expect(helpers.showSearchLoadingState(ctrl)).toEqual(true);
    });

    it('should be false if there is no searching at the moment', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: false,
          },
        },
      };

      expect(helpers.showSearchLoadingState(ctrl)).toEqual(false);
    });

    it('should be false if searching is started and some results already exist', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: true,
          },
        },
      };

      expect(helpers.showSearchLoadingState(ctrl)).toEqual(false);
    });
  });

  describe('showLoadMore', () => {
    it('should be true if the loading has started and contacts already exist', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: true,
          },
        },
      };

      expect(helpers.showLoadMore(ctrl)).toEqual(true);
    });

    it('should be false if there is no loading at the moment', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: false,
          },
        },
      };

      expect(helpers.showLoadMore(ctrl)).toEqual(false);
    });

    it('should be false if this is the first loading', () => {
      const ctrl = {
        state: {
          contacts: {
            data: null,
            loading: true,
          },
        },
      };

      expect(helpers.showLoadMore(ctrl)).toEqual(false);
    });
  });

  describe('showSearchLoadMore', () => {
    it('should be true if the loading has started and searched contacts already exist', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: true,
          },
        },
      };

      expect(helpers.showSearchLoadMore(ctrl)).toEqual(true);
    });

    it('should be false if there is no loading at the moment', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            loading: false,
          },
        },
      };

      expect(helpers.showSearchLoadMore(ctrl)).toEqual(false);
    });

    it('should be false if this is the first loading', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: null,
            loading: true,
          },
        },
      };

      expect(helpers.showSearchLoadMore(ctrl)).toEqual(false);
    });
  });

  describe('showSearchEmptyState', () => {
    it('should be true if there are no search results', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [],
            error: false,
          },
        },
      };

      expect(helpers.showSearchEmptyState(ctrl)).toEqual(true);
    });

    it('should be false if there are some search results', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            error: false,
          },
        },
      };

      expect(helpers.showSearchEmptyState(ctrl)).toEqual(false);
    });
  });

  describe('showSearchErrorState', () => {
    it('should be true if there is an error during the searching', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            error: true,
            loading: false,
          },
        },
      };

      expect(helpers.showSearchErrorState(ctrl)).toEqual(true);
    });

    it('should be true if there are no errors during the searching', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            error: false,
            loading: false,
          },
        },
      };

      expect(helpers.showSearchErrorState(ctrl)).toEqual(false);
    });

    it('should hide the error state if there is a searching at the moment', () => {
      const ctrl = {
        state: {
          contactsSearch: {
            error: true,
            loading: true,
          },
        },
      };

      expect(helpers.showSearchErrorState(ctrl)).toEqual(false);
    });
  });

  describe('showEmptyState', () => {
    it('should be true if there are no contacts', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [],
            error: false,
            loading: false,
          },
        },
      };

      expect(helpers.showEmptyState(ctrl)).toEqual(true);
    });

    it('should be false if there are some contacts', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }],
            error: false,
            loading: false,
          },
        },
      };

      expect(helpers.showEmptyState(ctrl)).toEqual(false);
    });
  });

  describe('showErrorState', () => {
    it('should be true if there is an error during the loading', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [],
            error: true,
          },
        },
      };

      expect(helpers.showErrorState(ctrl)).toEqual(true);
    });

    it('should be false if there are no errors', () => {
      const ctrl = {
        state: {
          contacts: {
            data: [],
            error: false,
          },
        },
      };

      expect(helpers.showErrorState(ctrl)).toEqual(false);
    });
  });
});
