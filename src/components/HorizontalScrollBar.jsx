import React from 'react';
import { ScrollMenu} from 'react-horizontal-scrolling-menu';
import { Box, Typography,Stack } from '@mui/material';
import Icon from '../assets/icon/gym.png';
import BodyPart from './BodyParts';


function HorizontalScrollBar({Array}) {
  return (
    <div style={{width:'100%',overflow:'auto'}}>
      <ScrollMenu   
        itemClassName="hrizontal" >
        {
            Array.length>0 &&
            Array.map((item)=>(
               <Box
                className="bodyPart-card"
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px">
                <BodyPart 
                key={item} 
                item={item} 
                className="parts"/>
               </Box>
            ))
        }
    </ScrollMenu>
    </div>
  )
}

export default HorizontalScrollBar;
