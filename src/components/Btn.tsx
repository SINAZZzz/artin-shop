import { Box } from "@mui/material";
import { BtnProps } from "../types/props";



export default function Btn({Title, px, py, background, color, width, height, fontSize, fontWeight, border , borderRadius, mb, onClick}:BtnProps) {
  return (
    <Box component='button' onClick={onClick} 
        sx={{
          cursor:'pointer', 
          bgcolor:`#${background}` , color:{color} , fontWeight:{fontWeight}
         , py:`${py}` , px:`${px}` , borderRadius:{borderRadius}}}
        width={width} height={height} fontSize={fontSize} border={border} mb={mb}>
        {Title}
    </Box>
  )
}