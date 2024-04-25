import { ReactNode } from "react";

export type SpanProps = { text: string; color: string };
export type Size = { xl?: string; lg?: string; md?: string; xs?: string };
export type TextAlign = "left" | "center" | "right" | "justify";
export type fontWeightSize = "light" | "regular" | "medium" | "bold" | 500;
export type DisplayType = "flex" | "block" | "inline" | "inline-block" | "none";
export type AlignItemsType =
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch";
export type PositionType =
  | "absolute"
  | "fixed"
  | "inherit"
  | "initial"
  | "relative"
  | "unset"
  | "sticky";
export type JustifyContentType =
  | "center"
  | "justify"
  | "end"
  | "left"
  | "right"
  | "start"
  | "space-around"
  | "space-between"
  | "space-evenly";
export type BtnProps = {
  Title: string;
  px?: Size | string;
  py?: Size | string;
  background?: string;
  color?: Size | string;
  width?: Size | string;
  height?: Size | string;
  fontSize?: Size | string;
  fontWeight?: fontWeightSize;
  border?: Size | string;
  borderRadius?: Size | string;
  mb?: Size | string;
  onClick?: () => void;
};
export interface HrProps {
  my?: string;
  color?: string;
  background?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
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
export type DiscountProps = {
  display: string | DisplayType;
  alignItems: string | AlignItemsType;
  borderRadius: string;
  width: string;
  my: string;
  height: string;
  style?: { background: string };
  children: ReactNode;
};
export type BackEfProps = {
  display: string | DisplayType;
  alignItems: string | AlignItemsType;
  position: "absolute" | PositionType;
  justifyContent?: string | JustifyContentType;
  zIndex: number;
  height?: Size | string;
  width?: string;
  right?: number;
  left?: number;
  children: ReactNode;
};
export type ShadowBoxProps = {
  width?: Size | string;
  height?: Size | string;
  mr?: Size | string;
  ml?: Size | string;
  mt?: Size | string;
  borderRadius: string;
  style: { background: string };
};
