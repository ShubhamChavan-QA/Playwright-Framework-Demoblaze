import {Page, Locator, expect} from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly cartLink: Locator;
    readonly prodctTitleInCart: Locator;

    constructor(page:Page){
        this.page = page;
        this.cartLink = page.locator('#cartur');
        this.prodctTitleInCart = page.locator('tbody tr td:nth-child(2)');

    }
    async checkProductInCart(productName: string){
        await this.cartLink.click();
        await this.page.waitForSelector('tbody tr');
        //check text match
        await expect(this.prodctTitleInCart).toHaveText(productName);
    }
}