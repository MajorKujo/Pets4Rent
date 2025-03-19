import { Button, TextField } from '@mui/material'
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='container' style={{textAlign:'center'}}>
        <h1 className='heading-secondary'>Login</h1><br /><br />
        <TextField variant='outlined' placeholder='Username'></TextField><br /><br />
        <TextField variant='outlined' placeholder='Password'></TextField><br /><br />
        <Button variant='filled' className='button'>Login</Button><br /><br />
        <Button variant='filled' className='button'><Link to='/reg'>Not a user yet? <br/>Register here</Link></Button>

    </div>
  )
}

export default Login