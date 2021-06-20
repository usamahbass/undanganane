import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import {
  DollarSign as FreeIcon,
  Tool as CustomIcon,
  Cloud as OnlineIcon,
} from "react-feather";
import { Headline } from "~/components";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  bg: string;
}

const Featured = [
  {
    title: "Gratis",
    subtitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    icon: FreeIcon,
    bg: "#EAF9FF",
    color: "#3DABDD",
  },
  {
    title: "Kostum",
    subtitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    icon: CustomIcon,
    bg: "#FAEBE1",
    color: "#EC8C4B",
  },
  {
    title: "Online",
    subtitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    icon: OnlineIcon,
    bg: "#E4FFEE",
    color: "#40975F",
  },
];

const Feature = ({ title, text, icon, bg }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg={bg}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export const Features = () => {
  return (
    <Box p={4}>
      <Headline
        title="Fitur"
        subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {Featured.map((el) => (
          <Feature
            icon={<Icon color={el.color} as={el.icon} w={10} h={10} />}
            title={el.title}
            bg={el.bg}
            text={el.subtitle}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
