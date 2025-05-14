// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.signIn = page.locator('#login');
  }

  async goto() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  async login(email, pwd) {
    await this.username.fill(email);
    await this.password.fill(pwd);
    await this.signIn.click();
    await this.page.waitForLoadState('networkidle');
  }
}
