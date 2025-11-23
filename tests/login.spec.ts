import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Test via Env Variables', async ({ page }) => {
    
    // 1. Page Object ka naya instance banao
    const loginPage = new LoginPage(page);

    // 2. Website kholo (Ye ab .env se URL uthayega, humne Page Object mein fix kiya tha)
    await loginPage.goto();

    // 3. Credentials .env file se uthao (Tijori se nikaalo) 🔐
    // Hum '!' laga rahe hain taaki TypeScript ko yakeen dilayein ki ye value null nahi hai
    const username = process.env.USER_NAME!;
    const password = process.env.PASSWORD!;

    console.log(`Logging in with user: ${username}`); // Debugging ke liye (Optional)

    // 4. Login perform karo
    await loginPage.login(username, password);

    // 5. Check karo logout button visible hai ya nahi
    const logoutButton = page.locator('#logout2');
    await expect(logoutButton).toBeVisible();
});