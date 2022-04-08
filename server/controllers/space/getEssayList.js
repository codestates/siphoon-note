// [+ Refactor로 Diary 컴포넌트 렌더링에 필요한 서버 컴포넌트를 만들어 볼 것]

// essayList: [
//   {
//     essayId: 0,
//     content: 'string',
//     tags: ['string'],
//     isDeleted: false,
//     isPublic: false,
//     createdAt: '2022-04-01',
//     updatedAt: '2022-04-01',
//   },

// 1. userId 구하기
const { getUserIdFromToken } = require('../../middlewares/user');

// 2. userId로 userInfo 객체 만들기
const { getUserInfo } = require('../users'); // 클라이언트 "컴포넌드" 별로 만들었다면 다른 컨트롤러 모듈을 가져오지 않아도 되겠다는 생각이 들었음
// 2-1) 여기에서 가져온 userInfo 중 pw, refToken 등은 제거하고 필요환 항목만 남길 것

// 3. 구한 userId로 모든 글 목록 중 is_deleted 가 false인 글만 20개 가져오기

// 4. 각 글에 연결된 tagList도 함께 조회

// 5. userId로 record 테이블의 모든 정보 조회

// 6. inspiration 목록에서 id === dd와 같은 '오늘의 단어' 가져오기

// 7. markList 가져오기

// 8. 1 ~ 7를 취합한 데이터를 응답 객체로 반환

module.exports = { getEssayList };
