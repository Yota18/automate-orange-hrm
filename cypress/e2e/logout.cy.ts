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

    context('Feature: Logout', () => {
        beforeEach(() => {
            allure.feature('Logout');
        });

        it('should logout successfully', () => {
            allure.story('Logout Success');
            allure.severity('critical');

            // Precondition: Login first
            LoginPage.login(authData.validUser.username, authData.validUser.password);
            DashboardPage.verifyDashboardUrl();

            DashboardPage.clickLogout();
            cy.url().should('include', '/auth/login');
        });

        it('should redirect to login when accessing dashboard after logout', () => {
            allure.story('Session Security');
            allure.severity('blocker');

            // Precondition: Login and then Logout
            LoginPage.login(authData.validUser.username, authData.validUser.password);
            DashboardPage.clickLogout();

            // Verification: Ensure we are logged out first
            cy.location('pathname').should('include', '/auth/login');

            // Attempt to access dashboard
            cy.visit('/web/index.php/dashboard/index');

            // Verification: Should be redirected to login
            cy.url().should('include', '/auth/login');
        });
    });
});
