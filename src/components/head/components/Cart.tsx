import { Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Cart() {
  return (
    <Typography color='white' fontSize='1.2rem' width='fit-content' py='5px' px='10px' borderRadius='10px' bgcolor='#FF4842' fontWeight='bold' display='flex' alignItems='center' justifyContent='center'>
    <ShoppingCartOutlinedIcon fontSize='small' style={{marginLeft:'10px'}} />  سبد خرید </Typography>
  )
}
