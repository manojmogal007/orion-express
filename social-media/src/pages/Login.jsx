import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import '../styles/Signup.css'
import axios from 'axios'
import { url } from '../components/url';
import { Link, useNavigate } from 'react-router-dom';

const state={
  email:'',
  password:''
}

const Login = () => {

  const [user,setuser]=useState(state)
  const navigate=useNavigate()
  // console.log(user)
  const  handlechange=(e)=>{
    const {name,value}=e.target
    setuser({...user,[name]:value})
  }

  const handleclick=(e)=>{
    e.preventDefault()
    const {email,password}=user
    if(email===''||password===''){
      alert('Fill all details')
      return;
    }
    axios.post(`${url}/user/login`,user)
    .then((res)=>{
    //  console.log(res)
      if(res.data.msg==='Login successful'){
        alert('Login successful')
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('user',JSON.stringify(res.data.user))
      }else{
        alert('Try again')
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const {email,password}=user
  return (
    <div className='signup' >
      <div >
        <h1>Login</h1>
          <Input onChange={handlechange} placeholder='email' type='email' value={email} name='email' />
          <Input onChange={handlechange} placeholder='password' type='password' value={password} name='password' />
          <Button onClick={handleclick} variant="contained">Login</Button>
          <p>Don't have account? <Link to='/signup'>Signup</Link></p>
      </div>
    </div>
  )
}

export default Login