import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salada', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Queijo', type: 'cheese'},
    { label: 'Carne', type: 'meat'},
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
  </div>
);

export default buildControls;
