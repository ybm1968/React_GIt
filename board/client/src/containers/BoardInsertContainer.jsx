import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardInsertForm from '../components/BoardInsertForm'


const BoardInsertContainer = () => {

    const navigate = useNavigate()

    const onInsert = async (title, wirter, content) => {
        try {
            const response = await boards.insert(title, wirter, content)

            alert('등록 완료')
            console.log(response.data);

            // ➡ 게시글 목록 이동
            navigate('/boards')
        } catch (e) {
            console.log(e);
        }
    }

    return <BoardInsertForm onInsert={onInsert} />
}

export default BoardInsertContainer