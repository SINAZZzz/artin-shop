import { Typography } from "@mui/material";
import { DescriptionProps } from "../types/props";

export default function Description({
  description,
  color,
  fontSize,
  mx,
  my,
  textAlign,
}: DescriptionProps) {
  return (
    <Typography
      fontSize={fontSize}
      color={`#${color}`}
      mx={mx}
      my={my}
      textAlign={textAlign}
    >
      {description}
    </Typography>
  );
}
