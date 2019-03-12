import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Hoc/HOC';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burguerBuilderActions from '../../store/actions/index';

class BurguerBuilder extends Component {

  componentDidMount() {
    this.props.onInitIngredients();
  };

  state = {
    purchasing: false,
  };

  updatedPurchaseState (ingredients) {
      const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey]
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
      return sum > 0;
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
};

  render () {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.props.error ? <p> Os ingredientes não pode ser carregados </p> : <Spinner/>;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatedPurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}/>
          </Aux>
      );
      orderSummary =   <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
          ingredients={this.props.ings}/>;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burguerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burguerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burguerBuilderActions.initIngredients)
  };
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));
