// pages/CartPage.js
import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartHeader = page.locator('.cf h1');
    this.firstItem = page.locator("div li").first();
    this.productLocator = name => page.locator(`h3:has-text("${name}")`);
    this.checkout = page.locator('text=Checkout');
  }

  async verifyProductInCart(productName) {
    await this.cartHeader.waitFor();
    await expect(this.cartHeader).toHaveText('My Cart');
    await this.firstItem.waitFor();
    const isVisible = await this.productLocator(productName).isVisible();
    expect(isVisible).toBeTruthy();
  }

  async proceedToCheckout() {
    await this.checkout.click();
  }
}
