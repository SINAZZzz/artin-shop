import { Box } from '@mui/material';
import Head from './components/head/Head';
import Categories from './components/categories/Categories';
import Advertising from './components/advertising/Advertising';
import Products from './components/products/Products';
import Discount from './components/discount/Discount';

export default function App() {
  return (
    <Box>
      <Head />
      <Categories />
      <Box mx={{ xs: '1rem', md: '4rem' }}>
        <Advertising />
        <Products />
        <Discount />
      </Box>
    </Box>
  )
}
