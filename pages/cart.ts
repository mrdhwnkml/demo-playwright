import { expect, Page } from '@playwright/test';
import { cartLocators } from '../locators/cart.locator';

export class CartPage {
    constructor(private readonly page: Page) { }

    async expectProductInCart(productName: string) {
        await expect(
            this.page.locator(cartLocators.cartItem(productName))
        ).toBeVisible();
    }

    async clickCheckout() {
        await this.page
            .locator(cartLocators.checkoutButton)
            .click();
    }
}