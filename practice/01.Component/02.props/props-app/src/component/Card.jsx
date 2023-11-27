import React from 'react'

const Card = (pros) => {
  return (
    <div className='card'>
        <h3>{pros.title}</h3>
        <h3>{pros.content}</h3>
    </div>
  )
}

export default Card