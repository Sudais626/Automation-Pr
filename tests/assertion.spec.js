import { test, expect} from "@playwright/test";
// npx playwright test assertion.spec.js --project chromium
/*
.toHaveURL()
.toHaveTitle()
.toBeVisible()
.toBeEnabled()
.toBeDisabled()
.toBeChecked()
.toHaveAttributes()
.toHaveText()
.toContainText()
.toHaveValue()
.toHaveCount()
*/ 
test.beforeEach(async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')
})

test('Assertions', async({page}) => {
    // 1. toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // 2. toHaveTitile()
    await expect(page).toHaveTitle(/nopCommerce demo store. Register/);

    // 3. toBeVisible()
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();

    // 4. toBeDisabled()
    // await expect(page.getByRole('radio', {name: 'Male'})).toBeDisabled();

    // 5. toBeEnabled()
    await expect(page.locator('#small-searchterms')).toBeEnabled();


    // 5. toBeChecked().
    const chek = page.locator('#NewsLetterSubscriptions_0__IsActive');
    await chek.check();
    await expect(chek).toBeChecked()
    
    // 6.  toHaveAttributes()
    await expect(page.locator('#register-button')).toHaveAttribute('type', 'submit');

    // 7. toHaveText()
    await expect(page.getByRole('heading', {name: 'Register'})).toHaveText('Register');

    // 8. toContainText()
    await expect(page.getByRole('heading', {name: 'Register'})).toContainText('Register');

    // 9. toHaveValue()
    await (page.locator('#FirstName')).fill('username');
    await expect(page.locator('#FirstName')).toHaveValue('username');

    //10.  toHaveCount()
    await expect(page.locator('.footer-menu__item')).toHaveCount(18);




})