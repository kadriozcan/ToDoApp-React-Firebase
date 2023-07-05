import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style={
    li:`justify-content: space-between bg-white p-2 my-2 d-flex align-items-center border border-1 border-secondary rounded`,
    //make the complete ones more transparent
    liDone:` justify-content: space-between bg-white p-2 my-2 d-flex align-items-center border border-1 border-secondary rounded opacity-50`,
    row:`display: flex;`,
    text:`margin-left: 10px;`,
    textDone:`margin-left: 10px; text-decoration: line-through;`,
    button:`background: none; border: none; cursor: pointer;`,


}

const Todo = ({todo}) => {
  return (
    <li className={style.li}>
        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.text}>{todo}</p>
        </div>
        <button>{<FaRegTrashAlt/>}</button>
    </li>
  )
}

export default Todo