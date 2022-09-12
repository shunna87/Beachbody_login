const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const dataSet = require('../utils/placeorderTestData2.json');


test('@Case: Verify all type of users can login (free user, couch user, club user)', async ({page})=> 

{


   const loginPage = new LoginPage(page);
   // Visit Login page
   await loginPage.goTo();
   // Verify free user can login
   await loginPage.userName.type(dataSet.email1);
   await loginPage.password.type(dataSet.password);
   await page.keyboard.press('Enter');
   await loginPage.userProfile.waitFor({state: "visible", timeout: 20000});
   // Verify free user can log out
   await loginPage.userProfile.click();
   await loginPage.logOutBtn.click();
   await loginPage.loginBtn.waitFor({state: "visible", timeout: 200000});
   // Verify coach user can login
   await loginPage.loginBtn.click();
   await loginPage.userName.type(dataSet.email2);
   await loginPage.password.type(dataSet.password);
   await page.keyboard.press('Enter');
   await loginPage.userProfile.waitFor({state: "visible", timeout: 20000});
   // Verify coach user can log out
   await loginPage.userProfile.click();
   await loginPage.logOutBtn.click();
   await loginPage.loginBtn.waitFor({state: "visible", timeout: 200000});
   // Verify club user can login
   await loginPage.loginBtn.click();
   await loginPage.userName.type(dataSet.email3);
   await loginPage.password.type(dataSet.password);
   await page.keyboard.press('Enter');
   await loginPage.userProfile.waitFor({state: "visible", timeout: 20000});
   // Verify club user can log out
   await loginPage.userProfile.click();
   await loginPage.logOutBtn.click();
   await loginPage.loginBtn.waitFor({state: "visible", timeout: 200000});
   
 
     
   
});





