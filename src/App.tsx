import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
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
import SearchIcon from "@mui/icons-material/Search";
import Btn from "./components/Btn";

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
        {/* Newsletters */}
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
        {/* Footer */}
        <Box>Footer</Box>
      </Box>
    </Box>
  );
}
