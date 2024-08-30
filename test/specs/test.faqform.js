import FaqPage from '../pageobjects/faq.page.js'

describe('My Form submit application', () => {
    it('should submit a form with valid input', async () => {
        await FaqPage.open()
        await FaqPage.formSubmit('tester','tester@test.com','This is a testing question')  

    })
})



