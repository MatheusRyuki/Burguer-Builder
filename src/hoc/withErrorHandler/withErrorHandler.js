import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Hoc/Hoc';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentDidMount () {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    errorHandler = () => {
      this.setState({error: null});
    }

      render () {
        return (
          <Aux>
            <Modal
              show={this.state.error}
              clicked={this.errorHandler}>
              {this.state.error ? this.state.error.message : null}
            </Modal>
            <WrappedComponent {...this.props} />
          </Aux>
        )
      }
  }
}

export default withErrorHandler;
