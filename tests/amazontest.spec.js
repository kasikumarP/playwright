const {test,expect}= require('@playwright/test');
test('  amazon',async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    const amazonTitle = page.title();
    console.log("title is :"+amazonTitle);
    await expect(page).toHaveTitle(/Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in/);
    await page.close();
})