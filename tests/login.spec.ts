import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { users } from '../fixtures/data.login';

test.describe('Login', () => {

  test('standard user can login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    // Assert
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('locked user cannot login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.lockedOut.username,
      users.lockedOut.password
    );

    // Assert
    await loginPage.expectLoginError('Epic sadface: Sorry, this user has been locked out.')
  });

});