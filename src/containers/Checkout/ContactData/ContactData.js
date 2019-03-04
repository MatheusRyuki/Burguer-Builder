import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'John',
        address: {
          street: '25 de Dezembro',
          zipCode: '635272',
          country: 'Japan'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render () {
    return (
      let form = (
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Seu nome" />
          <input className={classes.Input} type="email" name="email" placeholder="Seu E-mail" />
          <input className={classes.Input} type="text" name="street" placeholder="Seu endereço" />
          <input className={classes.Input} type="text" name="postalCode" placeholder="Seu CEP" />
          <Button btnType="Success">PEDIR</Button>
        </form>
      );
      if (this.state.loading) {
        form = <Spinner />;
      }
      <div className={classes.ContactData}>
        <h4>Coloque seus dados de contato</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
