export type SpanProps = {text:string; color:string;}
export type size = {lg:string; md:string; xs:string} 
export type BtnProps = {
    Title:string;
    px?:string;
    py?:string;
    background?:string;
    color?:string;
    width?:string;
    height?:string;
    fontSize?:size | string;
    fontWeight?:string;
    border?:string;
    borderRadius?:string;
    mb?:string;
    onClick?: () => void;
}