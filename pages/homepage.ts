import { Page } from '@playwright/test';
import { homepageLocators } from '../locators/homepage.locator';

export class homepageLocator {
    constructor(private readonly page: Page) { }

    async addProductToCart(productName: string) {
        await this.page
            .locator(homepageLocators.product(productName))
            .getByRole('button', { name: /add to cart/i })
            .click();
    }

    async openCart() {
        await this.page
            .locator(homepageLocators.cartButton)
            .click();
    }
}