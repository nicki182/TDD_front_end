import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Table from "../table";

describe('Component Button', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('testing rendering of table',()=>{
        const user=[{name:'',lastname:'',email:''}]
        const wrapper = mount(
            <Table users={user}/>
        );
        expect(wrapper.find('td')).toHaveLength(3)
    }),
        it('testing add users to table',()=>{
            const user=[{name:'',lastname:'',email:''},{name:'',lastname: '',email:''}]
            const wrapper = mount(
                <Table users={user}/>
            );
            expect(wrapper.find('td')).toHaveLength(6)
        })
})