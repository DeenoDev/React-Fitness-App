import { Box } from '@mui/material';
import React from 'react';

const HorizontalScrollbar = () => {
  return (
    <div>
        {data.map((item) =>
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}>
    

         
        </Box>)}
    </div>
  )
}

export default HorizontalScrollbar