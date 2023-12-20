const express = require('express')
const Sequelize = require('sequelize');             // ✅ Sequelize 추가
const Todo = require('../models/todo')            // ✅ todo 모델 import
const router = express.Router()

// 👩‍💻 게시글 목록
router.get('/', async (req, res) => {
    console.log('게시글 목록...');
    let todoList = []
    try {
        todoList = await Todo.findAll()           // ✅ 전체 데이터 조회
    } catch (error) {
        console.log(error);
    }

    // console.log(todoList);
    res.render('todo/list', {todoList} )
})



// 👩‍💻 게시글 등록
router.get('/insert', (req, res) => {
    console.log('게시글 등록 화면...');
    res.render('todo/insert')
})



// 👩‍💻 게시글 등록
router.post('/', async (req, res) => {
    console.log('게시글 등록...');
    // 구조분해할당
    const { title, writer, content } = req.body;
    const newTodo = { title, writer, content };

    let result = 0
    try {
        result = await Todo.create(newTodo)           // ✅ 데이터 등록
    } catch (error) {
        console.log(error);
    }

    console.log(`등록 result : ${result}`);
    res.redirect('/todo');
});

// 👩‍💻 게시글 수정 페이지
router.get('/update/:id', async (req, res) => {
    console.log('게시글 수정 화면...');
    console.log(`id : ${req.params.id}`);
    let id = req.params.id
    let todo = await Todo.findByPk(id)
    res.render('todo/update', { todo, id });
});

// 👩‍💻 게시글 수정
router.post('/update', async (req, res) => {
    console.log('게시글 수정...');
    const { id, title, writer, content } = req.body;

    let result = 0
    try {
        result = await Todo.update({
            title: title,
            writer: writer,
            content: content,
            upd_date: Sequelize.literal('now()')
        }, {
            where: {todo_no: id}
        })
    } catch (error) {
        console.log(error);
    }
    console.log(`수정 result : ${result}`);
    res.redirect(`/todo/${id}`);
});

// 👩‍💻 게시글 삭제
router.post('/delete', async (req, res) => {
    console.log('게시글 삭제...');
    const id = req.body.id;

    let result = 0
    try {
        result = await Todo.destroy({
            where: { todo_no : id }
        })
    } catch (error) {
        console.log(error);
    }
    console.log(`삭제 result : ${result}`);

    res.redirect('/todo');
});
  

// 👩‍💻 게시글 읽기
// 요청 경로에 파라미터 매핑 방법 ➡ '/:파라미터명'
router.get('/:id', async (req, res) => {
    console.log('게시글 읽기 화면...');
    console.log(`id : ${req.params.id}`);
    let id = req.params.id
    let todo = await Todo.findByPk(id)
    console.log(todo);
    res.render('todo/read', {todo, id})
})


module.exports = router;
  