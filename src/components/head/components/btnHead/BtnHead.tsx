import { Box } from '@mui/material'
import Login from './components/Login'
import Cart from './components/Cart'

export default function BtnHead() {
  return (
    <Box display='flex' alignItems='center'>
        <Login />
        <Cart />
    </Box>
  )
}
