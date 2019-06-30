import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../shared/utility';

const contactdata = props => {
  const [orderForm, setOrderForm] = useState({
      nome: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu Nome'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      rua: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu Endereço'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      CEP: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu CEP'
        },
        value: '',
        validation: {
          required: true,
          minLength: 8,
          maxLength: 8
        },
        valid: false,
        touched: false
      },
      estado: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu Estado'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Seu E-mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{
            value: 'rápido',
            displayValue: 'Rápido'
          },
          {
              value: 'barato',
              displayValue: 'Barato'
          }]
        },
        value: 'rápido',
        validation: {},
        valid: true,
      }
    })

    const [formIsValid, setFormIsValid] = useState(false);

  const orderHandler = (event) => {
    event.preventDefault();
    
    const formData = {};

    for (let formElementIdentifier in orderForm) {
        formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    
    const order = {
      ingredients: props.ings,
      price: props.price,
      orderData: formData,
      userId: props.userId
    }

    props.onOrderBurger(order, props.token);
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(orderForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value.value, orderForm[inputIdentifier]),
      touched: true
    });

    const updatedOrderForm = updateObject(orderForm, {
      [inputIdentifier]: updatedFormElement
    });
    
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  }
      const formElementsArray = [];
      for (let key in orderForm) {
        formElementsArray.push({
          id: key,
          config: orderForm[key],

        });
      }
      let form = (
        <form onSubmit={orderHandler}>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => inputChangedHandler(event, formElement.id)}/>
            ))}
          <Button btnType="Success" disable={!formIsValid}>PEDIR</Button>
        </form>
      );
      if (props.loading) {
        form = <Spinner />;
      }
          return (
      <div className={classes.ContactData}>
        <h4>Coloque seus dados de contato</h4>
        {form}
      </div>
    )
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading, 
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) => dispatch(actionTypes.purchaseBurger(orderData, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(contactdata , axios));
