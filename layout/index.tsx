import { ReactChild } from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container maxW="6xl">{children}</Container>
    </>
  );
};

export default Layout;
