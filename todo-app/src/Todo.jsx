import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const style={
  li: `flex justify-between bg-slate-200 p-3 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-3 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`
}

const Todo = ({todo}) => {
  return (
    <li className={style.liComplete}>
        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.text}>{todo.text}</p>
        </div>
        <button>{<FaTrashAlt/>}</button>
    </li>
  )
}

export default Todo