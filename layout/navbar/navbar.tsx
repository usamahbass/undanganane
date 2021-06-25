import { useEffect, useState } from "react";
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
  Image,
} from "@chakra-ui/react";
import { Menu as HamburgerIcon, X as CloseIcon } from "react-feather";
import NextLink from "next/link";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", () => {
        const status = window.scrollY > 400 ? true : false;
        setIsScroll(status);
      });
    }
  }, []);

  return (
    <Box as="header" position="fixed" top="0" zIndex="999" width="100%">
      <Flex
        align="center"
        minH="60px"
        shadow={isScroll ? "sm" : "none"}
        transition="background-color 200ms linear"
        py={{ base: 2 }}
        px={{ base: 4 }}
        bg={useColorModeValue(isScroll ? "white" : "primary.500", "gray.800")}
        color={useColorModeValue(isScroll ? "black" : "white", "white")}
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
              color={useColorModeValue(isScroll ? "black" : "white", "white")}
              as={NextLink}
            >
              <Image src="/logo.png" alt="UndanganAneLogo" width="50px" />
            </Heading>

            <Flex display={{ base: "none", md: "flex" }} m={"auto"}>
              {/* <DesktopNav /> */}
            </Flex>

            {!isMobile && (
              <>
                <NextLink href="">
                  <Button
                    width="100px"
                    mr="3"
                    color="primary.500"
                    _hover={{
                      bg: "transparent",
                      border: "1px solid white",
                      color: "white",
                    }}
                  >
                    Daftar
                  </Button>
                </NextLink>
                <NextLink href="">
                  <Button
                    width="100px"
                    bg="primary.500"
                    variant="outline"
                    color="white"
                    _hover={{
                      bg: "#EDF2F7",
                      color: "primary.500",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                  >
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
