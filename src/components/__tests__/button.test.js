import React from "react";
import {FILTER_USER} from "../graphql/resolvers";
import Enzyme, {shallow,mount} from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import Button from "../button";
const wait = require('waait');
import Adapter from "enzyme-adapter-react-16";
describe('Component Button', () => {
        beforeAll(async () => {
            Enzyme.configure({adapter: new Adapter()});
        })
    it('Testing Button rendering', () => {
        const mockCallBack = jest.fn()
        const wrapper = mount(
            <MockedProvider mocks={[]} typename={false}>
            <Button usersUpdate={mockCallBack}/>
        </MockedProvider>
        )
        wrapper.find("input").instance().value = "d";
        expect(wrapper.find("input").instance().value).toBe("d")
        expect(wrapper.find('[type="submit"]')).toHaveLength(1)
    })
    it('testing response in query', async () => {
        const mocks = [
            {
                request: {
                    query: FILTER_USER,
                    variables: {
                        name: 'fd',
                    },
                },
                result: {
                    data: {
                        filterUser: [{name: 'fd', lastname: '', password: ''}, {name: 'fd', lastname: '', password: ''}]
                    },
                },
            },
        ];
        const mockCallBack = jest.fn()
        const wrapper = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Button usersUpdate={mockCallBack}/>
            </MockedProvider>
        );
        wrapper.find("input").instance().value = "fd";
        wrapper.find('[type="submit"]').simulate('click')
        await wait(0);
    })
})