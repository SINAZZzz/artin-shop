import { Box } from '@mui/material'
import { SpanProps } from '../types/props'

export default function Span({text , color} : SpanProps) {
  return (
    <Box component='span' color={color}>{text}</Box>
  )
}
