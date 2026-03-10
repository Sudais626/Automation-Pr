import {test, expect} from '@playwright/test';
import { constants } from 'node:buffer';
import { exec } from 'node:child_process';
// import { LoginPage } from './loginPage';


// test.beforeEach(async ({page}) => {
//      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// })


// test('login', async ({page}) => {
//     test.setTimeout(90000);
// const loginPage = new LoginPage(page);
// await loginPage.goto();
// await loginPage.login('Admin', 'admin123');
// await expect(page).toHaveURL(/dashboard/);
// })


////////////////////////////////////////////////////////////////////////////////////

test.beforeEach(async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
})

// test('title', async ({page}) => {
//     await expect(page).toHaveTitle(/STORE/);
//     await expect(page).toHaveURL('https://www.demoblaze.com/')
//     await expect(page.locator('#login2')).toBeVisible();
//     // await page.locator('.nav-item').nth(4).click();
//     await page.getByRole('link', {name: 'Log in'}).click();
//     await expect(page.locator('#loginusername')).toBeVisible();
//     await page.locator('#loginusername').fill('username_626');
//     await page.locator('#loginpassword').fill('username12@');
//     await page.getByRole('button', {name: 'Log in'}).click();
//     await expect(page.getByRole('link', {name: 'Log out'})).toBeVisible();
    
//     await page.getByRole('link', {name: 'Log out'}).click();
    
// })


test('locatingMulElements', async ({page}) => {
    
    // const links = await page.$$('a');
    
    // for(let link of links){
    //     const linkText = await link.textContent();
    //     console.log(linkText);

    // }


    // const products = await page.$$("#contcont");
    
    // for(let product of products){
    //     const productName = await product.textContent();
    //     console.log(productName);
    // }

    // console.log(count)
    // for(let i = 0; i<count; i++){
    //     const productName = await products.nth(i).textContent();
    //     console.log(productName)
    // }



    
})