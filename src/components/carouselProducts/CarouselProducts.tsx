import { Box, CircularProgress, Rating, Typography } from "@mui/material";
import { useState } from "react";
import Hr from "../Hr";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductsData } from "../../data/Products.data";
import "swiper/css";
import "swiper/css/pagination";

export default function CarouselProducts() {
  const [showBorder, setShowBorder] = useState(false);
  const handleClick = () => {
    setShowBorder(!showBorder);
  };
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => setLoading(false);
  const handleImageError = () => setLoading(false);

  return (
    <>
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
      <Box width="100%" height="10rem">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          className="mySwiper"
          slidesPerView={5}
        >
          {ProductsData.products.map((product) => (
            <SwiperSlide
              key={product.id}
              style={{
                borderRadius: "10px",
                border: "1px solid #B6B6B6",
                width: "10rem",
                height: "fit-content",
                display: "flex",
                flexDirection: "row",
                marginBottom: "2rem",
              }}
            >
              <Box>
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
                    style={{
                      display: loading ? "none" : "block",
                    }}
                  />
                  <Typography
                    my="0.5rem"
                    fontWeight="bold"
                    fontSize={{ lg: "1rem", md: "0.7rem", xs: "0.6rem" }}
                    display="flex"
                    justifyContent="start"
                  >
                    {product.title}
                  </Typography>
                  <Box display="flex" flexDirection="column" alignItems="end">
                    <Typography
                      my="0.5rem"
                      fontWeight="bold"
                      fontSize={{ lg: "1rem", md: "0.7rem", xs: "0.6rem" }}
                    >
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
    </>
  );
}
