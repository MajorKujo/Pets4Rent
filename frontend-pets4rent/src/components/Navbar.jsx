import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './Components.css';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="sticky" className='navbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            //color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Pets4Rent
          </Typography>
          <Button><Link to='/login'>Login</Link></Button>&nbsp;
          <Button><Link to='/ad_add'>Add Pet</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar