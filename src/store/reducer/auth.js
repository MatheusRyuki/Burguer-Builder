import * as actions from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: null,
    authRedirectPath: '/'
};

const  setAuthRedirect = (state, action) => {
    return updateObject(state, {
        authRedirectPath: action.path
    });
};

const authStart = (state, action ) => {
    return updateObject(state, {
        error: null, 
        loading: true});
};

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
};

const authSucess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTH_START: return authStart(state, action)
        case actions.AUTH_SUCCESS: return authSucess(state, action)
        case actions.AUTH_FAIL: return authFail(state, action)
        case actions.AUTH_LOGOUT: return authLogout(state, action)
        case actions.SET_AUTH_REDIRECT_PATH: return setAuthRedirect(state, action)
        default:  return state;
    }
};

export default reducer;