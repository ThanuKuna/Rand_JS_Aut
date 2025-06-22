const {test , expect} = require('@playwright/test')
test('HandleInputbox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Input box - Name field
    await expect(await page.locator("//input[@id='name']")).toBeVisible()
    await expect(await page.locator("//input[@id='name']")).toBeEmpty()
    await expect(await page.locator("//input[@id='name']")).toBeEditable()
    await expect(await page.locator("//input[@id='name']")).toBeEnabled()


    // await page.locator("//input[@id='name']").fill("Thanu")
    await page.fill("//input[@id='name']", 'Thanu')

    await page.waitForTimeout(5000) //pausing the code




})