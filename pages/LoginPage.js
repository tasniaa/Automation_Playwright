export class LoginPage {
    constructor(page) {
        this.page = page;
        this.Username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }
    async navigateToLoginPage() {
        
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username, password) {
        await this.Username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();    
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
    
}