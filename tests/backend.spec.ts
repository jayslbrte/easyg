import test from "@playwright/test";

test.only("api test",async ({ request }) => {
    const response = await request.post(`https://thinking-tester-contact-list.herokuapp.com/users/login`,
    {   
        data: {
                "email": "jodi@zmail.com",
                "password": "Test123"
            }
        })
        const gentoken = JSON.stringify(response.body)
        console.log(gentoken)
});





