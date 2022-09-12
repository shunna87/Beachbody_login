const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const dataSet = require('../utils/placeorderTestData2.json');


test('@Case: Verify all type of users can login (free user, couch user, club user)', async ({page})=> 

{


   const loginPage = new LoginPage(page);
   // Verify free user can login and log out
   await loginPage.validLogin(dataSet.email_free, dataSet.password);
   // Verify coach user can log in and log out
   await loginPage.validLogin(dataSet.email_coach, dataSet.password);
   // Verify club user can login and log out
   await loginPage.validLogin(dataSet.email_club, dataSet.password);
   
        
   
});





