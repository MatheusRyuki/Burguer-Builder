import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Hoc/HOC';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import actionsType from '../../store/actions';

const INGREDIENT_PRICES = {
  salada: 1,
  queijo: 0.8,
  carne: 2.6,
  bacon: 1.4
};

class BurguerBuilder extends Component {
  /* componentDidMount () {
    axios.get('ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {
        this.setState({error: true});
      });
  } */
  state = {
    totalPrice: 12,
    compravel: false,
    purchasing: false,
    loading: false,
    error: false
  };

  updatedPurchaseState (ingredients) {
      const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey]
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
      this.setState({compravel: sum > 0});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients =  {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice +  priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatedPurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients =  {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatedPurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseContinueHandler = () => {
      const queryParams = [];

      for (let i in this.state.ingredients) {
          queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
      }
      queryParams.push('price=' + this.state.totalPrice);
      const queryString = queryParams.join('&');
      this.props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
      });
};

  render () {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p> Os ingredientes não pode ser carregados </p> : <Spinner/>;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.compravel}
            ordered={this.purchaseHandler}/>
          </Aux>
      );
      orderSummary =   <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
          ingredients={this.props.ings}/>;
    }


    if (this.state.loading) {
      orderSummary = <Spinner />
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
    onIngredientAdded: (ingName) => dispatch({type: actionsType.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) => dispatch({type: actionsType.REMOVE_INGREDIENT, ingredientName: ingName }),
  };
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));
