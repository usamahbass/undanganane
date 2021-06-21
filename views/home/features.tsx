import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  DollarSign as FreeIcon,
  Tool as CustomIcon,
  Cloud as OnlineIcon,
  Moon as DarkModeIcon,
  WifiOff as OfflineIcon,
  Smartphone as ResponsiveIcon,
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
      "Yap, gaperlu ngeluarin kocek dah. Tinggal pilih template selesai.",
    icon: FreeIcon,
    bg: "info.100",
    color: "info.500",
  },
  {
    title: "Mudah",
    subtitle:
      "Pilih template desain yang ada, sesuaikan dengan undanganmu, simpan dan undanganmu sudah dapat dibagikan.",
    icon: CustomIcon,
    bg: "danger.100",
    color: "danger.500",
  },
  {
    title: "Online",
    subtitle:
      "Yap, pastilah masa enggak. Undanganmu pasti bisa diakses secara online.",
    icon: OnlineIcon,
    bg: "success.100",
    color: "success.500",
  },
  {
    title: "Dark Mode Support",
    subtitle:
      "Pengunjung yang melihat undanganmu juga bisa mendapatkan fitur dark mode, ya mode gelap. Biar ga sakit mata hehe.",
    icon: DarkModeIcon,
    bg: "warning.100",
    color: "warning.500",
  },
  {
    title: "Offline Support",
    subtitle:
      "Yap, undanganmu bisa diakses secara offline dan bisa di install lalu ditambahkan ke home hpmu layaknya aplikasi.",
    icon: OfflineIcon,
    bg: "success.100",
    color: "success.500",
  },
  {
    title: "Responsive",
    subtitle:
      "Tenang, undanganmu sudah pasti responsive kok. Bisa ditampilkan di berbagai macam device.",
    icon: ResponsiveIcon,
    bg: "primary.100",
    color: "primary.500",
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
      <Text color={useColorModeValue("gray.600", "#ccc")}>{text}</Text>
    </Stack>
  );
};

export const Features = () => {
  return (
    <Box p={4} mt="5">
      <Headline
        title="Fitur"
        subTitle="Ini nih fitur yang tersedia di undanganane"
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
