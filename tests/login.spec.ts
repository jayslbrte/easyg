import test from "@playwright/test";
import { TestScope } from "../testscope";
import { happyPathCustomerData, InvalidbirthDateCustomerData, InvalidEmailCustomerData, InvalidPhoneCustomerData, InvalidpostalCodeCustomerData } from "../data/contactDetailsData";
import { ContactDetailsPage } from "../pages/contactDetailsPage";
import { ERROR_MESSAGES } from "../data/errorMessages";



test("Happy Path - login and access an existing contact , update and save", async ({ page }) => {
    // Arrange:
    const tester = new TestScope(page)
    const {login, contactList, contactDetails,editContact} = tester.Pages
    
    // Act:
    await login.visit()
    await login.loginNow('jodi@zmail.com', 'Test123')
    await contactList.selectContactfromTable(`${happyPathCustomerData.firstname} ${happyPathCustomerData.lastname}` )
    await contactDetails.clickEditContact()
    await editContact.editContact(happyPathCustomerData)
    
    // Assert:
    await contactDetails.assertNewContactDetails(happyPathCustomerData)
    
    
});

test("Attempt to update email with invalid data", async ({ page }) => {
    // Arrange:
    const tester = new TestScope(page)
    const {login, contactList, contactDetails,editContact} = tester.Pages
    const contactData = happyPathCustomerData
    // Act:
    await login.visit()
    await login.loginNow('jodi@zmail.com', 'Test123')
    await contactList.selectContactfromTable(`${happyPathCustomerData.firstname} ${happyPathCustomerData.lastname}` )
    await contactDetails.clickEditContact()
    await editContact.editContact(InvalidEmailCustomerData)

    // Assert:
    await editContact.assertErrorMessage(ERROR_MESSAGES.invalidEmail)
});

test("Attempt to update birthdate with invalid data", async ({ page }) => {
    // Arrange:
    const tester = new TestScope(page)
    const {login, contactList, contactDetails,editContact} = tester.Pages
    const contactData = happyPathCustomerData
    // Act:
    await login.visit()
    await login.loginNow('jodi@zmail.com', 'Test123')
    await contactList.selectContactfromTable(`${happyPathCustomerData.firstname} ${happyPathCustomerData.lastname}` )
    await contactDetails.clickEditContact()
    await editContact.editContact(InvalidbirthDateCustomerData)

    // Assert:
    await editContact.assertErrorMessage(ERROR_MESSAGES.invalidDOB)
    
});

test("Attempt to update postalCode with invalid data", async ({ page }) => {
    // Arrange:
    const tester = new TestScope(page)
    const {login, contactList, contactDetails,editContact} = tester.Pages
    const contactData = happyPathCustomerData
    // Act:
    await login.visit()
    await login.loginNow('jodi@zmail.com', 'Test123')
    await contactList.selectContactfromTable(`${happyPathCustomerData.firstname} ${happyPathCustomerData.lastname}` )
    await contactDetails.clickEditContact()
    await editContact.editContact(InvalidpostalCodeCustomerData)

    // Assert:
    await editContact.assertErrorMessage(ERROR_MESSAGES.invalidPostal)
    
});

test("Attempt to update phoneNumber with invalid data", async ({ page }) => {
    // Arrange:
    const tester = new TestScope(page)
    const {login, contactList, contactDetails,editContact} = tester.Pages
    const contactData = happyPathCustomerData
    // Act:
    await login.visit()
    await login.loginNow('jodi@zmail.com', 'Test123')
    await contactList.selectContactfromTable(`${happyPathCustomerData.firstname} ${happyPathCustomerData.lastname}` )
    await contactDetails.clickEditContact()
    await editContact.editContact(InvalidPhoneCustomerData)

    // Assert:
    await editContact.assertErrorMessage(ERROR_MESSAGES.invalidPhone)
});