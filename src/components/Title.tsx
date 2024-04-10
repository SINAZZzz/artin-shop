import { Typography } from '@mui/material';
import { TitleProps } from '../types/props';

export default function Title({title , fontSize , mt , color , mx , textAlign , fontWeight} :TitleProps) {
  return (
    <Typography
     fontSize={fontSize} fontWeight={fontWeight} mt={mt}
      color={color} mx={mx} textAlign={textAlign}>
        {title}
    </Typography>
  )
} 
