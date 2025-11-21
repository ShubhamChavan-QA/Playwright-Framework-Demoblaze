import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Complete shopping test', async({page})=>{
    //Create object for all pages
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartpage = new CartPage(page);

    //Login setup
    await loginPage.goto();
    await loginPage.login('ShubhamChavan', 'Shubham@1')

    //Product add to cart
    await page.waitForTimeout(2000);
    await homePage.addProductToCart();

    //verify added cart product
    await cartpage.checkProductInCart('Samsung galaxy s6');

})
