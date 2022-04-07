const crypto = require('crypto');

// 암호화된 문자열 해독
const secret = process.env.TOKEN_SECRET;
const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync(secret, 'salt', 32);
const iv = Buffer.alloc(16, 0);

const decrypt = (text = '') => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};

module.exports = { decrypt };
