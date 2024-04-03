import {IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function App() {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    // Perform search operation or pass the search term to the parent component
    console.log('Searching for:', searchTerm);
  };
  return (
    <Box>
        {/* Head */}
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          {/* logo */}
          <Typography fontSize='1.5rem' fontWeight='bold'> <Box component='span' color='#7854F7'> آرتین </Box>شاپ</Typography>
          {/* search */}
          <TextField
            placeholder="جستو جو کنید"
            variant="outlined"
            dir="rtl"
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box display='flex' alignItems='center'>
            {/* login */}
            <Typography>ورود / عضویت</Typography>
            {/* Cart */}
            <Typography color='white' fontSize='1.2rem' width='fit-content' py='5px' px='10px' borderRadius='10px' bgcolor='#FF4842' fontWeight='bold' display='flex' alignItems='center'>
              سبد خرید <ShoppingCartOutlinedIcon fontSize='small' style={{marginLeft:'10px'}} /></Typography>
          </Box>
          
        </Box>
    </Box>
  )
}
