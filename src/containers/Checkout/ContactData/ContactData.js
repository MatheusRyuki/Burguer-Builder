import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu nome'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu Endereço'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu CEP'
        },
        value: ''
      },
      state: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Seu Estado'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Seu E-mail'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{
            value: 'rápido',
            displayValue: 'rápido'
          },
          {
              value: 'barato',
              displayValue: 'barato'
          }]
        },
        value: ''
      },
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render () {
      let form = (
        <form>
          <Input elementType="" elementConfig="" value="" />
          <Input elementType="" elementConfig="" value=""  />
          <Input elementType="" elementConfig="" value=""  />
          <Input elementType="" elementConfig="" value=""  />
          <Button btnType="Success">PEDIR</Button>
        </form>
      );
      if (this.state.loading) {
        form = <Spinner />;
      }
          return (
      <div className={classes.ContactData}>
        <h4>Coloque seus dados de contato</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
