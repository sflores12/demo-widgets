import hooks from './hooks';

describe('transformConversations hook', () => {
  it('appends new items to a list of current items', () => {
    const currentItems = [{ id: '4' }, { id: '3' }];
    const newItemsWrapper = {
        items: [{ id: '2' }, { id: '1'}],
        totalCount: 4,
    }

    const result = hooks.transformConversations(newItemsWrapper, currentItems);

    const expectedResult = {
        items: [{ id: '4' }, { id: '3' }, { id: '2' }, { id: '1'}],
        totalCount: 4
    };

    expect(result).toEqual(expectedResult);
  });

  it('does not append duplicate items', () => {
    const currentItems = [{ id: '4' }, { id: '3' }];
    const newItemsWrapper = {
        items: [{ id: '3' }, { id: '2'}],
        totalCount: 5,
    };

    const result = hooks.transformConversations(newItemsWrapper, currentItems);

    const expectedResult = {
        items: [{ id: '4' }, { id: '3' }, { id: '2' }],
        totalCount: 5
    };

    expect(result).toEqual(expectedResult);
  });
})