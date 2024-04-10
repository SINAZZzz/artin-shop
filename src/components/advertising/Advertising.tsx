import { Box } from '@mui/material'
import Carousel from '../carousel/Carousel'
import { images } from '../../data/Carousel.data';
import EffectBack from './components/EffectBack';
import TitleAd from './components/TitleAd';


export default function Advertising() {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Box flex='1'>
        <EffectBack />
        <TitleAd />
      </Box>
      <Box flex='1'>
        <Carousel images={images} />
      </Box>
  </Box>
  )
}
