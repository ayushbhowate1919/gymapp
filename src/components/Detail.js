import React from 'react'
import { Typography , Stack , Button } from '@mui/material' ; 
import BodyPartimage from '../assets/icons/body-part.png' ;
import TargetImage from '../assets/icons/target.png' ;
import EquipmentImage from '../assets/icons/equipment.png' ;

const Detail = ({ exerciseDetail }) => {
   const {bodyPart , gifUrl , name , target , equipment , instructions} = exerciseDetail ; 
   const extraDetail = [
     {
       icon :  BodyPartimage ,
       name :  bodyPart , 
     },
     {
       icon : TargetImage ,
       name : target ,
     },
     {
       icon : EquipmentImage ,
       name : equipment
     }
   ] ; 
   console.log(exerciseDetail);
  return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
          <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
          <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Orbitron", "Montserrat", "Roboto", sans-serif',
                fontWeight: 700,
                letterSpacing: '2px',
                color: '#1e293b'
              }}
            >
              {name ? name.charAt(0).toUpperCase() + name.slice(1) : ''}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Fira Mono", "Roboto Mono", monospace',
                color: '#64748b'
              }}
            >
              {instructions &&
                instructions.map((instruction, i) => (
                  <div key={i}>{i}. {instruction}</div>
                ))}
            </Typography>

            {extraDetail.map((item) => (
              <Stack key={`${item.name}-${item.icon}`} direction="row" gap="24px" alignItems="center">
                <Button sx={{ background: '#f0f4f8', borderRadius: '50%', width: '60px', height: '60px' }}> 
                  <img src={item.icon} alt={item.name} />
                </Button>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Orbitron", "Montserrat", "Roboto", sans-serif',
                    fontWeight: 600,
                    color: '#334155'
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
  )
}

export default Detail