// @ts-check
import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// test('login', async ({page}) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// })

// test('login', async ({page}) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.fill('input[name="username"]', 'Admin');
//   await page.fill('input[name="password"]', 'admin123');
//   // await page.getByPlaceholder('Username').fill('Admin')
//   await page.click('button[type="submit"]')
//   // await page.getByRole('button', {name: 'Login'}).click()

// });


// test.beforeEach(async ({page}) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// })

// test('login', async ({page}) => {
//   test.setTimeout(90000);
//   await page.fill('input[name="username"]', 'Admin');
//   await page.fill('input[name="password"]', 'admin123');
//   await page.click('button[type="submit"]');
//   await expect(page).toHaveURL(/dashboard/);
// })

// test('invalid login', async({page}) =>{
//   test.setTimeout(90000);
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').fill('wrong password');
//   await page.getByRole('button', {name: 'Login'}).click();
//   await expect(page.getByText(/Invalid credentials/)).toBeVisible();
//   await expect(page.getByRole('button', {name: 'Login'})).toBeEnabled();
// })

