import { expect, Page } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';

export class LoginPage {
    constructor(private readonly page: Page) { }

    get usernameInput() {
        return this.page.locator(loginLocators.usernameInput);
    }

    get passwordInput() {
        return this.page.locator(loginLocators.passwordInput);
    }

    get loginButton() {
        return this.page.locator(loginLocators.loginButton);
    }

    get errorMessage() {
        return this.page.locator(loginLocators.errorMessage);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }



    async expectLoginError(message: string) {
        await expect(this.errorMessage).toContainText(message);
    }
}