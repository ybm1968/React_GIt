const express = require('express');

const router = express.Router();

// GET / 라우터
// router.get('/', (req, res) => {
//   console.log('index /');
//   res.render('index', { title: 'Main' });
//   res.json({'test' : '10'})
// });

// // 로그인
// router.get('/login', (req, res) => {
//   res.render('login', { title: 'Login' });
// });

// // 회원가입
// router.get('/join', (req, res) => {
//   res.render('join', { title: 'Join' });
// });

module.exports = router;

