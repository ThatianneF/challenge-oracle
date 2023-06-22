const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://apex.oracle.com/pls/apex/r/danmende/qa-application/home',
    supportFile: 'cypress/support/commands.js',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
  },
});
  
