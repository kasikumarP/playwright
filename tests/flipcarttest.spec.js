const {test,expect}= require('@playwright/test')
test('flipcart',async ({page})=>{
    await page.goto('https://www.flipkart.com/')
    const flipcarttitle=page.title();
    await console.log("title is :"+flipcarttitle);
    await expect(page).toHaveTitle(/Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com/);
    await page.close();
})