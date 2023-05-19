import { defineConfig } from "cypress";

import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      allureWriter(on, config);
      return config;
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
