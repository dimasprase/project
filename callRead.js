const Mallet = require('@iohk/mallet/lib/mallet.js');
const path = require('path');
const os = require('os');
const mallet = new Mallet('iele', path.join(os.homedir()));

const callRead = async () => {        
    const txCallFunc = {to: '0xc1f6c1b326de576706bed41a6f9a0765ec08c18d', value: 0, gas: 1000000, func: 'read()', args: []};
    const result = mallet.iele.constantCall(txCallFunc);
    const decode = mallet.iele.dec(result[0], 'string')
    console.log(decode);
};
callRead();