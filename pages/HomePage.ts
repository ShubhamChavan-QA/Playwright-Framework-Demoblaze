import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly productLink: Locator;
    readonly addToCartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // ❌ PURANA (Ambiguous - Confusing):
        // this.productLink = page.locator('text=Samsung galaxy s6');

        // ✅ NAYA (Exact - Best Practice):
        // Hum bol rahe hain: "Wo Link dhundo jiska naam Samsung galaxy s6 hai"
        this.productLink = page.getByRole('link', { name: 'Samsung galaxy s6', exact: true });
        
        this.addToCartBtn = page.getByRole('link', { name: 'Add to cart' });
    }

    async addProductToCart() {
        await this.productLink.click();
        
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await this.addToCartBtn.click();
    }
}