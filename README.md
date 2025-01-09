# EASYGO QE TECH EXAM - Jayson Labarrete

This is my answer to the Tech Exam . I have chosen Playwright Framework to answer the UI and the API questions.For more information about the framework please visit <https://playwright.dev/docs/writing-tests>


## How to run the tests
- 1 )pull the latest main
- 2 )node --version  (make sure that your node  version is >= 18.0)
- 3 )yarn --version (see intructions to install yarn here https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- 4 ) yarn install
- 5 ) yarn easygo:runalltest


## Test Website Used

 - UI https://thinking-tester-contact-list.herokuapp.com/
 - API Documentation: https://documenter.getpostman.com/view/4012288/TzK2bEa8
 - Happy Path UI Test - I used an existing record ("jerome fendergast")in the UI,  updated its contact details and saved changes. Then, verified the changes in the contact details page.
 - I also covered Negative paths in the UI

 - Happy Path API Test - I obtain an auth token to create a new contact and then verify that it is successfully created using GET endpoint.

 - I also covered Negative paths in the POST API


