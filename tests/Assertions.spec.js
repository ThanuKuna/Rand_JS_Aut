const { test, expect } = require('@playwright/test');
test('Assertions', async ({ page }) => {
// open app url
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

//await expect(page).toHaveURL() -	Page has a URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

//await expect(page).toHaveTitle() -  Page has a title
await expect(page).toHaveTitle('nopCommerce demo store. Register')

// await expect(locator).toBeVisible()	Element is visible
const logoElement = await page.locator('.header-logo')
await expect(logoElement).toBeVisible()

// await expect(locator).toBeDisabled()	Element is disabled
// await expect(locator).toBeEnabled()	Element is enabled
const searchStorebox = await page.locator('#small-searchterms')
await expect(searchStorebox).toBeEnabled()

// await expect(locator).toBeChecked()	Checkbox is checked
//Radio btn
const maleRadioBtn = await page.locator('#gender-male')
await maleRadioBtn.click() //select radio button
await expect(maleRadioBtn).toBeChecked()
//Checkbox
const newsLetterCheckbox = await page.locator('#Newsletter')
await expect(newsLetterCheckbox).toBeChecked()

// await expect(locator).toHaveAttribute()	Element has a DOM attribute
const RegButton = await page.locator('#register-button')
await expect(RegButton).toHaveAttribute('type','submit')

// await expect(locator).toHaveText()	Element matches text
const TextTitle = await page.locator('.page-title h1')
await expect(TextTitle).toHaveText('Register')  // Full text

// await expect(locator).toContainText()	Element contains text
await expect(await page.locator('.page-title h1')).toContainText('Reg') //partial text

// await expect(locator).toHaveValue()	Input has a value
const EmailInput = await page.locator('#Email')
await EmailInput.fill('test@demo1.com')
await expect(EmailInput).toHaveValue('test@demo1.com')

// await expect(locator).toHaveCount()	List has exact number of children - EX NOW REMOVED IN WEBSITE
// const DrodownMonthOptions = await page.locator('select[name="DateOfBirthMonth"] option')
// await expect(DrodownMonthOptions).toHaveCount(13)

})



// await expect(locator).toBeAttached()	Element is attached
// await expect(locator).toBeChecked()	Checkbox is checked
// await expect(locator).toBeDisabled()	Element is disabled
// await expect(locator).toBeEditable()	Element is editable
// await expect(locator).toBeEmpty()	Container is empty
// await expect(locator).toBeEnabled()	Element is enabled
// await expect(locator).toBeFocused()	Element is focused
// await expect(locator).toBeHidden()	Element is not visible
// await expect(locator).toBeInViewport()	Element intersects viewport
// await expect(locator).toBeVisible()	Element is visible
// await expect(locator).toContainText()	Element contains text
// await expect(locator).toContainClass()	Element has specified CSS classes
// await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
// await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
// await expect(locator).toHaveAttribute()	Element has a DOM attribute
// await expect(locator).toHaveClass()	Element has specified CSS class property
// await expect(locator).toHaveCount()	List has exact number of children
// await expect(locator).toHaveCSS()	Element has CSS property
// await expect(locator).toHaveId()	Element has an ID
// await expect(locator).toHaveJSProperty()	Element has a JavaScript property
// await expect(locator).toHaveRole()	Element has a specific ARIA role
// await expect(locator).toHaveScreenshot()	Element has a screenshot
// await expect(locator).toHaveText()	Element matches text
// await expect(locator).toHaveValue()	Input has a value
// await expect(locator).toHaveValues()	Select has options selected
// await expect(locator).toMatchAriaSnapshot()	Element matches the Aria snapshot
// await expect(page).toHaveScreenshot()	Page has a screenshot
// await expect(page).toHaveTitle()	Page has a title
// await expect(page).toHaveURL()	Page has a URL
// await expect(response).toBeOK()	Response has an OK status
