import express from 'express'


//익스프레스에 라우터 생성
export const router = express.Router();

//get을 받았을 때 기본적인 값을 받아오도록 만든다.
router.get('/', (req, res) => {
    res.json('default url for goods.js GET Method');
  });
  
  // localhost:3000/api/about GET
  router.get('/about', (req, res) => {
    res.json('goods.js about PATH');
  });

  router.get('/change', (req, res) => {
    res.json('change_getter');
  });
