import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData"; 
import HorizontalScrollbar from "../components/horizontalScrollbar";  

const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts , setBodyParts] = useState([]) ;

   //now this useffect is used to get the categories of exercise  
   //as soon as site loads and for one time only ; 

  //this useEffect is used to get the bodypart list from the api

  useEffect(()=>{
    const fetchExerciseData = async () =>{
       const bodypartData = await fetchData("https://exercise-db.p.rapidapi.com/exercises/bodyPartList", exerciseOptions) ; 
          
        setBodyParts(['all' , ...bodypartData]) ;
    } 

    fetchExerciseData();
  } , [])

  const handleSearch = async () => {
      if(search){
        const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=500", exerciseOptions) ; 
         
        //  console.log(exercisesData) ;

         const searchedExercises = exercisesData.filter(
          (exercise)=> 
               exercise.name.toLowerCase().includes(search)
               || exercise.target.toLowerCase().includes(search)
               || exercise.equipment.toLowerCase().includes(search)
               || exercise.bodyPart.toLowerCase().includes(search)
         );
         setSearch('');
         setExercises(searchedExercises);
         console.log(searchedExercises);

      }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" }, 
             fontFamily: '"Fira Mono", "Roboto Mono", monospace',
       }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> should know
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "900px", // Ensuring it doesn't stretch too much
        }}
      >
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          placeholder="Search Exercises..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyDown={(e)=>{
            if(e.key === 'Enter'){
              handleSearch();
            }
          }}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            marginLeft: "10px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", marginTop: "20px" }}>

        <HorizontalScrollbar
         data={bodyParts} 
         bodyPart={bodyPart} 
         setBodyPart={setBodyPart}
         isBodyParts />

      </Box>
    </Stack>
  );
};

export default SearchExercises;
