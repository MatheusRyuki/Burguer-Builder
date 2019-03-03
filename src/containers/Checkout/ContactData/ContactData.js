import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Coloque seus dados de contato</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Seu nome" />
          <input className={classes.Input} type="email" name="email" placeholder="Seu E-mail" />
          <input className={classes.Input} type="text" name="street" placeholder="Seu endereço" />
          <input className={classes.Input} type="text" name="postalCode" placeholder="Seu CEP" />
          <Button btnType="Success">FINALIZE</Button>
        </form
      </div>
    )
  }
}

export default ContactData;
