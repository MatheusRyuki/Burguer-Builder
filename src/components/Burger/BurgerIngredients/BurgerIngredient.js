import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const burgerIngredients = props => {
      let ingredient = null;

      switch (props.type) {
        case ('bread-bottom'):
          ingredient = <div className={classes.BreadBottom}></div>;
          break;
        case ('bread-top'):
          ingredient = (
            <div className={classes.BreadTop}>
              <div className={classes.Seeds1}></div>
              <div className={classes.Seeds2}></div>
            </div>
          );
          break;
        case ('carne'):
          ingredient = <div className={classes.Meat}></div>;
          break;
        case ('queijo'):
          ingredient = <div className={classes.Cheese}></div>;
          break;
        case ('salada'):
          ingredient = <div className={classes.Salad}></div>;
          break;
        case ('bacon'):
          ingredient = <div className={classes.Bacon}></div>;
          break;
        default:
          ingredient = null;
      }
      return ingredient;
}

burgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredients;
