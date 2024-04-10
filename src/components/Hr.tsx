import { Box } from '@mui/material'
import { HrProps } from '../types/props'

export default function Hr({my , color ,background , height , border , borderRadius} : HrProps) {
  return (
    <Box component='hr' my={my} color={color} bgcolor={background} height={height} border={border} borderRadius={borderRadius} />
  )
}
