import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Complete Shopping Flow Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    // 1. Data `.env` se nikaalo 🔐
    const username = process.env.USER_NAME;
    const password = process.env.PASSWORD;

    // 2. Safety Check (Agar data nahi mila, toh yahin rok do)
    if (!username || !password) {
        throw new Error("⚠️ .env file se Username/Password nahi mila! Variable names check karo.");
    }

    // 3. Login Flow
    await loginPage.goto();
    // Ab hum 'username' pass kar rahe hain jo undefined nahi ho sakta
    await loginPage.login(username, password);

    // 4. Shopping Flow
    await page.waitForTimeout(2000); 
    await homePage.addProductToCart();

    // 5. Cart Verification
    await cartPage.checkProductInCart('Samsung galaxy s6');
});