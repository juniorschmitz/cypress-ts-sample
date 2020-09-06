# Cypress example

This repository showcases the basic setup of Cypress tests for Gitlab CI.

Check the article [Cypress: Setting up the first acceptance tests in Gitlab CI pipeline](https://medium.com/p/54b1c53f478b) for further information.

## What's included?

- Basic monorepo setup using yarn workspaces where Cypress tests are in separated package.
- Gitlab CI setup with dependency caching, eslint check and Cypress tests.
- An example Cypress test that uses `@testing-library/cypress` library and `data-test` attributes as selectors.
- Possible workaround when Cypress tests fail in Gitlab CI because of `/dev/shm` size   

## Up & running

```
yarn install
CYPRESS_BASE_URL="https://kiwi.com" yarn workspace cypress cypress open
```
