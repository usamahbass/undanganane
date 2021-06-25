import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { v4 as uuidv4 } from "uuid";
import { PublicLayout } from "~/layout";
import { TYPE_OF_INVITATION } from "~/constants";
import { CardDesign, Headline } from "~/components";
import { SlugTypeViews } from "~/views/jenis-undangan";
import { TypeInvitationSlugSEO } from "~/next-seo.config";

export default function SlugInvitationType() {
  const {
    push,
    query: { slug, type },
  } = useRouter();

  const findIsSame = TYPE_OF_INVITATION.find((el) => el.type === slug);

  const findTypeQuery = findIsSame?.template.find((el) => el.name === type);

  if (slug && findIsSame === undefined) {
    // check if slug not exist
    return push("/jenis-undangan");
  }

  if (type && findTypeQuery) {
    console.log(findTypeQuery, "HERE");
    return (
      <SlugTypeViews
        title={findIsSame?.title}
        subTitle={type}
        desains={findTypeQuery.desain}
      />
    );
  }

  return (
    <PublicLayout notRootPage>
      <NextSeo {...TypeInvitationSlugSEO(findIsSame?.title, type)} />
      <Box p="5" mt="5rem" maxW="6xl" as={Container}>
        <Headline
          title={`Jenis undangan ${findIsSame?.title}`}
          subTitle={`Ini nih jenis undangan ${findIsSame?.title} di undanganane`}
        />

        <SimpleGrid columns={{ base: 1, md: 3 }} mt="10" spacing={10}>
          {findIsSame?.template.map((el) => (
            <CardDesign
              to={`/jenis-undangan/${slug}?type=${el.name}`}
              key={uuidv4()}
              title={el.title}
              stat={`${el.amount} jenis desain`}
            />
          ))}
        </SimpleGrid>
      </Box>
    </PublicLayout>
  );
}
