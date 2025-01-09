import { expect, Page } from "@playwright/test";
import BasePage from "./basePage";
import { CustomerData, existingCustomerData } from "../data/contactDetailsData";

export class EditContactPage extends BasePage{
    private readonly firstNameFld = this.page.locator('[id="firstName"]');
    private readonly lastNameFld = this.page.locator('[id="lastName"]');
    private readonly birthdateFld = this.page.locator('[id="birthdate"]');
    private readonly emailFld = this.page.locator('[id="email"]');
    private readonly phoneFld = this.page.locator('[id="phone"]');
    private readonly stAdress1Fld = this.page.locator('[id="street1"]');
    private readonly stAdress2Fld = this.page.locator('[id="street2"]');
    private readonly cityFld = this.page.locator('[id="city"]');
    private readonly stateFld = this.page.locator('[id="stateProvince"]');
    private readonly postcodeFld = this.page.locator('[id="postalCode"]');
    private readonly countryFld = this.page.locator('[id="country"]');
    private readonly submitBtn = this.page.locator('[id="submit"]');
    private readonly errorValidation = this.page.locator('[id="error"]')

    constructor (page:Page){super(page)}    
    
    public async load(){}
    
    public async visit(){}
    
    public async waitTillLoaded(): Promise<void> {
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('domcontentloaded')
    }

    public async editContact(contactData: CustomerData) {
        await this.waitTillLoaded()
        await this.firstNameFld.fill(existingCustomerData.firstName)
        await this.lastNameFld.fill(existingCustomerData.lastName)
        await this.birthdateFld.fill(contactData.birthdate);
        await this.emailFld.fill(contactData.email);
        await this.phoneFld.fill(contactData.phone);
        await this.stAdress1Fld.fill(contactData.street1);
        await this.stAdress2Fld.fill(contactData.street2);
        await this.cityFld.fill(contactData.city);
        await this.stateFld.fill(contactData.state);
        await this.postcodeFld.fill(contactData.postcode);
        await this.countryFld.fill(contactData.country);
        await this.submitBtn.click();
      }
    
      public async assertErrorMessage (errorMsg: string){
        await expect(this.errorValidation).toContainText(errorMsg)
      }

    }