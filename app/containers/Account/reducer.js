import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
    DEPOSIT_TO_WALLET,
    TRADE_PRICE_WALLET,
    TOTAL_VALUE_WALLETS_BY_ACCOUNT,
    SHOW_CURRENCY_AND_AMOUNT_WALLET,
    CREATE_WALLET,
    DISPLAY_WALLETS,
    LOAD_ACCOUNTS,
} from './constants';
import isLoadingReducer from '../../asyncDisplayer/containers/IsLoading/reducer';
import hasErrorReducer from '../../asyncDisplayer/containers/HasError/reducer';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';


export const ACCOUNTS_REDUCER_INITIAL_STATE = fromJS({
  accounts: [],

});

function accountReducer(state = ACCOUNTS_REDUCER_INITIAL_STATE, action) {
  switch (action.type) {
    case `${LOAD_ACCOUNTS}${SUCCESS}`:
      return state
      .set('accounts', fromJS(action.entity));
    case `${DEPOSIT_TO_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${TRADE_PRICE_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${TOTAL_VALUE_WALLETS_BY_ACCOUNT}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${SHOW_CURRENCY_AND_AMOUNT_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${DISPLAY_WALLETS}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    case `${CREATE_WALLET}${SUCCESS}`:
      return state
              .set('wallets', fromJS(action.entity));
    default:
      return state;
  }
}

const options = {
  action: LOAD_ACCOUNTS,
};

export default combineReducers({
  entity: accountReducer,
  isLoading: isLoadingReducer(options),
  hasError: hasErrorReducer(options),
});
