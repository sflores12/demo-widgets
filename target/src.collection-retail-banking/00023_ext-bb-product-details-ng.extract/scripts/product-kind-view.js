/**
 * @description
 * Populate the activity details of the productKindView object
 *
 * @inner
 * @type {function}
 * @param {object} product
 * @returns {ProductKindView}
 */
const activityDetails = (product) => ({
  accountOpeningDateValue: product.accountOpeningDate,
  accountOpeningDateLabel: 'product.details.label.аccountOpeningDate',
  lastUpdateDateValue: product.lastUpdateDate,
  lastUpdateDateLabel: 'product.details.label.lastUpdatedDate',
});

const interestPaymentFrequencyKeyPrefix = 'product.details.label.interestPaymentFrequency';

const termUnitKeyPrefix = 'product.details.label.termUnit';

/**
 * @description
 * Representation of interest payments enum values.
 * Possible values are:
 * D - day
 * W - week
 * M - month
 * Y - year
 * @return {string} Translation key label
 */
const interestPayments = {
  D: `${interestPaymentFrequencyKeyPrefix}.daily`,
  W: `${interestPaymentFrequencyKeyPrefix}.weekly`,
  M: `${interestPaymentFrequencyKeyPrefix}.monthly`,
  Y: `${interestPaymentFrequencyKeyPrefix}.yearly`,
};

/**
 * @description
 * Representation of term unit enum values.
 * Possible values are:
 * D - day
 * W - week
 * M - month
 * Y - year
 * @return {string} Translation key label
 */
const termUnits = {
  D: `${termUnitKeyPrefix}.daily`,
  W: `${termUnitKeyPrefix}.weekly`,
  M: `${termUnitKeyPrefix}.monthly`,
  Y: `${termUnitKeyPrefix}.yearly`,
};

/**
 * @description
 * Get the translation key for an interest payment frequency
 * @name getInterestPaymentFrequency
 * @type {function}
 * @param {object} product
 * @return {string} Translation key label
 */
const getInterestPaymentFrequency = (product) =>
  interestPayments[product.interestPaymentFrequencyUnit];

/**
 * @description
 * Get the translation key for a term unit frequency
 * @name getTermUnitFrequency
 * @type {function}
 * @param {object} product
 * @return {string} Translation key label
 */
const getTermUnitFrequency = (product) => termUnits[product.termUnit];

/**
 * @description
 * Get the translation key auto renewal indicator
 * @name getAutoRenewalIndicator
 * @type {function}
 * @param {object} product
 * @return {string} Translation key label
 */
const getAutoRenewalIndicator = (product) => {
  if (product.autoRenewalIndicator) {
    return 'product.details.label.autoRenewalIndicatorTrue';
  }
  return 'product.details.label.autoRenewalIndicatorFalse';
};

/**
 * @description
 * Prepare the fields of a Product into an abstracted form
 * ready to be displayed to the user
 *
 * @inner
 * @type {function}
 * @param {object} product
 * @returns {ProductKindView}
 */
const viewModelFactories = {
  'Current Account': (product) => ({
    id: product.id,
    currency: product.currency,
    generalDetails: {
      name: product.name,
      valueOne: product.productTypeName,
      valueOneLabel: 'product.details.label.accountType',
      valueTwo: product.IBAN,
      valueTwoLabel: 'product.details.label.IBAN',
      valueTwoType: 'text',
      valueThree: product.availableBalance,
      valueThreeLabel: 'product.details.label.availableBalance',
      valueThreeType: 'amount',
    },
    interestDetails: {
      headerLabel: 'product.details.label.interestDetails',
      valueOne: product.accountInterestRate,
      valueOneLabel: 'product.details.label.interestRate',
      valueOneType: 'percentage',
      valueTwo: product.accruedInterest,
      valueTwoLabel: 'product.details.label.accruedInterest',
      valueTwoType: 'amount',
    },
    maturityDetails: {
      headerLabel: 'product.details.label.overdraftDetails',
      valueOne: product.accountInterestRate,
      valueOneLabel: 'product.details.label.overdraftLimit',
      valueOneType: 'amount',
      valueTwo: product.creditLimitExpiryDate,
      valueTwoLabel: 'product.details.label.overdraftExpiryDate',
      valueTwoType: 'date',
    },
    associatedCards: {
      headerLabel: 'product.details.label.associatedDebitCards',
      sectionType: 'debitCards',
      debitCards: product.debitCards,
      debitCardLabel: 'product.details.label.debitCard',
      debitCardExpiryDateLabel: 'product.details.label.expiryDate',
    },
    activityDetails: activityDetails(product),
  }),
  'Term Deposit': (product) => ({
    id: product.id,
    currency: product.currency,
    generalDetails: {
      name: product.name,
      valueOne: product.productTypeName,
      valueOneLabel: 'product.details.label.accountType',
      valueTwo: product.BBAN,
      valueTwoLabel: 'product.details.label.accountNumber',
      valueTwoType: 'text',
      valueThree: product.IBAN,
      valueThreeLabel: 'product.details.label.IBAN',
      valueThreeType: 'text',
      valueFour: product.principalAmount,
      valueFourLabel: 'product.details.label.principalAmount',
      valueFourType: 'amount',
    },
    interestDetails: {
      headerLabel: 'product.details.label.interestDetails',
      valueOne: product.accountInterestRate,
      valueOneLabel: 'product.details.label.interestRate',
      valueOneType: 'percentage',
      valueTwo: product.accruedInterest,
      valueTwoLabel: 'product.details.label.accruedInterest',
      valueTwoType: 'amount',
      valueThree: product.interestPaymentFrequencyNumber,
      valueThreeLabel: 'product.details.label.interestPaymentFrequency',
      valueThreeLabelValue: getInterestPaymentFrequency(product),
      valueThreeType: 'label',
      valueFourLabel: 'product.details.label.autoRenewalIndicator',
      valueFourLabelValue: getAutoRenewalIndicator(product),
      valueFourType: 'label',
    },
    maturityDetails: {
      headerLabel: 'product.details.label.maturityDetails',
      valueOne: product.maturityAmount,
      valueOneLabel: 'product.details.label.maturityBalance',
      valueOneType: 'amount',
      valueTwo: product.termNumber,
      valueTwoLabel: 'product.details.label.term',
      valueTwoLabelValue: getTermUnitFrequency(product),
      valueTwoType: 'label',
      valueThree: product.startDate,
      valueThreeLabel: 'product.details.label.startDate',
      valueThreeType: 'date',
      valueFour: product.maturityDate,
      valueFourLabel: 'product.details.label.maturityDate',
      valueFourType: 'date',
    },
    associatedCards: {
      headerLabel: 'product.details.label.interestAndMaturitySettlementAccount',
      sectionType: 'account',
      accountLabel: 'product.details.label.myCurrentAccount',
      account: product.interestSettlementAccount,
    },
    activityDetails: activityDetails(product),
  }),
  Loan: (product) => ({
    id: product.id,
    currency: product.currency,
    generalDetails: {
      name: product.name,
      valueOne: product.productTypeName,
      valueOneLabel: 'product.details.label.accountType',
      valueTwo: product.BBAN,
      valueTwoLabel: 'product.details.label.accountNumber',
      valueTwoType: 'text',
      valueThree: product.bookedBalance,
      valueThreeLabel: 'product.details.label.outstandingAmount',
      valueThreeType: 'amount',
      valueFour: product.amountInArrear,
      valueFourLabel: 'product.details.label.amountInArrear',
      valueFourType: 'amount',
    },
    interestDetails: {
      valueOne: product.monthlyInstalmentAmount,
      valueOneLabel: 'product.details.label.monthlyInstalmentAmount',
      valueOneType: 'amount',
      valueTwo: product.principalAmount,
      valueTwoLabel: 'product.details.label.principalAmount',
      valueTwoType: 'amount',
      valueThree: product.accountInterestRate,
      valueThreeLabel: 'product.details.label.interestRate',
      valueThreeType: 'percentage',
      valueFour: product.termNumber,
      valueFourLabel: 'product.details.label.term',
      valueFourLabelValue: getTermUnitFrequency(product),
      valueFourType: 'label',
    },
    associatedCards: {
      headerLabel: 'product.details.label.interestAndRedemptionSettlementAccount',
      sectionType: 'account',
      accountLabel: 'product.details.label.myCurrentAccount',
      account: product.interestSettlementAccount,
    },
    activityDetails: activityDetails(product),
  }),
  'Savings Account': (product) => ({
    id: product.id,
    currency: product.currency,
    generalDetails: {
      name: product.name,
      valueOne: product.productTypeName,
      valueOneLabel: 'product.details.label.accountType',
      valueTwo: product.BBAN,
      valueTwoLabel: 'product.details.label.accountNumber',
      valueTwoType: 'text',
      valueThree: product.bookedBalance,
      valueThreeLabel: 'product.details.label.accountBalance',
      valueThreeType: 'amount',
    },
    interestDetails: {
      valueOne: product.accountInterestRate,
      valueOneLabel: 'product.details.label.interestRate',
      valueOneType: 'percentage',
      valueTwo: product.accruedInterest,
      valueTwoLabel: 'product.details.label.accruedInterest',
      valueTwoType: 'amount',
      valueThree: product.minimumRequiredBalance,
      valueThreeLabel: 'product.details.label.minimumRequiredBalance',
      valueThreeType: 'amount',
    },
    activityDetails: activityDetails(product),
  }),
  'Credit Card': (product) => ({
    id: product.id,
    currency: product.currency,
    generalDetails: {
      name: product.name,
      valueOne: product.productTypeName,
      valueOneLabel: 'product.details.label.accountType',
      valueTwo: product.number,
      valueTwoLabel: 'product.details.label.accountNumber',
      valueTwoType: 'card',
    },
    interestDetails: {
      valueOne: product.bookedBalance,
      valueOneLabel: 'product.details.label.consumedAmount',
      valueOneType: 'amount',
      valueTwo: product.availableBalance,
      valueTwoLabel: 'product.details.label.remainingAmount',
      valueTwoType: 'amount',
      valueThree: product.creditLimit,
      valueThreeLabel: 'product.details.label.creditLimit',
      valueThreeType: 'amount',
    },
    maturityDetails: {
      valueOne: product.minimumPayment,
      valueOneLabel: 'product.details.label.minimumPayment',
      valueOneType: 'amount',
      valueTwo: product.minimumPaymentDueDate,
      valueTwoLabel: 'product.details.label.minimumPaymentDueDate',
      valueTwoType: 'date',
      valueThree: product.validThru,
      valueThreeLabel: 'product.details.label.validThru',
      valueThreeType: 'date',
      valueFour: product.applicableInterestRate,
      valueFourLabel: 'product.details.label.interestRate',
      valueFourType: 'percentage',
    },
    activityDetails: activityDetails(product),
  }),
  'Investment Account': (product) => ({
    id: product.id,
    currency: product.currency,
    generalDetails: {
      name: product.name,
      valueOne: product.productTypeName,
      valueOneLabel: 'product.details.label.accountType',
      valueTwo: product.BBAN,
      valueTwoLabel: 'product.details.label.accountNumber',
      valueTwoType: 'text',
      valueThree: product.totalInvestmentValue,
      valueThreeLabel: 'product.details.label.totalInvestmentAmount',
      valueThreeType: 'amount',
    },
    activityDetails: activityDetails(product),
  }),
  'Debit Card': (product) => ({
    id: product.id,
    currency: product.currency,
    generalDetails: {
      name: product.name,
      valueOne: product.productTypeName,
      valueOneLabel: 'product.details.label.accountType',
      valueTwo: product.BBAN,
      valueTwoLabel: 'product.details.label.accountNumber',
      valueTwoType: 'text',
    },
    activityDetails: activityDetails(product),
  }),
};

export default (product) => viewModelFactories[product.productKindName](product);

/**
 * @typedef {Object} ProductKindView
 * @property {string} id - Internal Product identifier
 * @property {string} currency - ISO currency code
 * @property {object} generalDetails - section for general details of the product
 * @property {string} name - Product name value to be displayed
 * @property {?any} valueOne - First value to be displayed for this section
 * @property {string} valueOneLabel - Label to describe the first value
 * @property {?any} valueTwo - Second value to be displayed
 * @property {string} valueTwoLabel - Label to describe the second value
 * @property {?any} valueTwoType - Type of the second value
 * @property {?any} valueThree - Third value to be displayed
 * @property {?string} valueThreeLabel - Label to describe the third value
 * @property {?any} valueThreeType - Type of the third value
 * @property {?any} valueFour - Fourth value to be displayed
 * @property {?string} valueFourLabel - Label to describe the fourth value
 * @property {?any} valueFourType - Type of the fourth value
 * @property {object} interestDetails - section for interest details of the product
 * @property {string} headerLabel - Label to describe the section
 * @property {?any} valueOne - First value to be displayed for this section
 * @property {string} valueOneLabel - Label to describe the first value
 * @property {?any} valueTwo - Second value to be displayed
 * @property {string} valueTwoLabel - Label to describe the second value
 * @property {?any} valueTwoType - Type of the second value
 * @property {?any} valueThree - Third value to be displayed
 * @property {?string} valueThreeLabel - Label to describe the third value
 * @property {?any} valueThreeType - Type of the third value
 * @property {?any} valueFour - Fourth value to be displayed
 * @property {?string} valueFourLabel - Label to describe the fourth value
 * @property {?any} valueFourType - Type of the fourth value
 * @property {object} maturityDetails - section for maturity details of the product
 * @property {string} headerLabel - Label to describe the section
 * @property {?any} valueOne - First value to be displayed for this section
 * @property {string} valueOneLabel - Label to describe the first value
 * @property {?any} valueTwo - Second value to be displayed
 * @property {string} valueTwoLabel - Label to describe the second value
 * @property {?any} valueTwoType - Type of the second value
 * @property {?any} valueThree - Third value to be displayed
 * @property {?string} valueThreeLabel - Label to describe the third value
 * @property {?any} valueThreeType - Type of the third value
 * @property {?any} valueFour - Fourth value to be displayed
 * @property {?string} valueFourLabel - Label to describe the fourth value
 * @property {?any} valueFourType - Type of the fourth value
 * @property {object} associatedCards - section for listing associated cards of the product
 * @property {string} headerLabel - Label to describe the section
 * @property {?any} sectionType - Type of the section
 * @property {object} debitCards - List of debit cards associated to the product
 * @property {string} debitCardLabel - Label to describe the debit card
 * @property {string} debitCardExpiryDateLabel - Expiry date of the debit card
 * @property {string} accountLabel - Label to describe the account associated to the product
 * @property {string} account - Associated account to the product
 * @property {object} activityDetails - section for listing activity details of the product
 * @property {date} accountOpeningDateValue - Date when the account was created
 * @property {string} accountOpeningDateLabel - Label to describe the account opening date
 * @property {date} lastUpdateDateValue - Date when the account was last updated
 * @property {string} lastUpdateDateLabel - Label to describe the last update date
*/
