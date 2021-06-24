import { useState } from "react";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Search } from "react-feather";
import { v4 as uuiv4 } from "uuid";
import { CardDesign, Headline } from "~/components";
import { TYPE_OF_INVITATION } from "~/constants";
import { PublicLayout } from "~/layout";
import { TypeInvitationSEO } from "~/next-seo.config";

export default function DesignPages() {
  const [search, setSearch] = useState<String>("");

  const resultsSearch = TYPE_OF_INVITATION.filter((el) =>
    el.title?.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const isEmpty = resultsSearch.length <= 0;

  return (
    <PublicLayout notRootPage>
      <NextSeo {...TypeInvitationSEO} />
      <Box p="5" mt="5rem" maxW="6xl" as={Container}>
        <Headline
          title="Jenis Undangan"
          subTitle="Ini nih jenis undangan yang ada di undanganane"
        />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search color="primary.300" />}
          />
          <Input
            type="text"
            placeholder="Cari jenis undangan"
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </InputGroup>

        <SimpleGrid columns={{ base: 1, md: 3 }} mt="10" spacing={10}>
          {resultsSearch.map((el) => (
            <CardDesign
              key={uuiv4()}
              title={el.title}
              stat={`${el.template.length} jenis desain`}
              to={`/jenis-undangan/${el.type}`}
            />
          ))}
        </SimpleGrid>

        {isEmpty && (
          <Text textAlign="center">"{search}" tidak ditemukan !</Text>
        )}
      </Box>
    </PublicLayout>
  );
}
