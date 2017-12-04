# config-bb-locale


Version: **1.0.91**

Configuration module for localization and translation.

This configuration module is intended to be replaced and overwritten per project. It is used
by lib-bb-start-ng to bootstrap the localisation settings for the widget.

When replacing this config, please ensure the functions below are implemented.

If you have installed the bb-customize ({link http://npmjs.com/package/@bb-cli/bb-customize}
CLI tool, you can copy the default config-bb-locale into your project with this command:

```bash
bb-customize item config-bb-locale --new-name config-bb-locale
```

## Table of Contents
- **Exports**<br/>    <a href="#locale">locale(currentLocale)</a><br/>    <a href="#localeModuleName">localeModuleName(currentLocale)</a><br/>    <a href="#messageBundleModule">messageBundleModule(widget)</a><br/>

## Exports


### <a name="locale"></a>*locale(currentLocale)*

Return which locale should be used. By default it uses the locale provided by the
  portal client widget instance (to be compatible with CXP 6) and falls back to reading the lang
  or xml:lang from the document. This allows custom pages in CXP to configure the locale from the
  server-side. If no configured locale is found, it defaults to "en-us".

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currentLocale | String | The locale identifier, determined by portal client (if available) |

##### Returns

String (optional) - *The locale identifier*

### <a name="localeModuleName"></a>*localeModuleName(currentLocale)*

Returns the name of the angular locale module to load
  to be loaded during widget startup. This module does not need to export anything, but can
  configure the local environment with the relevant locale - by default it will load the
  relevant angular ngLocale module for the selected locale.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currentLocale | String | The locale identifier, determined by portal client (if available) |

##### Returns

String (optional) - *The module to load to setup the locale*

### <a name="messageBundleModule"></a>*messageBundleModule(widget)*

Returns the name of a module that contains the message bundle with the needed
translations. By default it will load the assets/messages.json from the widget's extension. This
can be customized by setting a messages preference on the widget pointing to the relevant module.

By customizing this function you can define your own logic for how message bundles should be
loaded. For example, if you have an endpoint which returns all translations for all your
widgets, then you can return the path to the endpoint from this function.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| widget | <a href="lib-bb-widget.html#BBWidget">BBWidget</a> | The current widget |

##### Returns

String (optional) - *The module to load to provide the message bundle*
