import {test, expect} from '@playwright/test'
 test ('Playwright Locator', async({page}) =>
{
      //1. Navigate to the login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const Username = page.getByPlaceholder('Username')
    const loginBtn = page.getByRole('button', {name: 'Login'})
    const password = page.getByPlaceholder('Password')
    const dashboard = page.getByRole('link', {name: 'Dashboard'})
    const pimMenu = page.getByRole('link', { name: 'PIM' });
    const admin = page.getByRole('link', {name: 'Admin'})
    const profileName = page.locator('.oxd-userdropdown-name')
 
    const table = page.locator('.oxd-table')
    //2. Use Explicit Waits for username and password fields
    await expect(Username).toBeVisible()
    await expect(password).toBeVisible()
    //3. Fill credentials and log in
    await Username.fill('Admin')
    await password.fill('admin123')
    await loginBtn.click()
    //4. Wait for dashboard to load and verify redirection
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //5. VValidate the presence and visibility of key elements on the dashboard:
    await expect(dashboard).toBeVisible()
    await expect(pimMenu).toBeVisible()
    await expect(admin).toBeVisible()
    await expect(profileName).toBeVisible()
    //6. Click on PIM menu
    await pimMenu.click()
    await page.pause()
    await page.waitForLoadState('load')
    await expect(table).toBeVisible()
    let statusFound = false;
    const names = []
    const rows = page.locator(".oxd-table [role='row']")
    for (let i=1 ; i< 6 ;i++)
    {
        const row = rows.nth(i)
        const name = await row.locator("[role='cell']").nth(2).textContent()
        const status = await row.locator("[role='cell']").nth(5).textContent()
        names.push(name?.trim())
        console.log(name)
        if (status?.trim() === "Full-Time Permanent")
        {
            statusFound = true;
            console.log("Status Found")
        }
    }
    //validation check for No extracted name is empty.
    const checkEmptyName = names.some(name => !name)
    if (checkEmptyName)
    {
    await table.screenshot({path : 'screenshots/validation_failed_status.png'})
  }
    // Validation: at least one status is "Full-Time Permanent"
  if (!statusFound) {
    await table.screenshot({ path: 'screenshots/validation_failed_status.png' });
    console.log('No employee with status "Full-Time Permanent" found.');
  }
  //7. Print employee name with status = Full-Time Permanent
  /*const rowCount = await rows.count();
    for (let i=1; i<rowCount; i++)
    {
        const row = rows.nth(i)
        const status = await row.locator("[role='cell']").nth(5).textContent()
        if (status?.trim() === 'Full-Time Permanent' )
        {
            const name = await row.locator("[role='cell']").nth(2).textContent()
            names.push(name?.trim())
            console.log(name)
        }
        //if want to print only 5 names
        if(names.length >= 5)
        {
            break;
        }
    }
*/
})

