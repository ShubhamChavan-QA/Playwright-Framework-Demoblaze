import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('My first test', async ({ page }) => {
    //Create new instance for page object
    const loginPage = new LoginPage(page);
    //Open website
    await loginPage.goto();
    //Perform Login option 
    await loginPage.login('ShubhamChavan', 'Shubham@1');
    //Check logout button visible?
    const logoutButton = page.locator('#logout2');
    //wait for sometime
    await expect(logoutButton).toBeVisible();



})