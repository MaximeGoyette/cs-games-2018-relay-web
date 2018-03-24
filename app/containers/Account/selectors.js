import { createSelector } from 'reselect';

const selectAccounts = (state) => state.get('accounts');

const makeSelectAccounts = () => createSelector(
  selectAccounts,
  (state) => state.getIn(['entity', 'accounts']).toJS()
);

export {
  selectAccounts,
  makeSelectAccounts,
};
