import { Box } from "@mui/material";
import ShadowBox from "../../ShadowBox";

export default function EffectBack() {
  return (
    <Box display='flex' zIndex={-1} position='absolute' height='100%'>
      <ShadowBox width={{lg:'15rem' , md:"12rem" , xs:'10rem'}} height={{lg:'61%',md:"47%", xs:'39%'}} mt={{ xs: '-2rem', md: '-2rem' , lg:"-4rem" }} borderRadius="30px 30px 0px 0px" style={{background: 'linear-gradient(to top, rgba(90,53,192,0%),rgba(139,98,226,15%))'}}  />
      <ShadowBox width={{lg:'15rem' , md:"12rem" , xs:'10rem'}} height={{lg:'54%',md:'40%' ,xs:'30%'}} mt={{ xs: '2rem', md: '1rem' , lg:'-1rem' }} mr={{ xs:'2rem' , md: '2rem' , lg:'4rem' }} borderRadius='30px 30px 0px 0px' style={{background: 'linear-gradient(to top, rgba(90,53,192,0%),rgba(139,98,226,15%))'}}  />
    </Box>
  )
}
