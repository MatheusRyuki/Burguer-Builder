import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Hoc/HOC';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    constructor (props) {
      super(props);
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    errorHandler = () => {
      this.setState({error: null});
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
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
