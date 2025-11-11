import { defineConfig } from '@playwright/test';
export default defineConfig({
 reporter: 'html',
});

const{test,expect}= require ('@playwright/test');
test('locators', async ({page})=>{
    await page.goto("https://www.amazon.in/");
    const linktext = await page.$$("//div[@id='nav-xshop-container']//li/div/a");
    for ( const links of linktext){
        const linkname = await links.textContent();
        console.log(linkname.length);
        console.log(linkname);
    }
    // await page.locator("#login2").click();
    // await page.locator("#loginusername").fill("clara");
    // await page.locator("#loginpassword").fill("clara@123");
    // await page.getByRole('button', { name: 'Log in' }).click();
    // await page.getByRole('button', { name: 'Cancel' }).click();
    await page.close();
})     
