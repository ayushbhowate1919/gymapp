import React , {useState} from 'react' ; 
import {Box} from '@mui/material' ;
import { ExitToApp } from '@mui/icons-material';

import HeroBanner from '../components/herobanner' ;
import SearchExercises from '../components/searchExercises' ;
import Exercises from '../components/exercises' ;


const Home = () => {
  const [exercises , setExercises] = useState([]);
  const [bodyPart , setBodyPart] = useState('all') ;

  console.log(bodyPart);
  
  return (
    <div>
      <Box>
        <HeroBanner/>
        <SearchExercises 
        setExercises={setExercises}
         bodyPart={bodyPart} 
         setBodyPart={setBodyPart}/>
        <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
         />

      </Box>
    </div>
  )
}

export default Home