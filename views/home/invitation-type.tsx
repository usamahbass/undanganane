import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { ArrowRight } from "react-feather";
import { v4 as uuiv4 } from "uuid";
import NextLink from "next/link";
import { CardDesign, Headline } from "~/components";
import { TYPE_OF_INVITATION } from "~/constants";

export const InvitationType = () => {
  return (
    <Box p="5" mt="10">
      <Headline
        title="Jenis Undangan"
        subTitle="Ini nih jenis undangan yang ada di undangan ane"
      />

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {TYPE_OF_INVITATION.slice(0, 3).map((el) => (
          <CardDesign
            key={uuiv4()}
            title={el.title}
            stat={`${el.template.length} jenis desain`}
            to={`/jenis-undangan/${el.type}`}
            icon={<ArrowRight />}
          />
        ))}
      </SimpleGrid>

      <NextLink href="/jenis-undangan">
        <Button
          display="flex"
          justifyContent="center"
          margin="4rem auto"
          color="primary.500"
          transition="all .3s ease-in-out 0s"
          _hover={{
            transform: "translateY(-10px)",
          }}
          rightIcon={<ArrowRight />}
        >
          Lihat Semua
        </Button>
      </NextLink>
    </Box>
  );
};
