import { Box, Grid } from '@mui/material';
import Head from './components/head/Head';
import Categories from './components/categories/Categories';
import Advertising from './components/advertising/Advertising';
import Products from './components/products/Products';
import Discount from './components/discount/Discount';
import CardProduct from './components/CardProduct';
import { ProductsDataTwo } from './data/Products.data.two';

export default function App() {
  return (
    <Box>
      <Head />
      <Categories />
      <Box mx={{ xs: '1rem', md: '4rem' }}>
        <Advertising />
        <Products />
        <Discount />
        <CardProduct productsData={ProductsDataTwo} />
        {/* two Discount */}
        <Grid container spacing={8}>
        <Grid item xs={6}>
          <Box display='flex' alignItems='end' borderRadius='10px' width='100%' my='4rem' height='20rem' style={{background: 'linear-gradient(to top, rgba(185,34,65,100%),rgba(243,57,90,100%))'}}>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display='flex' alignItems='end' borderRadius='10px' width='100%' my='4rem' height='20rem' style={{background: 'linear-gradient(to top, rgba(185,34,65,100%),rgba(243,57,90,100%))'}}>
          </Box>
        </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
