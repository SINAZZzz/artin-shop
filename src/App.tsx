import Box from '@mui/material/Box'
import Head from './components/head/Head'
import Categories from './components/categories/Categories'
import { Typography } from '@mui/material'
import Span from './components/Span';
import Btn from './components/Btn';


export default function App() {
  return (
    <Box>
       <Head />
       <Categories />
       {/* Swipeable */}
       <img src="https://s8.uupload.ir/files/group_1261153198_09ph.png" alt="swipe" />
       <Typography fontSize='3rem'>احساس خوب زندگی <br />  با کفش های <Span text='آرتین شاپ' color='#7854F7' /></Typography>
       <Btn Title='همین حالا خرید کن!' borderRadius='10px' px='2rem' color='white'
        bgcolor='7854F7'  py='1rem' fontSize='1.5rem' />
    </Box>
  )
}
