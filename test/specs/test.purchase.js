import LoginPage from '../pageobjects/login.page.js'
import PurchasePage from '../pageobjects/purchase.page.js'

describe('My Purchase application', () => {
    it('should complete purchase journey', async () => {
        
        await LoginPage.open()
        await LoginPage.login('aitsqa@gmail.com', 'Aitsq@123')
        await PurchasePage.open()
        await PurchasePage.purchase('aitsqa@gmail.com','4242 4242 4242 4242', '11/24','753','Atiar')
    })
})