# @epiijs/eslint-config

## About
This package combines many eslint rules for `epiijs` styled codes as an extensible shared config.

`1.x` can only work with `eslint@9`.

These following recommended rules are enabled.
* by `eslint` 
* by `typescript-eslint`
* about code style by `epiijs`
* about `import`
* about `react` by `react` and `react-hooks` 

## Usage

1. Install this package and eslint as devDependencies.

```
npm install --save-dev @epiijs/eslint-config@latest eslint@latest
```

2. Install `ESLint` extension in your `VSCode`.

3. Create the eslint config file `eslint.config.mjs`.

```mjs
import config from '@epiijs/eslint-config';

export default [
  {
    ignores: [
      'YourIgnoredFiles'
    ]
  },
  ...config,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
];
```