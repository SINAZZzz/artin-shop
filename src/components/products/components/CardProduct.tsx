import { useState } from 'react';
import { ProductsData } from '../../../data/Products.data'
import { Box, CircularProgress, Grid, Rating, Typography } from '@mui/material'

export default function CardProduct() {
  const [loading, setLoading] = useState(true);

  return (
    <>
            <Grid container spacing={8} justifyContent="center">
                        {ProductsData.products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} container justifyContent="center">
                    <Box border='1px solid #B6B6B6' borderRadius='10px' width='fit-content' display="flex" flexDirection="column">
                        <Box p='1rem'>
                            {loading && <CircularProgress />} 
                            <Box component='img' src={product.imageUrl} alt={product.title} 
                            onLoad={() => setLoading(false)} 
                            onError={() => setLoading(false)} 
                            style={{ display: loading ? 'none' : 'block' }} />
                            <Typography my='0.5rem' fontWeight="bold">{product.title}</Typography>
                            <Box display='flex' flexDirection='column' alignItems='end'>
                                <Typography my='0.5rem' fontWeight="bold">{product.description}</Typography>
                                <Rating name="no-value" value={null} dir='ltr' disabled />
                            </Box>
                        </Box> 
                    </Box>
                </Grid>
                ))}

            </Grid>

    </>
  )
}
