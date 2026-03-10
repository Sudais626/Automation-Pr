export class LoginPage{
    constructor(page){
        //Locators
        this.page = page;
        this.email = page.getByPlaceholder('Usernamae');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name: 'Login'});

    }

    // methods
    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(email, password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}