require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strategy radar scrub essay gloom kite slot gasp'; 
let testAccounts = [
"0x3025b48e0d86e4a00aa881a2d4c034a1bd0d07129fb5bc59c712e440235c2214",
"0xa9a81a12d18b74fe48b4bf8b505a45260ecb7792faabc1648fb92d3c9d98f5ca",
"0x580ed4c0ff64ccc255603c0512930a3b6bca141d6352f7de7abefc2d24721f8e",
"0x6cac9c30d2f328325d0478516e71b3d029305122447a669b8ecb0e4a9d502e5e",
"0x7841abbf234c36aece2f372bc5c7fea97198052743ef8d6fbcc557f896554ee9",
"0x3173f7fef902f69127c7e991a61c6a417f055ecd0d309a9e8af7605c922de9d7",
"0x5b2c7d1b9950faa9c20a043d78ffd97ab5f832fab23d6cd891af15469ad86e12",
"0x1974d281a6f75c2d74d1524e92fe81ce830405a336c37f77477abe6cc9d79eea",
"0xf77728a7f7cf9bab40dd1053cadabba9d6323b321b070dba5c06201c3f4779d0",
"0x9a83a2bc7b2a5a809ee5561709721622bdde95114a18e5cd38f6f356bfe3223e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


