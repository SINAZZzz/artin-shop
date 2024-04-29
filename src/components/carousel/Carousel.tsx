import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const handleDotClick = (dotIndex: number) => {
    setIndex(dotIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [index, images.length]);

  return (
    <Box>
      <Box
        mt={{ xs: "2rem", sm: "3rem" }}
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {loading && (
          <Box p="13rem">
            <CircularProgress />
          </Box>
        )}
        <Box
          component="img"
          src={images[index]}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          style={{ display: loading ? "none" : "block", maxWidth: "100%" }}
        />
      </Box>
      <Box display="flex">
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => handleDotClick(i)}
            sx={{
              cursor: "pointer",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              margin: "0 2px",
              backgroundColor: i === index ? "#7854F7" : "#CEC0FF",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
