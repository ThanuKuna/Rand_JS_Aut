const{test , expect} = require('@playwright/test')
test('Handle RadioBtn', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
//Radio button
// await page.locator("//label[normalize-space()='Female']").check();
await page.check("//label[normalize-space()='Female']")  //female
await expect(await page.locator("//label[normalize-space()='Female']")).toBeChecked();
await expect(await page.locator("//label[normalize-space()='Female']").isChecked()).toBeTruthy();


await expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy();  //male




    await page.waitForTimeout(5000) //pausing the code

})