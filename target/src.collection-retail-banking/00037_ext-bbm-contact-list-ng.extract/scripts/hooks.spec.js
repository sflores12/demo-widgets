import * as extHooks from './hooks';

describe('ext-bbm-contact-list-ng:hooks', function() {
  const contacts = [
    { name: 'Dianna Cooper' },
    { name: 'alexandra Ballard' },
    { name: 'Adrian Cooper' },
    { name: 'Bert Wilkins' },
    { name: 'Juana Griffith' },
    { name: 'Desiree Richardson' },
    { name: 'Adrian Archibald' },
  ];

  describe('processContacts', function() {
    it('should group given contacts by first character', function() {
      const groups = extHooks.processContacts(contacts);
      expect(groups.length).toBe(4); // Four groups: A, B, D, J
    });

    it('should sort groups alphabetically', function() {
      const groups = extHooks.processContacts(contacts);
      const chars = groups.map(group => group.char);

      expect(chars).toEqual(['A', 'B', 'D', 'J']);
    });

    it('should sort contacts within groups alphabetically', function() {
      const groups = extHooks.processContacts(contacts);

      expect(groups[0].contacts).toEqual([
        contacts[6],
        contacts[2],
        contacts[1],
      ]);

      expect(groups[1].contacts).toEqual([
        contacts[3],
      ]);

      expect(groups[2].contacts).toEqual([
        contacts[5],
        contacts[0],
      ]);

      expect(groups[3].contacts).toEqual([
        contacts[4],
      ]);
    });
  });

  describe('selectPrevContact', () => {
    it('should return null when prev or first contact not found', () => {
      expect(extHooks.selectPrevContact()).toBeNull();
      expect(extHooks.selectPrevContact(null, { id: 'hello' })).toBeNull();
      expect(extHooks.selectPrevContact([], { id: 'hello' })).toBeNull();
      expect(extHooks.selectPrevContact([])).toBeNull();
      expect(extHooks.selectPrevContact([], 123)).toBeNull();
      expect(extHooks.selectPrevContact([{ contacts: [] }])).toBeNull();
      expect(extHooks.selectPrevContact([{ contacts: [] }]), 543, {}).toBeNull();
    });

    it('should return correct contact based on input params', () => {
      expect(extHooks.selectPrevContact([{ contacts: ['hello'] }])).toBe('hello');
      expect(extHooks.selectPrevContact([{ contacts: ['hello', 'world'] }], 33, {})).toBe('hello');
      expect(extHooks.selectPrevContact([{ contacts: ['hello'] }], 67, { id: 'hello' })).toBe('hello');

      const contacts = [
        { char: 'B', contacts: [
          { id: 1 },
          { id: 2 },
          { id: 3 }
        ]},
        { char: 'C', contacts: [
          { id: 4 },
          { id: 5 },
          { id: 6 }
        ]}
      ];

      expect(extHooks.selectPrevContact(contacts)).toEqual({ id: 1 });
      expect(extHooks.selectPrevContact(contacts, 0, { name: 'Jeff', id: 1 })).toEqual({ id: 1 });
      expect(extHooks.selectPrevContact(contacts, 0, { name: 'Bob', id: 3 })).toEqual({ id: 2 });
      expect(extHooks.selectPrevContact(contacts, 0, { name: 'Charly', id: 4 })).toEqual({ id: 3 });
    });
  });
});
