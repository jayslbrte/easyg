import { Page } from "@playwright/test";
import BasePage from "./basePage";

export class LoginPage extends BasePage{

    //components definition
    private readonly usernameFld = this.page.locator('[id="email"]')
    private readonly passwordFld = this.page.locator('[id="password"]')
    private readonly submitBtn = this.page.locator('[id="submit"]')    
    
    
    //base page abstract functions

    public async visit(){
        await this.load()
    }
    
    public async load(){
        await this.page.goto('/')
    }
    
    public async waitTillLoaded(): Promise<void> {
        
    }
    
    //page specific functions

    public async loginNow(username: string, password: string){
        await this.page.waitForLoadState('load')
        await this.usernameFld.fill(username)
        await this.passwordFld.fill(password)
        await this.submitBtn.click()
    }
    
    }