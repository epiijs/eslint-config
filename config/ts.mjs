/**
 * @link https://typescript-eslint.io/rules
 */
export default [{
  rules: {
    /**
     * @link https://typescript-eslint.io/rules/explicit-function-return-type
     */
    '@typescript-eslint/explicit-function-return-type': ['warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
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
     * @link https://typescript-eslint.io/rules/naming-convention
     */
    '@typescript-eslint/naming-convention': ['warn',
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
        format: ['StrictPascalCase']
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

    /**
     * @link https://typescript-eslint.io/rules/no-empty-interface
     */
    '@typescript-eslint/no-empty-interface': ['warn',
      {
        allowSingleExtends: true
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/no-empty-object-type
     */
    '@typescript-eslint/no-empty-object-type': ['warn'],

    /**
     * @link https://typescript-eslint.io/rules/no-explicit-any
     */
    '@typescript-eslint/no-explicit-any': 'warn',

    /**
     * @link https://typescript-eslint.io/rules/no-floating-promises
     */
    '@typescript-eslint/no-floating-promises': 'warn',

    /**
     * @link https://typescript-eslint.io/rules/no-non-null-assertion
     */
    '@typescript-eslint/no-non-null-assertion': 'warn',

    /**
     * @link https://typescript-eslint.io/rules/no-shadow
     */
    '@typescript-eslint/no-shadow': ['error'],

    /**
     * @link https://typescript-eslint.io/rules/no-unnecessary-condition
     */
    '@typescript-eslint/no-unnecessary-condition': 'warn',

    /**
     * @link https://typescript-eslint.io/rules/no-unsafe-member-access
     */
    "@typescript-eslint/no-unsafe-member-access": "warn",

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
     * @link https://typescript-eslint.io/rules/no-use-before-define
     */
    '@typescript-eslint/no-use-before-define': ['error',
      {
        ignoreTypeReferences: false
      }
    ],

    /**
     * @link https://typescript-eslint.io/rules/prefer-optional-chain
     */
    '@typescript-eslint/prefer-optional-chain': 'error'
  }
}];
