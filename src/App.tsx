import Box from '@mui/material/Box'
import Head from './components/head/Head'
import Categories from './components/categories/Categories'
import {Typography } from '@mui/material'
import Span from './components/Span';
import Btn from './components/Btn';


export default function App() {
  return (
    <Box>
       <Head />
       <Categories />
       {/* Swipeable */}
       <Box mx={{ xs: '1rem', md: '4rem' }} display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='start'> 
            <Typography fontSize='3rem'>احساس خوب زندگی <br />  با کفش های <Span text='آرتین شاپ' color='#7854F7' /></Typography>
            <Btn Title='همین حالا خرید کن!' borderRadius='10px' px='2rem' color='white'
              bgcolor='7854F7'  py='1rem' fontSize='1.5rem' />
        </Box>
        <Box component='img' src='https://s8.uupload.ir/files/ornament_o8c5.png' mt='3rem' />
        {/* <Box component='img' src='https://s8.uupload.ir/files/group_1261153090_zb68.png' mt='3rem' /> */}
       </Box>

    </Box>
  )
}
