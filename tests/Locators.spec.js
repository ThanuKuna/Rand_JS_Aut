const {test,expect} = require('@playwright/test');

test('Locators', async ({page}) => {
    await page.goto("https://demoblaze.com/index.html");

    //click on login button - property
    await page.click('#login2')

    //provide username - CSS from Selectorshub
    //await page.locator('#loginusername').fill("pavanol")
    //await page.type('#loginusername' , 'pavanol')
    await page.fill('#loginusername' , 'pavanol')

    //provide password - CSS
    await page.fill("input[id='loginpassword']", 'test@123')

    //click on login btn - xpath
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    //verify logout link presence
    const logoutlink = page.locator("//*[@id='logout2']");
    await expect (logoutlink).toBeVisible();

    await page.close()
}) 