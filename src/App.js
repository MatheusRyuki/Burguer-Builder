import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignUp();
  }

  render() {

    let routes = (
      <Switch>
      <Route path="/" exact component={BurguerBuilder} />
      <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
            <Route path='/orders' component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/logout" component={Logout} />
            <Route path='/auth' component={Auth} />
            <Route path="/" exact component={BurguerBuilder} />
            <Redirect to="/" />
          </Switch>
      );
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapActions = dispatch  => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState()) 
  };
};
export default withRouter(connect(mapStateToProps, mapActions)(App));
