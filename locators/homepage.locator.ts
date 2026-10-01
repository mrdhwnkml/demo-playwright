export const homepageLocators = {
    product: (productName: string) =>
        `.inventory_item:has-text("${productName}")`,

    addToCartButton: (productName: string) =>
        `.inventory_item:has-text("${productName}") button`,

    cartButton: '.shopping_cart_link',
};