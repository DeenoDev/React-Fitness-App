import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';


import './App.css';

const App = () => {
  return (
    <Box width="400px">
      Navbar
      <Routes>
        <Route path='/' />
      </Routes>
    </Box>
  )
}

export default App