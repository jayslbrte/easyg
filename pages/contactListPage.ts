import { Page } from "@playwright/test";
import BasePage from "./basePage";

export class ContactListPage extends BasePage{

    private readonly contactTable = this.page.locator('[id="myTable"]')
    
    constructor (page:Page){super(page)}    
    
    public async load(){
        await this.page.goto('/contactList')
    }
    
    public async visit(){
        await this.load()
    }
    
    public async waitTillLoaded(): Promise<void> {
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('domcontentloaded')
    }

    public async selectContactfromTable( name : string ){
        await this.waitTillLoaded()
        const targetRow = await this.contactTable.locator('tr', {hasText: name})
        await targetRow.click({force:true})
        
    }
    
    }