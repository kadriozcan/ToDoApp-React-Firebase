import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const style={

}

const Todo = ({todo}) => {
  return (
    <li className={style.li}>
        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.text}>{todo}</p>
        </div>
        <button>{<FaTrashAlt/>}</button>
    </li>
  )
}

export default Todo