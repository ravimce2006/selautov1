import { test } from '@playwright/test';


test.describe('lanuch the different browsers',()=>{




test('Lanuch google',async({ page })=>{
await page.goto('https://www.google.com/');
});

test('lanuch snapdeal',async({ page })=>{
    await page.goto('https://www.snapdeal.com/');
})

test('lanuch flipkart',async( {page} )=>{
    await page.goto('https://www.flipkart.com/');
})

test('close the labs',async({page})=>{
await page.close();
})
});