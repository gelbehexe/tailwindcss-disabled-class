const plugin = require('tailwindcss/plugin')

// noinspection JSUnresolvedFunction
module.exports = plugin.withOptions(
    ({} = {}) => {
        return function ({ addVariant, addBase }) {
            const _postcssSelectorParser = _interopRequireDefault(require("postcss-selector-parser"));

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


            const groupPseudoClassVariant = function(pseudoClass) {
                return ({ modifySelectors, separator }) => {
                    return modifySelectors(({ selector }) => {
                        return _postcssSelectorParser.default(selectors => {
                            const clonedSelectors = selectors.clone();
                            const clonedSelectors2 = selectors.clone();
                            [selectors, clonedSelectors, clonedSelectors2].forEach((sel, i) => {
                                sel.walkClasses(classNode => {
                                    classNode.value = `${pseudoClass}${separator}${classNode.value}`;
                                    if (i === 0) {
                                        classNode.parent.insertAfter(classNode, _postcssSelectorParser.default.pseudo({
                                            value: `:${pseudoClass}`
                                        }))
                                    } else if (i === 2) {
                                        classNode.parent.insertBefore(classNode, _postcssSelectorParser.default.pseudo({
                                            value: `.${pseudoClass}`
                                        }))
                                    } else {
                                        classNode.parent.insertBefore(classNode, _postcssSelectorParser.default.pseudo({
                                            value: `.${pseudoClass} `
                                        }))
                                    }
                                });
                            })
                            selectors.append(clonedSelectors);
                            selectors.append(clonedSelectors2);
                        }).processSync(selector);
                    });
                };
            };

            addVariant('disabled', groupPseudoClassVariant('disabled'), {separator: '.'});

            addBase({
                '[disabled], .disabled, [disabled] *, .disabled *': {
                    'pointer-events': 'none',
                    'user-focus': 'none',
                }
            })
        }
    })
