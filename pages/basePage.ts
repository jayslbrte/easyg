import { Page } from "@playwright/test";

abstract class BasePage {
    protected readonly page: Page

    constructor(page:Page){
        this.page = page
    }

    public abstract load(): void;
    public abstract visit(): void;
    public abstract waitTillLoaded(): Promise<void>
    public async waitTillIdle(): Promise <void> {
        await this.page.waitForLoadState('load')
    }
}

export default BasePage