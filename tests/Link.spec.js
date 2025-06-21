const{test,expect} = require('@playwright/test');
test('Link', async({page}) => {
    await page.goto('https://demoblaze.com/index.html')
    //specify the locators

    // const links = await page.$$('a');

    // for(const link of links){
    //     const linkText = await link.textContent();
    //     console.log(linkText)
    // }

    await page.waitForSelector('//*[@id="tbodyid"]/div[1]/div/div/h4/a')
    //locate all the projects displayed on home page
    const products = await page.$$('//*[@id="tbodyid"]//h4/a')
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName)
    }



})
