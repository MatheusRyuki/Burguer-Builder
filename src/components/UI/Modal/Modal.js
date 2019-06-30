import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Hoc/HOC';
import Backdrop from '../Backdrop/Backdrop';


const modal = props => {
    return (
      <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
        style={
          props.show
            ? { transform: "translateY(0)", opacity: "1" }
            : { transform: "translateY(-100vh)", opacity: "0" }
        }
        className={classes.Modal}>
        {props.children}
      </div>
      </Aux>
    )
};

export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show &&
nextProps.children === prevProps.children);
