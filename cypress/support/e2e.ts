import 'allure-cypress';
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
        return false;
    }
});

