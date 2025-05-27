import React , {useContext} from 'react' ; 
import { Box , Typography } from '@mui/material' ;
import BodyPart from './BodyPart';
import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu' ;
import LeftArrowIcon from '../assets/icons/left-arrow.png' ;
import RightArrowIcon from '../assets/icons/right-arrow.png' ;
import Exercisecard from './Exercisecard';

//left and right arrows here
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

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          itemId={item.id || item}
          key={item.id || item}
          style={{ display: 'inline-block' }}
        >
          <Box
            title={item.id || item}
            m="0 40px"
          >
            {isBodyParts ? (
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            ) : (
              <Exercisecard exercise={item} />
            )}
          </Box>
        </div>
      ))}
    </ScrollMenu>
  );
};


export default HorizontalScrollbar