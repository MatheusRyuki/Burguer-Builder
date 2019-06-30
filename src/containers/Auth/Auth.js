import React, { useState, useEffect } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { Redirect } from 'react-router-dom';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../shared/utility';

const auth = props => {
     const [authForm, setAuthForm] = useState({
            email: {
                elementType: 'input',
                elementConfig: {
                  type: 'email',
                  placeholder: 'Seu E-mail'
                },
                value: '',
                validation: {
                  required: true,
                  isEmail: true
                },
                valid: false,
                touched: false
              },
            senha: {
                elementType: 'input',
                elementConfig: {
                  type: 'password',
                  placeholder: 'Sua Senha'
                },
                value: '',
                validation: {
                  required: true,
                  minLength: 6
                },
                valid: false,
                touched: false
            },
        });

    const [isSignup, setIsSignUp] = useState(true);

    const switchAuthModeHandler = () => {
      setIsSignUp(!isSignup);
    };
    
     const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(authForm,{
          [controlName]: updateObject(authForm[controlName], {
            value: event.target.value,
            valid: checkValidity(event.target.value, authForm[controlName].validation),
            touched: true
          })
        });
        setAuthForm(updatedControls);
      }
      
      const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value, authForm.senha.value, isSignup)
      }

      useEffect(() => {
        if(props.building && props.authRedirectPath !== '/') {
          props.onSetAuthRedirectPath();
        }
      }, []);

        const formElementsArray = [];
      for (let key in authForm) {
        formElementsArray.push({
          id: key,
          config: authForm[key],

        });
      }

      let form = formElementsArray.map(formElement => (
        <Input 
            key={formElement.id} 
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}/>

        ));

        if(props.loading) {
          form = <Spinner/>
        }

        let errorMessage = null;

        if (props.error) {
          errorMessage = (
            <p>{props.error.message}</p>
          );
        }

        let authRedirect = null;
        if (props.isAuthenticated === true) {
          authRedirect = <Redirect to={props.authRedirectPath} />
        }

        return (
            <div className={classes.Auth}>
              {authRedirect}
              {errorMessage}
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success">{isSignup ? 'CADASTRA-SE' : 'LOGIN'}</Button>
                </form>
                <Button 
                  clicked={switchAuthModeHandler}
                  btnType="Danger">MUDAR PARA {isSignup ? 'LOGIN' : 'CADASTRAR'}</Button>
            </div>
        );
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    building: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(auth);