import { Box } from "@mui/material";
import { useState } from "react";

export default function Tab() {
  const [showBorder, setShowBorder] = useState(false);
  const handleClick = () => {
    setShowBorder(!showBorder);
  };
  return (
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
  );
}
