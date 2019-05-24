import { takeEvery } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga } from './auth';
import * as actionsTypes from '../actions/actions';

export function* watchAuth() {
  yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}