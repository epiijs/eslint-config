import pluginForStylistic from '@stylistic/eslint-plugin';

/**
 * @link https://eslint.style/packages/default
 */
export default [{
  plugins: {
    '@stylistic': pluginForStylistic
  },

  rules: {
    /**
     * @link https://eslint.style/rules/default/block-spacing
     */
    '@stylistic/block-spacing': ['error', 'always'],

    /**
     * @link https://eslint.style/rules/default/brace-style
     */
    '@stylistic/brace-style': ['error', '1tbs',
      {
        allowSingleLine: true
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/comma-dangle
     */
    '@stylistic/comma-dangle': ['error',
      {
        // js
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
        // ts
        enums: 'never',
        generics: 'never',
        tuples: 'never'
      }
    ],

    /**
     * @link https://eslint.style/rules/default/indent
     */
    '@stylistic/indent': ['error', 2,
      {
        SwitchCase: 1,
        MemberExpression: 2,
        FunctionDeclaration: {
          body: 1,
          parameters: 2
        },
        FunctionExpression: {
          body: 1,
          parameters: 2
        },
        CallExpression: {
          arguments: 2
        },
        ArrayExpression: 1
      }
    ],

    /**
     * @link https://eslint.style/rules/default/member-delimiter-style
     */
    '@stylistic/member-delimiter-style': ['error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],

    /**
     * @link https://eslint.style/rules/default/no-extra-parens
     */
    '@stylistic/no-extra-parens': ['error', 'all',
      {
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: true
      }
    ],

    /**
     * @link https://eslint.style/rules/default/semi
     */
    '@stylistic/semi': ['error', 'always'],

    /**
     * @link https://eslint.style/rules/default/space-before-function-paren
     */
    "@stylistic/space-before-function-paren": ['error',
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],

    /**
     * @link https://eslint.style/rules/default/space-before-blocks
     */
    '@stylistic/space-before-blocks': ['error', 'always'],

    /**
     * @link https://eslint.style/rules/default/space-infix-ops
     */
    '@stylistic/space-infix-ops': ['error'],

    /**
     * @link https://eslint.style/rules/default/type-annotation-spacing
     */
    '@stylistic/type-annotation-spacing': ['error'],
  }
}];
