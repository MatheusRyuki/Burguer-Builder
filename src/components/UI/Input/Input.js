import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
        inputElement = <input className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}/>;
        break;
    case ('textarea'):
      inputElement = <textarea  className={classes.InputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>;
      break;
    case ('select'):
      inputElement = (
        <select
          onChange={props.changed}
          className={classes.InputElement}
          value={props.value}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
         </select>
      );
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
  }
  return (
  <div className={classes.Input}>
    <label className={classes.Label}>{props.label}</label>
    {inputElement}
  </div>
  );
};

export default input;
