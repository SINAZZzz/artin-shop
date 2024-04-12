import { Box, Typography } from '@mui/material'
import Title from '../../../../Title'
import Btn from '../../../../Btn'

export default function AllC() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='start' height='100%' mr='2rem'>
        <Title title='50 درصد تخفیف ویژه' fontSize='1.5rem' color='white' fontWeight={'bold'} />
        <Typography color='white' fontSize='1rem' my='1rem'>یک استایل شیک و متفاوت را با کفش های اسپرت ما تجربه کنید. ارائه انواع کفش ورزشی با مدل های متنوع. خرید با قیمت‌های باورنکردنی فقط تا 24 اردیبهشت ماه. بشتابید و تا فرصت به اتمام نرسیده از این تخفیف استثنایی استفاده کنید.</Typography>
        <Btn Title='مشاهده تخفیفات' border='1px solid white' fontSize='1.1rem'
        background='ffffff40' borderRadius='10px' px='20px' py='10px' color='white' fontWeight={'bold'} />
    </Box>
  )
}
