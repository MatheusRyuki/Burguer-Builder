import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    { props.isAuthenticated ? <NavigationItem link="/orders">
      Pedidos
      </NavigationItem> : null }
    { !props.isAuthenticated ?
     <NavigationItem link="/auth">
       Autentificação
     </NavigationItem>
     :
     <NavigationItem link="/logout">
       Sair
     </NavigationItem>
    }
  </ul>
);

export default navigationItems;
