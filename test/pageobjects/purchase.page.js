import { $ } from '@wdio/globals'
import Page from './page.js';

class PurchasePage extends Page {

   
    get allCourse () {
        return $("a=Courses");
    }
    get bookNow () {
        return $$('button=Book Now')[0];
    }
    get inputEmail () {
        return $('#email');

    }
    get inputCardNumber () {
        return $('#cardNumber');

    }

    get inputCardExpiry () {
        return $('#cardExpiry');

    }

    get inputCardCvc () {
        return $('#cardCvc');

    }
    
    get inputBillingName () {
        return $('#billingName');

    }

    get submitButton () {
        return $('.SubmitButton-IconContainer');

    }
    

    async purchase (email,cardnumber,cardexpiry,cvc,billingname) {
        
        await browser.pause(2000);
        await this.allCourse.click();
        await browser.pause(3000);
        await this.bookNow.click();
        await browser.pause(5000);
        await this.inputEmail.setValue(email);
        await this.inputCardNumber.setValue(cardnumber);
        await this.inputCardExpiry.setValue(cardexpiry);
        await this.inputCardCvc.setValue(cvc);
        await this.inputBillingName.setValue(billingname);
        await this.submitButton.click();
        await browser.pause(10000); 
        await expect(browser).toHaveTitle('Purchased Success | Acceler8 Training',{message :`Purchase Not successful`});
        await browser.pause(5000);


    }

    open () {
        return super.open('');
    }
}

export default new PurchasePage();
