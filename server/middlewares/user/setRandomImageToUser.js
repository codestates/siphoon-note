// 프로필 이미지용 랜덤 정수 추출 후 새 유저에게 부여(0 ~15)
module.exports = () => {
  const randomImageIdx = Math.floor(Math.random() * 16);
  return randomImageIdx;
};
