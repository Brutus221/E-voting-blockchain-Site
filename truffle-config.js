const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    goerli: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, 
                                   'https://goerli.infura.io/v3/' + process.env.INFURA_API_KEY)
      },
      network_id: 5, // eslint-disable-line camelcase
      gas: 4465030,
      gasPrice: 10000000000,
      // from : '0x2D86B112DEd278Cd8dA8CA29E62099Ff58E7Cfb4'
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 7545
    }
  }
 
};

