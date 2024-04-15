import { Box } from "@mui/material";
import { ReactNode } from "react";

type DisplayType = "flex" | 'block' | "inline" | "inline-block" | "none" ;
type AlignItemsType = 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'self-end' | 'self-start' | 'start' | 'stretch';

type DiscountProps = {
    display : string | DisplayType; 
    alignItems: string | AlignItemsType;
    borderRadius: string;
    width: string;
    my:string;
    height:string;
    style?:{background:string};
    children: ReactNode ;
}

export default function DiscountBox({display , alignItems , borderRadius ,  width , my , height , style , children } : DiscountProps) {
  return (
    <Box display={display} alignItems={alignItems} borderRadius={borderRadius} width={width} my={my} height={height} style={style}>
        {children}
    </Box>
  )
}
