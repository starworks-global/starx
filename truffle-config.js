/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const Web3 = require("web3");
const web3 = new Web3();
 const infuraKey = "ad56d921f50e43b2af4e03352126b45c";
 const privKey = "38177e32346916873d807097f7f0a9ab6e70a3b85a6c5cbdab569fce3cb86a11"; 
 const mnemonic = "mammal prefer rough convince pool purity target screen festival finish hold final";//"mammal prefer rough convince pool purity target screen festival finish hold final";
 const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: '127.0.0.1',
      port: '7545',
      network_id: "*"
      },
      rinkeby: {
        provider: () => new HDWalletProvider(privKey, `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`),
        network_id: 4,      // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200, 
        networkCheckTimeout: 1000000,
        gas: 6800000,
        gasPrice: 5000000000,
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.5.3",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
