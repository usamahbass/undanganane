import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { AbsoluteImage } from "~/components";
import { WeddingLayout } from "~/layout";

export const DesignOne = () => {
  return (
    <WeddingLayout space fontFamily="Sofia">
      <Box as="header" mb="5">
        <Text mb="3" fontFamily="Sofia">
          Assalamualaikum Warahmatullahi Wabarakatuh
        </Text>
        <Text fontFamily="Nunito" fontSize="sm">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri pernikahan kami
        </Text>
      </Box>

      <Box as="section">
        <Box mb="5">
          <Heading
            fontFamily="Sofia"
            fontWeight="bold"
            color={useColorModeValue("black", "gold")}
          >
            Usamah Basalamah
          </Heading>
          <Text fontFamily="Nunito" fontSize="sm">
            Anak dari Bapak Fulan dan Ibu Fulanah
          </Text>
        </Box>

        <Text fontFamily="Nunito" fontSize="lg" mb="5">
          dan
        </Text>

        <Box mb="5">
          <Heading
            fontFamily="Sofia"
            fontWeight="bold"
            color={useColorModeValue("black", "gold")}
          >
            Fulanah
          </Heading>
          <Text fontFamily="Nunito" fontSize="sm">
            Anak dari Bapak Fulan dan Ibu Fulanah
          </Text>
        </Box>

        <Box mb="5">
          <Text fontFamily="Sofia" fontSize="lg">
            Resepsi
          </Text>

          <Text fontFamily="Nunito" fontSize="lg" mb="3">
            Tanggal: 20 Juni 2021
          </Text>

          <Text fontFamily="Nunito" fontSize="lg" mb="3">
            Jam: 17.00 - 20.00
          </Text>

          <Text fontFamily="Nunito" size="sm">
            Bertempat di
          </Text>
          <Text fontFamily="Nunito">Cirebon</Text>
        </Box>
      </Box>

      {/* ABSOLUTE IMAGE */}
      <AbsoluteImage src="/classic/flower-2.png" alt="flower" />
      <AbsoluteImage isTop src="/classic/flower-2.png" alt="flower" />
    </WeddingLayout>
  );
};
