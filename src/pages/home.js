import React , {useState} from 'react' ; 
import {Box} from '@mui/material' ;
import { ExitToApp } from '@mui/icons-material';

import HeroBanner from '../components/herobanner' ;
import SearchExercises from '../components/searchExercises' ;
import Exercises from '../components/exercises' ;


const Home = () => {
  return (
    <div>
      <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>

      </Box>
    </div>
  )
}

export default Home