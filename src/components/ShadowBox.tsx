import { Box } from '@mui/material'
import { ShadowBoxProps } from '../types/props'

export default function ShadowBox({width , height , mr , ml , mt , borderRadius , style } : ShadowBoxProps) {
  return (
    <Box component='span' width={width} height={height} mt={mt} mr={mr} ml={ml} borderRadius={borderRadius} style={style}></Box>
  )
}
 