import { Box } from '@mui/material';
import Head from './components/head/Head';
import Categories from './components/categories/Categories';
import Advertising from './components/advertising/Advertising';
import Products from './components/products/Products';

export default function App() {
  return (
    <Box>
      <Head />
      <Categories />
      <Box mx={{ xs: '1rem', md: '4rem' }}>
        <Advertising />
        <Products />
        {/* discount */}
          <Box borderRadius='10px' width='100%' my='4rem' height='20rem' style={{background: 'linear-gradient(to top, rgba(185,34,65,100%),rgba(243,57,90,100%))'}}>
            <Box display='flex' alignItems='end' zIndex={0} position='absolute' height={{lg:'42%' , md:'49%' , xs:'49%'}} right='0'>
              <Box component='span' width='5rem' height='80%' mr='5.5rem' borderRadius='30px 30px 0px 0px' style={{background: 'rgba(255,111,136,25%)'}}></Box>
            </Box>
            <Box display='flex' justifyContent='start' alignItems='start' zIndex={0} position='absolute' height='43%' left='0'>
              <Box component='span' width='5rem' height='80%' ml='5.5rem' borderRadius='0px 0px 30px 30px' style={{background: 'rgba(255,111,136,25%)'}}></Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}
