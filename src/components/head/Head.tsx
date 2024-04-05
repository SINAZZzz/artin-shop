import { Box } from '@mui/material';
import Logo from './components/Logo';
import Search from './components/Search';
import BtnHead from './components/btnHead/BtnHead';


export default function Head() {
  return (
    <>
      <Box display='flex' alignItems='center' justifyContent='space-between' mt='1rem' mx={{ xs: '1rem', md: '4rem' }}>
        <Logo />
        <Search />
        <BtnHead />
      </Box>
    </>
  )
}
