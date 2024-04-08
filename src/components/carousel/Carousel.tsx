import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleDotClick = (dotIndex: number) => {
    setIndex(dotIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [index, images.length]);

  return (
    <Box>
      <Box
        mt={{ xs: '2rem', sm: '3rem' }}
        textAlign='center'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box component='img' src={images[index]} style={{ maxWidth: '100%' }} /> 
      </Box>
      <Box display='flex'>
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => handleDotClick(i)}
            sx={{
              cursor: 'pointer',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              margin: '0 2px',
              backgroundColor: i === index ? '#7854F7' : '#CEC0FF',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
