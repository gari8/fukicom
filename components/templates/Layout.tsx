import Head from "next/head";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Main from "@/components/organisms/Main";
import { Box } from "@chakra-ui/react";
import { useMeta } from "@/hooks/useMeta";

export default function Layout({ children }) {
  const metaData = useMeta();

  return (
    <Box>
      <Head>
        <title>{metaData.title}</title>
        {metaData.metaData?.map((val, index) => {
          return <meta key={index} name={val.name} content={val.content} />;
        })}
        <link rel="icon" href={metaData.favicon} />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
}
