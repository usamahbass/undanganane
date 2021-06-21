import { Stack, Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";

interface HeadlineProps {
  title: string;
  subTitle: string;
}

export const Headline = ({ title, subTitle }: HeadlineProps) => {
  return (
    <Stack spacing={4} as={Container} maxW="3xl" textAlign="center" mb="10">
      <Heading textTransform="uppercase" fontSize="3xl">{title}</Heading>
      <Text color={useColorModeValue("gray.600", "white")} fontSize="lg">
        {subTitle}
      </Text>
    </Stack>
  );
};
