import { $ } from '@wdio/globals'
import Page from './page.js';

class SignupPage extends Page {

    get inputEmail () {
        return $('#email');
    }
    get inputUsername () {
        return $('#username');
    }
    get inputPhone () {
        return $('#phone');
    }
    get inputPassword () {
        return $('#password');
    }
    get inputPasswordConfirmation () {
        return $('#password_confirmation');
    }
    get btnSubmit () {
        return $('button[type="submit"]');
    }


    
    async signup (email,username,phone,password,passwordCon) {
        
        // await browser.pause(5000);
        await browser.pause(5000); 
        await this.inputEmail.setValue(email);
        await this.btnSubmit.click();
        
        await browser.pause(5000); 
      
        await this.inputUsername.setValue(username);
        await this.inputPhone.setValue(phone);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(passwordCon);
        await this.btnSubmit.click();
        await browser.pause(5000); 

    }

    open () {
        return super.open('signup');
    }
}

export default new SignupPage();
