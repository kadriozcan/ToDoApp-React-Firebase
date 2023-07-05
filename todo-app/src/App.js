import React, {useState, useEffect} from 'react'
import {BsPlusCircleFill} from 'react-icons/bs'
import Todo from './Todo'
import {db} from './firebase'
import { collection, query, onSnapshot, updateDoc, doc } from "firebase/firestore";
const style = {
  // make the background filling all the screen
  bg: `bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen`,
  form: `flex justify-center items-center border-b-2 border-purple-500 py-2`,
  input: `w-3/4 py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`,
  container: `bg-white bg-opacity-50 rounded-lg shadow-lg py-10 px-5 w-1/2 mx-auto`,
  heading: `text-center text-3xl font-bold text-gray-800 p-5`,
  button: `bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`,
  count: `text-center text-xl font-bold text-gray-800 p-5`
}

function App() {
  const [todos, setTodos] = useState([/*"Learn React", "Learn Js", "Grind Leetcode", "Learn Algorithms", "Learn Data Structure"*/])

//create todo
//read todo
useEffect(() => {
  const q = query(collection(db, 'todos')/*, orderBy("timestamp", "desc")*/)
  const unsubscribe = onSnapshot(q,(querySnapshot) => {
    let todosArr = [] 
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
  return () => unsubscribe()
}, [])

//update todo
const toggleDone = async(todo) => {
  await updateDoc(doc(db, 'todos', todo.id),{
    Done: !todo.Done
  })
}
//delete todo


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>ToDo List</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder='Add ToDo' />
          <button className={style.button}>{<BsPlusCircleFill size={25}/>}</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleDone={toggleDone}/>
          ))}
        </ul>
        <p className={style.count}> You have x number of Todos</p>
      </div>
    </div>
  );
}

export default App;
