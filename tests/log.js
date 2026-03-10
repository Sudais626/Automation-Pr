export class LogInPage {
    constructor(page){
        this.page = page;
        this.email = page.locator('#username');
        this.password = page.locator('#password');
        this.logInBtn = page.getByRole('button', {name: 'Sign In'});
        
    }

    //methods/Fncs
    async goto(){
        await this.page.goto('https://customer-portal-qa.aws.sunwebportal.com/auth/login');
    }

    async login(email, password){
       await this.email.fill(email);
       await this.password.fill(password);
       await this.logInBtn.click();
    }
    async textwait(){
       await this.page.waitForSelector('.badge.badge-orange')
        
    }
}