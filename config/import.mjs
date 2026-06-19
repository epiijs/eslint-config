import pluginForSimpleImportSort from 'eslint-plugin-simple-import-sort';

/**
 * @link https://github.com/lydell/eslint-plugin-simple-import-sort
 */
export default [{
  plugins: {
    'simple-import-sort': pluginForSimpleImportSort
  },

  rules: {
    'simple-import-sort/imports': ['error', {
      groups: [
        // side effect imports
        ['^\\u0000'],
        // node builtins
        ['^node:'],
        // packages (third-party)
        ['^@?\\w'],
        // absolute paths
        ['^/'],
        // relative paths (parent)
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // relative paths (sibling/current)
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
      ]
    }],

    'simple-import-sort/exports': 'error'
  }
}];
