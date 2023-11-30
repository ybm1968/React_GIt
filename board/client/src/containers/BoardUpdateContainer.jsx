import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardUpdateForm from '../components/BoardUpdateForm'


const BoardUpdateContainer = () => {
    const { no } = useParams()  

    const [board, setBoard] = useState([])

    const navigate = useNavigate()

    const onUpdate = async (no, title, writer, content) => {
      try {
        const response = await boards.update(no, title, writer, content)
        console.log(response.data);
        alert('수정 완료')

        // ➡ 게시글 목록 이동
        navigate('/boards')
      } catch (error) {
        
      }
    }

    const getBoard = async () => {
      try {
        const response = await boards.select(no);
        const data = await response.data
        console.log(data);
        setBoard(data)
      } catch (error) {
        console.log(error);
      }
    }

    const onDelete = async () => {
        const response = await boards.remove(no);
        console.log(response.data);
        alert('삭제완료')

        // ➡ 게시글 목록 이동
        navigate('/boards')
    }

    useEffect( () => {
      getBoard()
    }, []) 

    return (<BoardUpdateForm no={no} board={board} onUpdate={onUpdate} onDelete={onDelete} />)
}

export default BoardUpdateContainer