import angular from 'vendor-bb-angular';
import 'angular-mocks';

import uiBbDropdownSelect from './index';


describe('ui-bb-dropdown-select', function() {

    var scope, compile, element, templateCache, config, httpBackend;

    /**
     * @param {{attrs?: String, dropdown?: {options: Object, template: String}}} params
     */
    function createElement(params) {

        params = getConfig(angular.merge({
            attrs: { 'selected-as': '$option.name' },
            dropdown: { attrs: 'ng-repeat="user in users" option="user"', template: '{{ $option.name }}' }
        }, params));
        var compiled = compile(`
            <form name="testForm">
                <ui-bb-dropdown-select ${params.attrs} ng-model="model" ng-change="onChange()">
                    <ui-bb-dropdown-option ${params.dropdown.attrs || ''}>
                        ${params.dropdown.template || ''}
                    </ui-bb-dropdown-option>
                </ui-bb-dropdown-select>
            </form>
        `)(scope);

        scope.$digest();
        return compiled;
    }

    /**
     * @return {{length}}
     */
    angular.element.prototype.find = function(selector) {
        return angular.element(this[0].querySelectorAll(selector));
    };

    function getControl() {
        return element.find('ui-bb-dropdown-select');
    }

    function getDropdown() {
        return element.find('.dropdown-select');
    }

    /**
     * Get dropdown toggle button.
     */
    function getToggle() {
        return getDropdown().find('.btn-dropdown-toggle');
    }

    function getMenu() {
        return element.find('.dropdown-select > .dropdown-menu');
    }

    /**
     * Get rendered options elements.
     */
    function getOptions() {
        return getMenu().find('.dropdown-option');
    }

    function getNgModelController() {
        return getControl().controller('ngModel');
    }

    /**
     * @param params
     * @return {Object}
     */
    function getConfig(params) {
        Object.keys(params).forEach(key => {
            if (typeof params[key] === 'object' && params[key] !== null) {
                Object.defineProperty(params[key], 'toString', {
                    enumerable: false,
                    value() {
                        return Object.keys(this).map(k => `${k}="${this[k]}"`).join(' ');
                    }
                });
            }
        });
        return params;
    }

    // =========================================================================================

    beforeEach(angular.mock.module(uiBbDropdownSelect));

    beforeEach(angular.mock.inject(function($rootScope, $compile, $templateCache, $httpBackend) {
        scope = $rootScope.$new();
        compile = $compile;
        templateCache = $templateCache;
        httpBackend = $httpBackend;
    }));

    describe('rendering', function() {

        beforeEach(function() {
            scope.users = [{name: 'Thomas Mann', id: 1}, {name: 'Lizz Boom', id: 2}];
            config = getConfig({
                attrs: {
                    class: 'btn-lg',
                    placeholder: 'Select user account'
                }
            });
            element = createElement(config);
        });

        it('should render component', function() {
            expect(element.children().length).toBe(1);
            expect(getDropdown().length).toBe(1);
            expect(getMenu().length).toBe(1);
            expect(getToggle().length).toBe(1);
        });

        it('should render placeholder', function() {
            expect(getToggle().find('.placeholder').text()).toContain(config.attrs.placeholder);
        });

        it('should pass classes to inner dropdown button', function() {
            expect(getToggle().attr('class')).toContain(config.attrs.class);
        });

        it('should render dropdown closed initially', function() {
            expect(getDropdown().hasClass('open')).toBe(false);
        });

        it('should render dropdown options', function() {
            var options = getOptions();

            expect(options.length).toBe(scope.users.length);
            expect(options[0].textContent).toContain(scope.users[0].name);
        });
    });

    describe('behavior API attributes', function() {

        beforeEach(function() {
            scope.isOpen = false;
            config = getConfig({
                attrs: {
                    'is-open': 'isOpen',
                    'ng-disabled': 'isDisabled'
                }
            });
            element = createElement(config);
        });

        it('should open/close dropdown programmatically', function() {
            var dropdown = getDropdown();
            expect(dropdown.hasClass('open')).toBe(false);
            scope.isOpen = true;
            scope.$digest();
            expect(dropdown.hasClass('open')).toBe(true);
        });

        it('should enable/disable dropdown programmatically', function() {
            var uiBbDropdownSelect = getControl();
            expect(uiBbDropdownSelect.attr('disabled')).toBeUndefined();
            scope.isDisabled = true;
            scope.$digest();
            expect(uiBbDropdownSelect.attr('disabled')).toBe('disabled');
        });
    });

    describe('validation states', function() {

        beforeEach(function() {
            config = getConfig({
                attrs: {
                    required: 'required'
                }
            });
            scope.users = [{name: 'Thomas Mann', id: 1}, {name: 'Lizz Boom', id: 2}];
            element = createElement(config);
        });

        it('should render control invalid initially', function() {
            expect(getNgModelController().$valid).toBe(false);
        });

        it('should render invalid validation classes on the element initially', function() {
            var control = getControl();
            expect(control.hasClass('ng-invalid')).toBe(true);
            expect(control.hasClass('ng-invalid-required')).toBe(true);
        });

        it('should render control valid when something is selected', function() {

            var control = getControl();
            var options = getOptions();

            angular.element(options[0]).triggerHandler('click');
            scope.$digest();

            expect(scope.model).toBe(scope.users[0]);
            expect(getNgModelController().$valid).toBe(true);
            expect(control.hasClass('ng-invalid')).toBe(false);
            expect(control.hasClass('ng-invalid-required')).toBe(false);
        });

        it('should update validity when model changed from outside', function() {

            var control = getControl();

            scope.model = scope.users[0];
            scope.$digest();

            expect(getNgModelController().$valid).toBe(true);
            expect(control.hasClass('ng-invalid')).toBe(false);
            expect(control.hasClass('ng-invalid-required')).toBe(false);
        });
    });

    describe('changing selection', function() {

        beforeEach(function() {
            config = getConfig({
                dropdown: {
                    attrs: 'ng-repeat="user in users" option="user"',
                    template: '{{ $option.name }}'
                }
            });
            scope.users = [{name: 'Thomas Mann', id: 1}, {name: 'Lizz Boom', id: 2}];
            element = createElement(config);
        });

        it('should render placeholder when the model is not set', function() {
            expect(scope.model).toBeUndefined();
            expect(getDropdown().hasClass('selected')).toBe(false);
        });

        it('should render option when model changes', function() {
            scope.model = scope.users[1];
            scope.$digest();
            expect(getDropdown().hasClass('selected')).toBe(true);
        });
    });

    describe('option template configuration', function() {

        beforeEach(function() {
            config = getConfig({
                dropdown: {
                    attrs: 'ng-repeat="user in users" option="user" template-url="/templates/option.html"'
                }
            });
            scope.users = [{name: 'Thomas Mann', age: 30}, {name: 'Lizz Boom', id: 23}];

            httpBackend.expectGET('/templates/option.html').respond('<div>{{ $option.name.toUpperCase() }}</div>');
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
        });

        it('should fetch template for option', function() {
            createElement(config);
        });

        it('should use template from template-url to render options', function() {
            element = createElement(config);
            httpBackend.flush();
            expect(getOptions()[0].textContent).toBe(scope.users[0].name.toUpperCase());
        });
    });

    describe('selected option template configuration', function() {

        beforeEach(function() {
            scope.users = [{name: 'Thomas Mann', age: 30}, {name: 'Lizz Boom', id: 23}];
            scope.model = scope.users[0];
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
        });

        it('should use selected-as attribute', function() {

            element = createElement({
                attrs: `selected-as="$option.name.toUpperCase() + ', ' + $option.age"`
            });

            var expected = scope.model.name.toUpperCase() + ', ' + scope.model.age;
            expect(getToggle().find('.dropdown-selected').text()).toContain(expected);
        });

        it('should fetch template from template-url', function() {
            httpBackend.expectGET('/templates/selected-as.html').respond('<div>Template url: {{ $option.name }}</div>');
            element = createElement({
                attrs: 'template-url="/templates/selected-as.html"'
            });
            httpBackend.flush();
            expect(getToggle().find('.dropdown-selected').text()).toContain('Template url: Thomas Mann');
        });

        it('should use selected-as if both selected-as and template-url atributes are present', function() {

            element = createElement({
                attrs: 'selected-as="$option.name.toUpperCase()" template-url=""'
            });

            var expected = scope.model.name.toUpperCase();
            expect(getToggle().find('.dropdown-selected').text()).toContain(expected);
        });

        it('should throw if neither selected-as nor template-url atributes is present', function() {
            expect(() => createElement({attrs: ''})).toThrow();
        });

    });

    describe('changing of ng-model value outside of component', () => {
      beforeEach(function() {
        scope.users = [{name: 'Thomas Mann', age: 30}, {name: 'Lizz Boom', id: 23}];
        scope.model = scope.users[0];
      });

      it('should render value selected outside as selected', () => {
        element = createElement({
          attrs: 'selected-as="$option.name"'
        });

        scope.$apply(() => { scope.model = scope.users[0]; });
        expect(getToggle().find('.dropdown-selected').text()).toContain(scope.users[0].name);

        scope.$apply(() => { scope.model = scope.users[1]; });
        expect(getToggle().find('.dropdown-selected').text()).toContain(scope.users[1].name);
      });
    });
});
