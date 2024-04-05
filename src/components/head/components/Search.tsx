import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <TextField
      placeholder="جستجو کنید"
      variant="outlined"
      dir="rtl"
      InputProps={{
        style: {
          fontSize: '1.2rem',
          maxWidth: '100%',
          borderRadius: '10px',
          height: '3rem',
        },
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      sx={{
        width: { xs: '15rem', md: '25rem' }
      }}
    />
  )
}
