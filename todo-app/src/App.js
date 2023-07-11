import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginPage from './loginPage'
import ToDoAppPage from './ToDoAppPage'
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/app' element={<ToDoAppPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
