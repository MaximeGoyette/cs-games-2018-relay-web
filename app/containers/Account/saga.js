import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../api/request';
import { errorAction, successAction } from '../../asyncDisplayer/containers/actions';
import { LOAD_ACCOUNTS } from './constants';

export function* fetchAccounts(url, data) {
  try {
    const wallets = yield call(request, url, data);
    yield put(successAction(LOAD_ACCOUNTS, wallets));
  } catch (err) {
    yield put(errorAction(LOAD_ACCOUNTS, err));
  }
}

export function* getAccounts(data) {
  yield fetchAccounts('/api/accounts', data);
}

export default function* instrumentResultData() {
  yield takeLatest(LOAD_ACCOUNTS, getAccounts);
}
