import { Box } from "@mui/material";
import { DiscountProps } from "../types/props";

export default function DiscountBox({display , alignItems , borderRadius ,  width , my , height , style , children } : DiscountProps) {
  return (
    <Box display={display} alignItems={alignItems} borderRadius={borderRadius} width={width} my={my} height={height} style={style}>
        {children}
    </Box>
  )
}
