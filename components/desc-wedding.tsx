import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";

interface DescWeddingProps {
  date: string;
  resepsi: string;
  akad: string;
  qr_code: string;
  lokasi: string;
}

export const DescWedding = ({
  date,
  resepsi,
  akad,
  qr_code,
  lokasi,
}: DescWeddingProps) => {
  const [isMobile] = useMediaQuery("(max-width: 670px)");
  return (
    <>
      <Box mb="5">
        <Text fontFamily="Sofia" fontSize="lg">
          Tanggal
        </Text>

        <Text fontFamily="Nunito" fontSize="md" mb="3">
          {date}
        </Text>
      </Box>

      <Flex mb="5" justify="space-around">
        <Box>
          <Text fontFamily="Sofia" fontSize="lg">
            Resepsi
          </Text>

          <Text fontFamily="Nunito" fontSize="md" mb="3">
            {resepsi}
          </Text>
        </Box>

        <Box>
          <Text fontFamily="Sofia" fontSize="lg">
            Akad
          </Text>

          <Text fontFamily="Nunito" fontSize="md" mb="3">
            {akad}
          </Text>
        </Box>
      </Flex>

      <Box mb="5">
        <Text fontFamily="Sofia" fontSize="lg">
          Lokasi
        </Text>

        <Flex justify="space-around" flexWrap="wrap">
          <Box mb="2">{qr_code}</Box>

          <Box>
            <Text
              fontFamily="Nunito"
              fontSize="sm"
              mb="3"
              textAlign={isMobile ? "center" : "left"}
              wordBreak="break-word"
            >
              {lokasi}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
