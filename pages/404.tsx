import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft } from "react-feather";
import NextLink from "next/link";

export default function NotFoundPages() {
  return (
    <Center>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height="100vh"
      >
        <Box textAlign="center">
          <Image
            display="block"
            margin="0 auto"
            src="/svg/not-found.svg"
            alt="NotFoundPage"
            width="294px"
          />
          <Heading mt="4">Halaman tidak ditemukan</Heading>

          <Text mt="2">
            Kembali ke halaman awal atau keluar dari halaman ini !
          </Text>

          <NextLink href="/">
            <Button
              display="flex"
              justifyContent="center"
              margin="4rem auto"
              color="primary.500"
              transition="all .3s ease-in-out 0s"
              _hover={{
                transform: "translateY(-10px)",
              }}
              leftIcon={<ArrowLeft />}
            >
              Lihat Semua
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Center>
  );
}
