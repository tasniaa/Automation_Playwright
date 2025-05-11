import { test, expect } from '@playwright/test';
test('Playwright Test 2 - Interact with Elements', async ({ page }) => {
  const Firstname = page.locator("[name='firstname']")
  const surname = page.locator("[name='lastname']")
  const birthDate = page.locator("select[name='birthday_day']")
  const birthMonth = page.locator("select[name='birthday_month']")
  const birthYear = page.locator("select[name='birthday_year']")
  const gender = page.locator("input[value='2']")
  const email = page.locator("[name='reg_email__']")
  const newPassword = page.locator("[name='reg_passwd__']")
  const signIn = await page.locator("[name='websubmit']")
  await page.goto("https://www.facebook.com/")
  await page.click('a.selected._51sy')
  await Firstname.fill('Tester')
  await surname.fill('BD')
  await birthDate.selectOption('29')
  await birthMonth.selectOption('6')
  await birthYear.selectOption('1990')
  await gender.click()
  await email.fill('rofis72500@neuraxo.com')
  await newPassword.fill('Nwtest@123')
  await signIn.click()
  await page.waitForLoadState('domcontentloaded')
  console.log(await page.locator('#reg_error_inner').textContent())
  //await page.pause();
  });

