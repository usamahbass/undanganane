import { ReactNode } from "react";
import { ThemeToggle } from "~/components";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children?: ReactNode;
  notRootPage?: boolean;
}

export const PublicLayout = ({ children, notRootPage }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <ThemeToggle notRootPage={notRootPage} />
      <Footer />
    </>
  );
};
