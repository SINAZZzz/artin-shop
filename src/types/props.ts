export type SpanProps = {
    text:string;
    color:string;
}

export type BtnProps = {
    Title:string;
    px?:string;
    py?:string;
    bgcolor?:string;
    color?:string;
    width?:string;
    height?:string;
    fontSize?:string;
    fontWeight?:string;
    border?:string;
    borderRadius?:string;
    mb?:string;
    onClick?: () => void;
}