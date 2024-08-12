import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight='700px' sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
          height="76px" 
          value="" 
          onChange={(e) => {}}
          placeholder='Search Exercises'
          type='text' />

      </Box>
    </Stack>
  )
}

export default SearchExercises