import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    // Variables
    readonly page:Page;
    readonly shearProduct: Locator;
    readonly expectTitlePage: RegExp;


    constructor(page:Page) {
        this.page = page;
        this.shearProduct = page.getByRole('link', {name: 'Get Startes'});
        this.expectTitlePage = /Playwright/
        
    }

    // Method
    async clickGetStarted(){
        await this.shearProduct.click();
    }

    async assertGetTitle(){
        await expect(this.page).toHaveTitle(this.expectTitlePage);
    }
}

export default HomePage;