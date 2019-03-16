import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  let validationError = null;

  if  (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  if (props.invalid && props.touched) {
    validationError = <p className={classes.ValidationError}>Por favor, digite um {props.elementConfig.type} válido!</p>;
  }

  switch (props.elementType) {
    case ('input'):
        inputElement = <input className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}/>;
        break;
    case ('textarea'):
      inputElement = <textarea  className={inputClasses.join(' ')}
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
      inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
  }
  return (
  <div className={classes.Input}>
    <label className={classes.Label}>{props.label}</label>
    {inputElement}
    {validationError}
  </div>
  );
};

export default input;
