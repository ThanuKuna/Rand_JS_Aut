const { test, expect } = require('@playwright/test')
test('Handle Checkboxes', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //single check box
    await page.locator("//input[@id='monday']").check()
    // await page.check("//input[@id='monday']")
    expect(await page.locator("//input[@id='monday']")).toBeChecked()
    expect(await page.locator("//input[@id='monday']").isChecked()).toBeTruthy()
    expect(await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy()

    //multiple checkboxes
    const checkBoxes = [
        "//input[@id='monday']",
        "//input[@id='saturday']",
        "//input[@id='sunday']"
    ];
    //select multiple checkboxes
    for (const locator of checkBoxes) {
        await page.locator(locator).check();
    }
    
    await page.waitForTimeout(5000) //pausing the code

    //un select multiple checkboxes which are already selected
    for (const locator of checkBoxes) {
        if (await page.locator(locator)) {
            await page.locator(locator).uncheck();
        }
    }


    await page.waitForTimeout(5000) //pausing the code

})