/* global document */
/**
 * @module config-bb-locale
 * @description Configuration module for localization and translation.
 *
 * This configuration module is intended to be replaced and overwritten per project. It is used
 * by lib-bb-start-ng to bootstrap the localisation settings for the widget.
 *
 * When replacing this config, please ensure the functions below are implemented.
 *
 * If you have installed the bb-customize ({link http://npmjs.com/package/@bb-cli/bb-customize}
 * CLI tool, you can copy the default config-bb-locale into your project with this command:
 *
 * ```bash
 * bb-customize item config-bb-locale --new-name config-bb-locale
 * ```
 */

// default locale that is built into angular, and for which all widgets provide translations
const DEFAULT_LOCALE = 'en-us';

/**
 * @name locale
 * @description Return which locale should be used. By default it uses the locale provided by the
 *   portal client widget instance (to be compatible with CXP 6) and falls back to reading the lang
 *   or xml:lang from the document. This allows custom pages in CXP to configure the locale from the
 *   server-side. If no configured locale is found, it defaults to "en-us".
 * @type {function}
 * @param {string} currentLocale The locale identifier, determined by portal client (if available)
 * @return {?string} The locale identifier
 */
export const locale = currentLocale => currentLocale
  || document.documentElement.lang
  || document.documentElement.getAttribute('xml:lang')
  || DEFAULT_LOCALE;

/**
 * @name localeModuleName
 * @description Returns the name of the angular locale module to load
 *   to be loaded during widget startup. This module does not need to export anything, but can
 *   configure the local environment with the relevant locale - by default it will load the
 *   relevant angular ngLocale module for the selected locale.
 * @type {function}
 * @param {string} currentLocale The locale identifier, determined by portal client (if available)
 * @return {?string} The module to load to setup the locale
 */
export const localeModuleName = currentLocale => currentLocale &&
  // default implementation does not load any module for "en-us" as it is build into core angular
  (currentLocale.toLowerCase() === DEFAULT_LOCALE
   ? null
   : `config-bb-locale/assets/angular-locale_${currentLocale.toLowerCase()}.js`);

/**
 * @name messageBundleModule
 * @description Returns the name of a module that contains the message bundle with the needed
 * translations. By default it will load the assets/messages.json from the widget's extension. This
 * can be customized by setting a messages preference on the widget pointing to the relevant module.
 *
 * By customizing this function you can define your own logic for how message bundles should be
 * loaded. For example, if you have an endpoint which returns all translations for all your
 * widgets, then you can return the path to the endpoint from this function.
 *
 * @type {function}
 * @param {module:lib-bb-widget.BBWidget} widget The current widget
 * @return {?string} The module to load to provide the message bundle
 */
export const messageBundleModule = widget => {
  const extensionModuleName = widget.getStringPreference('extension');
  return widget.getStringPreference('messages') ||
    (!!extensionModuleName ? `${extensionModuleName}/assets/messages.json` : null);
};
