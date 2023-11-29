import React from 'react'

const TodoInput = ({onSubmit, input, onChange}) => {
  return (
    <div>
        <form className='form'>
            <input placeholder='할 일 입력' className='input' onChange={onChange} value={input}/>
            <button type='button' onClick={onSubmit} className='btn'>추가</button>
        </form>
    </div>
  )
}

export default TodoInput