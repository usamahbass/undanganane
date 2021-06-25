import { Container } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";
import { PublicLayout } from "~/layout";
import { DefaultSEO } from "~/next-seo.config";
import { InvitationType, Features, Hero } from "~/views/home";

export default function Home() {
  return (
    <PublicLayout>
      <NextSeo {...DefaultSEO} />
      <Hero />
      <Container maxW="6xl">
        <Features />
        <InvitationType />
      </Container>
    </PublicLayout>
  );
}
