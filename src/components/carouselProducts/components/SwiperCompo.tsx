import { Box, CircularProgress, Rating, Typography } from "@mui/material";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { ProductsData } from "../../../data/Products.data";

export default function SwiperCompo() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => setLoading(false);
  const handleImageError = () => setLoading(false);

  return (
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
  );
}
