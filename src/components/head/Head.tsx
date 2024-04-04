import { Box } from '@mui/material'
import Logo from './components/Logo';
import Search from './components/Search';
import Login from './components/Login';
import Cart from './components/Cart';

export default function Head() {
   
  return (
    <>
      <Box display='flex' alignItems='center' justifyContent='space-between' mt='1rem ' mx='5rem'>
      <Logo />
      <Box display='flex' alignItems='center' justifyContent='space-between' width='65%'>
        <Search />
        <Box display='flex' alignItems='center'>
          <Login />
          <Cart />
        </Box>
      </Box>
    </Box>
  </>
  )
}
