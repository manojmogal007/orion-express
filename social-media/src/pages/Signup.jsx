import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import '../styles/Signup.css'
import axios from 'axios'
import { url } from '../components/url';
import { Link, useNavigate } from 'react-router-dom';

const state={
  username:'',
  email:'',
  password:''
}

const Signup = () => {

  const [user,setuser]=useState(state)
  const navigate=useNavigate()
  // console.log(user)
  const  handlechange=(e)=>{
    const {name,value}=e.target
    setuser({...user,[name]:value})
  }

  const handleclick=(e)=>{
    e.preventDefault()
    const {username,email,password}=user
    if(username===''||email===''||password===''){
      alert('Fill all details')
      return;
    }
    axios.post(`${url}/user/register`,user)
    .then((res)=>{
      if(res.data.msg==='Signup successful'){
        navigate('/')
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const {username,email,password}=user
  return (
    <div className='signup' >
      <div >
        <h1>Signup</h1>
          <Input onChange={handlechange} placeholder='Username' type='text' value={username} name='username' />
          <Input onChange={handlechange} placeholder='email' type='email' value={email} name='email' />
          <Input onChange={handlechange} placeholder='password' type='password' value={password} name='password' />
          <Button onClick={handleclick} variant="contained">Signup</Button>
          <p>Already have account <Link to='/'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup