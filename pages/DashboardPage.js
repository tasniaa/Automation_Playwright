import { expect } from '@playwright/test';
class DashboardPage {
    constructor (page)
        {
            this.page = page;
            this.dashboard = page.getByRole('link', { name: 'Dashboard' });
            this.pimMenu = page.getByRole('link', { name: 'PIM' });
            this.admin = page.getByRole('link', { name: 'Admin' });
            this.profileName = page.locator('.oxd-userdropdown-name');
            this.table = page.locator('.oxd-table');
        }
    
    async validateDashboardElements() 
    {
        await expect(this.dashboard).toBeVisible();
        await expect(this.pimMenu).toBeVisible();
        await expect(this.admin).toBeVisible();
        await expect(this.profileName).toBeVisible();
        
    }
    async gotoPIM()
    {
        await this.pimMenu.click();
        await this.page.waitForLoadState('load')
    }
}
module.exports = { DashboardPage };