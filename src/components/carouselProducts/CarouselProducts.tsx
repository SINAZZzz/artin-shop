import { Box } from "@mui/material";
import Hr from "../Hr";
import Tab from "./components/Tab";
import SwiperCompo from "./components/SwiperCompo";

export default function CarouselProducts() {
  return (
    <>
      <Box my="2rem">
        <Tab />
        <Hr my="1rem" border="1px #B6B6B6 solid" />
      </Box>
      <SwiperCompo />
    </>
  );
}
