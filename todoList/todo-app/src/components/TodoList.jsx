import React from 'react'
import { useState } from 'react';
import TodoItem from './TodoItem';
import { useEffect } from 'react';

const TodoList = () => {

    const [todoList, setTodoList] = useState([])

    const url = "http://192.168.30.119:8080/todos"

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const data = await response.json();
              console.log(data);
              setTodoList(data);
          } catch (error) {
              console.error('Request failed:', error);
          }
      };

      fetchData();
    }, []);
      
    return (
      <div className='todoList'>
        {
          todoList.map((todo) => {
            return <TodoItem name={todo.name} no={todo.no}/>
          })
        }
      </div>
    )
}

export default TodoList