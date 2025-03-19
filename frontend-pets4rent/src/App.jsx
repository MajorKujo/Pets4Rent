import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Registration from './components/Registration'
import Available from './components/Available'
import SinglePet from './components/SinglePet'
import AdminAdd from './components/AdminAdd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/><br /><br />
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Registration/>}/>
        <Route path='/avail' element={<Available/>}/>
        <Route path='/sing' element={<SinglePet/>}/>
        <Route path='/ad_add' element={<AdminAdd/>}/>
      </Routes>
    </div>
  )
}

export default App
