import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Profiles from '../pages/Profiles'
const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup/>} ></Route>
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/profiles' element={<Profiles/>} ></Route>
        </Routes>
    </div>
  )
}

export default Allroutes