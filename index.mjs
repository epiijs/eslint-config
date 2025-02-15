import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import customForES from './config/es.mjs';
import customForTS from './config/ts.mjs';
import customForStylisticAll from './config/stylistic.mjs';
import customForImport from './config/import.mjs';
import customForReact from './config/react.mjs';

// https://typescript-eslint.io/packages/typescript-eslint#config
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  customForES,
  customForTS,
  customForStylisticAll,
  customForImport,
  customForReact
);