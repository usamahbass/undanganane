import { ReactNode } from "react";
import { ThemeToggle } from "~/components";
import Navbar from "./navbar";

interface LayoutProps {
  children?: ReactNode;
}

export const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <ThemeToggle />
    </>
  );
};
