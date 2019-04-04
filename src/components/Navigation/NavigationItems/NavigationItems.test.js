import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import React from 'react';

configure({
    adapter: new Adapter()
});

describe('Componente de NavigationItems', () => {
    let wrapper;

    beforeEach (() => {
        wrapper = shallow(<NavigationItems />);
    });
    it('Deve renderizar dois itens', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('Deve renderizar três itens quando tiver logado', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
});