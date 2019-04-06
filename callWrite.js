const Mallet = require('@iohk/mallet/lib/mallet.js');
const path = require('path');
const os = require('os');
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

const callWrite = async () => {    
    mallet.selectAccount('0x4ba65c6d3a89e51bb7696507786d678f25798eb4');
    const password = 'samid oitesarp';
    const fName = 'write(string)';
    const args = ['We are Emurgo !!!'];
    const types = ['string'];
    const encodedArgs = args.map((v, i) => mallet.iele.enc(v, types[i]));
    const txCallFunc = {to: '0xc1f6c1b326de576706bed41a6f9a0765ec08c18d', value: 0, gas: 1000000, func: fName, args: encodedArgs};
    const calledFunction = mallet.iele.callContract(txCallFunc, password);
    const callReceipt = awaitReceipt(calledFunction);
    console.log(callReceipt);
};
callWrite();