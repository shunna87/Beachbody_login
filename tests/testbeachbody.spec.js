// Test with for cycle
//  const {test, expect} = require('@playwright/test');
// const { LoginPage } = require('../pageobjects/LoginPage');
// // const {test} = require('../utils/test-base');

// const dataSet = require('../utils/placeorderTestData.json');

// for(const data of dataSet)
// {

//    test(`@Web Verify login functionality for different user types ${data.email}`, async ({page})=>

//    {


//       const loginPage = new LoginPage(page);
//       await loginPage.goTo();

//       await loginPage.userName.type(data.email);
//       await loginPage.password.type(data.password);
//       await page.keyboard.press('Enter');
//       await loginPage.userProfile.waitFor({state: "visible", timeout: 20000});
//       await loginPage.userProfile.click();
//       await loginPage.logOutBtn.click();
//       await loginPage.loginBtn.waitFor({state: "visible", timeout: 200000});
      
   
      
      
//    });

// }

