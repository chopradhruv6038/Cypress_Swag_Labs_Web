const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  projectId: 'vwubsx',
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 12000,
  e2e: {
    setupNodeEvents(on, config) {
     // require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
