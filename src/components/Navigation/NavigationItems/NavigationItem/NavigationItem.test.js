import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from './NavigationItem';
import React from 'react';

configure({
    adapter: new Adapter()
});

describe('Componente de NavigationItems', () => {
    let wrapper = shallow(<NavigationItem  children="/" />);
    it('Deve ter Props', () => {
        expect(wrapper.props().children.props.children).toEqual('/');
    });
});