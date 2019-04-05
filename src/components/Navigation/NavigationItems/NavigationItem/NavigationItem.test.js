import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from './NavigationItem';
import React from 'react';
import { NavLink } from 'react-router-dom';

configure({
    adapter: new Adapter()
});

describe('Componente de NavigationItems', () => {
    let wrapper;

    beforeEach (() => {
        wrapper = shallow(<NavigationItem />);
    });

    it('Deve ter NavLink', () => {
        wrapper.setProps({to: '/'});
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });

});