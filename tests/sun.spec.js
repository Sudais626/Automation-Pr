import {test, expect} from '@playwright/test';

import { LogInPage } from './log';
//npx playwright test sun.spec.js --project chromium
//npx playwright test sun.spec.js --project chromium --headed

test.beforeEach(async({page}) => {
    await page.goto('https://customer-portal-qa.aws.sunwebportal.com/auth/login')
})

test('login', async({page}) => {
    const logIn = new LogInPage(page);
    await logIn.goto();
    await logIn.login('pxj24955@laoia.com', 'QaTest123abc@');
    // test.setTimeout(40000)
  
    // await this.page;
    await logIn.textwait();
    await expect(page).toHaveURL('https://customer-portal-qa.aws.sunwebportal.com/portal/applications');
    
    const remindBtn = page.getByText('Remind Me Later');
    if(await remindBtn.isVisible()){
        await remindBtn.click()
        await expect(page).toHaveURL('https://customer-portal-qa.aws.sunwebportal.com/portal/applications');
    }
    else {
        console.log('No Remind Me Later Button Was Found')
    }

    // await expect(page.getByText('Remind Me Later')).toBeVisible();
    test.setTimeout(50000);
    // await (page).getByText('Remind Me Later').click();
    // await expect(page).toHaveURL('https://customer-portal-qa.aws.sunwebportal.com/portal/applications');
    


    await page.locator('.application__ctx_menu').locator('.parent-popover-summary').click();
    // await expect(page.getByText('Download PDF')).toBeVisible();
    // await page.getByText('Download PDF').click();
    test.setTimeout(100000)
    // await expect(page).not.toHaveURL('https://customer-portal-qa.aws.sunwebportal.com/portal/applications');
    // console.log(page.url());
    

    const [pdfPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('Download PDF').click(),
    ]);

    await pdfPage.waitForLoadState('domcontentloaded');

    await expect(pdfPage).not.toHaveURL('https://customer-portal-qa.aws.sunwebportal.com/portal/applications');
    
})