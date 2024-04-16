import { Box } from '@mui/material'
import { ShadowBoxProps } from '../types/props'

export default function ShadowBox({width , height , mr , ml , borderRadius , style } : ShadowBoxProps) {
  return (
    <Box component='span' width={width} height={height} mr={mr} ml={ml} borderRadius={borderRadius} style={style}></Box>
  )
}
