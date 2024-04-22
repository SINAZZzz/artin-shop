import { Box, TextField, Typography } from "@mui/material";
import Btn from "../Btn";


export default function Newsletters() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="10rem"
    width="100%"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      width="100%"
    >
      <Box>
        <Typography fontWeight="bold" mb="0.5rem">
          ثبت نام در خبرنامه
        </Typography>
        <Typography color="#4A4A4A">
          اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های
          ویژه ما مطلع می شوید.
        </Typography>
      </Box>
      <Box>
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
    </Box>
  </Box>
  )
}
