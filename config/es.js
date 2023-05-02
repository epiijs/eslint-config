/**
 * @link https://eslint.org/docs/latest/rules/
 */
module.exports = {
  rules: {
    // ----- ----- ----- ----- ----- -----
    // Styles
    'brace-style': ['error', '1tbs',
      {
        allowSingleLine: true
      }
    ],

    // ----- ----- ----- ----- ----- -----
    // Security
    'curly': 'error',

    // ----- ----- ----- ----- ----- -----
    // Readability
    'block-spacing': ['error', 'always']
  }
};
