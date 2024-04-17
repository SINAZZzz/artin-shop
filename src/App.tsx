import { Box } from "@mui/material";
import Head from "./components/head/Head";
import Categories from "./components/categories/Categories";
import Advertising from "./components/advertising/Advertising";
import Products from "./components/products/Products";
import Discount from "./components/discount/Discount";
import CardProduct from "./components/CardProduct";
import { ProductsDataTwo } from "./data/Products.data.two";
import TwoDiscount from "./components/twoDiscount/TwoDiscount";
import Hr from "./components/Hr";
import { useState } from "react";

export default function App() {
  const [showBorder, setShowBorder] = useState(false);

  const handleClick = () => {
    setShowBorder(!showBorder);
  };
  return (
    <Box>
      <Head />
      <Categories />
      <Box mx={{ xs: "1rem", md: "4rem" }}>
        <Advertising />
        <Products />
        <Discount />
        <CardProduct productsData={ProductsDataTwo} />
        <TwoDiscount />
        <CardProduct productsData={ProductsDataTwo} />
        <Box my="2rem">
          <Box
            display="flex"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            mb="-1.1rem"
          >
            <Box
              ml="4rem"
              fontSize="1.2rem"
              borderBottom={!showBorder ? "4px solid #00CD90" : "none"}
              pb="1rem"
              onClick={handleClick}
            >
              جدید ترین‌ها
            </Box>
            <Box
              fontSize="1.2rem"
              borderBottom={showBorder ? "4px solid #00CD90" : "none"}
              pb="1rem"
              onClick={handleClick}
            >
              پرفروش ترین‌ها
            </Box>
          </Box>
          <Hr my="1rem" border="1px #B6B6B6 solid" />
        </Box>
      </Box>
    </Box>
  );
}
