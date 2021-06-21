import { Text, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { DescWedding, FrameImage } from "~/components";
import { WeddingLayout } from "~/layout";

export const DesignTwo = () => {
  return (
    <WeddingLayout fontFamily="Sofia">
      <FrameImage
        frame="/classic/frame-picture-2.png"
        image="https://avatars.githubusercontent.com/u/56109283?v=4"
      >
        <Box textAlign="center">
          <Text mb="3" fontFamily="Sofia">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </Text>
          <Text fontFamily="Nunito" fontSize="sm">
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
            serta kerabat sekalian untuk menghadiri pernikahan kami
          </Text>
        </Box>
      </FrameImage>

      <Box textAlign="center" as="section" mt="5" overflow="auto">
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

        <DescWedding
          date="20 Juni 2021"
          resepsi="19.00 - 20.00"
          akad="20.00 - 22.00"
          qr_code="qr kode"
          lokasi="Jalan Syekh Lemahabang no 36, Kabupaten Cirebon Jawa Barat"
        />
      </Box>
    </WeddingLayout>
  );
};
