/**
 * Page Object for Login Page.
 * Handles interactions with the Login screen of OrangeHRM.
 */
class LoginPage {
    // Selectors
    private usernameInput = 'input[placeholder="Username"]';
    private passwordInput = 'input[placeholder="Password"]';
    private loginButton = 'button[type="submit"]';
    private errorMessage = '.oxd-alert-content-text';
    private inputError = '.oxd-input-group__message';

    /**
     * Visits the OrangeHRM login page.
     */
    visit() {
        cy.visit('/web/index.php/auth/login');
    }

    /**
     * Enters the username into the username field.
     * @param username - The username to enter.
     */
    enterUsername(username: string) {
        if (username) {
            cy.get(this.usernameInput).type(username);
        }
    }

    /**
     * Enters the password into the password field.
     * @param password - The password to enter.
     */
    enterPassword(password: string) {
        if (password) {
            cy.get(this.passwordInput).type(password);
        }
    }

    /**
     * Clicks the Login button.
     */
    clickLogin() {
        cy.get(this.loginButton).click();
    }

    /**
     * Performs the full login flow.
     * @param username - The username to use.
     * @param password - The password to use.
     */
    login(username: string, password: string) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    /**
     * Gets the error message displayed for invalid credentials.
     * @returns Cypress Chainable yielding the error element.
     */
    getErrorMessage() {
        return cy.get(this.errorMessage);
    }

    /**
     * Gets the validation error message under a specific input field.
     * @returns Cypress Chainable yielding the input error element.
     */
    getInputErrorMessage() {
        return cy.get(this.inputError);
    }
}

export default new LoginPage();
