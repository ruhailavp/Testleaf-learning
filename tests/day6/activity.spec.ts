import { test, expect } from '@playwright/test';

test('select values from dropdown', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/")
     page.getByRole('textbox', { name:'Username'}).fill("democsr")
     page.getByRole('textbox', { name:'Password'}).fill("'crmsfa")
    

})