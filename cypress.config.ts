import { defineConfig } from 'cypress';
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
    e2e: {
        baseUrl: 'https://opensource-demo.orangehrmlive.com',
        viewportWidth: 1280,
        viewportHeight: 720,
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        video: true,
        pageLoadTimeout: 120000,
        defaultCommandTimeout: 15000,
        setupNodeEvents(on, config) {
            allureCypress(on, config, {
                resultsDir: "allure-results",
            });
            return config;
        },
    },
});
