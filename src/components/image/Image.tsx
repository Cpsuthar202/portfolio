// Image.tsx
import React from "react";
import { Box } from "@mui/material";

interface ImageProps {
  src: string;
  alt: string;
  sx?: object;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, sx, style }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "50%",
        ...sx,
      }}
      style={{
        ...style,
      }}
    />
  );
};

export default Image;
