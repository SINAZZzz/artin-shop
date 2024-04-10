import {Box} from '@mui/material'
import Head from './components/head/Head'
import Categories from './components/categories/Categories'
import Advertising from './components/advertising/Advertising'
import Hr from './components/Hr';
import Title from './components/Title';

export default function App() {
  return (
    <Box>
       <Head />
       <Categories />
       <Box mx={{ xs: '1rem', md: '4rem' }}>
          <Advertising />
          {/* Products */}
          <Title title='محصولات' fontSize='1.2rem' textAlign='center' mt='2rem' color='#4A4A4A'  />
          <Hr my='1rem' border='1px #B6B6B6 solid' />
       </Box>
    </Box>
  )
}
