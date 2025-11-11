const {test,expect}= require('@playwright/test');

test('home',async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    const pageTitle = page.title();
    console.log("Page Title is: "+pageTitle);
    await expect(page).toHaveTitle(/STORE/);
    await page.close();

})