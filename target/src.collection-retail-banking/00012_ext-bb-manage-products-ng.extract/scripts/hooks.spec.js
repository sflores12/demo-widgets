import hooks from './hooks';

describe('product kinds view', () => {
  it('should process flat product kinds to projects', () => {
    const productKindsRawData = [
      {
        "name": "Current Account",
        "id": "currentAccounts",
        "products": [
          {
            "kind": "currentAccounts",
            "id": "1cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
            "name": "Mr and Mrs J. Smith",
            "alias": "Our joined account",
            "visible": true
          },
          {
            "kind": "currentAccounts",
            "id": "2cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
            "name": "Mr J. Smith",
            "alias": "My special account",
            "visible": true
          }
        ]
      },
      {
        "name": "Savings Account",
        "id": "savingsAccounts",
        "products": [
          {
            "kind": "savingsAccounts",
            "id": "3cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
            "name": "Smith Bonus Savings",
            "alias": "Our joined account",
            "visible": true
          },
          {
            "kind": "savingsAccounts",
            "id": "4cdb2224-8926-4b4d-a99f-1c9dfbbb4699",
            "name": "Smith Savings",
            "alias": "Our joined account",
            "visible": true
          }
        ]
      }];
    const resultProducts = hooks.processKinds(productKindsRawData);

    expect(resultProducts.length).toEqual(4);
    expect(resultProducts[0].kindName).toEqual('Current Account');
    expect(resultProducts[1].kindName).toEqual('Current Account');
    expect(resultProducts[2].kindName).toEqual('Savings Account');
    expect(resultProducts[3].kindName).toEqual('Savings Account');
  });
});