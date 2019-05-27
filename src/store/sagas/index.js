import { takeEvery } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngredientSaga } from './burguerBuilder';
import * as actionsTypes from '../actions/actions';

export function* watchAuth() {
  yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionsTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionsTypes.AUTH_CHECK_STATE, authCheckStateSaga)
}

export function* watchBurguerBuilder() {
  yield takeEvery(actionsTypes.INIT_INGREDIENTS, initIngredientSaga)
}