export const cartLocators = {
    cartItem: (productName: string) =>
        `.cart_item:has-text("${productName}")`,

    checkoutButton: '#checkout',
};