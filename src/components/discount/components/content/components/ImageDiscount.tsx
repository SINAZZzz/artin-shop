import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function ImageDiscount() {
  const [loading, setLoading] = useState(true);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      ml="2rem"
      pr="2rem"
    >
      {loading && (
        <Box display="flex" justifyContent="center" p="8rem">
          <CircularProgress />
        </Box>
      )}
      <Box
        component="img"
        src="https://s8.uupload.ir/files/untitled-1_yiuj.png"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
      />
    </Box>
  );
}
