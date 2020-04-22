import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Table from "../table";
import Page from "../page";

describe('Component Button', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('testing rendering of table', () => {
        const wrapper = mount(
            <Page/>
        );

        expect(wrapper.find('Table')).toHaveLength(1)
    }), it('testing rendering of table', () => {
        const wrapper = mount(
            <Page/>
        );

        expect(wrapper.find('Button')).toHaveLength(1)
    })
})
