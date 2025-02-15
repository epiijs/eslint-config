import pluginForReact from 'eslint-plugin-react';
import pluginForReactHooks from 'eslint-plugin-react-hooks';

/**
 * @link https://www.npmjs.com/package/eslint-plugin-react
 * @link https://www.npmjs.com/package/eslint-plugin-react-hooks
 */
export default [
  pluginForReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': pluginForReactHooks
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];