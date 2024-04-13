import { Box } from '@mui/material'
import Title from '../Title'
import Hr from '../Hr'
import CardProduct from '../CardProduct'
import { ProductsData } from '../../data/Products.data'

export default function Products() {
  return (
        <Box>
            <Title title='محصولات' fontSize='1.2rem' textAlign='center' mt='2rem' color='#4A4A4A' />
            <Hr my='1rem' border='1px #B6B6B6 solid' />
            <CardProduct productsData={ProductsData} />
        </Box>
  )
}
