import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salada: 1,
      carne: 1,
      queijo: 1,
      bacon: 1
    }
  }
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients}/>
      </div>
    )
  }
}

export default Checkout;
