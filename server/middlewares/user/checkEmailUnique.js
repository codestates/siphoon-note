// arguments: email = ''이 db에 저장되어 있는 이메일인지 확인
const { findEmail } = require('../../models');

const checkEmailUnique = async email => {
  // + 여기서 찾은 메일을 알려주면서 ***@로 가입되었따고 알려줄 수 있음
  try {
    const isExist = await findEmail(email);
    return isExist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = checkEmailUnique;
