import {test, expect} from '@playwright/test';
// npx playwright codegen tests/mytest.spec.js
/*
page.getByAltText() -> to locate an element, usually image, by it's text alternative;
page.getByPlaceholder() --> to locate an inout by placeholder.
page.getByRole() --> to locate by explicit and implicit accessibility attributes.
page.getByText()--> to locate by text content.
page.getBylabel() --> to locate a form control by associated label's text.
page.getBytitle() --> to locate an element by it's title attribute.
page.getByTestId() --> to locate an element based on it's data-testId attribute(other attributes can be count) 
*/

// npx playwright test locBuilt.spec.js

test.beforeEach( async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test('BuiltInLocators', async ({page}) =>{

    // page.getByAltText() -> to locate an element, usually image, by it's text alternative;
    await expect(page.getByAltText('company-branding')).toBeVisible();

    
    // page.getByPlaceholder() --> to locate an inout by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // page.getByRole() --> to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', {type: 'submit'}).click();


    // page.getByText()--> to locate by text content.
    // await expect(page.getByText('Dr.tft Ferenc')).toBeVisible();
    // const name = await page.locator("//span[@class='oxd-userdropdown-tab']").textContent();
    // await expect(page.getByText(name)).toBeVisible();

    // await expect(page.getByTitle('OrangeHRM')).toHaveText('OrangeHRM');
    

})