export type SpanProps = {text:string; color:string}
export type size = {lg?:string; md?:string; xs?:string}
export type TextAlign ='left' | 'center' | 'right' | 'justify';
export type fontWeightSize ='light' | 'regular' | 'medium' | 'bold' | 500 ;

export type BtnProps = {
    Title:string;
    px?:size | string;
    py?:size | string;
    background?:string;
    color?:size | string;
    width?:size | string;
    height?:size | string;
    fontSize?:size | string;
    fontWeight?:fontWeightSize;
    border?:size | string;
    borderRadius?:size | string;
    mb?:size | string;
    onClick?: () => void;
}
export interface HrProps { 
    my?: string;
    color?: string;
    background?: string;
    height?: string;
    border?: string;
    borderRadius?:string;
}
export interface TitleProps {
    fontSize: string;
    title: string;
    mt?: string;
    mx?: string;
    color?: string;
    textAlign?: TextAlign;
    fontWeight?: fontWeightSize;
}