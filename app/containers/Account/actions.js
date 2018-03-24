import {
    CREATE_WALLET, DEPOSIT_TO_WALLET, DISPLAY_WALLETS, LOAD_ACCOUNTS, SHOW_CURRENCY_AND_AMOUNT_WALLET,
    TOTAL_VALUE_WALLETS_BY_ACCOUNT, TRADE_PRICE_WALLET,
} from './constants';

export const loadAccounts = () => ({
  type: LOAD_ACCOUNTS,
});

export const createWallet = () => ({
  type: CREATE_WALLET,
});

export const depositeToWallet = () => ({
  type: DEPOSIT_TO_WALLET,
});

export const displayWallets = () => ({
  type: DISPLAY_WALLETS,
});

export const showCurrenyAndAmountWallet = () => ({
  type: SHOW_CURRENCY_AND_AMOUNT_WALLET,
});

export const totalValueWalletsByAccount = () => ({
  type: TOTAL_VALUE_WALLETS_BY_ACCOUNT,
});

export const tradePriceWallet = () => ({
  type: TRADE_PRICE_WALLET,
});

