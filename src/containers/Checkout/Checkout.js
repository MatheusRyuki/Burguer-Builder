import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Spinner />;
    if (this.props.ings) {
      summary = (
        <div>
        <CheckoutSummary
        ingredients={this.props.ings}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}/>
        <Route path={this.props.match.path + '/contact-data'}
          component={ContactData}/>
          </div>
      )
    }
    return (
        {summary}
    )
  }
}


const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients
  }
};

export default connect(mapStateToProps)(Checkout);
