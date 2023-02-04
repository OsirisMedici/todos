import React from 'react'

const TodoItems = ({todo}) => {
  return (
    <div>
       <h4>{todo.title}</h4>
       <p>{todo.des}</p>
    </div>
  )
}

export default TodoItems
