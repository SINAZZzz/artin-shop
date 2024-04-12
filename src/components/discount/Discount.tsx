import { Box } from '@mui/material'
import EffectBack from './components/EffectBack';
import Content from './components/content/Content';

export default function Discount() {

  return (
    <Box display='flex' alignItems='end' borderRadius='10px' width='100%' my='4rem' height='20rem' style={{background: 'linear-gradient(to top, rgba(185,34,65,100%),rgba(243,57,90,100%))'}}>
        <EffectBack />
        <Content />
    </Box>
  )
}
