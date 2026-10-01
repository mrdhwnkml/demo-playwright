import { expect, Page } from '@playwright/test';
import { checkoutCompleteLocators } from '../locators/checkout-complete.locator';

export class CheckoutCompletePage {
    constructor(private readonly page: Page) { }

    async expectCheckoutCompleted() {
        await expect(
            this.page.locator(checkoutCompleteLocators.completeMessage)
        ).toHaveText('Thank you for your order!');
    }
}