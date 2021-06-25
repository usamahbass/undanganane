import { useEffect, useState } from "react";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Sun as SunIcon, Moon as MoonIcon } from "react-feather";

interface ThemeToggleProps {
  notRootPage?: boolean;
}

export const ThemeToggle = ({ notRootPage }: ThemeToggleProps) => {
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", () => {
        const status = window.scrollY > 100 ? true : false;

        setIsScroll(status);
      });
    }
  }, []);

  return (
    <Tooltip hasArrow label="Ganti tema" placement="bottom">
      <IconButton
        position="fixed"
        bottom="3rem"
        right="3rem"
        size="sm"
        fontSize="lg"
        aria-label={`Ganti ke ${text} mode`}
        title={`Ganti ke ${text} mode`}
        variant="ghost"
        onClick={toggleMode}
        icon={
          notRootPage ? (
            <SwitchIcon />
          ) : (
            <SwitchIcon
              color={text === "light" ? "white" : isScroll ? "black" : "white"}
            />
          )
        }
      />
    </Tooltip>
  );
};
