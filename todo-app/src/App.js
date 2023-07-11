import React, { useState, useEffect } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Todo from './Todo'
import { db } from './firebase'
import { collection, query, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
const style = {
  // make the background filling all the screen
  bg: ` bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen bg-cover bg-fixed`,
  form: `flex justify-center items-center border-b-2 border-purple-500 py-2`,
  input: `w-3/4 py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`,
  container: `bg-white bg-opacity-50 rounded-lg shadow-lg py-10 px-5 w-1/2 mx-auto`,
  heading: `text-center text-3xl font-bold text-gray-800 p-5`,
  button: `bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`,
  count: `text-center text-xl font-bold text-gray-800 p-5`
}

//selam
function App() {
  const [todos, setTodos] = useState([/*"Learn React", "Learn Js", "Grind Leetcode", "Learn Algorithms", "Learn Data Structure"*/])
  const [input, setInput] = useState('')

  //create todo
  const createTodo = async (e) => {
    e.preventDefault()
    if (input === ''){ 
      alert ('Please enter a todo')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text : input,
      Done : false,
    })
    setInput('')
  }


  //read todo
  useEffect(() => {
    const q = query(collection(db, 'todos')/*, orderBy("timestamp", "desc")*/)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        
        const todoData = doc.data();
        
        const todoWithDate = {...todoData, id: doc.id};
      //todosArr.push({ ...doc.data(), id: doc.id })
      todosArr.push(todoWithDate);
      });
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])


  //update todo
  const toggleDone = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      Done: !todo.Done
    })
  }


  //delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }
  const getIncompleteTodoCount = (todos) => {
    const incompleteTodos = todos.filter(todo => !todo.Done);
    return incompleteTodos.length;
  };


  // Update todo in firebase
  // Delete todo
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>ToDo List</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='Add ToDo' />
          <button className={style.button}>{<BsPlusCircleFill size={25} />}</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
          ))}
        </ul>
        <p className={style.count}> {`You have ${getIncompleteTodoCount(todos)} todos`}</p>
      </div>
    </div>
  );
}

export default App;
