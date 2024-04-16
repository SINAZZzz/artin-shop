import { Box, Typography } from '@mui/material'
import Title from '../../../Title'
import Btn from '../../../Btn'

export default function ContentL() {
  return (
    <Box display='flex' width='100%' height='100%' justifyContent='space-between' >
        <Box zIndex={1} display='flex' flexDirection='column' justifyContent='center' alignItems='start' height='100%' mr='2rem'>
            <Title title='فروش تابستانه' fontSize='1.5rem' color='white' fontWeight={'bold'} />
            <Typography color='white' fontSize='1rem' my='1rem'>50% تخفیف  تمامی کفش ها در حراج کده بهارستان 1402</Typography>
            <Btn Title='رفتن به حراج کده' border='1px solid white' fontSize={{lg:'1.1rem' , md:'0.9rem' , xs:'0.9rem'}}
            background='ffffff40' borderRadius='10px' px={{lg:'20px' , md:'10px' , xs:'5px'}}
            py='10px' color='white' fontWeight={'bold'} />
        </Box>
        <Box zIndex={1} display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
            <Box component='img' src='https://s8.uupload.ir/files/air-max-270-react-se_c1y4.png' width='100%' ml={{lg:'-4rem' , md:'-1rem'}}  />
        </Box>
    </Box>
  )
}
