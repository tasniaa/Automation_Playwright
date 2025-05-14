// pages/CheckoutPage.js
const { expect } = require('@playwright/test');
exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.countryField = page.locator("[placeholder*='Country']");
    this.dropdown = page.locator('.ta-results');
    this.emailDisplay = page.locator(".user__name [type='text']").first();
    this.couponField = page.locator("[name='coupon']");
    this.submitBtn = page.locator(".row [type='submit']");
    this.placeOrder = page.locator('text=Place Order ');
  }

  async selectCountry(country) {
    await this.countryField.pressSequentially(country.substring(0, 3));
    await this.dropdown.waitFor();
    const options = this.dropdown.locator('button');
    const count = await options.count();

    for (let i = 0; i < count; i++) {
      const text = await options.nth(i).textContent();
      if (text.trim() === country) {
        await options.nth(i).click();
        break;
      }
    }
  }

  async verifyEmail(expectedEmail) {
    await expect(this.emailDisplay).toHaveText(expectedEmail);
  }

  async applyCoupon(code) {
    await this.couponField.fill(code);
  }

  async submitOrder() {
    await this.submitBtn.click();
    await this.placeOrder.click();
  }
};
