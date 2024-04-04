import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        // Perform search operation or pass the search term to the parent component
        console.log('Searching for:', searchTerm);
      };
  return (
    <TextField
        placeholder="جستجو کنید"
        variant="outlined"
        dir="rtl"
        onChange={handleSearch}
        InputProps={{
          style: {
            fontSize:'1.2rem',
            width:'25rem',
            maxWidth:'100%',
            borderRadius:'10px'
          },
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
  )
}
