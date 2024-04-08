import Box from '@mui/material/Box'
import Head from './components/head/Head'
import Categories from './components/categories/Categories'
import {Typography } from '@mui/material'
import Span from './components/Span';
import Btn from './components/Btn';
import Carousel from './components/carousel/Carousel';

const images = [
  'https://s8.uupload.ir/files/untitled-3_gi4b.png',
  'https://s8.uupload.ir/files/untitled-1_kxfb.png',
  'https://s8.uupload.ir/files/untitle-1_lepp.png',
];


export default function App() {
  return (
    <Box>
       <Head />
       <Categories />
       {/* carousel */}
       <Box mx={{ xs: '1rem', md: '4rem' }} display='flex' justifyContent='space-between' alignItems='center'>
        <Box flex='1'>
          <Box display='flex' zIndex={-1} position='absolute'>
            <Box component='img' src='https://s8.uupload.ir/files/rectangle_3_f7z7.png' mt={{ xs: '-2rem', md: '-4rem' }} />
            <Box component='img' src='https://s8.uupload.ir/files/rectangle_4_a7f1.png' mt={{ xs: '-2rem', md: '-3rem' }} mr={{ md: '4rem' }} />
          </Box>
          <Box display='flex' zIndex={0} mr={{ xs: '1rem', md: '3rem' }} flexDirection='column' justifyContent='center' alignItems='start'> 
            <Typography mb={{ xs: '1rem', md: '2rem' }} fontSize={{ xs: '2rem', md: '2.5rem' , lg:'4rem' }}>احساس خوب زندگی <br />  با کفش های <Span text='آرتین شاپ' color='#7854F7' /></Typography>
            <Btn Title='همین حالا خرید کن!' borderRadius='10px' px='2rem' color='white' bgcolor='7854F7' py='1rem' fontSize={{ xs: '1rem', md: '1.5rem' }} />
          </Box>
        </Box>
        <Box flex='1'>
          <Carousel images={images} />
        </Box>
      </Box>

    </Box>
  )
}
