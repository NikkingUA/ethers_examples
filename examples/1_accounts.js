const { ethers } = require("ethers");

const INFURA_ID = '1a1f4da3d1524d5cacc7740e38f355bf';
const address = '0x25fcc1a5C94e154Eaf6554ED934D1a03215aC431';

const main = async (infuraId, address) => {

    const provider = new ethers.provider.JsonRpcprovider(`https://mainnet.infura.io/v3/${infuraId}`);
    // Con questo faccio connesione al blockchain di etherium, creando una chiave speciale in INFURA

    const balance = await provider.getBalance();

    console.log(balance);
}

main(INFURA_ID, address);