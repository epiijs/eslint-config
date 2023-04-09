/**
 * @link https://typescript-eslint.io/rules
 */
module.exports = {
  rules: [
    // ----- ----- ----- ----- ----- -----

    /**
     * @link https://typescript-eslint.io/rules/indent
     */
    '@typescript-eslint/indent': ['error', 2,
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
     * @link https://typescript-eslint.io/rules/comma-dangle
     */
    '@typescript-eslint/comma-dangle': ['error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
        enums: 'never',
        generics: 'never',
        tuples: 'never'
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/space-before-blocks
     */
    '@typescript-eslint/space-before-blocks': ['error'],

    /**
     * @link https://typescript-eslint.io/rules/space-infix-ops
     */
    '@typescript-eslint/space-infix-ops': ['error'],

    /**
     * @link https://typescript-eslint.io/rules/member-delimiter-style
     */
    '@typescript-eslint/member-delimiter-style': ['error',
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
     * @link https://typescript-eslint.io/rules/naming-convention
     */
    '@typescript-eslint/naming-convention': ['error',
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'variable',
        format: ['strictCamelCase', 'StrictPascalCase']
      },
      {
        selector: 'parameter',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase']
      },
      {
        selector: 'enum',
        format: ['StrictPascalCase'],
        prefix: ['E']
      },
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
        prefix: ['I']
      },
      {
        selector: 'typeAlias',
        format: ['StrictPascalCase'],
        prefix: ['T']
      },
      {
        selector: 'enumMember',
        format: ['StrictPascalCase'],
      },
      {
        selector: ['variable', 'parameter'],
        modifiers: ['destructured'],
        format: null
      }
    ],

    // ----- ----- ----- ----- ----- -----

    /**
     * @link https://typescript-eslint.io/rules/no-shadow
     */
    '@typescript-eslint/no-shadow': ['error'],

    /**
     * @link https://typescript-eslint.io/rules/no-use-before-define
     */
    '@typescript-eslint/no-use-before-define': ['error',
      {
        ignoreTypeReferences: false
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/no-unused-vars
     */
    '@typescript-eslint/no-unused-vars': ['error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/no-extra-parens
     */
    '@typescript-eslint/no-extra-parens': ['error', 'all',
      {
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: true
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/explicit-member-accessibility
     */
    '@typescript-eslint/explicit-member-accessibility': ['error',
      {
        accessibility: 'no-public'
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/no-empty-interface
     */
    '@typescript-eslint/no-empty-interface': ['error',
      {
        allowSingleExtends: true
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/no-non-null-assertion
     */
    '@typescript-eslint/no-non-null-assertion': 'warn',

    /**
     * @link https://typescript-eslint.io/rules/no-unnecessary-condition
     */
    '@typescript-eslint/no-unnecessary-condition': 'warn',

    // ----- ----- ----- ----- ----- -----

    /**
     * @link https://typescript-eslint.io/rules/prefer-optional-chain
     */
    '@typescript-eslint/prefer-optional-chain': 'error',

    /**
     * @link https://typescript-eslint.io/rules/type-annotation-spacing
     */
    '@typescript-eslint/type-annotation-spacing': ['error'],

    /**
     * @link https://typescript-eslint.io/rules/explicit-function-return-type
     */
    '@typescript-eslint/explicit-function-return-type': ['warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ]
  ]
};
