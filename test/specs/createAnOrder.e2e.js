const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    it('should set an address', async () => {
        await browser.url(`/`)
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setValue('1300 1st St')
        // add a pause to see that the input was filled
        await browser.pause(10000);
    }) 

    it('should order a supportive taxi', async () => {
        await browser.url('/')
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setVlaue('1300 1st St')
        const callATaxiButton = await $('//button[containt(text(), "Call a taxi")]')
        await callATaxiButton.click()
        const Supportive = await $("//*[contains(text(), 'Supportive')]")
        await Supportive.click()
        // add a pause to see that the input was filled
        await browser.pause(10000);
    }) 

    it('should save the phone', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add a credit card to the order', async () => {
    await browser.url('/')
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    // Adding a payment card
    const paymentMethodButton = await $(page.paymentMethodButton);
    await paymentMethodButton.waitForDisplayed();
    await paymentMethodButton.click();

    const addCardButton = await $(page.addCardButton);
    await addCardButton.waitForDisplayed();
    await addCardButton.click()

    const cardNumber = await $(page.cardNumber);
    await cardNumber.waitForDisplayed();
    await cardNumber.setValue(1234567812345678);
    const cardCode = await $(page.cardCode);
    await cardCode.waitForDisplayed();
    await cardCode.setValue(50);

    const cardSignatureStrip = await $(page.cardSignatureStrip);
    await cardSignatureStrip.waitForDisplayed();
    await cardSignatureStrip.click();

    const linkCardButton = await $(page.linkCardButton);
    await linkCardButton.waitForDisplayed();
    await linkCardButton.click();

    const closePaymentMethodModalButton = await $(page.closePaymentMethodModalButton);
    await closePaymentMethodModalButton.waitForDisplayed();
    await closePaymentMethodModalButton.click();

    const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
    await cardPaymentMethodIcon.waitForDisplayed();
    await expect(await $(cardPaymentMethodIcon)).toBeExisting();

    await browser.pause(2000);
    })

    it('should write a message for the driver', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Write a message for the driver
        const driverMessageInput = await $('//input[@name="comment"]');
        await driverMessageInput.setValue('Hello, driver!');
        const message = await driverMessageInput.getValue();
        await expect(message).toBe('Hello, driver!');
    })    

    it('should order a blanket and handkerchiefs with the taxi ', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Ordering a blanket and handkerchiefs with the taxi
        const orderRequirementsButton = $('.reqs-arrow');
        await orderRequirementsButton.click();
        const blanketAndHandkerchiefsButton = $('.r-sw');
        await orderRequirementsButton.waitForClickable();
        await blanketAndHandkerchiefsButton.click();
    })
    
    it('should order 2 Ice Creams', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Ordering 2 Ice Creams with the taxi
        const plusOneIceCreamButton = await $(page.plusOneIceCreamButton);
        await plusOneIceCreamButton.waitForDisplayed();
        await plusOneIceCreamButton.click();
        await plusOneIceCreamButton.click();

        await browser.pause(2000);
        // Test Check
        const iceCreamValue = await plusOneIceCreamButton.getValue();
        await expect (iceCreamValue).toBe(2);
    })    

    it('should display driver info in the modal', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        // Waiting for driver info to appear in modal 
        const businessPlanButton = await $(page.businessPlanButton);
        await businessPlanButton.waitForDisplayed();
        await businessPlanButton.click();
        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const orderModal = await $(page.carSearchModal);
        await orderModal.waitForDisplayed();
    })    
})