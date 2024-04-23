import { Box, Typography } from "@mui/material";
import "./index.css";
import Head from "./components/head/Head";
import Categories from "./components/categories/Categories";
import Advertising from "./components/advertising/Advertising";
import Products from "./components/products/Products";
import Discount from "./components/discount/Discount";
import CardProduct from "./components/CardProduct";
import { ProductsDataTwo } from "./data/Products.data.two";
import TwoDiscount from "./components/twoDiscount/TwoDiscount";
import CarouselProducts from "./components/carouselProducts/CarouselProducts";
import Newsletters from "./components/newsletters/Newsletters";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function App() {
  return (
    <Box overflow="hidden">
      <Head />
      <Categories />
      <Box mx={{ xs: "1rem", md: "4rem" }}>
        <Advertising />
        <Products />
        <Discount />
        <CardProduct productsData={ProductsDataTwo} />
        <TwoDiscount />
        <CardProduct productsData={ProductsDataTwo} />
      </Box>
      <Box>
        <Box>
          <Box mx={{ xs: "1rem", md: "4rem" }}>
            <CarouselProducts />
          </Box>
          <Box
            bgcolor="#F5E6FF"
            width="110%"
            height="20rem"
            zIndex={-1}
            overflow="hidden"
          ></Box>
        </Box>
      </Box>
      <Box mx={{ xs: "1rem", md: "4rem" }}>
        <Newsletters />
      </Box>
      {/* Footer */}
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
          height="10rem"
          width="100%"
          bgcolor="#EBE6FE"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            {/* list */}
            <Box>list</Box>
            <Box display="flex">
              {/* social media */}
              <Box
                style={{ color: "#003F62" }}
                width="50%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <InstagramIcon />
                <FacebookRoundedIcon />
                <WhatsAppIcon />
                <TwitterIcon />
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
            تمام حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی ارتین شاپ
            می باشد.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
