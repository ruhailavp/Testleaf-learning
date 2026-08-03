import { test, expect } from '@playwright/test';
test('learn css and xpath locators',async({page})=>{

 await page.goto("https://login.salesforce.com/")
 // username with css(id)
 await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
 //username with css(class)
// await page.locator(`.input.r4.wide.mb16.mt8.username`).fill("dilipkumar.rajendran@testleaf.com")
 //username with css(attribute)
 //await page.locator(`[class$='username']`).fill("dilipkumar.rajendran@testleaf.com")

 //username with relative xpath(id)
 //await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com")

    //username with relative xpathcontains()
  // await page.locator(`//input[contains(@class,'username')]`).fill("dilipkumar.rajendran@testleaf.com")
//username with absolute xpath
 //await page.locator(`/html/body/div[1]/div[1]/div/div/div[2]/div[3]/form/div[1]/div/input[1]`).fill("dilipkumar.rajendran@testleaf.com")

//password with css(class)
await page.locator(`[class$=password]`).fill("TestLeaf@2025")
await page.locator(`input.button.r4.wide.primary`).click()
await page.waitForTimeout(10000)
const title=await page.title()
console.log(title)


})