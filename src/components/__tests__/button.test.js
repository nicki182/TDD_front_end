import {act} from "react-dom/test-utils";
import {render} from "react-dom";
import React, {useState} from 'react';
import Enzyme, {shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import puppeteer from 'puppeteer'
import Button from "../page";
import fetchMock from 'fetch-mock';
fetchMock.mock('http://localhost:5001', 200);
describe('Component Button', () => {
    beforeAll(async () => {
        Enzyme.configure({ adapter: new Adapter() });
            })
    it('Testing Button rendering', () => {
        const mockCallBack = jest.fn()
        const wrapper = mount(
            <Button updateUsers={mockCallBack}/>
        );
        wrapper.find("input").instance().value = "d";
        expect(wrapper.find("input").instance().value).toBe("d")
        expect(wrapper.find('[type="submit"]')).toHaveLength(1)
        }),
        it('testing fetch connection with backend',async ()=>{
            const response = await fetch('http://localhost:5001', {
                method: 'POST',
                header: {'Content-Type': 'application/json'},
                body: JSON.stringify({name:'d'})
            })
            expect(response.ok).toBe(true)
            fetchMock.restore()
        })
})