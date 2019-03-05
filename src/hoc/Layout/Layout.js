import React, { Component } from 'react';
import Aux from '../Hoc/HOC';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
   showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
         open={this.state.showSideDrawer}
         closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Conteudo}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
