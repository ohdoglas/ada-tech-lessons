const crypt = require('node:crypto')

const key = crypt.randomBytes(12).toString('base64');
const key2 = crypt.randomBytes(12).toString('hex');

console.log(key);
console.log(key2);

const uuid = crypt.randomUUID();
console.log(uuid);

//! AS SSH (public and private key with relationship)
const { privateKey, publicKey } = crypt.generateKeyPairSync('rsa', { modulusLength: 2048 });
console.log(privateKey);
console.log(publicKey);

