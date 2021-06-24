import { Box, Heading, Image } from "@chakra-ui/react";

export const CardImage = () => {
  return (
    <Box p="1em 0" float="left" width="50%">
      <Box
        role="content"
        position="relative"
        width="90%"
        maxW="400px"
        margin="auto"
        overflow="auto"
      >
        <Box
          bg="rgba(0,0,0,0.7)"
          position="absolute"
          height="99%"
          width="100%"
          left="0"
          top="0"
          bottom="0"
          right="0"
          opacity="0"
          transition="all .4s ease-in-out 0s"
          _groupHover={{
            opacity: 1,
          }}
        />

        <Image src="/svg/classic.svg" alt="pernikahan" width="100%" />

        <Box
          position="absolute"
          textAlign="center"
          padding="0 1em 0 1em"
          width="100%"
          top="50%"
          left="50%"
          opacity="0"
          transition="all .3s ease-in-out 0s"
          _groupHover={{
            top: "50%",
            left: "50%",
            opacity: 1,
          }}
        >
          <Heading>Hello</Heading>
        </Box>
      </Box>
    </Box>
  );
};
