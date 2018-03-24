import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles/index';

import { createStructuredSelector } from 'reselect';
import { createWallet, depositeToWallet, displayWallets, showCurrenyAndAmountWallet, totalValueWalletsByAccount, tradePriceWallet, loadAccounts } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { ACCOUNTS } from './constants';
import reducer from './reducer';
import saga from './saga';
import { selectAccounts, makeSelectAccounts } from './selectors';
import { makeSelectLoading } from '../../asyncDisplayer/containers/IsLoading/selectors';
import { makeSelectError } from '../../asyncDisplayer/containers/HasError/selectors';
import LoadingError from '../../asyncDisplayer/components/LoadingError';


const styles = () => ({
  test: {
    border: '2px solid',
  },
});

class Wallet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <button onClick={this.props.onLoadAccounts} className={this.props.classes.test}>
          click here to load accounts
        </button>
        <LoadingError
          loading={this.props.accountsLoading}
          error={this.props.accountsError}
          errorNode={<p>error</p>}
        >
          <div>
            {this.props.accounts.map((account, index) => (
              <div key={account.username}>
                <h3>wallet {index}:</h3>
                <div>
                  <div><span>address: </span><span>{account.address}</span></div>
                  <div><span>username: </span><span>{account.username }</span></div>
                </div>
              </div>
            ))}
          </div>
        </LoadingError>
      </div>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  accounts: makeSelectAccounts(),
  accountsLoading: makeSelectLoading(selectAccounts),
  accountsError: makeSelectError(selectAccounts),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onAccountWallets: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadAccounts());
  },
  onLoadAccounts: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadAccounts());
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSurveyReducer = injectReducer({
  key: ACCOUNTS,
  reducer,
});

const withSurveySaga = injectSaga({
  key: ACCOUNTS,
  saga,
});

export default compose(
  withSurveyReducer,
  withSurveySaga,
  withConnect,
)(withStyles(styles)(Wallet));
