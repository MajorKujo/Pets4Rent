import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Components.css'

const AdminAdd = () => {
  return (
    <div className='container' id='textfield'><Typography variant='h2' className='heading-primary'>Add new Pets</Typography><br /><br /><br />
        <TextField placeholder='Pet Name'></TextField><br /><br />
        <TextField placeholder='Species'></TextField><br /><br />
        <TextField placeholder='Breed'></TextField><br /><br />
        <TextField placeholder='Age (in months)'></TextField><br /><br />
        <TextField placeholder="Image Link"></TextField><br /><br />
        <Button className='button'>Submit</Button>

    </div>
  )
}

export default AdminAdd