import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actions';

function* logout(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put ({
    type: actions.AUTH_LOGOUT
  });
}