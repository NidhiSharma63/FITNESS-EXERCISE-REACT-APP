import React, { useContext } from 'react';
import useStore from '../store';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography,Stack } from '@mui/material';
import RightArrowIcon from '../assets/icon/right-arrow.png';
import LeftArrowIcon from '../assets/icon/left-arrow.png';
import Icon from '../assets/icon/gym.png';
import BodyPart from './BodyParts';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };



function HorizontalScrollBar({Array}) {
  // const  Array  = useStore(state => tate.Array);
  return (
    <div style={{width:'100%'}}>
      <ScrollMenu  
      LeftArrow={LeftArrow} 
      RightArrow={RightArrow} 
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
