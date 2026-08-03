
import test, { chromium } from "@playwright/test";

test('login to salesforce',async()=>{

const browser= await chromium.launch({channel:"chrome",headless:false})
const browserContext1= await browser.newContext()
const page=await browserContext1.newPage()

await page.goto("https://login.salesforce.com/")
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
await page.locator(`#password`).fill("TestLeaf@2025")
await page.locator(`#Login`).click()
await page.waitForTimeout(10000)
const title= await page.title()
console.log(title)
const url=await page.url()
console.log(url)
await browser.close()})