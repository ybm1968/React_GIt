const express = require('express')
const Sequelize = require('sequelize');             // ✅ Sequelize 추가
const Todo = require('../models/todo')            // ✅ todo 모델 import
const router = express.Router()

// 👩‍💻 게시글 목록
router.get('', async (req, res) => {

    console.log('게시글 목록...');
    let todoList = []
    try {
        todoList = await Todo.findAll()           // ✅ 전체 데이터 조회
    } catch (error) {
        console.log(error);
    }

    // console.log(todoList);
    res.json(todoList)
})


// 👩‍💻 게시글 등록
router.post('', async (req, res) => {
    console.log('게시글 등록 : ' + req.body);
    // 구조분해할당
    const { name, status } = req.body;
    const newTodo = { name, status };

    let result = 0
    try {
        result = await Todo.create(newTodo)           // 새로 생성된 no를 응답 받아서 setNo 해줘야함

        const latestPost = await Todo.findOne({
            attributes: [
              [Sequelize.fn('max', Sequelize.col('no')), 'latestPostNumber']
            ],
            raw: true,
        });
        let no = latestPost.latestPostNumber
        console.log("latestPostNumber : " + no);

        tmpTodo = { ...newTodo, no }
        console.log("tmpTodo : " + tmpTodo);
        console.log(tmpTodo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }

    console.log(`등록 result : ${result}`);
    res.json(tmpTodo)
});

// 👩‍💻 게시글 수정
router.put('/', async (req, res) => {
    console.log('게시글 수정 : ' + req.body);
    const { no, name, status } = req.body;
    console.log("staus : " + status);
    
    let result = 0
    if ( no == -1) {
        try {
            result = await Todo.update({
                status : status == 0 ? 1 : 0,
                upd_date: Sequelize.literal('now()')
            }, {
                where: {}
            })
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    } else {
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
    }

    console.log(`수정 result : ${result}`);
    res.status(200).send('Update Result')
});

// 👩‍💻 게시글 삭제
router.delete('/:id', async (req, res) => {
    console.log('게시글 삭제...');
    const id = req.params.id;

    let result = 0
    if ( id == -1 ) {
        try {
            result = await Todo.destroy({
                where: { }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    } else {
        try {
            result = await Todo.destroy({
                where: { no : id }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }

    console.log(`삭제 result : ${result}`);
    res.status(200).send('Destroy Result')
});
  




module.exports = router;
  