# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> Checkout >> user can login and complete checkout
- Location: tests\checkout.spec.ts:10:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'firstNameInput')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - button "Cart, 1 items" [ref=e13]:
          - generic [ref=e14]: "1"
      - generic [ref=e16]: "Checkout: Your Information"
    - main [ref=e17]:
      - form "Checkout information" [ref=e19]:
        - generic [ref=e20]:
          - textbox "First Name" [ref=e22]
          - textbox "Last Name" [ref=e24]
          - textbox "Zip/Postal Code" [ref=e26]
        - generic [ref=e28]:
          - button "Cancel" [ref=e29] [cursor=pointer]
          - button "Continue" [ref=e30] [cursor=pointer]
  - contentinfo [ref=e31]:
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "X" [ref=e34] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e35]:
        - link "Facebook" [ref=e36] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e37]:
        - link "LinkedIn" [ref=e38] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e39]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | import { checkoutLocators } from '../locators/checkout.locator';
  3  | 
  4  | export class CheckoutPage {
  5  |     constructor(private readonly page: Page) { }
  6  | 
  7  |     async fillCustomerInformation(
  8  |         firstName: string,
  9  |         lastName: string,
  10 |         postalCode: string
  11 |     ) {
  12 |         await this.page
> 13 |             .locator(checkoutLocators.firstNameInput)
     |                                       ^ TypeError: Cannot read properties of undefined (reading 'firstNameInput')
  14 |             .fill(firstName);
  15 | 
  16 |         await this.page
  17 |             .locator(checkoutLocators.lastNameInput)
  18 |             .fill(lastName);
  19 | 
  20 |         await this.page
  21 |             .locator(checkoutLocators.postalCodeInput)
  22 |             .fill(postalCode);
  23 |     }
  24 | 
  25 |     async clickContinue() {
  26 |         await this.page
  27 |             .locator(checkoutLocators.continueButton)
  28 |             .click();
  29 |     }
  30 | 
  31 |     async clickFinish() {
  32 |         await this.page
  33 |             .locator(checkoutLocators.finishButton)
  34 |             .click();
  35 |     }
  36 | 
  37 |     async expectCheckoutCompleted() {
  38 |         await expect(
  39 |             this.page.locator(checkoutLocators.completeMessage)
  40 |         ).toHaveText('Thank you for your order!');
  41 |     }
  42 | }
```