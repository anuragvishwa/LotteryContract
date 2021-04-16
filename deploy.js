const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');  

const provider = new HDWalletProvider('notable negative will boost then clown satoshi kiss elephant monkey deputy food','https://rinkeby.infura.io/v3/70254f6ee5c34db99bbc6b732b0c4b4e');

const web3 = new Web3(provider);

const deploy = async() =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode}).send({gas:'300000',from:accounts[0]});

    console.log('Contract deployed to',result.options.address);
};

deploy();

