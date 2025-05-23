import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage.js';
import { LoginPage} from '../pages/LoginPage.js';
import { PIMPage } from '../pages/PIMPage.js';
test('Extract employee information from PIM page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const pimPage = new PIMPage(page);

        // Login
        await loginPage.navigateToLoginPage();
        await expect(loginPage.Username).toBeVisible()
        await expect(loginPage.password).toBeVisible()
        console.log(loginPage.Username.textContent())
        await loginPage.login('Admin', 'admin123');
        
        // Navigate to PIM
        await dashboardPage.validateDashboardElements()
        await dashboardPage.gotoPIM()
        await expect(pimPage.table).toBeVisible()
        // Extract and validate employee information
        await pimPage.extractFirstFiveEmployees();
    });