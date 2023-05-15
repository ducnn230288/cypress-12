import { defineConfig } from "cypress";

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
      };
      // implement node event listeners here
      on("file:preprocessor", cucumber(options));
      allureWriter(on, config);
    },
    baseUrl: "https://crypttotrade.dev/login/",
    defaultCommandTimeout: 30000,
    specPattern: "cypress/e2e/**/*.feature",
  },
  env: {
    allureResultsPath: 'cypress/reports/allure-results',
    allure: true,
  },

    
});
