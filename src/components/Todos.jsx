import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {
  return (
   <div className="container">
      <h3 className="text-center my-3 ">Todos List </h3>
      {props.todos.length===0 ? <> 
         <h5 className="text-center">"Sare kaaam khatam ho gaye Bhagwan G !!"</h5>
         <h5 className="text-center" >FINALLY VAIIIIII</h5>
         <h5 className="text-center" >RO HI DUNGA MAI TOH AAAAJ</h5> 
      </> :
         props.todos.map((todo)=>{
         return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })}
      
   </div>
  )
}

export default Todos
