import { Grid } from "@mui/material";
import DiscountBox from "../DiscountBox";
import BackEffectBoxR from "./components/back/BackEffectBoxR";
import BackEffectBoxL from "./components/back/BackEffectBoxL";
import ContentR from "./components/content/contentR";
import ContentL from "./components/content/ContentL";

export default function TwoDiscount() {
  return (
    <Grid container spacing={8}>
    <Grid item xs={6}>
        <DiscountBox alignItems="end" borderRadius="10px" display="flex" height="20rem" my="4rem" width="100%" style={{background: 'linear-gradient(to top, rgba(157,3,60,100%),rgba(220,2,120,100%))'}}>
            <BackEffectBoxR />
            <ContentR />
        </DiscountBox>
    </Grid>
    <Grid item xs={6}>
      <DiscountBox display='flex' alignItems='end' borderRadius='10px' width='100%' my='4rem' height='20rem' style={{background: 'linear-gradient(to top, rgba(14,56,176,100%),rgba(120,84,247,100%))'}}>  
        <BackEffectBoxL />
       <ContentL />
      </DiscountBox>
    </Grid>
  </Grid>
  )
}
