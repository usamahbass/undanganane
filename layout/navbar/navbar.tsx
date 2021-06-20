import {
  Box,
  Flex,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  IconButton,
  Heading,
  Collapse,
  Container,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { Menu as HamburgerIcon, X as CloseIcon } from "react-feather";
import NextLink from "next/link";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  return (
    <Box as="header" position="fixed" top="0" zIndex="999" width="100%">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Container maxW={"6xl"}>
          <Flex
            flex={{ base: 1 }}
            alignItems="center"
            justify={{ base: "center", md: "start" }}
          >
            <Heading
              href="/"
              size="lg"
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("gray.800", "white")}
              as={NextLink}
            >
              Undangan Ane
            </Heading>

            <Flex display={{ base: "none", md: "flex" }} m={"auto"}>
              {/* <DesktopNav /> */}
            </Flex>

            {!isMobile && (
              <>
                <NextLink href="">
                  <Button width="100px" mr="3">
                    Daftar
                  </Button>
                </NextLink>
                <NextLink href="">
                  <Button width="100px" bg="primary.500" color="white">
                    Masuk
                  </Button>
                </NextLink>
              </>
            )}
          </Flex>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
