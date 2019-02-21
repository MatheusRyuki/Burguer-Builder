import React from 'react';
import Aux from '../../hoc/HOC';
import classes from './Layout.css';

const layout = ( props ) => (
  <Aux>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main className={classes.Conteudo}>
    {props.children}
  </main>
  </Aux>
);


export default layout;
