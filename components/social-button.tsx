import { ReactNode } from "react";
import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

export const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      w={8}
      h={8}
      as="a"
      href={href}
      rounded="full"
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
