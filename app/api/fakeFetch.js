import wallets from './wallets.json';
import account from './account.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    // ugly hack to create immutable copy of file.
    const walletsCopied = JSON.parse(JSON.stringify(wallets));
    const accountsCopied = JSON.parse(JSON.stringify(account));
    switch (urlGetter) {
      case '/api/wallets':
        switch (true) {
          default:
            return walletsCopied;
        }
      case '/api/accounts':
        switch (true) {
          default:
            return accountsCopied;
        }

      case '/api/wallets/flying-penguin:':
        switch (true) {
          default: {
            const accountWallets = [];
            for (const w in walletsCopied) {
              if (w.username === 'flying-penguin') {
                accountWallets.push(w);
              }
            }
            return accountWallets;
          }
        }
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
