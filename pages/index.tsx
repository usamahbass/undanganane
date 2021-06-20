import Layout from "~/layout";
import { Features, Hero } from "~/views/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
