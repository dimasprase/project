const Mallet = require('@iohk/mallet/lib/mallet.js');
const path = require('path');
const os = require('os');
const util = require('util');

const mallet = new Mallet('iele', path.join(os.homedir()));

module.exports = mallet.iele.compile('contracts/readwrite.sol');