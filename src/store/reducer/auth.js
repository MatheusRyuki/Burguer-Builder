import * as actions from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: null
};

const authStart = (state, action ) => {
    return updateObject(state, {error: null, loading: true});
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

const reducer = (state, action) => {
    switch (action.type) {
        case actions.AUTH_START: return authStart(state, action);
        case actions.AUTH_SUCCESS: return authSucess(state, action)
        case actions.AUTH_FAIL: return authFail(state, action)
        default:  return state;
    }
};

export default reducer;