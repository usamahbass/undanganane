import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Instagram as FaInstagram,
  Twitter as FaTwitter,
  Youtube as FaYoutube,
} from "react-feather";
import { SocialButton } from "~/components";

const Footer = () => {
  return (
    <Box
      pt="10rem"
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      {/* <Container
        maxW="6xl"
        align="center"
        justify="center"
        py={4}
        spacing={4}
        as={Stack}
      >
        UndanganAne
      </Container> */}

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2021 UndanganAne. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
