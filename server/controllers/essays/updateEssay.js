// patch('/essays/:essayId', essayCtrl.updateEssay);
// patch(`/trashes/:essayId`, essayCtrl.updateEssay);
// Q. 이렇게 되면 클라이언트도 하나의 경로로 요청을 보내는게 좋을까?
//-> essays.content, is_public, essays.is_deleted 수정

// req.params.essayId
// req.cookies.Bearer

// {
//   "status": 200,
//   "message": "Susscessfully updated the essay!",
//   "data": {
//     "essayId": 0,
//     "content": "string",
//     "tags": [
//       "string"
//     ],
//     "isDeleted": false,
//     "isPublic": false,
//     "createdAt": "2022-04-01",
//     "updatedAt": "2022-04-01"
//   }
// }
