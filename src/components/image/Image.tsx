import React from "react";
import { Box, SxProps, Theme } from "@mui/material";

interface ImageProps {
  src: string | undefined;
  alt: string;
  sx?: SxProps<Theme>; // Material-UI specific sx prop typing
  style?: React.CSSProperties; // Inline style typing
  onClick?: () => void; // Optional onClick handler
}

const Image: React.FC<ImageProps> = ({ src, alt, sx, style, onClick }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        objectFit: "contain", // You can change this based on your needs
        cursor: onClick ? "pointer" : "default", // Change cursor if clickable
        ...sx,
      }}
      style={{
        ...style,
      }}
      onClick={onClick} // Optional click handler
      loading="lazy"
    />
  );
};

export default Image;
