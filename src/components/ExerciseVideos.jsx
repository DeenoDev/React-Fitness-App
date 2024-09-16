import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ margin: {lg: '200px', xs: '20px'}}} p= '20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos

      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
       sx={{
         flexDirection: { lg: 'row' },
         gap: {lg: '110px', xs: '0px'}
       }}>
        {exerciseVideos?.slice(0, 3).map((item, index)=>(
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            target='_blank'
            rel='noreferrer'>

          </a>

        ))}

      </Stack>
      
    </Box>
  )
}

export default ExerciseVideos