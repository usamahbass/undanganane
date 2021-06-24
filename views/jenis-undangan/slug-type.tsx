import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { CardDesign, Headline } from "~/components";
import { DESAIN_TYPE } from "~/constants";
import { PublicLayout } from "~/layout";

interface SlugType {
  title?: string | string[] | undefined;
  subTitle?: string | string[] | undefined;
  desains?: Array<DESAIN_TYPE>;
}

export const SlugTypeViews = ({ title, subTitle, desains }: SlugType) => {
  return (
    <PublicLayout notRootPage>
      <Box p="5" mt="5rem" maxW="6xl" as={Container}>
        <Headline
          title={`Jenis undangan ${title} tipe ${subTitle}`}
          subTitle={`Ini nih jenis undangan ${title} tipe ${subTitle} di undanganane`}
        />

        <SimpleGrid columns={{ base: 1, md: 3 }} mt="20" spacing={10}>
          {desains?.map((el) => (
            <CardDesign
              key={uuidv4()}
              to={el.href}
              title={el.price}
              stat={el.title}
            />
          ))}
        </SimpleGrid>
      </Box>
    </PublicLayout>
  );
};
