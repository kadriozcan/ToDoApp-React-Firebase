import React, {useState} from 'react'
import {BsPlusCircleFill} from 'react-icons/bs'
import Todo from './Todo'
const style = {
  bg: `h-screen w-screen bg-orange-200`
}

function App() {
  const [todos, setTodos] = useState(["Lear react", "learn js"])

//selam
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3>ToDo List</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder='Add ToDo' />
          <button className={style.button}>{<BsPlusCircleFill size={25}/>}</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
