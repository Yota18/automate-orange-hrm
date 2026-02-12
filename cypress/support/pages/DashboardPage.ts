/**
 * Page Object for Dashboard Page.
 * Handles interactions and validations on the Dashboard after login.
 */
class DashboardPage {
    // Selectors
    private userDropdown = '.oxd-userdropdown-tab';
    private logoutLink = 'a[href="/web/index.php/auth/logout"]';
    private dashboardUrl = '/web/index.php/dashboard/index';

    /**
     * Verifies that the URL contains the dashboard path.
     */
    verifyDashboardUrl() {
        cy.url().should('include', this.dashboardUrl);
    }

    /**
     * Clicks on the user dropdown menu.
     */
    clickUserDropdown() {
        cy.get(this.userDropdown).click();
    }

    /**
     * Clicks the Logout link in the dropdown.
     */
    clickLogout() {
        this.clickUserDropdown();
        cy.get(this.logoutLink).click();
    }
}

export default new DashboardPage();
