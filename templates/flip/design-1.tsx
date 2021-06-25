import { WeddingLayout } from "~/layout";
import dynamic from "next/dynamic";
import { Box, Heading } from "@chakra-ui/layout";

const FlipPage = dynamic(() => import("react-flip-page"), { ssr: false });

export const DesignOne = () => {
  return (
    <WeddingLayout fontFamily="Sofia">
      <FlipPage orientation="horizontal" height={100}>
        <article>
          <Box bg="black">
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>
            <Heading fontFamily="Nunito">Acara Pernikahan</Heading>

          </Box>
        </article>
        <article>
          <h1>My wonderful second article</h1>
          <p>My wonderful second content</p>
        </article>
        <article>
          <h1>My excellent third article</h1>
          <p>My excellent third content</p>
        </article>
      </FlipPage>
    </WeddingLayout>
  );
};
