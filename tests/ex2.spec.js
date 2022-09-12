// const {test, expect} = require('@playwright/test');
// const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));


// test('@case1: Free user can log in', async ({browser})=>
// {
  
//      const context = await browser.newContext();
//      const page =  await context.newPage();
//      const loginPage = await page.locator("div[class*='topNavAccountStyled__MenuOptions'] div a");
//      const emailField= await page.locator('#capture_signIn_signInEmailAddress');
//      const signInBtn = await page.locator("button[class*='sign-in-button']");
//      const passField = await page.locator('#capture_signIn_currentPassword');
//      const userProfile = await page.locator("button[class*='userAvatarStyled__AvatarButton']");
//      const logOutBtn = await page.locator("span[class*='desktopNavStyled__ItemText-sc-1lvzjju-3 desktopNavStyled__ItemLinkText-sc-1lvzjju-4 kIUfe duoYWU']");
//      const forgotPass = await page.locator("a[class*='forgot-password-link aic-control aic-control-ready'] ");
    
          
   
//     await page.goto(dataSet.bodGroupsPage);
//     await loginPage.click();
//     await emailField.type(dataSet.email1, { delay : 50});
//     await passField.type(dataSet.password, { delay : 50});
//     //  await signInBtn.click();
//     await page.keyboard.press('Enter');
//     await userProfile.waitFor({state: "visible", timeout: 20000});
//     await userProfile.click();
//     await logOutBtn.click();
//     // console.log(await loginPage.isVisible());
//     await loginPage.waitFor({state: "visible", timeout: 20000});
//     await browser.close();


// });








   
   











