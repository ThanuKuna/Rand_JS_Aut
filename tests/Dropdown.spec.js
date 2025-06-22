const { test, expect } = require('@playwright/test')
test('HandleDropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways to select options from the dropdown

    //await page.locator("#country").selectOption({label:'Japan'})   //label - visible text
    //await page.locator("#country").selectOption('Japan')  //visible text
    //await page.locator("#country").selectOption({value: 'uk'}) // pass value attribute
    //await page.locator("#country").selectOption({index: 1}) // selected using index 
    // await page.selectOption('#country' , 'India')

    //Assertions

    //Check num of options in the drop down

    //1st method
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)

    //2nd method
    // const options = await page.$$('#country option')
    // console.log("Num of Options:" , options.length)
    // await expect(options.length).toBe(10)


    //check presence of the value in the dropdown

    //1st method
    // const contents = await page.locator('#country').textContent()
    // await expect(contents.includes('India')).toBeTruthy()

    //2nd method - using looping mode
    const options = page.locator('#country option');
let status = false;
const count = await options.count();

for (let i = 0; i < count; i++) {
    let value = await options.nth(i).textContent();
    if (value.includes('France')) {
        status = true;
        break;
    }
}

expect(status).toBeTruthy();



    await page.waitForTimeout(5000);
})