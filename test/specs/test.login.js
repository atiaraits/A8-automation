import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        
        await LoginPage.open()
        await LoginPage.login('atiaraits19@gmail.com', 'Ati@r10310496')
        
    })
})