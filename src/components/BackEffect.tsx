import { Box } from '@mui/material'
import { BackEfProps } from '../types/props'

export default function BackEffect({display,alignItems,justifyContent,zIndex,position,height,width,right,left,children}:BackEfProps) {
  return (
    <Box display={display} width={width} alignItems={alignItems} justifyContent={justifyContent} zIndex={zIndex} position={position} height={height} left={left} right={right}>
      {children}
    </Box>
  )
}
