import { Page, Locator } from '@playwright/test';

export class LoginPage {
    //Variable store here
    readonly page: Page;
    readonly loginLink: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    //Constractor (if page load then it will search elements)
    constructor(page: Page) {
        this.page = page;
        // Demoblaze website ke elements ke 'address' (Locators)
        this.loginLink = page.locator('#login2');
        this.userNameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator('button[onclick="logIn()"]');

    }
    //Actions
    async goto(){
        //Open website
        await this.page.goto('https://www.demoblaze.com/');
    }
    async login(user:string, password:string){
        //perform steps
        await this.loginLink.click();
        await this.userNameInput.fill('ShubhamChavan');
        await this.passwordInput.fill('Shubham@1');
        await this.loginButton.click();


    }


}