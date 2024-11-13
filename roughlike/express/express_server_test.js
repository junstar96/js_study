import express from 'express';
import { router } from './router/express_test.js';
import { router_news } from './router/news.js';

// express모듈은 기존에 제공되는 http 모듈을 확장시킨 것.
// 현재는 기존의 http 모듈은 잘 사용하지 않음.

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', [router, router_news])


app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});