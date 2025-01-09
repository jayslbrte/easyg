import { expect, Page } from "@playwright/test";
import { matchers } from "expect-playwright"
import BasePage from "./basePage";
import { CustomerData, happyPathCustomerData } from "../data/contactDetailsData";

export class ContactDetailsPage extends BasePage {
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

  private readonly editContactBtn = this.page.locator('[id="edit-contact"]');

  constructor(page: Page) {
    super(page);
  }

  public async load() {
    await this.page.goto("/contactDetails");
  }

  public async visit() {
    await this.load();
  }

  public async waitTillLoaded(): Promise<void> {
    await this.page.waitForLoadState("load");
    await this.page.waitForLoadState("domcontentloaded");
  }

  public async clickEditContact() {
    await this.editContactBtn.click();
  }

  public async assertUpdatedContactDetails(customerData: CustomerData) {
    await this.page.waitForTimeout(3000)
    await this.cityFld.waitFor({state:'visible'})
    const actualCity = await this.cityFld.textContent()
    const actualEmail = await this.emailFld.textContent()
    const actualPhone = await this.phoneFld.textContent()
    
     await expect(actualCity).toEqual(customerData.city)
     await expect(actualEmail).toEqual(customerData.email)
     await expect(actualPhone).toEqual(customerData.phone)

  }
}
