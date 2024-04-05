import { Box } from "@mui/material"

const Categories_data = ['مردانه', 'زنانه' , 'بچگانه' , 'شگفت انگیز' ,'جدیدترین ها' , 'بلاگ' , 'پشتیبانی']

export default function Categories() {
  return (
<Box width='100%' mt='1rem' display='flex' alignContent='center' justifyContent='center' bgcolor='#F3F3F3' border='1px solid #272D4E' borderRight='none' borderLeft='none'>
  {Categories_data.map((categorie, index) => (
    <Box key={index} m={{ xs: '0.5rem', md: '1rem' }} px='5px' component='select' fontSize='1.2rem' style={{ direction: 'rtl', boxShadow: 'none', border: 'none', backgroundColor: 'transparent' }}>
      <option>{categorie}</option>
    </Box>
  ))}
</Box>

  )
}
