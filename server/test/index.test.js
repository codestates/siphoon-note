const request = require('supertest');
const app = require('../index.js');

describe('메인 서버 실행 테스트', () => {
  it('서버가 GET /에서 성공적으로 응답', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        return done();
      });
  });

  it('서버는 cross-origin 요청을 처리한다', async () => {
    const { headers } = await request(app).get('/');
    expect(headers['access-control-allow-origin']).toEqual('*');
  });
});
