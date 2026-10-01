import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { users } from '../fixtures/data.login';

export const test = base.extend({
    page: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        // Open login page
        await loginPage.goto();

        // Login automatically before every test
        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        // Make authenticated page available to the test
        await use(page);
    },
});

export { expect };