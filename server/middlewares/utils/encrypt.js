const crypto = require('crypto');

// 문자열을 암호화
const secret = process.env.TOKEN_SECRET;
const algorithm = 'aes-256-cbc'; //32 bytes
const key = crypto.scryptSync(secret, 'salt', 32);
const iv = Buffer.alloc(16, 0);

const encrypt = (text = '') => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

module.exports = { encrypt };
