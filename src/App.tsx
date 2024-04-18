import { Box, CircularProgress, Rating, Typography } from "@mui/material";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { Pagination, Autoplay } from "swiper/modules";
import { ProductsData } from "./data/Products.data";

export default function App() {
  const [showBorder, setShowBorder] = useState(false);
  const handleClick = () => {
    setShowBorder(!showBorder);
  };
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => setLoading(false);
  const handleImageError = () => setLoading(false);

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
        {/* Carousel Products */}
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
        <Box>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            className="mySwiper"
            slidesPerView={4}
          >
            {ProductsData.products.map((product) => (
              <SwiperSlide key={product.id}>
                <Box
                  border="1px solid #B6B6B6"
                  borderRadius="10px"
                  width="fit-content"
                  display="flex"
                  flexDirection="column"
                  mb="2rem"
                >
                  <Box p="1rem">
                    {loading && (
                      <Box display="flex" justifyContent="center" p="5rem">
                        <CircularProgress />
                      </Box>
                    )}
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      style={{ display: loading ? "none" : "block" }}
                    />
                    <Typography
                      my="0.5rem"
                      fontWeight="bold"
                      display="flex"
                      justifyContent="start"
                    >
                      {product.title}
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="end">
                      <Typography my="0.5rem" fontWeight="bold">
                        {product.description}
                      </Typography>
                      <Rating name="no-value" value={null} dir="ltr" disabled />
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
