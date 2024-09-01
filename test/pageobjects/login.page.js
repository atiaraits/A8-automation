import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get inputUsername () {
      
        return $('[placeholder="Your email"]')
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('button=Login');
    }
    
    async login (username, password) {
        
        await browser.pause(5000);
        
        // await this.inputUsername.waitForDisplayed();
        // (await this.inputUsername).waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        // await browser.pause(3000);
        await expect(browser).toHaveTitle('Profile | Acceler8 Training',{message :`Signin Not successful`});

    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
