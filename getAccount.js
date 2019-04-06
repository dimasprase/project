const Mallet = require('@iohk/mallet/lib/mallet.js');
const path = require('path');
const os = require('os');

const mallet = new Mallet('iele', path.join(os.homedir()));

const getAccount = async () => {
    const getBalance = mallet.getBalance('0x4ba65c6d3a89e51bb7696507786d678f25798eb4');
    console.log(getBalance);
};

getAccount();