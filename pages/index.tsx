import { PublicLayout } from "~/layout";
import { Features, Hero } from "~/views/home";

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Features />
    </PublicLayout>
  );
}
