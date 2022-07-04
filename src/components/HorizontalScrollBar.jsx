import React from 'react';
import { Box } from '@mui/material';
import BodyParts from './BodyParts';

function HorizontalScrollBar({data}) {
    console.log(data)

  return (
    <div>
        {
            data.map((item)=>(
                <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m='0 40px'
                >
                    <BodyParts item={item} />
                </Box>
            ))
        }
    </div>
  )
}

export default HorizontalScrollBar;