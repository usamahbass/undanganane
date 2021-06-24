import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { DescWedding } from "~/components";
import { WeddingLayout } from "~/layout";
import { InvitationSEO } from "~/next-seo.config";

export const DesignOne = () => {
  return (
    <WeddingLayout fontFamily="Sofia">
      <NextSeo
        {...InvitationSEO("Classic tanpa gambar", "classic/design-one")}
      />
      <Box pt="4rem">
        <Box textAlign="center" as="header" mb="5">
          <Text mb="3" fontFamily="Sofia">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </Text>
          <Text fontFamily="Nunito" fontSize="sm">
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
            serta kerabat sekalian untuk menghadiri pernikahan kami
          </Text>
        </Box>

        <Box textAlign="center" as="section">
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
      </Box>
    </WeddingLayout>
  );
};
