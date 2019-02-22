import React from 'react';
import Aux from '../../../hoc/HOC';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
      <p><strong>Preço total: {props.price.toFixed(2)}</strong></p>
      <p>Continuar para o Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCELAR</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUAR</Button>
    </Aux>
  );
};


export default orderSummary;
