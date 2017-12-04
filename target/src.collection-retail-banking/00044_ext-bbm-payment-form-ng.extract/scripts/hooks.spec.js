import * as extHooks from './hooks';

describe('ext-bbm-payment-form-ng:hooks', () => {
  describe('processBeneficiaries', () => {
    const { processBeneficiaries } = extHooks;

    const contactA = { id: 'contact-a', name: 'Brechtje Mien' };
    const contactB = { id: 'contact-b', name: 'Brigitta Sabien' };
    const contactC = { id: 'contact-c', name: 'Rien Filibert' };
    const contactD = { id: 'contact-d', name: 'Sofie Claudia' };

    const creditAccountA = { id: 'credit-account-a' };
    const creditAccountB = { id: 'credit-account-b' };
    const creditAccountC = { id: 'credit-account-c' };

    const contacts = [
      contactA,
      contactB,
      contactC,
      contactD,
    ];

    const creditAccounts = [
      creditAccountA,
      creditAccountB,
      creditAccountC,
    ];

    it('should return all beneficiaries as "all" property', () => {
      const processedBeneficiaries = processBeneficiaries(creditAccounts, contacts);

      expect(processedBeneficiaries.all).toEqual([
        creditAccountA,
        creditAccountB,
        creditAccountC,
        contactA,
        contactB,
        contactC,
        contactD,
      ]);
    });

    it('should return credit accounts as "creditAccounts" property', () => {
      const processedBeneficiaries = processBeneficiaries(creditAccounts, contacts);
      expect(processedBeneficiaries.creditAccounts).toEqual(creditAccounts);
    });

    it('should return grouped contacts as "contacts" property', () => {
      const processedBeneficiaries = processBeneficiaries(creditAccounts, contacts);
      expect(processedBeneficiaries.contacts).toEqual([
        { char: 'B', contacts: [contactA, contactB] },
        { char: 'R', contacts: [contactC] },
        { char: 'S', contacts: [contactD] },
      ]);
    });
  });
});
