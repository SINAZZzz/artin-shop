import { Box, CircularProgress, Typography } from "@mui/material";
import Title from "../../../Title";
import Btn from "../../../Btn";
import { useState } from "react";

export default function ContentR() {
  const [loading, setLoading] = useState(true);

  return (
    <Box display='flex' width='100%' height='100%' justifyContent='space-between' >
        <Box zIndex={1} display='flex' flexDirection='column' justifyContent='center' alignItems='start' height='100%' mr='2rem'>
            <Title title='فروش تابستانه' fontSize='1.5rem' color='white' fontWeight={'bold'} />
            <Typography color='white' fontSize='1rem' my='1rem'>انواع محصولات درجه یک  و با کیفیت</Typography>
            <Btn Title='دیدن همه محصولات' border='1px solid white' fontSize={{lg:'1.1rem' , md:'0.9rem' , xs:'0.9rem'}}
            background='ffffff40' borderRadius='10px' px={{lg:'20px' , md:'10px' , xs:'5px'}}
            py='10px' color='white' fontWeight={'bold'} />
        </Box>
        <Box zIndex={1} display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
        {loading && 
        <Box display='flex' justifyContent='center' p='5rem'>
          <CircularProgress color='error' />
        </Box> }
            <Box component='img' src='https://s8.uupload.ir/files/images_(13)_2_4el1.png' width='100%' onLoad={() => setLoading(false)} onError={() => setLoading(false)} style={{ display: loading ? 'none' : 'block' }} />
        </Box>
    </Box>
  )
}
