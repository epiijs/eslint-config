/**
 * @link https://eslint.org/docs/latest/rules/
 */
export default [{
  rules: {
    /**
     * @link https://eslint.org/docs/latest/rules/curly
     */
    'curly': 'error',

    /**
     * @link https://eslint.org/docs/latest/rules/id-match
     *
     * Ban identifiers containing lazy abbreviations (e.g. btn → button, msg → message).
     * Detects lowercase abbreviation words at camelCase/snake_case word boundaries.
     */
    'id-match': ['error',
      '^(?!.*(?<=^|[a-z_])(arr|btn|cfg|cnt|ctx|des|err|evt|func|idx|len|mgr|msg|num|obj|pkg|req|res|ret|str|val|wnd)(?=[A-Z_]|$)).+$',
      {
        properties: false
      }
    ],
  }
}];
