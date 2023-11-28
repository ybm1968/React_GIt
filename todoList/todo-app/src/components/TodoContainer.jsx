import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import '../css/TodoContainer.css'

const TodoContainer = () => {
   
  return (
    <div className='container'>
      <TodoHeader />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  )
}

export default TodoContainer