import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('#login2');
        this.userNameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator('button[onclick="logIn()"]');
    }

    async goto() {
        const url = process.env.BASE_URL;
        // Ye check bilkul sahi hai. Agar Step 1 & 2 follow kiye toh ye pass ho jayega.
        if (!url) throw new Error("URL nahi mili! .env file check karo.");
        
        await this.page.goto(url);
    }

    async login(user: string, password: string) {
        await this.loginLink.click();
        
        // ✅ FIX: Hardcoded 'ShubhamChavan' hata kar 'user' variable lagaya
        await this.userNameInput.fill(user);
        
        // ✅ FIX: Hardcoded 'Shubham@1' hata kar 'password' variable lagaya
        await this.passwordInput.fill(password);
        
        await this.loginButton.click();
    }
}