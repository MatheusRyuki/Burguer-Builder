import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salada', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Queijo', type: 'Cheese'},
    { label: 'Carne', type: 'meat'},
];

const buildControls = (props) => {
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
      added={() => props.ingredientAdded(ctrl.type)}
      removed={() => props.ingredientRemoved(ctrl.type)}
       key={ctrl.label}
       label={ctrl.label}/>
    ))}
  </div>
};

export default buildControls;
