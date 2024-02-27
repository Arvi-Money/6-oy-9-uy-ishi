import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'

function App() {
  const [userdata, setuserdata] = useState({});

  function getData(data) {
    setuserdata(data)
  }
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home userdata={userdata}></Home>}></Route>
        <Route path='/register' element = {<Register onLogin={getData}></Register>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App
