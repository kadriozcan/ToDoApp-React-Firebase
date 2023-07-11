import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style={
    li: `flex justify-between bg-white p-3 my-8  border border-gray-300 rounded hover:opacity-80`,
    liDone: `flex justify-between bg-white p-3 my-8 border border-gray-300 rounded opacity-50 hover:opacity-80`,
    row:`flex`,    
    text:`margin-left: 10px;`,
    textDone:`margin-left: 10px; text-decoration: line-through;`,
    button:`background: none; border: none; cursor: pointer;`,
    //put one ta between checkbox and text
    checkbox:`mr-2`,    
}

const Todo = ({todo, toggleDone, deleteTodo}) => {
  return (
    <li className={todo.Done ? style.liDone : style.li}>
        <div className={style.row}>
            <input onChange={()=> toggleDone(todo)} type="checkbox" checked= {todo.Done ? 'checked':''}/>
            <p onClick={()=>toggleDone(todo)} className={todo.Done ? style.textDone : style.text}>{todo.text}</p>
        </div>
      
        <button onClick={()=>deleteTodo(todo.id)}>{<FaRegTrashAlt/>}</button>
    </li>
  )
}

export default Todo