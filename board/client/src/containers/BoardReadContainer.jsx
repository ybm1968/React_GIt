import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardRead from '../components/BoardRead'

const BoardReadContainer = () => {
    const { no } = useParams()  

    const [board, setBoard] = useState({});

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

    useEffect( () => {
      getBoard()
    }, []) 

    return <BoardRead no={no} board={board} />
}

export default BoardReadContainer