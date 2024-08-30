import { assert } from 'chai';
import { $ } from '@wdio/globals';
import Page from './page.js';

class FaqPage extends Page {

    get userName () {
        return $('[placeholder="Enter your Name"]')
    }
    get userEmail () {
        return $('[placeholder="Enter your email address"]')
    }
    get userQuestion () {
        return $('[placeholder="Please write your question"]')
    }
    get btnSubmit () {
        return $('button=Submit')
    }
    get toastMessage () {
        return $('.Vue-Toastification__toast-body')
    }


    
    async formSubmit (name,email,question) {

        await browser.pause (2000);

        await this.userName.scrollIntoView();
        await this.userName.setValue(name);
        await this.userEmail.setValue(email);
        await this.userQuestion.setValue(question);
        await this.btnSubmit.click();

        await browser.pause (2000);

        const toastMessageTest = await this.toastMessage.getText();
        const expectedMessage = 'Thanks for your Question';

        if (toastMessageTest === expectedMessage ){
            console.log ("Questoin submission successfull")
        }else {
            console.log ("Questoin submission not successfull")
        }

        console.log('The toast message is:', toastMessageTest); 
        // assert.equal(toastMessageTest, expectedMessage, 'The strings are not equal');
    
    }

    open () {
        return super.open('faq');
    }
}

export default new FaqPage();
