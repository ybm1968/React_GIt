import React from 'react'

const TodoItem = (props) => {

    const deleteTodo = () => {
      const url = "http://192.168.30.119:8080/todos/" + props.no
      const init = {
        method  : 'DELETE',
       
      }

      fetch(url, init)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data.name);
        })
        .catch(error => {
          console.error('Request failed : ', error);
        });
    }
      

    return (
      <div>
        <input type="text" value={props.name} className='todoItem' />
        <button onClick={deleteTodo} className='btn' >삭제</button>
      </div>
    )
}

export default TodoItem