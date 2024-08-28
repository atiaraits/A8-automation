import SignupPage from '../pageobjects/signup.page.js'

describe('My Signup application', () => {
    it('should signup with valid credentials', async () => {
        await SignupPage.open()
        await SignupPage.signup('atiaraits1116@gmail.com','atiaraits19+1111','123456789','Ati@r10310496','Ati@r10310496')
    })
})

