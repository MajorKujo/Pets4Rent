import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
import './Components.css'

const Available = () => {
  return (
    <div className='container'>
        <Grid2 container spacing={2}>
            <Grid2 size={{xs:12,sm:6,md:4}}>
                <Card className='card'sx={{maxWidth:300}}>
                    <CardMedia sx={{height:300}} />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"></Typography>
                    <Typography variant="body2" color="textSecondary" component="p"></Typography>
                    <Typography variant='body2' color='textSecondary' component='p'></Typography>
                    </CardContent>
                </Card>
            </Grid2>
        </Grid2>
    </div>
  )
}

export default Available