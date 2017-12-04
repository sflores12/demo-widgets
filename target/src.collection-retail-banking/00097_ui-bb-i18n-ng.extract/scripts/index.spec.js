import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from '.';

import { bbTranslateKey } from 'lib-bb-i18n-ng';

describe('ui-bb-i18n-ng', () => {
  const createElement = (template, messages, scopeVars) => {
    angular.mock.module(mainComponent, [`${bbTranslateKey}Provider`, (i18n) => {
      i18n.setMessages(messages);
    }]);

    let compiled;
    angular.mock.inject(($rootScope, $compile) => {
        const scope = Object.assign($rootScope.$new(), scopeVars);
        compiled = $compile(template)(scope);
        scope.$digest();
    });
    return compiled;
  };

  describe('The i18n-key directive', () => {
    it('maps the scope variables based on the i18n-data map', () => {
      const element = createElement(
        '<div i18n-key="exampleI18nKey" i18n-data="{ someData: aScopeVariable }"></div>',
        { exampleI18nKey: 'Translated with {someData}.' },
        { aScopeVariable: 'Dynamic Content', }
      );
      expect(element.text()).toEqual('Translated with Dynamic Content.');
    });

    it('maps the scope variables based on the i18n-data-* attributes', () => {
      const element = createElement(
        '<div i18n-key="exampleI18nKey" i18n-data-some-data="aScopeVariable"></div>',
        { exampleI18nKey: 'Translated with {someData}.' },
        { aScopeVariable: 'Dynamic Content', }
      );
      expect(element.text()).toEqual('Translated with Dynamic Content.');
    });

    it('replaces undefined translation keys the empty content', () => {
      const element = createElement('<div i18n-key="undefinedKey"></div>', {}, {});
      expect(element.text()).toEqual('');
    });
  });

  describe('The i18n filter', () => {
    it('maps Placeholders to Scope variables in the i18n-data attribute', () => {
      const element = createElement(
        `<div title="{{'exampleI18nKey' | i18n: { someData: aScopeVariable } }}"></div>`,
        { exampleI18nKey: 'Translated with {someData}.' },
        { aScopeVariable: 'Dynamic Content', }
      );
      expect(element.attr('title')).toEqual('Translated with Dynamic Content.');
    });

    it('returns empty content for undefined translation keys', () => {
      const element = createElement(`<div title="{{'undefinedKey' | i18n }}"></div>`, {}, {});
      expect(element.attr('title')).toEqual('');
    });
  });

});
