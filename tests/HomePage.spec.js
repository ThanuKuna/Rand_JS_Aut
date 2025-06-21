const {test, expect} = require('@playwright/test')
test('Home page' ,async ({page})=>{

    await page.goto('https://demoblaze.com/index.html'); //Lauch page

    const pageTitle = page.title(); //capture the title
    console.log('Page title is : ', pageTitle); // print the title
    await expect(page).toHaveTitle('STORE'); // validation point(title)

    const pageURL = page.url(); 
    console.log('page url is :', pageURL);
    await expect(page).toHaveURL('https://demoblaze.com/index.html'); //validate URL

    await page.close(); // close the page

})