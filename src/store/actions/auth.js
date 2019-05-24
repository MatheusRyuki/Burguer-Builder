import * as actions from './actions';
import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actions.AUTH_START
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate > new Date()) {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            } else {
                dispatch(logout());
            }
        }
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actions.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const logout = () => {
    return {
        type: actions.AUTH_INITIATE_LOGOUT
    };
};

export const logoutSucceed = () => {
  return { 
    type: actions.AUTH_LOGOUT
  }
};

export const checkAuthTimeout = (expirationTime) => {
    return { 
        type: actions.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
};

export const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return {
        type: actions.AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup,
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actions.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};