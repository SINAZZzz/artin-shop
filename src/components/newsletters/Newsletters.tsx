import { Box } from "@mui/material";
import Form from "./components/Form";
import Title from "../Title";
import Description from "../Description";

export default function Newsletters() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="10rem"
      width="100%"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        width="100%"
      >
        <Box>
          <Title
            title="ثبت نام در خبرنامه"
            fontSize="1.1rem"
            fontWeight={"bold"}
          />
          <Description
            description="
          اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه
          ما مطلع می شوید."
            color="#4A4A4A"
            textAlign="right"
          />
        </Box>
        <Form />
      </Box>
    </Box>
  );
}
