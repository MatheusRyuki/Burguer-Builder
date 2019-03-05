import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Hoc/HOC';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
  shouldComponentUpdate (nextProps, nextState) {
      return (
        nextProps.show !== this.props.show ||
       nextProps.children !== this.props.children
     );
  }

  render() {
    return (
      <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <div
        style={
          this.props.show
            ? { transform: "translateY(0)", opacity: "1" }
            : { transform: "translateY(-100vh)", opacity: "0" }
        }
        className={classes.Modal}>
        {this.props.children}
      </div>
      </Aux>
    )
  }
};

export default Modal;
