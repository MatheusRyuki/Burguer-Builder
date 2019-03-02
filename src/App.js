import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder/>
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
