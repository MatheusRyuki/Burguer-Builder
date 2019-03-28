import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import React from 'react';

configure({
    adapter: new Adapter()
});

describe('Componente de NavigationItems', () => {
    it('Deve renderizar dois itens', () => {
        const wrapper = shallow(<NavigationItems />);

        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
});