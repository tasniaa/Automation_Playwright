class PIMPage {
    constructor(page) {
        this.page = page;
        this.table = page.locator('.oxd-table')
        this.rows = page.locator(".oxd-table [role='row']")
    }
    async extractFirstFiveEmployees() {
        let statusFound = false;
        const names = []
        for (let i=1 ; i< 6 ;i++)
        {
            const row = this.rows.nth(i)
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
        // Validation checks
        const checkEmptyName = names.some(name => !name);
        if (checkEmptyName || !statusFound) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            await this.table.screenshot({ path: `screenshots/validation_failed_${timestamp}.png` });
            
            if (checkEmptyName) {
                console.log('One or more employee names are empty.');
            }
            if (!statusFound) {
                console.log('No employee with status "Full-Time Permanent" found.');
            }
        }
    }
}
module.exports = {PIMPage}