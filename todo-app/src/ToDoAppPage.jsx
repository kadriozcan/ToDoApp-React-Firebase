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
  count: `text-center text-xl font-bold text-gray-800 p-5`,
  //add one space and make them top right
 filterContainer: `flex justify-end items-center`,
  filterButton: `bg-white-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mx-1`, 
}

//selam
function ToDoAppPage() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('ALL');
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
        todosArr.push({ ...doc.data(), id: doc.id })
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
  const todosLeft = todos.filter(todo => !todo.Done).length;
  const todosDone = todos.filter(todo => todo.Done).length;
  

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'DONE') return todo.Done;
    if (filter === 'UNDONE') return !todo.Done;
  });

  // Update todo in firebase
  return (
    <div className={style.bg}>
      <div className={style.container}>
      <div className={style.filterContainer}>
          <button className={style.filterButton} onClick={() => setFilter('ALL')}>All</button>
          <button className={style.filterButton} onClick={() => setFilter('DONE')}>Done</button>
          <button className={style.filterButton} onClick={() => setFilter('UNDONE')}>Undone</button>
        </div>
        <h3 className={style.heading}>ToDo List</h3>
        
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='Add ToDo' />
          <button className={style.button}>{<BsPlusCircleFill size={25} />}</button>
        </form>
        <ul>
          {filteredTodos.map((todo, index) => ( // Replace todos with filteredTodos
            <Todo key={index} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
          ))}
        </ul>
        <p className={style.count}>
          {filter === 'ALL' && (
            todosLeft > 0 ?
            `You have ${todosLeft} todos left${todosDone > 0 ? ` and ${todosDone} todos done, congrats` : ''}` :
            (todosDone > 0 ? 'You have done everything, congrats!' : 'Add some todos to get started!')
          )}
          {filter === 'DONE' && (
            todosDone > 0 ? `You have ${todosDone} todos done, congrats!` : 'No todos done yet.'
          )}
          {filter === 'UNDONE' && (
            todosLeft > 0 ? `You have ${todosLeft} todos left.` : 'No todos left.'
          )}
        </p>

      </div>
    </div>
  );
}

export default ToDoAppPage;
