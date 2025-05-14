// pages/DashboardPage.js
export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.card-body');
    this.cartIcon = page.locator("[routerlink*='cart']");
  }

  async getProductTitles() {
    return await this.page.locator('.card-body b').allTextContents();
  }

  async addProductToCart(productName) {
    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
      if (await this.products.nth(i).locator('b').textContent() === productName) {
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
