import React, { Component, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignUp();
  }

  render() {
    
    const Auth = lazy(() => import('./containers/Auth/Auth'));
    const Orders = lazy(() => import('./containers/Orders/Orders'));
    const Checkout = lazy(() => import('./containers/Checkout/Checkout'));
    const Logout = lazy(() => import('./containers/Auth/Logout/Logout'));

    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
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
