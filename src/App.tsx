import {
  Box,
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
import Newsletters from "./components/newsletters/Newsletters";


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
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' height='5rem' border='1px solid' borderRight='none' borderLeft='none' bgcolor='#EBE6FE' >
          <Typography mr={{ xs: "1rem", md: "4rem" }}>پشتیبانی 24 ساعته در هر روز هفته</Typography>
          <Typography>تلفن پشتیبانی کالا: 5293792-021</Typography>
          <Box display='flex' justifyContent='space-between' width='20%' ml={{ xs: "1rem", md: "4rem" }}>
            <Typography>راهنما</Typography>
            <Typography>فروشگاه</Typography>
            <Typography>سبد خرید</Typography>
            <Typography>پرسش های متداول</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
