require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pull install glide fortune typical'; 
let testAccounts = [
"0x365c94244bd398eaeb7e6d95e65dcb12b98b3d460b65a5fbbaa1b22dbd41a76d",
"0x8ae482538d366980e3f7e0cefde4351936be7d220b536c3328cb227d92a83322",
"0x2727ab586cb1b240ad2950f2ddc5014a7188ab4a553d5de8c9a8b20bdd615627",
"0xcb24ea3e789c091928f7a92b27a07d6c5f28fb0678084d91bdb95e40d4ab1b1a",
"0xd5fae063ce25532a418a8f239923ee5c57826edf089ac35e634801c10dfb02b6",
"0x2ae76162b1b20a6f679deace26b3445237ff653cb25f563bef0ed1525a32e024",
"0x0105e829f419c83fda33a405b6c4f6d63eb673d38bc8287df72f2b777d60fb8c",
"0xdfef9b669b2e1a7ca952060ad58e728a489db50201244809ce8f22c309911d40",
"0x3231ac46a7efb13f926ddbeec468abdc774af0670ed391c82f48365738ca183f",
"0x41d0f6af5ba0f3d82ccc571419002b3bc26896cd799b1bb7bee78a43b6d693b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
