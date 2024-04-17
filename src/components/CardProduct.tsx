import { useState } from 'react';
import { Box, CircularProgress, Grid, Rating, Typography } from '@mui/material';

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface Props {
  productsData: { products: Product[] };
}

const CardProduct: React.FC<Props> = ({ productsData }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => setLoading(false);
  const handleImageError = () => setLoading(false);

  return (
    <Grid container spacing={8} justifyContent="center">
      {productsData.products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} container justifyContent="center">
          <Box border='1px solid #B6B6B6' borderRadius='10px' width='fit-content' display="flex" flexDirection="column">
            <Box p='1rem'>
              {loading && 
              <Box display='flex' justifyContent='center' p='5rem'>
                <CircularProgress />
              </Box>} 
              <img src={product.imageUrl} alt={product.title} onLoad={handleImageLoad} onError={handleImageError} style={{ display: loading ? 'none' : 'block' }} />
              <Typography my='0.5rem' fontWeight="bold">{product.title}</Typography>
              <Box display='flex' flexDirection='column' alignItems='end'>
                <Typography my='0.5rem' fontWeight="bold">{product.description}</Typography>
                <Rating name="no-value" value={null} dir='ltr' disabled />
              </Box>
            </Box>           </Box>
        </Grid>
      ))}

    </Grid>
  );
};

export default CardProduct;
