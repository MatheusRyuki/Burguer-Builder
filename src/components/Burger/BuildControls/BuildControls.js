import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salada', type: 'salada'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Queijo', type: 'queijo'},
    { label: 'Carne', type: 'carne'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Preço atual: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
      added={() => props.ingredientAdded(ctrl.type)}
      removed={() => props.ingredientRemoved(ctrl.type)}
       key={ctrl.label}
       label={ctrl.label}
       disabled={props.disabled[ctrl.type]}/>
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>{props.isAuth ? 'Peça agora!' : 'Faça Login para fazer um pedido!'}</button>
  </div>
);

export default buildControls;
