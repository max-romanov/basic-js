const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.symbols = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    message = message.toLowerCase();
    key = key.toLowerCase();
    let notChar = 0;
    for(let i = 0; i < message.length; i++) {
      if(this.symbols.indexOf(message[i]) !== -1) {
        let newPos = (this.symbols.indexOf(message[i]) + this.symbols.indexOf(key[(i - notChar) % key.length])) % 26
        result += this.symbols[newPos];
      } else {
        result += message[i];
        notChar++;
      }
    }
    result = result.toUpperCase();
    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(outStr, key) {
    if(!outStr || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    outStr = outStr.toLowerCase();
    key = key.toLowerCase();
    let notChar = 0;
    for(let i = 0; i < outStr.length; i++) {
      if(this.symbols.indexOf(outStr[i]) !== -1) {
        let newPos = (this.symbols.indexOf(outStr[i]) - this.symbols.indexOf(key[(i - notChar) % key.length]));
        if(newPos < 0) {
          newPos += 26;
        }
        result += this.symbols[newPos]; 
      } else {
        result += outStr[i];
        notChar++;
      }
    }
    result = result.toUpperCase();
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
