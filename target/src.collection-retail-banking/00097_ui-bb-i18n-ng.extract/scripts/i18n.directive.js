const dataAttributePrefix = 'i18n-data-';

const dataAttributes = (attrs) => Object.keys(attrs)
        .map(attributeName => attrs[attributeName])
        .filter(attributeName => attributeName.startsWith(dataAttributePrefix));

const withoutPrefix = attribute =>
        attribute.slice(dataAttributePrefix.length);

const dataFromDataAttributes = (attrs, scopeEval) => dataAttributes(attrs.$attr)
        .reduce((acc, attributeName) => {
          const dataKey = attrs.$normalize(withoutPrefix(attributeName));
          const passedValue = scopeEval(attrs[attrs.$normalize(attributeName)]);
          return Object.assign({}, acc, {
            [dataKey]: passedValue,
          });
        }, {});

const dataFromDataAttribute = (attrs, scopeEval) =>
        scopeEval(attrs.i18nData);

const extractData = (attrs, scopeEval) =>
        Object.assign(
          {},
          dataFromDataAttribute(attrs, scopeEval),
          dataFromDataAttributes(attrs, scopeEval)
        );

export default (format, translate) => ({
  restrict: 'A',
  link: (scope, element, attrs) => {
    const key = attrs.i18nKey;
    const data = extractData(attrs, (expr) => scope.$eval(expr));
    const localized = key ? format(translate(key), data) : '';

    element.html(localized);
  },
});
