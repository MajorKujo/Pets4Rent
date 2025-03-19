import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './Components.css'

const SinglePet = () => {
  return (
    <div>
        <Card className='card'>
            <CardMedia/>
            <CardContent>
                <Typography variant="h5" component="h2"></Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default SinglePet