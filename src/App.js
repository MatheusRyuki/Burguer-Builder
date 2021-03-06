import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Logout = React.lazy(() => {
  return import('./containers/Auth/Logout/Logout');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const BurguerBuilder = React.lazy(() => {
  return import('./containers/BurguerBuilder/BurguerBuilder');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const app = props => {
  useEffect(() => {
    props.onTryAutoSignUp();
  }, []);

    let routes = (
      <Switch>
        <Route path='/auth' render={(props) => <Auth {...props}/>} />
      <Route path="/" exact render={(props) => <BurguerBuilder {...props}/>} />
      <Redirect to="/" />
      </Switch>
    );

    if (props.isAuthenticated) {
      routes = (
        <Switch>
            <Route path='/orders' render={(props) => <Orders {...props}/>} />
            <Route path="/checkout" render={(props) => <Checkout {...props}/>} />
            <Route path="/logout" render={(props) => <Logout {...props}/>} />
            <Route path='/auth' render={(props) => <Auth {...props}/>} />
            <Route path="/" exact render={(props) => <BurguerBuilder {...props}/>  } />
            <Redirect to="/" />
          </Switch>
      );
    }
    return (
      <div>
        <Layout>
          <Suspense fallback={'carregando...'}>
           {routes}
          </Suspense>
        </Layout>
      </div>
    );
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
export default withRouter(connect(mapStateToProps, mapActions)(app));
