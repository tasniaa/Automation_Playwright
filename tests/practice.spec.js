import { test, expect } from '@playwright/test';

test('Playwright Test 1 - Interact with Elements', async ({ page }) => {
  const username = await page.locator('#username')
  const password = await page.locator("[name='password']")
  const usertype = await page.locator("input[id='usertype']")
  const user = await page.locator("select[class='form-control']")
  //const signIn = await page.locator("[name='signin']")
  const signIn = await page.locator("[type='submit']")
  const errorMessage = await page.locator("[style*='block']")
  const loginPageSubtitle = await page.locator('.card-body')
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
 // await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
  await username.fill('rahulshettyacademy')
  await password.fill('learning')
  await usertype.nth(1).click()
  await page.waitForSelector("#okayBtn")
  await page.click("#okayBtn")
  await user.selectOption('Consultant')
  await page.click("[type='checkbox']")
  await signIn.click()
  await page.pause();
});
