export default {
  actionRecipeSpecifications: [
    {
      id: '5',
      name: 'New Transaction',
      userDefinable: true,
      type: 'newTransaction',
      triggerDefinition: {
        selectors: [
          {
            path: 'transaction.arrangementId',
            type: 'string',
          },
        ],
        filter: [
          {
            path: 'transaction.amount',
            type: 'number',
          },
        ],
      },
      actions: [
        {
          type: 'notification',
          templateId: '1',
        },
        {
          type: 'sms',
          templateId: '2',
        },
      ],
    },
  ],
};
