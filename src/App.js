import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
    return (
      <div>
        <Layout>
          <Switch>
          <Route path='/auth' component={Auth} />
            <Route path='/orders' component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={BurguerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapActions = dispatch  => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState()) 
  };
};
export default withRouter(connect(null, mapActions)(App));
