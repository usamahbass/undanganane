import { ReactNode } from "react";
import { Box, Image, useMediaQuery } from "@chakra-ui/react";

interface FrameImageProps {
  frame?: string;
  image?: string;
  children?: ReactNode;
}

export const FrameImage = ({ frame, image, children }: FrameImageProps) => {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  return (
    <Box as="header">
      <Image
        src={frame}
        width="100%"
        display="block"
        margin="0 auto"
        maxW="250px"
        zIndex="999"
        alt="frame"
      />
      <Image
        src={image}
        display="block"
        margin="0 auto"
        position="absolute"
        bottom={isMobile ? "700px" : "470px"}
        left={isMobile ? "105px" : "210px"}
        objectFit="cover"
        alt="imageuser"
        borderRadius="100%"
        width="100%"
        maxW="155px"
        zIndex="-1"
      />

      {children}
    </Box>
  );
};
