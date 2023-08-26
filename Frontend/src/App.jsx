import React from 'react'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
