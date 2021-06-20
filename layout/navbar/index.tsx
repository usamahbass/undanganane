import { ReactChildren } from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactChildren;
}

export const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container maxW="6xl">{children}</Container>
    </>
  );
};

