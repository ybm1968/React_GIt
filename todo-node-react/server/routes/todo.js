const express = require('express')
const Sequelize = require('sequelize');             // ✅ Sequelize 추가
const Todo = require('../models/todo')            // ✅ todo 모델 import
const router = express.Router()

// 👩‍💻 게시글 목록
router.get('/todos', async (req, res) => {
    console.log('게시글 목록...');
    // let todoList = []
    // try {
    //     todoList = await Todo.findAll()           // ✅ 전체 데이터 조회
    // } catch (error) {
    //     console.log(error);
    // }

    // // console.log(todoList);
    // res.json(todoList)
})



// 👩‍💻 게시글 등록
// router.get('/insert', (req, res) => {
//     console.log('게시글 등록 화면...');
//     res.render('todo/insert')
// })



// 👩‍💻 게시글 등록
router.post('/todos', async (req, res) => {
    console.log('게시글 등록 : ' + req.body);
    // 구조분해할당
    const { name, status } = req.body;
    const newTodo = { name, status };

    let result = 0
    try {
        result = await Todo.create(newTodo)           // 새로 생성된 no를 응답 받아서 setNo 해줘야함

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }

    console.log(`등록 result : ${result}`);
    res.json(newTodo)
});

// 👩‍💻 게시글 수정 페이지
// router.get('/update/:id', async (req, res) => {
//     console.log('게시글 수정 화면...');
//     console.log(`id : ${req.params.id}`);
//     let id = req.params.id
//     let todo = await Todo.findByPk(id)
//     res.render('todo/update', { todo, id });
// });

// 👩‍💻 게시글 수정
router.put('/todos', async (req, res) => {
    console.log('게시글 수정 : ' + req.body);
    const { no, name, status } = req.body;

    let result = 0
    try {
        result = await Todo.update({
            nmae : name,
            status : status,
            upd_date: Sequelize.literal('now()')
        }, {
            where: {no : no}
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
    console.log(`수정 result : ${result}`);
    res.status(200).send('Update Result')
});

// 👩‍💻 게시글 삭제
router.delete('/todos/:id', async (req, res) => {
    console.log('게시글 삭제...');
    const id = req.params.id;

    let result = 0
    try {
        result = await Todo.destroy({
            where: { no : id }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
    console.log(`삭제 result : ${result}`);

    res.status(200).send('Destroy Result')
});
  

// 👩‍💻 게시글 읽기
// 요청 경로에 파라미터 매핑 방법 ➡ '/:파라미터명'
router.get('/todos/:id', async (req, res) => {
    console.log('게시글 읽기 화면...');
    console.log(`id : ${req.params.id}`);
    let id = req.params.id
    let todo = await Todo.findByPk(id)
    console.log(todo);
    res.json(todo)
})


module.exports = router;
  