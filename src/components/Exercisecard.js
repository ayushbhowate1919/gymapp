import React from 'react'
import {Link} from 'react-router-dom' ; 
import { Stack , Typography , Button } from '@mui/material' ; 

const Exercisecard = ({exercise}) => {
  console.log(exercise)
  return (
       <Link className="exercise-card" to = {`/exercise/${exercise.id}`}>
        <img src = {exercise.gifUrl} alt ={exercise.name} loading="lazy"/>
        <Stack direction = "row">
            <Button sx = {{ml : "21px" , color : "#fff" , background : "#ffa9a1" , fontSize : "14px" , borderRadius : "20px" , 
            textTransform : "capitalize" , padding : "10px"}}>
                {exercise.bodyPart}
            </Button>

            <Button sx = {{ml : "21px" , color : "#fff" , background : "#fcc757" , fontSize : "14px" , borderRadius : "20px" , 
            textTransform : "capitalize" , padding : "10px"}}>
                {exercise.target}
            </Button>
          </Stack>
          <Typography ml = "21px" color="#000" fontWeight = "bold" mt = "11px" pb = "10px" textTransform = "capitalize" fontSize = "22px">
             {exercise.name}
          </Typography>
       </Link> 
  )
}

export default Exercisecard