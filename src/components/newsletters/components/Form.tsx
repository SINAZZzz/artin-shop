import { Box, TextField } from "@mui/material";
import Btn from "../../Btn";

export default function Form() {
  return (
    <Box display="flex">
      <TextField
        placeholder="شماره موبایل"
        variant="outlined"
        dir="rtl"
        InputProps={{
          style: {
            fontSize: "1.2rem",
            maxWidth: "100%",
            borderRadius: "10px",
            height: "3rem",
            marginLeft: "2rem",
          },
        }}
        sx={{
          width: { xs: "15rem", md: "25rem" },
        }}
      />
      <Btn
        Title="ارسال"
        borderRadius="10px"
        px="2.5rem"
        border="none"
        color="white"
        background="7854F7"
        py="1rem"
        fontSize="1rem"
      />
    </Box>
  );
}
