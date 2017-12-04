# lib-bb-start-ng


Version: **1.11.35**

Start module for angular apps. Initialises the widget instance, extensions,
locales, and translation messages.

Usually this module shouldn't be called directly. It will be called by
<a href="lib-bb-start.html#lib-bb-start">lib-bb-start</a>.

Bootstrapping involves the following features:
 - Initialises <a href="lib-bb-widget.html#BBWidget">BBWidget</a> instance from CXP
 <a href="lib-bb-start.html#WidgetInstance">WidgetInstance</a>
 - Loads the locale settings from <a href="config-bb-locale.html#config-bb-locale">config-bb-locale</a>
 - Loads messages file (set from config-bb-locale's
 <a href="config-bb-locale.html#messageBundleModule">messageBundleModule</a> function
 - Provides messages to lib-bb-i18n-ng
 <a href="lib-bb-i18n-ng.html#bbTranslateProvider#setMessages">bbTranslateProvider#setMessages</a>
 - Restores the widget state into
 <a href="lib-bb-state-container-ng.html#bbStateContainerProvider#setInitialState">bbStateContainerProvider#setInitialState</a>
 - Provides context to widget extensions (helpers, events, intents) with:
   - <a href="lib-bb-extension-events-ng.html#lib-bb-extension-events-ng">lib-bb-extension-events-ng</a>
   - <a href="lib-bb-extension-helpers-ng.html#lib-bb-extension-helpers-ng">lib-bb-extension-helpers-ng</a>
   - <a href="lib-bb-extension-intents-ng.html#lib-bb-extension-intents-ng">lib-bb-extension-intents-ng</a>
 - Makes the extension hooks available to the widget instance via
 <a href="lib-bb-widget-extension-ng.html#lib-bb-widget-extension-ng">lib-bb-widget-extension-ng</a>
 - Loads the widget's JS with the modules looader (configured by
 <a href="config-bb-module-loader.html#config-bb-module-loader">config-bb-module-loader</a>)
 - Bootstraps the angular application

## Imports

* config-bb-locale
* lib-bb-event-bus-ng
* lib-bb-extension-events-ng
* lib-bb-extension-helpers-ng
* lib-bb-i18n-ng
* lib-bb-state-container-ng
* lib-bb-storage
* lib-bb-widget
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Table of Contents
- **Exports**<br/>    <a href="#start">start(require, widgetInstance)</a><br/>

## Exports


### <a name="start"></a>*start(require, widgetInstance)*

Start an Angular Based Widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| require | Function | Used to dynamically load modules |
| widgetInstance | <a href="#WidgetInstance">WidgetInstance</a> | An instance of the CXP Widget Object (__WIDGET__) |

##### Returns

<a href="#void">void</a> - **
