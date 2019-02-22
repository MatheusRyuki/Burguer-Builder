import React from 'react';
import Aux from '../../../hoc/HOC';

const orderSummary = (pros) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li>
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
      <p>Continuar para o Checkout?</p>
    </Aux>
  );
};


export default orderSummary;
