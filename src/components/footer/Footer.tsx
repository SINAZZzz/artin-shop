import { Box, List, ListItem, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="5rem"
        borderTop="1px solid #003F62"
        borderBottom="1px solid #003F62"
        bgcolor="#EBE6FE"
      >
        <Typography mr={{ xs: "1rem", md: "4rem" }}>
          پشتیبانی 24 ساعته در هر روز هفته
        </Typography>
        <Typography>تلفن پشتیبانی کالا: 5293792-021</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          width="20%"
          ml={{ xs: "1rem", md: "4rem" }}
        >
          <Typography>راهنما</Typography>
          <Typography>فروشگاه</Typography>
          <Typography>سبد خرید</Typography>
          <Typography>پرسش های متداول</Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="fit-content"
        width="100%"
        bgcolor="#EBE6FE"
        px={{ xs: "1rem", md: "4rem" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          {/* list */}
          <Box display="flex" justifyContent="space-between" width="30%">
            <List>
              <ListItem
                sx={{
                  fontWeight: "bold",
                  color: "#003F62",
                  fontSize: "1.1rem",
                }}
              >
                دسته بندی‌ها
              </ListItem>
              <ListItem>زنانه</ListItem>
              <ListItem>مردانه</ListItem>
              <ListItem>بچگانه</ListItem>
              <ListItem>زیبایی و سلامت</ListItem>
            </List>
            <List>
              <ListItem
                sx={{
                  fontWeight: "bold",
                  color: "#003F62",
                  fontSize: "1.1rem",
                }}
              >
                برندهای مهم
              </ListItem>
              <ListItem>کفش نایک</ListItem>
              <ListItem>کفش آدیداس</ListItem>
              <ListItem>کفش سالومون</ListItem>
              <ListItem>کفش نیوبالانس</ListItem>
            </List>
            <List>
              <ListItem
                sx={{
                  fontWeight: "bold",
                  color: "#003F62",
                  fontSize: "1.1rem",
                }}
              >
                خدمات ما
              </ListItem>
              <ListItem>درباره ما</ListItem>
              <ListItem>تماس با ما</ListItem>
              <ListItem>همکاری تجاری</ListItem>
              <ListItem>قوانین و مقررات</ListItem>
            </List>
          </Box>
          <Box display="flex" flexDirection="column">
            {/* social media */}
            <Box
              style={{ color: "#003F62" }}
              display="flex"
              justifyContent="left"
            >
              <TwitterIcon />
              <FacebookRoundedIcon sx={{ mr: "1rem" }} />
              <WhatsAppIcon sx={{ mr: "1rem" }} />
              <InstagramIcon sx={{ mr: "1rem" }} />
            </Box>
            {/* Signs */}
            <Box display="flex">
              <Box
                component="img"
                src="https://s8.uupload.ir/files/logo_1_2hx9.png"
              />
              <Box
                component="img"
                src="https://s8.uupload.ir/files/image_84_hl13.png"
                mr="1rem"
              />
              <Box
                component="img"
                src="https://s8.uupload.ir/files/star1_1_iswv.png"
                mr="1rem"
              />
            </Box>
          </Box>
        </Box>
        {/* about us */}
        <Box>about us</Box>
      </Box>
      {/* copyright */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="4rem"
        borderTop="1px solid #003F62"
        bgcolor="#EBE6FE"
      >
        <Typography fontSize="0.9rem" mx={{ xs: "1rem", md: "4rem" }}>
          تمام حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی ارتین شاپ می
          باشد.
        </Typography>
      </Box>
    </Box>
  );
}
