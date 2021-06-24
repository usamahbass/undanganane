import { ReactNode } from "react";
import {
  useColorModeValue,
  Stat,
  StatNumber,
  StatLabel,
  Flex,
  Box,
  Badge,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface StatsCardProps {
  title?: string;
  stat?: string;
  icon?: ReactNode;
  to?: any;
}
export const CardDesign = ({ title, stat, icon, to }: StatsCardProps) => {
  return (
    <Stat
      py="5"
      shadow="sm"
      border="1px solid"
      borderTop="10px solid #000"
      rounded="lg"
      cursor="pointer"
      transition="all .3s ease-in-out 0s"
      _hover={{
        transform: "translateY(-10px)",
      }}
      px={{ base: 2, md: 4 }}
      borderColor={useColorModeValue("gray.800", "gray.500")}
    >
      <NextLink href={to}>
        <Flex justifyContent="space-between">
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel as={Badge} fontWeight="medium" isTruncated mb="3">
              {title}
            </StatLabel>
            <StatNumber
              fontSize="xl"
              fontWeight="medium"
              textTransform="uppercase"
            >
              {stat}
            </StatNumber>
          </Box>
          <Box
            my="auto"
            color={useColorModeValue("gray.800", "gray.200")}
            alignContent={"center"}
          >
            {icon}
          </Box>
        </Flex>
      </NextLink>
    </Stat>
  );
};
