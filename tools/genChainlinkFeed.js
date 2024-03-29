const fs = require('fs');

const chainId = 56;
const native =  "BNB";

// https://docs.chain.link/docs/ethereum-addresses
// https://docs.chain.link/docs/binance-smart-chain-addresses
// let feeds = fs.readFileSync(process.argv[2], "utf8");
let feeds = `
AAPL / USD	8	0xb7Ed5bE7977d61E83534230f3256C021e0fae0B6
ADA / BNB	18	0x2d5Fc41d1365fFe13d03d91E82e04Ca878D69f4B
ADA / USD	8	0xa767f745331D267c7751297D982b050c93985627
ALPHA / BNB	18	0x7bC032A7C19B1BdCb981D892854d090cfB0f238E
AMZN / USD	8	0x51d08ca89d3e8c12535BA8AEd33cDf2557ab5b2a
ARKK / USD	8	0x234c7a1da64Bdf44E1B8A25C94af53ff2A199dE0
ATOM / USD	8	0xb056B7C804297279A9a673289264c17E6Dc6055d
AUTO / USD	8	0x88E71E6520E5aC75f5338F5F0c9DeD9d4f692cDA
BAND / BNB	18	0x3334bF7ec892Ca03D1378B51769b7782EAF318C4
BCH / BNB	18	0x2a548935a323Bb7329a5E3F1667B979f16Bc890b
BCH / USD	8	0x43d80f616DAf0b0B42a928EeD32147dC59027D41
BIDU / USD	8	0xb9344e4Ffa6d5885B2C5830adc27ddF3FdBF883c
BNB / USD	8	0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE
BTC / ARS	8	0x26C31ac71010aF62E6B486D1132E266D6298857D
BTC / BNB	18	0x116EeB23384451C78ed366D4f67D5AD44eE771A0
BTC / USD	8	0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf
BUSD / BNB	18	0x87Ea38c9F24264Ec1Fff41B04ec94a97Caf99941
BUSD / USD	8	0xcBb98864Ef56E9042e7d2efef76141f15731B82f
BZRX / USD	8	0xFc362828930519f236ad0c8f126B7996562a695A
CAKE / BNB	18	0xcB23da9EA243f53194CBc2380A6d4d9bC046161f
CAKE / USD	8	0xB6064eD41d4f67e353768aA239cA86f4F73665a1
CFX / USD	8	0xe3cA2f3Bad1D8327820f648C759f17162b5383ae
COIN / USD	8	0x2d1AB79D059e21aE519d88F978cAF39d74E31AEB
COMP / USD	8	0x0Db8945f9aEf5651fa5bd52314C5aAe78DfDe540
CREAM / BNB	18	0x6f55DFAf098a813d87BB4e6392275b502360Bb9D
DAI / BNB	18	0x8EC213E7191488C7873cEC6daC8e97cdbAdb7B35
DAI / USD	8	0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA
DF / USD	8	0x1b816F5E122eFa230300126F97C018716c4e47F5
DOGE / USD	8	0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8
DOT / BNB	18	0xBA8683E9c3B1455bE6e18E7768e8cAD95Eb5eD49
DOT / USD	8	0xC333eb0086309a16aa7c8308DfD32c8BBA0a2592
EOS / BNB	18	0xed93F3764334788f2f6628b30e505fe1fc5d1D7b
EOS / USD	8	0xd5508c8Ffdb8F15cE336e629fD4ca9AdB48f50F0
ETH / BNB	18	0x63D407F32Aa72E63C7209ce1c2F5dA40b3AaE726
ETH / USD	8	0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e
EUR / USD	8	0x0bf79F617988C472DcA68ff41eFe1338955b9A80
FIL / USD	8	0xE5dbFD9003bFf9dF5feB2f4F445Ca00fb121fb83
GOOGL / USD	8	0xeDA73F8acb669274B15A977Cb0cdA57a84F18c2a
JPY / USD	8	0x22Db8397a6E77E41471dE256a7803829fDC8bC57
LINA / USD	8	0x38393201952f2764E04B290af9df427217D56B41
LINK / BNB	18	0xB38722F6A608646a538E882Ee9972D15c86Fc597
LINK / USD	8	0xca236E327F629f9Fc2c30A4E95775EbF0B89fac8
LTC / BNB	18	0x4e5a43A79f53c0a8e83489648Ea7e429278f8b2D
LTC / USD	8	0x74E72F37A8c415c8f1a98Ed42E78Ff997435791D
ONT / USD	8	0x887f177CBED2cf555a64e7bF125E1825EB69dB82
PACB / USD	8	0xe9bEC24f14AB49b0a81a482a4224e7505d2d29e9
PAXG / USD	8	0x7F8caD4690A38aC28BDA3D132eF83DB1C17557Df
QQQ / USD	8	0x9A41B56b2c24683E2f23BdE15c14BC7c4a58c3c4
RAMP / USD	8	0xD1225da5FC21d17CaE526ee4b6464787c6A71b4C
SOL / USD	8	0x0E8a53DD9c13589df6382F13dA6B3Ec8F919B323
SPCE / USD	8	0xC861a351b2b50985b9061a5b68EBF9018e7FfB7b
SPY / USD	8	0xb24D1DeE5F9a3f761D286B56d2bC44CE1D02DF7e
SXP / USD	8	0xE188A9875af525d25334d75F3327863B2b8cd0F1
TRX / USD	8	0xF4C5e535756D11994fCBB12Ba8adD0192D9b88be
TSLA / USD	8	0xEEA2ae9c074E87596A85ABE698B2Afebc9B57893
TWT / BNB	18	0x7E728dFA6bCa9023d9aBeE759fDF56BEAb8aC7aD
UNI / USD	8	0xb57f259E7C24e56a1dA00F66b55A5640d9f9E7e4
USDC / BNB	18	0x45f86CA2A8BC9EBD757225B19a1A0D7051bE46Db
USDC / USD	8	0x51597f405303C4377E36123cBc172b13269EA163
USDT / BNB	18	0xD5c40f5144848Bd4EF08a9605d860e727b991513
USDT / USD	8	0xB97Ad0E74fa7d920791E90258A6E2085088b4320
VAI / USD	8	0x058316f8Bb13aCD442ee7A216C7b60CFB4Ea1B53
WING / USD	8	0xf7E7c0ffCB11dAC6eCA1434C67faB9aE000e10a7
WOO / USD	8	0x02Bfe714e78E2Ad1bb1C2beE93eC8dc5423B66d4
WTI / USD	8	0xb1BED6C1fC1adE2A975F54F24851c7F410e27718
XAG / USD	8	0x817326922c909b16944817c207562B25C4dF16aD
XAU / USD	8	0x86896fEB19D8A607c3b11f2aF50A0f239Bd71CD0
XRP / BNB	18	0x798A65D349B2B5E6645695912880b54dfFd79074
XRP / USD	8	0x93A67D414896A280bF8FFB3b389fE3686E014fda
XTZ / BNB	18	0x8264d6983B219be65C4D62f1c82B3A2999944cF2
XTZ / USD	8	0x9A18137ADCF7b05f033ad26968Ed5a9cf0Bf8E6b
XVS / USD	8	0xBF63F430A79D4036A5900C19818aFf1fa710f206
YFI / BNB	18	0xF841761481DF19831cCC851A54D8350aE6022583
YFI / USD	8	0xD7eAa5Bf3013A96e3d515c055Dbd98DbdC8c620D
YFII / USD	8	0xC94580FAaF145B2FD0ab5215031833c98D3B77E4
`;
feeds = feeds.trim().split('\n');
console.log(feeds.length);

// http://tokens.1inch.eth.link/
// https://github.com/pancakeswap/pancake-swap-interface/blob/master/src/constants/token/pancakeswap.json
// ["tokenlist1.json","tokenlist2.json"]
// let tokenlist = [process.argv[3]].map(e=>{return JSON.parse(fs.readFileSync(e, "utf8")).tokens;}).reduce((a,b)=>{return [...a,...b]},[]);
let tokenlist = fs.readdirSync('./tools/tokens/').filter(e=>e.endsWith(".json")).map(e=>{return JSON.parse(fs.readFileSync('./tools/tokens/'+e, "utf8")).tokens;}).reduce((a,b)=>{return [...a,...b]},[]);
console.log(tokenlist.length);

let a=0,b=0,c=0;
for (let i = 0 ; i < feeds.length ; i++) {
    let price = feeds[i].match(/([0-9a-zA-Z ]+)\s\/\s([0-9a-zA-Z]+)\s*([0-9]+)\s*(0x[0-9a-fA-F]{40})/);
    if (price && price[2] == native) {
        let token = price[1];
        let decimals = price[3];
        let feed = price[4];
        let e = tokenlist.filter(e=>(e.chainId==chainId&&(
            e.symbol.toLowerCase()==token.toLowerCase()
            // || e.symbol.toLowerCase()==token.toLowerCase()+".e"
            // || e.symbol.toLowerCase()=="w"+token.toLowerCase()
            // || e.symbol.toLowerCase()=="w"+token.toLowerCase()+".e"
        )));

        if (e.length == 0) {
            console.log(`// ${token} not found`);
            a++;
        } else if (e.length == 1) {
            // let address = e[0].address.toLowerCase().slice(2);
            // const addressHash = require('js-sha3').keccak256(address);
            // address = "0x" + address.split("").map((e,i)=>{return parseInt(addressHash[i], 16) > 7 ? e.toUpperCase() : e}).join('');
            let address = require("web3-utils").toChecksumAddress(e[0].address);

            console.log(`priceFeedAddresses[${address}] = ${feed}; // ${e[0].symbol}`);
            // console.log(`priceFeedDecimals[${address}] = ${decimals}; // ${e[0].symbol}`);
            // console.log(`decimals[${address}] = ${e[0].decimals}; // ${e[0].symbol}`);
            b++;
        } else {
            console.log(token + " has more than one tokens ", e);
            let seen = [];
            for (let i = 0 ; i < e.length ; i++){
                if (!seen.includes(e[i].address.toLowerCase())) {
                    seen.push(e[i].address.toLowerCase());
                    address = require("web3-utils").toChecksumAddress(e[i].address);

                    console.log(`priceFeedAddresses[${address}] = ${feed}; // ${e[i].symbol}`);
                    // console.log(`priceFeedDecimals[${address}] = ${decimals}; // ${e[i].symbol`);
                    // console.log(`decimals[${address}] = ${e[0].decimals}; // ${e[i].symbol}`);
                    b++;
                } else {
                    c++;
                }
            }
        }
    }
}
console.log(a,b,c)