import pluginForImport from 'eslint-plugin-import';

/**
 * @link https://github.com/import-js/eslint-plugin-import
 */
export default [{
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],

  extends: [
    pluginForImport.flatConfigs.recommended,
    pluginForImport.flatConfigs.typescript
  ],

  settings: {
    // make plugin to resolve .js in esm .ts
    // require eslint-import-resolver-typescript
    'import/resolver': {
      typescript: true,
      node: true
    }
  },

  rules: {
    'import/order': ['error',
      {
        'newlines-between': 'always'
      }
    ]
  }
}];