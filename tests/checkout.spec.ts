// tests/checkout.spec.ts

import { test, expect } from '../fixtures/test.fixture';
import { homepageLocator } from '../pages/homepage';
import { CartPage } from '../pages/cart';
import { CheckoutPage } from '../pages/checkout';
import { CheckoutCompletePage } from '../pages/checkout-complete';
import { checkoutData } from '../fixtures/checkout-data';
import { checkoutProduct } from '../fixtures/checkout-product';

test.describe('Checkout', () => {

  test('User should be able to complete checkout', async ({ page }) => {

    // Page Objects
    const inventoryPage = new homepageLocator(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    // 1. Verify user is already logged in
    await expect(page).toHaveURL(/inventory.html/);

    // 2. Add product to cart
    await inventoryPage.addProductToCart(checkoutProduct.name);

    // 3. Open cart
    await inventoryPage.openCart();

    // 4. Verify product is in cart
    await cartPage.expectProductInCart(checkoutProduct.name);

    // 5. Proceed to checkout
    await cartPage.clickCheckout();

    // 6. Fill checkout information
    await checkoutPage.fillCustomerInformation(
      checkoutData.name,
      checkoutData.lastName,
      checkoutData.postalCode
    );

    // 7. Continue to checkout overview
    await checkoutPage.clickContinue();

    // 8. Finish order
    await checkoutPage.clickFinish();

    // 9. Verify order completed
    await checkoutCompletePage.expectCheckoutCompleted();
  });

});