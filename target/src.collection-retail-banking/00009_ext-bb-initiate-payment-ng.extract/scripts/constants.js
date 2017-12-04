/**
 * @description
 * Array of recurring frequency objects with the following properties (all mandatory)
 *
 * @property {string} object.name Translation key of the label
 * that will be displayed to the end user
 * @property {string} object.value Denotes frequency type of transfer.
 * Possible values: DAILY/WEEKLY/MONTHLY/YEARLY
 * @property {number} object.every Indicates skip interval of transfer.
 * 1 would mean execute every time, 2 - every other time
 *
 * @example
 * {
 *   name: 'form.schedule.frequency.weekly',
 *   value: 'WEEKLY',
 *   every: 1,
 * },
 * {
 *   name: 'form.schedule.frequency.bi.weekly',
 *   value: 'WEEKLY',
 *   every: 2,
 * }
 *
 * @name transferFrequencies
 * @type {array}
 */
// eslint-disable-next-line import/prefer-default-export
export const transferFrequencies = [
  {
    name: 'form.schedule.frequency.daily',
    value: 'DAILY',
    every: 1,
  },
  {
    name: 'form.schedule.frequency.weekly',
    value: 'WEEKLY',
    every: 1,
  },
  {
    name: 'form.schedule.frequency.monthly',
    value: 'MONTHLY',
    every: 1,
  },
  {
    name: 'form.schedule.frequency.quarterly',
    value: 'QUARTERLY',
    every: 1,
  },
  {
    name: 'form.schedule.frequency.annually',
    value: 'YEARLY',
    every: 1,
  },
];
