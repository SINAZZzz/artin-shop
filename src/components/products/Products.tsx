import { Box, Grid, Rating, Typography } from '@mui/material'
import Title from '../Title'
import Hr from '../Hr'
import { ProductsData } from '../../data/Products.data'

export default function Products() {
  return (
        <Box>
            <Title title='محصولات' fontSize='1.2rem' textAlign='center' mt='2rem' color='#4A4A4A' />
                <Hr my='1rem' border='1px #B6B6B6 solid' />
                <Grid container spacing={6} justifyContent="center">
                {ProductsData.products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} container justifyContent="center">
                    <Box border='1px solid #B6B6B6' borderRadius='10px' width='fit-content' display="flex" flexDirection="column">
                        <Box p='1rem'>
                        <img src={product.imageUrl} alt={product.title} />
                        <Typography my='0.5rem' fontWeight="bold">{product.title}</Typography>
                        <Box display='flex' flexDirection='column' alignItems='end'>
                            <Typography my='0.5rem' fontWeight="bold">{product.description}</Typography>
                            <Rating name="no-value" value={null} dir='ltr' />
                        </Box>
                        </Box>
                    </Box>
                    </Grid>
                ))}
                </Grid>
        </Box>
  )
}
