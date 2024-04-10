import { Box, Typography } from '@mui/material'
import Btn from '../../Btn'
import Span from '../../Span'

export default function TitleAd() {
  return (
    <Box display='flex' zIndex={0} mr={{ xs: '1rem', md: '3rem' }} flexDirection='column' justifyContent='center' alignItems='start'> 
        <Typography mb={{ xs: '1rem', md: '2rem' }} fontSize={{ xs: '2rem', md: '2.5rem' , lg:'4rem' }}>احساس خوب زندگی <br />  با کفش های <Span text='آرتین شاپ' color='#7854F7' /></Typography>
        <Btn Title='همین حالا خرید کن!' borderRadius='10px' px='2rem' color='white' background='7854F7' py='1rem' fontSize={{lg:"1.7rem" , md:'1.2rem' , xs:'0.9rem'}} />
    </Box>
  )
}
