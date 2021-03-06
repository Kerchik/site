import React from 'react';
import ProfileStatus from './ProfileStatus';
import {create} from 'react-test-renderer';

describe("ProfileStatus component", () => {
    test("status from props should be in the state" , () => {
        const component = create(<ProfileStatus status="KEkestan" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("KEkestan")
    }) 

    test("after creation span should be displayed" , () => {
        const component = create(<ProfileStatus status="KEkestan" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    }) 
    
    test("after creation span should display correct status" , () => {
        const component = create(<ProfileStatus status="KEkestan" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("KEkestan")
    }) 
})