import React from 'react';
import classes from './Order.css';

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredientes: Salada (1)<p/>
    <p>Preço: <strong>R$ 5.45</strong></p>
  </div>
);

export default order;
