/**
 * @module ui-bb-i18n-ng
 *
 * @description Filter and directive for translating message keys.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbI18nNgKey from 'ui-bb-i18n-ng';
 *
 * export const dependencyKeys = [
 *   uiBbI18nNgKey,
 * ];
 *
 * // file: assets/messages.json
 * {
 *   "en-US": {
 *     "example.title": "Example Widget Title",
 *     "example.greeting": "Welcome, {name}!"
 *   },
 *   "nl-NL": {
 *     "example.title": "Voorbeeld Widget Titel",
 *     "example.greeting": "Welkom, {name}!"
 *   }
 * }
 *
 * // file: templates/template.ng.html
 * <h1 i18n-key="example.title"></h1>
 * <p i18n-key="example.greeting" i18n-data-name="$ctrl.user.name"></p>
 */

import angular from 'vendor-bb-angular';

import libBbI18nNgModuleKey, { bbTranslateKey, bbMessageFormatKey } from 'lib-bb-i18n-ng';

import i18nDirective from './i18n.directive';

/**
 * The angular module name
 * @name default
 * @type {string}
 */
export default angular
  .module('ui-bb-i18n-ng', [
    libBbI18nNgModuleKey,
  ])

  /**
   * Resolve a message from the translation messages, substituting placeholders with the values
   * from the provided data. The filter is most useful when translating attributes where the
   * directive form cannot be used or when the translation key is not a static value (e.g. it
   * comes from model data).
   *
   * @name i18nFilter
   *
   * @example
   * // file: messages.json
   * {
   *   "example.profileImageAlt": "Profile image for {name}"
   * }
   *
   * // file: controller.js
   * function MyController() {
   *   const $ctrl = this;
   *   $ctrl.user = {
   *     name: 'Bob',
   *   };
   * }
   *
   * // file: template.ng.html
   * <img src="..." alt="{{'example.profileImageAlt' | i18n: { name: $ctrl.user.name } }}" />
   *
   * // Result:
   * <img src="..." alt="Profile image for Bob" />
   *
   * @type {function}
   * @param key {string} The translation key
   * @param data {object.<string>} The mapping of placeholder name to value to substitute
   * @returns {string} The translated string with the available placeholders substituted.
   *                   If no translation is available, the empty string.
   */
  .filter('i18n', [
    bbMessageFormatKey,
    bbTranslateKey,
    /* into */
    (format, translate) =>
      (key, data) => key && format(translate(key), data),
  ])

  /**
   * Display a message from the translation messages, substituting placeholders with the values
   * from the provided data.
   *
   * The `i18n-key` attribute specifies the translation key to use. The data required for the
   * placeholders can be provided in 2 ways, either as a map in the `i18n-data` attribute or as
   * a series of `i18n-data-*` attributes, the two can also be mixed. If both provide a value
   * for the same placeholder, the `i18n-data-*` attributes take precedence.
   *
   * @name i18nKey
   *
   * @example
   * // file: messages.json
   * {
   *   "example.greeting": "Hello, {name}"
   * }
   *
   * // file: controller.js
   * function MyController() {
   *   const $ctrl = this;
   *   $ctrl.user = {
   *     name: 'Bob',
   *   };
   * }
   *
   * // file: template.ng.html
   * <h1 i18n-key="example.greeting" i18n-data="{ name: $ctrl.user.name }"</h1>
   * <!-- or -->
   * <h1 i18n-key="example.greeting" i18n-data-name="$ctrl.user.name"></h1>
   *
   * // Result:
   * <h1>Hello, Bob</h1>
   *
   * @type {function}
   * @param key {string} The translation key
   * @param data {object.<string>} The mapping of placeholder name to value to substitute
   * @returns {string} The translated string with the available placeholders substituted.
   *                   If no translation is available, the empty string.
   */
  .directive('i18nKey', [
    bbMessageFormatKey,
    bbTranslateKey,
    /* into */
    i18nDirective,
  ])

  .name;
