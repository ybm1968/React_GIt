import React from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import { useState } from 'react'
import { useEffect } from 'react'

const TodoContainer = () => {

    // state 
    const [todoList, setTodoList] = useState([]);

    // hook
    useEffect(() => {

      // Mount, Update   
      //할일 목록 요청[GET]  
      fetch('http://192.168.30.119:8080/todos')
        .then( ( response ) => response.json() )
        .then( (data) => setTodoList(data) )
        .catch( (error) => console.log(error) );

      // UnMount  
      return () => {
        
      }
    }, [])
    

    return (
        <div className='container'>
            <TodoHeader />
            <TodoInput />
            <TodoList todoList={todoList} />
            <TodoFooter />
        </div>
    )
}

export default TodoContainer