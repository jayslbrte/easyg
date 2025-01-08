import { Page } from "@playwright/test";
import { LoginPage} from "./loginPage"
import { ContactListPage } from "./contactListPage";
import { ContactDetailsPage } from "./contactDetailsPage";
import { EditContactPage } from "./editContactPage";

export class Pages{
    constructor (page:Page){
        this.login = new LoginPage(page)
        this.contactList = new ContactListPage(page)
        this.contactDetails = new ContactDetailsPage (page)
        this.editContact =  new EditContactPage(page)
    }

    login : LoginPage
    contactList : ContactListPage
    contactDetails : ContactDetailsPage
    editContact : EditContactPage
}