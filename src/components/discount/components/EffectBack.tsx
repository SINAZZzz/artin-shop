import { Box } from "@mui/material";

export default function EffectBack() {
  return (
        <>
            <Box display='flex' alignItems='end' zIndex={0} position='absolute' height='43%' right='0'>
                <Box component='span' width='5rem' height='80%' mr={{md:'5.5rem' , xs:'2rem'}} borderRadius='30px 30px 0px 0px' style={{background: 'rgba(255,111,136,25%)'}}></Box>
            </Box>
            <Box display='flex' alignItems='start' alignContent='start' alignSelf='start' zIndex={0} position='absolute' height='43%' left='0'>
                <Box component='span' width='5rem' height='80%' ml={{md:'5.5rem' , xs:'2rem'}}borderRadius='0px 0px 30px 30px' style={{background: 'rgba(255,111,136,25%)'}}></Box>
            </Box>
        </>
  )
}
