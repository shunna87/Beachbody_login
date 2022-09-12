const {expect} = require('@playwright/test');
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData2.json')));


class LoginPage {

constructor(page)
{
    this.page = page;
    this.userName = page.locator("#capture_signIn_signInEmailAddress");
    this.password = page.locator("#capture_signIn_currentPassword");
    this.loginBtn = page.locator("div[class*='topNavAccountStyled__MenuOptions'] div a");
    this.signInBtn = page.locator("form[class*='capture_form capture_signInForm'] div[class*='form-action-buttons'] button[class*='sign-in-button']");
    this.enter = page.keyboard.press('Enter');
    this.userProfile = page.locator("button[class*='userAvatarStyled__AvatarButton']");
    this.logOutBtn =  page.locator("span[class*='desktopNavStyled__ItemText-sc-1lvzjju-3 desktopNavStyled__ItemLinkText-sc-1lvzjju-4 kIUfe duoYWU']");
  

}


async validLogin(username, password)
{  
    // Visit home page
    await this.page.goto(dataSet.homePage);
    // Visit login page
    await this.loginBtn.click();
    // log in with the given account
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInBtn.click();
    // Verify user profile icon is visible
    await this.userProfile.waitFor({ state: 'visible', timeout: 20000});
    // Verify user can logout 
    await this.userProfile.click();
    await this.logOutBtn.click();
    await this.loginBtn.waitFor({ state: 'visible', timeout: 20000});

       
     
}




}



module.exports = {LoginPage};