import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Hoc/HOC';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
   const [error, setError] = useState(null);

      const reqInterceptor = axios.interceptors.request.use(req => {
        setError(null);
        return req;
      });

      const resInterceptor = axios.interceptors.response.use(res => res, err => {
        setError(err);
      });

    const errorHandler = () => {
      setError(null);
    }

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }
    }, [reqInterceptor, resInterceptor]);

        return (
          <Aux>
            <Modal
              show={error}
              clicked={errorHandler}>
              {error ? error.message : null}
            </Modal>
            <WrappedComponent {...props} />
          </Aux>
        )
      }
}

export default withErrorHandler;
