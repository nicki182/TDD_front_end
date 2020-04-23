import puppeteer from 'puppeteer'
import React from 'react';
describe('Web', () => {
    it('test web from client in Page route', async () => {
        let browser = await puppeteer.launch({
            headless: false,
            sloMo: 35
        });
        const page=await browser.newPage()
         await page.goto('http://localhost:3030/PAGE');
        await page.click('input')
        await page.type('input','d')
        await page.click('button')
       await browser.close()
    },10000);
});

