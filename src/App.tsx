import { Box } from "@mui/material";
import "./index.css";
import Head from "./components/head/Head";
import Categories from "./components/categories/Categories";
import Advertising from "./components/advertising/Advertising";
import Products from "./components/products/Products";
import Discount from "./components/discount/Discount";
import CardProduct from "./components/CardProduct";
import { ProductsDataTwo } from "./data/Products.data.two";
import TwoDiscount from "./components/twoDiscount/TwoDiscount";
import CarouselProducts from "./components/carouselProducts/CarouselProducts";
import Newsletters from "./components/newsletters/Newsletters";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <Box overflow="hidden">
      <Head />
      <Categories />
      <Box mx={{ xs: "1rem", md: "4rem" }}>
        <Advertising />
        <Products />
        <Discount />
        <CardProduct productsData={ProductsDataTwo} />
        <TwoDiscount />
        <CardProduct productsData={ProductsDataTwo} />
      </Box>
      <Box>
        <Box>
          <Box mx={{ xs: "1rem", md: "4rem" }}>
            <CarouselProducts />
          </Box>
          <Box
            bgcolor="#F5E6FF"
            width="110%"
            height="20rem"
            zIndex={-1}
            overflow="hidden"
          ></Box>
        </Box>
      </Box>
      <Box mx={{ xs: "1rem", md: "4rem" }}>
        <Newsletters />
      </Box>
<<<<<<< HEAD
      <Footer />
=======
      {/* Footer */}
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="5rem"
          borderTop="1px solid #003F62"
          borderBottom="1px solid #003F62"
          bgcolor="#EBE6FE"
        >
          <Typography mr={{ xs: "1rem", md: "4rem" }}>
            پشتیبانی 24 ساعته در هر روز هفته
          </Typography>
          <Typography>تلفن پشتیبانی کالا: 5293792-021</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            width="20%"
            ml={{ xs: "1rem", md: "4rem" }}
          >
            <Typography>راهنما</Typography>
            <Typography>فروشگاه</Typography>
            <Typography>سبد خرید</Typography>
            <Typography>پرسش های متداول</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="fit-content"
          width="100%"
          bgcolor="#EBE6FE"
          px={{ xs: "1rem", md: "4rem" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            pt="1rem"
          >
            {/* list */}
            <Box display="flex" justifyContent="space-between" width="30%">
              <List>
                <ListItem
                  sx={{
                    fontWeight: "bold",
                    color: "#003F62",
                    fontSize: "1.1rem",
                  }}
                >
                  دسته بندی‌ها
                </ListItem>
                <ListItem>زنانه</ListItem>
                <ListItem>مردانه</ListItem>
                <ListItem>بچگانه</ListItem>
                <ListItem>زیبایی و سلامت</ListItem>
              </List>
              <List>
                <ListItem
                  sx={{
                    fontWeight: "bold",
                    color: "#003F62",
                    fontSize: "1.1rem",
                  }}
                >
                  برندهای مهم
                </ListItem>
                <ListItem>کفش نایک</ListItem>
                <ListItem>کفش آدیداس</ListItem>
                <ListItem>کفش سالومون</ListItem>
                <ListItem>کفش نیوبالانس</ListItem>
              </List>
              <List>
                <ListItem
                  sx={{
                    fontWeight: "bold",
                    color: "#003F62",
                    fontSize: "1.1rem",
                  }}
                >
                  خدمات ما
                </ListItem>
                <ListItem>درباره ما</ListItem>
                <ListItem>تماس با ما</ListItem>
                <ListItem>همکاری تجاری</ListItem>
                <ListItem>قوانین و مقررات</ListItem>
              </List>
            </Box>
            <Box display="flex" flexDirection="column">
              {/* social media */}
              <Box
                style={{ color: "#003F62" }}
                display="flex"
                justifyContent="left"
                mb="1rem"
              >
                <TwitterIcon />
                <FacebookRoundedIcon sx={{ mr: "1.5rem" }} />
                <WhatsAppIcon sx={{ mr: "1.5rem" }} />
                <InstagramIcon sx={{ mr: "1.5rem" }} />
              </Box>
              {/* Signs */}
              <Box display="flex">
                <Box
                  component="img"
                  src="https://s8.uupload.ir/files/logo_1_2hx9.png"
                />
                <Box
                  component="img"
                  src="https://s8.uupload.ir/files/image_84_hl13.png"
                  mr="1rem"
                />
                <Box
                  component="img"
                  src="https://s8.uupload.ir/files/star1_1_iswv.png"
                  mr="1rem"
                />
              </Box>
            </Box>
          </Box>
          {/* about us */}
          <Box py="1rem">
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#003F62",
                fontSize: "1.1rem",
              }}
              pb="1rem"
            >
              درباره ما
            </Typography>
            <Typography>
              کتپوش برخلاف بسیاری از فروشگاه ها، به صورت تخصصی بر روی کفش و
              کتونی تمرکز کرده است تا بتواند در این حوزه بهترین محصولات و خدمات
              ممکن را ارائه دهد. مهم ترین هدف کتپوش ارائه کتونی و کفش با
              بالاترین کیفیت ممکن در دنیاست تا علاوه بر رضایت مشتریان یک خرید
              لذت بخش را ارائه دهد.
            </Typography>
          </Box>
        </Box>
        {/* copyright */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="4rem"
          borderTop="1px solid #003F62"
          bgcolor="#EBE6FE"
        >
          <Typography fontSize="0.9rem" mx={{ xs: "1rem", md: "4rem" }}>
            تمام حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی ارتین شاپ
            می باشد.
          </Typography>
        </Box>
      </Box>
>>>>>>> origin/main
    </Box>
  );
}
