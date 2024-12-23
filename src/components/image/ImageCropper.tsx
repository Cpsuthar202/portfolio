import { Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { Close } from "@mui/icons-material";

interface ImageCropperProps {
  handleClose: () => void;
  localsrc: string;
  setUrl: (url: string) => void;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({ handleClose, localsrc, setUrl }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const aspectRatio = 1; // Default aspect ratio

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    console.error(croppedArea);

    setCroppedArea(croppedAreaPixels);
  };
  const getCroppedImg = (imageSrc: string, croppedAreaPixels: Area): Promise<string> => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context is not available");

    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        try {
          canvas.width = croppedAreaPixels.width;
          canvas.height = croppedAreaPixels.height;

          ctx.drawImage(image, croppedAreaPixels.x, croppedAreaPixels.y, croppedAreaPixels.width, croppedAreaPixels.height, 0, 0, croppedAreaPixels.width, croppedAreaPixels.height);

          const croppedImageUrl = canvas.toDataURL();
          resolve(croppedImageUrl); // Return the cropped image URL
        } catch (error) {
          reject(error); // Handle errors in cropping
        }
      };

      image.onerror = () => reject(new Error("Failed to load image"));
    });
  };

  // Trigger cropping when cropped area changes
  useEffect(() => {
    if (croppedArea && localsrc) {
      getCroppedImg(localsrc, croppedArea);
    }
  }, [croppedArea, localsrc]);

  const handleSubmit = async () => {
    if (croppedArea && localsrc) {
      const croppedImageUrl = await getCroppedImg(localsrc, croppedArea);
      // Update the `updateInformation` state
      setUrl(croppedImageUrl);

      handleClose(); // Close the dialog after submission
    }
  };

  return (
    <Box sx={{ bgcolor: "white ", p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>

      <Box sx={{ width: "100%", height: "400px", position: "relative" }}>
        {localsrc ? (
          <>
            <Cropper
              image={localsrc}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatio} // Set the aspect ratio dynamically
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </>
        ) : (
          <p>Load an image to crop</p>
        )}
      </Box>

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};
