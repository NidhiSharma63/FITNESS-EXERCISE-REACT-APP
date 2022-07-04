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



function HorizontalScrollBar() {
  const  TypesArray  = useStore(state => state.TypesArray);
  return (
    <div style={{width:'100%'}}>
      <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow} itemClassName="hrizontal" >
        {
            TypesArray.length>0 &&
            TypesArray.map((item)=>(
               <Box
                className="bodyPart-card"
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px">
                <BodyPart key={item} item={item} className="parts"/>
               </Box>
            ))
        }
    </ScrollMenu>
    </div>
  )
}

export default HorizontalScrollBar;

{/* <Stack
key={item}
type="button"
alignItems="center"
justifyContent="center"
className="bodyPart-card"
// sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
onClick={() => {
// setBodyPart(item);
window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
}}
>
<img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
<Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
</Stack> */}