import React from 'react';
import Aux from '../../hoc/HOC';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
  <Aux>
    <Toolbar/>
    <main className={classes.Conteudo}>
      {props.children}
    </main>
  </Aux>
);


export default layout;
