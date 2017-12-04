import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-bb-rich-text-editor-ng', () => {
  var $compile, $componentController,
      scope, element, component;
  let actionbar, content;

  const defaultTemplate = `
    <ui-bb-rich-text-editor-ng data-ng-model="text"></ui-bb-rich-text-editor-ng>
  `;

  const createElement = (template = defaultTemplate) => {
    let compiled = $compile(template)(scope);
    scope.$digest();
    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_, _$componentController_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', () => {
    beforeEach(() => {
      element = createElement();
      actionbar = angular.element(element.find('div')[0]);
      content = angular.element(element.find('div')[1]);
    });

    it('should render component', () => {
      expect(actionbar.hasClass('pell-actionbar')).toBeTrue();
      expect(content.hasClass('pell-content')).toBeTrue();
    });

    it('should render buttons', () => {
      const buttons = [...actionbar.find('button')];
      const titles = buttons.map((btn) => btn.title);

      expect(titles).toEqual([
        'Bold', 'Italic', 'Underline', 'Strike-through', 'Heading 1', 'Heading 2',
        'Paragraph', 'Quote', 'Ordered List', 'Unordered List', 'Code',
        'Horizontal Line', 'Link',
      ]);
    });
  });

  describe('functionality', () => {
    let buttons, lastCommand, lastValue, lastPrompt;

    beforeEach(() => {
      element = createElement();
      actionbar = angular.element(element.find('div')[0]);
      content = angular.element(element.find('div')[1]);
      buttons = [...actionbar.find('button')];

      lastCommand = '';
      lastValue = '';
      document.execCommand = (command, _, value) => {
        lastCommand = command;
        lastValue = value;
      }

      lastPrompt = '';
      window.prompt = (prompt) => {
        lastPrompt = prompt;
        return 'url-' + (prompt.indexOf('link') > 0 ? 'link' : 'image');
      }
    });

    const clickButton = (title) => {
      buttons.find((btn) => btn.title === title).click();
    };

    it('should call the bold command', () => {
      clickButton('Bold');
      expect(lastCommand).toBe('bold');
      expect(lastValue).toBeNull();
    });

    it('should call the Heading 1 command', () => {
      clickButton('Heading 1');
      expect(lastCommand).toBe('formatBlock');
      expect(lastValue).toBe('<H1>');
    });

    it('should call the Quote command', () => {
      clickButton('Quote');
      expect(lastCommand).toBe('formatBlock');
      expect(lastValue).toBe('<BLOCKQUOTE>');
    });

    it('should call the Ordered List command', () => {
      clickButton('Ordered List');
      expect(lastCommand).toBe('insertOrderedList');
      expect(lastValue).toBeNull();
    });

    it('should call the createLink command', () => {
      clickButton('Link');
      expect(lastPrompt.indexOf('link') > 0).toBeTrue();
      expect(lastCommand).toBe('createLink');
      expect(lastValue).toBe('url-link');
    });
  });
});
