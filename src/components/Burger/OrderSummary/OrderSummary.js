import React, { Component } from 'react';
import Aux from '../../../hoc/Hoc/HOC';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render () {
    const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        )
      });

    return (
      <Aux>
        <h3>Seu pedido</h3>
        <p>Um hambúrguer com os seguintes ingredientes:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Preço total: {this.props.price.toFixed(2)}</strong></p>
        <p>Continuar para o Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUAR</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
