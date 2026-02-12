import * as allure from "allure-cypress";
import LoginPage from '../support/pages/LoginPage';
import DashboardPage from '../support/pages/DashboardPage';

describe('Authentication Module', () => {
    let authData: any;

    before(() => {
        cy.fixture('authData').then((data) => {
            authData = data;
        });
    });

    beforeEach(() => {
        allure.epic('Authentication Module');
        LoginPage.visit();
    });

    context('Feature: Login', () => {
        beforeEach(() => {
            allure.feature('Login');
        });

        it('should login successfully with valid credentials', () => {
            allure.story('Valid Login');
            allure.severity('blocker');

            LoginPage.login(authData.validUser.username, authData.validUser.password);
            DashboardPage.verifyDashboardUrl();
        });

        it('should show error with invalid username', () => {
            allure.story('Invalid Login');
            allure.severity('critical');

            LoginPage.login(authData.invalidUser.username, authData.validUser.password);
            LoginPage.getErrorMessage().should('contain.text', authData.messages.invalidCredentials);
        });

        it('should show error with invalid password', () => {
            allure.story('Invalid Login');
            allure.severity('critical');

            LoginPage.login(authData.validUser.username, authData.invalidUser.password);
            LoginPage.getErrorMessage().should('contain.text', authData.messages.invalidCredentials);
        });

        it('should show required validation for empty fields', () => {
            allure.story('Invalid Login');
            allure.severity('normal');

            LoginPage.clickLogin();
            LoginPage.getInputErrorMessage().should('contain.text', authData.messages.required);
        });
    });
});
