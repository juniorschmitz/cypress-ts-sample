/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  // If tests are failing in CI unexpectedly, it might be because of limited /dev/shm
  // see: https://stackoverflow.com/questions/56218242/headless-chromium-on-docker-fails
  // https://github.com/cypress-io/cypress/issues/350#issuecomment-574072211
  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.family === "chromium") {
      launchOptions.args.push("--disable-dev-shm-usage");
    }

    return launchOptions;
  });
};
