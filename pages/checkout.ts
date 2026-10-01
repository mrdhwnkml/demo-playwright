import { expect, Page } from '@playwright/test';
import { checkoutLocators } from '../locators/checkout.locator';

export class CheckoutPage {
    constructor(private readonly page: Page) { }

    async fillCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.page
            .locator(checkoutLocators.firstNameInput)
            .fill(firstName);

        await this.page
            .locator(checkoutLocators.lastNameInput)
            .fill(lastName);

        await this.page
            .locator(checkoutLocators.postalCodeInput)
            .fill(postalCode);
    }

    async clickContinue() {
        await this.page
            .locator(checkoutLocators.continueButton)
            .click();
    }

    async clickFinish() {
        await this.page
            .locator(checkoutLocators.finishButton)
            .click();
    }

    async expectCheckoutCompleted() {
        await expect(
            this.page.locator(checkoutLocators.completeMessage)
        ).toHaveText('Thank you for your order!');
    }
}