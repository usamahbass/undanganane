import { ReactNode } from "react";
import { Container, Flex, useMediaQuery, Box } from "@chakra-ui/react";
import Head from "next/head";
import PerfectScrollBar from "react-perfect-scrollbar";
import { ThemeToggle } from "~/components";

interface WeddingProps {
  children?: ReactNode;
  fontFamily?: string;
  space?: boolean;
}

export const WeddingLayout = ({
  children,
  fontFamily,
  space,
}: WeddingProps) => {
  const [isMobile] = useMediaQuery("(max-width: 670px)");
  return (
    <Flex justifyContent="center" height="100vh">
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
          p="0"
          textAlign="center"
          shadow={isMobile ? "none" : "xl"}
          height="100%"
        >
          {children}
        </Box>
      ) : (
        <Container
          position="absolute"
          height="100%"
          overflow="hidden"
          shadow="xl"
        >
          <PerfectScrollBar>
            <Box
              textAlign="center"
              height="100%"
              p={space ? "4rem 2.5rem 4rem 2.5rem" : "0 2.5rem 4rem 2.5rem"}
            >
              {children}
            </Box>
          </PerfectScrollBar>
        </Container>
      )}
      <ThemeToggle />
    </Flex>
  );
};
