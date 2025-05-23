class LoginPage {
    constructor(page) {
        this.page = page;
        this.Username = page.getByPlaceholder('Username');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.password = page.getByPlaceholder('Password');
        this.dashboard = page.getByRole('link', { name: 'Dashboard' });
        this.pimMenu = page.getByRole('link', { name: 'PIM' });
        this.admin = page.getByRole('link', { name: 'Admin' });
        this.profileName = page.locator('.oxd-userdropdown-name');
        this.table = page.locator('.oxd-table');
    }
    async navigateToLoginPage() {
        
        await this.page.goto("URL_ADDRESSource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username, password) {
        await this.Username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();    
    }
    
}