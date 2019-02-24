import React from 'react';
import Aux from '../../hoc/HOC';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
  <Aux>
    <Toolbar/>
    <SideDrawer />
    <main className={classes.Conteudo}>
      {props.children}
    </main>
  </Aux>
);


export default layout;
