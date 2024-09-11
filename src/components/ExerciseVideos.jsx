import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ margin: {lg: '200px', xs: '20px'}}} p= '20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos

      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center">

      </Stack>
      
    </Box>
  )
}

export default ExerciseVideos