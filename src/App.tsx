import {Box} from '@mui/material'
import Head from './components/head/Head'
import Categories from './components/categories/Categories'
import Advertising from './components/advertising/Advertising'




export default function App() {
  return (
    <Box height='100vh'>
       <Head />
       <Categories />
       <Advertising />
    </Box>
  )
}
