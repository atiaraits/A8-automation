

import SignupPage from '../pageobjects/signup.page.js'
import LoginPage from '../pageobjects/login.page.js'


describe('My Signup application', () => {
    it('should signup with valid credentials', async () => {
        await SignupPage.open()
        await SignupPage.signup('atiaraits1112@gmail.com','atiaraits19+1111','123456789','Ati@r10310496','Ati@r10310496')
    })
})



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('atiaraits1112@gmail.com', 'Ati@r10310496')
    })
})