const {expect} = require('@playwright/test');
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData2.json')));


class LoginPage {

constructor(page)
{
    this.page = page;
    
    this.userName = page.locator("#capture_signIn_signInEmailAddress");
    this.password = page.locator("#capture_signIn_currentPassword");
    this.loginBtn = page.locator("div[class*='topNavAccountStyled__MenuOptions'] div a");
    this.signInBtn = page.locator("sign-in-button");
    this.enter = page.keyboard.press('Enter');
    this.userProfile = page.locator("button[class*='userAvatarStyled__AvatarButton']");
    
    this.logOutBtn =  page.locator("span[class*='desktopNavStyled__ItemText-sc-1lvzjju-3 desktopNavStyled__ItemLinkText-sc-1lvzjju-4 kIUfe duoYWU']");
  

}

async goTo()
{
    await this.page.goto("https://stage.beachbodyondemand.com/groups-about?locale=en_US");
    
    await this.loginBtn.click();

            
    
}

async validLogin(username, password)
{
    await this.page.userName.fill(username);
    await this.page.userPass.fill(password);
    await this.enter;
     
     
}

async logOut()
{
    await this.page.userProfile.click();
    await this.page.logOut.click();
     
               
}

}



module.exports = {LoginPage};