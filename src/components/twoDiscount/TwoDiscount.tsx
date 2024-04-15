import { Box, Grid, Typography } from "@mui/material";
import Title from "../Title";
import Btn from "../Btn";
import DiscountBox from "../DiscountBox";

export default function TwoDiscount() {
  return (
    <Grid container spacing={8}>
    <Grid item xs={6}>
        <DiscountBox alignItems="end" borderRadius="10px" display="flex" height="20rem" my="4rem" width="100%" style={{background: 'linear-gradient(to top, rgba(157,3,60,100%),rgba(220,2,120,100%))'}}>
            <Box display='flex' alignItems='end' zIndex={0} position='absolute' height='43%' right='0'>
                <Box component='span' width='5rem' height='80%' mr={{md:'5.5rem' , xs:'2rem'}} borderRadius='30px 30px 0px 0px' style={{background: 'rgba(198,89,143,25%)'}}></Box>
            </Box>
            <Box display='flex' position='absolute' alignItems='start' alignContent='start' justifyContent='center' alignSelf='start'  zIndex={0}  height='43%' width='100%' left='0'>
                <Box component='span' width='5rem' height='80%' ml='11.5rem' borderRadius='0px 0px 30px 30px' style={{background: 'rgba(198,89,143,25%)'}}></Box>
            </Box>
            <Box display='flex' width='100%' height='100%' justifyContent='space-between' >
                <Box zIndex={1} display='flex' flexDirection='column' justifyContent='center' alignItems='start' height='100%' mr='2rem'>
                    <Title title='فروش تابستانه' fontSize='1.5rem' color='white' fontWeight={'bold'} />
                    <Typography color='white' fontSize='1rem' my='1rem'>انواع محصولات درجه یک  و با کیفیت</Typography>

                    <Btn Title='دیدن همه محصولات' border='1px solid white' fontSize={{lg:'1.1rem' , md:'0.9rem' , xs:'0.9rem'}}
                    background='ffffff40' borderRadius='10px' px={{lg:'20px' , md:'10px' , xs:'5px'}}
                    py='10px' color='white' fontWeight={'bold'} />
                </Box>
                <Box zIndex={1} display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
                    <Box component='img' src='https://s8.uupload.ir/files/images_(13)_2_4el1.png' width='100%' />
                </Box>
            </Box>
        </DiscountBox>
    </Grid>
    <Grid item xs={6}>
      <Box display='flex' alignItems='end' borderRadius='10px' width='100%' my='4rem' height='20rem' style={{background: 'linear-gradient(to top, rgba(14,56,176,100%),rgba(120,84,247,100%))'}}>
        <Box display='flex' alignItems='end' zIndex={0} position='absolute' height='43%'>
          <Box component='span' width='5rem' height='80%' mr='1.5rem' borderRadius='30px 30px 0px 0px' style={{background: 'rgba(21,126,247,15%)'}}></Box>
        </Box>
        <Box display='flex' alignItems='start' position='absolute' alignContent='start' justifyContent='end' alignSelf='start' zIndex={0}  height='43%' width='100%' left='0'>
          <Box component='span' width='5rem' height='80%' ml={{lg:'5.5rem' , md: '5.5rem' , xs:'2.5rem'}} borderRadius='0px 0px 30px 30px' style={{background: 'rgba(21,126,247,15%)'}}></Box>
        </Box>
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
      </Box>
    </Grid>
  </Grid>
  )
}
