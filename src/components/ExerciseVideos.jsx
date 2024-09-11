import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideos = ({ ExerciseVideos, name }) => {
  return (
    <Box sx={{ margin: {lg: '200px', xs: '20px'}}} p= '20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color: '#ff2625'}}>{name}</span> exercise videos

      </Typography>
      
    </Box>
  )
}

export default ExerciseVideos