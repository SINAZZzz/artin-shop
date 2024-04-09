import { Box, Typography } from '@mui/material'
import Carousel from '../carousel/Carousel'
import Btn from '../Btn';
import Span from '../Span';
const images = [
    'https://s8.uupload.ir/files/untitled-3_gi4b.png',
    'https://s8.uupload.ir/files/untitled-1_kxfb.png',
    'https://s8.uupload.ir/files/untitle-1_lepp.png',
  ];

export default function Advertising() {
  return (
    <Box mx={{ xs: '1rem', md: '4rem' }} display='flex' justifyContent='space-between' alignItems='center'>
    {/* title */}
    <Box flex='1'>
      <Box display='flex' zIndex={-1} position='absolute' height='100%'>
        <Box component='span' width={{lg:'15rem' , md:"12rem" , xs:'10rem'}} height={{lg:'61%',md:"47%", xs:'39%'}} mt={{ xs: '-2rem', md: '-2rem' , lg:"-4rem" }}
         borderRadius='30px 30px 0px 0px' style={{background: 'linear-gradient(to top, rgba(90,53,192,0%),rgba(139,98,226,15%))'}}></Box>
        <Box component='span' width={{lg:'15rem' , md:"12rem" , xs:'10rem'}} height={{lg:'54%',md:'40%' ,xs:'30%'}} mt={{ xs: '2rem', md: '1rem' , lg:'-1rem' }} mr={{ xs:'2rem' , md: '2rem' , lg:'4rem' }}
         borderRadius='30px 30px 0px 0px' style={{background: 'linear-gradient(to top, rgba(90,53,192,0%),rgba(139,98,226,15%))'}}></Box>
      </Box>
      <Box display='flex' zIndex={0} mr={{ xs: '1rem', md: '3rem' }} flexDirection='column' justifyContent='center' alignItems='start'> 
        <Typography mb={{ xs: '1rem', md: '2rem' }} fontSize={{ xs: '2rem', md: '2.5rem' , lg:'4rem' }}>احساس خوب زندگی <br />  با کفش های <Span text='آرتین شاپ' color='#7854F7' /></Typography>
        <Btn Title='همین حالا خرید کن!' borderRadius='10px' px='2rem' color='white' background='7854F7' py='1rem' fontSize={{lg:"1.7rem" , md:'1.2rem' , xs:'0.9rem'}} />
      </Box>
    </Box>
    {/* carousel */}
    <Box flex='1'>
      <Carousel images={images} />
    </Box>
  </Box>
  )
}
