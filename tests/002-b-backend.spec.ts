import test, { expect } from "@playwright/test";
import { happyPathCustomerData, InvalidEmailCustomerData } from "../data/contactDetailsData";

var token
var contactId

test.beforeAll(async ({ request  }) => {
    const tokeniser = await request.post(`https://thinking-tester-contact-list.herokuapp.com/users/login`,{   
        data: {
          email: "jodi@zmail.com",
          password: "Test123"
        }
     })
     var body = await tokeniser.json()     
     token = body.token
     
    // console.log(token)    
    return token
})


test("201 - POST - create a contact", async ({ request }) => {
    const response = await request.post(`https://thinking-tester-contact-list.herokuapp.com/contacts`,{
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            firstName: happyPathCustomerData.firstName,
            lastName: happyPathCustomerData.lastName,
            birthdate: happyPathCustomerData.birthdate,
            email: happyPathCustomerData.email,
            phone: happyPathCustomerData.phone,
            street1: happyPathCustomerData.street1,
            street2: happyPathCustomerData.street2,
            city: happyPathCustomerData.city,
            state: happyPathCustomerData.state,
            postcode: happyPathCustomerData.postcode,
            country: happyPathCustomerData.country
        }
    })
    expect(response.ok()).toBeTruthy()
    var body = await response.json()
    contactId = body._id
    return contactId
    
});

test('verify created contact using GET API', async ({ request }) => {
    const response = await request.get(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
        const body = await response.json();     
        expect(body._id).toEqual(contactId)
        
    
})

test("Error 400 - POST - create a contact", async ({ request }) => {
    const response = await request.post(`https://thinking-tester-contact-list.herokuapp.com/contacts`,{
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: {
            firstName: happyPathCustomerData.firstName,
            lastName: happyPathCustomerData.lastName,
            birthdate: happyPathCustomerData.birthdate,
            email: InvalidEmailCustomerData.email,
        }
    })
    var body = await response.json()
     expect(await response.status()).toEqual(400)
     expect(body.message).toEqual("Contact validation failed: email: Email is invalid")

    
});

test("Error 401 - POST - create a contact", async ({ request }) => {
    const response = await request.post(`https://thinking-tester-contact-list.herokuapp.com/contacts`,{
        headers: {
        },
        data: {
            firstName: happyPathCustomerData.firstName,
            lastName: happyPathCustomerData.lastName,

        }
    })
    var body = await response.json()
     expect(await response.status()).toEqual(401)
     expect(body.error).toEqual("Please authenticate.")

    
});

test("Error 404 - POST - create a contact", async ({ request }) => {
    const response = await request.post(`https://thinking-trash-contact-list.herokuapp.com/contacts`,{
        headers: {
        },
        data: {
            firstName: happyPathCustomerData.firstName,
            lastName: happyPathCustomerData.lastName,
        }
    })
     expect(await response.status()).toEqual(404)

    
});









