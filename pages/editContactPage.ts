import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";
import { CustomerData } from "../data/contactDetailsData";

export class EditContactPage extends BasePage{
    private readonly firstNameFld = this.page.locator('[id="firstName"]');
    private readonly lastNameFld = this.page.locator('[id="lastName"]');
    private readonly dateOfBirthFld = this.page.locator('[id="birthdate"]');
    private readonly emailFld = this.page.locator('[id="email"]');
    private readonly phoneFld = this.page.locator('[id="phone"]');
    private readonly stAdress1Fld = this.page.locator('[id="street1"]');
    private readonly stAdress2Fld = this.page.locator('[id="street2"]');
    private readonly cityFld = this.page.locator('[id="city"]');
    private readonly stateFld = this.page.locator('[id="stateProvince"]');
    private readonly postcodeFld = this.page.locator('[id="postalCode"]');
    private readonly country = this.page.locator('[id="country"]');
    private readonly submitBtn = this.page.locator('[id="submit"]');
    private readonly errorValidation = this.page.locator('[id="error"]')

    constructor (page:Page){super(page)}    
    
    public async load(){}
    
    public async visit(){}
    
    public async waitTillLoaded(): Promise<void> {
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('domcontentloaded')
    }

    public async editContact(customerInfo: CustomerData) {
        await this.waitTillLoaded()
        await this.firstNameFld.fill(customerInfo.firstname);
        await this.lastNameFld.fill(customerInfo.lastname);
        await this.dateOfBirthFld.fill(customerInfo.dateofBirth);
        await this.emailFld.fill(customerInfo.email);
        await this.phoneFld.fill(customerInfo.phone);
        await this.stAdress1Fld.fill(customerInfo.streetAdres1);
        await this.stAdress2Fld.fill(customerInfo.streetAdres2);
        await this.cityFld.fill(customerInfo.city);
        await this.stateFld.fill(customerInfo.state);
        await this.postcodeFld.fill(customerInfo.postcode);
        await this.country.fill(customerInfo.country);
        await this.submitBtn.click();
      }
    
      public async assertErrorMessage (errorMsg: string){
        await expect(this.errorValidation).toContainText(errorMsg)
      }

    }