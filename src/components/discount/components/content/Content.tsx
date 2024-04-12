import { Box } from '@mui/material'
import AllC from './components/AllC'
import ImageDiscount from './components/ImageDiscount'

export default function Content() {
  return (
    <Box display='flex' justifyContent='center' alignContent='center' alignItems='center' zIndex={1}>
        <AllC />
        <ImageDiscount />
    </Box>
  )
}
