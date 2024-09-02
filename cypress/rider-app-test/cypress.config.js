const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/rider-app-test/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportHeight: 700,
    viewportWidth: 1100
  },
});
