import React, { useState } from 'react';
import { connect } from 'react-redux';
import Aux from '../Hoc/HOC';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

const layout = props => {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!showSideDrawer);
  }

    return (
      <Aux>
        <Toolbar 
          isAuth={props.isAuthenticated}
          drawerToggleClicked={sideDrawerToggleHandler}/>
        <SideDrawer
         isAuth={props.isAuthenticated}
         open={showSideDrawer}
         closed={sideDrawerClosedHandler}/>
        <main className={classes.Conteudo}>
          {props.children}
        </main>
      </Aux>
    )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(layout);
