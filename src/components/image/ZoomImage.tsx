import { Box } from "@mui/material";
import React from "react";
import ReactImageMagnify from "react-image-magnify";

interface ZoomImageProps {
  src?: string; // Optional string
}

export const ZoomImage: React.FC<ZoomImageProps> = ({ src }) => {
  const defaultSrc = "https://via.placeholder.com/600"; // Fallback image

  // Ensure src is always a string
  const validSrc: string = src ?? defaultSrc;

  const imageProps = {
    smallImage: {
      alt: "Zoom Out",
      isFluidWidth: true,
      src: validSrc, // Always a string
    },
    largeImage: {
      alt: "Zoom In",
      src: validSrc, // Always a string
      width: 1200,
      height: 1200,
    },
    enlargedImageContainerStyle: {
      background: "white",
      // borderRadius: "10px",
      overflow: "hidden",
      zIndex: 10,
    },
    enlargedImageStyle: {
      // objectFit: "contain",
    },
    enlargedImageContainerDimensions: {
      width: "100%",
      height: "100%",
    },
    isHintEnabled: true,
    shouldUsePositiveSpaceLens: true,
    isEnlargedImagePortalEnabledForTouch: true,
  };
  return (
    <Box>
      <ReactImageMagnify {...imageProps} />
    </Box>
  );
};
