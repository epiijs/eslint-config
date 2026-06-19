# Roadmap

## In Progress

- [x] Replace `eslint-plugin-import` with `eslint-plugin-simple-import-sort`

## Planned

- [ ] Upgrade to ESLint 10 (wait until October 2026, then re-evaluate)
  - Blocked: `eslint-plugin-react` does not support ESLint 10 yet (~80% done, blocked on `eslint-plugin-import` review)
  - `@eslint-react/eslint-plugin` (potential replacement) has high bus factor risk, not adopted by major projects (e.g. Expo)
  - If `eslint-plugin-react` ships ESLint 10 support before October: proceed with upgrade immediately
  - If not by October: drop `eslint-plugin-react`, upgrade to ESLint 10, rely on `eslint-plugin-react-hooks` only
  - Related upgrades when unblocked:
    - `@eslint/js` 9.x -> 10.x
    - `@stylistic/eslint-plugin` 3.x -> 5.x (done, compatible with ESLint 9)
    - `typescript-eslint` 8.x (already latest)
    - `eslint-plugin-react-hooks` 5.x -> 7.x (done, compatible with ESLint 9)
