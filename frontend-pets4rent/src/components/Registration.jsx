import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Components.css'

const Registration = () => {
  return (
    <div className='container'>
        <Typography variant='h2' className='heading-secondary'>Welcome to Pets4Rent</Typography><br /><br /><br />
        <TextField placeholder='Name'/><br /><br />
        <TextField placeholder='Username'/><br /><br />
        <TextField placeholder='Password'/><br /><br />
        <TextField placeholder='Phone No'/><br /><br />
        <TextField placeholder='Mail ID'/><br /><br />
        <Button className='button'>Submit</Button>

    </div>
  )
}

export default Registration