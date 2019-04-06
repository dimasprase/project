const Mallet = require('@iohk/mallet/lib/mallet.js');
const path = require('path');
const os = require('os');
const compiled = require('./compile');
const sleep = require('sleep');
const mallet = new Mallet('iele', path.join(os.homedir()));

function awaitReceipt(hash) {
    let h = hash;
    let rec = mallet.getReceipt(h);
    if (rec) {
      return rec;
    } else {
      console.log("awaiting receipt for " + h);
      sleep.sleep(5);
      return awaitReceipt(h);
    }
}

const deploy = async () => {    

    mallet.selectAccount('0x4ba65c6d3a89e51bb7696507786d678f25798eb4');
    const tx = {gas: 1000000, value: 0, code: compiled.bytecode, args: []}
    const password = 'samid oitesarp';
    const deployedContract = await mallet.iele.deployContract(tx, password);
    const callReceipt = awaitReceipt(deployedContract);
    console.log(callReceipt);
};
deploy();