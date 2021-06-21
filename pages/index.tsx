import { Container } from "@chakra-ui/layout";
import { PublicLayout } from "~/layout";
import { DesignView, Features, Hero } from "~/views/home";

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Container maxW="6xl">
        <Features />
        <DesignView />
      </Container>
    </PublicLayout>
  );
}
