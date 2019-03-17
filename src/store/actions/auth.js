import * as actions from './actions';
import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actions.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actions.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyATH5FKwUXe6WuL_jvwFnEHUSRwZz-TEzI'
        if(!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyATH5FKwUXe6WuL_jvwFnEHUSRwZz-TEzI'
        }
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                dispatch(authFail(err));
            });
    };
};