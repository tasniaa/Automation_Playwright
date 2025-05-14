// tests/purchaseJourney.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Purchase Journey', async ({ page }) => {
  const email = 'rofis72500@neuraxo.com';
  const password = 'Learning1#';
  const productName = 'ADIDAS ORIGINAL';

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(email, password);

  console.log(await dashboardPage.getProductTitles());
  await dashboardPage.addProductToCart(productName);
  await dashboardPage.goToCart();

  await cartPage.verifyProductInCart(productName);
  await cartPage.proceedToCheckout();

  await checkoutPage.selectCountry('India');
  await checkoutPage.verifyEmail(email);
  await checkoutPage.applyCoupon('rahulshettyacademy');

  await page.pause(); // For debug only
  await checkoutPage.submitOrder();
});
