import puppeteer from 'puppeteer'
import React, {useState} from 'react';
import Enzyme, {shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
describe('Web', () => {
    it('should be titled "Google"', async () => {
        const a=1
        console.log(a)
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

