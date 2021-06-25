import { ReactNode } from "react";
import { Container, Flex, useMediaQuery, Box } from "@chakra-ui/react";
import Head from "next/head";
import PerfectScrollBar from "react-perfect-scrollbar";
import { ThemeToggle } from "~/components";

interface WeddingProps {
  children?: ReactNode;
  fontFamily?: string;
}

export const WeddingLayout = ({ children, fontFamily }: WeddingProps) => {
  const [isMobile] = useMediaQuery("(max-width: 670px)");
  return (
    <Flex justifyContent="center">
      <Head>
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`}
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
      </Head>
      {isMobile ? (
        <Box
          height="100%"
          textAlign="center"
          p="2rem .5rem 1rem .5rem"
          shadow={isMobile ? "none" : "xl"}
        >
          {children}
        </Box>
      ) : (
        <Container
          position="absolute"
          overflow="hidden"
          shadow="xl"
          height="100vh"
        >
          <PerfectScrollBar>
            <Box textAlign="center" p="0 2.5rem 4rem 2.5rem">
              {children}
            </Box>
          </PerfectScrollBar>
        </Container>
      )}
      <ThemeToggle />
    </Flex>
  );
};
