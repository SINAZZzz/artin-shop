import { Box, Typography } from '@mui/material';
import Head from './components/head/Head';
import Categories from './components/categories/Categories';
import Advertising from './components/advertising/Advertising';
import Products from './components/products/Products';
import Title from './components/Title';
import Btn from './components/Btn';

export default function App() {
  return (
    <Box>
      <Head />
      <Categories />
      <Box mx={{ xs: '1rem', md: '4rem' }}>
        <Advertising />
        <Products />
        {/* discount */}
          <Box display='flex' alignItems='end' borderRadius='10px' width='100%' my='4rem' height='20rem' style={{background: 'linear-gradient(to top, rgba(185,34,65,100%),rgba(243,57,90,100%))'}}>
                <Box display='flex' alignItems='end' zIndex={0} position='absolute' height='43%' right='0'>
                  <Box component='span' width='5rem' height='80%' mr={{md:'5.5rem' , xs:'2rem'}} borderRadius='30px 30px 0px 0px' style={{background: 'rgba(255,111,136,25%)'}}></Box>
                </Box>
                <Box display='flex' alignItems='start' alignContent='start' alignSelf='start' zIndex={0} position='absolute' height='43%' left='0'>
                  <Box component='span' width='5rem' height='80%' ml={{md:'5.5rem' , xs:'2rem'}}borderRadius='0px 0px 30px 30px' style={{background: 'rgba(255,111,136,25%)'}}></Box>
                </Box>
                <Box display='flex' justifyContent='center' alignContent='center' alignItems='center' zIndex={1}>
                  <Box display='flex' flexDirection='column' justifyContent='center' alignItems='start' height='100%' mr='2rem'>
                    <Title title='50 درصد تخفیف ویژه' fontSize='1.5rem' color='white' fontWeight={'bold'} />
                    <Typography color='white' fontSize='1rem' my='1rem'>یک استایل شیک و متفاوت را با کفش های اسپرت ما تجربه کنید. ارائه انواع کفش ورزشی با مدل های متنوع. خرید با قیمت‌های باورنکردنی فقط تا 24 اردیبهشت ماه. بشتابید و تا فرصت به اتمام نرسیده از این تخفیف استثنایی استفاده کنید.</Typography>
                    <Btn Title='مشاهده تخفیفات' border='1px solid white' fontSize='1.1rem'
                    background='ffffff40' borderRadius='10px' px='20px' py='10px' color='white' fontWeight={'bold'} />
                  </Box>
                  <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%' ml='2rem' pr='2rem'>
                    <Box component='img' src='https://s8.uupload.ir/files/untitled-4_0lco.png' />
                  </Box>
                </Box>
          </Box>
        </Box>
    </Box>
  )
}
