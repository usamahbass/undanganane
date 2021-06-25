import { Image, useMediaQuery } from "@chakra-ui/react";

interface AbsoluteImageProps {
  src: string;
  isTop?: boolean;
  alt: string;
}

export const AbsoluteImage = ({ src, isTop, alt }: AbsoluteImageProps) => {
  const [isMobile] = useMediaQuery("(max-width: 670px)");
  return (
    <>
      {isTop ? (
        <Image
          src={src}
          alt={alt}
          width="100%"
          height="auto"
          maxWidth="200px"
          position="absolute"
          top="-20px"
          right="-20px"
          overflow="hidden"
          transform="rotate(180deg)"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          position="absolute"
          maxWidth="200px"
          overflow="hidden"
          bottom={isMobile ? "-50px" : "-20px"}
          left="-20px"
          width="100%"
          height="auto"
        />
      )}
    </>
  );
};
